import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Meal } from '../models';
import EditMealModal from '../components/EditMealModal';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function MealPage() {
  const id = window.location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  async function fetchMealPagePost() {
    const post = await DataStore.query(Meal, id);
    setPost(post);
  }

  useEffect(() => {
    fetchMealPagePost();
  }, []);


  return (
    
    <div className='p-6 flex flex-col items-start text-start'>
      <div className='flex justify-between w-full'>
        <h1 className='font-bold text-3xl mb-4'>{post.name}</h1>
        <button
          className='bg-blue-500 px-4 h-10 text-white font-semibold rounded-lg'
          onClick={() => setEditModalOpen(true)}
        >
          Edit
        </button>
      </div>
      <p className='text-gray-700 mb-2'>Day: {post.day}</p>
      <p className='text-blue-500 mb-2'>{post.mealtype}</p>
      <p className='text-gray-600 mb-2'>{post.description}</p>

      {isEditModalOpen && (
        <EditMealModal
          post={post}
          setEditModalOpen={setEditModalOpen}
          isEditModalOpen={isEditModalOpen}
        />
      )}
    </div>
  );
}

export default withAuthenticator(MealPage);
