

// export const TaskList = ({tasklist, setTasklist,task, setTask}) => {
//     const handleEdit = (id) =>{
//         const selectedTask = tasklist.find(task => task.id === id);
//         setTask(selectedTask);
//     }
//     const handleDelete = (id) =>{
//         const updatedTasklist= tasklist.filter(task => task.id !== id);
//         setTasklist(updatedTasklist);
//     }
//     return (
//         <section className="showTask">
//             <div className="head">
//                 <div>
//                     <span className='title'>Todo</span>
//                     <span className='count'>{ tasklist.length }</span>
//                 </div>
//                 <button className="clearAll" onClick={() => setTasklist([])}>Clear</button>
//             </div>
//             <ul>
//                 {tasklist.map((task) => 
//                     <li key={task.id}>
//                     <p>
//                         <span className="taskName">{task.name}</span>
//                         <span className="time">{task.time}</span>
//                     </p>
//                     <i onClick={() => handleEdit(task.id)} className='bi bi-pencil-square'></i>
//                     <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
//                 </li>
//                 )}
                
//             </ul>
//         </section>
//     )
// }

export const TaskList = ({ tasklist, setTasklist, task, setTask }) => {
    const handleEdit = (id) => {
      const selectedTask = tasklist.find((task) => task.id === id);
      setTask(selectedTask);
    };
  
    const handleDelete = (id) => {
      const updatedTasklist = tasklist.filter((task) => task.id !== id);
      setTasklist(updatedTasklist);
      
      // If the deleted task is currently being edited, clear it
      if (task.id === id) {
        setTask({});
      }
    };
  
    return (
      <section className="showTask">
        <div className="head">
          <div>
            <span className="title">Todo</span>
            <span className="count">{tasklist.length}</span>
          </div>
          <button className="clearAll" onClick={() => setTasklist([])}>
            Clear
          </button>
        </div>
        <ul>
          {tasklist.map((taskItem) => (
            <li key={taskItem.id}>
              <p>
                <span className="taskName">{taskItem.name}</span>
                <span className="time">{taskItem.time}</span>
              </p>
              <i
                onClick={() => handleEdit(taskItem.id)}
                className="bi bi-pencil-square"
                role="button"
                aria-label="Edit task"
              ></i>
              <i
                onClick={() => handleDelete(taskItem.id)}
                className="bi bi-trash"
                role="button"
                aria-label="Delete task"
              ></i>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  