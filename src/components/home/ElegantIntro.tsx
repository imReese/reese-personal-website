"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { headline, introduction } from '@/config/infoConfig'

export function ElegantIntro() {
  const [showMore, setShowMore] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='md:mt-20'>
            <div className="h-8 w-64 bg-muted rounded-md animate-pulse mb-4"></div>
            <div className="h-4 w-full bg-muted rounded-md animate-pulse mb-2"></div>
            <div className="h-4 w-3/4 bg-muted rounded-md animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* 左侧：个人信息 */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {headline}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {introduction}
            </motion.p>
          </div>

          {/* 行动按钮 */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show Less' : 'Learn More'}
              <motion.div
                animate={{ rotate: showMore ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Full Profile
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 右侧：技术展示区域 - 修改为小火箭在文字右上角 */}
        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-sm">
            <div className="flex flex-col items-end space-y-2">
              {/* 小火箭放在文字右上角 */}
              <div className="flex items-center space-x-2 self-end">
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
              </div>
              
              {/* 文字右对齐 */}
              <div className="text-right">
                <p className="text-sm text-gray-600 dark:text-gray-400 tracking-wide">
                  Building the future with modern technology
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}