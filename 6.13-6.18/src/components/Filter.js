import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAnecdotes } from './../reducers/filterReducer'


const Filter = () => {

  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    dispatch(filterAnecdotes(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      <b>Filter</b> <input onChange={handleChange} />
    </div>
  )
}

export default Filter