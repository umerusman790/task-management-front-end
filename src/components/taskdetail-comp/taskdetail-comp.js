import * as React from 'react';

import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import SelectComponent from '../select-comp/select-comp';
import DeleteIcon from '@mui/icons-material/Delete';

////////////////////////////////////////////////////////////////////////////////
import { deleteTask } from '../../redux/actions/delete-task';
import { getAllTask } from '../../redux/actions/getall-task';
import { connect } from 'react-redux';
////////////////////////////////////////////////////////////////////////////////

const titleObject = {
  titleFilter: 'Filter by status',
  titleUpdate: 'Update status',
};

function SimplePaper(props) {
  const { deleteTask, tasks, getAllTask } = props;

  React.useEffect(() => {
    getAllTask();
  }, [getAllTask]);

  const outputTasks = tasks.map((task) => {
    return (
      <Paper
        key={task.id}
        elevation={3}
        sx={{
          width: 1 / 1,
          height: 170,
          m: 1,
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Typography variant="h5" sx={{ fontFamily: 'Nunito', color: '#E48900' }}>
              {task.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ fontFamily: 'Nunito' }}>
              {task.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Grid item>
            <SelectComponent
              title={titleObject.titleUpdate}
              defaultStatus={task.status}
              id={task.id}
            />
          </Grid>
          <Grid item>
            <DeleteIcon
              sx={{ color: '#E48900', mr: 2, ':hover': { cursor: 'pointer', boxShadow: 1 } }}
              onClick={() => deleteTask(task.id)}
            ></DeleteIcon>
          </Grid>
        </Grid>
      </Paper>
    );
  });

  return <React.Fragment>{outputTasks}</React.Fragment>;
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
  };
};

export default connect(mapStateToProps, { deleteTask, getAllTask })(SimplePaper);
