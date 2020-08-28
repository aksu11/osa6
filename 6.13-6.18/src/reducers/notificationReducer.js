
const notificationReducer = (state = '', action) => {
	switch (action.type) {
		case 'NOTIFY':
			return action.data
		default: return state
	}
}

export const notify = (content, time) => {
	return async (dispatch) => {
		setTimeout(() => {
			dispatch({
				type : 'NOTIFY',
				data : ''
			})
		}, time)
		dispatch ({
			type : 'NOTIFY',
			data : content
		})
	}
}

export default notificationReducer