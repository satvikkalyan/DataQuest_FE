import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData(1,"Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData(2,"Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData(3,"Eclair", 262, 16.0, 24, 6.0),
    createData(4,"Cupcake", 305, 3.7, 67, 4.3),
    createData(5,"Gingerbread", 356, 16.0, 49, 3.9),
    createData(6,"Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData(7,"Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData(8,"Eclair", 262, 16.0, 24, 6.0),
    createData(9,"Cupcake", 305, 3.7, 67, 4.3),
    createData(10,"Gingerbread", 356, 16.0, 49, 3.9),
    createData(11,"Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData(12,"Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData(13,"Eclair", 262, 16.0, 24, 6.0),
    createData(14,"Cupcake", 305, 3.7, 67, 4.3),
    createData(15,"Gingerbread", 356, 16.0, 49, 3.9),
];

function UserViewTable() {  
    const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Modify/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
                <IconButton color="primary" onClick={()=>navigate(`${row.id}`)}>
                  <NavigateNextIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserViewTable;
