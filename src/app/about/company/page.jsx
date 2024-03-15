"use client"
import { usePathname, useSearchParams,useRouter } from 'next/navigation';
import React from 'react'

const Company = () => {
    const route = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();
    // console.log(pathname)

    return (
        <div>Company
            <button onClick={() => {
                route.replace("/");
            }}>
                Navigate to Home
            </button>
        </div>
    )
}

export default Company