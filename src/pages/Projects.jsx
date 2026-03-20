import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "Event Dashboard",
            description: "An Event & Task Management System built with Core PHP offering comprehensive task tracking, deadline management, and backend logic, improving efficiency by ~35%.",
            features: [
                "15+ backend features including task prioritization & deadline tracking",
                "State-transition logic handling 100+ test task entries, reducing manual updates by ~30%",
                "Input validation, prepared statements & session authentication reducing vulnerabilities by ~40%",
                "Secured 100+ test user records with robust authentication"
            ],
            techStack: ["Tailwind CSS", "HTML", "PHP", "JavaScript"],
            githubLink: "https://github.com/Arunsangwan123/CAR-RENTAL-"
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
            githubLink: "https://github.com/Arunsangwan123/Fair-Crop-Trade-web-Application"
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
