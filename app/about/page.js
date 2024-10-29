export const metadata = {
    title: "About Us",
    description: "This is a blog about page",
};

export default function About() {
    return (
        <div className="mt-16 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 border-b-4 border-indigo-500 inline-block">
                About Me
            </h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                Hello! I am <span className="font-semibold text-indigo-500">Md Shahnewaz Ibrahim Himu</span>, a passionate web developer with expertise in modern web technologies like <span className="font-medium">Laravel</span>, <span className="font-medium">Vue.js</span>, and more. My journey into web development has been fueled by a deep curiosity to create impactful, dynamic, and responsive web applications that serve both clients and users efficiently.
            </p>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                My skills span across both frontend and backend development, allowing me to build full-stack applications with ease. From crafting smooth user experiences with <span className="font-medium">Vue.js</span> and <span className="font-medium">Tailwind CSS</span> to managing server-side logic with <span className="font-medium">Laravel</span> and <span className="font-medium">MySQL</span>, I take pride in delivering seamless and visually appealing web solutions.
            </p>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                Apart from coding, I continuously strive to improve my skills by keeping up with the latest trends and best practices in web development. I’m also passionate about creating user-friendly and accessible websites that leave a positive impact.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4">
                <a
                    href="#"
                    className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
                >
                    View My Work
                </a>
                <a
                    href="#"
                    className="px-6 py-3 border border-indigo-500 text-indigo-500 font-semibold rounded-lg shadow-md hover:bg-indigo-50 transition duration-300"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
}
