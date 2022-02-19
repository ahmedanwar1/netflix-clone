import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const movieData = await axios.get(
        `https://api.themoviedb.org/3/movie/${encodeURIComponent(
          req.query.movie_id.toString()
        )}?api_key=${process.env.TMDB_API_KEY}`
      );

      res.status(200).json(movieData.data);
    }
  } catch (error: any) {
    res.status(500).json({ type: "Error", message: error.message });
  }
}
