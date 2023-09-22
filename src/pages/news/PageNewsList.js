import React, { Component } from "react";
import CompListNews from "../../components/News/CompListNews";

class PageNewsList extends Component {
  render() {
    return (
      <>

        {/* <div className="page-content bg-white">
          <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt">
            <PageTitle motherMenu="Media Coverage" activeMenu="News" />
          </div>
        </div> */}
        <CompListNews />

        {/* <Footer1 /> */}
      </>
    );
  }
}
export default PageNewsList;
