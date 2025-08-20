import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, Mail, User } from "lucide-react";
import { righteous, montserrat, rozhaOne } from "@/constants/Fonts";

const AskQuestion = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white dark:from-[#121212] via-gray-50/50 to-white dark:to-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Content Container */}
          <div className="bg-white dark:bg-[rgba(14,31,22,0.5)] rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Form */}
              <div className="p-8 sm:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2
                    className={`${rozhaOne.className} text-4xl font-bold text-primary mb-2`}
                  >
                    Ask a Question
                  </h2>
                  <p
                    className={`${montserrat.className} text-lg text-gray-600 dark:text-gray-400`}
                  >
                    Have questions about our fellowship or the Adventist faith?
                    We&apos;re here to help and guide you.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                      <label
                        htmlFor="name"
                        className={`${montserrat.className} block text-sm 
                        font-medium text-gray-700 dark:text-gray-300 mb-2`}
                      >
                        Your Name
                      </label>
                      <div className="relative">
                        <div
                          className="absolute inset-y-0 left-0 pl-4 flex items-center 
                          pointer-events-none"
                        >
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className={`${montserrat.className} block w-full pl-11 pr-4 py-3 
                            border-gray-200 dark:text-white dark:border-gray-600/70 rounded-xl focus:ring-primary focus:border-primary
                            bg-gray-50/50 dark:bg-[rgba(8,17,12,0.5)] hover:bg-gray-50 dark:hover:bg-transparent transition-colors duration-200`}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="email"
                        className={`${montserrat.className} block text-sm 
                        font-medium text-gray-700 dark:text-gray-300 mb-2`}
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <div
                          className="absolute inset-y-0 left-0 pl-4 flex items-center 
                          pointer-events-none"
                        >
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={`${montserrat.className} block w-full pl-11 pr-4 py-3 
                            border-gray-200 dark:text-white dark:border-gray-600/70 rounded-xl focus:ring-primary focus:border-primary
                            bg-gray-50/50 dark:bg-[rgba(8,17,12,0.5)] hover:bg-gray-50 dark:hover:bg-transparent transition-colors duration-200`}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Question Input */}
                    <div>
                      <label
                        htmlFor="question"
                        className={`${montserrat.className} block text-sm 
                        font-medium text-gray-700 dark:text-gray-300 mb-2`}
                      >
                        Your Question
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-4 pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="question"
                          rows={4}
                          value={formData.question}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              question: e.target.value,
                            })
                          }
                          className={`${montserrat.className} block w-full pl-11 pr-4 py-3 
                            border-gray-200 dark:text-white dark:border-gray-600/70 rounded-xl focus:ring-primary focus:border-primary
                            bg-gray-50/50 dark:bg-[rgba(8,17,12,0.5)] hover:bg-gray-50 dark:hover:bg-transparent transition-colors duration-200`}
                          required
                          placeholder="Type your question here..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className={`${montserrat.className} w-full inline-flex justify-center 
                        items-center px-6 py-4 border border-primary rounded-xl shadow-sm 
                        text-base font-medium text-white bg-primary hover:bg-primary-dark 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                        transition-colors duration-200 hover:bg-transparent hover:text-primary`}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Question
                    </motion.button>
                  </form>
                </motion.div>
              </div>

              {/* Right Side - Decorative */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center space-y-6">
                    <div
                      className="inline-flex items-center justify-center w-20 h-20 
                      rounded-full bg-primary/10"
                    >
                      <MessageSquare className="w-10 h-10 text-primary" />
                    </div>
                    <h3
                      className={`${righteous.className} text-3xl font-bold text-gray-900 dark:text-gray-200`}
                    >
                      We&apos;re Here to Help
                    </h3>
                    <p
                      className={`${montserrat.className} text-lg text-gray-600 dark:text-gray-300 max-w-md`}
                    >
                      Your questions matter to us. Our team is ready to provide
                      guidance and support on your spiritual journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute -z-10 -right-64 top-1/2 -translate-y-1/2 
            w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          />
          <div
            className="absolute -z-10 -left-64 bottom-1/4 
            w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AskQuestion;
