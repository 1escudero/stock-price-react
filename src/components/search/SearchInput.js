import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component {
    state = { result: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.result);
    }

    onFormChange = (event) => {
        this.setState({ result: event.target.value })
    }

    render() {
        return (
            <div className="ui segment">
                <label>Type in a company stock ticker symbol :)</label>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui fluid big icon input">
                        <input type="text" placeholder="Write a stock ticker like: GOOG, FB, BERK etc..." onChange={this.onFormChange} value={this.state.result} />
                        <i className="circular search link icon" />
                    </div>
                </form>
            </div>

        );
    }
}

export default SearchInput;