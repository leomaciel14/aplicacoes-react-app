import React, { useState, useEffect } from 'react';

const TextAreaMirror = () => {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Inicia o timer quando o usuário começa a digitar
    const handleKeyPress = () => {
        if (!isRunning) {
            setIsRunning(true);
            startTimer();
        }
    };

    // Conta as palavras no texto
    useEffect(() => {
        const words = text.trim().split(/\s+/);
        setWordCount(words.length);
    }, [text]);

    // Calcula o WPM baseado no tempo decorrido
    useEffect(() => {
        if (timer > 0) {
            const minutes = timer / 60;
            const calculatedWpm = Math.round(wordCount / minutes);
            setWpm(calculatedWpm);
        }
    }, [timer, wordCount]);

    // Função para iniciar o timer
    const startTimer = () => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000); // Incrementa o timer a cada segundo

        return () => clearInterval(interval);
    };

    // Reinicia o estado para digitar novamente
    const resetState = () => {
        setText('');
        setWordCount(0);
        setTimer(0);
        setWpm(0);
        setIsRunning(false);
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleKeyPress}
                rows="10"
                className="w-4/5 p-4 border border-purple-700 rounded-xl focus:border-purple-800"
                placeholder="Digite aqui..."
            />
            <div className="flex justify-between w-4/5 mt-4">
                <div className="bg-pink-500 rounded-full p-2 px-6 text-white text-sm">
                    {text.length} caracteres
                </div>
                <div className="bg-blue-500 rounded-full p-2 px-6 text-white text-sm">
                    {wpm} WPM
                </div>
            </div>
            <div className="mt-4 w-4/5">
                <h3 className="text-lg font-bold">Texto digitado:</h3>
                <p className="mt-2 p-4 border border-gray-300 rounded-lg">{text}</p>
            </div>
            <div className="mt-4">
                <button
                    onClick={resetState}
                    className="cursor-pointer bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default TextAreaMirror;
