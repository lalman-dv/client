import logo from "/logo.png";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-linear-to-b from-[#f6f1ff] via-[#F1EAFF] to-[#FFFFFF] text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center space-x-3 mb-6"
        >
          <img alt="logo" className="h-20 md:h-30" src={logo} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center max-w-xl text-sm font-normal leading-relaxed"
        >
          Empowering job seekers worldwide with AI‑driven resume tools. Craft
          polished resumes in minutes and unlock new career opportunities.
        </motion.p>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          <a href="#">Resume-Builder </a> ©2025. All rights reserved.
        </div>
      </motion.div>
      {/* Social Links Icons */}
      <SocialLinks />
    </motion.footer>
  );
};

export default Footer;
