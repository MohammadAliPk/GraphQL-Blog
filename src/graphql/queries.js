import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        name
        slug
        avatar {
          url
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      avatar {
        url
      }
      slug
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      name
      field
      posts {
        id
        slug
        title
        coverPhoto {
          url
        }
      }
      avatar {
        url
      }
      description {
        html
      }
    }
  }
`;

const GET_BLOG_INFO = gql`
  query getBlog($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        name
        field
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      slug
      title
    }
  }
`;

const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { Post: { slug: $slug } } }) {
      id
      name
      text
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
  GET_BLOG_INFO,
  GET_POST_COMMENTS,
};
