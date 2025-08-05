'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING SYSTEM...');

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const progressTimer = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);

      // Update status text based on progress
      if (newProgress < 20) {
        setStatusText('INITIALIZING SYSTEM...');
      } else if (newProgress < 40) {
        setStatusText('LOADING NAP5 DATABASE...');
      } else if (newProgress < 60) {
        setStatusText('CONNECTING TO SERVER 1676...');
      } else if (newProgress < 80) {
        setStatusText('VERIFYING ALLIANCE DATA...');
      } else if (newProgress < 95) {
        setStatusText('FINALIZING CONNECTION...');
      } else {
        setStatusText('SYSTEM READY');
      }

      if (currentStep >= steps) {
        clearInterval(progressTimer);
        setTimeout(() => {
          onComplete();
        }, 500); // Small delay before hiding loader
      }
    }, interval);

    return () => clearInterval(progressTimer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gradient-to-br from-[#050d1c] via-[#0f172a] to-[#050d1c] z-50 flex items-center justify-center"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        {/* Terminal Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-[#00f0ff] to-[#8efff9] rounded-lg flex items-center justify-center shadow-2xl panel-neon animate-pulse-glow">
              <Terminal className="w-12 h-12 text-[#050d1c]" />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 border-2 border-[#00f0ff]/40 rounded-lg"
              style={{ boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)' }}
            />
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-[#00f0ff]" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-[#00f0ff]" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-[#00f0ff]" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-[#00f0ff]" />
          </div>
        </motion.div>

        {/* Status Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-[#8efff9] text-lg font-mono mb-4">
            &gt; {statusText}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative"
        >
          <div className="w-full h-3 bg-[#0f172a] rounded-full overflow-hidden border border-[#00f0ff]/30">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00f0ff] to-[#8efff9] rounded-full relative"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </motion.div>
          </div>
          <div className="text-[#00f0ff] text-sm font-mono mt-2">
            {Math.round(progress)}% COMPLETE
          </div>
        </motion.div>

        {/* Additional Loading Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 space-y-2"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center space-x-2 text-[#8efff9]/60 text-xs font-mono"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.2, duration: 0.4 }}
            >
              <div className="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse" />
              <span>
                {i === 0 && 'Loading alliance data...'}
                {i === 1 && 'Establishing secure connection...'}
                {i === 2 && 'Preparing user interface...'}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;