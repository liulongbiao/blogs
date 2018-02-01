import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Container = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  a {
    text-decoration: none;
    color: black;
  }
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;
    if (location.pathname === "/") {
      header = (
        <h1>
          <Link to={"/"}>LiuLongbiao's Blog</Link>
        </h1>
      );
    } else {
      header = (
        <h3>
          <Link to={"/"}>LiuLongbiao's Blog</Link>
        </h3>
      );
    }
    return (
      <Container>
        {header}
        {children()}
      </Container>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
