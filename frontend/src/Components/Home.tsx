import { useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import Sidebar from "./Sidebar";
import AddContentForm from "./AddContentForm";
import Cards from "./Cards";

// interface Tag {
//   _id: string;
//   title: string;
// }

// interface User {
//   _id: string;
//   username: string;
// }

// export interface Content {
//   _id: string;
//   title: string;
//   link: string;
//   type: string;
//   tags: Tag[];
//   userId: User;
//   __v: number;
// }


export default function Home() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [contents, setContents] = useState([]);
  const [typeOfCards, setTypeOfCards] = useState("all");
  useEffect(() => {
    const fetchContents = async () => {
      const res = await fetch("http://localhost:3001/api/v1/content", {
        method: "get",
        headers: {
          "authorization": localStorage.getItem("authorization")!
        }
      })
      const data = await res.json();
      setContents(data.content);
    }
    fetchContents();
  }, [])
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-[23vw]">
        <Sidebar setTypeOfCards={setTypeOfCards} />
      </div>
      <div className="relative h-full flex-1 bg-sign-bg text-normal-color">
        <div className="h-[10vh]">
          <HomeHeader setShowForm={setShowForm} />
        </div>
        {showForm && <AddContentForm setShowForm={setShowForm} />}
        <Cards contents={contents} typeOfCards={typeOfCards} />
      </div>
    </div>
  )
}
