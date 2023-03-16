import React, { useMemo } from "react";

export default function NotFoundButton({ onClick, text }) {
    return useMemo(() => (
        <button onClick={onClick} className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent focus:outline-none focus:shadow-outline-teal bg-message-dark active:bg-teal-800 hover:bg-teal-800">{text}</button>
    ), [onClick, text]);
}