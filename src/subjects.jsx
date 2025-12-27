import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SUBJECTS_DATA } from "./data/quizData";
import { 
  BookOpen, 
  FileText, 
  Trophy, 
  Sparkles, 
  ArrowRight,
  GraduationCap,
  TrendingUp
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ModernSubjects() {
  const subjects = Object.values(SUBJECTS_DATA);
  
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const floatingElements = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    // Hero entrance animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Floating background elements
    floatingElements.current.forEach((el, i) => {
      if (el) {
        gsap.to(el, {
          y: "random(-30, 30)",
          x: "random(-30, 30)",
          rotation: "random(-15, 15)",
          duration: "random(4, 7)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      }
    });

    // Stats counter animation
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.4)",
          delay: 0.5,
        }
      );
    }

    // Cards stagger animation with scroll trigger
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.2)",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Mock stats - you can replace with real data
  const stats = [
    { label: "Total Subjects", value: subjects.length, icon: BookOpen },
    { label: "Active Quizzes", value: "24+", icon: Trophy },
    { label: "Success Rate", value: "89%", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={(el) => (floatingElements.current[0] = el)}
          className="absolute top-20 left-10 w-96 h-96 bg-[#B19EEF]/10 rounded-full blur-3xl"
        />
        <div
          ref={(el) => (floatingElements.current[1] = el)}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#5227FF]/10 rounded-full blur-3xl"
        />
        <div
          ref={(el) => (floatingElements.current[2] = el)}
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        />
        <div
          ref={(el) => (floatingElements.current[3] = el)}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 p-6 md:p-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Hero Section */}
          <div ref={heroRef} className="text-center space-y-6 pt-12 pb-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B19EEF]/10 backdrop-blur-xl rounded-full border border-[#B19EEF]/20">
              <Sparkles className="w-4 h-4 text-[#B19EEF]" />
              <span className="text-sm font-semibold text-[#B19EEF]">
                Explore Your Learning Path
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Choose Your
                <span className="block bg-gradient-to-r from-[#B19EEF] to-[#5227FF] bg-clip-text text-transparent">
                  Subject
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
                Select a subject to access comprehensive study materials and interactive quizzes
              </p>
            </div>

            {/* Stats Bar */}
            <div
              ref={statsRef}
              className="flex flex-wrap items-center justify-center gap-4 pt-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-6 py-4 hover:bg-slate-800/60 hover:border-[#B19EEF]/30 transition-all duration-300 cursor-default"
                    style={{
                      backdropFilter: "blur(20px) saturate(180%)",
                      WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#B19EEF]/10 group-hover:bg-[#B19EEF]/20 border border-[#B19EEF]/20 flex items-center justify-center transition-all duration-300">
                        <Icon className="w-5 h-5 text-[#B19EEF]" />
                      </div>
                      <div className="text-left">
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subject Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <div
                  key={subject.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group"
                >
                  <Card
                    className="border-slate-700/50 bg-slate-800/30 backdrop-blur-2xl hover:bg-slate-800/40 transition-all duration-500 h-full overflow-hidden relative"
                    style={{
                      backdropFilter: "blur(20px) saturate(180%)",
                      WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at top right, ${subject.color}15, transparent 70%)`,
                      }}
                    />

                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{
                        background: `linear-gradient(90deg, ${subject.color}, transparent)`,
                      }}
                    />

                    <CardHeader className="relative z-10">
                      <div className="flex items-start gap-4">
                        {/* Icon Container */}
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                          style={{
                            backgroundColor: `${subject.color}15`,
                            borderColor: `${subject.color}40`,
                            boxShadow: `0 8px 16px ${subject.color}20`,
                          }}
                        >
                          <Icon
                            style={{ color: subject.color }}
                            className="w-8 h-8"
                          />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 space-y-2">
                          <CardTitle className="text-white text-2xl font-bold group-hover:text-[#B19EEF] transition-colors duration-300">
                            {subject.title}
                          </CardTitle>
                          <CardDescription className="text-slate-400 text-sm leading-relaxed">
                            {subject.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 space-y-3">
                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-3">
                        <Link to={`/subject/${subject.id}/pdfs`} className="flex-1">
                          <Button
                            className="w-full bg-slate-700/50 hover:bg-slate-700 text-white backdrop-blur-sm border border-slate-600/50 hover:border-slate-500 transition-all duration-300 group/btn h-12 rounded-xl font-semibold shadow-lg hover:shadow-xl"
                            style={{
                              backdropFilter: "blur(10px)",
                              WebkitBackdropFilter: "blur(10px)",
                            }}
                          >
                            <FileText className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            PDFs
                          </Button>
                        </Link>

                        <Link to={`/subject/${subject.id}`} className="flex-1">
                          <Button
                            className="w-full text-white backdrop-blur-sm transition-all duration-300 group/btn h-12 rounded-xl font-semibold shadow-lg hover:shadow-2xl border-2"
                            style={{
                              background: `linear-gradient(135deg, ${subject.color}, ${subject.color}dd)`,
                              borderColor: `${subject.color}`,
                              backdropFilter: "blur(10px)",
                              WebkitBackdropFilter: "blur(10px)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-2px)";
                              e.currentTarget.style.boxShadow = `0 12px 24px ${subject.color}40`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow = "";
                            }}
                          >
                            <Trophy className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Quizzes
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>

                      {/* Quick Stats (optional) */}
                      <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          12 Chapters
                        </span>
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          248 Students
                        </span>
                      </div>
                    </CardContent>

                    {/* Bottom glow effect */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                      style={{
                        background: `linear-gradient(to top, ${subject.color}20, transparent)`,
                      }}
                    />
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="text-center pb-12">
            <div className="inline-flex flex-col items-center gap-4 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B19EEF]/20 to-[#5227FF]/20 flex items-center justify-center border border-[#B19EEF]/30">
                <Sparkles className="w-8 h-8 text-[#B19EEF]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Can't find what you're looking for?
                </h3>
                <p className="text-slate-400">
                  Request new subjects or suggest improvements
                </p>
              </div>
              <Button
                className="bg-gradient-to-r from-[#B19EEF] to-[#5227FF] hover:from-[#9f89e3] hover:to-[#4018dd] text-white px-8 h-12 font-bold shadow-lg shadow-[#B19EEF]/30 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}