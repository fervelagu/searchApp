import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Implement a fuzzy search algorithm for transactions with the following requirements:
// Have a web page with one input field where a user can enter text, and a displayed list of transactions
// Display the full list of transactions when the input field is empty
// Update the displayed list of transactions as the user types in the input field (only show transactions that match the fuzzy search criteria)
// Show the transactions in order by date
// Fuzzy search must account for all transaction object properties (amount, date, card_last_four)
// You can hardcode the transaction data found below and do not need to fetch it from a server
// Unit tests are encouraged

class App extends Component {

  state = { query: '' }
  
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Search Transactions</h1>
        </header>

        <input className="searchInput" placeholder="Search for transactions..." ref={input => this.search = input} onChange={this.handleInputChange}/>
        <p>{this.state.query}</p>

      </div>

    );
  }

}

const transactions = [
  { amount: 112.98, date: '27-01-2018T12:34', card_last_four: '2544' },
  { amount: 0.45, date: '01-12-2017T9:36', card_last_four: '4434' },
  { amount: 95.99, date: '23-11-2017T14:34', card_last_four: '3011' },
  { amount: 7774.32, date: '17-07-2017T03:34', card_last_four: '6051' },
  { amount: 1345.98, date: '22-06-2017T10:33', card_last_four: '0059' },
  { amount: 2850.70, date: '27-01-2018T12:34', card_last_four: '4444' },
  { amount: 45.00, date: '10-02-2018T02:34', card_last_four: '0110' },
  { amount: 1.00, date: '17-02-2018T18:34', card_last_four: '1669' },
  { amount: 4.69, date: '01-02-2018T02:34', card_last_four: '8488' },
  { amount: 1111.11, date: '15-01-2018T21:34', card_last_four: '9912' }
];

export default App;