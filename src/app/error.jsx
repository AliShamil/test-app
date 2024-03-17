"use client"
import React from 'react'

const Error = ({ error, reset }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl text-gray-900 mb-4">Oops! Something went wrong</h1>
        <p className="text-lg text-gray-700 mb-8">{error.message || "Please try again later."}</p>
        <button
            className="px-4 py-2 bg-primary text-white rounded-md bg-blue-500 transition duration-300 hover:bg-blue-600"
            onClick={reset}
        >
            Try Again
        </button>
    </div>
    )
}

export default Error