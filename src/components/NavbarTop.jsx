import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarTop = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				{/* <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand> */}
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='flex-fill'>
						<NavDropdown
							title='Sales'
							id='basic-nav-sales'
							className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
						>
							<NavDropdown.Item href='#sales/invoice'>
								Invoice
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/memo'>
								Memo
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/credit'>
								Credit
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/quote'>
								Quote
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/transfer'>
								Transfer
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title='Manage'
							id='basic-nav-manage'
							className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
						>
							<NavDropdown.Item href='#sales/invoice'>
								Invoice
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/memo'>
								Memo
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/credit'>
								Credit
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/quote'>
								Quote
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/transfer'>
								Transfer
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title='P/A'
							id='basic-nav-pa'
							className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
						>
							<NavDropdown.Item href='#sales/invoice'>
								Invoice
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/memo'>
								Memo
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/credit'>
								Credit
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/quote'>
								Quote
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/transfer'>
								Transfer
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title='Company'
							id='basic-nav-company'
							className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
						>
							<NavDropdown.Item href='#sales/invoice'>
								Invoice
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/memo'>
								Memo
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/credit'>
								Credit
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/quote'>
								Quote
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/transfer'>
								Transfer
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title='Values'
							id='basic-nav-values'
							className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
						>
							<NavDropdown.Item href='#sales/invoice'>
								Invoice
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/memo'>
								Memo
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/credit'>
								Credit
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/quote'>
								Quote
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/transfer'>
								Transfer
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title='Reports'
							id='basic-nav-reports'
							className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
						>
							<NavDropdown.Item href='#sales/invoice'>
								Invoice
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/memo'>
								Memo
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/credit'>
								Credit
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/quote'>
								Quote
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/transfer'>
								Transfer
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title='Options'
							id='basic-nav-options'
							className='border rounded bg-info me-lg-2 mt-2 mt-lg-0'
						>
							<NavDropdown.Item href='#sales/invoice'>
								Invoice
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/memo'>
								Memo
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/credit'>
								Credit
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/quote'>
								Quote
							</NavDropdown.Item>
							<NavDropdown.Item href='#sales/transfer'>
								Transfer
							</NavDropdown.Item>
						</NavDropdown>
						<Button className='ms-lg-auto mt-2 mt-lg-0'>
							Logout
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarTop;
