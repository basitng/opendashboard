import { Hidden } from "@material-ui/core";
import React from "react";
import _AppBar from "../components/AppBar";
import _MainContainer from "../components/notification/MainContainer";
import _SideBar from "../components/SideBar";
export default function NotificationPage() {
  return (
    <div>
      <_AppBar />
      <_SideBar />
      <_MainContainer />
    </div>
  );
}
