import React from "react";
import Paper from '@material-ui/core/Paper';
import {withStyles } from '@material-ui/core/styles';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Tooltip from '@material-ui/core/Tooltip';
import update from 'react-addons-update';
import EggInfo from './eggInfo';
import EggSetting from './eggSetting';
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
        createdDate : this.props.oneEgg.createdDate
      }
  }

  getCompletedTime() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var hour = d.getHours()
    var minute = d.getMinutes();

    if(hour > 12) {hour = "오후 " + (hour - 12);}
    else if(hour === 12) {hour = "오후 " + hour;}
    else if(hour === 24) {hour = "오전 " + (hour - 12);}
    else {hour = "오전 " + hour;}

    var result = year + "/" + month + "/" + date + " " + hour + ":" + minute;
    return(result);
  }

  render() {
    const {classes} = this.props;

    var lists = [];
    var idx = [];
    var data = this.state.todos;
    var todoLen = data.length;

    for(var i = 0; i < todoLen; i++) {idx.push(i);}

    idx.map(i => {
      lists.push(<li>{data[i].content}<Tooltip title={data[i].done} placement="top"><input type="button" value={data[i].complete} className="btn" onClick={function() {
        this.setState({
          todos: update(
            this.state.todos,
            {
              [i]: {
                complete: {$set: "완료"},
                done: {$set: "완료날짜 : " + this.getCompletedTime()}
              }
            }
          )
        });
      }.bind(this)}/></Tooltip></li>);
      return(null);
    });

    return (
      <Paper className={classes.paper}>
        <div className="EggTitle"> {this.state.eggTitle} </div>
        <div className="Deadline"> {this.state.deadline} </div>
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
          <EggInfo
            eggTitle = {this.state.eggTitle}
            penalty = {this.state.penalty}
            createdDate = {this.state.createdDate}
          />
          <EggSetting/>
        </div>
        <div className="createdDate">
          {this.state.createdDate} 생성됨
        </div>
      </Paper>
    )
  }
}
export default withStyles(styles)(Egg);