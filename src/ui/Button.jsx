import React from 'react'
import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type }) {

    const className = 'inline-block tracking-wide bg-yellow-500 text-stone-900 uppercase font-semibold py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';


    if (to)
        return (
            <Link to={to} className={`${className} ${styles[type]}`}>
                {children}
            </Link>
        )
  return (
        <button disabled={disabled} className={className}>
            {children}
        </button>
  )
}
