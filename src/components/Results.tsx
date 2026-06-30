import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowLeftRight,
  CalendarDays,
  GitBranch,
  ArrowLeft,
  Brain,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  result: any;
};

export default function Results({ result }: Props) {
  const navigate = useNavigate();
  const [tab, setTab] = useState("recommendation");

  return (
    <div className="min-h-screen bg-[#070707] text-white">

      {/* background glow */}

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-violet-700/10 blur-[160px]" />

        <div className="absolute right-[-250px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-700/10 blur-[170px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* TOP BAR */}

        <div className="mb-14 flex items-center justify-between">

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-5 py-3 transition hover:border-violet-500"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-3 text-sm text-violet-300">

            ✨ Powered by Google Gemini

          </div>

        </div>

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="rounded-[42px] border border-zinc-800 bg-gradient-to-br from-[#151515] via-[#101010] to-[#0a0a0a] p-10 shadow-[0_0_80px_rgba(124,92,255,.08)]"
        >

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_.8fr]">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

                <Brain size={17} />

                AI Productivity Report

              </div>

              <h1 className="mt-8 text-6xl font-bold leading-none">

                {result.recommendedPlan.successProbability}% Success

              </h1>

              <h2 className="mt-6 text-3xl font-semibold">

                {result.recommendedPlan.title}

              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">

                {result.recommendedPlan.summary}

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <div className="rounded-3xl bg-zinc-900 px-7 py-5">

                  <p className="text-xs uppercase tracking-[.25em] text-zinc-500">

                    Pressure

                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">

                    {result.recommendedPlan.stress}

                  </h3>

                </div>

                <div className="rounded-3xl bg-zinc-900 px-7 py-5">

                  <p className="text-xs uppercase tracking-[.25em] text-zinc-500">

                    Biggest Risk

                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">

                    {result.recommendedPlan.risk}

                  </h3>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex justify-center">

              <div className="relative flex h-72 w-72 items-center justify-center">

                <div className="absolute h-full w-full rounded-full bg-violet-500/20 blur-[80px]" />

                <div className="flex h-60 w-60 items-center justify-center rounded-full border-[14px] border-violet-500 bg-[#111111]">

                  <div className="text-center">

                    <h2 className="text-7xl font-bold">

                      {result.recommendedPlan.successProbability}%

                    </h2>

                    <p className="mt-3 text-zinc-400">

                      Likely Success

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* TABS */}

        <div className="mt-12 mb-10 flex flex-wrap gap-4">

          {[
            {
              id: "recommendation",
              icon: <Sparkles size={18} />,
              label: "AI Plan",
            },
            {
              id: "future",
              icon: <ArrowLeftRight size={18} />,
              label: "Future Simulation",
            },
            {
              id: "timeline",
              icon: <CalendarDays size={18} />,
              label: "Execution Plan",
            },
            {
              id: "impact",
              icon: <GitBranch size={18} />,
              label: "Recovery",
            },
          ].map((item) => (

            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`flex items-center gap-2 rounded-full px-7 py-3 transition-all duration-300 ${
                tab === item.id
                  ? "bg-white text-black shadow-xl"
                  : "border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-violet-500 hover:text-white"
              }`}
            >

              {item.icon}

              {item.label}

            </button>

          ))}

        </div>

        

      {/* CONTENT STARTS */}

      {tab === "recommendation" && (

      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .4 }}
      className="space-y-8"
      >

      {/* AI Recommendation */}

      <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr]">

      <div className="rounded-[34px] border border-zinc-800 bg-gradient-to-br from-violet-500/10 to-transparent p-8">

      <div className="inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

      ✨ Recommended Strategy

      </div>

      <h2 className="mt-6 text-4xl font-bold">

      {result.recommendedPlan.title}

      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-300">

      {result.recommendedPlan.summary}

      </p>

      <div className="mt-10 flex gap-4">

      <button
      onClick={() => setTab("timeline")}
      className="rounded-full bg-violet-500 px-7 py-3 font-semibold transition hover:scale-105"
      >

      Start Now

      </button>

      <button
      onClick={() => setTab("future")}
      className="rounded-full border border-zinc-700 px-7 py-3 transition hover:border-violet-500"
      >

      Simulate Futures

      </button>

      </div>

      </div>

      {/* Right */}

      <div className="space-y-5">

      <div className="rounded-[28px] border border-zinc-800 bg-[#151515] p-6">

      <p className="text-xs uppercase tracking-[.3em] text-zinc-500">

      SUCCESS RATE

      </p>

      <h2 className="mt-3 text-5xl font-bold">

      {result.recommendedPlan.successProbability}%

      </h2>

      <div className="mt-4 h-2 rounded-full bg-zinc-800">

      <div
      className="h-2 rounded-full bg-violet-500"
      style={{
      width: `${result.recommendedPlan.successProbability}%`
      }}
      />

      </div>

      </div>

      <div className="rounded-[28px] border border-zinc-800 bg-[#151515] p-6">

      <p className="text-xs uppercase tracking-[.3em] text-zinc-500">

      WORKLOAD

      </p>

      <h2 className="mt-3 text-3xl font-semibold">

      {result.recommendedPlan.stress}

      </h2>

      </div>

      <div className="rounded-[28px] border border-zinc-800 bg-[#151515] p-6">

      <p className="text-xs uppercase tracking-[.3em] text-zinc-500">

      MAIN RISK

      </p>

      <h2 className="mt-3 text-3xl font-semibold">

      {result.recommendedPlan.risk}

      </h2>

      </div>

      </div>

      </div>

      {/* Gemini Insight */}

      <div className="rounded-[34px] border border-violet-500/20 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 p-8">

      <p className="text-sm uppercase tracking-[0.35em] text-violet-300">

      GEMINI INSIGHT

      </p>

      <p className="mt-6 text-xl leading-9 italic text-zinc-200">

      "{result.geminiInsight}"

      </p>

      </div>

      {/* Quick Summary */}

      <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-[28px] bg-[#141414] p-6">

      <div className="text-3xl">

      🎯

      </div>

      <h3 className="mt-4 text-xl font-semibold">

      Best Choice

      </h3>

      <p className="mt-3 text-zinc-400 leading-7">

      Follow the AI recommendation immediately to maximize success before the deadline.

      </p>

      </div>

      <div className="rounded-[28px] bg-[#141414] p-6">

      <div className="text-3xl">

      ⏱️

      </div>

      <h3 className="mt-4 text-xl font-semibold">

      Time Critical

      </h3>

      <p className="mt-3 text-zinc-400 leading-7">

      Every hour of delay increases workload and reduces flexibility.

      </p>

      </div>

      <div className="rounded-[28px] bg-[#141414] p-6">

      <div className="text-3xl">

      🚀

      </div>

      <h3 className="mt-4 text-xl font-semibold">

      Expected Outcome

      </h3>

      <p className="mt-3 text-zinc-400 leading-7">

      Completing today's plan keeps you ahead and reduces tomorrow's pressure.

      </p>

      </div>

      </div>

      </motion.div>

      )}

      {/* FUTURES */}

     {tab === "future" && (

      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .4 }}
      className="space-y-10"
      >

      <div className="text-center">

      <p className="text-sm uppercase tracking-[0.4em] text-violet-400">

      FUTURE SIMULATION

      </p>

      <h2 className="mt-4 text-5xl font-bold">

      Two Possible Futures

      </h2>

      <p className="mt-4 text-zinc-400">

      Gemini simulated the outcomes based on your decision.

      </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

      {/* GOOD */}

      <div className="overflow-hidden rounded-[36px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent">

      <div className="border-b border-emerald-500/20 p-8">

      <div className="flex items-center justify-between">

      <div>

      <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">

      START NOW

      </p>

      <h2 className="mt-3 text-5xl font-bold">

      🌱

      </h2>

      </div>

      <div className="text-right">

      <h2 className="text-6xl font-bold">

      {result.recommendedPlan.successProbability}%

      </h2>

      <p className="text-zinc-400">

      Success Chance

      </p>

      </div>

      </div>

      </div>

      <div className="space-y-4 p-8">

      {result.futureIfCompleted.map((item:string,index:number)=>(

      <motion.div

      key={index}

      initial={{opacity:0,x:-20}}

      animate={{opacity:1,x:0}}

      transition={{delay:index*.08}}

      className="rounded-2xl bg-black/20 p-5 backdrop-blur"

      >

      <div className="flex gap-4">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-black font-bold">

      ✓

      </div>

      <p className="leading-7 text-zinc-300">

      {item}

      </p>

      </div>

      </motion.div>

      ))}

      </div>

      </div>

      {/* BAD */}

      <div className="overflow-hidden rounded-[36px] border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent">

      <div className="border-b border-red-500/20 p-8">

      <div className="flex items-center justify-between">

      <div>

      <p className="text-sm uppercase tracking-[0.3em] text-red-400">

      WAIT & DELAY

      </p>

      <h2 className="mt-3 text-5xl">

      ⚠️

      </h2>

      </div>

      <div className="text-right">

      <h2 className="text-6xl font-bold">

      {Math.max(result.recommendedPlan.successProbability-30,20)}%

      </h2>

      <p className="text-zinc-400">

      Success Chance

      </p>

      </div>

      </div>

      </div>

      <div className="space-y-4 p-8">

      {result.futureIfDelayed.map((item:string,index:number)=>(

      <motion.div

      key={index}

      initial={{opacity:0,x:20}}

      animate={{opacity:1,x:0}}

      transition={{delay:index*.08}}

      className="rounded-2xl bg-black/20 p-5 backdrop-blur"

      >

      <div className="flex gap-4">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 font-bold">

      !

      </div>

      <p className="leading-7 text-zinc-300">

      {item}

      </p>

      </div>

      </motion.div>

      ))}

      </div>

      </div>

      </div>

      {/* AI Verdict */}

      <div className="rounded-[36px] border border-violet-500/20 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 p-8">

      <p className="text-sm uppercase tracking-[0.35em] text-violet-300">

      AI VERDICT

      </p>

      <h2 className="mt-5 text-3xl font-bold">

      The earlier you begin, the more flexibility you'll have.

      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">

      Gemini predicts that starting immediately not only increases the probability of completing your task successfully, but also reduces stress, creates buffer time for unexpected issues, and improves overall productivity.

      </p>

      </div>

      </motion.div>

      )}

      {/* TIMELINE */}
      {tab === "timeline" && (

      <motion.div
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{duration:.4}}
      className="space-y-10"
      >

      <div className="text-center">

      <p className="text-sm uppercase tracking-[0.35em] text-violet-400">

      EXECUTION PLAN

      </p>

      <h2 className="mt-4 text-5xl font-bold">

      Today's Roadmap

      </h2>

      <p className="mt-4 text-zinc-400">

      Gemini generated the fastest path to finish your goal.

      </p>

      </div>

      <div className="relative mx-auto max-w-5xl">

      <div className="absolute left-[36px] top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-violet-500 via-violet-400 to-transparent"/>

      <div className="space-y-10">

      {result.timeline.map((step:any,index:number)=>(

      <motion.div

      key={index}

      initial={{opacity:0,x:-30}}

      animate={{opacity:1,x:0}}

      transition={{delay:index*.12}}

      className="flex items-start gap-8"

      >

      <div className="relative z-10 flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-violet-500 text-2xl font-bold shadow-[0_0_30px_rgba(124,92,255,.5)]">

      {index+1}

      </div>

      <div className="flex-1 rounded-[30px] border border-zinc-800 bg-gradient-to-br from-[#151515] to-[#101010] p-8 transition hover:border-violet-500">

      <div className="flex items-center justify-between">

      <p className="text-sm uppercase tracking-[0.3em] text-violet-400">

      {step.time}

      </p>

      <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

      Step {index+1}

      </span>

      </div>

      <h3 className="mt-5 text-2xl font-semibold">

      {step.task}

      </h3>

      </div>

      </motion.div>

      ))}

      </div>

      </div>

      {/* Motivation */}

      <div className="rounded-[34px] border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-transparent p-8">

      <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">

      AI MOTIVATION

      </p>

      <h2 className="mt-4 text-3xl font-bold">

      One task at a time.

      </h2>

      <p className="mt-5 text-lg leading-8 text-zinc-300">

      Completing each step in sequence gives you the highest probability of success. Focus only on the current task and let Gemini handle the planning.

      </p>

      </div>

      </motion.div>

      )}
      
      {/* IMPACT */}

      {tab === "impact" && (

      <motion.div
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{duration:.4}}
      className="space-y-10"
      >

      {/* Ripple */}

      <div className="rounded-[36px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-10">

      <p className="text-sm uppercase tracking-[0.35em] text-orange-300">

      RIPPLE EFFECT

      </p>

      <h2 className="mt-4 text-5xl font-bold">

      What happens if you wait?

      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">

      Gemini predicts how delaying this task can affect the rest of your schedule.

      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

      {result.rippleEffect.map((step:string,index:number)=>(

      <div
      key={index}
      className="flex items-center gap-5"
      >

      <motion.div

      initial={{opacity:0,scale:.8}}

      animate={{opacity:1,scale:1}}

      transition={{delay:index*.1}}

      className="rounded-[26px] border border-zinc-800 bg-[#141414] px-8 py-6 text-center shadow-lg"

      >

      <p className="font-medium">

      {step}

      </p>

      </motion.div>

      {index!==result.rippleEffect.length-1&&(

      <div className="text-4xl text-violet-400">

      →

      </div>

      )}

      </div>

      ))}

      </div>

      </div>

      {/* Recovery */}

      <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">

      <div className="rounded-[34px] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-8">

      <p className="text-sm uppercase tracking-[0.35em] text-blue-300">

      RECOVERY PLAN

      </p>

      <h2 className="mt-5 text-4xl font-bold">

      Still recoverable.

      </h2>

      <p className="mt-5 text-lg leading-8 text-zinc-400">

      If you fall behind, Gemini recommends these immediate actions.

      </p>

      <div className="mt-10 space-y-5">

      {result.recoveryPlan.map((item:string,index:number)=>(

      <motion.div

      key={index}

      initial={{opacity:0,x:-25}}

      animate={{opacity:1,x:0}}

      transition={{delay:index*.1}}

      className="flex items-center gap-5 rounded-3xl bg-[#151515] p-6"

      >

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 font-bold text-black">

      {index+1}

      </div>

      <p className="leading-7">

      {item}

      </p>

      </motion.div>

      ))}

      </div>

      </div>

      {/* Final Insight */}

      <div className="rounded-[34px] border border-violet-500/20 bg-gradient-to-br from-violet-500/15 via-indigo-500/10 to-transparent p-8">

      <div className="inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

      ✨ Gemini Final Insight

      </div>

      <h2 className="mt-6 text-4xl font-bold">

      You're still ahead.

      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-300">

      "{result.geminiInsight}"

      </p>

      <div className="mt-10 rounded-3xl border border-violet-500/20 bg-black/20 p-6">

      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">

      FINAL VERDICT

      </p>

      <h2 className="mt-4 text-3xl font-bold">

      Start now to maximize your chances.

      </h2>

      <p className="mt-4 leading-8 text-zinc-400">

      Gemini predicts that taking action immediately gives you the highest probability of finishing before your deadline while keeping stress under control.

      </p>

      </div>

      </div>

      </div>

      </motion.div>

      )}
    </div>
     </div>
  );

}