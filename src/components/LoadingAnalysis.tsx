import { motion } from "framer-motion";

export default function LoadingAnalysis() {
  return (
    <div className="mt-16 rounded-3xl border border-zinc-800 bg-[#111111] p-8">

      <h2 className="text-2xl font-semibold">
        Google Gemini
      </h2>

      <p className="mt-2 text-zinc-500">
        Analyzing your future...
      </p>

      <div className="mt-10 space-y-8">

        {[
          "Planner AI",
          "Deadline Analyzer",
          "Risk Predictor",
          "Wellness Coach"
        ].map((item, index) => (

          <div key={item}>

            <div className="mb-3 flex justify-between">

              <span>{item}</span>

              <span>✓</span>

            </div>

            <div className="h-2 rounded-full bg-zinc-800">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ 
                    duration: 1.2,
                    delay: index * 0.4
                 }}
                className="h-full rounded-full bg-white"
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}