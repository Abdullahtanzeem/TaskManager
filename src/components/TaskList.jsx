import React from 'react'

export const TaskList = () => {
    const tasks = [
        { id: 54493, name: "TASK A", time: "2:09:01 AM 9/14/2025" },
        { id: 54494, name: "TASK B", time: "2:09:01 AM 9/14/2025" },
        { id: 54495, name: "TASK C", time: "2:09:01 AM 9/14/2025" }

    ]
    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>0</span>
                </div>
                <button className="clearAll">Clear</button>
            </div>
            <ul>
                {tasks.map((task) => 
                    <li>
                    <p>
                        <span className="taskName">{task.name}</span>
                        <span className="time">{task.time}</span>
                    </p>
                    <i className='bi bi-pencil-square'></i>
                    <i class="bi bi-trash"></i>
                </li>
                )}
                
            </ul>
        </section>
    )
}
