export const metadata = {
    title: "Projects",
    description: "A showcase of my work and projects",
};

export default function Projects() {
    return (
        <div className="mt-16 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-indigo-500 inline-block">
                Projects
            </h2>
            <ul className="space-y-6">
                <li className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-2xl font-semibold text-indigo-500">Project 1</h3>
                    <p className="text-gray-600 mt-2">
                        A brief description of Project 1, highlighting key features, technologies used, and outcomes.
                    </p>
                </li>
                <li className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-2xl font-semibold text-indigo-500">Project 2</h3>
                    <p className="text-gray-600 mt-2">
                        A brief description of Project 2, focusing on its main goals, functionalities, and results.
                    </p>
                </li>
                <li className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-2xl font-semibold text-indigo-500">Project 3</h3>
                    <p className="text-gray-600 mt-2">
                        A brief description of Project 3, with an overview of its purpose, challenges solved, and technology stack.
                    </p>
                </li>
            </ul>
        </div>
    );
}
