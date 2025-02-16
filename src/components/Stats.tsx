
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
      className="bg-black p-6 rounded-2xl text-center"
    >
      <Icon className="w-8 h-8 text-white mx-auto mb-4" />
      <h3 className="text-white text-xl font-semibold mb-2">{label}</h3>
      <p className="text-white text-2xl font-bold">{value}</p>
    </motion.div>
  );
}
