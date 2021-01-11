import React from 'react';
import './App.css';
import List from './List';
import contacts from './contacts.json';


class App extends React.Component {
  state = {
    contactData: contacts.slice(0, 5),
    restofData: contacts.slice(6)
  }

  deleteHandler=(id)=>{
    console.log("delete click")
    this.setState({
      contactData: this.state.contactData.filter(person => person.id !== id)
    })
  }


  clickHandler = () => {
    let maximum = (this.state.restofData.length) - 1
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    let blub = getRandom(0, maximum)

    let randomData = this.state.restofData[blub]

    const addingContact = this.state.contactData.concat(randomData)

    this.setState({
      contactData: addingContact
    })
  }

  sortNameHandler = () => {
    let sortThisData = this.state.contactData
    function sortByKey(arr, key, reverse) {
      var sortOrder = 1;
      if (reverse) {
        sortOrder = -1;
      }
      return arr.sort(function (a, b) {
        var x = a[key],
          y = b[key];

        return sortOrder * ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }
    let sortedByName = sortByKey(sortThisData, 'name')
    this.setState({
      contactData: sortedByName
    })
  }


  sortPopularityHandler = () => {
    let sortThisData = this.state.contactData
    function sortByKey(arr, key, reverse) {
      var sortOrder = -1;
      if (reverse) {
        sortOrder = 1;
      }
      return arr.sort(function (a, b) {
        var x = a[key],
          y = b[key];

        return sortOrder * ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }
    let sortedByName = sortByKey(sortThisData, 'popularity')
    this.setState({
      contactData: sortedByName
    })
  }



  // List is a single contact!!!!!!!!!!

  render() {
    return (<div>
      <h1>Iron Contacts</h1>
      <button onClick={this.clickHandler}>Add random Contact</button>
      <button onClick={this.sortNameHandler}>Sort by Name</button>
      <button onClick={this.sortPopularityHandler}>Sort by Popularity</button>
      <div className="App" >
        {this.state.contactData.map(data => {
          console.log(data)

          return <List key={data.id} data={data} deleteHandler={this.deleteHandler}/>
        })}
      </div>

    </div>);
  }
}

export default App;