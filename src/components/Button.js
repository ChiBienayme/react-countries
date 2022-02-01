import React, { Component } from 'react'

class Button extends Component {
    
    render() {
        return (
            <button
                onClick={this.props.onClick} 
                className="btn btn-primary m-2 p-2"
                type="button">
                    {this.props.children}
            </button>
        )
    }
}

export default Button