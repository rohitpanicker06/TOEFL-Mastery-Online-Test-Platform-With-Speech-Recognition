import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockAdminData } from "../../data/mockAdminData";
import Header from "../../Components/Header/Header";
import { useEffect, useState } from "react";
import * as React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
  randomId,
} from '@mui/x-data-grid-generator';


const ManageExams = () => {
  const theme = useTheme();
  //const [exams, setExams] = useState([]);
  const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [editClicked, setEditClicked] = useState(false);

  useEffect(() => {
    getStudents().then((data) => {
      console.log("ddstu:",data);
      setRows(data);
    });
  }, []);

  
function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  // const handleClick = () => {
  //   const id = parseInt(rows[rows.length-1].id) + 1;
  //   setRows((oldRows) => [...oldRows, { id, firstname: '', lastname: '', password: '', email:'', isNew: true }]);
  //   setRowModesModel((oldModel) => ({
  //     ...oldModel,
  //     [id]: { mode: GridRowModes.Edit, fieldToFocus: 'firstname' },
  //   }));
  // };
  // return (

  //   <GridToolbarContainer>
  //     <Button style= {{color:"white", backgroundColor:"violet"}} startIcon={<AddIcon />} onClick={handleClick}>
  //       CREATE STUDENT
  //     </Button>
  //   </GridToolbarContainer>

  // );
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
    fetch(`http://localhost:8080/exam-mastery/deleteStudents?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
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
    const updatedRow = { ...newRow, firstname:newRow.firstname, lastname: newRow.lastname, password:newRow.password,email:newRow.email,isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    if(editClicked) {
      fetch("http://localhost:8080/exam-mastery/updateStudents", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRow),
      })
        .then((response) => {
          // handle the response
          if (response.ok) {
            console.log("Row updated successfully!");
            alert("row added");
          } else {
            console.error("Error updated row:", response.status);
          }
        })
        .catch((error) => {
          console.error("Error updating row:", error);
        });
    }
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      headerAlign: "left",
      align: "left",
      editable: true,
    },
    {
      field: "password",
      headerName: "Password",
      flex: 1,
      editable: true,
      
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
      
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
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
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
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

function getStudents() {
  return new Promise((resolve, reject) => {
    const data = "";
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        //console.log("errrr:",this);
        resolve(JSON.parse(this.responseText));
      }
    });

    xhr.open("GET", "http://localhost:8080/exam-mastery/getStudents");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
  });
}

export default ManageExams;