import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "Fair Trade Agri Portal",
            description: "A comprehensive web application enabling farmers to receive location-based crop recommendations and participate in a transparent marketplace, reducing dependency on intermediaries.",
            features: [
                "Real-time weather API integration for localized crop suitability assessments",
                "Dynamic marketplace platform for direct farmer-to-buyer crop trading",
                "Automated task recommendations based on seasonal and regional agricultural data",
                "Secure user authentication and comprehensive farm management dashboard"
            ],
            techStack: ["React", "Node.js", "MySQL", "Tailwind CSS"],
            githubLink: "https://github.com/Arunsangwan123/Fair-Crop-Trade-web-Application"
        },
        {
            title: "Car Rental Website",
            description: "An online car rental platform simplifying bookings with a responsive frontend, dynamic database integration, and JS-based filtering for pricing and availability.",
            features: [
                "Responsive frontend managing 20+ car records, increasing user engagement by ~35%",
                "Dynamic UI with database integration for pricing and availability, reducing update effort by ~30%",
                "JS-based filtering and booking logic with MySQL, reducing selection time by ~40%",
                "Enhanced navigation and optimized search experience"
            ],
            techStack: ["HTML", "CSS", "JavaScript", "MySQL"],
            githubLink: "https://github.com/Arunsangwan123/CAR-RENTAL-"
        }
    ];

    return (
        <div id="projects" className="w-full py-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight font-display drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Featured <span className="text-gradient">Projects</span></h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)] mb-8"></div>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    A selection of my recent engineering work showcasing backend architecture, frontend integration, and structured database design.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                        delay={index * 0.2}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
