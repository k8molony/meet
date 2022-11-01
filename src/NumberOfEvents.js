import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: '',
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: value,
        errorText: 'Enter number from 1 to 32',
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        errorText: '',
      });
    }

    this.props.updateEvents(undefined, value);
  };

  render() {
    return (
      <div>
        <div className="number-of-events">
          <label>
            Number of Events:
            <input
              type="number"
              className="number-of-events-input"
              min="1"
              value={this.state.numberOfEvents}
              onChange={this.handleInputChanged}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;

// import React, { Component } from 'react';

// class NumberOfEvents extends Component {
//   state = {
//     NumberOfEvents: 32,
//     errorText: '',
//   };

//   handleInputChanged = (event) => {
//     const value = event.target.value;
//     if (value < 1 || value > 32) {
//       this.setState({
//         numberOfEvents: value,
//         errorText: 'Enter number from 1-32',
//       });
//     } else {
//       this.setState({
//         numberOfEvents: event.target.value,
//         errorText: '',
//       });
//     }

//     this.props.updateEvents(undefined, value);
//   };

//   render() {
//     return (
//       <div>
//         <div className='number-of-events'>
//           <label>
//             Number of Events: 
//             <input
//               type="number"
//               className="number-of-events-input"
//               min="1"
//               value={this.state.numberOfEvents}
//               onChange={this.handleInputChanged}
//             />
//           </label>
//         </div>
//       </div>
//     )
//   }
// }

// class NumberOfEvents extends Component {
//   state= {
//     numberQuery: '',
//     suggestionsNumber: []
//   }

//   handleInputChanged = (event) => {
//     const value = event.target.value;
//     const suggestionsNumber = this.props.locations.filter((location) => {
//       return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
//     });
//     this.setState({
//       numberQuery: value,
//       suggestionsNumber
//     });
//   };

//   handleItemClicked = (suggestionNumber) => {
//     this.setState({
//       numberQuery: suggestionNumber
//     });
//   }

//   render() {
//     return (
//       <div className='NumberOfEvents'>
//         <input
//           type="text"
//           className="number-of-events"
//           value={this.state.numberQuery}
//           onChange={this.handleInputChanged}
//         />
//         <ul className='suggestions-number'>
//           {this.state.suggestionsNumber.map((suggestionNumber) => (
//             <li
//               key={suggestionNumber}
//               onClick={() => this.handleItemClicked(suggestionNumber)}
//             >{suggestionNumber}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
  
  // export default NumberOfEvents;