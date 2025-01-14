import React from 'react'

export default function Button({ isFakeDark, setIsFakeDark }) {
    return (
        <button
            onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
            className="btn-fake-dark-mode"
        >
            {isFakeDark ? "☀️" : "🌙"}
        </button>
    )
}
