import React, { Component } from 'react';

class Coin extends Component {
    render() {
		let counterClass = this.props.counter != '' ? 'counter show' : 'counter';
        return (
            <div className="coin">
				<div className="coin-input">
                	<input type="number" name={ this.props.name } onChange={ this.props.onChange } value={ this.props.value } />
				</div>
				<div className={ counterClass }><span>{ this.props.counter }</span></div>
            </div>
        );
    }
}

export default Coin;
