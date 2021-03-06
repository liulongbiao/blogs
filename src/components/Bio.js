import React from "react";
import styled from "styled-components";

import profilePic from "./avatar.png";

const BioWrapper = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

const Avatar = styled.img`
  margin-right: 1rem;
  width: 5rem;
  height: 6rem;
`;

const Desc = styled.div`
  blockquote {
    text-align: right;
  }
`;

class Bio extends React.Component {
  render() {
    return (
      <BioWrapper>
        <Avatar src={profilePic} alt={`Liu Longbiao`} />
        <Desc>
          <blockquote>纸上得来终觉浅，绝知此事要躬行。</blockquote>
          现就职于杭州施强教育科技有限公司，专注于使用计算机技术辅助教学过程。
        </Desc>
      </BioWrapper>
    );
  }
}

export default Bio;
