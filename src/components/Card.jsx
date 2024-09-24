// import React from 'react'

const Card = ({ name, description, sourceLink, liveLink, preview, techstack1, techstack2, techstack3, techstack4 }) => {
  return (
        <div className="w-[300px] rounded-md border">
       <img
            className=" "
            src={preview}
            title='Coffeto'
            
          />
          <div className="p-4 ">
            <h1 className="inline-flex items-center text-lg font-semibold text-white">
              {name} &nbsp; 
              {/* <ArrowUpRight className="h-4 w-4" /> */}
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              {description}
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                {techstack1}
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                {techstack2}
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                {techstack3}
              </span>
              {/* <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                {techstack4}
              </span> */}
            </div>
            <button className="border border-cyan-500 m-3 p-2 rounded-full">
            <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="text-white">
          Source Code
        </a>
        </button>
        <button className="border border-cyan-500 rounded-full m-3 p-2">
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-white">
          Live Preview
        </a>
        </button>
          </div>
        </div>
      )
    }
  
export default Card