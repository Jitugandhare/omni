import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from './redux/action';

function App() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <div className="App">
      <h1>Task Management</h1>
      <TaskInput addTask={handleAddTask} />
      <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;