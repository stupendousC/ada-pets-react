import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { pets } from './data/pets.json';
// const pets = importData.pets;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };

    this.showPetDetails = this.showPetDetails.bind(this);
    this.removePet = this.removePet.bind(this);
    console.log("started with", pets);
  }

  showPetDetails(id) {
    console.log(`App received id ${id}`);
    
    const selectedPet = this.state.petList.find(element => element.id === parseInt(id));
    console.log(selectedPet);
    this.setState({currentPet: selectedPet});
    
    console.log("success?", this.state.currentPet);
    
  }

  removePet(id) {
    console.log(`App will delete id ${id}`);
    
    const petToDelete = this.state.petList.find(element => element.id === parseInt(id));
    console.log("deleting...", petToDelete);
    
  }


  render () {
    const { currentPet } = this.state;
    

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>

        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar />
        </section>

        { /* Wave 1:  Where Pet Details should appear */}


        <section className="pet-list-wrapper">
          <PetList pets={this.state.petList} onSelectPet={this.showPetDetails} onRemovePet={this.removePet}/>
        </section>

        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */}
        </section>
      </main>
    );
  }
}

export default App;
