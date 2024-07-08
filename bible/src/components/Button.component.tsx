import { PropsWithChildren, MouseEventHandler } from 'react'

type ButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({onClick, children}:PropsWithChildren<ButtonProps>) => {

    return (
        <button
            onClick={onClick}
            className="rounded-xl bg-white p-3 text-gray-900
            ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">
            {children}
        </button>
    )
}

export default Button