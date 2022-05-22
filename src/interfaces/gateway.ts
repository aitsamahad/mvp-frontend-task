export interface Gateway {
	gatewayId: string
	userIds: string[]
	name: string
	type: string
	apiKey: string
	secondaryApiKey: string
	description: string
}

export interface Gateways {
	code: string
	data: Gateway[]
	error?: string
}
