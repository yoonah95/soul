import React, { useImperativeHandle } from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputAdornment from "@material-ui/core/InputAdornment"
import TextField from "@material-ui/core/TextField"
import AccountCircle from "@material-ui/icons/AccountCircle"
import SearchIcon from "@material-ui/icons/Search"
import Button from "@material-ui/core/Button"
const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "#f5f5f5",
    },
  },

  margin: {
    margin: theme.spacing(1),
    top: 20,
  },
}))

export default class GroupInvite extends React.Component {
  try = () => {
    return alert("검색")
  }

  tryy = () => {
    this.props.history.goBack()
  }

  BB = () => {
    const classes = useStyles()

    return (
      <div>
        <center>
          <div>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <SearchIcon className={classes.margin} onClick={this.try} />
          </div>
          <div>
            <Button
              onClick={this.tryy}
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              뒤로가기
            </Button>
          </div>
        </center>
      </div>
    )
  }
  render() {
    return (
      <div>
        <div>
          <this.BB />
        </div>
      </div>
    )
  }
}
