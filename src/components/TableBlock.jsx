import React, { useState, useEffect } from 'react'; // Import useEffect to use it for fetching data
import AddMealModal from './AddMealModal';
import { DataStore } from '@aws-amplify/datastore';
import { Meal } from '../models';
import { AiFillDelete } from 'react-icons/ai'; 


function TableBlock({ mealtype, day }) {
  const [isAddMealModalOpen, setAddMealModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const mealpost = await DataStore.query(Meal);
    setPosts(mealpost);
  }

    async function handleDelete(id) {
        const toDelete = await DataStore.query(Meal, id);
        DataStore.delete(toDelete);
       window.location.reload();
    }

  useEffect(() => {
    fetchPosts();
  }, []); // Run the fetchPosts function only once when the component mounts

  return (
    <React.Fragment>
      {isAddMealModalOpen && (
        <AddMealModal setAddMealModalOpen={setAddMealModalOpen} mealtype={mealtype} day={day} />
      )}
      <div className='min-h-[8rem] bg-slate-50 '>
        <span className='flex items-center bg-slate-200 justify-between pl-2 rounded-md p-[4px]'>
          <h1 className='text-xs text-slate-600 font-medium'>{mealtype}</h1>
          <button
            className='bg-blue-300 text-white text-xs px-2 py-[3px] rounded-md hover:bg-blue-400'
            onClick={() => setAddMealModalOpen(true)}
          >
            +
          </button>
        </span>

        <div >
            {posts
              .filter((post) => post.mealtype === mealtype && post.day === day)
              .map((post, index) => (
                <div className='bg-blue-300 rounded-md text-white my-[2px] flex justify-between px-[4px] py-2 cursor-pointer' key={index}
                onClick={()=>window.location.href=`/planner/${post.id}`}
                >
                  <h3 className='font-[500] text-xs truncate'>{post.name}</h3>
                  <button 
                    onClick={()=>handleDelete(post.id)}    
                    >
                    <AiFillDelete className='text-slate-500 hover:text-slate-300' />
                  </button>
                </div>
              ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default TableBlock;
