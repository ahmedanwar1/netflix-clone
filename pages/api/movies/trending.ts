import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      //get animes instead of trending movies (😍)
      const trendingList = await axios.get(
        // `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMDB_API_KEY}`
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=16`
      );

      res.status(200).json(trendingList.data.results);
    }
  } catch (error: any) {
    res.status(500).json({ type: "Error", message: error.message });
  }
}
