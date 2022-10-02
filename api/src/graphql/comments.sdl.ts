export const schema = gql`
  type Comment {
    id: Int!
    body: String!
    owner: User!
    userId: Int!
    post: Post!
    postId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    comments: [Comment!]! @requireAuth
    comment(id: Int!): Comment @requireAuth
  }

  input CreateCommentInput {
    body: String!
    postId: Int!
  }

  input UpdateCommentInput {
    body: String
    userId: Int
    postId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateComment(id: Int!, input: UpdateCommentInput!): Comment! @requireAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`
