import React, { Component } from 'react';

class Coin extends Component {
    render() {
        return (
            <div className="coin">
                <input type="number" name={ this.props.name } onChange={ this.props.onChange } value={ this.props.value } />
            </div>
        );
    }
}

export default Coin;
