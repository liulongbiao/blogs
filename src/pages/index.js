import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import styled from "styled-components";

import Bio from "../components/Bio";

const Index = styled.div`
  padding: 2rem 1rem;
`;

const Post = styled.div`
  margin: 1rem 0;

  h3 {
    a {
      color: #007caa;
      text-decoration: none;
    }
  }
  .tag {
    color: white;
    background: #00a2ff;
    margin: 0 0.5em;
    padding: 0 0.5em;
    border-radius: 4px;
  }
`;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <Index>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        <Bio />
        {posts.map(post => {
          if (post.node.path !== "/404/") {
            const title = get(post, "node.frontmatter.title") || post.node.path;
            return (
              <Post key={post.node.frontmatter.path}>
                <h3>
                  <Link to={post.node.frontmatter.path}>
                    {post.node.frontmatter.title}
                  </Link>
                </h3>
                <small>
                  {post.node.frontmatter.date}
                  {post.node.frontmatter.tags.map((tag, i) => {
                    return (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    );
                  })}
                </small>
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </Post>
            );
          }
        })}
      </Index>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "YYYY-MM-DD")
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;
