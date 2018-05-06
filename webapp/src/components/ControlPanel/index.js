import React, { Component } from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import { updateControls } from '../../actions'
import Wrapper from '../Wrapper'
import ControlledItem from '../ControlledItem'

class ControlPanel extends Component {

  render() {

    const Panel = styled('div')`
        text-align: center;
        width: 600px;
        height: 150px;
        font-size: 42px;
        background-color: #808080;
    `

    return (
      <Panel>
        <ControlledItem
        item="vectorX"
        />
        <ControlledItem
        item="vectorY"
        />
        <ControlledItem
        item="vectorZ"
        />
        <ControlledItem
        item="quarternionVectorX"
        />
        <ControlledItem
        item="quarternionVectorY"
        />
        <ControlledItem
        item="quarternionVectorZ"
        />
      </Panel>
    );
  }
}

export default connect(
  state => ({
    displayVariables: state.someOtherReducer.displayVariables
  }),
  {
    updateControls
  }
)(ControlPanel)
