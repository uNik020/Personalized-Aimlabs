import React from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import Aurora from '../blocks/Backgrounds/Aurora/Aurora'
import SplashCursor from '../blocks/Animations/SplashCursor/SplashCursor'


const Results = () => {

  const { state } = useLocation()
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white">
      <SplashCursor />
      <div className="absolute inset-0 -z-10">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} speed={0.5} />
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Game Over!</h1>
        <p className="text-2xl mb-8">Your Score: {state?.score || 0}</p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-lg font-semibold transition-colors"
        >
          Play Again
        </Link>
      </motion.div>
    </div>

  )
}

export default Results