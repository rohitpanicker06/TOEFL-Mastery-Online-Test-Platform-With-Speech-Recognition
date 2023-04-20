import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Header from "../../Components/Header/Header";
import { useEffect, useState } from "react";

var members = null;
const TeamMembers = () => {
  const theme = useTheme();
  const [members, setMembers] = useState([]);
  const [email, setEmail] = useState(localStorage.getItem("email"));

  async function getexamhistory() {
    const data = await fetch(
      `http://localhost:8080/exam-mastery/students/${email}/testHistory`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "*",
        },
      }
    );
    const testHistory = await data.json();
    return testHistory.map((historyItem) => ({
      ...historyItem,
      id: historyItem.testId,
    }));
  }

  useEffect(() => {
    getexamhistory().then((data) => {
      console.log("testHistory", data[0].testHistory);
      setMembers(data[0].testHistory);
    });
  }, []);
  const colors = tokens(theme.palette.mode);
  const columns = [
    // { field: "testId", headerName: "Test Id" },
    {
      field: "testType",
      headerName: "Test Type",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "section",
      headerName: "Section",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "score",
      headerName: "Score",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Test History" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={members}
          columns={columns}
          getRowId={(row) => row.testId}
        />
      </Box>
    </Box>
  );
};

function getTeamMembers() {
  return new Promise((resolve, reject) => {
    const data = "";
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        resolve(JSON.parse(this.responseText));
      }
    });

    xhr.open("GET", "http://localhost:8080/exam-mastery/getTeamMembers/");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
  });
}

export default TeamMembers;
