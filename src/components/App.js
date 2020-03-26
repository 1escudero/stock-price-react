import React from 'react';
import alphavantage from '../api/api';
import APIkey from '../api/key';
import SearchInput from './search/SearchInput';
import Display from './display/Display';

class App extends React.Component {
    state = { symbol: '', open: null, high: null, low: null, price: null, volume: null, change: null }

    onSearchSubmit = async (result) => {
        const response = await alphavantage.get(`/query?function=GLOBAL_QUOTE&symbol=${result}&apikey=${APIkey}`)

        this.setState({
            symbol: response.data["Global Quote"]["01. symbol"],
            open: parseFloat(response.data["Global Quote"]["02. open"]).toFixed(2),
            high: parseFloat(response.data["Global Quote"]["03. high"]).toFixed(2),
            low: parseFloat(response.data["Global Quote"]["04. low"]).toFixed(2),
            price: parseFloat(response.data["Global Quote"]["05. price"]).toFixed(2),
            volume: response.data["Global Quote"]["06. volume"],
            change: parseFloat(response.data["Global Quote"]["10. change percent"]).toFixed(2)
        })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '25px' }}>
                <SearchInput onSubmit={this.onSearchSubmit} />
                <Display stockInfo={this.state} />
            </div>
        );
    }
}

export default App;