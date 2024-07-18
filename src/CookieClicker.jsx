import React, { useState } from 'react';

const CookieClicker = () => {
    const [clicks, setClicks] = useState(0);
    const [isScaling, setIsScaling] = useState(false);

    // Função para lidar com o clique no cookie
    const handleClick = () => {
        setClicks(clicks + 1);
        setIsScaling(true);

        setTimeout(() => {
            setIsScaling(false);
        }, 100);
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="relative w-96" onClick={handleClick}>
                <div
                    style={{
                        transition: 'transform 0.2s ease-out',
                    }}
                    className={`cursor-pointer ${isScaling ? 'scale-90' : ''}`}>
                    <img
                        src="/Cookie.webp"
                        alt="Cookie"
                        style={{
                            transition: 'transform 0.1s ease-out',
                            animation: 'rotate 10s linear infinite'
                        }}
                    />
                </div>
            </div>
            <div className="mt-4">
                <p className="text-lg">Cookies clicados: {clicks}</p>
            </div>
        </div>
    );
};

export default CookieClicker;
