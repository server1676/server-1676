'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Shield, Users, Calendar, MessageCircle, Scroll, UserPlus } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: Shield },
    { href: '#alliances', label: 'Alliances', icon: Users },
    { href: '#events', label: 'Events', icon: Calendar },
    { href: '#harmony', label: 'Harmony', icon: MessageCircle },
    { href: '#rules', label: 'Rules', icon: Scroll },
    { href: '#join', label: 'Join', icon: UserPlus },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 panel-neon backdrop-blur-md border-b border-[#00f0ff]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="w-8 h-8 text-[#00f0ff]" style={{ filter: 'drop-shadow(0 0 5px #00f0ff)' }} />
                <div className="absolute -inset-1 border border-[#00f0ff]/30 rounded" />
              </div>
              <span className="font-heading font-bold text-xl text-[#00f0ff] font-mono">
                SERVER_1676
              </span>
            </div>
            
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-[#00f0ff] transition-all duration-200 font-mono text-sm relative"
                >
                  <item.icon className="w-4 h-4 group-hover:drop-shadow-[0_0_5px_#00f0ff]" />
                  <span className="font-medium">{item.label.toUpperCase()}</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f0ff] group-hover:w-full transition-all duration-300" style={{ boxShadow: '0 0 5px #00f0ff' }} />
                </a>
              ))}
              
              <a
                href="https://discord.gg/server1676"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-gradient-to-r from-[#00f0ff] to-[#8efff9] text-[#050d1c] px-6 py-2 rounded-lg font-semibold font-mono transition-all duration-200 transform hover:scale-105 animate-pulse-glow"
              >
                JOIN_DISCORD
                {/* Corner accents */}
                <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-l border-t border-[#00f0ff]" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-r border-t border-[#00f0ff]" />
                <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-l border-b border-[#00f0ff]" />
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-r border-b border-[#00f0ff]" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-50 panel-neon backdrop-blur-md border-b border-[#00f0ff]/30">
          <div className="flex items-center justify-between px-4 h-16">
            <div className="flex items-center space-x-2">
              <Shield className="w-7 h-7 text-[#00f0ff]" style={{ filter: 'drop-shadow(0 0 3px #00f0ff)' }} />
              <span className="font-heading font-bold text-lg text-[#00f0ff] font-mono">SERVER_1676</span>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#00f0ff] hover:text-[#8efff9] transition-colors relative"
              style={{ filter: 'drop-shadow(0 0 3px #00f0ff)' }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <div className="absolute inset-0 border border-[#00f0ff]/30 rounded" />
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#050d1c]/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed top-16 right-0 bottom-0 z-50 w-80 panel-neon border-l border-[#00f0ff]/30"
          style={{ background: 'linear-gradient(135deg, #050d1c 0%, #0f172a 100%)' }}
        >
          <div className="p-6 space-y-4">
            <div className="text-[#8efff9] font-mono text-sm mb-6">
              &gt; NAVIGATION_MENU
            </div>
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 p-3 rounded-lg panel-neon hover:border-[#00f0ff]/40 transition-all duration-200 group"
              >
                <item.icon className="w-5 h-5 text-[#00f0ff] group-hover:drop-shadow-[0_0_5px_#00f0ff]" />
                <span className="text-gray-300 font-medium font-mono">{item.label.toUpperCase()}</span>
              </motion.a>
            ))}
            
            <motion.a
              href="https://discord.gg/server1676"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navItems.length * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="relative block w-full mt-6 bg-gradient-to-r from-[#00f0ff] to-[#8efff9] text-[#050d1c] px-6 py-3 rounded-lg font-semibold text-center font-mono transition-all duration-200 animate-pulse-glow"
            >
              JOIN_DISCORD
              {/* Corner accents */}
              <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-l border-t border-[#00f0ff]" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-r border-t border-[#00f0ff]" />
              <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-l border-b border-[#00f0ff]" />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-r border-b border-[#00f0ff]" />
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-40 panel-neon backdrop-blur-md border-t border-[#00f0ff]/30 lg:hidden">
          <div className="flex items-center justify-around py-3">
            {navItems.slice(0, 5).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex flex-col items-center p-2 text-gray-400 hover:text-[#00f0ff] transition-all duration-200 group"
              >
                <item.icon className="w-5 h-5 group-hover:drop-shadow-[0_0_3px_#00f0ff]" />
                <span className="text-xs mt-1 font-mono">{item.label.toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;