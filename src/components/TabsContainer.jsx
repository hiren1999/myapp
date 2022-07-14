import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import CustomerInfo from './CustomerInfo';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import CustomerInfoNew from './CustomerInfoNew';

const TabsContainer = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<Card>
			<TabView
				activeIndex={activeIndex}
				onTabChange={(e) => setActiveIndex(e.index)}
			>
				<TabPanel header='Customer Information'>
					<CustomerInfoNew />
				</TabPanel>
				<TabPanel header='Credit Information'>Content II</TabPanel>
				<TabPanel header='Reference Information'>Content III</TabPanel>
			</TabView>
		</Card>
		// <div className='my-4'>
		// 	<Tabs
		// 		defaultActiveKey='customer-info'
		// 		id='justify-tab-example'
		// 		justify
		// 	>
		// 		<Tab eventKey='customer-info' title='Customer Information'>
		// 			<CustomerInfo />
		// 		</Tab>
		// 		<Tab eventKey='credit-info' title='Credit Information'>
		// 			<div className='border p-3'>Credit Information</div>
		// 		</Tab>
		// 		<Tab eventKey='ref-info' title='Reference Information'>
		// 			<div className='border p-3'>Reference Information</div>
		// 		</Tab>
		// 	</Tabs>
		// </div>
	);
};

export default TabsContainer;
