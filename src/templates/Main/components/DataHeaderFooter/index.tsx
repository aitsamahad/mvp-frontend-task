import React from 'react'
import { Box } from '@mui/material'

type Props = {
	onClickHandler?: () => void
	blue?: boolean
	title?: string
	secondTitle?: string
}

function DataHeaderFooter({ onClickHandler, blue, title, secondTitle }: Props) {
	return (
		<Box
			sx={{
				borderRadius: '10px',
				bgcolor: blue ? '#F1FAFE' : '#fff',
				padding: '26px 24px',
				color: '#011F4B',
				fontSize: '16px',
				fontWeight: 'bold',
				cursor: 'pointer',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
			onClick={onClickHandler}
		>
			<span>{title}</span>
			<span>{secondTitle}</span>
		</Box>
	)
}

export default DataHeaderFooter
