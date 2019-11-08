import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestMonsters } from 'actions';
import CardList from 'components/CardList';
import SearchBox from 'components/SearchBox';
import Scroll from 'components/Scroll';
import ErrorBoundary from 'components/ErrorBoundary';
// import { monsters } from '../monsters.js';
import 'containers/App.css';

// mapStateToProps tells component what state to listen to and send down as props
const mapStateToProps = state => {
  return {
    // props to be returned from applicable reducer
    searchField: state.searchMonsters.searchField,
    monsters: state.requestMonsters.monsters,
    isPending: state.requestMonsters.isPending
  }
}

// mapDispatchToProps tells component what dispatch/actions to listen to i.e. sends action
const mapDispatchToProps = (dispatch) => {
  // return object that contains all actions
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestMonsters: () => dispatch(requestMonsters())
  }
}

class App extends Component {
  // constructor() {
  //   super()
  //   this.state= {
  //     monsters: [],
  //     searchfield: ''
  //   }
  // }

  componentDidMount() {
    // console.log(this.props.store.getState());
    // this.setState( { monsters: monsters } );
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState( { monsters: users }));
    this.props.onRequestMonsters();
  }

  // onSearchChange = (event) => {
  //   console.log(event.target.value);
  //   this.setState({ searchfield: event.target.value });
  // }

  render() {
    // searchField now comes from props not component state
    const { monsters, searchField, onSearchChange, isPending } = this.props;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    // console.log(filteredMonsters);

    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Monstrous Mates</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList monsters={filteredMonsters} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

// 'connect' a higher order function i.e. returns another function
// subscribes component to any changes in redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
