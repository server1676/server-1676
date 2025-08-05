'use client';

import { motion } from 'framer-motion';
import { Shield, Snowflake, Terminal, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [isClient, setIsClient] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'WHITEOUT SERVER 1676';
  
  useEffect(() => {
    // Set client flag and initial dimensions on client side
    setIsClient(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Update dimensions on resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Typewriter effect
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 150);

    return () => clearInterval(typeTimer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* CryoCore Neon Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050d1c] via-[#0f172a] to-[#050d1c]">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Snow Battle Background */}
        <div className="absolute inset-0 bg-[url('/snow-battle-bg.svg')] bg-cover bg-center bg-no-repeat opacity-20" />
        
        {/* Animated Neon Snow Elements */}
        <div className="absolute inset-0">
          {isClient && [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: Math.random() * dimensions.width,
                y: -20,
                rotate: 0
              }}
              animate={{ 
                y: dimensions.height + 20,
                rotate: 360,
                x: Math.random() * dimensions.width
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              <Snowflake 
                className="w-3 h-3 text-[#00f0ff] opacity-60" 
                style={{ filter: 'drop-shadow(0 0 3px #00f0ff)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Neon Particles */}
        <div className="absolute inset-0">
          {isClient && [...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-[#00f0ff] rounded-full opacity-80"
              style={{ boxShadow: '0 0 6px #00f0ff' }}
              initial={{ 
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
              }}
              animate={{ 
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Terminal Logo with Neon Effects */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-br from-[#00f0ff] to-[#8efff9] rounded-lg flex items-center justify-center shadow-2xl panel-neon animate-pulse-glow">
                <Terminal className="w-10 h-10 lg:w-14 lg:h-14 text-[#050d1c]" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
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

          {/* Typewriter Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="text-[#8efff9] text-lg lg:text-xl font-mono mb-2">
              &gt; SYSTEM_INITIALIZING...
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
              <span className="text-white">Welcome to</span>
              <br />
              <span className="text-gradient text-glow-cyan font-mono tracking-wider">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#00f0ff] font-medium font-mono tracking-wide">
              Strategy, Unity, and Harmony in Whiteout Survival
            </p>
            <div className="text-[#8efff9] text-sm lg:text-base font-mono">
              &gt; STATUS: OPERATIONAL | NAP5 SYSTEM ACTIVE | SVS VICTORIES: 23+
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-4xl mx-auto mb-12 space-y-4"
          >
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Experience the most organized and strategic Whiteout Survival server. 
              <span className="text-[#00f0ff]"> Server 1676 </span> has never lost a preparation phase in SVS, 
              showcasing unmatched coordination and commitment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-8">
              <div className="panel-neon p-4 rounded-lg">
                <div className="text-[#00f0ff] text-2xl font-bold">0</div>
                <div className="text-gray-400 text-sm">SVS Prep Losses</div>
              </div>
              <div className="panel-neon p-4 rounded-lg">
                <div className="text-[#00f0ff] text-2xl font-bold">5</div>
                <div className="text-gray-400 text-sm">NAP5 Alliances</div>
              </div>
              <div className="panel-neon p-4 rounded-lg">
                <div className="text-[#00f0ff] text-2xl font-bold">2</div>
                <div className="text-gray-400 text-sm">Full Alliance Transfers</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="https://discord.gg/server1676"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#8efff9] text-[#050d1c] rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 animate-pulse-glow"
            >
              <span className="font-mono">JOIN DISCORD</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Zap className="w-5 h-5" />
              </motion.div>
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-[#00f0ff]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-[#00f0ff]" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-[#00f0ff]" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-[#00f0ff]" />
            </a>
            
            <a
              href="#alliances"
              className="group relative px-8 py-4 panel-neon text-[#00f0ff] rounded-lg font-semibold text-lg font-mono transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
            >
              <span>VIEW NAP5 ALLIANCES</span>
              <Shield className="w-5 h-5" />
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Cyberpunk Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative w-8 h-12 border-2 border-[#00f0ff] rounded-lg flex justify-center panel-neon"
          style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.3)' }}
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-4 bg-[#00f0ff] rounded-full mt-2"
            style={{ boxShadow: '0 0 5px #00f0ff' }}
          />
          {/* Corner accents */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-[#00f0ff]" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-[#00f0ff]" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-[#00f0ff]" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-[#00f0ff]" />
        </motion.div>
        <div className="text-[#8efff9] text-xs font-mono mt-2 text-center">
          SCROLL_DOWN
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;