import { useState } from "react";
import Link from "next/link";
import { HandHeart, Menu, X, Phone, Mail, MapPin, Clock, DivideCircleIcon } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { montserrat, rozhaOne } from "@/constants/Fonts";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Top bar information
  const contactInfo = {
    phone: "+234 123 456 7890",
    email: "info@asfuniport.org",
    address: "East-West Road, Choba, Port Harcourt",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM",
  };

  // Essential navigation links
  const mainNavLinks = [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/contact", label: "Contact Us" },
  ];

  // Full menu links grouped by category
  const menuGroups = [
    {
      title: "About Us",
      links: [
        { href: "/about-us", label: "Our Story" },
        { href: "/team", label: "Leadership" },
        { href: "/beliefs", label: "Our Beliefs" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/sermons", label: "Sermons" },
        { href: "/bible-study", label: "Bible Study" },
        { href: "/devotionals", label: "Daily Devotionals" },
      ],
    },
    {
      title: "Get Involved",
      links: [
        { href: "/events", label: "Events" },
        { href: "/ministries", label: "Ministries" },
        { href: "/volunteer", label: "Volunteer" },
      ],
    },
    {
      title: "Connect",
      links: [
        { href: "/community", label: "Community" },
        { href: "/prayer", label: "Prayer Requests" },
        { href: "/ask", label: "Ask a Question" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Main Navbar */}
      <nav className="bg-white/80 dark:bg-[rgba(23,37,30,0.87)] dark:border-none backdrop-blur-xl shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-4 group">
                <div className="flex items-center gap-3">
                  {[
                    { src: "/icons/naas-logo.png", alt: "NAAS" },
                    { src: "/icons/pcm-logo.png", alt: "PCM" },
                    { src: "/icons/adventist.svg", alt: "Adventist" },
                  ].map((logo) => (
                    <div
                      key={logo.alt}
                      className="relative w-[45px] h-[45px] 
                      transform transition-transform duration-300 
                      group-hover:scale-105"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
                <h1
                  style={{ fontFamily: rozhaOne.style.fontFamily }}
                  className="text-primary text-2xl font-bold hidden sm:block
                    transform transition-all duration-300 
                    group-hover:text-primary/80"
                >
                  ASF UNIPORT
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/#${link.href.replace("/", "")}`}  
                  style={{ fontFamily: montserrat.style.fontFamily }}
                  className="text-gray-700 dark:text-gray-300 px-3 py-2 text-base font-medium 
                    relative group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-primary 
                    transform origin-left scale-x-0 transition-transform 
                    duration-300 group-hover:scale-x-100"
                  />
                </Link>
              ))}
            </div>
              

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/donate"
                style={{ fontFamily: montserrat.style.fontFamily }}
                className="bg-primary text-white px-6 py-3 text-base font-medium 
                  rounded-xl hover:bg-primary/90 transform hover:scale-105 
                  transition-all duration-300 shadow-lg hover:shadow-primary/20 
                  flex items-center gap-2"
              >
                Donate
                <HandHeart size={20} />
              </Link>
              <Button btnCss="p-3 rounded-xl dark:text-gray-300 text-gray-700 hover:text-primary 
                  hover:bg-primary/5 transition-all duration-300 
                  transform hover:scale-110"/>
              <button
                onClick={() => setIsOpen(true)}
                className="p-3 rounded-xl dark:text-gray-300 text-gray-700 hover:text-primary 
                  hover:bg-primary/5 transition-all duration-300 
                  transform hover:scale-110"
              >
                <Menu size={28} />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <Button btnCss="md:hidden p-2 rounded-xl dark:text-gray-300 text-gray-700 hover:text-primary 
                  hover:bg-primary/5 transition-all duration-300"/>
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 rounded-xl dark:text-gray-300 text-gray-700 hover:text-primary 
                  hover:bg-primary/5 transition-all duration-300"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white dark:bg-[#121212] z-50 custom-scrollbar overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-xl text-gray-700 dark:text-gray-200 hover:text-primary 
                    hover:bg-primary/5 transition-all duration-300 
                    transform hover:scale-110"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Contact Information */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              >
                {[
                  { icon: Phone, text: contactInfo.phone },
                  { icon: Mail, text: contactInfo.email },
                  { icon: MapPin, text: contactInfo.address },
                  { icon: Clock, text: contactInfo.hours },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 
                    rounded-xl bg-gray-50 dark:bg-[#080808fd] hover:bg-gray-100 dark:hover:bg-[#080808fd]/50 transition-colors 
                    duration-300"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <item.icon size={24} />
                    </div>
                    <span
                      style={{ fontFamily: montserrat.style.fontFamily }}
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Navigation Groups */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {menuGroups.map((group, groupIndex) => (
                  <motion.div
                    key={group.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + groupIndex * 0.1 }}
                  >
                    <h2
                      style={{ fontFamily: rozhaOne.style.fontFamily }}
                      className="text-primary font-bold text-xl mb-6"
                    >
                      {group.title}
                    </h2>
                    <ul className="space-y-4">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{ fontFamily: montserrat.style.fontFamily }}
                            className="text-gray-600 dark:text-gray-400 hover:text-primary block py-2 
                              text-lg transition-all duration-300 hover:translate-x-2 
                              relative group"
                          >
                            <span className="relative z-10">{link.label}</span>
                            <span
                              className="absolute left-0 bottom-0 w-0 h-0.5 
                              bg-primary/20 transition-all duration-300 
                              group-hover:w-full"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-16 text-center"
              >
                <Link
                  href="/donate"
                  onClick={() => setIsOpen(false)}
                  style={{ fontFamily: montserrat.style.fontFamily }}
                  className="inline-flex items-center gap-3 bg-primary text-white 
                    px-10 py-4 rounded-xl text-xl font-medium hover:bg-primary/90 
                    transform hover:scale-105 transition-all duration-300 
                    shadow-lg hover:shadow-primary/20"
                >
                  Support Our Mission
                  <HandHeart size={24} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
