import React from 'react'
import { addAnecdote } from './../reducers/anecdoteReducer'
import { notify } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {

  const create = (event) => {
    event.preventDefault()
    const anecdote = {
      content: event.target.newAnecdote.value,
      votes: 0,
      id: (100000 * Math.random()).toFixed(0)
    } 
    event.target.newAnecdote.value = ''
    props.addAnecdote(anecdote)
    props.notify(`You added anecdote '${anecdote.content}'`, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input name='newAnecdote'/></div>
        <button>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  addAnecdote, notify
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm