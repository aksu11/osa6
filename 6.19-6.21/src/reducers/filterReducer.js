const filterReducer = (state = '', action) => {
	switch (action.type) {
		case 'FILTER':
			return action.data
		default: return state
	}
}

export const filterAnecdotes = (letters) => {
	return {
		type : 'FILTER',
		data : letters
	}
}

export default filterReducer