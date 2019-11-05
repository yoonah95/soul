import React from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Box, Typography, makeStyles, Container } from '@material-ui/core';

import { purple, grey } from '@material-ui/core/colors';
import image from '../images/icons8-eggplant-48.png'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://eoghks0521.tistory.com/">
        STONES
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      //backgroundColor: theme.palette.common.white,
      backgroundColor: grey[50]
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    //backgroundColor: grey[0],
  },
  avatar: {
    margin: theme.spacing(1),
    color: '#fff',
    width: 85,
    height: 85,
    backgroundColor: grey[500],
    pointerEvents: 'auto',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[900],
  },
  textField: {
    '& input:invalid + fieldset': {
      borderColor: purple[900],
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
  divv:{
    cursor: 'pointer',
  },
}));


export default class Profile extends React.Component {
  handleClick = () => {
  }

  A = () => {
    const classes = useStyles()


    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <div className={classes.divv}>
            <Avatar alt="Remy Sharp" onClick={this.handleClick} src={image} className={classes.avatar} />
          </div>
          <Typography variant="h6">프로필 사진</Typography>
          <form className={classes.form} noValidate>
            <TextField
              className={classes.textField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nickname"
              label="별명"
              name="nickname"
              autoComplete="nickname"
              autoFocus
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="goal"
              label="목표"
              id="goal"
              autoComplete="current-goal"
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="status"
              label="상태"
              id="status"
              autoComplete="current-status"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              //color="#673ab7"
              className={classes.submit}
            >
              수정 완료
            </Button>

          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    )
  }
  render() {
    return (
      < this.A />
    )
  }

}


