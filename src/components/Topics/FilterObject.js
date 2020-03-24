import React, { Component } from 'react'

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            employess: [

            ],
            userInput: '',
            filteredEmployees: []
        }
    }
    render() {
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4> Filter Object </h4>
                <span className='resultsBox'> </span>
                <input className='inputLine' />
                <button className='confirmationButton'> Filter </button> 
                <span className='resultsBox filterObjectRB'></span>
            </div> 
        )
    }
}

export default FilterObject;