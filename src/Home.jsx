import React from "react";

const Home = () => {


    return (
        <div className="w-full px-4 mx-auto text-center flex flex-col items-center xl:w-2/3 ">
            <h1 className="font-bold text-3xl mb-4">
                Olá, Dev!
            </h1>
            <h2 className="text-2xl mb-4">
                Escolha no menu o aplicativo que você quer rodar!
            </h2>
            <h3 className="font-semibold text-white mb-2 bg-pink-500 py-1 px-6 rounded-full max-w-fit transition-all hover:bg-pink-800">
                To Do List
            </h3>
            <p className="font-normal mb-4">
                Uma aplicação de lista de tarefas em formato Kamban, com opção de adicionar, mover e deletar tarefas.
            </p>

            <h3 className="font-semibold text-white mb-2 bg-pink-500 py-1 px-6 rounded-full max-w-fit transition-all hover:bg-pink-800">
                Text Write Speed
            </h3>
            <p className="font-normal mb-4">
                Escreva seu texto e mensure a sua velocidade de digitação, além de exibir ele logo abaixo.
            </p>

            <h3 className="font-semibold text-white mb-2 bg-pink-500 py-1 px-6 rounded-full max-w-fit transition-all hover:bg-pink-800">
                Cookie Cliker
            </h3>
            <p className="font-normal mb-4">
                Desestrese clicando várias vezes em um Cookie delicio e totalmente digital!
            </p>
        </div>
    )
}

export default Home