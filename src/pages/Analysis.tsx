import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import Results from "../components/Results";

export default function Analysis() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.result) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080808] text-white">
        No analysis found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-7xl px-8 py-10">

        {/* Top Bar */}

        <div className="mb-12 flex items-center justify-between">

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-3 rounded-full border border-zinc-800 px-5 py-3 transition hover:bg-zinc-900"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-3">

            <Sparkles
              size={18}
              className="text-violet-400"
            />

            <span className="text-violet-300">

              Powered by Google Gemini

            </span>

          </div>

        </div>

        {/* Hero */}

        <div className="mb-14">

          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">

            AHEAD

          </p>

          <h1 className="mt-4 text-6xl font-semibold tracking-tight">

            AI Action Plan

          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">

            Gemini analyzed your deadline, prioritized your work,
            simulated possible outcomes and built your best path forward.

          </p>

        </div>

        <Results result={state.result} />

      </div>

    </main>
  );
}