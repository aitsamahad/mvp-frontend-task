import React from 'react'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

type Props = {}

const NoReports = (props: Props) => {
	return (
		<Box
			sx={{
				my: '140px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
			}}
		>
			<Typography variant="h6" component="h1" style={{ fontWeight: 700 }} gutterBottom>
				No Reports
			</Typography>
			<span style={{ fontWeight: 700, color: '#7E8299', fontSize: '16px', maxWidth: 470, marginBottom: 51 }}>
				Currently you have no data for the reports to be generated. Once you start generating traffic through the
				Balance application the reports will be shown.
			</span>
			<Image src="/assets/noreports.svg" width={403} height={172} alt="no reports" />
		</Box>
	)
}

export default NoReports
