import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "@/lib/cloudinary";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const file = req.body.file; // This should be a base64 or remote URL string

  try {
    const response = await cloudinary.uploader.upload(file, {
      upload_preset: "ml_default",
    });

    res
      .status(200)
      .json({ url: response.secure_url, public_id: response.public_id });
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
}
