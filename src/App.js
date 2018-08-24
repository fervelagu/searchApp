import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {thetransactions} from './transactions'

class App extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    let filteredTransactions = thetransactions.filter(
      (trans) => {
        return trans.amount.toString().indexOf(this.state.query) !== -1 || trans.date.indexOf(this.state.query) !== -1 || trans.card_last_four.indexOf(this.state.query) !== -1 
      }
    )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Search Transactions</h1>
        </header>
        
        <form onSubmit={this.displayingTransactions}>
          <input className="searchInput" 
            placeholder="Search for transactions..." 
            value={this.state.query} 
            ref={input => this.search = input} 
            onChange={this.handleChange}
          />
          <p>{this.state.query}</p>
        </form>

        <div className="TransList">
          <ul>{filteredTransactions.map((trans) => {
            return <li>Amount: {trans.amount}, Date: {trans.date}, Last four numbers: {trans.card_last_four}</li>
          })}</ul>
        </div>

      </div>
    );
  }
}

export default App;