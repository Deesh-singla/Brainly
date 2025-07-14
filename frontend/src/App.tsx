import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
// import { useEffect, useState } from "react";


export default function App() {

  // useEffect(() => {
  //   const token = localStorage.getItem("authorization");
  //   if (token) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);
  return (
    <div className="w-screen h-screen">
      <Header />
      <Outlet />
    </div>
  )
}
