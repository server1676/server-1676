'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Users, Sword, Star, ArrowRight } from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Alliances = () => {
  const [selectedAlliance, setSelectedAlliance] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // GSAP entrance animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
    
    // Header entrance
    tl.fromTo(headerRef.current,
      { opacity: 0, y: 50, rotationX: -45 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        ease: "power3.out"
      }
    );
    
    // Cards stagger entrance
    tl.fromTo(cardsRef.current?.children || [],
      { opacity: 0, y: 100, rotationY: -45, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    );
    
    // Add hover animations to cards
    const cards = cardsRef.current?.children;
    if (cards) {
      Array.from(cards).forEach((card) => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            rotationY: 5,
            z: 50,
            duration: 0.3,
            ease: "power2.out"
          });
        };
        
        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        };
        
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
    }
  }, []);

  const alliances = [
    {
      id: 'th3',
      name: 'TH3',
      fullName: 'The Third Empire',
      rank: 1,
      members: 100,
      svsScore: 'Alliance Power #1',
      description: 'Born from the fusion of AOT and 3NG, TH3 represents elite strategic excellence and coordinated warfare.',
      achievements: ['#1 Alliance Power Ranking', 'Top-ranked in Crazy Joe', 'SVS Champions'],
      leader: 'Elite Command',
      color: '#00f0ff',
      bgGradient: 'from-[#00f0ff]/20 to-[#8efff9]/20',
      tagline: 'Fusion. Power. Strategy.'
    },
    {
      id: 'gow',
      name: 'GOW',
      fullName: 'Guardians of Winter',
      rank: 2,
      members: 95,
      svsScore: 'NAP5 Core',
      description: 'Defensive specialists and strategic coordinators maintaining server stability and tactical excellence.',
      achievements: ['NAP5 Founder', 'Strategic Defense', 'Unity Champions'],
      leader: 'Winter Command',
      color: '#8efff9',
      bgGradient: 'from-[#8efff9]/20 to-[#00f0ff]/20',
      tagline: 'Defense. Unity. Honor.'
    },
    {
      id: 'ris',
      name: 'RIS',
      fullName: 'Rising Storm',
      rank: 3,
      members: 88,
      svsScore: 'NAP5 Elite',
      description: 'Tactical innovators specializing in coordinated strikes and strategic positioning within NAP5.',
      achievements: ['NAP5 Core Member', 'Tactical Excellence', 'Event Coordination'],
      leader: 'Storm Leader',
      color: '#bf00ff',
      bgGradient: 'from-[#bf00ff]/20 to-[#ff004f]/20',
      tagline: 'Innovation. Precision. Storm.'
    },
    {
      id: '3ng',
      name: '3NG',
      fullName: 'Third Generation',
      rank: 4,
      members: 85,
      svsScore: 'NAP5 Veteran',
      description: 'Originally from server 1654, 3NG brings veteran experience and strategic depth to NAP5.',
      achievements: ['Cross-Server Veterans', 'Strategic Experience', 'NAP5 Founders'],
      leader: 'Veteran Command',
      color: '#ff004f',
      bgGradient: 'from-[#ff004f]/20 to-[#bf00ff]/20',
      tagline: 'Experience. Loyalty. Excellence.'
    },
    {
      id: 'phw',
      name: 'PHW',
      fullName: 'Phoenix Wings',
      rank: 5,
      members: 82,
      svsScore: 'NAP5 Rising',
      description: 'Rising alliance within NAP5 system, known for adaptability and coordinated event participation.',
      achievements: ['NAP5 Integration', 'Event Specialists', 'Rising Power'],
      leader: 'Phoenix Commander',
      color: '#fbbf24',
      bgGradient: 'from-[#fbbf24]/20 to-[#f59e0b]/20',
      tagline: 'Rebirth. Ascension. Victory.'
    }
  ];

  return (
    <section ref={sectionRef} id="alliances" className="py-20 bg-gradient-to-br from-[#050d1c] to-[#0f172a] relative overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[#8efff9] font-mono text-sm mb-4">
            &gt; ACCESSING_NAP5_DATABASE...
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gradient text-glow-cyan mb-6">
            NAP5 ALLIANCE NETWORK
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Five elite alliances united under the <span className="text-[#00f0ff]">NAP5 system</span> - 
            the most strategic and coordinated alliance network in Whiteout Survival.
          </p>
          <div className="mt-6 text-[#8efff9] font-mono text-sm">
            &gt; STATUS: FULLY_OPERATIONAL | MEMBERS: 450+ | SVS_RECORD: UNDEFEATED
          </div>
        </motion.div>

        {/* Alliances Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {alliances.map((alliance, index) => (
            <motion.div
              key={alliance.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedAlliance(
                selectedAlliance === alliance.id ? null : alliance.id
              )}
            >
              <div className={`relative panel-neon bg-gradient-to-br ${alliance.bgGradient} backdrop-blur-sm rounded-lg p-6 hover:border-[#00f0ff]/40 transition-all duration-300 transform hover:-translate-y-2 group animate-pulse-glow h-full flex flex-col`}>
                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2" style={{ borderColor: alliance.color }} />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2" style={{ borderColor: alliance.color }} />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2" style={{ borderColor: alliance.color }} />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2" style={{ borderColor: alliance.color }} />
                
                {/* Alliance Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-[#050d1c] font-bold text-lg font-mono relative"
                      style={{ 
                        backgroundColor: alliance.color,
                        boxShadow: `0 0 10px ${alliance.color}`
                      }}
                    >
                      {alliance.name}
                      <div className="absolute inset-0 border border-white/20 rounded-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white">
                        {alliance.fullName}
                      </h3>
                      <p className="text-sm text-gray-400 font-mono">[{alliance.name}]</p>
                      {alliance.tagline && (
                        <p className="text-xs font-mono" style={{ color: alliance.color }}>
                          {alliance.tagline}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5" style={{ color: alliance.color, filter: `drop-shadow(0 0 3px ${alliance.color})` }} />
                    <span className="font-bold text-white font-mono">#{alliance.rank}</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-[#00f0ff]" style={{ filter: 'drop-shadow(0 0 3px #00f0ff)' }} />
                    <span className="text-sm text-gray-300 font-mono">{alliance.members} MEMBERS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sword className="w-4 h-4 text-[#00f0ff]" style={{ filter: 'drop-shadow(0 0 3px #00f0ff)' }} />
                    <span className="text-sm text-gray-300 font-mono">{alliance.svsScore}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-grow">
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {alliance.description}
                  </p>
                </div>

                {/* Achievements Preview */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-1 flex-wrap gap-1">
                    {alliance.achievements.slice(0, 2).map((achievement, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs rounded font-mono border"
                        style={{ 
                          backgroundColor: `${alliance.color}20`,
                          borderColor: alliance.color,
                          color: alliance.color
                        }}
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                  <ArrowRight 
                    className="w-5 h-5 text-[#00f0ff] group-hover:translate-x-1 transition-transform" 
                    style={{ filter: 'drop-shadow(0 0 3px #00f0ff)' }}
                  />
                </div>

                {/* Expanded Details - Overlaid on card content */}
                {selectedAlliance === alliance.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 to-[#050d1c]/95 backdrop-blur-sm rounded-lg p-6 flex flex-col overflow-y-auto"
                  >
                    {/* Close Button */}
                    <button 
                      className="absolute top-4 right-4 text-[#00f0ff] hover:text-white transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAlliance(null);
                      }}
                    >
                      <ArrowRight className="w-5 h-5 rotate-45 transform" />
                    </button>

                    <div className="flex-grow">
                      <h4 className="font-semibold text-[#00f0ff] mb-3 text-lg">{alliance.fullName}</h4>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-white mb-2">Leadership</h5>
                        <p className="text-gray-300 text-sm">{alliance.leader}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-white mb-2">All Achievements</h5>
                        <div className="space-y-2">
                          {alliance.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <Star className="w-3 h-3" style={{ color: alliance.color }} />
                              <span className="text-xs text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-white mb-2">Recent Events</h5>
                        <div className="space-y-2">
                          <div className="bg-white/10 rounded p-2">
                            <div className="text-sm font-medium text-white">SVS Championship</div>
                            <div className="text-xs text-gray-400">Last Weekend</div>
                          </div>
                          <div className="bg-white/10 rounded p-2">
                            <div className="text-sm font-medium text-white">Alliance Training</div>
                            <div className="text-xs text-gray-400">3 days ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      className="mt-4 w-full py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 text-[#050d1c] text-sm"
                      style={{ 
                        background: `linear-gradient(to right, ${alliance.color}, ${alliance.color}dd)`,
                        boxShadow: `0 0 10px ${alliance.color}40`
                      }}
                    >
                      Apply to Join {alliance.name}
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Alliances;