import React, { useState } from "react";
import "boxicons";
const accData = [
  {
    id: 1,
    title: "Brand Strategy",
    text: "Crafting",
    imgSrc: "/1.jpg",
    content:
      "a cohesive strategy to define your brand's voice, mission, and values while aligning with market trends for long-term success.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    text: "Designing",
    imgSrc: "/2.jpg",
    content:
      "intuitive, user-focused interfaces that enhance the overall experience, ensuring functionality meets modern aesthetic standards.",
  },
  {
    id: 3,
    title: "Web Design",
    text: "Designing",
    imgSrc: "/3.jpg",
    content:
      "visually stunning, user-friendly websites tailored to your brand's identity to create engaging and effective digital experiences.",
  },
  {
    id: 4,
    title: "Digital Marketing",
    text: "Creating",
    imgSrc: "/4.jpg",
    content:
      "personalized email campaigns that nurture leads, engage your audience, and drive conversions with impactful, targeted messaging.",
  },
];

function AccordianItem({ title, text, imgSrc, content, isExpanded, onToggle }) {
  const chevronRight = (
    <svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 320 512">
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg>
  );
  return (
    <>
      <div
        className={`bg-(--white) rounded-lg overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-60" : "max-h-20"
        }`}
      >
        <div
          className="flex flex-col justify-between items-start p-6 cursor-pointer"
          onClick={onToggle}
        >
          <div className="flex justify-between w-full">
            <div className="text-4xl max-sm:text-3xl font-semibold font-(family-name:--satoshi)">
              {title}
            </div>
            <span
              class={`bx bx-chevron-right text-4xl transition-all duration-300 ${
                isExpanded ? "rotate-90" : ""
              }`}
            >
              {chevronRight}
            </span>
          </div>

          <div
            className={`font-(family-name:--satoshi) flex gap-6 w-full px-5 pt-4 pb-5 overflow-hidden transition-all duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-60 bg-cover">
              <img src={imgSrc} />
            </div>
            <div className="text-base pt-2">
              <span className="font-(family-name:--bueno) text-2xl font-medium">
                {text}{" "}
              </span>
              {content}
            </div>
          </div>
        </div>
      </div>
      <div className="divider bg-gray-300 w-full h-px"></div>
    </>
  );
}
const Accordation = () => {
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => {
    setExpandedId(expandedId == id ? null : id);
  };
  return (
    <div>
      <div className="min-h-screen flex items-center  justify-center max-md:items-start w-full">
        <div className="flex flex-col gap-3 max-w-2xl max-sm:max-w-sm">
          {accData.map((item) => (
            <AccordianItem
              key={item.id}
              {...item}
              isExpanded={expandedId == item.id}
              onToggle={() => toggleExpand(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordation;
