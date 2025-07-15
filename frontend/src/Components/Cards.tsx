interface Tag {
  _id: string;
  title: string;
}

interface User {
  _id: string;
  username: string;
}

interface Content {
  _id: string;
  title: string;
  link: string;
  type: "tweet" | "video" | "document" | "link";
  tags: Tag[];
  userId: User;
  __v: number;
}
interface CardsProps {
  contents: Content[];
  typeOfCards: string;
}
export default function Cards({ contents, typeOfCards }: CardsProps) {
  console.log(contents, typeOfCards)
  return (
    <div className="h-[90vh] grid grid-cols-3 gap-6 overflow-scroll p-4">
      {contents.map(x => (
        <div key={x._id}>
          <h1>{x.title}</h1>
        </div>
      ))}
    </div>
  )
}
