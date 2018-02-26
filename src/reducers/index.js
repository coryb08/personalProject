const statuses = ["TODO", "DOING", "DONE"]

const task = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        id: action.id,
        text: action.text,
        executor: action.executor,
        status: "TODO"
      }
    case "REMOVE_TASK":
      if (state.id === action.id) {
        return false
      }
      return true
    case "CHANGE_TASK_STATUS":
      if (state.id !== action.id) {
        return state
      }

      let statusNum = statuses.indexOf(state.status)
      const nextStatus = statusNum === 2 ? statuses[0] : statuses[statusNum + 1]

      return {
        ...state,
        status: nextStatus
      }
    default:
      return state
  }
}

const tasks = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, task(undefined, action)]
    case "REMOVE_TASK":
      return state.filter(t => task(t, action))
    case "CHANGE_TASK_STATUS":
      return state.map(t => task(t, action))
    default:
      return state
  }
}

export default tasks

//
//
//
//
//
//
//
// import { combineReducers } from "redux"
//
// let concat
// const defaultState = {
//   payload: [],
//   searchTerm: "",
//   bool: false
// }
// const articles = (state = defaultState, action) => {
//   console.log("reducer1 ", state)
//   switch (action.type) {
//     case "ARTICLES":
//       console.log(action.payload)
//       return {
//         ...state,
//         payload: action.payload,
//         searchTerm: action.concat,
//         bool: action.bool
//       }
//
//     default:
//       return state
//   }
// }
//
// const favorites = (state, action) => {
//   switch (action.type) {
//     case "FAVORITESSUCCESS":
//       return {
//         ...state,
//         articles: action.articles,
//         status: action.status
//       }
//     default:
//       return { ...state, status: false }
//   }
// }
//
// const offClick = (state, action) => {
//   console.log("reducer ", state)
//   switch (action.type) {
//     case "offClick":
//       return {
//         ...state,
//         offClick: action.offClick
//       }
//
//     case "WARNING":
//       return {
//         ...state,
//         offClick: true,
//         warningStatus: false
//       }
//
//     default:
//       return { ...state, offClick: false, warningStatus: true }
//   }
// }
//
// const users = (state, action) => {
//   switch (action.type) {
//     case "USERSUCCESS":
//       return {
//         ...state,
//         id: action.id,
//         username: action.username,
//         password: action.password,
//         articles: action.articles,
//         status: action.status
//       }
//
//     case "USERERROR":
//       return {
//         ...state,
//         error: action.error,
//         status: action.status
//       }
//
//     default:
//       return { ...state }
//   }
// }
//
// export default combineReducers({ articles, offClick, users, favorites })
