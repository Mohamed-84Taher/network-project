import {ADD_USER} from '../types'

const initState={
    users:[
        {
            id:"1",
            firstName:"Mohamed",
            lastName:"Ben Arbia"
        },
        {
            id:"2",
            firstName:"Amen Allah",
            lastName:"Ben Arbia"
        },
        {
            id:"3",
            firstName:"Assia",
            lastName:"Ben Amor"
        },
        {
            id:"4",
            firstName:"Boubaker",
            lastName:"Akrouti"
        }
    ]
}

function userReducer(state=initState,{type,payload}) {
  switch (type) {
      case ADD_USER:
      return {
         ...state,users:[...state.users,payload]
     }
      default:
      return state
  }
}

export default userReducer
