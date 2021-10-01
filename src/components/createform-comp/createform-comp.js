import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Typography } from '@mui/material';

const CreateFormDialog =()=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
      console.log(e.target);
    setOpen(false);
  };
  

  return (
    <div>
        <Button variant="contained" size="large" sx={{borderRadius:''}} 
        startIcon={<AddOutlinedIcon />} onClick={handleClickOpen} >
                Create task
        </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
            <Typography variant='h3' sx={{fontWeight:700, fontFamily: 'Nunito',fontSize: 'h4.fontSize'}}>
            Create a new task
            </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{mb:1.5}}>
            Please provide information about task you wish to create.
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
          
            fullWidth
            variant="outlined"
          />
          
          
          <TextField
            
            margin="dense"
            id="description"
            label="Description"
            type="text"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}
              
          
            sx={{mr:1.5}}
          >Submit</Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateFormDialog;