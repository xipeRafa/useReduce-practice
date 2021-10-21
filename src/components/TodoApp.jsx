import { useReducer } from "react"

const TodoApp = () => {

      const TYPES = {
            POST:'POST',
            PUT:'PUT',
            DELETE:'DELETE'
      }

      const initialTodos = [
            {id:1, title:'hello 1'},
            {id:2, title:'hello 2'},
            {id:3, title:'hello 3'}
      ]
      const reducer = (todos, action) =>{
            switch (action.type) {
                  case TYPES.DELETE : return todos.filter(el => el.id !== action.payload)
                  default:return todos;
            }
      }

      const [todos, todosDispatch]=useReducer(reducer, initialTodos)
      console.log(todos)
      return (
            <div>
                  {
                        todos.map((el,i)=>(
                              <div key={i}>
                                    <p>{el.title}
                                          <button onClick={()=> todosDispatch({ type: TYPES.DELETE, payload: el.id })}>
                                                DELETE
                                          </button>
                                    </p>
                              </div>
                        )) 
                  }
            </div>
      )
}

export default TodoApp
