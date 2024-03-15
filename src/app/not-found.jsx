import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <Link href="/" prefetch={false} >Back to Home</Link>
    </div>
  )
}

export default NotFound