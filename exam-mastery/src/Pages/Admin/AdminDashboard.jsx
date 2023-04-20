import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  useTheme,
  Grid,
  Link,
} from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";

import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
  randomId,
} from "@mui/x-data-grid-generator";
import { yellow } from "@mui/material/colors";

//Display Admin Related Dashbaord to view and manage exams
const AdminDashboard = () => {
  const theme = useTheme();
  const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [editClicked, setEditClicked] = useState(false);

  useEffect(() => {
    getExams().then((data) => {
      console.log("dd:", data);
      setRows(data);
    });
  }, []);

  function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const createdAtDate = new Date();
      const updatedAtDate = new Date();
      const id = parseInt(rows[rows.length - 1].id) + 1;
      setRows((oldRows) => [
        ...oldRows,
        {
          id,
          title: "",
          date: "",
          type: "",
          createdAt: createdAtDate,
          updatedAt: updatedAtDate,
          isNew: true,
        },
      ]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: "title" },
      }));
    };

    return (
      <GridToolbarContainer>
        <Button
          style={{ color: "white", backgroundColor: "violet" }}
          startIcon={<AddIcon />}
          onClick={handleClick}
        >
          CREATE TEST
        </Button>
      </GridToolbarContainer>
    );
  }

  EditToolbar.propTypes = {
    setRowModesModel: PropTypes.func.isRequired,
    setRows: PropTypes.func.isRequired,
  };

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    setEditClicked(true);
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
    fetch(`http://localhost:8080/exam-mastery/deleteTest?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // handle the response
        if (response.ok) {
          console.log("Row deleted successfully!");
          alert("row deleted");
        } else {
          console.error("Error deleting row:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error deleting row:", error);
      });
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedAtDate = new Date();
    const updatedRow = {
      ...newRow,
      title: newRow.title,
      type: newRow.type,
      date: newRow.date,
      isNew: false,
    };
    const updatedRowEdit = {
      ...newRow,
      title: newRow.title,
      type: newRow.type,
      date: newRow.date,
      updatedAt: updatedAtDate,
      isNew: false,
    };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    if (editClicked) {
      fetch("http://localhost:8080/exam-mastery/updateTest", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRowEdit),
      })
        .then((response) => {
          // handle the response
          if (response.ok) {
            console.log("Row updated successfully!");
            // alert("row added");
          } else {
            console.error("Error updated row:", response.status);
          }
        })
        .catch((error) => {
          console.error("Error updating row:", error);
        });
      setRows(rows.map((row) => (row.id === newRow.id ? updatedRowEdit : row)));
      return updatedRowEdit;
    } else {
      fetch("http://localhost:8080/exam-mastery/createTest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRow),
      })
        .then((response) => {
          // handle the response
          if (response.ok) {
            console.log("Row added successfully!");
            alert("row added");
          } else {
            console.error("Error adding row:", response.status);
          }
        })
        .catch((error) => {
          console.error("Error adding row:", error);
        });
      return updatedRow;
    }
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      editable: true,
    },
    {
      field: "type",
      headerName: "Type",
      headerAlign: "left",
      align: "left",
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
      editable: false,
    },
    {
      field: "updatedAt",
      headerName: "Updated At",
      flex: 1,
      editable: false,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
};

function getExams() {
  return new Promise((resolve, reject) => {
    const data = "";
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        //console.log("errrr:",this);
        resolve(JSON.parse(this.responseText));
      }
    });

    xhr.open("GET", "http://localhost:8080/exam-mastery/getTests");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
  });
}

export default AdminDashboard;
