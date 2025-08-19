import React from 'react';
import CreateUser from '../features/user/CreateUser';
function Home() {
  return (
    <div>
      <h1 className="text-center text-xl font-bold">
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
