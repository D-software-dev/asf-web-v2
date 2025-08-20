import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { righteous, montserrat, rozhaOne } from "@/constants/Fonts";

const featuredEvents = [
  {
    id: 1,
    title: "Campus Revival 2023",
    date: "November 15-21, 2023",
    image: "/images/events/revival-2023.jpg",
    category: "Special Program",
  },
  {
    id: 2,
    title: "Christmas Convention",
    date: "December 18-20, 2023",
    image: "/images/events/christmas-2023.jpg",
    category: "Convention",
  },
  {
    id: 3,
    title: "Welcome Service",
    date: "January 13, 2024",
    image: "/images/events/welcome-2024.jpg",
    category: "Fellowship",
  },
];

const Events = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white dark:from-[#1c1d1c] to-gray-50/50 dark:to-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className={`${rozhaOne.className} text-5xl font-bold text-primary mb-6`}
          >
            Featured Events
          </h2>
          <p
            className={`${montserrat.className} text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg`}
          >
            Relive some of our most impactful moments and celebrations of faith.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredEvents.map((event) => (
            <Link href={`/gallery/${event.id}`} key={event.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg 
                  hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 
                      group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t 
                    from-black/80 via-black/20 to-transparent"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <span
                    className={`${montserrat.className} inline-flex items-center px-3 py-1 
                    rounded-full text-sm font-medium bg-white/90 text-primary backdrop-blur-sm
                    mb-4 self-start`}
                  >
                    {event.category}
                  </span>

                  <h3
                    className={`${righteous.className} text-2xl sm:text-3xl font-bold 
                    text-white mb-3 group-hover:-translate-y-1 transition-transform duration-300`}
                  >
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar className="w-5 h-5" />
                    <span className={`${montserrat.className} text-sm`}>
                      {event.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View Gallery CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/gallery"
            className={`${montserrat.className} inline-flex items-center gap-2 
              bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold
              hover:bg-primary-dark transition-all duration-300 
              hover:gap-4 hover:shadow-lg hover:shadow-primary/20`}
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <div
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 
          w-[40%] aspect-square rounded-full bg-primary/5 blur-3xl"
        />
        <div
          className="absolute left-0 bottom-1/4 -translate-x-1/2
          w-[40%] aspect-square rounded-full bg-accent/5 blur-3xl"
        />
      </div>
    </section>
  );
};

export default Events;
