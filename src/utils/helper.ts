import { Gateway } from '../interfaces/gateway'
import { Project } from '../interfaces/projects'
import { Report } from '../interfaces/reports'

export function getProjectDataTitle(projects: Project[], selectedProject: string): string {
	return projects?.find((p) => p?.projectId === selectedProject)?.name ?? 'All Projects'
}

export function getGatewayDataTitle(gateways: Gateway[], selectedGateway: string): string {
	return gateways?.find((g) => g?.gatewayId === selectedGateway)?.name ?? 'All Gateways'
}

export const calculateTotalAmount = (reports: Report[][]) => {
	return reports.reduce((acc, curr) => {
		return acc + curr.reduce((acc, curr) => acc + curr.amount, 0)
	}, 0)
}

export const showGraph = (
	projects: Project[],
	selectedProject: string,
	gateways: Gateway[],
	selectedGateway: string
): boolean => {
	if (
		getProjectDataTitle(projects, selectedProject) === 'All Projects' &&
		getGatewayDataTitle(gateways, selectedGateway) === 'All Gateways'
	) {
		return false
	} else if (
		getProjectDataTitle(projects, selectedProject) !== 'All Projects' &&
		getGatewayDataTitle(gateways, selectedGateway) !== 'All Gateways'
	) {
		return false
	}
	return true
}
