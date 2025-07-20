import { useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import Sidebar from "./Sidebar";
import AddContentForm from "./AddContentForm";
import Cards from "./Cards";

interface Tag {
  _id: string;
  title: string;
}

interface User {
  _id: string;
  username: string;
}

export interface Content {
  _id: string;
  title: string;
  link: string;
  type: string;
  tags: Tag[];
  userId: User;
  __v: number;
}


export default function Home() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [contents, setContents] = useState<Content[]>([]);
  const [typeOfCards, setTypeOfCards] = useState("all");
  const [filteredContents, setFilteredContents] = useState<Content[]>([]);

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
      setFilteredContents(data.content); // initially show all
    }
    fetchContents();
  }, [])

  useEffect(() => {
    if (typeOfCards === "all") {
      setFilteredContents(contents);
    } else {
      setFilteredContents(contents.filter(content => content.type === typeOfCards));
    }
  }, [contents, typeOfCards])
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-[23vw]">
        <Sidebar setTypeOfCards={setTypeOfCards} />
      </div>
      <div className="relative h-full flex-1 bg-sign-bg text-normal-color">
        <div className="h-[10vh]">
          <HomeHeader setShowForm={setShowForm} typeOfCards={typeOfCards}/>
        </div>
        {showForm && <AddContentForm setShowForm={setShowForm} />}
        <Cards contents={filteredContents} typeOfCards={typeOfCards} />
      </div>
    </div>
  )
}
