import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth h-full">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800 flex flex-col min-h-screen`}
            >
                <header className="bg-white shadow-md">
                    <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-indigo-600">
                          {"Shahnewaz's"} Portfolio
                        </h1>
                        <nav>
                            <ul className="flex gap-8 text-lg font-medium">
                                <li>
                                    <Link href="/" className="hover:text-indigo-500">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-indigo-500">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="hover:text-indigo-500">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-indigo-500">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <main className="flex-grow max-w-6xl mx-auto my-32">
                    {children}
                </main>

                <footer className="bg-gray-900 text-gray-200">
                    <div className="max-w-6xl mx-auto p-6 flex flex-col items-center md:flex-row md:justify-between">
                        <p className="text-center text-sm md:text-base">
                            © 2024 My Portfolio. All Rights Reserved.
                        </p>

                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {/* Facebook Icon */}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/shahnewaz.bd1/"
                                className="hover:text-indigo-400 transition-transform transform hover:-translate-y-1 duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M22.675 0h-21.35c-.736 0-1.325.589-1.325 1.325v21.351c0 .736.589 1.324 1.325 1.324h11.494v-9.294h-3.124v-3.622h3.124V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.917c-1.504 0-1.795.715-1.795 1.762v2.309h3.588l-.467 3.622h-3.121v9.294h6.116c.737 0 1.325-.588 1.325-1.324V1.325C24 .589 23.412 0 22.675 0z" />
                                </svg>
                            </a>

                            {/* LinkedIn Icon */}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/shahnewazibrahim"
                                className="hover:text-indigo-400 transition-transform transform hover:-translate-y-1 duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.034-1.852-3.034-1.853 0-2.136 1.445-2.136 2.938v5.665H9.357v-11.5h3.415v1.572h.048c.476-.902 1.634-1.852 3.364-1.852 3.598 0 4.265 2.37 4.265 5.455v6.325zM5.337 8.433c-1.144 0-2.066-.926-2.066-2.068 0-1.141.922-2.066 2.066-2.066 1.144 0 2.066.925 2.066 2.066 0 1.142-.922 2.068-2.066 2.068zm1.779 12.019H3.559v-11.5h3.557v11.5z" />
                                </svg>
                            </a>
                            
                            {/* GitHub Icon */}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/shahnewazIbrahim"
                                className="hover:text-indigo-400 transition-transform transform hover:-translate-y-1 duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.757-1.333-1.757-1.086-.744.083-.729.083-.729 1.205.084 1.837 1.234 1.837 1.234 1.07 1.835 2.809 1.305 3.495.998.107-.775.418-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.469-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.629-5.473 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.824.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </footer>
            </body>
        </html>
    );
}
