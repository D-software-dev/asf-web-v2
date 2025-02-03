import { motion } from "framer-motion";
import Image from "next/image";
import { righteous, montserrat, rozhaOne } from "@/constants/Fonts";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const activities = [
  {
    id: 1,
    title: "Bible Study",
    description:
      "Deep dive into God's word every Wednesday, exploring scripture and growing in faith together.",
    image: "/images/bible-study.jpg",
    time: "Wednesdays, 4:00 PM",
    location: "Fellowship Center",
    attendance: "30+ members",
    gallery: [
      "/images/bible-study/1.jpg",
      "/images/bible-study/2.jpg",
      "/images/bible-study/3.jpg",
    ],
    color: "from-blue-500/20 to-transparent",
  },
  {
    id: 2,
    title: "Fellowship",
    description:
      "Experience powerful worship, inspiring messages, and authentic community every Saturday.",
    image: "/images/fellowship.jpg",
    time: "Saturdays, 10:00 AM",
    location: "Main Hall",
    attendance: "100+ members",
    gallery: [
      "/images/fellowship/1.jpg",
      "/images/fellowship/2.jpg",
      "/images/fellowship/3.jpg",
    ],
    color: "from-purple-500/20 to-transparent",
  },
  {
    id: 3,
    title: "Community Service",
    description:
      "Making a difference in our community through outreach programs and volunteer work.",
    image: "/images/community.jpg",
    time: "Monthly Outreach",
    location: "Various Locations",
    attendance: "50+ volunteers",
    gallery: [
      "/images/community/1.jpg",
      "/images/community/2.jpg",
      "/images/community/3.jpg",
    ],
    color: "from-green-500/20 to-transparent",
  },
  {
    id: 4,
    title: "Prayer Sessions",
    description:
      "United in prayer, strengthening our spiritual lives and supporting one another.",
    image: "/images/prayer.jpg",
    time: "Fridays, 5:00 PM",
    location: "Prayer Room",
    attendance: "25+ members",
    gallery: [
      "/images/prayer/1.jpg",
      "/images/prayer/2.jpg",
      "/images/prayer/3.jpg",
    ],
    color: "from-orange-500/20 to-transparent",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2
            className={`${rozhaOne.className} text-5xl font-bold text-primary mb-6`}
          >
            Life at ASF UniPort
          </h2>
          <p
            className={`${montserrat.className} text-gray-600 max-w-3xl mx-auto text-lg`}
          >
            Experience a vibrant community where faith, fellowship, and
            friendship come together to create unforgettable moments and lasting
            impact.
          </p>
        </motion.div>

        <div className="space-y-40">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center 
                ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Text Content */}
                <div className="lg:w-1/2 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6"
                  >
                    <h3
                      className={`${righteous.className} text-4xl sm:text-5xl font-bold 
                      text-gray-900`}
                    >
                      {activity.title}
                    </h3>

                    <p
                      className={`${montserrat.className} text-xl text-gray-600 leading-relaxed`}
                    >
                      {activity.description}
                    </p>

                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className={`${montserrat.className} text-sm`}>
                          {activity.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className={`${montserrat.className} text-sm`}>
                          {activity.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-5 h-5 text-primary" />
                        <span className={`${montserrat.className} text-sm`}>
                          {activity.attendance}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/activities/${activity.id}`}
                      className={`${montserrat.className} inline-flex items-center gap-2 
                        text-primary font-medium hover:gap-4 transition-all duration-300`}
                    >
                      Learn More <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                </div>

                {/* Image Gallery */}
                <div className="lg:w-1/2 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                  >
                    {/* Main Image */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>

                    {/* Gallery Overlay */}
                    <div className="absolute -right-12 -bottom-12 w-48 h-48">
                      <div className="relative w-full h-full">
                        {activity.gallery.map((img, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.2 + imgIndex * 0.1,
                            }}
                            className="absolute rounded-lg overflow-hidden shadow-lg"
                            style={{
                              width: "120px",
                              height: "120px",
                              top: `${imgIndex * 20}px`,
                              right: `${imgIndex * 20}px`,
                              zIndex: 3 - imgIndex,
                            }}
                          >
                            <Image
                              src={img}
                              alt={`${activity.title} ${imgIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div
                    className={`absolute -z-10 inset-y-4 ${
                      index % 2 === 0 ? "right-4" : "left-4"
                    } w-full rounded-2xl bg-gradient-to-b ${activity.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
