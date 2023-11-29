const Button = (props) => {

    return (
        <button
            onClick={props.onClick}
            className="rounded-xl bg-white p-3 text-gray-900
            ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">
            {props.children}
        </button>
    )
}

export default Button