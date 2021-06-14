import React, { Component } from 'react'

import pokemonList from './pokemonList.js'

export default class dashboard extends Component {
    render() {
        return(
            <div>
                <div className = "row"></div>
                <div className = "column">
                    <pokemonList />
                </div>
            </div>
        )
    }
}
