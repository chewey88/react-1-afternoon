import React, { Component } from 'react'

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            gemstones: [
                {
                    name: 'Emerald',
                    typicalColor: 'green',
                    hardness: 8,
                },
                {
                    name: 'Saphire',
                    typicalColor: 'blue',
                    chemicalComp: 'Al2O3',
                },
                {
                    name: 'Ruby',
                    typicalColor: 'red',
                    density: 4,
                }

            ],
            userInput: '',
            filterGemstones: []
        }
    }
    handleChange(value) {
        this.setState({ userInput: value })
    }

    filterGemstones(prop){
        let gemstones = this.state.gemstones;
        let filteredGemstones = [];

    for ( let i = 0; i < gemstones.length; i++ ) {
      if ( gemstones[i].hasOwnProperty(prop) ) {
        filteredGemstones.push(gemstones[i]);
      }
    }

    this.setState({ filteredGemstones: filteredGemstones })
    }
    render() {
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4> Filter Object </h4>
                <span className='puzzleText'> Original: { JSON.stringify(this.state.gemstones, null, 10)} </span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton'onClick={ () => this.filterGemstones(this.state.userInput)}> Filter </button> 
                <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredGemstones, null, 10) }</span>
            </div> 
        )
    }
}

export default FilterObject;