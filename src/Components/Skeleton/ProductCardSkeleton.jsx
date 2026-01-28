import React from 'react'

export default function ProductCardSkeleton() {
    return (
        <div className="card bg-white relative rounded-xl shadow-lg overflow-hidden border border-primary-600/20 p-4">
            <div className="relative">
                <div className="w-44 h-52 mx-auto bg-gray-200 rounded animate-pulse" />
            </div>

            <div className="content p-4 space-y-2">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>

                <div className="flex gap-2 items-center">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="space-x-2">
                        <div className="h-6 w-20 bg-gray-200 rounded animate-pulse inline-block" />
                        <div className="h-4 w-12 bg-gray-200 rounded animate-pulse inline-block ml-2" />
                    </div>

                    <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                </div>

                <div className="absolute top-4 right-1 flex flex-col gap-4">
                    <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
                </div>

                <div className="absolute top-4 left-4">
                    <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}
