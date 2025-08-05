'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, Trophy, Zap, Users, Target, Swords, Shield } from 'lucide-react';

const Events = () => {
  const [activeView, setActiveView] = useState('schedule');

  // NAP5 Coordinated Event Schedule - All alliances follow the same times
  const eventSchedule = [
    {
      id: 'bear',
      name: 'Bear Hunt',
      icon: Zap,
      times: ['13:00 UTC', '19:00 UTC'],
      description: 'Coordinated bear hunting across all NAP5 alliances for maximum efficiency.',
      type: 'PvE',
      frequency: 'Daily',
      color: '#00f0ff'
    },
    {
      id: 'foundry',
      name: 'Foundry',
      icon: Target,
      times: ['14:00 UTC', '21:00 UTC'],
      description: 'Strategic foundry operations with coordinated timing for all alliances.',
      type: 'Resource',
      frequency: 'Daily',
      color: '#8efff9'
    },
    {
      id: 'canyon',
      name: 'Canyon',
      icon: Swords,
      times: ['14:00 UTC', '21:00 UTC'],
      description: 'Canyon events with synchronized participation from NAP5 alliances.',
      type: 'Combat',
      frequency: 'Daily',
      color: '#bf00ff'
    },
    {
      id: 'cj',
      name: 'Crazy Joe',
      icon: Trophy,
      times: ['Alliance Vote Dependent'],
      description: 'Strategic event timing decided by individual alliance vote and coordination.',
      type: 'Strategic',
      frequency: 'Varies',
      color: '#ff004f'
    }
  ];

  const alliances = ['TH3', 'GOW', 'RIS', '3NG', 'PHW'];

  const upcomingEvents = [
    {
      id: 1,
      title: 'SVS Preparation Phase',
      type: 'SVS',
      time: 'Next SVS Round',
      participants: alliances,
      description: 'Coordinated preparation for the next SVS round. Server 1676 has never lost a preparation phase.',
      priority: 'critical',
      icon: Shield,
      status: 'ACTIVE'
    },
    {
      id: 2,
      title: 'Brothers in Arms',
      type: 'Internal',
      time: 'This Weekend',
      participants: alliances,
      description: 'Internal NAP5 competition event promoting healthy rivalry within the alliance system.',
      priority: 'high',
      icon: Users,
      status: 'SCHEDULED'
    },
    {
      id: 3,
      title: 'Discord Coordination Meeting',
      type: 'Strategy',
      time: 'Weekly',
      participants: ['NAP Leaders'],
      description: 'Real-time strategy coordination via Discord voice channels.',
      priority: 'medium',
      icon: Target,
      status: 'RECURRING'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-[#ff004f] bg-[#ff004f]/20 border-[#ff004f]';
      case 'high': return 'text-[#bf00ff] bg-[#bf00ff]/20 border-[#bf00ff]';
      case 'medium': return 'text-[#fbbf24] bg-[#fbbf24]/20 border-[#fbbf24]';
      case 'low': return 'text-[#00f0ff] bg-[#00f0ff]/20 border-[#00f0ff]';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'SVS': return 'bg-[#ff004f]/20 text-[#ff004f] border-[#ff004f]';
      case 'Internal': return 'bg-[#8efff9]/20 text-[#8efff9] border-[#8efff9]';
      case 'Strategy': return 'bg-[#bf00ff]/20 text-[#bf00ff] border-[#bf00ff]';
      case 'PvE': return 'bg-[#00f0ff]/20 text-[#00f0ff] border-[#00f0ff]';
      case 'Resource': return 'bg-[#fbbf24]/20 text-[#fbbf24] border-[#fbbf24]';
      case 'Combat': return 'bg-[#ff004f]/20 text-[#ff004f] border-[#ff004f]';
      case 'Strategic': return 'bg-[#bf00ff]/20 text-[#bf00ff] border-[#bf00ff]';
      default: return 'bg-gray-400/20 text-gray-400 border-gray-400';
    }
  };

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
            &gt; SYNCHRONIZATION_STATUS: ACTIVE | ALLIANCES: {alliances.length} | COORDINATION: 100%
          </div>
        </motion.div>

        {/* View Navigation */}
        <div className="flex justify-center mb-12">
          <div className="panel-neon backdrop-blur-md rounded-lg p-2">
            <div className="flex space-x-2">
              {[
                { key: 'schedule', label: 'Event Schedule', icon: Calendar },
                { key: 'upcoming', label: 'Strategic Events', icon: Clock }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveView(tab.key)}
                  className={`relative px-6 py-3 rounded-lg font-semibold font-mono transition-all duration-200 flex items-center space-x-2 ${
                    activeView === tab.key
                      ? 'bg-gradient-to-r from-[#00f0ff] to-[#8efff9] text-[#050d1c]'
                      : 'text-gray-300 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label.toUpperCase()}</span>
                  {activeView === tab.key && (
                    <>
                      <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-l border-t border-[#00f0ff]" />
                      <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-r border-t border-[#00f0ff]" />
                      <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-l border-b border-[#00f0ff]" />
                      <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-r border-b border-[#00f0ff]" />
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Event Schedule View */}
        {activeView === 'schedule' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="text-[#8efff9] font-mono text-sm mb-2">
                &gt; NAP5_SYNCHRONIZED_SCHEDULE
              </div>
              <p className="text-gray-300">
                All NAP5 alliances ({alliances.join(', ')}) follow the same event timing for maximum coordination.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eventSchedule.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative panel-neon bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:border-[#00f0ff]/40 transition-all duration-300"
                >
                  {/* Corner Accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2" style={{ borderColor: event.color }} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2" style={{ borderColor: event.color }} />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2" style={{ borderColor: event.color }} />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2" style={{ borderColor: event.color }} />

                  {/* Event Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ 
                          backgroundColor: `${event.color}20`,
                          border: `1px solid ${event.color}`,
                          boxShadow: `0 0 10px ${event.color}30`
                        }}
                      >
                        <event.icon 
                          className="w-5 h-5" 
                          style={{ 
                            color: event.color,
                            filter: `drop-shadow(0 0 3px ${event.color})`
                          }} 
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg font-mono">
                          {event.name}
                        </h3>
                        <span 
                          className="inline-block px-2 py-1 rounded text-xs font-mono border"
                          style={{ 
                            backgroundColor: `${event.color}20`,
                            borderColor: event.color,
                            color: event.color
                          }}
                        >
                          {event.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-gray-400 text-xs font-mono mb-1">{event.frequency}</div>
                    </div>
                  </div>

                  {/* Times */}
                  <div className="mb-4">
                    <div className="text-[#8efff9] font-mono text-sm mb-2">EVENT_TIMES:</div>
                    <div className="flex flex-wrap gap-2">
                      {event.times.map((time, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-[#00f0ff]/20 text-[#00f0ff] rounded font-mono text-sm border border-[#00f0ff]/30"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Strategic Events View */}
        {activeView === 'upcoming' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative panel-neon backdrop-blur-md rounded-lg p-6 hover:border-[#00f0ff]/40 transition-all duration-300"
              >
                {/* Status Indicator */}
                <div className="absolute -top-2 -right-2">
                  <div 
                    className={`px-2 py-1 rounded text-xs font-mono border ${getPriorityColor(event.priority)}`}
                  >
                    {event.status}
                  </div>
                </div>

                {/* Event Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#00f0ff]/20 rounded-lg flex items-center justify-center border border-[#00f0ff]/30">
                      <event.icon className="w-5 h-5 text-[#00f0ff]" style={{ filter: 'drop-shadow(0 0 3px #00f0ff)' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg leading-tight font-mono">
                        {event.title}
                      </h3>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-mono mt-1 border ${getTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4 text-[#8efff9]" />
                    <span className="font-mono">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Users className="w-4 h-4 text-[#8efff9]" />
                    <span className="font-mono">{event.participants.join(', ')}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

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
              &gt; COORDINATION_PROTOCOL
            </div>
            <h3 className="text-2xl font-heading font-bold text-gradient text-glow-cyan mb-4">
              REAL-TIME SYNCHRONIZATION
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our Discord server for real-time event coordination and strategic planning 
              with <span className="text-[#00f0ff]">NAP5 leadership</span>.
            </p>
            <a
              href="https://discord.gg/server1676"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block bg-gradient-to-r from-[#00f0ff] to-[#8efff9] text-[#050d1c] px-8 py-3 rounded-lg font-semibold font-mono hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
            >
              JOIN_COORDINATION_CHANNEL
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