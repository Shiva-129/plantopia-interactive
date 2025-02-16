
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { PlantGallery } from "@/components/PlantGallery";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PlantGallery />
      
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-text mb-6">About Us</h2>
            <p className="text-lg text-text/80 leading-relaxed">
              We are passionate about plants and technology, bringing you an AI-powered
              plant identification platform to help you explore nature effortlessly.
              Our website allows users to identify plants instantly by uploading images.
              Get detailed information on species, care tips, and more.
            </p>
          </motion.div>
        </div>
      </section>

      <Stats />
    </div>
  );
}
