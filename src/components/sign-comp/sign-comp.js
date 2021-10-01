import React from 'react';
import Container from '@mui/material/Container';
import { Avatar, Button, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignComponent = ({title, helperTextPassword, helperTextUsername, accountExists, href})=>{

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
          username: data.get('username'),
          password: data.get('password'),
        });
      };

    return (
        <Container maxWidth='xs' sx={{p:1,backgroundColor: 'background.paper', borderRadius:4, border:1, boxShadow: 3, m:0}}>
            <CssBaseline>
                <Box sx={{
                    marginTop:4,
                    display: 'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                    
                }}>
                    <Avatar sx={{m:1, bgColor:'#FFF'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5' component='h1'>
                        {title}
                    </Typography>

                    <Box component='form' noValidate onSubmit={handleSubmit} sx={{mt:3}}>

                        <Grid container spacing={2} >

                            <Grid item  sm={12}>
                            <TextField autoComplete="username"
                                    name="username"
                                    required
                                    fullWidth
                                    id="UserName"
                                    label="Username"
                                    autoFocus
                                    helperText={helperTextUsername?helperTextUsername:''}
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
                                    helperText={helperTextPassword?helperTextPassword:''}
                                    />
          

                            </Grid>

                        </Grid>
                        <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                         >
                                {title}
                        </Button>
                        {accountExists?
                        (<Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href={href} variant="body2">
                                   {accountExists}
                                    </Link>
                                </Grid>
                          </Grid>) : null
                        }


                    </Box>
                </Box>

            </CssBaseline>
        </Container>
        
    )
    

}

export default SignComponent;