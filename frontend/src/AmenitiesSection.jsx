import React, { useState, useEffect } from "react";
import amenity1 from "./assets/badminton.webp";
import amenity2 from "./assets/basketball.webp";
import amenity3 from "./assets/gym.webp";
import amenity4 from "./assets/hall.webp";
import amenity5 from "./assets/play_area.webp";
import amenity6 from "./assets/swimming_pool.webp";
import amenity7 from "./assets/walking_area.webp";
import amenity8 from "./assets/spa.webp";
import amenity9 from "./assets/yoga.webp";
import amenity10 from "./assets/amenities-1.webp";
import amenity11 from "./assets/amenities-2.webp";
import amenity12 from "./assets/amenities-3.webp";

// Block-wise amenities based on layout map
const amenities = [
   
  {
    id: "clubhouse",
    label: "CLUBHOUSE AMENITIES",
    items: [
      "Banquet Hall", "Guest Rooms", "Business Centre", "Mini Theatre", "2 Badminton Court", "Squash Court", "Provision for Super Market", "Provision for Creche", "Gym", "Swimming Pool", "Terrace Party Deck", "Indoor Games", "Outdoor Deck", "Yoga / Meditation Space", "Pilates / Aerobics", "Provision for Salon", "Hobby Zone", "Provision for Pharmacy", "Provision for ATM"
    ],
  },
  {
    id: "outdoor",
    label: "OUTDOOR AMENITIES",
    items: ["Tennis Court", "Pickleball Court", "Cricket Net", "Basketball Court", "Skating Zone", "Senior Citizen Zone", "Space for Temple", "Kids Gardening", "Children Play Area", "Forest Walk", "Scented Garden", "Party Lawns", "Herbal Gardens", "Relaxation Gazebo", "Outdoor Fitness Space", "Work From Nature", "Sculpture", "Walking Track", "Grand Entrance"],
  },
  {
    id: "tower",
    label: "TOWER AMENITIES",
    items: ["Children Activity Zone", "Yoga Space", "Multi-purpose Area", "Co-working Space", "Graffiti Wall", "Relaxation Lounge", "Kids Thrift Zone", "Ladies Zone", "Rock Climbing"],
  },
];

const images = [
  amenity1,
  amenity2,
  amenity3,
  amenity4,
  amenity5,
  amenity6,
  amenity7,
  amenity8,
  amenity9,
  amenity10,
  amenity11,
  amenity12,
];

const AmenitiesSection = () => {
  const [selected, setSelected] = useState("clubhouse");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    images[currentImageIndex],
    images[(currentImageIndex + 1) % images.length],
    images[(currentImageIndex + 2) % images.length],
  ];

  return (
    <section className="bg-neutral-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
          30+ Awesome Clubhouse Amenities{" "}
          <span style={{ color: "#fea611" }}> Await!</span>
        </h2>

        {/* Auto-rotating images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 transition-all duration-500">
          {visibleImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Amenity ${index}`}
              className="rounded-xl w-full md:w-1/3 object-cover"
            />
          ))}
        </div>

        {/* Tab buttons for blocks */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8">
          {amenities.map(({ id, label }) => (
            <button
              key={id}
              className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
                selected === id
                  ? "text-white bg-gradient-to-r from-[#002954] to-[#fea611]"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
              }`}
              onClick={() => setSelected(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Amenity items list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
          {amenities
            .find((amenity) => amenity.id === selected)
            ?.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white border border-yellow-200 shadow-sm rounded-lg px-4 py-3 gap-3"
              >
                <i className="fas fa-check-circle text-blue-500"></i>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
