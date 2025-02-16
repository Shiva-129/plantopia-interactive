
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-primary"
          >
            PlantX
          </motion.div>
          
          <div className="flex items-center space-x-6">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <div className="flex items-center space-x-2">
              <NavButton>Sign In</NavButton>
              <NavButton variant="dark">Get App</NavButton>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-text hover:text-primary transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function NavButton({
  variant = "light",
  children,
}: {
  variant?: "light" | "dark";
  children: React.ReactNode;
}) {
  return (
    <button
      className={`px-4 py-2 rounded-full transition-all duration-200 ${
        variant === "dark"
          ? "bg-primary text-white hover:bg-primary-dark"
          : "text-primary hover:bg-primary/10"
      }`}
    >
      {children}
    </button>
  );
}
