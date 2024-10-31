export default function Loading() {
    console.log("error")
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex items-center space-x-2 animate-bounce">
                <div className="w-6 h-6 bg-indigo-600 rounded-full"></div>
                <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
                <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">Loading About Segment...</h2>
            <p className="mt-1 text-sm text-gray-500">Please wait a moment while we load the content.</p>
        </div>
    )
}