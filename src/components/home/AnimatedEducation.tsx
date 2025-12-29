"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, ArrowRight } from 'lucide-react'
import { EducationItemType, educationList } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'

function EducationItem({ educationItem, isExpanded, onClick }: { 
  educationItem: EducationItemType 
  isExpanded: boolean
  onClick: () => void
}) {
  return (
    <motion.li 
      className={`flex gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
        isExpanded ? 'bg-muted/50 shadow-md' : 'hover:bg-muted/20'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md border border-muted bg-background">
        <CustomIcon name={educationItem.logo} size={20} />
      </div>
      
      <div className="flex flex-auto flex-col gap-1">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold text-foreground">{educationItem.school}</h4>
            <p className="text-sm text-muted-foreground">{educationItem.major}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight size={16} className="text-muted-foreground" />
          </motion.div>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-muted-foreground">
                  {educationItem.start} - {educationItem.end}
                </span>
                <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full">
                  Bachelor&apos;s Degree
                </span>
              </div>
              
              {/* 这里可以添加更多详细信息 */}
              <div className="mt-2 text-sm text-muted-foreground">
                <p>Focused on computer science fundamentals, algorithms, and software engineering principles.</p>
                {educationItem.school.includes('Southern University') && (
                  <ul className="mt-2 space-y-1">
                    <li>• GPA: 3.8/4.0</li>
                    <li>• Dean&apos;s List Honoree</li>
                    <li>• Computer Science Honor Society</li>
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  )
}

export default function AnimatedEducation() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <motion.div 
      className="rounded-3xl border border-border bg-card p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2 
        className="flex items-center text-lg font-semibold mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <GraduationCap size={20} className="mr-3" />
        Education
      </motion.h2>
      
      <motion.ol 
        className="space-y-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {educationList.map((educationItem, index) => (
          <EducationItem
            key={index}
            educationItem={educationItem}
            isExpanded={expandedIndex === index}
            onClick={() => toggleExpand(index)}
          />
        ))}
      </motion.ol>
      
      {/* 添加查看更多信息的链接 */}
      <motion.div 
        className="mt-6 pt-4 border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a 
          href="/about" 
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
        >
          View complete education background
          <ArrowRight size={16} className="ml-1" />
        </a>
      </motion.div>
    </motion.div>
  )
}