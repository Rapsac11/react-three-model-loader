import React, { Component } from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import { updatePosInfo } from '../../someOtherReducer'
import Wrapper from '../Wrapper'

class ControlledItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  _updatePosInfo(item, direction) {
    const { updatePosInfo } = this.props
    updatePosInfo(item, direction)
  }

  render() {

    const VariableContainer = styled('div')`
        text-align: center;
        display: inline-block;
        width: 100px;
        height: 100px;
        font-size: 10px;
        color: #fff;
    `

    const VariableButtonUp = styled('div')`
        text-align: center;
        display: block;
        width: 100px;
        height: 20px;
        font-size: 10px;
        background-color: #fff;
        color: #808080;
    `

    const VariableButtonDown = styled('div')`
        text-align: center;
        display: block;
        width: 100px;
        height: 20px;
        font-size: 10px;
        background-color: #fff;
        color: #808080;
    `

    const VariableName = styled('div')`
        text-align: center;
        display: block;
        width: 100px;
        height: 20px;
        font-size: 10px;
        color: #fff;
    `

    const VariableDisplay = styled('div')`
        text-align: center;
        display: block;
        width: 100px;
        height: 20px;
        font-size: 10px;
        color: #fff;
    `

    const { displayVariables, item } = this.props
    return (
      <VariableContainer>
        <VariableName>
          {item}
        </VariableName>
        <VariableButtonUp
          item={item}
          onClick={() => this._updatePosInfo(item,'up')}
        >
          +
        </VariableButtonUp>
        <VariableDisplay>
          {displayVariables[item]}
        </VariableDisplay>
        <VariableButtonDown
          item={item}
          onClick={() => this._updatePosInfo(item,'down')}
        >
          -
        </VariableButtonDown>
      </VariableContainer>
    );
  }
}

export default connect(
  state => ({
    displayVariables: state.someOtherReducer.displayVariables
  }),
  {
    updatePosInfo
  }
)(ControlledItem)
