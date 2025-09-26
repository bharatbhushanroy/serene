"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  { name: "Alice Johnson", role: "CEO", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "Bob Williams", role: "CTO", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Charlie Brown", role: "Lead Developer", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Diana Prince", role: "Product Manager", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
  { name: "Eve Adams", role: "UX Designer", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
  { name: "Frank White", role: "Marketing Lead", avatar: "https://randomuser.me/api/portraits/men/6.jpg" },
  { name: "Grace Lee", role: "Data Scientist", avatar: "https://randomuser.me/api/portraits/women/7.jpg" },
  { name: "Henry King", role: "Operations Head", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
];

const TeamSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="py-20 px-6 md:px-12 lg:px-24 bg-fintech-dark-blue text-white text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        Meet Our <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Exceptional Team</span>
      </h2>
      <p className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Our Army of <span className="text-fintech-orange-accent">50+</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-fintech-simulator-card-bg rounded-xl p-6 shadow-lg flex flex-col items-center border border-fintech-border-light hover:border-fintech-blue-accent transition-all duration-300"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Avatar className="w-24 h-24 mb-4 border-4 border-fintech-orange-accent">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold text-fintech-text-primary mb-1">{member.name}</h3>
            <p className="text-fintech-text-muted text-sm">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TeamSection;