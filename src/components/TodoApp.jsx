const TodoApp = () => {

      const initialTodos = [
            {id:1, title:'hello 1'},
            {id:2, title:'hello 2'},
            {id:3, title:'hello 3'}
      ]

      return (
            <div>
                  {
                        initialTodos.map((el,i)=>(
                              <div key={i}>
                                    <p>{el.title}</p>
                              </div>
                        ))
                  }
            </div>
      )
}

export default TodoApp
