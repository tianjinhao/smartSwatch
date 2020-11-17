import React from 'react';

function PayOrder(props) {
  console.log(props.history.location.state.data);
  return (
    <div dangerouslySetInnerHTML={{__html: props.history.location.state.data}}></div>
  );
}

export default PayOrder;