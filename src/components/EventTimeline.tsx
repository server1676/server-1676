'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AllianceEvent {
  name: string;
  emoji: string;
  times: string[];
  color: string;
  isVoteDependent?: boolean;
}

interface EventTimelineProps {
  allianceName: string;
  allianceColor: string;
  events: AllianceEvent[];
}

interface TimelineEventProps {
  event: AllianceEvent;
  index: number;
}

const TimelineEvent = ({ event, index }: TimelineEventProps) => {
  const [eventRef, eventInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={eventRef}
      initial={{ opacity: 0, x: -30 }}
      animate={eventInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="relative flex items-center space-x-4"
    >
      {/* Timeline Node */}
      <motion.div
        className="relative z-10"
        animate={eventInView ? { 
          scale: [1, 1.2, 1],
          boxShadow: [`0 0 0px ${event.color}`, `0 0 20px ${event.color}80`, `0 0 10px ${event.color}60`]
        } : {}}
        transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
      >
        <div 
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl relative transition-all duration-500 ${
            event.isVoteDependent ? 'animate-pulse' : ''
          }`}
          style={{ 
            backgroundColor: event.isVoteDependent ? '#7c3aed' : event.color,
            border: `2px solid ${event.isVoteDependent ? '#a855f7' : event.color}`,
            boxShadow: eventInView ? `0 0 20px ${event.isVoteDependent ? '#a855f7' : event.color}80` : `0 0 8px ${event.isVoteDependent ? '#a855f7' : event.color}40`
          }}
        >
          <span className="drop-shadow-sm">{event.emoji}</span>
          
          {/* Pulsing ring for vote-dependent events */}
          {event.isVoteDependent && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-400"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </div>
      </motion.div>

      {/* Event Content */}
      <motion.div
        className={`flex-grow p-4 rounded-lg backdrop-blur-sm transition-all duration-300 ${
          event.isVoteDependent 
            ? 'bg-purple-500/20 border border-purple-500/40' 
            : 'bg-white/5 border border-gray-600/30'
        }`}
        style={event.isVoteDependent ? { 
          boxShadow: '0 0 15px rgba(168, 85, 247, 0.3)' 
        } : {}}
        animate={eventInView ? { 
          borderColor: event.isVoteDependent ? '#a855f7' : event.color + '60'
        } : {}}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xl font-mono font-bold text-white mb-2 flex items-center space-x-2">
              <span>{event.name}</span>
              {event.isVoteDependent && (
                <span className="text-purple-400 text-sm animate-pulse">
                  [VOTE_BASED]
                </span>
              )}
            </h4>
            <div className="flex flex-wrap gap-2">
              {event.times.map((time, i) => (
                <motion.span 
                  key={i}
                  className={`px-3 py-1 rounded font-mono text-sm font-medium transition-all duration-300 ${
                    event.isVoteDependent
                      ? 'bg-purple-500/30 text-purple-200 border border-purple-400/50'
                      : 'bg-gray-700/50 text-gray-200 border border-gray-500/50'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={eventInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.2 + 0.7 + i * 0.1, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: event.isVoteDependent ? '#7c3aed40' : event.color + '20',
                    borderColor: event.isVoteDependent ? '#a855f7' : event.color,
                    color: event.isVoteDependent ? '#c4b5fd' : '#ffffff'
                  }}
                >
                  {time}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Status Indicator */}
          <motion.div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: event.isVoteDependent ? '#a855f7' : event.color }}
            animate={eventInView ? {
              boxShadow: [
                `0 0 0px ${event.isVoteDependent ? '#a855f7' : event.color}`,
                `0 0 8px ${event.isVoteDependent ? '#a855f7' : event.color}80`,
                `0 0 0px ${event.isVoteDependent ? '#a855f7' : event.color}`
              ]
            } : {}}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: index * 0.2 + 1 
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const EventTimeline = ({ allianceName, allianceColor, events }: EventTimelineProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Alliance Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg font-mono relative"
            style={{ 
              backgroundColor: allianceColor,
              color: '#050d1c',
              boxShadow: `0 0 15px ${allianceColor}60`
            }}
          >
            {allianceName}
            <div className="absolute inset-0 border border-white/20 rounded-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-white">
              {allianceName} Events
            </h3>
            <div className="text-sm font-mono" style={{ color: allianceColor }}>
              VERTICAL_TIMELINE_ACTIVE
            </div>
          </div>
        </div>
        
        {/* Timeline Separator Line */}
        <div 
          className="h-px w-full relative"
          style={{ 
            background: `linear-gradient(to right, ${allianceColor}00, ${allianceColor}, ${allianceColor}00)`,
            boxShadow: `0 0 8px ${allianceColor}60`
          }}
        />
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div 
          className="absolute left-8 top-0 w-0.5 h-full"
          style={{ 
            background: `linear-gradient(to bottom, ${allianceColor}80, ${allianceColor}20)`,
            boxShadow: `0 0 6px ${allianceColor}40`
          }}
        />

        {/* Timeline Events */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <TimelineEvent 
              key={event.name}
              event={event}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EventTimeline;