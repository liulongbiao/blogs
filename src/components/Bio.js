import React from "react";

import profilePic from "./avatar.png";

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img src={profilePic} alt={`Liu Longbiao`} />
        纸上得来终觉浅，绝知此事要躬行。
      </p>
    );
  }
}

export default Bio;
