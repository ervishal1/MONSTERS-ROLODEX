import React from "react";
import './App.css'

import CardList from './components/card-list/CardList';
import SearchBox from "./components/search-box/SearchBox";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters : [],
      searchString : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) => {
      this.setState(()=>{
        return { monsters : data}
      })
    }).catch((err) => {});
  }

  inputHandler = (e) => {
    this.setState((prevState)=> {
      return {...prevState,searchString : e.target.value}
    })
  }

  render() {

    const filteredUsers = this.state.monsters.filter((user)=> {
      return user.name.toLowerCase().includes(this.state.searchString.toLowerCase())
    });

    return (
      <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox className='monster-search-box' onInputChangeHandler = {this.inputHandler}  placeholder = 'search monsters' />
      <CardList monsters= {filteredUsers} />
      </div>
    );
  }
}

export default App;
