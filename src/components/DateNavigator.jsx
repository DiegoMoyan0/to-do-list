import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateNavigator = ({ onDateChange, onAddClick, selectedDate }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDate = (date) => {
   
    const options = { day: 'numeric', month: 'short', weekday: 'long' };    
    let parts = date.toLocaleDateString('en-GB', options).split(', ');
    return `${parts[1]}, ${parts[0]}`; 
  };

  return (
    <div className='date-navigator'>
      {showDatePicker && (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            onDateChange(date);
            setShowDatePicker(false);
          }}
          inline
        />
      )}
      <p className='date-sign' onClick={() => setShowDatePicker(!showDatePicker)}>&lt;</p>
      <span>{formatDate(selectedDate)}</span>
      <p className='task-sign' onClick={onAddClick}>+</p>
    </div>
  );
};

export default DateNavigator;
