import { TagPostsModel } from "../../Models/TagPosts";
import { iGetTagPosts } from "../blog/getTagPosts";

export class getTagPosts implements iGetTagPosts {
  public getTagPosts = async (
    tag: string,
    page: number,
    pageSize: number
  ): Promise<TagPostsModel> => {
    return {
      totalPages: 1,
      posts: [
        {
          uid: "Post1",
          type: "Post",
          data: {
            _meta: {
              tags: ["sitecore"],
            },
            body: "Foo",
            image: {
              url:
                "https://himynameistim.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fhimynameistim%2F8310ef6a-a5c2-49d1-a29d-c99eccae6481_Art%2B2.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dcrop%26max-w%3D1093%26max-h%3D400&w=3840&q=75",
            },
            heading: "Debugging VueJS + TypeScript with VS Code - Part 2",
            category: { name: "webdevelopment" },
            post_date: new Date("2022-02-01T12:00:00Z"),
          },
        },
      ],
    };
  };
}
