import { useEffect, useReducer } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import imagen from '../images/not-found.png'

export default function NotFound() {
    const navigate = useNavigate()
    const [timeout, dispatch] = useReducer(
        (state, action) => {
            switch (action) {
                case 'tick': return state - 1
                case 'end': return 0
                default: throw new Error('invalid action')
            }
        },
        10,
        arg => arg
    )

    useEffect(() => {
        const listener = setInterval(() => {
            dispatch('tick')
        }, 1000)
        return () => clearInterval(listener)
    }, [])

    if (timeout === 0) {
        return <Navigate to='/' />
    } else {
        return <div className="h-screen w-screen bg-gray-100 flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md">
                    <p className="text-2xl md:text-3xl font-light leading-normal">Lo sentimos, no se pudo encontrar esta página.</p>
                    <p className="mb-4">Volverás a la página principal en {timeout} segundos</p>
                    <button onClick={() => navigate('/')} className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent focus:outline-none focus:shadow-outline-teal bg-intro-border active:bg-teal-800 hover:bg-teal-800">Volver a la página principal</button>
                </div>
                <div className="max-w-lg">
                    <img alt="Page not found" src={imagen} className='h-28 w-28' />
                </div>
            </div>
        </div>
    }
}