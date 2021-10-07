import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, Typography, Divider, TextField, InputAdornment } from '@mui/material';

import FilterSelectComponent from '../components/filterSelect-comp/filter-select-comp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CreateFormDialog from '../components/createform-comp/createform-comp';
import DetailPaper from '../components/taskdetail-comp/taskdetail-comp';
///////////
import { filterTasks } from '../redux/actions/filter-task';
import { connect } from 'react-redux';
////////////////////////////////////////////////////////////////

const titleObject = {
  titleFilter: 'Filter by status',
  titleUpdate: 'Update status',
};

function TaskMainPage(props) {
  const { filterTasks } = props;

  const handleChangeSearch = (event) => {
    filterTasks(event.target.value, undefined);
  };
  return (
    <React.Fragment>
      <CssBaseline>
        <Box sx={{ backgroundColor: '#926E6F' }}>
          <Container
            maxWidth="md"
            sx={{
              boxShadow: 3,
              borderRadius: 4,
              borderColor: 'primary.main',
              backgroundColor: '#FAEEE0',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                minHeight: '100vh',
              }}
            >
              <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Grid item>
                  <Typography
                    component="h1"
                    variant="h3"
                    sx={{
                      fontWeight: 500,
                      fontStyle: 'normal',
                      fontFamily: 'Nunito',
                      borderRadius: 4,
                      // border: 1,
                      bgcolor: 'rgba(255, 255, 255)',
                      boxShadow: 3,
                    }}
                  >
                    Dashboard
                  </Typography>
                </Grid>
                <Grid item>
                  <CreateFormDialog />
                </Grid>
              </Grid>
              <Divider />
              <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 1 }}
              >
                <Grid item>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Search"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="filled"
                    onChange={handleChangeSearch}
                    size="small"
                  />
                </Grid>
                <Grid item>
                  <FilterSelectComponent title={titleObject.titleFilter} defaultStatus="" />
                </Grid>
              </Grid>

              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                sx={{ mt: 2, p: 1 }}
              >
                <DetailPaper />
              </Grid>
            </Box>
          </Container>
        </Box>
      </CssBaseline>
    </React.Fragment>
  );
}

export default connect(null, { filterTasks })(TaskMainPage);
