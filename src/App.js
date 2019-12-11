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
      filteredPetList: undefined,
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
    // console.log(`App has received new pet`);
    let currPetList = this.state.petList.slice();
    let newPetData = data;
    newPetData.id = this.state.nextId;
    
    currPetList.push(data);
    this.setState({petList: currPetList});
    this.incrementNextId();

    // console.log(currPetList);
    // console.log(data);
  }

  applySearch = (props) => {
    console.log(`search for ${props} in name/species/about`);
    // case insensitive regex
    const searchRegex = new RegExp(props, "i");

    let filteredPetList = this.state.petList.slice();
    filteredPetList = filteredPetList.filter( pet => {
      return (searchRegex.test(pet.name) || searchRegex.test(pet.species) || searchRegex.test(pet.about));
    });

    console.log(filteredPetList);
    // both the key and the value are called 'filteredPetList', so ES6 allows thsi shortcut
    this.setState({ filteredPetList });
  }

  moveUpDown = (id, delta) => {
    console.log(`moving id ${id} by ${delta} spots`);

    // find where the id is in a copy of state.petList 
    let updatedPetList = this.state.petList;
    const currIndex = updatedPetList.findIndex( pet => parseInt(pet.id) === parseInt(id) );
    
    let newIndex;
    if (delta === 1) {
      if (currIndex === 0) {
        console.log("you're already at the top spot, done");
        return;
      } else {
        newIndex = currIndex - 1;
      }

    } else if (delta === -1) {
      if (currIndex === updatedPetList.length-1) {
        console.log("you're already at the bottom spot, done");
        return;
      } else {
        newIndex = currIndex + 1;
      }
    }

    // switch spots
    const temp = updatedPetList[newIndex];
    updatedPetList[newIndex] = updatedPetList[currIndex];
    updatedPetList[currIndex] = temp;

    this.setState({
      petList: updatedPetList,
    })
  }

  getPetList = () => {
    if (this.state.filteredPetList) {
      return (<PetList pets={this.state.filteredPetList} selectPetCallback={this.showPetDetails} removePetCallback={this.removePet} moveUpDownCallback={this.moveUpDown}/>);
    } else {
      return (<PetList pets={this.state.petList} selectPetCallback={this.showPetDetails} removePetCallback={this.removePet} moveUpDownCallback={this.moveUpDown}/>);
    }
  }

  render () {
    const { currentPet } = this.state;
    // the destructuring above is the same as...  const currentPet = this.state.currentPet;
    
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
          { this.getPetList() }
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