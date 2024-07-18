import React, { useState } from 'react';
import { KanbanColumn } from './KanbanColumn';

const initialColumns = {
    todo: {
        name: 'A Fazer',
        items: []
    },
    inProgress: {
        name: 'Em progresso',
        items: []
    },
    done: {
        name: 'Feito',
        items: []
    }
};

export const KanbanBoard = () => {
    const [columns, setColumns] = useState(initialColumns);

    const addTask = (columnId, taskContent) => {
        const newTask = { id: Date.now(), content: taskContent };
        setColumns({
            ...columns,
            [columnId]: {
                ...columns[columnId],
                items: [...columns[columnId].items, newTask]
            }
        });
    };

    const removeTask = (columnId, taskId) => {
        setColumns({
            ...columns,
            [columnId]: {
                ...columns[columnId],
                items: columns[columnId].items.filter(task => task.id !== taskId)
            }
        });
    };

    const moveTask = (fromColumnId, toColumnId, taskId) => {
        const task = columns[fromColumnId].items.find(task => task.id === taskId);
        setColumns({
            ...columns,
            [fromColumnId]: {
                ...columns[fromColumnId],
                items: columns[fromColumnId].items.filter(task => task.id !== taskId)
            },
            [toColumnId]: {
                ...columns[toColumnId],
                items: [...columns[toColumnId].items, task]
            }
        });
    };

    return (
        <div className="flex flex-col items-start sm:flex-row justify-center p-2 w-full">
            {Object.entries(columns).map(([columnId, column]) => (
                <KanbanColumn
                    key={columnId}
                    columnId={columnId}
                    column={column}
                    addTask={addTask}
                    removeTask={removeTask}
                    moveTask={moveTask}
                />
            ))}
        </div>
    );
};
