export interface Report {
	paymentId: string
	amount: number
	projectId: string
	gatewayId: string
	userIds: string[]
	modified: string
	created: string
}

export interface ReportsResponse {
	code: string
	data: Report[]
	error?: string
}
