import React from "react";
import { Table } from 'reactstrap';

function Stat({ stat }) {
    return (
        <Table responsive dark>
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{stat.Country}</td>
                    <td>{stat.TotalConfirmed}</td>
                    <td>{stat.TotalRecovered}</td>
                    <td>{stat.TotalDeaths}</td>
                </tr>
            </tbody>
        </Table>
    )
};

export default Stat;
