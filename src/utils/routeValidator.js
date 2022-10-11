import get from 'lodash.get'
import set from 'lodash.set'

export const validate = (route) => {
	const feedback = {}

	if (Number(get(route, 'distance', '')) <= 1)
		set(feedback, 'distance', 'Distance must be greater than 1')
	if (Number(get(route, 'coordinates.y', '')) > 271)
		set(feedback, 'coordinates.y', 'Сoordinates.y must be no greater than 271')

	const notNullFields = [
		'name', 'coordinates.x', 'coordinates.y',
		'from.x', 'from.y', 'from.z',
		'to.x', 'to.y', 'to.z', 'distance'
	]
	notNullFields.forEach(field => {
		if (get(route, field, '') === '')
			set(feedback, field, field.firstLetterToUppercase() + ' must not be empty')
	})

	return feedback
}