import React from "react";
import Paper from '@material-ui/core/Paper';
import {withStyles } from '@material-ui/core/styles';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import Tooltip from '@material-ui/core/Tooltip';
import update from 'react-addons-update';
import "./egg.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 600,
    padding: 3,
    marginTop: 20
  },
  control: {
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
});

class Egg extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        eggTitle : this.props.oneEgg.eggTitle,
        deadline : this.props.oneEgg.deadline,
        todos : this.props.oneEgg.todos,
        penalty : this.props.oneEgg.penalty,
        group : this.props.oneEgg.group,
        visible : this.props.oneEgg.visible
      }
  }

  render() {
    const {classes} = this.props;

    var lists = [];
    var idx = [0, 1, 2];
    var data = this.state.todos;

    idx.map(i => {
      lists.push(<li>{data[i].content}<Tooltip title={data[i].done} placement="top"><input type="button" value={data[i].complete} className="btn" onClick={function() {
        this.setState({
          todos: update(
            this.state.todos,
            {
              [i]: {
                complete: {$set: "완료"},
                done: {$set: "완료날짜 : 2019/01/01 오후 10:10"}
              }
            }
          )
        });
      }.bind(this)}/></Tooltip></li>);
      return(0);
    });

    return (
          <Paper className={classes.paper}>
            <div className="EggTitle"> {this.state.eggTitle} </div>
            <div className="Deadline"> 마감까지 {this.state.deadline} 남음 </div>
            <div className="List">
              <ul>
                {lists}
              </ul>
            </div>
            <div className="Group"> {this.state.group}
              <AccountCircleRoundedIcon />
              <AccountCircleRoundedIcon />
            </div>
            <div className="Penalty"> 벌칙 : {this.state.penalty} </div>
            <div className="IconButton">
              <Tooltip title="상세정보" placement="top"><InfoIcon /></Tooltip>
              <Tooltip title="설정" placement="top"><SettingsIcon /></Tooltip>
            </div>
          </Paper>
    )
  }
}
export default withStyles(styles)(Egg);