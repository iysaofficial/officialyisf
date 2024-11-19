import React, { Component } from "react";
import CompListNews from "../../components/News/CompListNews";
import PageTitle from "../../components/pagetitle/PageTitle";

class PageNewsList extends Component {
  render() {
    return (
      <>
        <PageTitle motherMenu="Media Coverage" menuback="Home" backbtn="/" activeMenu="" />
        <CompListNews />
      </>
    );
  }
}
export default PageNewsList;
