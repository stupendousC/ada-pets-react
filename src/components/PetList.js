import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {
  const allPets = props.pets;

  const onSelectPet = (id) => {
    // console.log(`PetList received ${id}`);
    props.onSelectPet(id);
  }

  const removePet = (id) => {
    // console.log(`Petlist sees deletion on ${id}`);
    props.onRemovePet(id);
  }
  
  const petComponents = allPets.map((pet, i) => {
    return <PetCard key={i} {...pet} onSelectPet={onSelectPet} onRemovePet={removePet}/>
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
