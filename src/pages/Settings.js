import React from "react";
import _AppBar from "../components/AppBar";
import _MainContainer from "../components/setting/MainContainer";
import _SideBar from "../components/SideBar";

export default function SettingsPage() {
  return (
    <div>
      <_AppBar />
      <_SideBar />
      <_MainContainer />
    </div>
  );
}
