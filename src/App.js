import React from "react";
import Tabs from "./components/Tabs";
import "./App.css";
import "./components/Tabs.css";

import { updateActiveTab } from "./redux/global/global.action";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div>
      <h1>Tab Groups</h1>
      <div className="cypress-wrapper">
        <Tabs>
          <div label="Gator" tabid="tab-1">
            <p
              role="tabpanel"
              id="tab-1"
              aria-labelledby="tab-1-parent"
              aria-hidden={props.ariaHidden !== "true" ? "false" : "true"}
              tabIndex={props.ariaHidden === "true" ? "0" : "-1"}
            >
              See ya later, <em>Alligator</em>! See ya later, <em>Alligator</em>
              !
            </p>
          </div>
          <div label="Croc" tabid="tab-2">
            <p
              role="tabpanel"
              id="tab-2"
              aria-labelledby="tab-2-parent"
              aria-hidden={props.ariaHidden !== "true" ? "false" : "true"}
              tabIndex={props.ariaHidden === "true" ? "0" : "-1"}
            >
              After 'while, <em>Crocodile</em>!
            </p>
          </div>
          <div label="Dog" tabid="tab-3" aria-labelledby="tab-3-parent">
            <p
              role="tabpanel"
              id="tab-3"
              aria-hidden={props.ariaHidden !== "true" ? "false" : "true"}
              tabIndex={props.ariaHidden === "true" ? "0" : "-1"}
            >
              Nothing to see here, this tab is not <em>Crocodile</em>!
            </p>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateActiveTab: (tabID) => dispatch(updateActiveTab(tabID)),
});

const mapStateToProps = (state) => ({
  ariaHidden: state.global.ariaHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
