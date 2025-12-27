import { Link, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useQuestions } from "./contexts/QuestionContext";
import {
  ArrowLeft,
  Trophy,
  BookOpen,
  Sparkles,
  Play,
  ChevronRight,
  FileText,
  Target,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ModernSubjectDetails() {
  const { id } = useParams();
  const { getSubject, getChaptersBySubject } = useQuestions();
  const subject = getSubject(id);
  const chapters = getChaptersBySubject(id) || [];

  const headerRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const cardsRef = useRef([]);
  const floatingElements = useRef([]);
  const emptyStateRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!subject) return;

    // Breadcrumb animation
    if (breadcrumbRef.current) {
      gsap.fromTo(
        breadcrumbRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }

    // Stats animation
    if (statsRef.current && chapters.length > 0) {
      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.4)",
          delay: 0.4,
        }
      );
    }

    // Floating background elements
    floatingElements.current.forEach((el, i) => {
      if (el) {
        gsap.to(el, {
          y: "random(-40, 40)",
          x: "random(-40, 40)",
          rotation: "random(-20, 20)",
          duration: "random(5, 8)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      }
    });

    // Cards stagger animation with scroll trigger
    if (chapters.length > 0) {
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { 
              opacity: 0, 
              y: 50,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "back.out(1.4)",
              delay: 0.6 + i * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Hover animation
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -8,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          };

          card.addEventListener("mouseenter", handleMouseEnter);
          card.addEventListener("mouseleave", handleMouseLeave);
        }
      });
    }

    // Empty state animation
    if (emptyStateRef.current) {
      gsap.fromTo(
        emptyStateRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.4)", delay: 0.6 }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [subject, chapters.length]);

  if (!subject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(177,158,239,0.1),transparent_50%)]" />
        <div className="text-center relative z-10 space-y-6">
          <div className="w-20 h-20 rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 flex items-center justify-center mx-auto">
            <BookOpen className="w-10 h-10 text-slate-500" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Subject Not Found</h2>
            <p className="text-slate-400 mb-6">The subject you're looking for doesn't exist.</p>
            <Link to="/subjects">
              <Button className="bg-gradient-to-r from-[#B19EEF] to-[#5227FF] hover:from-[#9f89e3] hover:to-[#4018dd] text-white px-6 h-12 font-semibold rounded-xl shadow-lg shadow-[#B19EEF]/30 transition-all duration-300 hover:scale-105">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Subjects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const Icon = subject.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={(el) => (floatingElements.current[0] = el)}
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `${subject.color}15` }}
        />
        <div
          ref={(el) => (floatingElements.current[1] = el)}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#5227FF]/10 rounded-full blur-3xl"
        />
        <div
          ref={(el) => (floatingElements.current[2] = el)}
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 p-6 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <div ref={breadcrumbRef}>
            <Link to="/subjects">
              <Button
                variant="ghost"
                className="text-slate-400 hover:text-white hover:bg-slate-800/50 backdrop-blur-sm rounded-xl transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Subjects
              </Button>
            </Link>
          </div>

          {/* Header Section */}
          <div ref={headerRef} className="space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Subject Icon */}
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center border-2 shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300"
                style={{
                  backgroundColor: `${subject.color}20`,
                  borderColor: `${subject.color}40`,
                  boxShadow: `0 20px 40px ${subject.color}30`,
                }}
              >
                <Icon
                  style={{ color: subject.color }}
                  className="w-12 h-12"
                />
              </div>

              {/* Title Section */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    {subject.title}
                  </h1>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B19EEF]/10 backdrop-blur-sm rounded-full border border-[#B19EEF]/20">
                    <BookOpen className="w-4 h-4 text-[#B19EEF]" />
                    <span className="text-sm font-semibold text-[#B19EEF]">
                      {chapters.length} Chapter{chapters.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
                <p className="text-xl text-slate-400">{subject.description}</p>
              </div>
            </div>

            {/* Stats Bar */}
            {chapters.length > 0 && (
              <div
                ref={statsRef}
                className="flex flex-wrap items-center gap-4"
              >
                <div
                  className="group bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-6 py-4 hover:bg-slate-800/60 hover:border-[#B19EEF]/30 transition-all duration-300 cursor-default"
                  style={{
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#B19EEF]/10 group-hover:bg-[#B19EEF]/20 border border-[#B19EEF]/20 flex items-center justify-center transition-all duration-300">
                      <Target className="w-5 h-5 text-[#B19EEF]" />
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold text-white">{chapters.length}</p>
                      <p className="text-xs text-slate-400 font-medium">Available Quizzes</p>
                    </div>
                  </div>
                </div>

                <div
                  className="group bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-6 py-4 hover:bg-slate-800/60 hover:border-emerald-500/30 transition-all duration-300 cursor-default"
                  style={{
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center transition-all duration-300">
                      <Zap className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold text-white">Interactive</p>
                      <p className="text-xs text-slate-400 font-medium">Learning Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Decorative divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>

          {/* Chapters Grid */}
          {chapters.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
              {chapters.map((chapter, index) => (
                <div
                  key={chapter.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group"
                >
                  <Card
                    className="bg-slate-800/30 backdrop-blur-2xl border-slate-700/50 hover:bg-slate-800/40 transition-all duration-500 h-full overflow-hidden relative"
                    style={{
                      backdropFilter: "blur(20px) saturate(180%)",
                      WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{
                        background: `linear-gradient(90deg, ${subject.color}, transparent)`,
                      }}
                    />

                    {/* Gradient overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at top right, ${subject.color}10, transparent 70%)`,
                      }}
                    />

                    <CardHeader className="relative z-10 space-y-4">
                      {/* Chapter Number Badge */}
                      <div className="flex items-start justify-between">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
                          style={{
                            backgroundColor: `${subject.color}15`,
                            borderColor: `${subject.color}30`,
                            boxShadow: `0 8px 16px ${subject.color}20`,
                          }}
                        >
                          <span
                            className="text-2xl font-bold"
                            style={{ color: subject.color }}
                          >
                            {index + 1}
                          </span>
                        </div>
                        <Sparkles className="w-5 h-5 text-slate-600 group-hover:text-[#B19EEF] transition-colors duration-300" />
                      </div>

                      {/* Title & Description */}
                      <div>
                        <CardTitle className="text-white text-xl font-bold group-hover:text-[#B19EEF] transition-colors duration-300 line-clamp-2">
                          {chapter.title}
                        </CardTitle>
                        <CardDescription className="text-slate-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                          {chapter.description}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <Link to={`/quiz/${chapter.id}`} className="block">
                        <Button
                          className="w-full text-white backdrop-blur-sm transition-all duration-300 group/btn h-12 rounded-xl font-semibold shadow-lg hover:shadow-xl"
                          style={{
                            background: `linear-gradient(135deg, ${subject.color}, ${subject.color}dd)`,
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = `0 12px 24px ${subject.color}40`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Start Quiz
                          <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>

                    {/* Bottom glow effect */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                      style={{
                        background: `linear-gradient(to top, ${subject.color}15, transparent)`,
                      }}
                    />
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div
              ref={emptyStateRef}
              className="flex flex-col items-center justify-center py-20 px-6"
            >
              <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 max-w-md w-full text-center space-y-6">
                <div className="w-24 h-24 rounded-full bg-slate-700/30 backdrop-blur-sm flex items-center justify-center mx-auto border border-slate-600/50">
                  <FileText className="w-12 h-12 text-slate-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">No Chapters Available</h3>
                  <p className="text-slate-400 leading-relaxed">
                    There are no quiz chapters available for {subject.title} at the moment. Check back soon!
                  </p>
                </div>
                <Link to="/subjects">
                  <Button
                    className="bg-gradient-to-r from-[#B19EEF] to-[#5227FF] hover:from-[#9f89e3] hover:to-[#4018dd] text-white px-6 h-12 font-semibold rounded-xl shadow-lg shadow-[#B19EEF]/30 transition-all duration-300 hover:scale-105"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Browse Other Subjects
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}