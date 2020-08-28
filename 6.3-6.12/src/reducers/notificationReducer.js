
const notificationReducer = (state = '', action) => {
	switch (action.type) {
		case 'NOTIFY':
			return action.data
		default: return state
	}
}

export const notify = (content) => {
	return {
		type : 'NOTIFY',
		data : content
	}
}

export default notificationReducer