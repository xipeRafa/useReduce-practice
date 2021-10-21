import types from '../types/types'


const initialState = {
      products:[
            {id:1, title:'product 1'},
            {id:2, title:'product 2'}
      ],
      cart:[
            {id:1, title:'product 1', quantity:3}
      ],
      activeProduct:{id:1, title:'product 1'}
}


const productReducer = (state, action) => {
      switch (action.type) {
            case types.productShow : return {...state, activeProduct: action.payload }

            case types.productAddToCart: {

                  const cartContainProduct = state.cart.find(el => el.id === action.payload.id)
      
                  return cartContainProduct
                        ? {...state, cart: state.cart.map(el => 
                              el.id === action.payload.id ? {...el, quantity: el.quantity+1} : el)
                          }
                        : { ...state, cart: [...state.cart, {...action.payload, quantity: 1}] }
            }

            case types.productRemoveFromCart:return { ...state, 
                  cart: state.cart.filter(el => el.id !== action.payload) }

            case types.productRemoveOneFromCart: {
                  const productDelete = state.cart.find(el => el.id === action.payload);
            
                  return productDelete.quantity > 1 
                  ? {...state, cart: state.cart.map(el => 
                                    el.id === action.payload ? {...el, quantity: el.quantity -1} : el    
                               )
                    } 
                  : { ...state, cart: state.cart.filter(el => el.id !== action.payload) }
            }
            
            default : return state;      
      }
      
}
export {initialState}
export default productReducer
