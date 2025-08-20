import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { righteous, montserrat, rozhaOne } from "@/constants/Fonts";

const faqs = [
  {
    id: 1,
    question: "What is ASF UniPort?",
    answer:
      "ASF UniPort is the Adventist Students Fellowship at the University of Port Harcourt, a vibrant community of Seventh-day Adventist students and friends committed to spiritual growth, academic excellence, and meaningful fellowship.",
    category: "About Us",
  },
  {
    id: 2,
    question: "When and where do you meet?",
    answer:
      "We meet every Saturday for worship service at 10:00 AM, Wednesdays for Bible study at 4:00 PM, and Fridays for prayer meeting at 5:00 PM in our fellowship center at the University of Port Harcourt main campus.",
    category: "Meetings",
  },
  {
    id: 3,
    question: "Can non-Adventists join?",
    answer:
      "Absolutely! We welcome everyone who wants to learn about God and grow spiritually, regardless of their religious background. Our fellowship thrives on diversity and inclusive community spirit.",
    category: "Membership",
  },
  {
    id: 4,
    question: "How can I get involved?",
    answer:
      "You can start by attending any of our services or events. We also have various ministries and activities you can participate in, from music to outreach programs. Feel free to talk to any of our leaders or members for guidance.",
    category: "Participation",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-white dark:from-black via-gray-50/50 dark:via-[#171f18] to-white dark:to-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className={`${rozhaOne.className} text-4xl font-bold text-primary mb-6`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`${montserrat.className} text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg`}
          >
            Find answers to common questions about ASF UniPort and how you can
            be part of our community.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <div className="relative">
                <motion.div
                  className={`bg-white dark:bg-[#1f221f] rounded-2xl shadow-sm hover:shadow-md 
                    transition-all duration-300 border border-gray-100 dark:border-[#395839]
                    ${openId === faq.id ? "shadow-md border-primary/20" : ""}`}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full text-left px-6 py-5 sm:p-6 flex items-center justify-between
                      focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl"
                  >
                    <div className="flex-1 pr-4">
                      {/* Category Badge */}
                      <span
                        className={`${montserrat.className} inline-flex items-center px-3 py-1 
                        rounded-full text-sm font-medium bg-primary/10 text-primary mb-3`}
                      >
                        {faq.category}
                      </span>

                      {/* Question */}
                      <h3
                        className={`${righteous.className} text-xl sm:text-2xl font-semibold 
                        text-gray-900 dark:text-gray-400 group-hover:text-primary transition-colors duration-300`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 ml-4 p-2 rounded-xl 
                      ${
                        openId === faq.id
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary"
                      } 
                      transition-all duration-300`}
                    >
                      {openId === faq.id ? (
                        <Minus className="w-6 h-6" />
                      ) : (
                        <Plus className="w-6 h-6" />
                      )}
                    </div>
                  </button>

                  {/* Answer Panel */}
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-6 sm:pb-6">
                          <div className="h-px bg-gray-200 dark:bg-primary/50 mb-6" />
                          <p
                            className={`${montserrat.className} text-gray-600 dark:text-gray-400 text-lg leading-relaxed`}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute -right-64 top-1/2 -translate-y-1/2 w-96 h-96 
          rounded-full bg-primary/5 blur-3xl"
        />
        <div
          className="absolute -left-64 bottom-1/4 w-96 h-96 
          rounded-full bg-accent/5 blur-3xl"
        />
      </div>
    </section>
  );
};

export default FAQ;
