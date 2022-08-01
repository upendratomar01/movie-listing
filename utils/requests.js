const API_KEY = process.env.API_KEY;

export default {
  trendingGenre: {
    title: "Trending",
    url: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  topRatedGenre: {
    title: "Top Rated",
    url: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  actionGenre: {
    title: "Action",
    url: `discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
  },
  comedyGenre: {
    title: "Comedy",
    url: `discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
  },
  horrorGenre: {
    title: "Horror",
    url: `discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
  },
  mysteryGenre: {
    title: "Mystery",
    url: `discover/movie?api_key=${API_KEY}&with_genres=9648&language=en-US`,
  },
  romanceGenre: {
    title: "Romance",
    url: `discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
  },
  westernGenre: {
    title: "Western",
    url: `discover/movie?api_key=${API_KEY}&with_genres=25&language=en-US`,
  },
  animationGenre: {
    title: "Animation",
    url: `discover/movie?api_key=${API_KEY}&with_genres=21&language=en-US`,
  },
  tvshowGenre: {
    title: "TV Shows",
    url: `genre/tv/list?api_key=${API_KEY}&language=en-US`,
  },
  thillerGenre: {
    title: "Thriller",
    url: `discover/movie?api_key=${API_KEY}&with_genres=18&language=en-US`,
  },
};
