import React, { useState } from 'react';

import imagem1 from '../assets/CupCake__chocolate.jpg';
import imagem2 from '../assets/CupCake__pamonhaWTF.jpg';
import imagem3 from '../assets/CupCake__baunilhaAndBerry.jpg';
import imagem4 from '../assets/CupCake__Strawberry.jpg';

import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

// Retirado de https://www.youtube.com/watch?v=tXlZCW26bto&ab_channel=CodeCommerce

function SliderComponent() {
	const slides = [
		{ 
			url: imagem1 
		},
		{ 
			url: imagem2 
		},
		{ 
			url: imagem3 
		},
		{ 
			url: imagem4 
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
		setCurrentIndex(newIndex)
	}

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	}

  return (
	<div className="h-[512px] w-full m-auto py-8 px-4 relative group">
		<div 
			style={{
				backgroundImage: `url(${slides[currentIndex].url})`
			}}
			className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
		</div>
		<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
			<BsChevronCompactLeft onClick={prevSlide} size={30}/>
		</div>
		<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
			<BsChevronCompactRight onClick={nextSlide} size={30}/>
		</div>

		<div className='flex top-4 justify-center py-2'>
			{slides.map((slide, slideIndex) => (
				<div 
					key={slideIndex} 
					onClick={() => goToSlide(slideIndex)} 
					className='text-2xl cursor-pointer'
				> 
					<RxDotFilled 
						className={currentIndex === slideIndex ? 'text-red-500' : 'text-gray-500'}
					/> 
				</div>  	
			))}
		</div>

	</div>
  );
}

export default SliderComponent;
