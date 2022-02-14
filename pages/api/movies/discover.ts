import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log(req.query);
    const moviesList = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${req.query.genre_id}`
    );

    // console.log(generesList);

    res.status(200).json(moviesList.data);
  } else {
    // Handle any other HTTP method
  }
}
