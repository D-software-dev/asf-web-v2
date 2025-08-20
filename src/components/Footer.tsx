import Link from "next/link";
import {
  Facebook,
  Instagram,
  // Twitter, // Uncomment if you want to include Twitter
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { righteous, montserrat, rozhaOne } from "@/constants/Fonts";
import TiktokIcon from "./icons/TiktokIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-gray-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div className="space-y-6">
              <h3
                className={`${rozhaOne.className} text-2xl font-bold text-white`}
              >
                ASF UniPort
              </h3>
              <p
                className={`${montserrat.className} text-gray-300 leading-relaxed`}
              >
                Adventist Students Fellowship, University of Port Harcourt
                Chapter. Making Jesus known through fellowship, service, and
                spiritual growth.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://web.facebook.com/search/posts/?q=asf%20uniport"
                  target="_blank"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary/90 
                  text-white transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/asfuniport/"
                  target="_blank"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary/90 
                  text-white transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                {/* <a
                  href="#"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary/90 
                  text-white transition-colors duration-300"
                >
                  <Twitter size={20} />
                </a> */}
                <a
                  href="https://www.tiktok.com/search?q=asf%20uniport&t=1748463774533"
                  target="_blank"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary/90 
                  text-white transition-colors duration-300"
                >
                  <TiktokIcon size={20} />
                </a>
                <a
                  href="https://www.youtube.com/results?search_query=asf+uniport"
                  target="_blank"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary/90 
                  text-white transition-colors duration-300"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3
                className={`${righteous.className} text-xl font-semibold text-white`}
              >
                Quick Links
              </h3>
              <ul className={`${montserrat.className} space-y-4`}>
                {["About Us", "What We Do", "Our Beliefs", "Resources"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={
                          item == "What We Do"
                            ? `/#${item.toLowerCase().replace(/\s+/g, "-")}`
                            : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                        }
                        className="text-gray-300 hover:text-primary transition-colors duration-300 
                        flex items-center group"
                      >
                        <span
                          className="w-2 h-2 rounded-full bg-primary/50 mr-2 
                        group-hover:bg-primary transition-colors duration-300"
                        ></span>
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Service Times */}
            <div className="space-y-6">
              <h3
                className={`${righteous.className} text-xl font-semibold text-white`}
              >
                Service Times
              </h3>
              <ul className={`${montserrat.className} space-y-4`}>
                <li className="flex items-start space-x-3 text-gray-300">
                  <div className="p-2 rounded-lg bg-white/10 mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Main Fellowship</p>
                    <p>Saturdays, 10:00 AM</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <div className="p-2 rounded-lg bg-white/10 mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Bible Study</p>
                    <p>Wednesdays, 4:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-gray-300">
                  <div className="p-2 rounded-lg bg-white/10 mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Prayer Meeting</p>
                    <p>Fridays, 5:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3
                className={`${righteous.className} text-xl font-semibold text-white`}
              >
                Contact Us
              </h3>
              <ul className={`${montserrat.className} space-y-4`}>
                <li className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 rounded-lg bg-white/10">
                    <MapPin size={18} />
                  </div>
                  <span>East-West Road, Choba, Port Harcourt</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Mail size={18} />
                  </div>
                  <a
                    href="mailto:info@asfuniport.org"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    info@asfuniport.org
                  </a>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Phone size={18} />
                  </div>
                  <a
                    href="tel:+2348000000000"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    +234 800 000 0000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className={`${montserrat.className} text-gray-400 text-sm text-center md:text-left`}
            >
              © {currentYear} ASF UniPort. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className={`${montserrat.className} text-gray-400 hover:text-primary 
                  text-sm transition-colors duration-300`}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className={`${montserrat.className} text-gray-400 hover:text-primary 
                  text-sm transition-colors duration-300`}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
