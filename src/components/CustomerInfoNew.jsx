import { Card } from 'primereact/card';
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const CustomerInfoNew = () => {
	const [selectedItem, setSelectedItem] = useState(null);
	const [filteredItems, setFilteredItems] = useState(null);

	const items = Array.from({ length: 10 }).map((_, i) => ({
		label: `${i + 1}`,
		value: i + 1,
	}));
	const searchItems = (event) => {
		//in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
		let query = event.query;
		let _filteredItems = [];

		for (let i = 0; i < items.length; i++) {
			let item = items[i];
			if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
				_filteredItems.push(item);
			}
		}

		setFilteredItems(_filteredItems);
	};
	return (
		<>
			<Card>
				<div className='row'>
					<div className='col-12 col-lg-4'>
						<div className='d-flex flex-column'>
							<label htmlFor='customer' className='mb-1'>
								Customer
							</label>
							<AutoComplete
								id='customer'
								value={selectedItem}
								suggestions={filteredItems}
								completeMethod={searchItems}
								virtualScrollerOptions={{ itemSize: 38 }}
								field='label'
								dropdown
								onChange={(e) => setSelectedItem(e.value)}
								aria-label='customer'
							/>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
						<div className='d-flex flex-column'>
							<label htmlFor='customer' className='mb-1'>
								Name
							</label>
							<AutoComplete
								id='customer'
								value={selectedItem}
								suggestions={filteredItems}
								completeMethod={searchItems}
								virtualScrollerOptions={{ itemSize: 38 }}
								field='label'
								dropdown
								onChange={(e) => setSelectedItem(e.value)}
								aria-label='customer'
							/>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
						<div className='d-flex flex-column'>
							<label htmlFor='type' className='mb-1'>
								Type
							</label>
							<AutoComplete
								value={selectedItem}
								suggestions={filteredItems}
								completeMethod={searchItems}
								virtualScrollerOptions={{ itemSize: 38 }}
								field='label'
								dropdown
								onChange={(e) => setSelectedItem(e.value)}
								aria-label='type'
							/>
						</div>
					</div>
				</div>
			</Card>
			<Card className='mt-4'>
				<div className='row'>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Address1</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Address2</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Address3</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
				</div>
				<div className='row '>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>City</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>State</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Zip</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
				</div>
				<div className='row'>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Country</Form.Label>
						<Form.Select aria-label='Default select example'>
							<option value='1'>India</option>
							<option value='2'>China</option>
							<option value='3'>Canada</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Phone</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Fax</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
				</div>
				<div className='row'>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Province</Form.Label>
						<Form.Select aria-label='Default select example'>
							<option></option>
							<option value='1'>India</option>
							<option value='2'>China</option>
							<option value='3'>Canada</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label className='text-nowrap'>
							Contact Person
						</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Cell</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
				</div>
				<div className='row'>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Currency</Form.Label>
						<Form.Select aria-label='Default select example'>
							<option></option>
							<option value='1'>Rupees</option>
							<option value='2'>USD</option>
							<option value='3'>GPY</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Website</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Buyer</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
				</div>
				<div className='row'>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Accountant</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label className='text-nowrap'>
							DOB of Customer
						</Form.Label>
						<Form.Control type='date' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label className='text-nowrap'>
							Name of Spouse
						</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
				</div>
				<div className='row'>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label className='text-nowrap'>Title</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label className='text-nowrap'>Email-1</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label className='text-nowrap'>Email-2</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
				</div>
				<div className='row'>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label>Owner</Form.Label>
						<Form.Control type='text' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label className='text-nowrap'>
							Date of Anniversary
						</Form.Label>
						<Form.Control type='date' />
					</Form.Group>
					<Form.Group className='mb-3 col-12 col-lg-4'>
						<Form.Label className='text-nowrap'>
							DOB of Spouse
						</Form.Label>
						<Form.Control type='date' />
					</Form.Group>
				</div>
			</Card>
			<div className='row mt-4'>
				<div className='col-12 col-lg-6'>
					<Card>
						<div className='col-12'>
							<div className='d-flex'>
								<Form.Group
									className='mb-3'
									controlId='customer'
								>
									<Form.Check
										type='checkbox'
										label='Customer is inactive'
									/>
								</Form.Group>
								<Form.Group
									className='mb-3 ms-2'
									controlId='partner'
								>
									<Form.Check
										type='checkbox'
										label='Partner'
									/>
								</Form.Group>
								<Form.Group
									className='mb-3 ms-2'
									controlId='vendor'
								>
									<Form.Check
										type='checkbox'
										label='Vendor'
									/>
								</Form.Group>
							</div>
							<Button className='p-button-primary'>
								Copy shipto Info
							</Button>

							<Form.Group className='mt-2'>
								<Form.Label>Notes</Form.Label>
								<Form.Control
									as='textarea'
									className=''
									style={{ height: '100px' }}
								/>
							</Form.Group>
							<Form.Group className='mt-2'>
								<Form.Label>Popup Notes</Form.Label>
								<Form.Control
									as='textarea'
									className=''
									style={{ height: '100px' }}
								/>
							</Form.Group>
							<Form.Group className=' mt-2'>
								<Form.Label>Resale</Form.Label>
								<Form.Control as='textarea' className='' />
							</Form.Group>
							<Button className='p-button-secondary mt-2'>
								Print label
							</Button>
						</div>
					</Card>
				</div>
				<div className='col-12 col-lg-6'>
					<Card>
						<div className='d-flex justify-content-between align-items-center'>
							<div className='left'>
								<p>Date of Last Invoice:</p>
								<p>Date of Last Payment:</p>
								<p>Date of Last Memo:</p>
							</div>
							<div className='right'>
								<p>31/12/22</p>
								<p>31/12/22</p>
								<p>31/12/22</p>
							</div>
						</div>
						<div className='d-flex justify-content-between align-items-center mt-3'>
							<div className='left'>
								<p>YTD Sales Carat:</p>
								<p>YTD Memo Carat:</p>
								<p>YTD Sales:</p>
							</div>
							<div className='right'>
								<p>0.00</p>
								<p>0.00</p>
								<p>0.00</p>
							</div>
						</div>
						<div className='d-flex justify-content-between align-items-center mt-3'>
							<div className='left'>
								<p>Open Memo:</p>
								<p>Balance Due:</p>
								<p>YTD Memos:</p>
							</div>
							<div className='right'>
								<p>0.00</p>
								<p>0.00</p>
								<p>0.00</p>
							</div>
						</div>
						<div className='d-flex justify-content-between align-items-center mt-3'>
							<div className='left'>
								<p>Avg Payment Days:</p>
								<p>Avg Memo Days:</p>
								<p>Avaliable Credit:</p>
							</div>
							<div className='right'>
								<p>0.00</p>
								<p>0.00</p>
								<p>0.00</p>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default CustomerInfoNew;
