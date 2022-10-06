import ListItem from './ListItem';
import { useAutoAnimate } from '@formkit/auto-animate/react'


const Tasks = function(props){
    function Loader(){
        if(props.tasks.length == 0)
            return <p className="text-center font-bold text-xl text-white">Loading...</p>
    }
    const [list] = useAutoAnimate(/* optional config */)
    return(
        <div ref={list} >
            {
                props.tasks.map(
                    task => <ListItem task={task} key={task.id}  deleteTask={props.deleteTask(task.id)} checkDone={props.checkDone(task.id)}></ListItem>
                )
            }
            <Loader/>
        </div>
    )
}
export default Tasks;