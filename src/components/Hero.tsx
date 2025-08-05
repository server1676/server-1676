'use client';

import { motion } from 'framer-motion';
import { Snowflake, Zap, Users } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Loader from './Loader';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [snowflakeData, setSnowflakeData] = useState<Array<{x: number, y: number, duration: number, delay: number}>>([]);
  const [particleData, setParticleData] = useState<Array<{x: number, y: number, targetX: number, targetY: number, duration: number}>>([]);
  const fullText = '1676';
  
  // GSAP refs
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const glitchRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    // Set client flag and initial dimensions on client side
    setIsClient(true);
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    setDimensions({ width, height });
    
    // Generate deterministic animation data on client side only
    const snowflakes = Array.from({ length: 15 }, (_, i) => {
      const seed = i * 12345; // Use index as seed for deterministic randomness
      return {
        x: (seed % width),
        y: -20,
        duration: 3 + (seed % 4),
        delay: (seed % 2000) / 1000
      };
    });
    
    const particles = Array.from({ length: 8 }, (_, i) => {
      const seed = i * 54321;
      return {
        x: (seed % width),
        y: (seed % height),
        targetX: ((seed * 2) % width),
        targetY: ((seed * 3) % height),
        duration: 4 + (seed % 6)
      };
    });
    
    setSnowflakeData(snowflakes);
    setParticleData(particles);

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
    // GSAP animations - only start after loading is complete
    if (!isLoading && isClient) {
      // Main entrance timeline
      const tl = gsap.timeline({ delay: 0.5 });
      
      // Title entrance with glitch effect
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 50, rotationX: -90 },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 1,
          ease: "power3.out"
        }
      );
      
      // Typewriter effect with GSAP
      tl.to(glitchRef.current, {
        duration: fullText.length * 0.08,
        text: fullText,
        ease: "none",
        onUpdate: function() {
          // Add glitch effect deterministically
          const progress = this.progress();
          if (progress > 0 && Math.floor(progress * 100) % 20 === 0) {
            gsap.to(glitchRef.current, {
              duration: 0.1,
              skewX: (progress * 10) % 5 - 2.5,
              textShadow: '2px 0 #ff004f, -2px 0 #00f0ff',
              yoyo: true,
              repeat: 1
            });
          }
        }
      }, "-=0.5");
      
      // Subtitle and other elements
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          ease: "power2.out" 
        },
        "-=0.3"
      );
      
      // Stats cards with stagger
      tl.fromTo(statsRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)"
        },
        "-=0.4"
      );
      
      // Buttons entrance
      tl.fromTo(buttonsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.2"
      );
      
      // Continuous glitch effect on title
      gsap.to(glitchRef.current, {
        duration: 0.1,
        repeat: -1,
        repeatDelay: 3.5,
        yoyo: true,
        ease: "power2.inOut",
        textShadow: '1px 0 #ff004f, -1px 0 #00f0ff, 0 1px #8efff9',
        delay: 2
      });
      
      // Floating animation for stats cards
      gsap.to(statsRef.current?.children || [], {
        y: "-=10",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
        delay: 3
      });
    }
  }, [isLoading, isClient, fullText]);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16">
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
          {isClient && snowflakeData.map((snowflake, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: snowflake.x,
                y: -20,
                rotate: 0
              }}
              animate={{ 
                y: dimensions.height + 20,
                rotate: 360,
                x: snowflake.x + 100
              }}
              transition={{
                duration: snowflake.duration,
                repeat: Infinity,
                delay: snowflake.delay
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
          {isClient && particleData.map((particle, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-[#00f0ff] rounded-full opacity-80"
              style={{ boxShadow: '0 0 6px #00f0ff' }}
              initial={{ 
                x: particle.x,
                y: particle.y,
              }}
              animate={{ 
                x: particle.targetX,
                y: particle.targetY,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto py-8 lg:py-12 pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Typewriter Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 ref={titleRef} className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
              <span className="text-white">Welcome to</span>
              <br />
              <span ref={glitchRef} className="text-gradient text-glow-cyan font-mono tracking-wider cursor-pointer hover:text-[#ff004f] transition-colors duration-300">
                
                <span className="animate-pulse text-[#00f0ff]">|</span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            ref={subtitleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#00f0ff] font-medium font-mono tracking-wide">
              Strategy, Unity, and Harmony
            </p>
            <div className="text-[#8efff9] text-sm lg:text-base font-mono">
              &gt; STATUS: OPERATIONAL | NAP5 SYSTEM ACTIVE | SVS VICTORIES: 23+
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-4xl mx-auto mb-12 space-y-4"
          >
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Experience the most organized and strategic Whiteout Survival server. 
              <span className="text-[#00f0ff]"> State 1676 </span> has never lost a preparation phase in SVS, 
              showcasing unmatched coordination and commitment.
            </p>
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-8">
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
            ref={buttonsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="https://discord.gg/pyRZ8fhe"
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
              <Users className="w-5 h-5" />
            </a>
          </motion.div>

        </motion.div>
      </div>


    </section>
  );
};

export default Hero;