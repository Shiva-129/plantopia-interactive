
import { motion } from "framer-motion";
import { Users, Instagram, Download } from "lucide-react";

export function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={Users}
            label="Communities"
            value="20000+"
            delay={0}
          />
          <StatCard
            icon={Instagram}
            label="Followers"
            value="10k+"
            delay={0.2}
          />
          <StatCard
            icon={Download}
            label="Downloads"
            value="10L+"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  delay,
}: {
  icon: any;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-black p-6 rounded-2xl text-center group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        <Icon className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-primary-light transition-colors duration-300">
          {label}
        </h3>
        <p className="text-white text-2xl font-bold group-hover:text-primary-light transition-colors duration-300">
          {value}
        </p>
      </div>
    </motion.div>
  );
}
