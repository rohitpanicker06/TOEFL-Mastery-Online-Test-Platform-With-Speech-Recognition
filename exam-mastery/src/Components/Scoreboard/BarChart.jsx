import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: this.props.options,
      series: this.props.series,
    };
  }

  render() {
    return (
      <div className="app" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div className="mixed-chart" style={{ width: '100%', maxWidth: '700px' }}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="100%"
        />
      </div>
    </div>
    );
  }
}

export default BarChart;
