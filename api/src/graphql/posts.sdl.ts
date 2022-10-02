export const schema = gql`
  type Post {
    id: Int!
    body: String!
    owner: User!
    userId: Int!
    comments: [Comment]!
    topic: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    body: String!
    topic: String!
  }

  input UpdatePostInput {
    body: String
    userId: Int
    topic: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
