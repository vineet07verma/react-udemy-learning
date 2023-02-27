import React from 'react'
import './ExpenseItem.scss';

function ExpenseItem() {
    return (
        <div className='row'>
            <div className='expense-item d-flex justify-content-between'>
                <div>March 28th 2023</div>
                <div className='expense-item__description'>
                    <h2>Car Insurence</h2>
                    <div className='expense-item__price'>$256.50</div>
                </div>
            </div>
        </div>

    )
}

export default ExpenseItem