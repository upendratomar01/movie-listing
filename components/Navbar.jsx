import React from "react";
import requests from "../utils/requests";
import NavbarItem from "./NavbarItem";
export default function Navbar() {
  return (
    <nav className="flex space-x-5 px-5 overflow-x-auto scrollbar-hide whitespace-nowrap mb-3 ">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <NavbarItem key={key} title={title} url={url} genreKey={key} />
      ))}
    </nav>
  );
}
