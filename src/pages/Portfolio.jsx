import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Exhibition Stand - Dubai Expo",
    category: "Exhibition",
    imageUrl: "/src/assets/01.jpg",
  },
  {
    id: 2,
    title: "Corporate Event Branding",
    category: "Events",
    imageUrl: "/src/assets/07.jpg",
  },
  {
    id: 3,
    title: "Product Launch Booth",
    category: "Exhibition",
    imageUrl: "/src/assets/05.jpg",
  },
  {
    id: 4,
    title: "Stage Design - Awards Night",
    category: "Events",
    imageUrl: "/src/assets/08.jpg",
  },
  {
    id: 5,
    title: "Exhibition Stand - Dubai Expo",
    category: "Exhibition",
    imageUrl: "/src/assets/01.jpg",
  },

  {
    id: 6,
    title: "Corporate Event Branding",
    category: "Events",
    imageUrl: "/src/assets/07.jpg",
  },
  {
    id: 7,
    title: "Product Launch Booth",
    category: "Exhibition",
    imageUrl: "/src/assets/05.jpg",
  },
  {
    id: 8,
    title: "Stage Design - Awards Night",
    category: "Events",
    imageUrl: "/src/assets/08.jpg",
  },
   
];

const categories = [];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === filter);

  return (
    <div className="container px-4 py-10 mx-auto">
      {/* Heading */}
      <h1 className="mb-10 text-4xl font-bold text-center">Our Portfolio</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full font-medium border transition duration-300 ${
              filter === cat
                ? "bg-blue-900 text-white border-blue-900"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4">
        <AnimatePresence>
          {filteredProjects.map(({ id, title, category, imageUrl }) => (
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden transition-all duration-150 bg-white border border-red-500 transform-view hover:shadow-xl hover:scale-105 hover:rounded-2xl hover:-translate-y-1"
            >{/* Title Text with Hover Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute text-white bottom-4 left-4 right-4"
                >
                  <h3 className="text-lg font-semibold transition-all duration-300 group-hover:text-red-400">
                    {title}
                  </h3>
                  {filter !== "All" && (
                    <p className="text-sm text-gray-200">{category}</p>
                  )}
                </motion.div>
              {/* Image Block with Hover Animations */}
              <div className="relative w-full overflow-hidden group group-hover:scale-130">
                <img
                  src={imageUrl}
                  alt={title}
                  className="object-cover w-full h-full transition-transform transform duration-400 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 bg-opacity-40 group-hover:scale-110 group-hover:transition-transform-scale-110 group-hover:opacity-75"></div>

                
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
