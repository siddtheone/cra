import React, { Component } from 'react';
import axios from 'axios';
import APP_CONFIG from './constants';
import './App.css';
import Header from './Components/Header';
import Incidents from './Components/Incidents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isError: false,
      incidents: [],
      page: 1,
      query: '',
    };

    this.getIncidents = this.getIncidents.bind(this);
    this.onPageChange = page => {
      this.setState({page});
    }
  }

  componentDidMount() {
    this.getIncidents();
  }

  getIncidents() {
    const {
      page, query
    } = this.state;

    const params = {
      page,
      proximity: 'Berlin',
      incident_type: 'theft',
    };

    if(query) {
      params.query = query;
    }

    this.setState({isLoading: true});

    axios.get(`${APP_CONFIG.API_URL}incidents`, {
      params
    })
    .then((response) => {
      this.setState({
        isLoading: false,
        incidents: response.data.incidents.map(ele => ({
          ...ele,
          occurred_at: ele.occurred_at * 1000,
          updated_at: ele.updated_at * 1000,
        })),
      });
    })
    .catch(() => {
      this.setState({
        isLoading: false,
        isError: true,
      });
    });
  }

  render() {
    const {
      isError, isLoading,
      incidents,
      page,
    } = this.state;
    return (
      <div className="App">
        <Header />
        {isError && !isLoading ? <div className="text-danger">Something went wrong.</div>: null}
        {!isError && isLoading ? <div>Loading...</div> : null}
        {!isError && !isLoading
            ? <Incidents
              incidents={incidents}
              onPageChange={this.onPageChange}
              page={page}
            />
            : null}
      </div>
    );
  }
}

export default App;
