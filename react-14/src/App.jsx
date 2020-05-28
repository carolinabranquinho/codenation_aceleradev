import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import './App.scss';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      persons: [],
      query: '',
      filter: '',
    };
  }

  componentDidMount () {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts').then(response => {
      if(response.ok) {
        response.json().then((persons) => this.setState({persons}));
      }
    })
  }

  filterContacts = (showingContacts) => {
    const {query, filter} = this.state;

    query && (showingContacts = showingContacts.filter(Contacts => Contacts.name.includes(query)));

    filter && (showingContacts = this.sortBy(showingContacts, filter));

    return showingContacts;
  }

  sortBy(showingContacts, filter) {
    return showingContacts.sort((a,b) => a[filter] < b[filter] ? -1 : 1)
  }

  handleFilter = (filter) => {
    this.setState({filter});
  };

  handleQuery = (query) => {
    this.setState( {query:query.trim()} );
  };

  render() {
    const {persons, query, filter} = this.state;
    let showingContacts = [...persons];
    showingContacts = query || filter ? this.filterContacts(showingContacts) : showingContacts;

    return (
      <div className="app" data-testid="app">
        <Topbar />  
        <Filters
          onQuery={this.handleQuery} 
          onFilter={this.handleFilter}
          filter={filter}
        />
        <Contacts 
          contacts={showingContacts}
        />
      </div>
    );
  }
}

export default App;
