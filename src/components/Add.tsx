import React, { useState } from "react";
import {savePerson } from "../store/features/personSlice";
import { useAppDispatch } from "../store/store";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Add = () => {
    const [name, setName] = useState('')
    const dispatch = useAppDispatch();
    const AddPerson = () => {
        dispatch(savePerson(name))
        setName('')
    }
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
         <TextField id="outlined-basic" label="Person Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
         <Button variant="contained" onClick={() => AddPerson()}>Add</Button>

      </Box>
    );
}

export default Add;