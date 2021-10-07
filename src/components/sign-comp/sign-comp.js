import React from 'react';
import Container from '@mui/material/Container';
import { Avatar, Button, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

/////////    redux imports ///////////////
import { connect } from 'react-redux';
import { signInUser } from '../../redux/actions/signin-user';
import { SignUpUser } from '../../redux/actions/signup-user';

///////////////////////////////////////////

//////react router///////

////////

import { useHistory } from 'react-router';

const SignComponent = (props) => {
  const {
    title,
    helperTextPassword,
    helperTextUsername,
    accountExists,
    href,
    signInUser,
    SignUpUser,
    error,
  } = props;

  let historyPro = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    if (title === 'Sign In') {
      await signInUser(username, password);

      historyPro.push('/main');
    }
    if (title === 'Sign Up') {
      await SignUpUser(username, password);
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        p: 1,
        backgroundColor: 'background.paper',
        borderRadius: 4,
        border: 1,
        boxShadow: 3,
        m: 0,
      }}
    >
      <CssBaseline>
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgColor: '#FFF' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" component="h1">
            {title}
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="UserName"
                  label="Username"
                  autoFocus
                  helperText={helperTextUsername ? helperTextUsername : ''}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  helperText={error ? error : helperTextPassword}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {title}
            </Button>
            {accountExists ? (
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href={href} variant="body2">
                    {accountExists}
                  </Link>
                </Grid>
              </Grid>
            ) : null}
          </Box>
        </Box>
      </CssBaseline>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.signToken.error,
  };
};

export default connect(mapStateToProps, { signInUser, SignUpUser })(SignComponent);
