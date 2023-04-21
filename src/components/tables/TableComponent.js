import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: "jobId", label: "Job Id", minWidth: 100 },
  { id: "jobName", label: "Job Name", minWidth: 170 },
  { id: "description", label: "Description", minWidth: 170 },
  { id: "salary", label: "Salary", minWidth: 100 },
  { id: "company", label: "Company", minWidth: 170 },
  { id: "skills", label: "Skills To Learn", minWidth: 170 },
  { id: "navigate", label: "", minWidth: 50 },
];

function createData(
  jobId,
  jobName,
  description,
  salary,
  company,
  skills,
  navigate
) {
  return { jobId, jobName, description, salary, company, skills, navigate };
}

const rows = [
  createData(
    1,
    "Job 1",
    "Description 1",
    1000,
    "Company A",
    "Skill A, Skill B",
    ""
  ),
  createData(
    2,
    "Job 2",
    "Description 2",
    2000,
    "Company B",
    "Skill B, Skill C",
    ""
  ),
  createData(
    3,
    "Job 3",
    "Description 3",
    3000,
    "Company C",
    "Skill C, Skill D",
    ""
  ),
  createData(
    4,
    "Job 4",
    "Description 4",
    4000,
    "Company D",
    "Skill D, Skill E",
    ""
  ),
  createData(
    5,
    "Job 5",
    "Description 5",
    5000,
    "Company E",
    "Skill E, Skill F",
    ""
  ),
  createData(
    6,
    "Job 6",
    "Description 6",
    6000,
    "Company F",
    "Skill F, Skill G",
    ""
  ),
  createData(
    7,
    "Job 7",
    "Description 7",
    7000,
    "Company G",
    "Skill G, Skill H",
    ""
  ),
  createData(
    8,
    "Job 8",
    "Description 8",
    8000,
    "Company H",
    "Skill H, Skill I",
    ""
  ),
  createData(
    9,
    "Job 9",
    "Description 9",
    9000,
    "Company I",
    "Skill I, Skill J",
    ""
  ),
  createData(
    10,
    "Job 10",
    "Description 10",
    10000,
    "Company J",
    "Skill J, Skill K",
    ""
  ),
  createData(
    11,
    "Job 11",
    "Description 11",
    11000,
    "Company K",
    "Skill K, Skill L",
    ""
  ),
  createData(
    12,
    "Job 12",
    "Description 12",
    12000,
    "Company L",
    "Skill L, Skill M",
    ""
  ),
];

export default function BasicTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const navigate = useNavigate();

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.jobId} hover role="checkbox" tabIndex={-1}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "navigate" ? (
                                <NavigateNextIcon onClick={() => navigate(`/jobs/${row.jobId}`, { state: row })}/>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 8, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
}
