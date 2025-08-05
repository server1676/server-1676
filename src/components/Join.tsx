'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { UserPlus, MessageCircle, Trophy, Shield, CheckCircle, ArrowRight, Users, Target } from 'lucide-react';

const Join = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const joinPaths = [
    {
      id: 'new-player',
      title: 'New to Server 1676',
      description: 'Perfect for players migrating to our server for the first time.',
      icon: UserPlus,
      color: 'from-blue-500 to-blue-600',
      steps: [
        'Complete server migration process',
        'Join Discord and get verified',
        'Attend orientation session',
        'Get matched with suitable alliance',
        'Begin integration training'
      ],
      benefits: [
        'Mentorship program',
        'Resource starter pack',
        'Strategic guidance',
        'Community integration'
      ]
    },
    {
      id: 'experienced-player',
      title: 'Experienced Player',
      description: 'For seasoned players looking to join our coordinated system.',
      icon: Trophy,
      color: 'from-purple-500 to-purple-600',
      steps: [
        'Submit application with game history',
        'Leadership interview process',
        'Skill assessment and placement',
        'Alliance assignment based on fit',
        'Integration into coordination systems'
      ],
      benefits: [
        'Leadership opportunities',
        'Advanced strategy access',
        'Cross-alliance projects',
        'Elite event participation'
      ]
    },
    {
      id: 'alliance-transfer',
      title: 'NAP5 Internal Transfer',
      description: 'Current NAP5 members seeking to transfer between alliances.',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      steps: [
        'Request transfer through leadership',
        'Current alliance approval',
        'Receiving alliance evaluation',
        'Cooling period completion',
        'Transfer finalization'
      ],
      benefits: [
        'Streamlined process',
        'Maintained relationships',
        'Continued coordination access',
        'No loss of server reputation'
      ]
    }
  ];



  return (
    <section id="join" className="py-20 bg-gradient-to-br from-[#101820] to-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Join Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {joinPaths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20 cursor-pointer ${
                selectedPath === path.id ? 'ring-2 ring-[#9DDFFF]' : ''
              }`}
              onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
            >
              {/* Path Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <path.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {path.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {path.description}
                </p>
              </div>

              {/* Quick Benefits */}
              <div className="space-y-2 mb-4">
                {path.benefits.slice(0, 2).map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#9DDFFF]" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Expand for Details */}
              <button className="w-full flex items-center justify-center space-x-2 text-[#9DDFFF] hover:text-white transition-colors">
                <span>View Process</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Expanded Details */}
              {selectedPath === path.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-white/20"
                >
                  <h4 className="font-semibold text-white mb-3">Application Process:</h4>
                  <div className="space-y-2 mb-4">
                    {path.steps.map((step, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#9DDFFF]/20 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-[#9DDFFF] text-xs font-bold">{i + 1}</span>
                        </div>
                        <span className="text-gray-300 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="font-semibold text-white mb-3">All Benefits:</h4>
                  <div className="space-y-2 mb-6">
                    {path.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#9DDFFF] to-[#7dd0ff] text-[#101820] py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                    Start Application
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>



        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#9DDFFF]/20 to-[#7dd0ff]/20 border border-[#9DDFFF]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-[#9DDFFF] mb-8 max-w-2xl mx-auto">
              Join the most successful and coordinated server in Whiteout Survival. 
              Experience strategic gameplay, strong alliances, and victory in every event.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#9DDFFF] to-[#7dd0ff] text-[#101820] px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Join Discord & Apply</span>
              </button>
              <button className="border-2 border-[#9DDFFF] text-[#9DDFFF] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#9DDFFF] hover:text-[#101820] transition-all duration-300">
                Learn More First
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Join;