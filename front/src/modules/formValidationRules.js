const formRules = [
  	{ 
		field: 'email', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Email is required.' 
  	},
  	{ 
		field: 'email',
		method: 'isEmail', 
		validWhen: true, 
		message: 'That is not a valid email.'
  	},
  	{ 
		field: 'login', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Please provide a login.'
	},
	{
		field: 'phone', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Please provide your phone number.'
	},
	{
		field: 'phone', 
		method: 'matches', 
		validWhen: true, 
		args:[/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/],
		message: 'Incorrect format. The first and last character must be a number. You can use parentheses, a space, and a hyphen in the middle. The number of characters is 10-14.'
	},
 	{ 
		field: 'firstName', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Please provide a first name.'
  	},
	{ 
		field: 'firstName', 
		method: 'matches', 
		validWhen: true, 
		args: [/^[a-zA-Zа-яА-Я]+$/],
		message: 'Must be a string'
	},
  	{ 
		field: 'lastName', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Please provide a last name.'
	}, 
  	{ 
		field: 'lastName', 
		method: 'matches', 
		validWhen: true, 
		args: [/^[a-zA-Zа-яА-Я]+$/],
		message: 'Must be a string'
	},
	{ 
		field: 'oldPassword', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Password is required.'
	},
	{ 
		field: 'newPassword1', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Password is required.'
	},
	{ 
		field: 'newPassword2', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Password is required.'
	},
	{ 
		field: 'city', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Please provide a city.'
	},
	{ 
		field: 'street', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Please provide a street.'
	},
	{ 
		field: 'num', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Please provide number of street.'
	},
	{ 
		field: 'post_code', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Please provide a post code.'
	},
]

export default formRules;