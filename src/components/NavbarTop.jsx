import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
// import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarTop = () => {
	const items = [
		{
			label: 'Sales',
			icon: 'pi pi-fw pi-file',
			items: [
				{
					label: 'Invoice',
					// icon: 'pi pi-fw pi-trash',
				},
				{
					label: 'Memo',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Credit',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Quote',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Transfer',
					// icon: 'pi pi-fw pi-external-link',
				},
			],
		},
		{
			label: 'Manage',
			icon: 'pi pi-fw pi-user',
			items: [
				{
					label: 'Invoice',
					// icon: 'pi pi-fw pi-trash',
				},
				{
					label: 'Memo',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Credit',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Quote',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Transfer',
					// icon: 'pi pi-fw pi-external-link',
				},
			],
		},
		{
			label: 'P/A',
			// icon: 'pi pi-fw pi-user',
			items: [
				{
					label: 'Invoice',
					// icon: 'pi pi-fw pi-trash',
				},
				{
					label: 'Memo',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Credit',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Quote',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Transfer',
					// icon: 'pi pi-fw pi-external-link',
				},
			],
		},
		{
			label: 'Company',
			// icon: 'pi pi-fw pi-calendar',
			items: [
				{
					label: 'Invoice',
					// icon: 'pi pi-fw pi-trash',
				},
				{
					label: 'Memo',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Credit',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Quote',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Transfer',
					// icon: 'pi pi-fw pi-external-link',
				},
			],
		},
		{
			label: 'Value',
			// icon: 'pi pi-fw pi-power-off',
			items: [
				{
					label: 'Invoice',
					// icon: 'pi pi-fw pi-trash',
				},
				{
					label: 'Memo',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Credit',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Quote',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Transfer',
					// icon: 'pi pi-fw pi-external-link',
				},
			],
		},
		{
			label: 'Reports',
			// icon: 'pi pi-fw pi-power-off',
			items: [
				{
					label: 'Invoice',
					// icon: 'pi pi-fw pi-trash',
				},
				{
					label: 'Memo',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Credit',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Quote',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Transfer',
					// icon: 'pi pi-fw pi-external-link',
				},
			],
		},
		{
			label: 'Options',
			// icon: 'pi pi-fw pi-power-off',
			items: [
				{
					label: 'Invoice',
					// icon: 'pi pi-fw pi-trash',
				},
				{
					label: 'Memo',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Credit',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Quote',
					// icon: 'pi pi-fw pi-external-link',
				},
				{
					label: 'Transfer',
					// icon: 'pi pi-fw pi-external-link',
				},
			],
		},
	];

	// const start = (
	// 	<img
	// 		src='showcase/images/logo.png'
	// 		alt='logo'
	// 		height='40'
	// 		className='mr-2'
	// 	/>
	// );
	const end = (
		<Button
			icon='pi pi-user'
			className='p-button-rounded p-button-info'
			aria-label='User'
		/>
	);
	return (
		<Menubar model={items} end={end} />

		// <Navbar bg='light' expand='lg'>
		// 	<Container>
		// 		{/* <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand> */}
		// 		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		// 		<Navbar.Collapse id='basic-navbar-nav'>
		// 			<Nav className='flex-fill'>
		// 				<NavDropdown
		// 					title='Sales'
		// 					id='basic-nav-sales'
		// 					className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
		// 				>
		// 					<NavDropdown.Item href='#sales/invoice'>
		// 						Invoice
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/memo'>
		// 						Memo
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/credit'>
		// 						Credit
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/quote'>
		// 						Quote
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/transfer'>
		// 						Transfer
		// 					</NavDropdown.Item>
		// 				</NavDropdown>
		// 				<NavDropdown
		// 					title='Manage'
		// 					id='basic-nav-manage'
		// 					className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
		// 				>
		// 					<NavDropdown.Item href='#sales/invoice'>
		// 						Invoice
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/memo'>
		// 						Memo
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/credit'>
		// 						Credit
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/quote'>
		// 						Quote
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/transfer'>
		// 						Transfer
		// 					</NavDropdown.Item>
		// 				</NavDropdown>
		// 				<NavDropdown
		// 					title='P/A'
		// 					id='basic-nav-pa'
		// 					className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
		// 				>
		// 					<NavDropdown.Item href='#sales/invoice'>
		// 						Invoice
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/memo'>
		// 						Memo
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/credit'>
		// 						Credit
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/quote'>
		// 						Quote
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/transfer'>
		// 						Transfer
		// 					</NavDropdown.Item>
		// 				</NavDropdown>
		// 				<NavDropdown
		// 					title='Company'
		// 					id='basic-nav-company'
		// 					className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
		// 				>
		// 					<NavDropdown.Item href='#sales/invoice'>
		// 						Invoice
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/memo'>
		// 						Memo
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/credit'>
		// 						Credit
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/quote'>
		// 						Quote
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/transfer'>
		// 						Transfer
		// 					</NavDropdown.Item>
		// 				</NavDropdown>
		// 				<NavDropdown
		// 					title='Values'
		// 					id='basic-nav-values'
		// 					className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
		// 				>
		// 					<NavDropdown.Item href='#sales/invoice'>
		// 						Invoice
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/memo'>
		// 						Memo
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/credit'>
		// 						Credit
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/quote'>
		// 						Quote
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/transfer'>
		// 						Transfer
		// 					</NavDropdown.Item>
		// 				</NavDropdown>
		// 				<NavDropdown
		// 					title='Reports'
		// 					id='basic-nav-reports'
		// 					className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
		// 				>
		// 					<NavDropdown.Item href='#sales/invoice'>
		// 						Invoice
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/memo'>
		// 						Memo
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/credit'>
		// 						Credit
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/quote'>
		// 						Quote
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/transfer'>
		// 						Transfer
		// 					</NavDropdown.Item>
		// 				</NavDropdown>
		// 				<NavDropdown
		// 					title='Options'
		// 					id='basic-nav-options'
		// 					className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
		// 				>
		// 					<NavDropdown.Item href='#sales/invoice'>
		// 						Invoice
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/memo'>
		// 						Memo
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/credit'>
		// 						Credit
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/quote'>
		// 						Quote
		// 					</NavDropdown.Item>
		// 					<NavDropdown.Item href='#sales/transfer'>
		// 						Transfer
		// 					</NavDropdown.Item>
		// 				</NavDropdown>
		// 				<Button className='ms-lg-auto mt-2 mt-lg-0'>
		// 					Logout
		// 				</Button>
		// 			</Nav>
		// 		</Navbar.Collapse>
		// 	</Container>
		// </Navbar>
	);
};

export default NavbarTop;
