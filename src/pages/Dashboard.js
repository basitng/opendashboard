import React from "react";
import _AppBar from "../components/AppBar";
import _MainContainer from "../components/MainContainer";
import _SideBar from "../components/SideBar";

export default function Dashboard() {
  return (
    <div>
      <_AppBar />
      <_SideBar />
      <_MainContainer />
    </div>
  );
}
