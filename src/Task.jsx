import React from 'react';
import { AiOutlineDelete, AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export const Task = ({ task, columnId, removeTask, moveTask }) => {
    const handleRemove = () => {
        removeTask(columnId, task.id);
    };

    const handleMoveRight = () => {
        if (columnId === 'todo') moveTask(columnId, 'inProgress', task.id);
        if (columnId === 'inProgress') moveTask(columnId, 'done', task.id);
    };

    const handleMoveLeft = () => {
        if (columnId === 'done') moveTask(columnId, 'inProgress', task.id);
        if (columnId === 'inProgress') moveTask(columnId, 'todo', task.id);
    };

    return (
        <div className="bg-white rounded-lg p-2 mb-2 flex justify-between items-center">
            <div className="flex-1 sm: text-left">{task.content}</div>
            <div className="flex gap-2 sm: gap-1">
                {/* Setas para cima/baixo em telas pequenas */}
                <button
                    onClick={handleMoveLeft}
                    disabled={columnId === 'todo'}
                    className={`bg-gray-300 rounded-md p-2 ${columnId === 'todo' ? 'cursor-not-allowed bg-gray-400' : 'hover:bg-gray-400'} sm:hidden`}
                >
                    <AiOutlineArrowUp />
                </button>

                <button
                    onClick={handleMoveRight}
                    disabled={columnId === 'done'}
                    className={`bg-gray-300 rounded-md p-2 ${columnId === 'done' ? 'cursor-not-allowed bg-gray-400' : 'hover:bg-gray-400'} sm:hidden`}
                >
                    <AiOutlineArrowDown />
                </button>
                


                <button
                    onClick={handleMoveLeft}
                    disabled={columnId === 'todo'}
                    className={`bg-gray-300 rounded-md p-1 ${columnId === 'todo' ? 'cursor-not-allowed bg-gray-400' : 'hover:bg-gray-400'} hidden sm:flex`}
                >
                    <AiOutlineArrowLeft />
                </button>

                <button
                    onClick={handleMoveRight}
                    disabled={columnId === 'done'}
                    className={`bg-gray-300 rounded-md p-1 ${columnId === 'done' ? 'cursor-not-allowed bg-gray-400' : 'hover:bg-gray-400'} hidden sm:flex`}
                >
                    <AiOutlineArrowRight />
                </button>



                <button
                    onClick={handleRemove}
                    className="bg-red-600 rounded-md p-2 hover:bg-red-700"
                >
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    );
};
