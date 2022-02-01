import React, { Component } from 'react'

class Card extends Component {
    
    render() {
        return (
            <div className='card row w-50 text-center'>
                
                {this.props.flag}
               Country: {this.props.name}
               Capital: {this.props.capital}
               Region:  {this.props.region}
               Population: {this.props.population}
                
            </div>
        )
    }
}

export default Card