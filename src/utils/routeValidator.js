import get from 'lodash.get'
import set from 'lodash.set'

export const validate = (route, isAddingWithLocationIds) => {
	const feedback = {}

	if (Number(get(route, 'distance', '')) <= 1)
		set(feedback, 'distance', 'Distance must be greater than 1')
	if (Number(get(route, 'coordinates.y', '')) > 271)
		set(feedback, 'coordinates.y', 'Сoordinates.y must be no greater than 271')

	if (isAddingWithLocationIds){
		['from.id', 'to.id'].forEach(field => {
			const id = Number(get(route, field, 'id'))
			if (id < 0)
				set(feedback, field, field.firstLetterToUppercase() + 'must be at least zero')
			if (!Number.isInteger(id))
				set(feedback, field, field.firstLetterToUppercase() + 'must be an integer')
		})
	}

	const notNullFields = isAddingWithLocationIds ? [
		'name', 'coordinates.x', 'coordinates.y',
		'from.id', 'to.id', 'distance'
	] : [
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