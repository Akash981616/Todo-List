
export const addTodo = (data) => {
    return {
        type:"ADD_TO_DO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }

    }
}
export const deleteTodo = (id) => {
    
    return {
        type:"DELETE_TO_DO",
        id
    }
}
export const removeTodo = () => {
    return {
        type:"REMOVE_TO_DO",
        

    }
}

