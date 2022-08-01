import Head from "next/head";
import Image from "next/image";
import MovieList from "../components/MovieList";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Movie Listing - App</title>
        <meta
          name="description"
          content="movie listing app created by Upendra Tomar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MovieList data={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const result = await fetch(
    process.env.BASE_URL +
      `/${requests[genre]?.url || requests.trendingGenre.url}`
  ).then((res) => res.json());
  return {
    props: {
      results: result.results,
    },
  };
}
