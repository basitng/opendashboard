import { Hidden } from "@material-ui/core";
import React from "react";
import _AppBar from "../components/AppBar";
import _MainContainer from "../components/category/MainContainer";
import _SideBar from "../components/SideBar";

export default function CategoryPage() {
  return (
    <div>
      <Hidden mdUp>
        <_AppBar />
      </Hidden>
      <_SideBar />
      <_MainContainer />
    </div>
  );
}
