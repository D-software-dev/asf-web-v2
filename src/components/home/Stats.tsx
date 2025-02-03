import { motion } from "framer-motion";
import { Users, GraduationCap, Heart, Star } from "lucide-react";
import { righteous, montserrat, rozhaOne } from "@/constants/Fonts";

const stats = [
  {
    id: 1,
    name: "Active Members",
    value: "100+",
    icon: Users,
    description: "Growing community of believers",
  },
  {
    id: 2,
    name: "Alumni Community",
    value: "1000+",
    icon: GraduationCap,
    description: "Graduates serving worldwide",
  },
  {
    id: 3,
    name: "Students Reached",
    value: "1000+",
    icon: Heart,
    description: "Lives touched through our ministry",
  },
  {
    id: 4,
    name: "Student Satisfaction",
    value: "98%",
    icon: Star,
    description: "Positive feedback from members",
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className={`${rozhaOne.className} text-4xl font-bold text-primary mb-4`}
            >
              Our Impact
            </h2>
            <p
              className={`${montserrat.className} text-gray-600 max-w-2xl mx-auto text-lg`}
            >
              Through God&apos;s grace, we&apos;ve been able to make a
              significant impact in the lives of students at the University of
              Port Harcourt and beyond.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300
                transform hover:-translate-y-1 relative overflow-hidden group cursor-pointer"
            >
              {/* Background decoration */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="relative">
                {/* Icon */}
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-xl bg-primary/5 text-primary">
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Value */}
                <h3
                  className={`${righteous.className} text-3xl font-bold text-gray-900 mb-2`}
                >
                  {stat.value}
                </h3>

                {/* Name */}
                <p
                  className={`${rozhaOne.className} text-lg font-medium text-primary mb-3`}
                >
                  {stat.name}
                </p>

                {/* Description */}
                <p className={`${montserrat.className} text-sm text-gray-500`}>
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
