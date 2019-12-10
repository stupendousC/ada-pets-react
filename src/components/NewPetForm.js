import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      species: '',
      about: '',
      images: [],
      location: '',
    };
  }

  onFieldChange = (event) => {
    console.log(`wrote ${event.target.value} for ${event.target.name}`);
    this.setState({ [event.target.name]: event.target.value });
  }

  onImagesChange = (event) => {
    this.setState({ images: [event.target.value] });

    // decided not to just take 1 single image for state.images
    // let currImages = this.state.images.slice();
    // currImages.push(event.target.value);
    // this.setState({ images: currImages });
  }

  onSubmitNewPet = (event) => {
    event.preventDefault();

    if (!this.state.name) {
      console.log('need name');
      return;
    } else if (!this.state.species) {
      console.log('need species');
      return;      
    } else if (!this.state.images) {
      console.log('need image');
      return;
    }

    this.props.addPetCallback(this.state);
    this.setState({ name: "", species: "", about: "", location: "", images: []})
  }
  


  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.onSubmitNewPet}>
        <h3>Add a Pet</h3>
        
        <div>
          <label htmlFor="name" className="new-pet-form--label">NAME:</label>
          <input name="name" type="text" value={this.state.name} onChange={this.onFieldChange} />
        </div>

        <div>
          <label htmlFor="species" className="new-pet-form--label">SPECIES:</label>
          <input name="species" type="text" value={this.state.species} onChange={this.onFieldChange} />
        </div>

        <div>
          <label htmlFor="about" className="new-pet-form--label">ABOUT:</label>
          <input name="about" type="text" value={this.state.about} onChange={this.onFieldChange} />
        </div>

        <div>
          <label htmlFor="location" className="new-pet-form--label">LOCATION:</label>
          <input name="location" type="text" value={this.state.location} onChange={this.onFieldChange} />
        </div>

        <div>
          <label htmlFor="images" className="new-pet-form--label">IMAGES:</label>
          <input name="images" type="text" value={this.state.images} onChange={this.onImagesChange} />
        </div>

        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;