import { useReducer, useState } from "react"

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
                  case TYPES.POST : return [...todos, action.payload ]
                  case TYPES.PUT : return todos.map(el => el.id === action.payload.id ? action.payload : el)
                  case TYPES.DELETE : return todos.filter(el => el.id !== action.payload)
                  default:return todos;
            }
      }

      const [todos, todosDispatch]=useReducer(reducer, initialTodos)

      const [text, setText]=useState('')

      const handleText = e =>{
            setText(e.target.value)
      }

      const handleSubmit = e =>{
            e.preventDefault()
            if(edit){
                  todosDispatch({ type: TYPES.PUT, payload: {...edit, title: text} }) 
                  setEdit(null)
            }else{
                  const newTodo = {id:Date.now(), title:text}
                  todosDispatch({type:TYPES.POST, payload:newTodo})
            }
            setText('')
      }

      console.log(todos)

      const [edit, setEdit]=useState(null)

      const handleEdit = el =>{
            setEdit(el)
            setText(el.title)
      }

      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input type="text" value={text} onChange={handleText} />
                  </form>
                  {
                        todos.map((el,i)=>(
                              <div key={i}>
                                    <p>{el.title}
                                          <button onClick={()=> todosDispatch({ type: TYPES.DELETE, payload: el.id })}>
                                                DELETE
                                          </button>


                                          <button onClick={()=> handleEdit(el) }>
                                                EDIT
                                          </button>
                                    </p>
                              </div>
                        )) 
                  }
            </div>
      )
}

export default TodoApp
