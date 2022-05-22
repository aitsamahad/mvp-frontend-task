import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import NoReports from './components/NoReports'
import GenerateButton from './components/GenerateButton'
import SelectField from './components/Select'
import DateField from './components/Date'
import DataContainer from './components/DataContainer'
import TableList from './components/TableList'
import DataHeaderFooter from './components/DataHeaderFooter'
import { GlobalContext, ContextType } from '../../context/Global'
import PieChart from '../../common/Graphs/PieChart'
import { getGatewayDataTitle, getProjectDataTitle, calculateTotalAmount, showGraph } from '../../utils/helper'
import { CircularProgress } from '@mui/material'

export interface Props {}

function Main({}: Props) {
	const {
		projects,
		gateways,
		reports,
		getReports,
		selectedProject: ctxSelectedProject,
		selectedGateway: ctxSelectedGateway,
		isLoading,
	} = React.useContext(GlobalContext) as ContextType
	const [selectedProject, setSelectedProject] = React.useState('')
	const [selectedGateway, setSelectedGateway] = React.useState('')
	const [from, setFrom] = React.useState('')
	const [to, setTo] = React.useState('')

	const handleProjectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSelectedProject(event.target.value as string)
	}

	const handleGatewayChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSelectedGateway(event.target.value as string)
	}

	const handleFromChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setFrom(event.target.value as string)
	}

	const handleToChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setTo(event.target.value as string)
	}

	const handleGenerate = () => {
		getReports(selectedProject, selectedGateway, from, to)
	}

	console.log('REPORTS: ', ctxSelectedProject)

	return (
		<Box sx={{ my: 4 }}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={5}>
					<Typography variant="h6" component="h1" style={{ fontWeight: 700 }} gutterBottom>
						Reports
					</Typography>
					<span style={{ fontWeight: 700, color: '#7E8299', fontSize: '16px' }}>
						Easily generate a report of your transactions
					</span>
				</Grid>
				<Grid item xs={12} sm={7} textAlign="right">
					<Grid container spacing={3}>
						<Grid item xs={12} sm alignSelf="center">
							<SelectField label="Select project" value={selectedProject} onChange={handleProjectChange}>
								<MenuItem value="">All projects</MenuItem>
								{projects?.map((project) => (
									<MenuItem key={project?.projectId} value={project?.projectId}>
										{project?.name}
									</MenuItem>
								))}
							</SelectField>
						</Grid>
						<Grid item xs={12} sm alignSelf="center">
							<SelectField label="Select gateway" value={selectedGateway} onChange={handleGatewayChange}>
								<MenuItem value="">All gateways</MenuItem>
								{gateways?.map((gateway) => (
									<MenuItem key={gateway?.gatewayId} value={gateway?.gatewayId}>
										{gateway?.name}
									</MenuItem>
								))}
							</SelectField>
						</Grid>
						<Grid item xs={12} sm alignSelf="center">
							<DateField label="From date" value={from} onChange={handleFromChange} />
						</Grid>
						<Grid item xs={12} sm alignSelf="center">
							<DateField label="From date" value={to} onChange={handleToChange} />
						</Grid>
						<Grid item xs={12} sm alignSelf="center">
							<GenerateButton onClick={handleGenerate} />
						</Grid>
					</Grid>
				</Grid>
				{isLoading ? (
					<Grid item xs={12} textAlign="center">
						<CircularProgress style={{ color: '#005B96', marginTop: 50 }} />
					</Grid>
				) : (
					<Grid item xs={12}>
						{!reports?.length ? (
							<NoReports />
						) : (
							<Grid container spacing={3}>
								<Grid
									item
									xs={
										// showGraph(projects, selectedProject, gateways, selectedGateway) ? 6 : 12
										12
									}
								>
									<DataContainer
										title={`${getProjectDataTitle(projects, ctxSelectedProject)} | ${getGatewayDataTitle(
											gateways,
											ctxSelectedGateway
										)}`}
									>
										<>
											{reports?.map((report, index) => (
												<TableList key={index} reports={report} />
											))}
										</>
									</DataContainer>
									<br />
									<DataHeaderFooter blue title={`TOTAL: ${calculateTotalAmount(reports)?.toFixed(2)} USD`} />
								</Grid>
								{/* {showGraph(projects, selectedProject, gateways, selectedGateway) && (
								<Grid item xs={6} alignSelf="center" textAlign="center">
									<DataContainer>
										<PieChart />
									</DataContainer>
								</Grid>
							)} */}
							</Grid>
						)}
					</Grid>
				)}
			</Grid>
		</Box>
	)
}

export default Main
