import React, { useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Meal } from '../models'; // Update the path if necessary


function EditMealModal({ post, setEditModalOpen , isEditModalOpen}) {

  const [editedPost, setEditedPost] = useState({ ...post });

  // Update the name and description of the meal
  const updateName = (e) => {
    setEditedPost({ ...editedPost, name: e.target.value });
  };
  const updateDescription = (e) => {
    setEditedPost({ ...editedPost, description: e.target.value });
  };


  // Update the meal in the database
  const handleSave = async () => {
    try {
      console.log('editedPost:', editedPost);
      await DataStore.save(
        Meal.copyOf(editedPost, (updated) => {
          updated.name = editedPost.name;
          updated.description = editedPost.description;
          updated.mealtype = editedPost.mealtype;
          updated.day = editedPost.day;
        })
      );
    } catch (error) {
      console.error('Error updating meal:', error);
    }
  };

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50'>
      <div className='flex items-center justify-center h-screen'>
        <div className='bg-white w-[90%] h-[90%] p-4'>
          <button
            className='bg-red-500 text-white text-xs px-2 py-[3px] rounded-md align-top float-right'
            onClick={() => setEditModalOpen(false)}
          >
            x
          </button>

          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl'>Edit Meal</h1>
            <div className='flex flex-col items-center justify-center'>
              <label htmlFor='mealname'>Meal Name</label>
              <input
                type='text'
                id='mealname'
                name='name'
                value={editedPost.name}
                className='border-2 border-gray-400 rounded-md w-screen max-w-[80%]'
                onChange={updateName}
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <label htmlFor='mealdescription'>Meal Description</label>
              <textarea
                id='mealdescription'
                name='description'
                value={editedPost.description}
                className='border-2 border-gray-400 rounded-md w-screen max-w-[80%]'
                rows='14'
                onChange={updateDescription}
              />
            </div>
            <div className='mt-4'>
              <button
                className='bg-blue-500 text-white px-2 py-[3px] rounded-md mr-4'
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className='bg-red-500 text-white px-2 py-[3px] rounded-md'
                onClick={()=>setEditModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMealModal;
