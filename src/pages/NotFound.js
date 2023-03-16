import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import NotFoundButton from '../components/Buttons/NotFoundButton';
import imagen from '../assets/images/not-found.png';

export default function NotFound() {
    const HOME_URL = '/';
    const TIMER_INTERVAL = 1000;

    const navigate = useNavigate();
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer - 1);
        }, TIMER_INTERVAL);
        if (timer === 0) {
            clearInterval(interval);
            navigate(HOME_URL);
        }
        return () => clearInterval(interval);
    }, [navigate, timer]);

    return (
        <div className="h-screen w-screen bg-gray-100 flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md">
                    <p className="text-2xl md:text-3xl font-light leading-normal">We are sorry, but we can't open this page.</p>
                    <p className="mb-4">You'll return to the main page in {timer} seconds.</p>
                    <NotFoundButton onClick={() => navigate(HOME_URL)} text="Return to the main page" />
                </div>
                <div className="max-w-lg">
                    <img alt="Page not found" src={imagen} className='h-28 w-28' />
                </div>
            </div>
        </div>
    );
}