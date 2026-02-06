import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion';
const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Loader */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-white rounded-full"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Brand Text */}
        <motion.h1
          className="text-white text-3xl font-semibold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Loading
        </motion.h1>

        {/* Subtext */}
        <p className="text-gray-400 text-sm">Please wait while we connect you</p>
      </div>
    </div>
    </div>
  )
}

export default Loading