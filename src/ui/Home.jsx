import React from 'react';
import CreateUser from '../features/user/CreateUser';
function Home() {
  return (
    <div className='my-10 text-center sm:my-16 px-5'>
      <h1 className="mb-8 text-center text-xl font-bold md:text-3xl lg:text-4xl">
        The Best Pizza.
        <br />
        <span className="text-yellow-500"> Delivered fast.</span>
        <br />
        <span className="text-stone-500"> Straight out of the oven, Straight to you.</span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
