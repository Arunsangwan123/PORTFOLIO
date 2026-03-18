import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ChevronRight, ExternalLink } from 'lucide-react';

const Experience = () => {
    return (
        <div id="experience" className="w-full py-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight font-display drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Experience &amp; <span className="text-gradient">Training</span></h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)] mb-8"></div>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    A timeline of my specialized technical training programs that have shaped my engineering skills and problem-solving abilities.
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-12">

                {/* DSA Training */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group"
                >
                    <div className="absolute -inset-20 bg-gradient-to-bl from-accent-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-shrink-0">
                            <div className="p-4 rounded-2xl bg-accent-500/10 text-accent-400 shadow-[0_0_15px_rgba(192,38,211,0.2)] inline-flex items-center justify-center">
                                <BookOpen size={32} />
                            </div>
                        </div>

                        <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h2 className="text-3xl font-bold text-white font-display mb-2 group-hover:text-accent-400 transition-colors">
                                        Data Structures using C++
                                    </h2>
                                    <span className="inline-flex items-center text-xl font-medium text-gray-300">
                                        Lovely Professional University (LPU)
                                    </span>
                                </div>
                                <div className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-400 text-sm font-bold tracking-widest uppercase">
                                    <Calendar size={14} className="mr-2" />
                                    Jun — Jul 2025
                                </div>
                            </div>

                            <p className="text-gray-400 font-light leading-relaxed mb-6 p-4 rounded-xl bg-black/20 border border-white/5">
                                This training strengthened engineering foundations by breaking down complex problems into clean, optimized logic using C++ and Data Structures & Algorithms.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start text-gray-300 font-light leading-relaxed">
                                    <ChevronRight className="flex-shrink-0 text-accent-500 mt-1 mr-3" size={18} />
                                    <span>Strengthened engineering foundations by breaking down complex problems into clean, optimized logic.</span>
                                </li>
                                <li className="flex items-start text-gray-300 font-light leading-relaxed">
                                    <ChevronRight className="flex-shrink-0 text-accent-500 mt-1 mr-3" size={18} />
                                    <span>Consistent work with DSA topics like recursion, trees, and dynamic programming improved problem-solving speed and structured thinking.</span>
                                </li>
                                <li className="flex items-start text-gray-300 font-light leading-relaxed">
                                    <ChevronRight className="flex-shrink-0 text-accent-500 mt-1 mr-3" size={18} />
                                    <span>Applied theoretical concepts to practical problems through coding exercises and mini-projects, enhancing real-world problem-solving skills.</span>
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {["C++", "Data Structures", "Algorithms", "Recursion", "Dynamic Programming", "Trees"].map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-white/5 border border-white/10 rounded-full hover:bg-accent-500/20 hover:border-accent-500/50 hover:text-accent-400 transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-white/5 flex items-center">
                                <a 
                                    href="https://drive.google.com/file/d/1b5b0fuHW4HSX34CW07mT0U8nk-hXDu33/view?usp=drive_link" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-bold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer text-accent-400 bg-accent-500/10 hover:bg-accent-500 hover:text-black shadow-[0_0_15px_rgba(192,38,211,0.3)] hover:shadow-[0_0_25px_rgba(192,38,211,0.6)]"
                                >
                                    <ExternalLink size={18} className="mr-2" />
                                    View Training Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Experience;
