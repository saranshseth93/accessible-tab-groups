import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

import { connect } from "react-redux";
import { updateActiveTab } from "../redux/global/global.action";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    //tab id from url
    let urlTab = window.location.hash;

    //Remove the # from the tab id
    urlTab = urlTab.replace("#", "");
    // console.log(urlTab);

    //Set the active tab according to the most relevant conditions if all empty set the first one as active
    this.state = {
      activeTab:
        urlTab !== ""
          ? urlTab
          : localStorage.getItem("activeTab") !== null
          ? localStorage.getItem("activeTab")
          : this.props.children[0].props.label,
    };

    //Update the active tab to reflect the changes in the selected tab panel aria settings
    if (urlTab !== "") {
      this.props.updateActiveTab(urlTab);
    } else if (localStorage.getItem("activeTab") !== null) {
      this.props.updateActiveTab(localStorage.getItem("activeTab"));
    } else {
      this.props.updateActiveTab(this.props.children[0].props.label);
    }
  }

  onClickTabItem = (tab) => {
    //Change the active tab on click
    this.setState({ activeTab: tab });

    //Add the clicked tab to local storage to retain it on refresh
    localStorage.setItem("activeTab", tab);
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list" role="tablist">
          {children.map((child) => {
            const { label, tabid } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                tabid={tabid}
              />
            );
          })}
        </ol>
        <div className="tab-content" role="presentation">
          {children.map((child) => {
            if (child.props.label !== activeTab) {
              return undefined;
            } else {
              return child.props.children;
            }
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateActiveTab: (ariaHidden) => dispatch(updateActiveTab(ariaHidden)),
});

const mapStateToProps = (state) => ({
  ariaHidden: state.global.ariaHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
