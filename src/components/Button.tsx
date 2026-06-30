import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
      group
      inline-flex
      items-center
      gap-3
      rounded-2xl
      bg-[#7C5CFF]
      px-7
      py-4
      text-lg
      font-semibold
      text-white
      transition-all
      duration-300
      hover:bg-[#6D4EFF]
      hover:-translate-y-0.5
      active:translate-y-0
      "
    >
      {children}

      <ArrowRight
        size={20}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}