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
                    <h3 className="text-2xl font-semibold text-indigo-500">
                        <a target="_blank" href="https://banglamed.net">Banglamed.net(May 2020 - December 2021)</a>
                    </h3>
                    <p className="text-gray-600 mt-2">
                        This is an e-commerce platform built with Laravel, where users can purchase medical books, available in both physical and eBook formats. The site includes a unique feature for eBooks, allowing buyers to read them within a specified time limit. The front end leverages a mix of raw JavaScript, jQuery, Bootstrap 5 alpha, and Tailwind CSS to create a modern and interactive user experience.
                    </p>
                </li>
                <li className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-2xl font-semibold text-indigo-500"> 
                        <a target="_blank" href="https://stock.banglamed.net">
                            stock.banglamed.net(January 2022 - January 2024)
                        </a>
                    </h3>
                    <p className="text-gray-600 mt-2">
                        This project is a book inventory management system developed with Laravel, Inertia.js, Vue.js, and Tailwind CSS. It includes essential features for efficient book storage tracking, transferring books between outlets, and handling both printing and reprinting requests. The combination of Inertia.js and Vue.js offers a seamless, dynamic user experience across inventory tasks.
                    </p>
                </li>
                <li className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-2xl font-semibold text-indigo-500"> 
                        <a target="_blank" href="https://genesisedu.info">
                            Genesis
                        </a>
                    </h3>
                    <p className="text-gray-600 mt-2">
                        A educational site where doctor can enroll course and can do class with Laravel, Vue.js, and Tailwind CSS, Bootstrap. This project front panel is by vuejs , and API is in laravel.
                    </p>
                </li>
            </ul>
        </div>
    );
}
