import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectComponent = (props) => {
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <FormControl
      variant="filled"
      size="small"
      sx={{ m: 1, minWidth: 170, mr: 0, ml: 0 }}
    >
      <InputLabel id="demo-simple-select-helper-label">
        {props.title}
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={status}
        label="Filter"
        onChange={handleChange}
        placeholder="Filter"
      >
        <MenuItem value={"PROGRESS"}>Progress</MenuItem>
        <MenuItem value={"OPEN"}>Open</MenuItem>
        <MenuItem value={"DONE"}>Done</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
