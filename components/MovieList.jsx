import React from "react";
import MovieItem from "./MovieItem";

export default function MovieList({ data }) {
  return (
    <div className="sm:grid px-3 my-10 md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-start">
      {data.map((x) => (
        <MovieItem key={x.id} item={x} />
      ))}
    </div>
  );
}
