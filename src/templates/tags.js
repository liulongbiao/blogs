import React from "react";
import Link from "gatsby-link";
import Tag from "../components/tag";
import Tags from "../components/tags";
import styled from "styled-components";

const Badge = styled.span`
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #00a2ff;
  border-radius: 10px;
`;

export default function TagsTemplate({ pathContext }) {
  const { posts, post, tag } = pathContext;
  if (tag) {
    return (
      <div>
        <h2>
          <Tag>{tag}</Tag>
          <Badge>{post.length}</Badge>
        </h2>
        <ul>
          {post.map(({ id, frontmatter, excerpt, fields }) => {
            return (
              <li key={frontmatter.path}>
                <h3>
                  <Link to={frontmatter.path}>{frontmatter.title}</Link>
                </h3>
                <p>{excerpt}</p>
              </li>
            );
          })}
        </ul>
        <Link to="/tags">All tags</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Tags</h1>
      <Tags list={Object.keys(posts) || []} />
    </div>
  );
}
