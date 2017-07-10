module.exports = {
  genTypes(name){
    return `
const prefix = '${name.replace(/([A-Z])/g, '_$1').toUpperCase()}/'

export const SET = prefix + 'SET'
export const RESET = prefix + 'RESET'
    `.trim()
  }
, genActions(name){
    return `
import { SET, RESET } from '../types/${name}'

export function set(payload){
  return {
    type: SET
  , payload
  }
}

export function reset(payload={}){
  return {
    type: RESET
  , payload
  }
}
    `.trim()
  }
, genReducers(name){
    return `
import { SET, RESET } from '../types/${name}'

const initialState = {
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case SET:
      return {...state, ...action.payload}
    case RESET:
      return {...initialState, ...action.payload}
    default:
      return state
  }
}
    `.trim()
  }
}
