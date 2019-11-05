import React from 'react';
import { Avatar, Button, CssBaseline, Link, Box, Typography, makeStyles, Container } from '@material-ui/core';

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
            backgroundColor: grey[50]
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        //width: 500,
        backgroundColor: purple[0],
    },
    avatar: {
        margin: theme.spacing(3),
        color: '#fff',
        width: 60,
        height: 60,
        backgroundColor: grey[500],
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
}));

export default function Register() {

    const classes = useStyles();
    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />

            <div className={classes.paper}>
                <Avatar alt="Remy Sharp" src={image} className={classes.avatar} />

                <Typography >
                    {"별명: 가지"}
                </Typography>
                <Typography >
                    {"목표: 성공"}
                </Typography>
                <Typography >
                    {"상태: 좋음"}
                </Typography>


                <Link color="#673ab7" href="/editprofile" variant="body2">
                    <Button
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >
                        프로필 수정
                        </Button>
                </Link>
            </div>

            <Box mt={8}>
                <Copyright />
            </Box>

        </Container>
    );
}