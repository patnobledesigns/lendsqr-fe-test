import React from 'react';
import DatePicker from "react-datepicker";


const TableHeaderFilter = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    // console.log(moment().toDate());
    return (
        <div className="table__filter">
            <form className="table__form">
                <div className="table__form-container">
                    <label className="table__form-label">Organization</label>
                    <select className="table__form-input" name="" id="">
                        <option value="">Select</option>
                        <option value="">Abmfb</option>
                        <option value="">Username</option>
                        <option value="">Email</option>
                    </select>
                </div>
                <div className="table__form-container">
                    <label className="table__form-label">Username</label>
                    <input type="text" className="table__form-input" placeholder="user" name="username" />
                </div>
                <div className="table__form-container">
                    <label className="table__form-label">Email</label>
                    <input type="text" className="table__form-input" placeholder="Email" name="email" />
                </div>
                <div className="table__form-container">
                    <label className="table__form-label">Date</label>
                    <DatePicker
                        selected={selectedDate}
                        placeholderText='Date'
                        className="table__form-input"
                        name='date'
                        onChange={date => setSelectedDate(date)}
                        maxDate={new Date()}

                        scrollableYearDropdown
                    />
                    
                </div>
                <div className="table__form-container">
                    <label className="table__form-label">Phone Number</label>
                    <input type="text" className="table__form-input" placeholder="Phone Number" name="phone" />
                </div>
                <div className="table__form-container">
                    <label className="table__form-label">Status</label>
                    <select className="table__form-input" name="" id="">
                        <option value="">Select</option>
                        <option value="pending">Pending</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="blacklisted">Blacklisted</option>
                    </select>

                </div>
                <div className='table__btncontainer'>
                    <button className="button table__form-btnOutline">Reset</button>
                    <button className="button table__form-btn">Filter</button>
                </div>
            </form>

        </div>
    );
};

export default TableHeaderFilter;