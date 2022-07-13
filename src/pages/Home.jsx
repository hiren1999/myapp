import React from 'react';
import { Container } from 'react-bootstrap';
import ButtonGroupHeader from '../components/ButtonGroupHeader';
import NavbarTop from '../components/NavbarTop';
import TabsContainer from '../components/TabsContainer';

const Home = () => {
	return (
		<>
			<NavbarTop />
			<Container>
				<ButtonGroupHeader />
				<TabsContainer />
			</Container>
		</>
	);
};

export default Home;
