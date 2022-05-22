import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Collapse } from '@mui/material'
import DataHeaderFooter from '../DataHeaderFooter'
import { Report } from '../../../../interfaces/reports'
import { ContextType, GlobalContext } from '../../../../context/Global'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	border: 'none',
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#fff',
		color: '#011F4B',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	backgroundColor: '#fff',
	'&:nth-of-type(odd)': {
		backgroundColor: '#F1FAFE',
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}))

interface Props {
	reports: Report[]
}

export default function TableList({ reports }: Props) {
	const { projects, gateways, selectedProject, selectedGateway } = React.useContext(GlobalContext) as ContextType

	const [expand, setExpand] = React.useState(false)

	return (
		<>
			<DataHeaderFooter
				title={`${
					(selectedProject !== '' && selectedGateway === ''
						? gateways?.find((g) => g?.gatewayId === reports[0]?.gatewayId)?.name
						: projects?.find((p) => p?.projectId === reports[0]?.projectId)?.name) ?? 'All Projects'
				}`}
				onClickHandler={() => setExpand(!expand)}
			/>
			<br />
			<Collapse in={expand}>
				<TableContainer>
					<Table sx={{ minWidth: 700 }} size="small" aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Date</StyledTableCell>
								<StyledTableCell align="right">Gateway</StyledTableCell>
								<StyledTableCell align="right">Transaction ID</StyledTableCell>
								<StyledTableCell align="right">Amount</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{reports?.map((row) => (
								<StyledTableRow key={row?.paymentId}>
									<StyledTableCell component="th" scope="row">
										{row?.created}
									</StyledTableCell>
									<StyledTableCell align="right" component="th" scope="row">
										{gateways?.filter((g) => g?.gatewayId === row?.gatewayId)[0]?.name}
									</StyledTableCell>
									<StyledTableCell align="right">{row?.paymentId}</StyledTableCell>
									<StyledTableCell align="right">{row?.amount} USD</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<br />
			</Collapse>
		</>
	)
}
