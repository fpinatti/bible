import { Link } from "react-router-dom"

type BookButtonProps = {
    id: number;
    name: string;
}

const BookButton = ({ id, name }: BookButtonProps) => {

    return (
        <Link
            className="underline p-5 m-2 rounded bg-cyan-950 text-stone-100 hover:bg-cyan-900 hover:text-stone-50"
            to={`/${id}`}
        >
            { name }
        </Link>
    )
}

export default BookButton