import React from "react";
import {
  MapPin,
  Home,
  Ruler,
  Grid3x3,
  Users,
  Layers,
} from "lucide-react";

const projectHighlights = [
  {
    icon: <MapPin className="w-8 h-8 text-[#fea611]" />,
    title: "LOCATION",
    desc: "Nallagandla, Tellapur Rd",
  },
  {
    icon: <Home className="w-8 h-8 text-[#fea611]" />,
    title: "SIZE RANGE",
    desc: "1733-2751 Sq.Ft.",
  },
  {
    icon: <Ruler className="w-8 h-8 text-[#fea611]" />,
    title: "Total Area",
    desc: "10.38 Acres",
  },
  {
    icon: <Grid3x3 className="w-8 h-8 text-[#fea611]" />,
    title: "Towers & Floors",
    desc: "7 Towers | 17 Floors",
  },
  {
    icon: <Users className="w-8 h-8 text-[#fea611]" />,
    title: "Low Density",
    desc: "952 Units | 92 Units Per Acre",
  },
  {
    icon: <Layers className="w-8 h-8 text-[#fea611]" />,
    title: "Clubhouse",
    desc: "55,000 SQ.FT",
  },
];

const ProjectOverview = () => {
  return (
    <section
      id="project-overview"
      className="w-full bg-white py-10 px-4 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 border-t border-b py-8">
          {projectHighlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-4 py-3 relative"
            >
              {/* Icon */}
              <div className="mb-3">{item.icon}</div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              )}

              {/* Divider (hidden on mobile) */}
              {index < projectHighlights.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
