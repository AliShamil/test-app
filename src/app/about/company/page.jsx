"use client"
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

const Company = () => {
    const route = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">Company Page</h1>
            <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                <p className="mb-2"><strong>Pathname:</strong> {pathname}</p>
                <p className="mb-2"><strong>Params:</strong> {JSON.stringify(params.get("txt"))}</p>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600" onClick={() => route.replace("/")}>
                Navigate to Home
            </button>
        </div>
    );
};

export default Company;
