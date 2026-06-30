import { motion } from "framer-motion";
import { AlertTriangle, Clock3, CheckCircle2 } from "lucide-react";

type Props = {
  probability: number;
};

export default function ModeCard({ probability }: Props) {
  const mode =
    probability >= 80
      ? {
          title: "Planning Mode",
          color: "emerald",
          icon: CheckCircle2,
          message:
            "You're in a good position. Follow Gemini's plan consistently.",
        }
      : probability >= 50
      ? {
          title: "Focus Mode",
          color: "amber",
          icon: Clock3,
          message:
            "Your deadline is approaching. Prioritize high-impact work first.",
        }
      : {
          title: "Rescue Mode",
          color: "red",
          icon: AlertTriangle,
          message:
            "Time is critical. Gemini has created a recovery strategy to maximize your chances.",
        };

  const Icon = mode.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-[32px] border border-${mode.color}-500/20 bg-[#111111] p-10`}
    >
      <div className="flex items-center justify-between">

        <div>

          <p className={`text-${mode.color}-400 uppercase tracking-[0.3em] text-sm`}>
            {mode.title}
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            {probability}%
          </h2>

          <p className="mt-2 text-zinc-400">
            Likely Success
          </p>

        </div>

        <Icon
          size={70}
          className={`text-${mode.color}-400`}
        />

      </div>

      <p className="mt-10 text-lg leading-8 text-zinc-300">
        {mode.message}
      </p>
    </motion.div>
  );
}