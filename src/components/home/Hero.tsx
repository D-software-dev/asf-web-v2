import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, GraduationCap, Heart, Star } from "lucide-react";
import { montserrat, rozhaOne } from "@/constants/Fonts";

const stats = [
  {
    id: 1,
    name: "Active Members",
    value: 100,
    icon: Users,
    suffix: "+",
  },
  {
    id: 2,
    name: "Alumni Community",
    value: 1000,
    icon: GraduationCap,
    suffix: "+",
  },
  {
    id: 3,
    name: "Students Reached",
    value: 1000,
    icon: Heart,
    suffix: "+",
  },
  {
    id: 4,
    name: "Student Satisfaction",
    value: 98,
    icon: Star,
    suffix: "%",
  },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);

  useEffect(() => {
    const animation = animate(count, value, { duration: 2 });
    return animation.stop;
  }, [value, count]);

  return (
    <motion.span>
      {useTransform(count, (latest) => Math.round(latest) + suffix)}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden pt-24 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Circuit-like pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20h80v80H20V20zm20 20h40v40H40V40z' fill='none' stroke='%23333' stroke-width='2'/%3E%3Cpath d='M0 0l20 20m80 0L120 0M0 120l20-20m80 0l20 20' stroke='%23333' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-transparent to-white/40" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`${montserrat.className} inline-flex items-center px-4 py-2 
                  rounded-full bg-primary/10 text-primary font-medium text-sm`}
              >
                Welcome to ASF UniPort
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-4"
              >
                <h1
                  className={`${rozhaOne.className} text-5xl sm:text-6xl lg:text-7xl 
                  xl:text-8xl font-bold tracking-tight`}
                >
                  <span className="text-gray-900">Your family</span>
                  <span className="block text-primary mt-2">on Campus</span>
                </h1>
                <p
                  className={`${montserrat.className} text-lg sm:text-xl text-gray-600 
                  max-w-xl mx-auto lg:mx-0`}
                >
                  Join a vibrant community of faith, fellowship, and spiritual
                  growth at the University of Port Harcourt.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/join"
                className={`${montserrat.className} inline-flex items-center justify-center 
                  gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold
                  hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 border border-primary hover:bg-transparent hover:text-primary
                  group`}
              >
                Join Us Today
                <ArrowRight
                  className="w-5 h-5 transition-transform duration-300 
                  group-hover:rotate-[360deg]"
                />
              </Link>
              <Link
                href="/about"
                className={`${montserrat.className} inline-flex items-center justify-center 
                  gap-2 border border-primary text-primary px-8 py-4 rounded-xl 
                  text-lg font-bold hover:bg-primary/5 transition-all duration-300`}
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] lg:h-[600px] mt-4 lg:mt-0"
          >
            <div className="relative w-full h-full">
              {/* Main image */}
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute left-0 top-0 w-[75%] h-[70%] rounded-2xl 
                  overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/hero-1.jpg"
                  alt="ASF Community"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t 
                  from-black/40 to-transparent"
                />
              </motion.div>

              {/* Overlapping images */}
              <motion.div
                initial={{ scale: 0.95, x: 20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute right-0 top-[40%] w-[45%] h-[40%] rounded-xl 
                  overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/hero-2.jpg"
                  alt="ASF Event"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ scale: 0.95, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute right-[10%] bottom-0 w-[55%] h-[45%] rounded-xl 
                  overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/hero-3.jpg"
                  alt="ASF Worship"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Decorative elements */}
              <div
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-32 h-32 
                bg-accent/10 rounded-full blur-3xl"
              />
              <div
                className="absolute -left-4 bottom-1/4 w-40 h-40 
                bg-primary/10 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="text-center relative group"
              >
                <div className="space-y-2">
                  <h3
                    className={`${rozhaOne.className} text-5xl font-bold 
                    bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text 
                    text-transparent group-hover:from-primary group-hover:to-primary/80 
                    transition-all duration-300`}
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </h3>

                  <p
                    className={`${montserrat.className} text-sm font-medium 
                    text-gray-500 uppercase tracking-wider`}
                  >
                    {stat.name}
                  </p>
                </div>

                {/* Decorative line */}
                {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 
                  bg-gradient-to-r from-transparent via-primary/30 to-transparent 
                  group-hover:via-primary transition-all duration-300" 
                /> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
