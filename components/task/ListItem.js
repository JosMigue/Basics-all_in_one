import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
export default class ListItem extends Component {
    StyleCompleted(){
        return{
            fontSize: '20px',
            color:this.props.task.done ?'#FFFFFF': '#ef4444',
            textDecoration: this.props.task.done? 'line-through':'none'
        }
    }
    render() {
        let classes = '';
        if(this.props.task.done){
            classes ='py-1 px-2 hover:bg-red-500 text-red-500 hover:text-white rounded-md boder shadow-md transition duration-200 border border-red-500'
        }else{
            classes = 'py-1 px-2 hover:bg-green-500 text-green-500 hover:text-white rounded-md boder shadow-md transition duration-200 border border-green-500'
        }
        return (
            <div className="group py-3 sm:py-4 hover:border-y">
                {this.doneStyles}
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0" style={this.StyleCompleted()}>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {this.props.task.id} .- {this.props.task.title}
                        </p>
                        <p className="text-sm text-gray-500  dark:text-gray-400">
                            {this.props.task.description}
                        </p>
                    </div>
                </div>
                <div className="inline-flex items-center flex-col text-base font-semibold text-gray-900 dark:text-white hidden group-hover:block">
                    <button className={classes} onClick={this.props.checkDone.bind(this, this.props.task.id)}>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button className="py-1 px-2 hover:bg-red-500 text-red-500 hover:text-white rounded-md boder shadow-md transition duration-200 border border-red-500" onClick={this.props.deleteTask.bind(this,this.props.task.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        );
    }
}