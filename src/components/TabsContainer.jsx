import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import CustomerInfo from './CustomerInfo';

const TabsContainer = () => {
	return (
		<div className='my-4'>
			<Tabs
				defaultActiveKey='customer-info'
				id='justify-tab-example'
				justify
			>
				<Tab eventKey='customer-info' title='Customer Information'>
					<CustomerInfo />
				</Tab>
				<Tab eventKey='credit-info' title='Credit Information'>
					<div className='border p-3'>Credit Information</div>
				</Tab>
				<Tab eventKey='ref-info' title='Reference Information'>
					<div className='border p-3'>Reference Information</div>
				</Tab>
			</Tabs>
		</div>
	);
};

export default TabsContainer;
