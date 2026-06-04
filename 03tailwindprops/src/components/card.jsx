import React from "react";


function Card({username,btnText = "visit me"}) {
    console.log( username); 
  return (
    <div className="relative h-100 w-75 rounded-md overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent"> </div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}
        </h1>
       <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptas alias optio perferendis dolorum nostrum, aliquid totam explicabo dignissimos qui vel expedita commodi repellat placeat. Vel, facilis? Sed, vero. Vitae.
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
       {btnText  }
        </button>
      </div>
    </div>
  );
}

export default Card;
