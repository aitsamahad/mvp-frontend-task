import * as React from 'react'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Image from 'next/image'
import Avatar from '@mui/material/Avatar'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}))

interface AppBarProps extends MuiAppBarProps {
	open?: boolean
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	backgroundColor: '#fff',
	borderBottom: '1px solid #F3F6F9',
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	'& >div': {
		borderRight: 'none',
	},
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}))

interface Props {
	children: JSX.Element
}

export const Component: React.FC<Props> = ({ children }) => {
	const theme = useTheme()

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" elevation={0}>
				<Toolbar>
					<Image src="/assets/logo.svg" width="27px" height="40px" alt="logo" />
					<Box
						sx={{
							marginLeft: '37px',
							flexGrow: 1,
						}}
					>
						<IconButton color="inherit" aria-label="open drawer" edge="start">
							<Image src="/assets/hamburger.svg" width="31px" height="27px" alt="logo" />
						</IconButton>
					</Box>
					<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
						<Avatar sx={{ bgcolor: '#F6CA65', borderRadius: '5px' }} variant="square">
							JD
						</Avatar>
						<span
							style={{
								fontWeight: 700,
								fontSize: '16px',
								lineHeight: '19px',
								color: '#005B96',
								marginLeft: '11px',
							}}
						>
							John Doe
						</span>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent">
				<DrawerHeader>
					<IconButton>{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					<ListItem disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: 'center',
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: 'auto',
									justifyContent: 'center',
								}}
							>
								<Image src="/assets/analytics.svg" width={24} height={24} alt="analytics" />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: 'center',
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: 'auto',
									justifyContent: 'center',
								}}
							>
								<Image src="/assets/dashboard.svg" width={24} height={24} alt="dashboard" />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: 'center',
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: 'auto',
									justifyContent: 'center',
								}}
							>
								<Image src="/assets/payments.svg" width={24} height={24} alt="payments" />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: 'center',
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: 'auto',
									justifyContent: 'center',
								}}
							>
								<Image src="/assets/reports.svg" width={24} height={24} alt="reports" />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: 'center',
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: 'auto',
									justifyContent: 'center',
								}}
							>
								<Image src="/assets/logout.svg" width={24} height={24} alt="logout" />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3, justifyContent: 'center' }}>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	)
}

export default Component
