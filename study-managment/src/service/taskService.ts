import Api from './api';
import { TaskModel } from '../models/redux-models';


// eslint-disable-next-line import/no-anonymous-default-export
export default{
    async getAllTasks(){
        var response=await Api().get('task/getTasks');
        return response.data;
    },
    // async getParticularTodo(todo_id:number){
    //     var response=await Api().get('getTasks');
    //     return response.data.filter((todo:TaskModel)=>todo.id===todo_id)[0];
    // }
}