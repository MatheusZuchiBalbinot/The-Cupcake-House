const FeatureCard = ({ title, imageSrc }) => {
    return (
      <div className='text-center font-semibold'>
        <h2>{title}</h2>
        <img src={imageSrc} className='w-36 m-auto' alt={title} />
      </div>
    );
  };
  
  export default FeatureCard;