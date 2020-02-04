import React, { Component } from "react";

// TODO: Fix it on Monday
// TODO: SSH, GIT Configure, ESLint
class NewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ismail"
    };
  }

  render() {
    const { name } = this.state;
    return <div>New Component {name}</div>;
  }
}

export default NewComponent;
