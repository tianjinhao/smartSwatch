import React, { Component } from 'react';
import { Empty } from 'antd';
import { ListEmpty } from './listStyle'
class ListNull extends Component {
  render() {
    return (
      <ListEmpty>
        <Empty />
      </ListEmpty>
    );
  }
}

export default ListNull;