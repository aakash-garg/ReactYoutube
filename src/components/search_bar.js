import React, {Component} from 'react';
// const Component = React.Component;

class SearchBar extends Component{
  render() {
    return <input onChange = {this.onInputChange}/>;
  }

  onInputChange(event){
    console.log(event.target.value);
  }
}

export default SearchBar;
