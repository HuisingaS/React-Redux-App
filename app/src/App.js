import React, { useEffect } from "react";
import { Spinner } from 'reactstrap';
import CovidStats from "./components/CovidStats";
import { connect } from "react-redux";
import { fetchStats } from "./actions";
import "./index.css";

function App({ fetchStats, loadingStats, errorMessage }) {
  useEffect(() => {
    fetchStats();
  }, [fetchStats]);
  return (
    <div className="header">
      <h1>COVID-19</h1>
      {!loadingStats ? <CovidStats /> : <Spinner color="primary" />}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingStats: state.loadingStats,
    errorMessage: state.errorMessage
  };
}
export default connect(mapStateToProps, { fetchStats })(App);
