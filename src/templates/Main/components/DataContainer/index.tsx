import Box from '@mui/material/Box'
import React from 'react'

type Props = {
	children: JSX.Element
	title?: string
}

function DataContainer({ children, title }: Props) {
	return (
		<Box sx={{ bgcolor: '#F1FAFE', padding: '18px 24px' }}>
			{title && (
				<>
					<span
						style={{
							color: '#011F4B',
							fontSize: '16px',
							fontWeight: 700,
							display: 'block',
						}}
					>
						{title}
					</span>
					<br />
				</>
			)}
			{children}
		</Box>
	)
}

export default DataContainer
