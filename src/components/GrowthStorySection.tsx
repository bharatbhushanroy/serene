"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Milestone {
  id: string;
  date: string;
  type: 'major' | 'minor'; // 'major' for orange, 'minor' for dark blue
  title: string;
  content: React.ReactNode; // Can be description, logo, or AUM text
}

const milestones: Milestone[] = [
  {
    id: 'm1',
    date: 'Jul 2024',
    type: 'major',
    title: 'Won contract with Indian Bank',
    content: (
      <div className="flex flex-col items-center mt-2">
        <span className="text-xl font-bold text-gray-800">Indian Bank</span>
        <span className="text-sm text-gray-600">Contract Signed</span>
      </div>
    ),
  },
  {
    id: 'm2',
    date: 'Oct 2024',
    type: 'minor',
    title: 'Won contract with NABSanrakshan',
    content: (
      <div className="flex flex-col items-center mt-2">
        <span className="text-xl font-bold text-fintech-dashboard-sidebar-bg">NAB संरक्षण</span>
        <span className="text-sm text-gray-600">Partnership</span>
      </div>
    ),
  },
  {
    id: 'm3',
    date: 'Nov 2024',
    type: 'major',
    title: 'Achieved $3B+ Aum',
    content: (
      <span className="text-4xl font-extrabold text-fintech-orange-accent">$3B<span className="relative text-lg top-[-0.5em]">AUM</span></span>
    ),
  },
  {
    id: 'm4',
    date: 'April 2025',
    type: 'minor',
    title: 'Closed A+ round led by Accel Partners',
    content: (
      <div className="flex flex-col items-center mt-2">
        <span className="text-3xl font-bold text-gray-800">Accel</span>
        <span className="text-sm text-gray-600">Partners</span>
      </div>
    ),
  },
  {
    id: 'm5',
    date: 'April 2025',
    type: 'major',
    title: 'Achieved $5B+ Aum',
    content: (
      <span className="text-4xl font-extrabold text-fintech-orange-accent">$5B<span className="relative text-lg top-[-0.5em]">AUM</span></span>
    ),
  },
];

const GrowthStorySection = () => {
  const milestoneVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Determine which milestones go top/bottom for visual balance
  const positionedMilestones = milestones.map((m, i) => ({
    ...m,
    position: i % 2 === 0 ? 'top' : 'bottom', // Alternate top/bottom
  }));

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-white text-fintech-text-dark overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-fintech-text-dark">
          OUR <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">GROWTH STORY</span>
        </h2>
        <p className="text-lg text-fintech-text-muted mb-16 max-w-3xl mx-auto">
          Unveiling our journey from humble roots to phenomenal achievements. Explore the milestones, innovations, and transformative moments that have propelled our success.
        </p>

        <div className="relative h-[500px] w-full">
          {/* Horizontal dotted line */}
          <div className="absolute left-0 right-0 h-2px bg-blue-200" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #BFDBFE 1px, transparent 0)',
            backgroundSize: '10px 10px',
            backgroundRepeat: 'repeat-x',
            top: '50%',
            transform: 'translateY(-50%)',
            height: '2px'
          }}></div>

          {/* Milestones */}
          {positionedMilestones.map((milestone, index) => {
            const leftPosition = (index / (positionedMilestones.length - 1)) * 100;
            const isMajor = milestone.type === 'major';
            const markerColor = isMajor ? 'bg-fintech-orange-accent' : 'bg-fintech-dashboard-sidebar-bg';
            const textColor = isMajor ? 'text-fintech-orange-accent' : 'text-fintech-dashboard-sidebar-bg';
            const lineColor = isMajor ? 'bg-fintech-orange-accent' : 'bg-fintech-dashboard-sidebar-bg';

            return (
              <motion.div
                key={milestone.id}
                className={cn(
                  "absolute flex flex-col items-center w-48", // Fixed width for content box
                  milestone.position === 'top' ? 'bottom-1/2 mb-2' : 'top-1/2 mt-2' // Position relative to horizontal line
                )}
                style={{ left: `${leftPosition}%`, transform: 'translateX(-50%)' }}
                variants={milestoneVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {milestone.position === 'top' && (
                  <>
                    {/* Content Box (Top) */}
                    <div className="w-full p-3 rounded-lg text-center bg-white shadow-md border border-gray-200 z-20 mb-4">
                      <p className={cn("font-bold text-sm mb-1", textColor)}>{milestone.date}</p>
                      <p className="text-xs text-gray-700 mb-2">{milestone.title}</p>
                      {milestone.content}
                    </div>
                    {/* Vertical Line (Top) */}
                    <div className={cn("w-0.5 h-24 z-0", lineColor)}></div>
                    {/* Marker (Top) */}
                    <div className={cn("w-4 h-4 rounded-full z-10 -mt-2", markerColor)}></div>
                  </>
                )}
                {milestone.position === 'bottom' && (
                  <>
                    {/* Marker (Bottom) */}
                    <div className={cn("w-4 h-4 rounded-full z-10 -mb-2", markerColor)}></div>
                    {/* Vertical Line (Bottom) */}
                    <div className={cn("w-0.5 h-24 z-0", lineColor)}></div>
                    {/* Content Box (Bottom) */}
                    <div className="w-full p-3 rounded-lg text-center bg-white shadow-md border border-gray-200 z-20 mt-4">
                      <p className={cn("font-bold text-sm mb-1", textColor)}>{milestone.date}</p>
                      <p className="text-xs text-gray-700 mb-2">{milestone.title}</p>
                      {milestone.content}
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GrowthStorySection;