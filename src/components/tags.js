import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Tag from "./tag";

const TagList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-block;

  li {
    display: inline-block;
  }
`;

export default function Tags({ list = [] }) {
  return (
    <TagList>
      {list.map(tag => (
        <li key={tag}>
          <Link to={`/tags/${tag}`}>
            <Tag>{tag}</Tag>
          </Link>
        </li>
      ))}
    </TagList>
  );
}
