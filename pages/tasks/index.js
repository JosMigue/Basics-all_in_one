import React, {useState, useEffect} from 'react';
import tasksData from '../../data/tasks.json';
import Tasks from '../../components/task/Tasks';
import TaskForm from '../../components/task/Form';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link'
const Task = function(){
  const [tasks, setTasks] = useState([]);
  useEffect(() => { setTasks(tasksData) }, []);
  function addTask(title, description){
    const newTask = {
      title: title,
      description: description,
      id: tasks.length > 0 ? (tasks[tasks.length -1 ].id) + 1 : 1
    }
      toast.success("Task added successfully");
      setTasks(prevTasks => prevTasks = [...tasks, newTask])
  }
  function deleteTask(id){
    let userResponse = window.confirm('Are you sure you want to delete this task?');
    if(userResponse){
      const newTasks = tasks.filter(task => task.id !== id);
      toast.success("Taks "+id+" deleted successfully");
      setTasks(prevTasks => prevTasks = newTasks)
    }else{
      toast('Nothing happened!', {
        icon: '👏',
      });
    }
  }
  function checkDone(id){
    const newTasks = tasks.map(task =>{
      if (task.id === id) {
        task.done = !task.done
        }
        return task;
      });
    setTasks(prevTasks => prevTasks = newTasks);
  }
  function cleanTodo(){
    let userResponse = window.confirm('Are you sure you want to delete all tasks?');
    if(userResponse){
      setTasks(prevTasks => prevTasks = []);
    }else{
      toast('Nothing happened!', {
        icon: '👏',
      });
    }
  }
  const button = 'select-none cursor-pointer rounded-lg border-2 border-gray-200 py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 '
  return(
    <>
      <Toaster position="bottom-right" reverseOrder={false}/>
      <div className="flex justify-center min-h-screen mx-auto">
        <div className="p-4 w-2/5  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 max-h-screen overflow-y-scroll">
            <div className="flex flex-col justify-start items-center mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Tasks</h3>
                <div className="flex flex-row justify-between">
                  <button className={button} onClick={() => cleanTodo()}>Delete all</button>
                  <Link href="/">
                    <a className={button}>Home</a>
                  </Link>
                </div>
            </div>
            <div>
              <TaskForm addTask={addTask}/>
            </div>
            <div>
            </div>
            <div className="flow-root">
                <div role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  <Tasks tasks={tasks} deleteTask={() => deleteTask} checkDone={() => checkDone}/>
                </div>
            </div>
        </div>
      </div>
    
    </>
  )
}

export default Task