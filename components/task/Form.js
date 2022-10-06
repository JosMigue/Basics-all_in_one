import { useState, useRef} from "react"
const TaskForm = function({addTask}){
    let title = useRef('');
    let description = useRef('');

    const styles = 'my-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-2';
    
    function onSubmit(e){
      e.preventDefault();
      addTask(title.current.value, description.current.value);
      title.current.value = '';
      description.current.value = '';
    }
    
    return (
      <div>
        {JSON.stringify(addTask)}
        <form onSubmit={onSubmit}>
          <div className="flex flex-col justify-center"> 
            <input className={styles} ref={title} autoFocus={true} autoComplete="off" type="text" name="title"  placeholder="Escribe una tarea"/>
            <textarea className={styles} ref={description} autoComplete="off" name="description"  placeholder="Escribe una descripción de la tarea"></textarea>
            <input className="py-1 text-white block bg-indigo-500 border border-indigo-500 rounded-md hover:cursor-pointer hover:bg-indigo-400 hover:border-indigo-400 transition duration-200 ease-in-out" type="submit"/>
          </div>
        </form>
      </div>
    )
}
export default TaskForm