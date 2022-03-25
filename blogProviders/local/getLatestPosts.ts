// Models
import { FeaturedPost } from "../../Models/FeaturedPost";
import { iGetLatestPosts } from "../blog/getLatestPosts";

export class getLatestPosts implements iGetLatestPosts {
  public getLatestPosts = async (
    categoryUid?: string
  ): Promise<FeaturedPost[]> => {
    return [
      {
        title: "Debugging VueJS + TypeScript with VS Code - Part 2",
        image: {
          url:
            "https://himynameistim.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fhimynameistim%2F8310ef6a-a5c2-49d1-a29d-c99eccae6481_Art%2B2.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dcrop%26max-w%3D1093%26max-h%3D400&w=3840&q=75",
        },
        type: "",
        category: "webdevelopment",
        uid: "1",
      },
      {
        title: "Reducing the size of Sitecore Master DB",
        image: {
          url:
            "https://himynameistim.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fhimynameistim%2F8235eb3a-4038-4504-bcb9-871f0c6e9171_City.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dcrop%26max-w%3D1093%26max-h%3D400&w=3840&q=75",
        },
        type: "",
        category: "webdevelopment",
        uid: "2",
      },
    ];
  };
}
