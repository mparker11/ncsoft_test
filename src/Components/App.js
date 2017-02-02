import React, { Component } from 'react';
import Coin from './Coin';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalValue: '', 
            coins: [
                { value: 25, times: '' },
                { value: 10, times: '' },
                { value: 5, times: '' },
                { value: 1, times: '' }
            ] 
        };

        this.handleChange = this.handleChange.bind(this);
        this.calculateCoins = this.calculateCoins.bind(this);
    }
    handleChange(event) {
        if (event.target.name === 'calculate') {
            this.calculateCoins();
            return;
        }
        
        let totalValue = event.target.name === 'total-value' ? parseInt(event.target.value) : this.state.totalValue;
        let coins = this.state.coins;

        if (event.target.name.indexOf('coin') > -1) {
            let index = event.target.name.replace('coin-', '');
            coins[index].value = parseInt(event.target.value);
        }
        
        this.setState({ 
            totalValue: totalValue,
            coins: coins
        });
    }
    calculateCoins() {
        if (this.state.totalValue === '') {
            alert('Please enter a number in the text box');
            return;
        }
        
        let totalValue = this.state.totalValue;
        let remainingValue = this.state.totalValue;
        let sortedCoins = this.state.coins.sort(function(a, b) { return a.value < b.value });

        for (var i = 0; i < sortedCoins.length; i++) {
            let times = remainingValue / sortedCoins[i].value;
            sortedCoins[i].times = Math.floor(times);
            
            let leftover = remainingValue - (sortedCoins[i].value * Math.floor(times));
            if (leftover > 0) {
                remainingValue = leftover;
            } else {
                remainingValue = 0;
            }
        }
        
        this.setState({ 
            totalValue: totalValue,
            coins: sortedCoins
        }, function() {
            console.log(this.state);
        });
    }
    render() {
        return (
            <div className="app">
                <div className="content">
                    <h1>Coin Counter</h1>
                    <div className="coins">
                    {
                        this.state.coins.map(function(coin, i) {
                            return (
                                <Coin key={ i } name={ 'coin-' + i } value={ coin.value } counter={ coin.times } onChange={ this.handleChange } />
                            )
                        }, this)
                    }
                    </div>
                    <div className="submit-section">
                        <input type="number" name="total-value" placeholder="Type a number" onBlur={ this.handleChange } />
                        <button name="calculate" onClick={ this.handleChange }>CALCULATE</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
