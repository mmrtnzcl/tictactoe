import { Square } from "./Square"

export function Winner({winner, resetGame}) {
    if (winner === null) return null
    return (

        <section className='fixed  inset-0 grid place-items-center bg-black bg-opacity-70'>
            <div className='bg-gray-900 h-300 w-320 border-2 border-solid border-gray-300 rounded-lg flex flex-col justify-center items-center gap-20'>
                <h2>
                    {winner === false ? 'Empate' : 'Gano:'}
                </h2>
                <header className='flex m-auto w-fit border-2 border-solid rounded-sm gap-3'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button className='px-3 py-2 my-6 mx-10 border border-gray-300 text-gray-300 w-24 rounded transition duration-200 font-bold cursor-pointer hover:bg-gray-300 hover:text-gray-800' onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>

    )
}
