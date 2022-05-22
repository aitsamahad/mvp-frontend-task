import * as React from 'react'
import { Gateway } from '../interfaces/gateway'
import { Project } from '../interfaces/projects'
import { Report, ReportsResponse } from '../interfaces/reports'

export type ContextType = {
	reports: Report[][]
	gateways: Gateway[]
	projects: Project[]
	selectedProject: string
	selectedGateway: string
	getReports: (projectId: string, gatewayId: string, from: string, to: string) => void
	setProjects: (projects: Project[]) => void
	setGateways: (gateways: Gateway[]) => void
	isLoading: boolean
}

interface Props {
	children?: React.ReactNode
}

export const GlobalContext = React.createContext<ContextType | null>(null)

const GlobalContextProvider: React.FC<Props> = ({ children }) => {
	const [reports, setReports] = React.useState<Report[][]>([])
	const [projectsState, setProjectsState] = React.useState<Project[]>([])
	const [gatewayState, setGatewayState] = React.useState<Gateway[]>([])
	const [selectedProject, setSelectedProject] = React.useState<string>('')
	const [selectedGateway, setSelectedGateway] = React.useState<string>('')
	const [isLoading, setIsLoading] = React.useState<boolean>(false)

	const getReports = async (projectId: string, gatewayId: string, from: string, to: string) => {
		setIsLoading(true)
		const res = await fetch(`http://178.63.13.157:8090/mock-api/api/report`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				projectId,
				gatewayId,
				from,
				to,
			}),
		})

		res
			.json()
			.then((data: ReportsResponse) => {
				if (selectedProject !== '' && selectedGateway === '') {
					let gateways = []
					for (const g of gatewayState) {
						let gateway = data?.data?.filter((gate) => gate.gatewayId === g.gatewayId)
						if (gateway?.length) {
							gateways.push(gateway)
						}
					}
					setSelectedProject(projectId)
					setSelectedGateway(gatewayId)
					setReports(gateways)
				} else {
					let projects = []
					for (const p of projectsState) {
						let project = data?.data?.filter((proj) => proj.projectId === p.projectId)
						if (project?.length) {
							projects.push(project)
						}
					}
					setSelectedProject(projectId)
					setSelectedGateway(gatewayId)
					setReports(projects)
				}
			})
			.catch((err) => console.log(err))
			.finally(() => setIsLoading(false))
	}

	const setProjects = (projects: Project[]) => setProjectsState(projects)

	const setGateways = (gateways: Gateway[]) => setGatewayState(gateways)

	return (
		<GlobalContext.Provider
			value={{
				reports,
				getReports,
				setProjects,
				setGateways,
				gateways: gatewayState,
				projects: projectsState,
				selectedProject,
				selectedGateway,
				isLoading,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export default GlobalContextProvider
