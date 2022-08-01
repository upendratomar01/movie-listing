import Image from "next/image";
import React from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function MovieItem({ item }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group cursor-pointer transition duration-200 p-2 transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        height={281}
        alt={item.title}
        width={500}
        src={`${BASE_URL}/${item.backdrop_path || item.poster_path}`}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{item.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition group-hover:font-bold">
          {item.title || item.original_title}
        </h2>
        <p className="flex opacity-0 group-hover:opacity-100 items-center">
          {item.media_type && `${item.media_type} : `}
          {item.release_date || `${item.first_air_date} : `}
          <ThumbUpIcon className="h-5 mx-2" /> {item.vote_count}
        </p>
      </div>
    </div>
  );
}
