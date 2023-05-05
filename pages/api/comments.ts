import type { NextApiRequest, NextApiResponse } from "next";
import clearUrl from "utils/clearUrl";
import fetchComment from "src/lib/fetchComment";
import { CommentModel } from "@Models/Comment";
import { nanoid } from "nanoid";
import createComment from "src/lib/createComment";
//import deleteComments from "../../lib/deleteComment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.headers.referer) return;

  const referrer = clearUrl(req.headers.referer);

  switch (req.method) {
    case "GET":
      return res.status(200).json(await fetchComment(referrer));
    case "POST":
      const comment: CommentModel = {
        id: nanoid(),
        relatedPostUid: referrer,
        created_at: Date.now(),
        image: null,
        name: "Dave",
        text: req.body,
      };
      return res.status(200).json(await createComment(comment));
    //case "DELETE":
    //  return deleteComments(req, res);
    default:
      return res.status(400).json({ message: "Invalid method." });
  }
}
