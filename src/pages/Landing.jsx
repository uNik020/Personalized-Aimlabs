import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Aurora from "../blocks/Backgrounds/Aurora/Aurora";
import SplashCursor from "../blocks/Animations/SplashCursor/SplashCursor";

export default function Landing() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} speed={0.5} />
      </div>
      <SplashCursor />
      {/* Main Content */}
      <motion.h1
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-8xl font-bold mb-8 antialiased"
      >
        AIM TRAINER
      </motion.h1>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <Link
          to="/game"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-xl font-semibold transition-colors"
        >
          Start Training
        </Link>

        <div className="mt-8 text-gray-400 max-w-md text-center">
          <p className="mb-2">Rules:</p>
          <p>Click the targets as quickly and accurately as possible!</p>
          <p>30 seconds timer - Score as much as you can!</p>
        </div>
      </motion.div>
    </div>
  );
}
