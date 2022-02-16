import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const moviesList = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.TMDB_API_KEY
      }&with_genres=${encodeURIComponent(req.query.genre_id.toString())}`
    );

    //remove porn contents
    const newMoviesList = moviesList.data.results.filter((movie: any) => {
      if (movie.overview.search("porn") === -1) {
        return movie;
      }
    });
    // console.log(newMoviesList);
    res.status(200).json(newMoviesList);
  } else {
    // Handle any other HTTP method
  }
}
