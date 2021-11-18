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
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, tabid },
    } = this;

    let className = "tab-list-item";
    let ariaSelected = false;
    let tabOrder = -1;

    if (activeTab === label) {
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
