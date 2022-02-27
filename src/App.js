import React from 'react';
import {CardList} from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';
import Header from './component/header/header.component';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField : ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(value => this.setState({monsters : value}));
  }


  render() {
    const {monsters, searchField} = this.state;
    const filtering = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">      
        <Header title="monster rolodex" />
        <SearchBox type="text" placeholder="search monsters" handleChange={e => this.setState({searchField : e.target.value})}  />
        <CardList monsters={filtering} />
      </div>
    )
      
  }
}

export default App;
