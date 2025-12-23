import React from "react";

export default function HighlightCard({ icon, title, points }) {
  return (
    <div className="relative group w-full max-w-[270px] rounded-2xl bg-black/80 p-6 border border-blue-600
                    shadow-[0_0_25px_rgba(37,99,235,0.35)]">
      
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-2xl blur-2xl  " />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full border border-red-600 text-red-600">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold bg-[linear-gradient(90deg,#A80000,#010DF3)]
  bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Points */}
        <ul className="text-sm text-[#AEB7ED] space-y-1">
          {points.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
