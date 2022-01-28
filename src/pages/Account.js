import React from "react";
import _MainContainer from "../components/account/MainContainer";
import _AppBar from "../components/AppBar";
import _SideBar from "../components/SideBar";

export default function AccountPage() {
  return (
    <React.Fragment>
      <_AppBar />
      <_SideBar />
      <_MainContainer />
    </React.Fragment>
  );
}
