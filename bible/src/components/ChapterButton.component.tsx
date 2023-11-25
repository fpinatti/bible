import { Link } from "react-router-dom"
import { PropsWithChildren } from 'react'

type ChapterButtonProps = {
    book: string;
    id: number;
}


const ChapterButton = ({ book, id, children }:PropsWithChildren<ChapterButtonProps>) => {

    return (
        <Link
            className="text-orange-400 underline p-5 m-3"
            to={`/${book}/${id}`}
        >
            { children }
        </Link>
    )
}

export default ChapterButton