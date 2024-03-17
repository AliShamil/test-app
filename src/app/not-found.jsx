import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl text-gray-900 mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-8">
        The page you are looking for might have been removed or doesn't exist.
      </p>
      <Link href="/" className='px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600' prefetch={false}>
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound