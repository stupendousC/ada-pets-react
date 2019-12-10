import React from 'react';
import PropTypes from 'prop-types';

import speciesEmoji from '../speciesEmoji';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PetDetails.css';

const PetDetails = (props) => {
  const { name, location, about, species, images } = props.currentPet;

  const allImages = () => {
    return images.map ((image, i) => {
      return(
        <section key={i}>
        <img src={image} alt={`${name}`} className="pet-details--image" />
        </section>
      );
    })
  }

  return (
    <section className="pet-details">
      <section className="pet-details--header">
        <h2 className="petdetails--name">{speciesEmoji(species)} {name} {speciesEmoji(species)}</h2>
        {/* WAS JUST SHOWING 1 IMAGE BEFORE: <img src={images[0]} alt={`${name}`} className="pet-details--image" /> */} 
        { allImages() }
      </section>
      <article>
        <h3>About {name}</h3>
        <p>
          {about}
        </p>
      </article>
      <footer className="text-muted pet-location">
        {location}
      </footer>
    </section>
  )
}

PetDetails.propTypes = {
  currentPet: PropTypes.shape({
    about: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }),
}
export default PetDetails;
