import React, { useState } from "react";
import "../index.css"
import { Form, FormGroup, Input } from 'reactstrap';
import { connect } from "react-redux";
import Stat from "./Stat";

function CovidStats(props) {

    const [search, setSearch] = useState('')

    const filteredCountries = props.stats.filter(country => {
        return country.Country.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="table">
            <div className="search">
                <div>
                    <Form>
                        <FormGroup style={{ display: "flex", justifyContent: "center", margin: "5%" }}>
                            <Input style={{ width: "30%", textAlign: "center" }} type='text' placeholder='Enter a country name' onChange={e => setSearch(e.target.value)} />
                        </FormGroup>
                    </Form>
                </div>
            </div>
            <div>{filteredCountries.map((stat) => {
                return <Stat key={stat.Country} stat={stat} />;
            })}</div>
        </div>
    );

}

function mapStateToProps(state) {
    return {
        stats: state.stats
    };
}

export default connect(mapStateToProps, {})(CovidStats);
