import React, { Component } from "react";
import THomeUi from "../ui/THomeUi";
import http from "@u/http";

class Thome extends Component {
  state = {
    swiperData: [],
    hotSaleData: [],
    partsData: [],
    hotType: "watch",
    newZoneData: {
      watchRes: [],
      wristRes: [],
      sportsRes: [],
    }
  };
  async loadSwiperData() {
    const res = await http.get("/commodity/getHomePageSlide", {
      params: { count: 5 },
    });
    this.setState({
      swiperData: res.data,
    });
  }

  async loadHotSaleData() {
    const res = await http.post("/commodity/getSpeedDialImage", {
      type_id: 1,
      limit: 6,
      offset: 1,
      products: [1],
    });
    this.setState({
      hotSaleData: res.data,
    });
  }

  async loadNewZoneData() {
    const watchRes = await http.post("/commodity/getSpeedDialImage", {
      type_id: 1,
      limit: 3,
      offset: 1,
      products: [1],
    });
    const wristRes = await http.post("/commodity/getSpeedDialImage", {
      type_id: 1,
      limit: 3,
      offset: 1,
      products: [2],
    });
    const sportsRes = await http.post("/commodity/getSpeedDialImage", {
      type_id: 1,
      limit: 3,
      offset: 1,
      products: [3],
    });


    this.setState({
      newZoneData: {
        watchRes: watchRes.data,
        wristRes: wristRes.data,
        sportsRes: sportsRes.data,
      }
    });
  }


  async loadPartsData() {
    const res = await http.post("/commodity/getSpeedDialImage", {
      type_id: 1,
      limit: 4,
      offset: 1,
      products: [4],
    });
    this.setState({
      partsData: res.data
    })

  }


  componentDidMount() {
    this.loadSwiperData();
    this.loadHotSaleData();
    this.loadNewZoneData();
    this.loadPartsData();
  }

  switchHotHandler = (type) => {
    return async () => {
      let hotTypeStatus = 1;
      switch (type) {
        case "watch":
          hotTypeStatus = 1;
          break;
        case "wrist":
          hotTypeStatus = 2;
          break;
        case "sports":
          hotTypeStatus = 3;
          break;
        default:
          break;
      }
      this.setState({
        hotType: type,
      });

      const res = await http.post("/commodity/getSpeedDialImage", {
        type_id: 1,
        limit: 6,
        offset: 1,
        products: [hotTypeStatus],
      });
      console.log(res);
      this.setState({
        hotSaleData: res.data,
      });
    };
  };

  render() {
    return (
      <THomeUi
        swiperData={this.state.swiperData}
        hotSaleData={this.state.hotSaleData}
        onHotSwitch={this.switchHotHandler}
        hotType={this.state.hotType}
        newZoneData={this.state.newZoneData}
        partsData={this.state.partsData}
      ></THomeUi>
    );
  }
}

export default Thome;
