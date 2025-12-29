import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  Play,
  CheckCircle2,
  Zap,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  BookOpen,
  Trophy,
  Target,
} from "lucide-react";
import gsap from "gsap";

export default function ModernHome() {
  const headerRef = useRef(null);
  const heroCardRef = useRef(null);
  const featuresCardRef = useRef(null);
  const featuresItemsRef = useRef([]);
  const floatingElements = useRef([]);
  const badgeRef = useRef(null);

  useEffect(() => {
    // Badge entrance
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          ease: "back.out(2)",
        }
      );
    }

    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.15, 
          duration: 0.8, 
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }

    // Hero card animation
    if (heroCardRef.current) {
      gsap.fromTo(
        heroCardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          ease: "back.out(1.4)",
          delay: 0.6,
        }
      );
    }

    // Features card animation
    if (featuresCardRef.current) {
      gsap.fromTo(
        featuresCardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          ease: "back.out(1.4)",
          delay: 0.8,
        }
      );
    }

    // Features items stagger
    if (featuresItemsRef.current.length > 0) {
      gsap.fromTo(
        featuresItemsRef.current,
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0, 
          stagger: 0.15, 
          duration: 0.6, 
          ease: "power2.out",
          delay: 1.2,
        }
      );
    }

    // Floating background elements
    floatingElements.current.forEach((el, i) => {
      if (el) {
        gsap.to(el, {
          y: "random(-50, 50)",
          x: "random(-50, 50)",
          rotation: "random(-20, 20)",
          duration: "random(6, 10)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      }
    });

    // Sparkle animation on badge
    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        rotation: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
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

      <div className="max-w-5xl w-full space-y-8 md:space-y-12 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="text-center space-y-6">
          <div 
            ref={badgeRef}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#B19EEF]/20 to-[#5227FF]/20 backdrop-blur-xl border border-[#B19EEF]/30 mb-4 shadow-2xl shadow-[#B19EEF]/20"
          >
            <Award className="w-10 h-10 text-[#B19EEF]" />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              <span className="block">Quiz Master</span>
              <span className="block bg-gradient-to-r from-[#B19EEF] to-[#5227FF] bg-clip-text text-transparent">
                Learn Smarter
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Test your knowledge with interactive quizzes and track your progress with real-time feedback
            </p>
          </div>

          {/* Quick stats */}
          <div className="flex items-center justify-center gap-4 flex-wrap pt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-slate-700/50">
              <BookOpen className="w-4 h-4 text-[#B19EEF]" />
              <span className="text-sm font-semibold text-slate-300">5 Subjects</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-slate-700/50">
              <Target className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-slate-300">Interactive Quizzes</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-slate-700/50">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-slate-300">Track Progress</span>
            </div>
          </div>
        </div>

        {/* Main Action Card */}
        <div ref={heroCardRef} className="group">
          <Card 
            className="border-slate-700/50 bg-slate-800/30 backdrop-blur-2xl hover:bg-slate-800/40 transition-all duration-500 overflow-hidden relative"
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B19EEF] via-[#5227FF] to-transparent" />

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#B19EEF]/5 to-[#5227FF]/5" />

            <CardHeader className="relative z-10 pb-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <CardTitle className="text-white text-3xl md:text-4xl flex items-center gap-3 font-bold">
                    <div className="w-12 h-12 rounded-xl bg-[#B19EEF]/10 border border-[#B19EEF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-[#B19EEF]" />
                    </div>
                    Browse Subjects
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-lg">
                    Explore all 5 subjects and start your learning journey today
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              <Link to="/subjects">
                <Button 
                  className="w-full md:w-auto bg-gradient-to-r from-[#B19EEF] to-[#5227FF] hover:from-[#9f89e3] hover:to-[#4018dd] text-white font-bold shadow-2xl shadow-[#B19EEF]/30 transition-all duration-300 h-14 text-lg rounded-xl px-8 group/btn"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.05,
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>

            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-[#B19EEF]/10 to-transparent blur-2xl" />
          </Card>
        </div>

        {/* Features Card */}
        <div ref={featuresCardRef}>
          <Card 
            className="border-slate-700/50 bg-slate-800/30 backdrop-blur-2xl overflow-hidden relative"
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
          >
            <CardHeader className="relative z-10">
              <CardTitle className="text-white text-2xl md:text-3xl font-bold flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B19EEF]/20 to-[#5227FF]/20 border border-[#B19EEF]/30 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#B19EEF]" />
                </div>
                How It Works
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10">
              <div 
                ref={(el) => (featuresItemsRef.current[0] = el)}
                className="flex items-start gap-4 group/item"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300 shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-slate-200 font-semibold text-lg mb-1">
                    Answer Multiple Choice Questions
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Select from carefully crafted options designed to test your knowledge effectively
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

              <div 
                ref={(el) => (featuresItemsRef.current[1] = el)}
                className="flex items-start gap-4 group/item"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300 shadow-lg shadow-amber-500/10">
                  <Zap className="w-7 h-7 text-amber-400" />
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-slate-200 font-semibold text-lg mb-1">
                    Get Instant Feedback
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Learn immediately from your mistakes with detailed explanations for each answer
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

              <div 
                ref={(el) => (featuresItemsRef.current[2] = el)}
                className="flex items-start gap-4 group/item"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B19EEF]/10 to-[#5227FF]/10 border border-[#B19EEF]/20 flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300 shadow-lg shadow-[#B19EEF]/10">
                  <TrendingUp className="w-7 h-7 text-[#B19EEF]" />
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-slate-200 font-semibold text-lg mb-1">
                    Track Your Progress
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Monitor your improvement over time with detailed analytics and performance insights
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}