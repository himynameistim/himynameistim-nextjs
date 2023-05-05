import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.redisUrl!,
  token: process.env.redisToken!,
});

export default redis;
