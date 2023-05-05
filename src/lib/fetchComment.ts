import { CommentModel } from "@Models/Comment";
import redis from "./redis";

export default async function (postUid: string): Promise<CommentModel[]> {
  const posts = await redis.lrange<CommentModel>(postUid, 0, -1);

  return posts;
}
