import server from '../services/server'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case ('VOTE'): 
      const old = state.filter(a => a.id !== action.data.id)
      return old.concat(action.data)
    case('CREATE'):
      return [...state, action.data]
    case('INIT_ANECDOTES'):
      return action.data
    default: return state
  }
}

export const addVote = (anecdote) => {
  anecdote.votes++
  return async (dispatch) => {
    const updated = await server.update(anecdote.id, anecdote)
    dispatch ({
      type : 'VOTE',
      data : updated
    })
  }
}

export const addAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await server.create(anecdote)
    dispatch ({
      type : 'CREATE',
      data : newAnecdote
    })
  }
}

export const initialization = () => {
  return async (dispatch) => {
    const anecdotes = await server.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer