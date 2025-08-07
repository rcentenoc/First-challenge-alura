import logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <nav className="bg-indigo-600 text-white w-full py-6 flex flex-col items-center shadow-md rounded-b-full">
            {/* Logo */}
            <a href="https://www.aluracursos.com/">
                <img src={logo} alt="Alura" className="h-12 mb-2 rounded-2xl transition-transform hover:scale-115" />
            </a>
            <div>
                <h1 className="text-3xl font-bold">Amigo Secreto</h1>
            </div>

            {/* Menú de categorías */}
            {/* <ul className="flex flex-row items-center gap-4 text-lg mt-4">
                <li className="hover:cursor-pointer hover:text-amber-600 hover:font-black font-bold transition ">Home</li>
                <li className="hover:cursor-pointer hover:text-amber-600 hover:font-black font-bold transition">History</li>
                <li className="hover:cursor-pointer hover:text-amber-600 hover:font-black font-bold transition">More</li>
            </ul> */}
        </nav>
    )
}
