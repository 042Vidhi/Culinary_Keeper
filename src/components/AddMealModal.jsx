import React, { useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Meal } from '../models';
function AddMealModal({ setAddMealModalOpen,mealtype , day }) {

  // set meal to be an object with name and description
  const [meal, setMeal] = useState({ 'name': '', 'description': '' , 'mealtype': mealtype , 'day': day});

  // create a function that will save the meal to the database
  async function createPost() {
    await DataStore.save(
      new Meal({
        name: meal.name,
        description: meal.description,
        mealtype: meal.mealtype,
        day: meal.day
      })
    );
    window.location.reload();
  }

  return (
    <>
      <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50'>
        <div className='flex items-center justify-center h-screen'>
          <div className='bg-white w-[90%] h-[90%] p-4'>
            <button
              className='bg-red-500 text-white text-xs px-2 py-[3px] rounded-md align-top float-right'
              onClick={() => setAddMealModalOpen(false)}
            >
              x
            </button>

            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-2xl'>Add Meal</h1>
              <div className='flex flex-col items-center justify-center'>
                <label htmlFor='mealname'>Meal Name</label>
                <input
                  type='text'
                  id='mealname'
                  className='border-2 border-gray-400 rounded-md w-screen max-w-[80%]'
                  onChange={(e) => setMeal({ ...meal, 'name': e.target.value })}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <label htmlFor='mealdescription'>Meal Description</label>
                <textarea
                  id='mealdescription'
                  className='border-2 border-gray-400 rounded-md w-screen max-w-[80%]'
                  rows='14'
                  value={meal.mealdescription}
                  onChange={(e) => setMeal({ ...meal, description: e.target.value })}
                />
              </div>
              <div className='mt-4'>
                <button className='bg-blue-500 text-white px-2 py-[3px] rounded-md mr-4'
                  onClick={() => createPost()}
                >
                  Add Meal
                </button>
                <button
                  className='bg-red-500 text-white px-2 py-[3px] rounded-md'
                  onClick={() => setAddMealModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMealModal;
