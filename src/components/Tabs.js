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
    urlTab = urlTab.replace("#", "");
    console.log(urlTab);

    this.state = {
      activeTab:
        urlTab != ""
          ? urlTab
          : localStorage.getItem("activeTab") !== null
          ? localStorage.getItem("activeTab")
          : this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });

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
              updateActiveTab(child.props.tabid);
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
