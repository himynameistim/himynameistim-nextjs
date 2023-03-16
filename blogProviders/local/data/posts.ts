export const posts = [
  {
    uid: "1",
    type: "Post",
    data: {
      _meta: {
        tags: ["sitecore"],
      },
      body: [
        {
          sliceType: "text_block",
          text: "<p>Hello this is paragraph 1</p><p>This is paragraph 2</p>",
        },
        {
          sliceType: "code_block",
          code: '{\r\n "command": "npm run serve",\r\n "name": "Run npm serve",\r\n "request": "launch",\r\n "type": "node-terminal"\r\n },',
        },
      ],
      image: {
        url: "/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fhimynameistim%2F8310ef6a-a5c2-49d1-a29d-c99eccae6481_Art%2B2.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dcrop%26max-w%3D1093%26max-h%3D400&w=3840&q=75",
      },
      heading: "Debugging VueJS + TypeScript with VS Code - Part 2",
      category: { name: "webdevelopment" },
      postDate: new Date(2022, 2, 1).toString(),
    },
    dateModified: new Date(2022, 2, 1).toString(),
  },
];
