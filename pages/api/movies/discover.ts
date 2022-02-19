import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

import { IMovie } from "../../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const moviesList = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.TMDB_API_KEY
        }&with_genres=${encodeURIComponent(req.query.genre_id.toString())}`
      );

      //remove porn contents
      const newMoviesList = moviesList.data.results.filter((movie: IMovie) => {
        if (movie.overview.search("porn") === -1) {
          return movie;
        }
      });

      // const newMoviesList = fliterdMoviesList((movie) => {
      //   return {
      //     backdrop_path: movie.backdrop_path,
      //     genre_ids: movie.genre_ids,
      //     id: movie.id,
      //     original_title: movie.original_title,
      //     overview: movie.overview,
      //     poster_path: movie.poster_path,
      //     release_date: movie.release_date,
      //     title: movie.title,
      //     video: movie.video,
      //     vote_average: movie.vote_average,
      //   };
      // });

      res.status(200).json(newMoviesList);
    }
  } catch (error: any) {
    res.status(500).json({ type: "Error", message: error.message });
  }
}
