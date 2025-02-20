import React from 'react'

export const TaskList = ({tasklist, setTasklist}) => {
    
    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>{ tasklist.length }</span>
                </div>
                <button className="clearAll" onClick={() => setTasklist([])}>Clear</button>
            </div>
            <ul>
                {tasklist.map((task) => 
                    <li key={task.id}>
                    <p>
                        <span className="taskName">{task.name}</span>
                        <span className="time">{task.time}</span>
                    </p>
                    <i className='bi bi-pencil-square'></i>
                    <i className="bi bi-trash"></i>
                </li>
                )}
                
            </ul>
        </section>
    )
}
