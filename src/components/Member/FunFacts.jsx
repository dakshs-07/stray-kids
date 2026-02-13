import React from 'react'

function FunFacts({factData}) {
  return (
    <div className="bg-gray-100 my-10 px-2 py-5 flex flex-col justify-center items-center">
      <h1 className="text-3xl tracking-wide font-extralight mb-2">
        Fun Facts
      </h1>
      <ol className='list-decimal list-inside space-y-2 mt-4 tracking-wide max-w-160'>
        {factData.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ol>
    </div>
  );
}

export default FunFacts