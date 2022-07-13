import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import CustomerInfo from './CustomerInfo';

const TabsContainer = () => {
	return (
		<div className='my-4 p-3'>
			<Tabs
				defaultActiveKey='customer-info'
				id='justify-tab-example'
				className='mb-3'
				justify
			>
				<Tab eventKey='customer-info' title='Customer Information'>
					<CustomerInfo />
				</Tab>
				<Tab eventKey='credit-info' title='Credit Information'>
					Credit Information
				</Tab>
				<Tab eventKey='ref-info' title='Reference Information'>
					Reference Information
				</Tab>
			</Tabs>
		</div>
	);
};

export default TabsContainer;
