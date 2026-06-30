import { useState } from "react";
import { Sparkles, BrainCircuit } from "lucide-react";
import { analyzeGoal } from "../services/gemini";
import LoadingAnalysis from "../components/LoadingAnalysis";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();

  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    if (!goal.trim()) return;

    setLoading(true);

    try {
      const data = await analyzeGoal(goal);

      navigate("/analysis", {
        state: {
          goal,
          result: data,
        },
      });
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#1b1b2f_0%,#09090B_45%,#09090B_100%)]">

      <div className="mx-auto max-w-7xl px-8 py-10">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
              AHEAD
            </p>

            <h1 className="mt-2 text-5xl lg:text-6xl font-semibold tracking-tight leading-none">

              Never miss
              <br />
              another deadline.

            </h1>

            <p className="mt-3 max-w-xl text-lg leading-8 text-zinc-400">

              Gemini analyzes your workload, predicts future outcomes,
              and builds the fastest path to finishing on time.

            </p>

          </div>

          

        </div>

        <div className="mb-8 inline-flex items-center rounded-full bg-violet-500/10 border border-violet-500/20 px-4 py-2 text-violet-300 text-sm">
        ✨ Powered by Google Gemini
        </div>

        {/* Input */}

        <div className="mt-4 rounded-[28px] border border-zinc-800 bg-[#111111]/90 backdrop-blur-xl p-8">

          <div className="flex items-center gap-3">

            <BrainCircuit
              className="text-violet-400"
              size={28}
            />

            <h2 className="text-3xl font-semibold">

              What do you need to finish?

            </h2>

          </div>

          <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Example: Finish my hackathon before tomorrow..."
            className="mt-8 h-28 w-full resize-none rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-8 text-lg outline-none placeholder:text-zinc-500"
          />
            
          <button
            onClick={handleAnalyze}
            className="mt-8 flex items-center gap-3 rounded-full bg-violet-500 px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(124,92,255,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(124,92,255,0.5)]"
          >

            <Sparkles size={22} />

            Analyze with Gemini

          </button>

          {loading && <LoadingAnalysis />}

        </div>

        <p className="mt-3 text-sm text-zinc-500">
          Include your deadline for the most accurate AI action plan.
        </p>

        {/* Features */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-zinc-800 bg-[#111111] p-6">

            <h3 className="text-xl font-semibold">

              Intelligent Prioritization

            </h3>

            <p className="mt-4 leading-7 text-zinc-400">

              Gemini identifies what matters most and recommends the optimal order.

            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-[#111111] p-8">

            <h3 className="text-xl font-semibold">

              Future Simulation

            </h3>

            <p className="mt-4 leading-7 text-zinc-400">

              Compare what happens if you start now versus delaying your work.

            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-[#111111] p-8">

            <h3 className="text-xl font-semibold">

              AI Action Plan

            </h3>

            <p className="mt-4 leading-7 text-zinc-400">

              Get an adaptive productivity strategy based on your deadline.

            </p>

          </div>

        </div>
        

      </div>

    </main>
  );
}