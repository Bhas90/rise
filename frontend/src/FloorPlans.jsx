// React component with Master Plan (single image), Floor Plans (manual slider), and Unit Plans (manual slider)
import React, { useState, useRef } from "react";

import MasterPlanImg from "./assets/master-plan.webp";

import TowerAandB from "./assets/toweraandb.webp";
import TowerCandG from "./assets/towercandg.webp";
import TowerDandF from "./assets/towerdandf.webp";
import TowerE from "./assets/towere.webp";

// UNIT PLAN IMAGES
import Rise3 from "./assets/tridasa-rise-3-207-100.jpeg";
import Rise3CG from "./assets/tridasa-rise-3-cg-207-100.jpeg";
import Rise3AB from "./assets/tridasa-rise-3ab-207-100.jpeg";
import Rise from "./assets/tridasa-rise-207-100.jpeg";

import RiseAB from "./assets/tridasa-rise-ab-207-100.jpeg";
import RiseABDF from "./assets/tridasa-rise-abdf-207-100.jpeg";
import RiseABDFW from "./assets/tridasa-rise-abdf-w-207-100.jpeg";
import RiseABDFE from "./assets/tridasa-rise-abdfe-207-100.jpeg";

import RiseCG from "./assets/tridasa-rise-cg-207-100.jpeg";
import RiseCGE from "./assets/tridasa-rise-cg-e-207-100.jpeg";
import RiseCGEF from "./assets/tridasa-rise-cg-ef-207-100.jpeg";
import RiseCGW from "./assets/tridasa-rise-cg-w-207-100.jpeg";

import RiseDEF from "./assets/tridasa-rise-def-207-100.jpeg";
import RiseDEFN from "./assets/tridasa-rise-defn-207-100.jpeg";
import RiseDEFW from "./assets/tridasa-rise-defw-207-100.jpeg";

import RiseEE from "./assets/tridasa-rise-e-207-100.jpeg";
import RiseEE2 from "./assets/tridasa-rise-ee-207-100.jpeg";
import RiseEE3 from "./assets/tridasa-rise-ee3-207-100.jpeg";

import RiseWE from "./assets/tridasa-rise-we-207-100.jpeg";

// TOWER PLAN IMAGES
const towerPlanImages = [TowerAandB, TowerCandG, TowerDandF, TowerE];

// UNIT PLAN IMAGES ARRAY
const unitPlanImages = [
  Rise3, Rise3CG, Rise3AB, Rise,
  RiseAB, RiseABDF, RiseABDFW, RiseABDFE,
  RiseCG, RiseCGE, RiseCGEF, RiseCGW,
  RiseDEF, RiseDEFN, RiseDEFW,
  RiseEE, RiseEE2, RiseEE3,
  RiseWE
];

const scrollByImage = (ref, direction) => {
  if (!ref.current) return;
  const imgWidth = ref.current.firstChild?.clientWidth || 300;
  ref.current.scrollBy({
    left: direction === "left" ? -imgWidth : imgWidth,
    behavior: "smooth",
  });
};


// Lightbox component
const Lightbox = ({ images, index, onClose, onNext, onPrev }) => (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]">
    <button className="absolute top-4 right-4 text-white text-3xl" onClick={onClose}>×</button>
    <button className="absolute left-4 text-white text-4xl" onClick={onPrev}>‹</button>

    <img
      src={images[index]}
      alt="view"
      className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
    />

    <button className="absolute right-4 text-white text-4xl" onClick={onNext}>›</button>
  </div>
);

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState("Master Plan");

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const sliderRef = useRef(null);
  const unitSliderRef = useRef(null);

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Manual scroll buttons
  const scrollLeft = (ref) => ref.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = (ref) => ref.current.scrollBy({ left: 300, behavior: "smooth" });

  const tabs = ["Master Plan", "Floor Plans", "Unit Plans"];

  return (
    <section className="scroll-mt-10 py-12 px-4 md:px-16 bg-white" id="master">
      
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900">
          With harmony in <span style={{ color: "#fea611" }}>Nature</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Tridasa Rise’s elegant blocks offer stunning views and world-class living.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-medium px-4 py-2 border-b-2 ${
              activeTab === tab
                ? "text-[#4f1021] border-[#4f1021]"
                : "text-gray-600 border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* MASTER PLAN */}
      {activeTab === "Master Plan" && (
        <div className="flex flex-col items-center">
          <img
            src={MasterPlanImg}
            alt="Master Plan"
            className="rounded-lg shadow cursor-pointer max-w-3xl"
            onClick={() => openLightbox([MasterPlanImg])}
          />
        </div>
      )}

      {/* FLOOR PLANS (Manual slider) */}
      {activeTab === "Floor Plans" && (
  <div className="relative mt-10">

    {/* Left arrow */}
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 z-20 rounded-full"
      onClick={() => scrollByImage(sliderRef, "left")}
    >
      ‹
    </button>

    {/* Images */}
    <div
      ref={sliderRef}
      className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
      style={{ scrollbarWidth: "none" }}
    >
      {towerPlanImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`tower-${idx}`}
          className="w-1/3 rounded-lg shadow cursor-pointer flex-shrink-0"
          onClick={() => openLightbox(towerPlanImages, idx)}
        />
      ))}
    </div>

    {/* Right arrow */}
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 z-20 rounded-full"
      onClick={() => scrollByImage(sliderRef, "right")}
    >
      ›
    </button>
  </div>
)}


      {/* UNIT PLANS (Manual slider) */}
     {activeTab === "Unit Plans" && (
  <div className="relative mt-10">

    {/* Left arrow */}
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 z-20 rounded-full"
      onClick={() => scrollByImage(unitSliderRef, "left")}
    >
      ‹
    </button>

    {/* Images */}
    <div
      ref={unitSliderRef}
      className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
      style={{ scrollbarWidth: "none" }}
    >
      {unitPlanImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`unit-${idx}`}
          className="w-1/3 rounded-lg shadow cursor-pointer flex-shrink-0"
          onClick={() => openLightbox(unitPlanImages, idx)}
        />
      ))}
    </div>

    {/* Right arrow */}
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 z-20 rounded-full"
      onClick={() => scrollByImage(unitSliderRef, "right")}
    >
      ›
    </button>
  </div>
)}


      {/* LIGHTBOX */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setLightboxIndex((i) => (i + 1) % lightboxImages.length)
          }
          onPrev={() =>
            setLightboxIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length)
          }
        />
      )}
    </section>
  );
};

export default FloorPlans;
