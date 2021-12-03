import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { getStudent } from "../../features/studentSlice";
import {useParams} from 'react-router-dom'
import { useEffect, } from "react";
import { useDispatch } from "react-redux";
const Student = () => {
  const dispatch=useDispatch()
  const params=useParams()
  useEffect(()=>{
    dispatch(getStudent(params.id))

  },[])
  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
        Subroto Biswas
      </Typography>

      <Typography variant="h5" gutterBottom>
        +91 111 1111 111
      </Typography>
      <Typography variant="h5" gutterBottom>
        toofanicoder@example.com
      </Typography>
      <Typography variant="h5" gutterBottom>
        Ranchi,Jharkhand
      </Typography>
    </Paper>
  );
};

export default Student;
