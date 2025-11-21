import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const StaggeredMenu = ({
  position = "right",
  colors = ["#B19EEF", "#5227FF"],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  menuButtonColor = "#B19EEF",
  openMenuButtonColor = "#B19EEF",
  changeMenuColorOnOpen = true,
  isFixed = false,
  accentColor = "#5227FF",
  onMenuOpen,
  onMenuClose,
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);
  const plusHRef = useRef(null);
  const plusVRef = useRef(null);
  const iconRef = useRef(null);
  const textInnerRef = useRef(null);
  const textWrapRef = useRef(null);
  const [textLines, setTextLines] = useState(["Menu", "Close"]);
  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const spinTweenRef = useRef(null);
  const textCycleAnimRef = useRef(null);
  const colorTweenRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;

      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll(".sm-prelayer"));
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === "left" ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });
      gsap.set(plusH, { transformOrigin: "50% 50%", rotate: 0 });
      gsap.set(plusV, { transformOrigin: "50% 50%", rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: "50% 50%" });
      gsap.set(textInner, { yPercent: 0 });

      // Ensure button color is set
      if (toggleBtnRef.current) {
        gsap.set(toggleBtnRef.current, {
          color: menuButtonColor,
          immediateRender: true,
        });
      }
    });

    return () => ctx.revert();
  }, [menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
    const numberEls = Array.from(
      panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")
    );
    const socialTitle = panel.querySelector(".sm-socials-title");
    const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"));

    const layerStates = layers.map((el) => ({
      el,
      start: Number(gsap.getProperty(el, "xPercent")),
    }));

    const panelStart = Number(gsap.getProperty(panel, "xPercent"));

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { "--sm-num-opacity": 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(
        ls.el,
        { xPercent: ls.start },
        { xPercent: 0, duration: 0.5, ease: "power4.out" },
        i * 0.07
      );
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: "power4.out" },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: "power4.out",
          stagger: { each: 0.1, from: "start" },
        },
        itemsStart
      );

      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: "power2.out",
            "--sm-num-opacity": 1,
            stagger: { each: 0.08, from: "start" },
          },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;

      if (socialTitle)
        tl.to(
          socialTitle,
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          socialsStart
        );

      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: { each: 0.08, from: "start" },
            onComplete: () => gsap.set(socialLinks, { clearProps: "opacity" }),
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;

    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback("onComplete", () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();

    const offscreen = position === "left" ? -100 : 100;

    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: "power3.in",
      overwrite: "auto",
      onComplete: () => {
        const itemEls = Array.from(
          panel.querySelectorAll(".sm-panel-itemLabel")
        );
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });

        const numberEls = Array.from(
          panel.querySelectorAll(
            ".sm-panel-list[data-numbering] .sm-panel-item"
          )
        );
        if (numberEls.length) gsap.set(numberEls, { "--sm-num-opacity": 0 });

        const socialTitle = panel.querySelector(".sm-socials-title");
        const socialLinks = Array.from(
          panel.querySelectorAll(".sm-socials-link")
        );
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

        busyRef.current = false;
      },
    });
  }, [position]);

  const animateIcon = useCallback((opening) => {
    const icon = iconRef.current;
    const h = plusHRef.current;
    const v = plusVRef.current;
    if (!icon || !h || !v) return;

    spinTweenRef.current?.kill();

    if (opening) {
      gsap.set(icon, { rotate: 0, transformOrigin: "50% 50%" });
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(h, { rotate: 45, duration: 0.5 }, 0)
        .to(v, { rotate: -45, duration: 0.5 }, 0);
    } else {
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: "power3.inOut" } })
        .to(h, { rotate: 0, duration: 0.35 }, 0)
        .to(v, { rotate: 90, duration: 0.35 }, 0)
        .to(icon, { rotate: 0, duration: 0.001 }, 0);
    }
  }, []);

  const animateColor = useCallback(
    (opening) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;

      colorTweenRef.current?.kill();

      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        colorTweenRef.current = gsap.to(btn, {
          color: targetColor,
          delay: 0.18,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  );

  const animateText = useCallback((opening) => {
    const inner = textInnerRef.current;
    if (!inner) return;

    textCycleAnimRef.current?.kill();

    const currentLabel = opening ? "Menu" : "Close";
    const targetLabel = opening ? "Close" : "Menu";

    const cycles = 3;
    const seq = [currentLabel];
    let last = currentLabel;

    for (let i = 0; i < cycles; i++) {
      last = last === "Menu" ? "Close" : "Menu";
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);

    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });

    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;

    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: "power4.out",
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }

    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [
    playOpen,
    playClose,
    animateIcon,
    animateColor,
    animateText,
    onMenuOpen,
    onMenuClose,
  ]);

  return (
    <>
      {/* Main wrapper - full page overlay */}
      <div
        className={`sm-wrapper ${className || ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "100vh",
          width: "100vw",
          pointerEvents: open ? "auto" : "none",
          visibility: open ? "visible" : "hidden",
          zIndex: 9998,
        }}
      >
        {/* Backdrop overlay */}
        {open && (
          <div
            className="sm-backdrop"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9998,
            }}
            onClick={toggleMenu}
          />
        )}

        {/* Pre-layers container */}
        <div
          ref={preLayersRef}
          className="sm-prelayers"
          style={{
            position: "fixed",
            top: 0,
            [position]: 0,
            height: "100vh",
            width: "400px",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          {colors.slice(0, -1).map((color, i) => (
            <div
              key={i}
              className="sm-prelayer"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: color,
              }}
            />
          ))}
        </div>

        {/* Main panel */}
        <div
          ref={panelRef}
          className="sm-panel"
          style={{
            position: "fixed",
            top: 0,
            [position]: 0,
            height: "100vh",
            width: "400px",
            backgroundColor: colors[colors.length - 1],
            overflowY: "auto",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 10000,
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
         

          {/* Menu items */}
          {items.length > 0 && (
            <nav
              className="sm-panel-list"
              data-numbering={displayItemNumbering ? "true" : undefined}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="sm-panel-item"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    "--sm-num-opacity": 0,
                  }}
                >
                  {displayItemNumbering && (
                    <span
                      className="sm-panel-itemNumber"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        fontSize: "0.75rem",
                        opacity: "var(--sm-num-opacity)",
                        color: accentColor,
                        fontWeight: "bold",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  )}
                  <a
                    href={item.link}
                    className="sm-panel-itemLabel"
                    aria-label={item.ariaLabel || item.label}
                    style={{
                      display: "inline-block",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#fff",
                      textDecoration: "none",
                      paddingLeft: displayItemNumbering ? "3rem" : "0",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = accentColor)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </nav>
          )}

          {/* Social links */}
          {displaySocials && socialItems.length > 0 && (
            <div
              className="sm-socials"
              style={{
                marginTop: "auto",
                paddingTop: "2rem",
                flexShrink: 0,
              }}
            >
              <div
                className="sm-socials-title"
                style={{
                  fontSize: "0.875rem",
                  color: "#fff",
                  opacity: 0.6,
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Follow Me
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {socialItems.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="sm-socials-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "1rem",
                      color: "#fff",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = accentColor)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toggle button - always visible */}

      <button
        ref={toggleBtnRef}
        onClick={toggleMenu}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="sm-toggle"
        style={{
          position: isFixed ? "fixed" : "absolute",
          top: "2rem",
          [position]: "2rem",
          zIndex: 10001,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
         color: menuButtonColor,

        }}
      >
        <div
          ref={iconRef}
          className="sm-toggle-icon"
          style={{
            width: "24px",
            height: "24px",
            position: "relative",
          }}
        >
          <div
            ref={plusHRef}
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              width: "100%",
              height: "2px",
              backgroundColor: "currentColor",
              transform: "translateY(-50%)",
            }}
          />
          <div
            ref={plusVRef}
            style={{
              position: "absolute",
              left: "50%",
              top: "0",
              width: "2px",
              height: "100%",
              backgroundColor: "currentColor",
              transform: "translateX(-50%)",
            }}
          />
        </div>

        <div
          ref={textWrapRef}
          className="sm-toggle-text"
          style={{
            height: "1.2em",
            overflow: "hidden",
            fontSize: "0.75rem",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          <div
            ref={textInnerRef}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {textLines.map((line, i) => (
              <div key={i} style={{ height: "1.2em", lineHeight: "1.2em" }}>
                {line}
              </div>
            ))}
          </div>
        </div>
      </button>
    </>
  );
};

export default StaggeredMenu;
