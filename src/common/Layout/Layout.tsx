import React from 'react'
import { Component } from '../Drawer'

type Props = {
	children: JSX.Element
}

export const Layout = (props: Props) => {
	const { children } = props
	return (
		<Component>
			<>
				<main style={{ width: '100%', minHeight: '80vh' }}>{children}</main>
				<footer>
					<a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
				</footer>
			</>
		</Component>
	)
}
