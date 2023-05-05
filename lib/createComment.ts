import { CommentModel } from "@Models/Comment";
import redis from "./redis";

export default async function (comment: CommentModel): Promise<CommentModel> {
  // write data
  await redis.lpush(comment.relatedPostUid, JSON.stringify(comment));

  return comment;
}
