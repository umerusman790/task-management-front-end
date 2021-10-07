import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

///////////////////////////////

import { connect } from 'react-redux';
import { filterTasks } from '../../redux/actions/filter-task';
//////////////////////////////////

const FilterSelectComponent = (props) => {
  const { title, defaultStatus, filterTasks } = props;

  const [status, setStatus] = React.useState(defaultStatus);

  const handleChange = (event) => {
    setStatus((prevStatus) =>
      prevStatus === event.target.value ? prevStatus : event.target.value
    );
  };

  React.useEffect(() => {
    filterTasks(undefined, status);
  }, [status, filterTasks]);

  return (
    <FormControl variant="filled" size="small" sx={{ m: 1, minWidth: 170, mr: 0, ml: 0 }}>
      <InputLabel id="demo-simple-select-helper-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="select"
        value={status}
        label="Filter"
        onChange={handleChange}
        placeholder="Filter"
      >
        <MenuItem value="PROGRESS">Progress</MenuItem>
        <MenuItem value="OPEN">Open</MenuItem>
        <MenuItem value="DONE">Done</MenuItem>
      </Select>
    </FormControl>
  );
};

export default connect(null, { filterTasks })(FilterSelectComponent);
