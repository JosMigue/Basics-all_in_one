import propTypes from 'prop-types';
class Task extends Component {

    StyleCompleted(){
        return{
            fontSize: '20px',
            color:this.props.task.done ?'#292524': '#ef4444',
            textDecoration: this.props.task.done? 'line-through':'none'
        }
    }
render(){    
    const {task} = this.props;
    return <div style={this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} -
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
            <button className="py-1 px-2 bg-indigo-500 rounded-md boder  shadow-md" onClick={this.props.deleteTask.bind(this,task.id)}>
                x
            </button>
    </div>
}
}
Task.propTypes = {
    task: propTypes.object.isRequired
}
export default Task;
 