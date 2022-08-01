import { useRouter } from "next/router";
import React from "react";

export default function NavbarItem({ title, genreKey }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/?genre=${genreKey}`)}
      className="flex transition hover:scale-125 hover:text-white active:text-red-500"
    >
      <span>{title}</span>
    </div>
  );
}
