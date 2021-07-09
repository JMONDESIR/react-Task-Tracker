import { useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
         id: 1,
         text: 'Doctors Appointment',
         day: "Feb 5th at 2:30pm",
         remibder: true,
    },
    {
         id: 2,
         text: 'Class Meeting',
         day: "Feb 6th at 1:30pm",
         remibder: true,
    },
    {
         id: 3,
         text: 'Grocery Shopping',
         day: "Feb 5th at 2:30pm",
         remibder: false,
    },
])

  // Delete Task
  const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
  }

  return (
    <div className='container'>
      <Header />
      { tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} />
        : 'No Tasks'
        }
    </div>
  );
}

export default App;
