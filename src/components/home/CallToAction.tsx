import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, MapPin, Calendar, MoveRight } from "lucide-react";
import { righteous, montserrat, rozhaOne } from "@/constants/Fonts";

const meetingTimes = [
  {
    id: 1,
    day: "Saturday",
    time: "10:00 AM",
    type: "Main Fellowship",
    description: "Weekly worship service and fellowship",
  },
  {
    id: 2,
    day: "Wednesday",
    time: "4:00 PM",
    type: "Bible Study",
    description: "In-depth scripture study and discussion",
  },
  {
    id: 3,
    day: "Friday",
    time: "5:00 PM",
    type: "Prayer Meeting",
    description: "Intercessory prayers and spiritual warfare",
  },
];

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br dark:bg-gradient-to-br from-primary/5 dark:from-[#121212f6] via-white dark:via-[#121212] to-accent/5 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Content Container */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden dark:shadow-lg dark:shadow-[#141812] dark:bg-[#121212]">
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Meeting Times */}
              <div className="p-8 sm:p-12 dark:from-[rgb(32,32,32)] dark:to-[rgb(3,3,3)] bg-gradient-to-br from-primary/10 to-transparent">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2
                    className={`${rozhaOne.className} text-4xl font-bold text-primary`}
                  >
                    Join Us in Fellowship
                  </h2>
                  <p
                    className={`${montserrat.className} text-lg text-gray-600m dark:text-gray-400`}
                  >
                    Experience the joy of worship and community as we grow
                    together in faith.
                  </p>

                  {/* Meeting Times Grid */}
                  <div className="space-y-6 mt-8">
                    {meetingTimes.map((meeting) => (
                      <motion.div
                        key={meeting.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: meeting.id * 0.1 }}
                        className="group"
                      >
                        <div
                          className="bg-white dark:bg-[rgba(3,3,3,0.4)] rounded-xl p-6 shadow-sm 
                          hover:shadow-md transition-all duration-300 
                          border border-[rgba(59,59,59,.4)] hover:border-primary/20"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                              <Calendar className="w-6 h-6" />
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <h3
                                  className={`${righteous.className} text-xl font-bold 
                                  text-gray-900 dark:text-gray-400`}
                                >
                                  {meeting.type}
                                </h3>
                                <span
                                  className="px-2 py-1 rounded-full bg-primary/10 
                                  text-primary text-sm font-medium"
                                >
                                  {meeting.day}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <Clock className="w-4 h-4" />
                                <span className={`${montserrat.className}`}>
                                  {meeting.time}
                                </span>
                              </div>
                              <p
                                className={`${montserrat.className} text-gray-600 dark:text-gray-400`}
                              >
                                {meeting.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Side - CTA */}
              <div className="p-8 sm:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white dark:bg-gradient-to-br dark:from-[#151a15] dark:to-[#0c0909]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 
                      rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      <MapPin className="w-4 h-4" />
                      Main Auditorium, UniPort
                    </div>
                    <h3
                      className={`${righteous.className} text-3xl font-bold text-gray-900 dark:text-gray-300`}
                    >
                      Ready to Join Us?
                    </h3>
                    <p
                      className={`${montserrat.className} text-lg text-gray-600 dark:text-gray-400`}
                    >
                      Take the first step towards a vibrant faith community. We
                      can&apos;t wait to welcome you!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/join"
                      className={`${montserrat.className} inline-flex items-center justify-center 
                        gap-4 bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold
                        hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-gray-800/20 hover:scale-105 cursor-pointer group hover:bg-transparent border border-primary hover:text-primary`}
                    >
                      Join Us Today
                      <MoveRight className="w-5 h-5 group-hover:rotate-[360deg] transition-all duration-500" />
                    </Link>
                    <Link
                      href="/contact"
                      className={`${montserrat.className} inline-flex items-center justify-center 
                        gap-2 border border-primary text-primary px-8 py-4 rounded-xl 
                        text-lg font-semibold hover:bg-primary/5 hover:shadow-lg hover:shadow-gray-800/20 hover:scale-105 transition-all duration-300`}
                    >
                      Get in Touch
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Decorative Elements - Updated positioning */}
          <div
            className="absolute -z-10 right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[40%] aspect-square rounded-full bg-primary/5 blur-3xl"
          />
          <div
            className="absolute -z-10 left-0 bottom-1/4 translate-x-1/2
            w-[40%] aspect-square rounded-full bg-accent/5 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
