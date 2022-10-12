import React from 'react';
import { useNavigate } from 'react-router-dom';

function List({data, onClick}) {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col gap-3'>
        {data?.map((e, i) => {
          return(
            <div key={'key number '+i} className='border-b-2 hover:text-cyan-500 pb-3'>{i+1}</div>
          );
        })}
      </div>
      <div className='col-span-4 flex flex-col gap-3'>
        {data?.map((e, i) => {
          return(
            <div key={'key '+e.name+' '+i} className='border-b-2 hover:text-cyan-500 capitalize truncate pb-3'>{e.name}</div>
          );
        })}
      </div>
      <div className='flex flex-col gap-3'>
        {data?.map((e, i) => {
          return(
            <div key={'key details '+i} onClick={()=> navigate('/details/'+e.name)} className='border-b-2 hover:text-cyan-500 cursor-pointer pb-3'>Show Details</div>
          );
        })}
      </div>
    </>
  );
}

export default List;