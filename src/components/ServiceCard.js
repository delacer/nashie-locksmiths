import React from 'react';
import '../styles/ServiceCard.css';
import { FaKey, FaTools, FaCarSide, FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ title, image, description }) => {
  const getIcon = () => {
    if (title.includes('Programming')) return <FaKey className='service-icon' />;
    if (title.includes('Cutting')) return <FaTools className='service-icon' />;
    if (title.includes('Replacement')) return <FaCarSide className='service-icon' />;
    return null;
  };

  return (
    <article className='service-card' aria-label={`Service: ${title}`}>
      <div className='card-image'>
        <img src={image} alt={title} className='service-img' loading='lazy' />
      </div>

      <div className='card-content'>
        <div className='card-header'>
          {getIcon()}
          <h3 className='card-title'>{title}</h3>
        </div>
        <p className='card-description'>{description}</p>
        <a href='/contact' className='card-cta'>
          Learn More <FaArrowRight />
        </a>
      </div>
    </article>
  );
};

export default ServiceCard;
