import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

const GenerateButton = (props: ButtonProps) => {
	return (
		<Button
			{...props}
			style={{
				backgroundColor: '#005B96',
				color: '#fff',
				textTransform: 'capitalize',
				height: '32px',
				borderRadius: '5px',
				fontSize: 14,
				fontWeight: 400,
			}}
			fullWidth
		>
			Generate Report
		</Button>
	)
}

export default GenerateButton
