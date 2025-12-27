// MODERN PDF VIEWER — MOBILE-OPTIMIZED WITH GLASS EFFECTS & GSAP
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuestions } from "./contexts/QuestionContext";
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Download,
  ArrowLeft,
  Maximize2,
  X,
  FileText,
  Loader2,
  Home,
} from "lucide-react";
import gsap from "gsap";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowSize({
        width,
        height: window.innerHeight,
      });
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, windowSize };
}

export default function ModernPdfViewer() {
  const { id: subjectId, pdfId } = useParams();
  const { getSubject } = useQuestions();
  const { isMobile, windowSize } = useResponsive();

  const subject = getSubject(subjectId);
  const pdfMeta = subject?.pdfs?.find((p) => p.id === pdfId);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [inputPage, setInputPage] = useState("1");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const viewerRef = useRef(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const controlsRef = useRef(null);
  const pdfContainerRef = useRef(null);

  useEffect(() => {
    if (scale === null) {
      const defaultScale = isMobile ? 1.0 : 1.2;
      setScale(defaultScale);
    }
  }, [isMobile, scale]);

  useEffect(() => {
    setPageNumber(1);
    setInputPage("1");
  }, [pdfId]);

  // GSAP Animations on mount
  useEffect(() => {
    if (!pdfMeta) return;

    // Header entrance animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // Controls entrance animation
    if (controlsRef.current) {
      gsap.fromTo(
        controlsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.2 }
      );
    }

    // PDF container fade in
    if (pdfContainerRef.current) {
      gsap.fromTo(
        pdfContainerRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", delay: 0.4 }
      );
    }
  }, [pdfMeta]);

  // Animate page transitions
  useEffect(() => {
    if (pdfContainerRef.current && numPages) {
      gsap.fromTo(
        pdfContainerRef.current,
        { opacity: 0.5 },
        { opacity: 1, duration: 0.3, ease: "power1.out" }
      );
    }
  }, [pageNumber, numPages]);

  // Touch gesture support
  useEffect(() => {
    const container = viewerRef.current;
    if (!container) return;

    let touchStartDistance = 0;

    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        touchStartDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const touchEndDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        const diff = touchEndDistance - touchStartDistance;
        if (Math.abs(diff) > 10) {
          const zoomDirection = diff > 0 ? 1 : -1;
          setScale((s) =>
            Math.max(0.5, Math.min(3, s + zoomDirection * 0.1))
          );
          touchStartDistance = touchEndDistance;
        }
      }
    };

    container.addEventListener("touchstart", handleTouchStart, false);
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(177,158,239,0.1),transparent_50%)]" />
        <div className="text-center px-4 relative z-10 space-y-6">
          <div className="w-20 h-20 rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 flex items-center justify-center mx-auto">
            <FileText className="w-10 h-10 text-slate-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Subject Not Found</h2>
            <p className="text-slate-400 mb-6">The subject you're looking for doesn't exist.</p>
            <Link to="/subjects">
              <Button className="bg-gradient-to-r from-[#B19EEF] to-[#5227FF] hover:from-[#9f89e3] hover:to-[#4018dd] text-white px-6 h-12 font-semibold rounded-xl shadow-lg shadow-[#B19EEF]/30 transition-all duration-300 hover:scale-105">
                <Home className="w-5 h-5 mr-2" />
                Back to Subjects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!pdfMeta) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(177,158,239,0.1),transparent_50%)]" />
        <div className="text-center px-4 relative z-10 space-y-6">
          <div className="w-20 h-20 rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 flex items-center justify-center mx-auto">
            <FileText className="w-10 h-10 text-slate-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">PDF Not Found</h2>
            <p className="text-slate-400 mb-6">The PDF document doesn't exist.</p>
            <Link to={`/subject/${subjectId}/pdfs`}>
              <Button className="bg-gradient-to-r from-[#B19EEF] to-[#5227FF] hover:from-[#9f89e3] hover:to-[#4018dd] text-white px-6 h-12 font-semibold rounded-xl shadow-lg shadow-[#B19EEF]/30 transition-all duration-300 hover:scale-105">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to PDFs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const goToPage = (p) => {
    if (!numPages) return;
    const page = Math.max(1, Math.min(numPages, p));
    setPageNumber(page);
    setInputPage(page.toString());
    viewerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleZoomIn = () => {
    setScale((s) => {
      const newScale = Math.min(3, s + 0.1);
      // Animate zoom
      if (pdfContainerRef.current) {
        gsap.fromTo(
          pdfContainerRef.current,
          { scale: 1 },
          { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 }
        );
      }
      return newScale;
    });
  };

  const handleZoomOut = () => {
    setScale((s) => {
      const newScale = Math.max(0.5, s - 0.1);
      // Animate zoom
      if (pdfContainerRef.current) {
        gsap.fromTo(
          pdfContainerRef.current,
          { scale: 1 },
          { scale: 0.95, duration: 0.2, yoyo: true, repeat: 1 }
        );
      }
      return newScale;
    });
  };

  const handleRotate = () => {
    setRotation((r) => {
      // Animate rotation
      if (pdfContainerRef.current) {
        gsap.to(pdfContainerRef.current, {
          rotation: 360,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(pdfContainerRef.current, { rotation: 0 });
          },
        });
      }
      return (r + 90) % 360;
    });
  };

  return (
    <div
      ref={containerRef}
      className={`w-full ${
        isFullscreen ? "fixed inset-0 flex flex-col bg-slate-950" : "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
      } text-white ${
        !isFullscreen && "py-4 md:py-6"
      }`}
    >
      {/* Header */}
      {!isFullscreen && (
        <div ref={headerRef} className="max-w-6xl mx-auto w-full px-3 md:px-4 mb-3 md:mb-6 flex-shrink-0">
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 md:p-6 shadow-xl"
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="min-w-0 flex-1 flex items-center gap-4">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center border shadow-lg flex-shrink-0"
                  style={{
                    backgroundColor: `${subject.color}20`,
                    borderColor: `${subject.color}40`,
                    boxShadow: `0 8px 16px ${subject.color}20`,
                  }}
                >
                  <FileText
                    style={{ color: subject.color }}
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg md:text-2xl font-bold truncate">
                    {pdfMeta.title}
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400 truncate">
                    {subject.title}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 flex-shrink-0">
                <a href={pdfMeta.file} download className="flex-1 sm:flex-none">
                  <Button 
                    className="w-full bg-slate-700/50 hover:bg-slate-700 text-white backdrop-blur-sm border border-slate-600/50 hover:border-slate-500 transition-all duration-300 h-10 md:h-11 rounded-xl font-semibold"
                    style={{
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Download</span>
                  </Button>
                </a>

                <Link
                  to={`/subject/${subjectId}/pdfs`}
                  className="flex-1 sm:flex-none"
                >
                  <Button 
                    className="w-full text-white backdrop-blur-sm transition-all duration-300 h-10 md:h-11 rounded-xl font-semibold shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${subject.color}, ${subject.color}dd)`,
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Back</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Controls - Above PDF */}
      {!isMobile && !isFullscreen && (
        <div 
          ref={controlsRef}
          className="flex-shrink-0 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 mx-auto max-w-6xl w-full mb-4 flex items-center justify-between gap-4 shadow-xl"
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
        >
          {/* Zoom Controls */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={handleZoomOut}
              className="h-11 w-11 bg-slate-700/50 hover:bg-slate-700 border-slate-600/50 hover:border-slate-500 transition-all duration-300 rounded-xl"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-5 h-5" />
            </Button>

            <div className="px-4 py-2 bg-slate-700/30 backdrop-blur-sm rounded-xl border border-slate-600/50">
              <span className="text-sm font-mono font-semibold">
                {Math.round(scale * 100)}%
              </span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleZoomIn}
              className="h-11 w-11 bg-slate-700/50 hover:bg-slate-700 border-slate-600/50 hover:border-slate-500 transition-all duration-300 rounded-xl"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-5 h-5" />
            </Button>

            <div className="w-px h-8 bg-slate-700/50" />

            <Button
              variant="outline"
              size="icon"
              onClick={handleRotate}
              className="h-11 w-11 bg-slate-700/50 hover:bg-slate-700 border-slate-600/50 hover:border-slate-500 transition-all duration-300 rounded-xl"
              aria-label="Rotate page"
            >
              <RotateCw className="w-5 h-5" />
            </Button>
          </div>

          {/* Page Navigation */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(pageNumber - 1)}
              disabled={pageNumber <= 1}
              className="h-11 w-11 bg-slate-700/50 hover:bg-slate-700 border-slate-600/50 hover:border-slate-500 transition-all duration-300 rounded-xl disabled:opacity-50"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-3 px-4 py-2 bg-slate-700/30 backdrop-blur-sm rounded-xl border border-slate-600/50">
              <input
                type="number"
                value={inputPage}
                onChange={(e) => setInputPage(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && goToPage(Number(inputPage))
                }
                className="w-16 text-center px-2 py-1.5 rounded-lg bg-slate-800/50 text-white border border-slate-600/50 text-sm font-semibold focus:outline-none focus:border-[#B19EEF]/50 transition-colors"
                aria-label="Go to page number"
              />
              <span className="text-sm font-semibold text-slate-400">
                / {numPages ?? "—"}
              </span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(pageNumber + 1)}
              disabled={numPages && pageNumber >= numPages}
              className="h-11 w-11 bg-slate-700/50 hover:bg-slate-700 border-slate-600/50 hover:border-slate-500 transition-all duration-300 rounded-xl disabled:opacity-50"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}

      {/* PDF Viewer */}
      <div
        ref={viewerRef}
        className={`flex-1 overflow-auto ${
          isMobile ? "bg-slate-900 mb-40" : "bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl mx-auto max-w-6xl w-full border border-slate-700/30"
        }`}
      >
        <Document
          file={pdfMeta.file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-screen">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#B19EEF]/20 backdrop-blur-xl border border-[#B19EEF]/30 flex items-center justify-center mx-auto">
                  <Loader2 className="w-8 h-8 text-[#B19EEF] animate-spin" />
                </div>
                <p className="text-white font-semibold">Loading PDF...</p>
              </div>
            </div>
          }
        >
          <div ref={pdfContainerRef} className="flex flex-col items-center justify-start p-3 md:p-6">
            <Page
              pageNumber={pageNumber}
              scale={scale}
              rotate={rotation}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </div>
        </Document>
      </div>

      {/* Mobile Controls - Fixed at Bottom */}
      {isMobile && (
        <div 
          className="fixed bottom-0 left-0 right-0 bg-slate-800/95 backdrop-blur-2xl border-t border-slate-700/50 p-4 flex flex-col gap-3 z-50 shadow-2xl"
          style={{
            backdropFilter: "blur(30px) saturate(180%)",
            WebkitBackdropFilter: "blur(30px) saturate(180%)",
          }}
        >
          {/* Zoom & Fullscreen Row */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomOut}
                className="h-10 w-10 bg-slate-700/50 hover:bg-slate-700 border-slate-600/50 rounded-xl"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </Button>

              <div className="px-3 py-2 bg-slate-700/30 backdrop-blur-sm rounded-xl border border-slate-600/50">
                <span className="text-xs font-mono font-semibold">
                  {Math.round(scale * 100)}%
                </span>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomIn}
                className="h-10 w-10 bg-slate-700/50 hover:bg-slate-700 border-slate-600/50 rounded-xl"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleRotate}
                className="h-10 w-10 bg-slate-700/50 hover:bg-slate-700 border-slate-600/50 rounded-xl"
                aria-label="Rotate page"
              >
                <RotateCw className="w-4 h-4" />
              </Button>
            </div>

            {/* Fullscreen toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="h-10 w-10 bg-slate-700/50 hover:bg-slate-700 border-slate-600/50 rounded-xl"
              aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? (
                <X className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Page Navigation Row */}
          <div className="flex items-center justify-between w-full">
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(pageNumber - 1)}
              disabled={pageNumber <= 1}
              className="h-10 w-10 bg-slate-700/50 hover:bg-slate-700 border-slate-600/50 rounded-xl disabled:opacity-50"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex items-center gap-2 flex-1 justify-center px-3 py-2 bg-slate-700/30 backdrop-blur-sm rounded-xl border border-slate-600/50 mx-2">
              <input
                type="number"
                value={inputPage}
                onChange={(e) => setInputPage(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && goToPage(Number(inputPage))
                }
                className="w-14 text-center px-2 py-1.5 rounded-lg bg-slate-800/50 text-white border border-slate-600/50 text-sm font-semibold focus:outline-none focus:border-[#B19EEF]/50"
                aria-label="Go to page number"
              />
              <span className="text-xs font-semibold text-slate-400">
                / {numPages ?? "—"}
              </span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(pageNumber + 1)}
              disabled={numPages && pageNumber >= numPages}
              className="h-10 w-10 bg-slate-700/50 hover:bg-slate-700 border-slate-600/50 rounded-xl disabled:opacity-50"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Hint Text */}
          <div className="text-center text-xs text-slate-500 pt-1 font-medium">
            Pinch to zoom • Swipe to scroll
          </div>
        </div>
      )}
    </div>
  );
}