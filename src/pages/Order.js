import React from "react";
import _AppBar from "../components/AppBar";
import _MainContainer from "../components/order/MainContainer";
import _SideBar from "../components/SideBar";

export default function OrderPage() {
  return (
    <div>
      <_AppBar />
      <_SideBar />
      <_MainContainer />
    </div>
  );
}
