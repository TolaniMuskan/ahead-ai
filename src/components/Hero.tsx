import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#080808] text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-32 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#7C5CFF]/10 blur-[220px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a1a1a_0%,#080808_55%)]" />

      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8">

        {/* Navbar */}

        <header className="flex h-20 items-center justify-between">

          <h1 className="text-2xl font-semibold tracking-tight">
            AHEAD
          </h1>

          <button className="rounded-full border border-zinc-700 px-6 py-2 text-sm transition hover:bg-white hover:text-black">
            Sign In
          </button>

        </header>

        {/* Hero */}

        <div className="grid min-h-[calc(100vh-96px)] items-start gap-16 pt-10 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="max-w-xl pt-8"
          >

            <div className="mb-8 inline-flex rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-400">

              Built with Google Gemini

            </div>

            <h2 className="text-7xl font-semibold leading-[0.9] tracking-[-0.05em] lg:text-8xl">

              Tomorrow

              <br />

              starts today.

            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">

              Plan smarter. Stress less.

            Let Gemini simulate your best path
            before the deadline arrives.

            </p>

            <div className="mt-12">

              <button
                    onClick={() => navigate("/login")}
                    className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-[1.03]"
                    >
                    Create My Plan

                    <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                    />
                    </button>

              <div className="mt-8 space-y-3">

            <div className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                Planner Ready
            </div>

            <div className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                Gemini Simulation Ready
            </div>

            <div className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                Timeline Generated
            </div>

            </div>

            </div>

          </motion.div>

          {/* Right */}

          
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: -15 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-end -mt-10"
>

            <div className="w-full max-w-[540px] overflow-hidden rounded-[30px] border border-zinc-800 bg-[#111111] shadow-0_40px_120px_rgba(0,0,0,0.55) transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_50px_140px_rgba(124,92,255,0.18)]">

              {/* Window Header */}

              <div className="flex items-center gap-2 border-b border-zinc-800 px-6 py-4">

                <div className="h-3 w-3 rounded-full bg-red-500" />

                <div className="h-3 w-3 rounded-full bg-yellow-500" />

                <div className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-4 text-sm text-zinc-500">

                  AI Planning Session

                </span>

              </div>

              {/* Window Content */}

              <div className="space-y-8 p-8">                <div>

                  <p className="text-sm text-zinc-500">
                    Today's Goal
                  </p>

                  <h3 className="mt-2 text-3xl font-semibold text-white">
                    Complete Your Next Big Goal
                  </h3>

                  <p className="mt-2 text-zinc-500">
                    AI-generated execution plan • On Track
                  </p>

                </div>

                <div className="rounded-3xl border border-zinc-800 bg-[#0D0D0D] p-6">

                  <div className="mb-6 flex items-center justify-between">

                    <h4 className="text-lg font-medium">
                      AI Timeline
                    </h4>

                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-400">
                      On Track
                    </span>

                  </div>

                  <div className="space-y-6">

                    <div className="flex items-start gap-5">

                      <div className="mt-1 h-3 w-3 rounded-full bg-white" />

                      <div>

                        <p className="font-medium">
                          Define project scope
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                         30 min • High Priority
                        </p>

                      </div>

                    </div>

                    <div className="ml-[5px] h-8 w-px bg-zinc-800" />

                    <div className="flex items-start gap-5">

                      <div className="mt-1 h-3 w-3 rounded-full bg-white" />

                      <div>

                        <p className="font-medium">
                          Break work into milestones
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                          20 min • Medium Priority
                        </p>

                      </div>

                    </div>

                    <div className="ml-[5px] h-8 w-px bg-zinc-800" />

                    <div className="flex items-start gap-5">

                      <div className="mt-1 h-3 w-3 rounded-full bg-white" />

                      <div>

                        <p className="font-medium">
                          Complete highest-priority task
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                          60 min • High Priority
                        </p>

                      </div>

                    </div>

                    <div className="ml-[5px] h-8 w-px bg-zinc-800" />

                    <div className="flex items-start gap-5">

                      <div className="mt-1 h-3 w-3 rounded-full bg-white" />

                      <div>

                        <p className="font-medium">
                          Final review
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                          Estimated 15 min
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-zinc-800 bg-[#0D0D0D] p-6">

                  <p className="text-sm text-zinc-500">
                    Gemini Recommendation
                  </p>

                  <p className="mt-4 leading-8 text-zinc-300">

                    Based on your remaining time and current workload,
                    complete the UI first, connect authentication next,
                    and integrate Gemini after the interface is stable.
                    This plan maximizes your probability of submitting
                    before the deadline.

                  </p>

                </div>              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}