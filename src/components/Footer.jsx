import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white text-center p-4">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                {/* Información */}
                <p className="mb- text-sm">
                    © {new Date().getFullYear()} Fabricio Centeno. Este sitio es un proyecto personal para practicar React y Tailwind CSS.
                </p>

                {/* Enlaces sociales */}
                <div className="flex gap-6 text-2xl">
                    <a
                        href="https://github.com/rcentenoc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/r-fabricio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    )
}
