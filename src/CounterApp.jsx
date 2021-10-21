import { useReducer } from "react"

const TYPES = {
      INCREMENT:'INCREMENT',
      DECREMENT:'DECREMENT',
      RESET:'RESET'
}

const reducer = (counter, action) =>{ //action is an Object
     switch (action.type) {
            case TYPES.INCREMENT : return counter + 1
            case TYPES.DECREMENT : return counter - 1
            case TYPES.RESET     : return counter = 0   
            default              : counter     
     }
      return counter // valor previo
}

const CounterApp = () => {

      const[counter, counterDispatch]=useReducer(reducer, 0) 
      //counterDispatch ejecuta el reducer (line 9) y elige un action.type (case)
      //el cual fue indicado en Dispatch ejemplo: onClick={()=> counterDispatch({ type: TYPES.INCREMENT })}

      return (
            <div>
                  <p>{counter}</p>   
                  <button onClick={()=> counterDispatch({ type: TYPES.INCREMENT })}>Increment</button>
                  <button onClick={()=> counterDispatch({ type: TYPES.DECREMENT })}>Decrement</button>
                  <button onClick={()=> counterDispatch({ type: TYPES.RESET     })}>Reset</button>
            </div>
      )
}

export default CounterApp

//type:'accion que queremos llamar dentro de el reducer'
// type = case