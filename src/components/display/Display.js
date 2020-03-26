import React from 'react';
import NumberFormat from 'react-number-format';

class Display extends React.Component {

    render() {
        return (
            <div className="ui divided items">
                <h4 className="ui horizontal divider header">Stock Information:</h4>
                <table className="ui definition table">
                    <tbody>
                        <tr>
                            <td className="two wide column">
                                Stock Symbol:
                            </td>
                            <td>
                                {this.props.stockInfo.symbol}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                24hrs Open price:
                            </td>
                            <td>
                                <NumberFormat value={this.props.stockInfo.open} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                24hrs Highest price:
                            </td>
                            <td>
                                <NumberFormat value={this.props.stockInfo.high} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                24hrs Lowest price:
                            </td>
                            <td>
                                <NumberFormat value={this.props.stockInfo.low} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                24hrs Current price:
                            </td>
                            <td>
                                <NumberFormat value={this.props.stockInfo.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                24hrs Trade volume:
                            </td>
                            <td>
                                <NumberFormat value={this.props.stockInfo.volume} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                24hrs Price change:
                            </td>
                            <td>
                                <NumberFormat value={this.props.stockInfo.change} displayType={'text'} thousandSeparator={true} suffix={'%'} />
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Display;