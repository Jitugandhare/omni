import React from 'react';

const TaskList=({ tasks, deleteTask })=> {
  return (
    <ul>
      {tasks.map((task, i) => (
        <li key={i}>
          {task}
          <button onClick={() => deleteTask(i)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;