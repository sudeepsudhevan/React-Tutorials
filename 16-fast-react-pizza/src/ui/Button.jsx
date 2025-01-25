import { Link } from "react-router-dom"

export default function Button({ children, disabled, to }) {

    const className = "bg-yellow-400 uppercase font-semibold text-stone-800 px-4 py-3 inline-block tracking-wide focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 rounded-full hover:bg-yellow-300 transition-colors duration-300 disabled:cursor-not-allowed md:px-6 md:py-4"

    if (to) {
        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        )
    }

    return (
        <button
            disabled={disabled}
            className={className}>
            {children}
        </button>
    )
}
