import React from "react";
import "../../components/css/pagetitle.css";
import { Link } from "react-router-dom";

const PageTitleNews = ({ motherMenu, activeMenu }) => {
  return (
    <div className="dlab-bnr-inr-entry text-center">
      <h1 className="text-white">{motherMenu}</h1>

      <div className="breadcrumb-row">
        <ul className="list-inline">
          <li>
            <Link to={"/PageNewsList"}>News</Link>
          </li>
          <li className="ml-1">{activeMenu}</li>
        </ul>
      </div>
    </div>
  );
};

export default PageTitleNews;
