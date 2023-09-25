import React, { Component } from "react";
import CompListNews from "../../components/News/CompListNews";
import PageTitleNews from "../../components/pagetitle/PageTitle";

class PageNewsList extends Component {
  render() {
    return (
      <>
        <PageTitleNews motherMenu="Media Coverage" activeMenu="" />
        <CompListNews />

        {/* <Footer1 /> */}
      </>
    );
  }
}
export default PageNewsList;
