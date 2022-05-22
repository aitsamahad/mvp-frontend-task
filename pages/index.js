import * as React from 'react'
import { GlobalContext } from '../src/context/Global'
import Main from '../src/templates/Main'

const Home = ({ gateways, projects }) => {
	const { setProjects, setGateways } = React.useContext(GlobalContext)

	React.useEffect(() => {
		setProjects(projects)
		setGateways(gateways)
	}, [gateways, projects, setGateways, setProjects])

	return <Main />
}

export default Home

export const getServerSideProps = async () => {
	const queryGateways = await fetch(`${process?.env?.API_ROUTE}/gateways`)
	const gateways = await queryGateways.json()

	const queryProjects = await fetch(`${process?.env?.API_ROUTE}/projects`)
	const projects = await queryProjects.json()

	return { props: { gateways: gateways?.data, projects: projects?.data } }
}
