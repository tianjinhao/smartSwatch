import React, { Component } from 'react';
import GoodDetailUi from '../ui/GoodDetailUi'
import http from '@u/http'


class GoodDetail extends Component {
  constructor(props) {
    super(props)
    this.Data = props.location.state.value;
    this.state = {
      modelData : [],
      evaluateData: [],
      evaluateAllData: []
    }
  }

  async loadModelData() {
    const res = await http.get("/commodity/getSameTypeCommodity", { params: { commodityId : this.Data.commodityId } })
    this.setState({
      modelData: res.data
    })
    const evaluateData = await http.get('/evaluate/getCommodityEvaluateDetail', { params: { commodityId: this.Data.commodityId } })
    this.setState({
      evaluateData: evaluateData.data
    })
    console.log(evaluateData);
    const evaluateAllData = await http.get('/evaluate/getCommodityEvaluate', { params: { commodityId: this.Data.commodityId, limit: 5, offset: 1, evaluateType: 0 } })
    this.setState({
      evaluateAllData: evaluateAllData.data
    })
    
  }

  handleEvaluateType = async (type) => {
    const evaluateAllData = await http.get('/evaluate/getCommodityEvaluate', { params: { commodityId: this.Data.commodityId, limit: 5, offset: 1, evaluateType: type } })
    this.setState({
      evaluateAllData: evaluateAllData.data
    })
    console.log(evaluateAllData);
  }



  componentDidMount() {
    this.loadModelData()
  }


  render() {
    return (
      <GoodDetailUi 
        goodDetailData={this.Data} 
        modelData={this.state.modelData}
        evaluateData={this.state.evaluateData}
        evaluateAllData={this.state.evaluateAllData}
        onEvaluateType={this.handleEvaluateType}
      ></GoodDetailUi>
    );
  }
}

export default GoodDetail;