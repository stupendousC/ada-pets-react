import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = ({pets, selectPetCallback, removePetCallback, moveUpDownCallback}) => {

  const petComponents = pets.map((pet, i) => {
    return <PetCard key={i} {...pet} selectPetCallback={selectPetCallback} removePetCallback={removePetCallback} moveUpDownCallback={moveUpDownCallback}/>
  });

  return (
    <div className="card-group">
      {petComponents}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
