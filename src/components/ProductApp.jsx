import { useReducer } from "react"
import productReducer, { initialState } from "../reducers/productReducer"
import types from '../types/types'

const ProductApp = () => {

      const[productState, productDispatch]=useReducer(productReducer, initialState)
      const {products, cart, activeProduct} = productState

      return (       
            <div>

            <h2>Products</h2>    

            <ul>
                {products.map((el, i)=> (
                    <li key={i}>

                        {el.title}

                        <button onClick={() => 
                              productDispatch({ type: types.productShow, payload: el
                        })}> Show </button>

                        <button onClick={() => 
                              productDispatch({ type: types.productAddToCart, payload: el
                        })}> Add to cart </button>

                    </li>
                ))}
            </ul>  

            <h2>Cart</h2>    

            <ul>
                {cart.map((el, i)=> (
                    <li key={i}>

                        {el.title} - quantity: {el.quantity}

                        <button onClick={()=> 
                              productDispatch({ type: types.productRemoveOneFromCart, payload: el.id
                        })}>Remove one</button>

                        <button onClick={()=> 
                              productDispatch({ type: types.productRemoveFromCart, payload: el.id
                        })}>Remove all</button>

                    </li>
                ))}
            </ul>

            <h2>Preview</h2>            
            <p>{activeProduct.title}</p>
            </div>
      )
}

export default ProductApp
