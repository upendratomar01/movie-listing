import React from "react";

export default function HeaderItem({ title, Icon }) {
  return (
    <div className="group">
      <div className="flex flex-col items-center group-hover:text-white">
        <Icon className="h-5 group-hover:animate-bounce" />
        <h5 className="text-xs opacity-0 group-hover:opacity-100">{title}</h5>
      </div>
    </div>
  );
}
