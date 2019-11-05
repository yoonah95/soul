import React from "react"
import { AppBar, Toolbar, Typography, Button, Avatar } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { DEFAULT_BACKGROUND_COLOR, TITLE } from "../constants"
import { teal } from "@material-ui/core/colors"
import { Link } from "react-router-dom"

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor : teal[100]
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
})

class Header extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ backgroundColor: DEFAULT_BACKGROUND_COLOR }}
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ textDecoration: "none" }}>
                {TITLE}
              </Link>
            </Typography>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button className={classes.button}>등록</Button>
            </Link>
            <Link to="/list" style={{ textDecoration: "none" }}>
              <Button className={classes.button}>목록</Button>
            </Link>
            <Link to="/group" style={{ textDecoration: "none" }}>
              <Button className={classes.button}>그룹</Button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button className={classes.button}>Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
