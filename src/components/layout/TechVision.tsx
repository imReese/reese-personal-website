"use client"

import { motion } from 'framer-motion'

export function TechVision() {
  return (
    <motion.div 
      className="relative flex justify-center items-center mx-auto max-w-xs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-40">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-gray-100/20 dark:from-gray-900/20 dark:to-gray-800/10 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/60 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl border border-gray-200/30 dark:border-gray-700/30 p-4 shadow-sm">
          <div className="flex justify-center items-center h-full">
            <div className="text-center space-y-2">
              <motion.div
                animate={{ 
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block p-2 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-inner"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              <p className="text-xs text-gray-600 dark:text-gray-400 tracking-wide">
                Building the future with modern technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}