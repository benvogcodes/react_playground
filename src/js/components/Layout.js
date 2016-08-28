import React from "react";

import Footer from "./Footer.js";
import Header from "./Header.js";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  render() {
    setTimeout(() => {
      this.setState({title: "Welcome Ben!"});
    }, 2000);

    return (
      <div>
        <Header title={this.state.title} />
        <Header title={"Something else."} />
        <Footer />
      </div>
    );
  }
};
