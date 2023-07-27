import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import flork from '../images/flork.jpeg'

import { format, addDays, startOfWeek, eachDayOfInterval, isSameDay } from 'date-fns'; // Import date-fns functions

import TableBlock from '../components/TableBlock';

 function Planner() {


  // Helper function to get dates of the week starting from the current date
  const getWeekDates = () => {
    const today = new Date();
    const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 0 }); // Assuming Sunday is the start of the week
    const weekDates = eachDayOfInterval({ start: startOfCurrentWeek, end: addDays(startOfCurrentWeek, 6) });
    return weekDates;
  };

  const weekDates = getWeekDates();
  const today = new Date(); // Get the current date

  // Helper function to check if a given date is the current day
  const isCurrentDay = (date) => {
    return isSameDay(date, today);
  };

  return (
    <>
   
      
    <div className='flex'>
        <aside className='hidden md:block md:w-1/5 h-screen sticky top-0 text-slate-800 bg-slate-100' 
        // style={{ backgroundImage: `url(${orange_bg})`, backgroundSize: 'cover' }}
        >
          <div className='backdrop-blur-lg bg-white/40 rounded-md border-2 border-slate-200 text-sm text-slate-900 flex flex-col  p-2 m-6 h-1/2 space-y-4'>
          <p className='font-semibold text-black'>How to use this page:</p>
          <ul class="list-disc px-3 text-start">
            <li>Add a meal by clicking on the plus button.</li>
            <li>View the description of the meal by clicking on the meal.</li>
            <li>Delete the meal by clicking on the delete button.</li>
          </ul>
            <p className='font-semibold text-black text-start'>Hope you like this project 🤞😎</p>
          
          
          </div>
          <div className='flork-container fixed bottom-0 left-0 z-10 w-48 mix-blend-multiply'>
            <img src={flork} alt="img" className='object-cover' />
          </div>
        </aside>
      <main className='md:w-4/5'>
        <h1 className='text-2xl text-start mx-2 text-slate-500  font-semibold py-4 px-2 italic'>Menu Planner</h1>
        <div className='grid grid-cols-1 md:grid-cols-7 '>
          {weekDates.map((date, index) => {
            const dayName = format(date, 'EEE'); // Format the date to get the day name (e.g., "Sun")
            const isCurrentDate = isCurrentDay(date); // Check if the date is the current day
            return (
              <div
                className={`bg-slate-50  mx-[2px]  rounded-md `} 
                key={index}
              >
                <h1 className={`bg-blue-200 mb-2 py-2 rounded-md ${isCurrentDate ? 'bg-blue-600 text-white rounded-md' : ''}`}>{dayName}</h1>
                <TableBlock mealtype='Breakfast' day={dayName} />
                <TableBlock mealtype='Lunch' day={dayName} />
                <TableBlock mealtype='Snacks' day={dayName} />
                <TableBlock mealtype='Dinner' day={dayName} />
              </div>
            );
          })}
        </div>
      </main>
    </div>

  </>
  );
}

export default withAuthenticator(Planner);
