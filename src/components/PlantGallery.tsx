
import { motion } from "framer-motion";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    image: "/lovable-uploads/ca7c0413-ef1e-43de-a535-2e45c798a5a0.png",
    description: "A hardy indoor plant known for its air-purifying qualities",
  },
  {
    id: 2,
    name: "Cannabis Plant",
    image: "/lovable-uploads/46efadf4-7063-46b6-b0e3-f81e8836434a.png",
    description: "An example of plants our AI can identify",
  },
  {
    id: 3,
    name: "Peace Lily",
    image: "/lovable-uploads/9a509f0a-febb-48a8-8bfe-e3db8283baf6.png",
    description: "Beautiful flowering plant perfect for indoor spaces",
  },
];

export function PlantGallery() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-text mb-4">Plant Examples</h2>
          <p className="text-lg text-text/80">
            Our AI can identify thousands of plant species. Here are some examples:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-2">
                  {plant.name}
                </h3>
                <p className="text-text/70">{plant.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
