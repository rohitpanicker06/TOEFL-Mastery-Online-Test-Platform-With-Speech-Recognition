import React from "react";
import BarChart from "../../Components/Scoreboard/BarChart";
import PropTypes from "prop-types";
import { Card, CardHeader, Box } from "@mui/material";

// SectionWiseComparisonChart.propTypes = {
//   title: PropTypes.string,
//   subheader: PropTypes.string,
//   chartData: PropTypes.array.isRequired,
//   chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

const SectionWiseComparisonChart = ({
  title,
  subheader,
  chartLabels,
  chartData,
  ...other
}) => {
  const chartOptions = {
    chart: {
      id: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    fill: { opacity: 1 },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "Test Score",
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    tooltip: {
      enabled: false,
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <BarChart
          type="bar"
          series={chartData}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
};

export default SectionWiseComparisonChart;
