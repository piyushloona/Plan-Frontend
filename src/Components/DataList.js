import React from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SecurityUpdateOutlinedIcon from '@mui/icons-material/SecurityUpdateOutlined';

const DataList = () => {
    return (
        <div className='data-list'>
            <div className='product-list'>
                <h2>Data List</h2>
                {/* 
                <table>
                    <thead>
                        <th>Subscription</th>
                        <th>Full Name</th>
                        <th>Package</th>
                        <th>Plan Type</th>
                        <th>Package Tenure</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Payment Method</th>
                        <th>Price</th>

                        
                    </thead>

                    <tbody>
                        <td>Hello</td>
                        <td>Hello</td>
                        <td>Hello</td>
                        <td>Hello</td>
                        <td>Hello</td>
                        <td>Hello</td>
                        
                    </tbody>
                </table> */}


                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Subscription</th>
                        <th>Full Name</th>
                        <th>Package</th>
                        <th>Plan Type</th>
                        <th>Package Tenure</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Payment Method</th>
                        <th>Price</th>
                        <th>Data Update</th>
                        </tr>
                     </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Piyush Loona</td>
                            <td>25000</td>
                            <td>Active</td>
                            <td>1</td>
                            <td>01-09-2000</td>
                            <td>01-09-2000</td>
                            <td>Phone Pay</td>
                            <td>1</td>
                            <td>
                                <div className='icons-delete'>
                                    <DeleteOutlinedIcon className='delete-icon'/>
                                    <EditOutlinedIcon className='edit-icon'/>
                                    <SecurityUpdateOutlinedIcon className='security-icon'/>
                                </div>
                            </td>
                         
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Piyush Loona</td>
                            <td>25000</td>
                            <td>Active</td>
                            <td>1</td>
                            <td>01-09-2000</td>
                            <td>01-09-2000</td>
                            <td>Phone Pay</td>
                            <td>1</td>
                            <td>
                                <div className='icons-delete'>
                                    <DeleteOutlinedIcon className='delete-icon'/>
                                    <EditOutlinedIcon className='edit-icon'/>
                                    <SecurityUpdateOutlinedIcon className='security-icon'/>
                                </div>
                            </td>
                         
                        </tr>
                    
                        <tr>
                            <td>1</td>
                            <td>Piyush Loona</td>
                            <td>25000</td>
                            <td>Active</td>
                            <td>1</td>
                            <td>01-09-2000</td>
                            <td>01-09-2000</td>
                            <td>Phone Pay</td>
                            <td>1</td>
                            <td>
                                <div className='icons-delete'>
                                    <DeleteOutlinedIcon className='delete-icon'/>
                                    <EditOutlinedIcon className='edit-icon'/>
                                    <SecurityUpdateOutlinedIcon className='security-icon'/>
                                </div>
                            </td>
                         
                        </tr>
                    
                    </tbody>
                </Table>




            </div>

        </div>
    )
}

export default DataList