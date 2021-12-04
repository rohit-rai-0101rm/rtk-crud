import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";

import { clearStudent, getStudent } from "../../features/studentSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Student = () => {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getStudent(params.id));
    return () => {
      dispatch(clearStudent());
    };
  }, []);
  const student = useSelector((state) => state.student.student);
  const { firstName, lastName, email, phone, address } = student;
  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
        {firstName}
        {lastName}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {phone}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {email}{" "}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {address}{" "}
      </Typography>
    </Paper>
  );
};

export default Student;
