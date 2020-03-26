import React, { Component } from 'react'

class FilterString extends Component {

    constructor() {
      super();
  
      this.state = {
        martialWeapons: ['Katana', 'Long Sword', 'Shurikan', 'BlowGun', 'Flail'],
        userInput: '',
        filteredMartialWeapons: []
      };
    }
  
    handleChange(val) {
      this.setState({ userInput: val });
    }
  
    filteredMartialWeapons(userInput) {
      let martialWeapons = this.state.martialWeapons;
      let filteredMartialWeapons = [];
  
      for ( let i = 0; i < martialWeapons.length; i++ ) {
        if ( martialWeapons[i].includes(userInput) ) {
          filteredMartialWeapons.push(martialWeapons[i]);
        }
      }
  
      this.setState({ filteredMartialWeapons: filteredMartialWeapons });
    }
  
    render() {
      return (
        <div className="puzzleBox filterStringPB">
          <h4> Filter String </h4>
          <span className="puzzleText"> martialWeapons: { JSON.stringify(this.state.martialWeapons, null, 10) } </span>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
          <button className="confirmationButton" onClick={ () => this.filteredMartialWeapons(this.state.userInput) }> Filter </button>
          <span className="resultsBox filterStringRB"> Filtered MartialWeapons: { JSON.stringify(this.state.filteredMartialWeapons, null, 10) } </span>
        </div>
      )
    }
  }

export default FilterString;