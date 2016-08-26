import React from "react";

import Footer from "./Footer.js";
import Header from "./Header.js";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
};
