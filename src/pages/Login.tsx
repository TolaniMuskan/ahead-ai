import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  async function handleGoogleLogin() {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080808] px-6">

      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-[#111111] p-10">

        <p className="text-sm text-zinc-500">
          Welcome to
        </p>

        <h1 className="mt-2 text-4xl font-semibold text-white">
          AHEAD
        </h1>

        <p className="mt-5 text-zinc-400">
          Sign in to start planning with Google Gemini.
        </p>

        <button
          onClick={handleGoogleLogin}
          className="mt-10 flex w-full items-center justify-center rounded-xl bg-white py-4 font-medium text-black transition hover:scale-[1.02]"
        >
          Continue with Google
        </button>

      </div>

    </div>
  );
}