import React, { Component } from 'react';

// The SearchBar is a React CLASS based component, because it needs access to state.
class SearchBar extends Component {
   // Before we ever use state inside a component we need to initalize the state object.
   // To initialize state, we set the property state to a plain javascript object inside the classes constructor method.
   constructor(props) {
      super(props);                 // Allways call the super constructor first.
      this.state = { term: '' };    // Initialize the state object.
   }

   // All React class based components must hace a render function that returns some JSX.
   // When we render this component inside/from another component, this render function is called.
   render() {
      return (
         <div className="search-bar">
            <input
               value={this.state.term}
               onChange={ event => this.onInputChange(event.target.value) } />
         </div>
      )
   }

   onInputChange(term) {
      this.setState({term});                 // Upfates the state of this component.
      this.props.onSearchTermChange(term);   // Calls the callback function (available on the props parameter) with the new search term.
   }

}

export default SearchBar;

// Each class based component has it's own state object, declared as a plain javascript object.
// The state is used to record and react to user events (or external events).
// Whenever the state is changed, the component immediately re-renders,
//   and also forces all of it's children to re-render as well.
// IMPORTANT!!! We never, never, ever, should UPDATE the state object directly, but instead
//   call the this.setState() method.

// The input element is a CONTROLLED component because of the "value={this.state.term}"" property.
// This is an IMPORTANT difference.
// This way, when we want the value of the component, the correct value is ALWAYS stored
// in the this.state.term property. We don't need f.ex. jQuery to go get the value form the input element.
