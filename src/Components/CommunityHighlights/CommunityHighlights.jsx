import { motion } from "framer-motion";

const CommunityHighlights = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <section className="bg-gray-900 text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          🎮 Community Highlights
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              title: "Active Gamers",
              description:
                "Join over 10,000 active gamers sharing reviews and tips daily.",
            },
            {
              title: "Top Reviews",
              description:
                "Explore thousands of in-depth reviews from trusted players.",
            },
            {
              title: "Live Tournaments",
              description:
                "Participate in exciting gaming tournaments hosted weekly.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityHighlights;
