import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsList from './HogsList'

const by = prop => { // use this function when sorting 
  const sorter = (a, b) => {
    if (prop) {
      a = a[prop]
      b = b[prop]
    }
    if (a>b) return 1
    if (a<b) return -1
    return 0
  }
  sorter.descending = (a,b) => 0 - sorter(a,b)
  return sorter
}

class App extends Component {
  state = {
    showOnlyGreased: false, //boolean checkboxes, filter
    sortedBy: 'all' //drop down options, sort by (more than one option)
  }

  toggleShowGreasedOnly = () => {
    this.setState({ showOnlyGreased: !this.state.showOnlyGreased})
  }
  
  //derived state using functions, not setting state to delete other options
  filterHogs = hogs => 
    this.state.showOnlyGreased 
    ? hogs.filter(hog => hog.greased)
    : hogs

  sortHogs = hogs => 
    this.state.sortedBy === 'all'
    ? hogs
    : [...hogs].sort(by(this.state.sortedBy)) 
    //by wont be recognised if we dont use the function above

    //doing any dropdown/checkbox is a 2 step process
    //sort/filter hogs will be sent to render, but we also need set state
    //functions to be sent to eventhandlers

    updateSortedBy = (e) => {
      this.setState({ sortedBy: e.target.value})
    }
  
  

  render() {
    const filteredHogs = this.filterHogs(hogs)
    const filteredAndSortedHogs = this.sortHogs(filteredHogs)
    return (
      <div className="App">
          < Nav showOnlyGreased={this.state.showOnlyGreased} 
          toggleShowGreasedOnly={this.toggleShowGreasedOnly} sortHogs={this.sortHogs} updateSortedBy={this.updateSortedBy}/>
          < HogsList hogs={filteredAndSortedHogs}/>
      </div>
    )
  }
}

export default App;
