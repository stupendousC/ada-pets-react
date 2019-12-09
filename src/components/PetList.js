import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {
  const allPets = props.pets;
  console.log(allPets);

  const petComponents = allPets.map((pet, i) => {
    return <PetCard key={i} {...pet}/>
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
