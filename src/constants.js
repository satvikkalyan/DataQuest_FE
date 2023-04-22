export const userObjTemplate = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  title: "",
  company: null,
  job_rating: null,
  passphrase: null,
  salary: null,
  salary_type: null,
  user_id: '',
  isAdmin: false
};

export const APIURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

export const columns = [
  { id: "jobId", label: "Job Id", minWidth: 100 },
  { id: "jobTitle", label: "Job Name", minWidth: 170 },
  { id: "jobDescription", label: "Description", minWidth: 170 },
  { id: "avgSalary", label: "Salary", minWidth: 100 },
  { id: "company", label: "Company", minWidth: 170 },
  { id: "skills", label: "Skills To Learn", minWidth: 170 },
  { id: "navigate", label: "", minWidth: 50 },
];
