import React from "react";
import _AppBar from "../components/AppBar";
import _MainContainer from "../components/reviews/MainContainer";
import _SideBar from "../components/SideBar";

export default function ReviewsPage() {
  return (
    <div>
      <_AppBar />
      <_SideBar />
      <_MainContainer />
    </div>
  );
}
