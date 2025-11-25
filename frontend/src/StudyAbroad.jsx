import React, { useState } from "react";

const StudyAbroad = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-100 py-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        About <span style={{ color: '#fea611' }}>Developer</span>
        </h2>

        {/* Main Content */}
        <p className="text-gray-700 mt-4">
        <strong>Tridasa </strong> has built a reputation for combining vision, reliability, and sophistication in Hyderabad’s dynamic real estate landscape. With Tridasa Rise, they continue to deliver not just homes, but thoughtfully crafted communities designed for long-term living.<br></br><br></br>
        Our team at <strong>Tridasa</strong>, a residential development is never just a structure — it is an opportunity to foster connections, inspire growth, and elevate daily living. Their mission is to create residential spaces that integrate modern design, functionality, and community well-being, making each project a holistic experience.
        </p>

        
      </div>
    </div>
  );
};

export default StudyAbroad;
