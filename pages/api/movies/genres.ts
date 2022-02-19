import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const generesList = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=en-US`
      );
      res.status(200).json(generesList.data);
    }
  } catch (error: any) {
    res.status(500).json({ type: "Error", message: error.message });
  }
}
