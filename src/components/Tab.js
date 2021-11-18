import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;

    //Run the onclick method passed in from the parent component
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, tabid },
    } = this;

    //Default values for tabs
    let className = "tab-list-item";
    let ariaSelected = false;
    let tabOrder = -1;

    if (activeTab === label) {
      //if the tab is the selected tab then update the values
      className += " tab-list-active";
      ariaSelected = true;
      tabOrder = 0;
    }

    return (
      <li
        id={tabid + "-parent"}
        role="tab"
        aria-selected={ariaSelected}
        className={className}
        onClick={onClick}
        aria-controls={tabid}
        tabIndex={tabOrder}
      >
        {label}
      </li>
    );
  }
}

export default Tab;
