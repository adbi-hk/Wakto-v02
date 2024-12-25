"use client"
import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen} className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-full'>
        Add Task
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <div className='width-30 '></div>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="Title"
            label="Title"
            fullWidth
            
            
          />
          
          <TextField
            className='mb-5'
            autoFocus
            required
            margin="dense"
            id="fdate"
            name="Date"
            label="Finish date"
            type='Date'
            fullWidth
            
          />
          
          
          <Box sx={{ minWidth: 120 }} className='bt-5'>
            <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem >Home </MenuItem>
                    <MenuItem >School</MenuItem>
                    <MenuItem >Work</MenuItem>
                    <MenuItem >Hobby</MenuItem>
                  </Select>
            </FormControl>
    </Box>
    
    <Box sx={{ minWidth: 120 }} className='mt-4'>
            <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Priority"
                    onChange={handleChange}
                  >
                    <MenuItem >Critical </MenuItem>
                    <MenuItem >Normal</MenuItem>
                    <MenuItem >Minor</MenuItem>
                  </Select>
            </FormControl>
    </Box>


          <TextField
            autoFocus
            required
            margin="dense"
            id="Description"
            name="Descreption"
            label="Task description"
            fullWidth
            
          />
          <input
            type="file"
            className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          />
          
          
          
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Done</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

