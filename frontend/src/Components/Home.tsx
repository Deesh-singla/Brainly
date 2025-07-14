import { useState } from "react";
import HomeHeader from "./HomeHeader";
import Sidebar from "./Sidebar";

export default function Home() {
  const [showForm, setShowForm] = useState<boolean>(true);
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-[23vw]">
        <Sidebar />
      </div>
      <div className="relative h-full flex-1 bg-sign-bg text-normal-color">
        <div className="h-[10vh]">
          <HomeHeader setShowForm={setShowForm} />
        </div>
      </div>

    </div>
  )
}
