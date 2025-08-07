import { useState } from "react";
import amigoImg from "./assets/amigo-secreto.png";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function App() {
    const [amigos, setAmigos] = useState([]);
    const [nuevoAmigo, setNuevoAmigo] = useState('');
    const [resultado, setResultado] = useState([]);

    const agregarAmigo = () => {
        const nombre = nuevoAmigo.trim();
        if (!nombre || !isNaN(nombre)) {
            alert('Nombre de amigo inválido');
            return;
        }
        setAmigos([...amigos, nombre]);
        setNuevoAmigo('');
    }

    const sortearAmigo = () => {
        if (amigos.length === 0) return
        const ganador = amigos[Math.floor(Math.random() * amigos.length)]
        setResultado([`Ganador: ${ganador}`])
    }

    const nuevoSorteo = () => {
        setAmigos([])
        setResultado([])
        setNuevoAmigo('')
    }

    const hacerParejas = () => {
        const copiaArrayAmigos = [...amigos]
        const parejas = []

        while (copiaArrayAmigos.length > 0) {
            const sorteo1 = Math.floor(Math.random() * copiaArrayAmigos.length)
            const amigo1 = copiaArrayAmigos.splice(sorteo1, 1)[0];

            const sorteo2 = copiaArrayAmigos.length > 0 ? Math.floor(Math.random() * copiaArrayAmigos.length) : -1
            const amigo2 = sorteo2 !== -1 ? copiaArrayAmigos.splice(sorteo2, 1)[0] : 'sin amigo'

            parejas.push(`${amigo1} - ${amigo2}`);
        }

        setResultado(parejas);
    }

    return (
        <div className="bg-blue-600 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow bg-blue-600 text-gray-800">
                {/* Header */}
                <header className="flex flex-col items-center justify-center py-8 px-4">
                    <img src={amigoImg} alt="Amigo secreto" className="h-90 " />
                    <div className="flex flex-col sm:flex-row gap-4 mt-2 max-w-xs justify-center">
                        <button
                            onClick={sortearAmigo}
                            disabled={amigos.length === 0}
                            className="cursor-pointer flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow"
                        >
                            Sortear amigo
                        </button>

                        <button
                            onClick={hacerParejas}
                            disabled={amigos.length === 0}
                            className="cursor-pointer flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow"
                        >
                            Hacer Parejas
                        </button>

                        <button
                            onClick={nuevoSorteo}
                            className="cursor-pointer flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow"
                        >
                            Nuevo Sorteo
                        </button>
                    </div>
                </header>

                {/* Contenido principal */}
                <section className="bg-yellow-50 rounded-t-[64px] border-t-4 border-black py-6 flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-4">
                        Digite el nombre de sus amigos
                    </h2>
                    <div className="flex w-full max-w-md mb-1">
                        <input
                            type="text"
                            value={nuevoAmigo}
                            onChange={(e) => setNuevoAmigo(e.target.value)}
                            placeholder="Escribe un nombre"
                            className="flex-1 p-3 rounded-l-full border-2 border-black text-base"
                        />
                        <button
                            onClick={agregarAmigo}
                            className="cursor-pointer bg-blue-600 hover:bg-indigo-600 text-white font-bold px-6 rounded-r-full border-2 border-black">
                            Agregar Amigo
                        </button>
                    </div>

                    {/* Lista de amigos */}
                    {amigos.length > 0 && (
                        <ul className="mb-6 w-full max-w-md list-disc list-inside text-lg text-gray-800">
                            {amigos.map((amigo, i) => (
                                <li key={i}>{amigo}</li>
                            ))}
                        </ul>
                    )}

                    {/* Resultados */}
                    {resultado.length > 0 && (
                        <ul className="mb-6 w-full max-w-md text-xl font-bold text-green-600 text-center">
                            {resultado.map((linea, i) => (
                                <li key={i}>{linea}</li>
                            ))}
                        </ul>
                    )}

                </section>
            </main>
            <Footer />
        </div>
    )
}