import React from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const CustomSelect = styled(TextField)({
	backgroundColor: '#1BC5BD',
	color: '#fff',
	fontWeight: 400,
	fontSize: 14,
	height: 32,
	borderRadius: 5,
	position: 'relative',
	'& >div': {
		height: 32,
		position: 'relative',
	},
	'& label': {
		color: '#fff',
		fontWeight: 400,
		fontSize: 14,
		top: -10,
	},
	'& fieldset': {
		outline: 'none',
		border: 'none',
	},
	'& svg': {
		color: '#fff',
	},
	'& .MuiSelect-select': {
		textAlign: 'left',
		color: '#fff',
	},
})

function SelectField(props: TextFieldProps) {
	return <CustomSelect {...props} select variant="outlined" fullWidth />
}

export default SelectField
