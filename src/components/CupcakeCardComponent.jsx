import React from 'react';

const CupcakeCardComponent = ({ imageSrc, title, massa, recheio, comp, cobertura, preco }) => {
  return (
    <div className='rounded-2xl bg-zinc-100 bg-opacity-75 p-4 shadow-lg m-4'>
      <div>
        <img src={imageSrc} className='w-40 h-40 m-auto' alt={title} />
      </div>
      <h2 className='text-center text-xl font-bold font-mono'>{title}</h2>
      <div>
        <div className='flex flex-col justify-self-end my-2'>
          <p> <span className='font-bold'> Massa: </span> {massa} </p>
          <p> <span className='font-bold'> Recheio: </span> {recheio} </p>
          <p> <span className='font-bold'> Comp: </span> {comp} </p>
          <p> <span className='font-bold'> Cobertura: </span> {cobertura} </p>
        </div>
        <div>
          <h3 className='w-fit bg-slate-200 p-3 rounded-lg m-auto'>
            <span className='font-bold'> Preço: </span> {preco}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CupcakeCardComponent;
