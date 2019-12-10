import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PetCard.css';

import speciesEmoji from '../speciesEmoji';


const PetCard = (props) => {
  const { id, name, species, about, location, onMoveUpDown } = props;

  const onSelectPet = (event) => {
    const id = event.target.id;
    // console.log(`PetCard sees u clicked on ${id}`);
    props.onSelectPet(id);
  }

  const onRemovePet = (event) => {
    const id = event.target.id;
    // console.log(`PetCard sees u want to delete ${id}`);
    props.onRemovePet(id);  
  }

  const onMoveUp = (event) => {
    onMoveUpDown(event.target.id, 1);
  }

  const onMoveDown = (event) => {
    onMoveUpDown(event.target.id, -1);
  }


  return (
    <div className="card pet-card">

      <section className="pet-card--header">

        {speciesEmoji(species)} {id} - {name}

        <button
          className="btn btn-primary pet-card--select-pet-btn"
          id={id}
          onClick={onSelectPet}
        >   
          Select
        </button>

        <button
          type="button"
          className="btn btn-danger pet-card--remove-btn"
          aria-label="Remove"
          id={id}
          onClick={onRemovePet}
        >
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
          aria-label="Remove" id={id} onClick={onMoveUp} >
          Move Up
        </button>
      <button type="button" className="btn btn-warning pet-card--remove-btn"
          aria-label="Remove" id={id} onClick={onMoveDown} >
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