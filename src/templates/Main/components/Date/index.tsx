import React, { useState } from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import { InputAdornment } from '@mui/material'
import Image from 'next/image'

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
		color: '#fff',
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
})

function DateField(props: TextFieldProps) {
	const [type, setType] = useState('text')

	return (
		<CustomSelect
			{...props}
			variant="outlined"
			type={type}
			fullWidth
			onFocus={() => setType('date')}
			onBlur={() => setType('text')}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<Image src="/assets/calendar.svg" width="12px" height="12px" alt="calendar icon" />
					</InputAdornment>
				),
			}}
		/>
	)
}

export default DateField
