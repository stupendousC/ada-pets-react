import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PetCard.css';

import speciesEmoji from '../speciesEmoji';


const PetCard = (props) => {
  const { id, name, species, about, location, selectPetCallback, removePetCallback, moveUpDownCallback } = props;

  return (
    <div className="card pet-card">

      <section className="pet-card--header">

        {speciesEmoji(species)} {id} - {name}

        <button onClick={() => {selectPetCallback(id)}} className="btn btn-primary pet-card--select-pet-btn" >   
          Select
        </button>

        <button onClick={() => {removePetCallback(id)}} type="button" className="btn btn-danger pet-card--remove-btn" aria-label="Remove" >
          Remove
        </button>

      </section>

      <section className="pet-card--body">
        {about.length > 128 ? `${ about.substring(0, 128) }...` : about}
      </section>

      <section className="pet-card--footer text-muted">
        {location}
      </section>

      <button type="button" className="btn btn-info pet-card--remove-btn"
          aria-label="Move Up" onClick={() => {moveUpDownCallback(id, 1)}} >
          Move Up
        </button>
      <button type="button" className="btn btn-warning pet-card--remove-btn"
          aria-label="Move Down" onClick={() => {moveUpDownCallback(id, -1)}} >
          Move Down
        </button>

    </div>
  );
};

PetCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  about: PropTypes.string,
  location: PropTypes.string,
}

export default PetCard;