import React, { Component } from 'react'

class Card extends Component {


    render() {
        return (
            <div className='card mb-3 w-100'>
                <img className="fs-6"
                     src = {this.props.flag} 
                     alt={this.props.name} />

                <div className='card-body mb-3'>
                    <div> 
                        <p className="card-title">
                        <b>Country: </b> {this.props.name}
                        </p>
                    </div>

                    <div>      
                        <p className="card-content-text">
                           <b> Capital:</b> {this.props.capital || 'Undeclared*'}
                        </p>
                    </div>

                    <div>
                        <p className="card-content-text">
                          <b> Region: </b>  {this.props.region}
                        </p>
                    </div>

                    <div>
                        <p className="card-content-text">
                           <b> Population:</b> {this.props.population}
                        </p>
                    </div>

                </div>
        
            </div>
        )
    }
}

export default Card