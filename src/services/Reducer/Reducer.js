import { ADD_TO_CART,Remove_TO_Cart } from "../Constants";

const initialState={
    cardData:[]
}
export default function cardItems(state= [], action){
    switch(action.type){
        case ADD_TO_CART:
            //console.warn('Reducer', action)
            return[
                ...state,
                {cardData:action.data}
              ]
              case Remove_TO_Cart:
            //console.warn('Reducer', action)
            state.pop();
            return[
                ...state,

              ]
            
            default:
                return state
    }
}