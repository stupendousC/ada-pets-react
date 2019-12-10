import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      nextId: this.genNextId(pets),
    };
    
    console.log("started with", pets);
  }

  genNextId = (petsArray) => {
    const allIds = petsArray.map ((pet, i) => {return pet.id });
    const max = Math.max(...allIds);
    return max+1;
  }

  incrementNextId = () => {
    this.setState({ nextId: this.state.nextId + 1});
  }

  showPetDetails = (id) => {
    // console.log(`App received id ${id}`);
    
    const selectedPet = this.state.petList.find(element => element.id === parseInt(id));
    this.setState({currentPet: selectedPet});
  }

  removePet = (id) => {
    // console.log(`App will delete id ${id}`);

    let updatedPetList = this.state.petList;
    updatedPetList = updatedPetList.filter( pet => {
      return (pet.id !== parseInt(id));
    })

    this.setState({petList: updatedPetList});
  }

  addPet = (data) => {
    console.log(`App has received new pet`);
    let currPetList = this.state.petList.slice();
    let newPetData = data;
    newPetData.id = this.state.nextId;
    
    currPetList.push(data);
    this.setState({petList: currPetList});
    this.incrementNextId();

    console.log(currPetList);
    console.log(data);
    
  }

  applySearch = (props) => {
    console.log(`will search for ${props}`);
    
  }

  render () {
    const { currentPet } = this.state;
    
    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>

        <section className="search-bar-wrapper">
          <SearchBar searchCallback={this.applySearch}/>
        </section>

        { currentPet ? <PetDetails currentPet={currentPet} />:(null)}

        <section className="pet-list-wrapper">
          <PetList pets={this.state.petList} onSelectPet={this.showPetDetails} onRemovePet={this.removePet}/>
        </section>

        <section className="new-pet-form-wrapper">
          <NewPetForm addPetCallback={this.addPet}/>
        </section>
      </main>
    );
  }
}

export default App;


App.propTypes = {
  petList: PropTypes.array,
  currentPet: PropTypes.instanceOf(PetList),
}