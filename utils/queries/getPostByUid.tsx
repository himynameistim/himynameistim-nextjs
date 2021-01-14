import gql from 'graphql-tag';
import { Client, ApolClient } from '../prismicHelpers'

// Models
import { PostModel } from '../../Models/Post'

const getPostQuery = gql`
query getPost($uid: String!) {
  post(uid: $uid, lang: "en-gb"){
    category {
      ... on Categories {
        name
      }
    },
    title,
    post_date,
    _meta {
      tags
    }
    image,
   body {
    ... on PostBodyText_block {
      primary {
        body1
      }
    }
    ... on PostBodyCode_block {
      primary {
        language
        code
      }
    }
    ... on PostBodyFull_width_image {
      primary {
        image
      }
    }
    ... on PostBodyAside {
      primary {
        aside
      }
    }
    slice_type: __typename
  }
  }
}
`;

export const getPostByUid = async (uid: string, previewData: any ) : Promise<PostModel> => {
  /*const queryOptions = {
    query: getPostQuery,
    variables: { uid },
  };

  return new Promise((resolve, reject) => { ApolClient.query(queryOptions).then(response => {
    if (response.data)
    {
      var post: PostModel = {
        data: response.data.post,
        type: "post",
        uid: uid
      }

      resolve(post);
    } else {
      reject();
    }
  }).catch(error => {
    reject(error);
  });
});*/
  const ref = previewData?.ref

  const client = Client()

  return new Promise((resolve, reject) => { client.getByUID('post', uid, previewData ? {ref } : null).then(response => {
    if (response.data)
    {
      var post: PostModel = {
        data: response.data,
        type: "post",
        uid: uid
      }

      post.data._meta = {
        tags: response.tags
      }

      resolve(post);
    } else {
      reject();
    }
  }).catch(error => {
    reject(error);
  });
});
};