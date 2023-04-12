import React from 'react';
import axios from 'axios';
import SearchBar from '../Component/SearchBar';

class DrugInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drugInfo: null,
      error: null,
    };
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      url: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
      params: {drug: 'advil'},
      headers: {
        'X-RapidAPI-Key': '4fd660d289msh63b67201ed3a818p185564jsnb5cd3f16dcc6',
        'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(response => {
        this.setState({ drugInfo: response.data });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    <SearchBar/>
    const { drugInfo, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!drugInfo) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Drug Information</h1>
          <p>Drug Name: {drugInfo.drug_name}</p>
          <p>Active Ingredient: {drugInfo.active_ingredient}</p>
          <p>Manufacturer: {drugInfo.manufacturer}</p>
          {/* Add more data here */}
        </div>
      );
    }
  }
}

export default DrugInfo;
