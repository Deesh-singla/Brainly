// import PlusIcon from "../Icons/PlusIcon";
import Button from "./Button";
interface HomeHeaderProps {
    setShowForm: (x: boolean) => void;
}
export default function HomeHeader({ setShowForm }: HomeHeaderProps) {
    // const [showForm,SetShowForm]=useState(false);
    return (
        <div className="w-full h-full p-10 flex justify-between items-center">
            <div className="text-3xl font-bold">Notes</div>
            <div>
                <Button variant={"secondary"} size={"md"} text={"Add Content"} onClick={() => setShowForm(true)} />
            </div>
        </div>
    )
}
