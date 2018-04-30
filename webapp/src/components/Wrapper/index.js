import React, { Component } from 'react';
import styled from 'react-emotion';
import SampleThreeComponent from '../SampleThreeComponent'
import LoadedModel from '../LoadedModel'

class Wrapper extends Component {


  render() {

    const Container = styled('div')`
        text-align: center;
        font-size: 42px;
        color: #495057;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 3s linear forwards;
        @keyframes fadeinout {
          0%,100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes fadein {
          0% { opacity: 0; }
          50% { opacity: 1; }
        }
    `

    return (
      <div>
        <Container>
          <SampleThreeComponent />
        </Container>
      </div>
    );
  }
}

export default Wrapper;
