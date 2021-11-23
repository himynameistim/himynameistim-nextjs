import { inject, injectable } from "tsyringe";
import { iGetLatestPosts } from "./iGetLatestPosts";
import gql from "graphql-tag";
// Models
import { FeaturedPost } from "../../Models/FeaturedPost";
import { graphClient } from "../iGraphQl";

@injectable()
export class getLatestPosts implements iGetLatestPosts {
  graphClient: graphClient;

  constructor(@inject("graphClient") private graphClientParam: graphClient) {
    this.graphClient = graphClientParam;
  }

  private latestPostsQuery = gql`
    query latestPosts($category: String) {
      allPosts(
        where: { category: $category }
        first: 10
        sortBy: post_date_DESC
      ) {
        edges {
          node {
            category {
              ... on Categories {
                name
              }
            }
            title
            image
            post_date
            _meta {
              uid
            }
          }
        }
      }
    }
  `;

  public getLatestPosts = async (
    category?: String
  ): Promise<FeaturedPost[]> => {
    return new Promise((resolve, reject) => {
      this.graphClient
        .query(this.latestPostsQuery, category)
        .then((response: any) => {
          var posts: Array<FeaturedPost> = [];
          response.data.allPosts.edges.map(
            (
              edge: {
                node: {
                  title: { text: any }[];
                  category: any;
                  image: any;
                  post_date: Date;
                  _meta: { uid: any };
                };
              },
              key: any
            ) => {
              posts.push({
                type: "post",
                title: edge.node.title[0].text,
                image: edge.node.image,
                uid: edge.node._meta.uid,
                category: edge.node.category?.name,
                postDate: edge.node.post_date,
              });
            }
          );
          resolve(posts);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  };
}
