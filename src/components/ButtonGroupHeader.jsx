import React from 'react';
import { Button } from 'react-bootstrap';
import {
	FaSistrix,
	FaPrint,
	FaSave,
	FaFileInvoice,
	FaDollarSign,
} from 'react-icons/fa';
import { BsFillPrinterFill } from 'react-icons/bs';
import { AiFillCloseCircle, AiFillDelete } from 'react-icons/ai';

const ButtonGroupHeader = () => {
	return (
		<div className='row mt-3'>
			<div className='col-12 col-md-6 col-xl-4 mb-2 d-flex justify-content-between'>
				<Button variant='primary' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<FaSistrix />
						<span>Search</span>
					</div>
				</Button>
				<Button variant='warning' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<FaPrint />
						<span>Status</span>
					</div>
				</Button>
				<Button variant='light' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<BsFillPrinterFill />
						<span>Print Statement</span>
					</div>
				</Button>
				<Button variant='light' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<FaPrint />
						<span>Print Credit Memo</span>
					</div>
				</Button>
			</div>
			<div className='col-12 col-md-6 col-xl-5 mb-2 d-flex justify-content-between'>
				<Button variant='dark' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<FaFileInvoice />
						<span>Invoices</span>
					</div>
				</Button>
				<Button variant='dark' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<FaFileInvoice />
						<span>Memos</span>
					</div>
				</Button>
				<Button variant='primary' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<FaSistrix />
						<span>ShipTo</span>
					</div>
				</Button>
				<Button variant='success' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<FaDollarSign />
						<span>Payment</span>
					</div>
				</Button>
				<Button variant='warning' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<FaDollarSign />
						<span>Sales Order</span>
					</div>
				</Button>
				<Button variant='secondary' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<FaDollarSign />
						<span>Quotes</span>
					</div>
				</Button>
			</div>
			<div className='col-12 col-md-6 col-xl-3 mb-2 d-flex justify-content-between'>
				<Button variant='primary' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<FaPrint />
						<span>New</span>
					</div>
				</Button>
				<Button variant='danger' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<AiFillDelete />
						<span>Delete</span>
					</div>
				</Button>
				<Button variant='success' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<FaSave />
						<span>Save</span>
					</div>
				</Button>
				<Button variant='danger' className='me-2 mb-1  '>
					<div
						className='d-flex justify-content-center align-items-center flex-column
'
					>
						<AiFillCloseCircle />
						<span>Close</span>
					</div>
				</Button>
			</div>
		</div>
	);
};

export default ButtonGroupHeader;
