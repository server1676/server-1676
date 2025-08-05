'use client';

import { motion } from 'framer-motion';
import EventTimeline from './EventTimeline';

const Events = () => {
  // Alliance-specific event timings with emojis
  const allianceEventData = [
    {
      name: 'TH3',
      color: '#00f0ff',
      events: [
        { name: 'Bear', emoji: '🧸', times: ['13:00 UTC', '19:00 UTC'], color: '#00f0ff' },
        { name: 'Foundry', emoji: '🔥', times: ['14:00 UTC', '21:00 UTC'], color: '#8efff9' },
        { name: 'Canyon', emoji: '🏔️', times: ['14:00 UTC', '21:00 UTC'], color: '#bf00ff' },
        { name: 'CJ', emoji: '🗳️', times: ['Vote Based'], color: '#a855f7', isVoteDependent: true }
      ]
    },
    {
      name: 'GOW',
      color: '#8efff9',
      events: [
        { name: 'Bear', emoji: '🧸', times: ['13:00 UTC', '19:00 UTC'], color: '#00f0ff' },
        { name: 'Foundry', emoji: '🔥', times: ['14:00 UTC', '21:00 UTC'], color: '#8efff9' },
        { name: 'Canyon', emoji: '🏔️', times: ['14:00 UTC', '21:00 UTC'], color: '#bf00ff' },
        { name: 'CJ', emoji: '🗳️', times: ['Vote Based'], color: '#a855f7', isVoteDependent: true }
      ]
    },
    {
      name: 'RIS',
      color: '#bf00ff',
      events: [
        { name: 'Bear', emoji: '🧸', times: ['13:00 UTC', '19:00 UTC'], color: '#00f0ff' },
        { name: 'Foundry', emoji: '🔥', times: ['14:00 UTC', '21:00 UTC'], color: '#8efff9' },
        { name: 'Canyon', emoji: '🏔️', times: ['14:00 UTC', '21:00 UTC'], color: '#bf00ff' },
        { name: 'CJ', emoji: '🗳️', times: ['Vote Based'], color: '#a855f7', isVoteDependent: true }
      ]
    },
    {
      name: '3NG',
      color: '#ff004f',
      events: [
        { name: 'Bear', emoji: '🧸', times: ['13:00 UTC', '19:00 UTC'], color: '#00f0ff' },
        { name: 'Foundry', emoji: '🔥', times: ['14:00 UTC', '21:00 UTC'], color: '#8efff9' },
        { name: 'Canyon', emoji: '🏔️', times: ['14:00 UTC', '21:00 UTC'], color: '#bf00ff' },
        { name: 'CJ', emoji: '🗳️', times: ['Vote Based'], color: '#a855f7', isVoteDependent: true }
      ]
    },
    {
      name: 'PHW',
      color: '#fbbf24',
      events: [
        { name: 'Bear', emoji: '🧸', times: ['13:00 UTC', '19:00 UTC'], color: '#00f0ff' },
        { name: 'Foundry', emoji: '🔥', times: ['14:00 UTC', '21:00 UTC'], color: '#8efff9' },
        { name: 'Canyon', emoji: '🏔️', times: ['14:00 UTC', '21:00 UTC'], color: '#bf00ff' },
        { name: 'CJ', emoji: '🗳️', times: ['Vote Based'], color: '#a855f7', isVoteDependent: true }
      ]
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-[#0f172a] to-[#050d1c] relative overflow-hidden">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[#8efff9] font-mono text-sm mb-4">
            &gt; NAP5_EVENT_COORDINATION_SYSTEM...
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gradient text-glow-cyan mb-6">
            EVENT SCHEDULE MATRIX
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Synchronized event timing across all <span className="text-[#00f0ff]">NAP5 alliances</span>. 
            Coordinated strategy ensures maximum efficiency and dominance.
          </p>
          <div className="mt-6 text-[#8efff9] font-mono text-sm">
            &gt; ALLIANCE_STATUS: ACTIVE | NETWORKS: {allianceEventData.length} | COORDINATION: AUTONOMOUS
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[#8efff9] font-mono text-sm mb-4">
            &gt; VERTICAL_TIMELINE_SYSTEM_ACTIVE
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Interactive timeline view for each alliance&apos;s event schedule. 
            Events <span className="text-[#00f0ff]">fade in on scroll</span> with 
            <span className="text-purple-400"> glowing icons</span> and 
            <span className="text-purple-400">vote-based CJ</span> scheduling.
          </p>
          <div className="mt-6 flex justify-center space-x-8 text-sm font-mono text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🧸</span>
              <span>Bear Hunt</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔥</span>
              <span>Foundry</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏔️</span>
              <span>Canyon</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl animate-pulse">🗳️</span>
              <span className="text-purple-400">CJ (Vote)</span>
            </div>
          </div>
        </div>

        {/* Alliance Event Timelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
          {allianceEventData.map((alliance, index) => (
            <motion.div
              key={alliance.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <EventTimeline
                allianceName={alliance.name}
                allianceColor={alliance.color}
                events={alliance.events}
              />
            </motion.div>
          ))}
        </div>

        {/* Event Coordination CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative panel-neon bg-gradient-to-r from-[#00f0ff]/10 to-[#8efff9]/10 rounded-lg p-8">
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-[#00f0ff]" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-[#00f0ff]" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-[#00f0ff]" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-[#00f0ff]" />
            
            <div className="text-[#8efff9] font-mono text-sm mb-2">
              &gt; ALLIANCE_COORDINATION_HUB
            </div>
            <h3 className="text-2xl font-heading font-bold text-gradient text-glow-cyan mb-4">
              JOIN YOUR ALLIANCE EVENTS
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Connect with your specific alliance leadership on Discord for event coordination. 
              Each alliance manages their own <span className="text-purple-400">voting schedules</span> and 
              <span className="text-[#00f0ff]">event timings</span>.
            </p>
            <a
              href="https://discord.gg/server1676"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block bg-gradient-to-r from-[#00f0ff] to-[#8efff9] text-[#050d1c] px-8 py-3 rounded-lg font-semibold font-mono hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
            >
              JOIN_ALLIANCE_DISCORD
              {/* Corner accents for button */}
              <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-l border-t border-[#00f0ff]" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-r border-t border-[#00f0ff]" />
              <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-l border-b border-[#00f0ff]" />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-r border-b border-[#00f0ff]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;