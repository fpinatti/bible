type VerseProps = {
    id: number;
    verse: string;
}

const Verse = ({ id, verse }: VerseProps) => {

    return (
        <span className="flex">
            <p className="mr-2 text-xs">{ id + 1 }</p>
            <p>{ verse }</p>
        </span>
    )
}

export default Verse