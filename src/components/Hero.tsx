
import { motion } from "framer-motion";
import { Camera, Upload } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background to-primary/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/5" />
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            Plant Identifier
          </h1>
          <p className="text-xl text-text/80 mb-12">
            Discover any plant by simply uploading an image – fast, easy, and accurate!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ActionButton icon={Upload}>Upload Image</ActionButton>
            <ActionButton icon={Camera}>Take Photo</ActionButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ActionButton({
  icon: Icon,
  children,
}: {
  icon: any;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-200"
    >
      <Icon size={20} />
      {children}
    </motion.button>
  );
}
