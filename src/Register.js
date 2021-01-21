import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import nodp from "./nodp.jpg"
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { auth ,db} from "./firebase";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "./newlogo.png";
import { useHistory } from "react-router-dom";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import "./Register.css"

// function check() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">

//       <Link color="inherit" href="https://material-ui.com/">
//         We Share
//       </Link>
//       {new Date().getFullYear()}

//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    top: 0,
  },
  gender: {
    display: "inline",
  },
}));

export default function Register() {
  const classes = useStyles();
  const history = useHistory("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState([]);
  const [gender, setGender] = useState("");
  const register = (e) => {
      e.preventDefault();
       
      auth.createUserWithEmailAndPassword(email, password)
          .then((auth) => {
              if (auth.user) {
                  auth.user.updateProfile({
                      displayName: firstName + " " + lastName,
                      photoURL: "https://icon2.cleanpng.com/20180402/qye/kisspng-computer-icons-user-login-gender-5ac29ccd8f04c2.0984432615227035655858.jpg"
                  }).then((data) => {
                      db.collection('users').doc(auth.user.uid).set({
                          uid: auth.user.uid,
                          displayName: auth.user.displayName,
                          email: auth.user.email,
                          photoURL: "https://icon2.cleanpng.com/20180402/qye/kisspng-computer-icons-user-login-gender-5ac29ccd8f04c2.0984432615227035655858.jpg",
                          birthday,
                          gender,
                          bio:""
                      }) 
                      .then((r) => {
                        history.push("/login")
                  })
              })
          }
      })
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={Logo} className={classes.logo} />
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="birthday"
                type="date"
                id="birthday"
                autoComplete="current-password"
                onChange={(e) => setBirthday(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                defaultValue="female"
                aria-label="gender"
                name="customized-radios"
                className={classes.gender}
                required
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                  className={classes.gender}
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                  className={classes.gender}
                />
              </RadioGroup>
            </Grid>
            <Grid item>
              <p>
                By clicking Sign Up, you agree to our{" "}
                <a href="/">Terms, Data Policy</a> and{" "}
                <a href="/">Cookie Policy</a>. You may receive SMS notifications
                from us and can opt out at any time.
              </p>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={register}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
        <check />
      </Box> */}
    </Container>
  );
}
