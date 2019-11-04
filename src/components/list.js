import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import update from 'react-addons-update';
import Egg from './list/egg';
import "./list/list.css";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eggs : [{
          eggTitle : "할 일 목록1",
          deadline : "7일",
          todos : [
            {content: "동해물과 백두산이 마르고 닳도록", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "울릉도 동남쪽 뱃길 따라 이백리", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "아름다운 이 땅에 금수강산에", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."}
          ],
          penalty : "미정",
          group : "STONES",
          createdDate : "2019/01/01 오후 10:10",
          visible : true
        },
        {
          eggTitle : "To-do List 1",
          deadline : "30일",
          todos : [
            {content: "Spooky scary skeleton", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "Beep beep I'm a sheep", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."},
            {content: "So very totally cool", complete: "미완료", done: "완료했을 경우 버튼을 클릭하세요."}
          ],
          penalty : "4 dollar",
          group : "HANSUNG",
          createdDate : "2019/02/02 오전 11:11",
          visible : true
        }
      ]
    }
  }

  selectGroup = e => {
    var groupName = e.target.value;
    var egg = this.state.eggs;
    var idx = [0, 1];
    idx.map(i => {
      if(egg[i].group !== groupName) {
        this.setState({
          eggs: update(
            this.state.eggs,
            {
              [i]: {
                visible: {$set: false}
              }
            }
          )
        });
      } else {
        this.setState({
          eggs: update(
            this.state.eggs,
            {
              [i]: {
                visible: {$set: true}
              }
            }
          )
        });
      }
      return(0);
    })
  }

  render() {
    var egg = this.state.eggs;
    var idx = [0, 1];

    return (
      <div>
        <Typography variant="h3" align="center">내 에그 목록</Typography>
        <hr />
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          <p>그룹 : </p>
          <select onChange={this.selectGroup.bind(this)}>
            <option value="groupAll">전체</option>
            {idx.map(i => {
              return(<option value={egg[i].group}>{egg[i].group}</option>);
            })}
          </select>
          <p>마감 : </p>
          <select>
            <option value="deadlinAll">전체</option>
            <option value="end">완료</option>
            <option value="notEnd">진행중</option>
          </select>
          <p>정렬 : </p>
          <select>
            <option value="regDesc">등록 날짜 내림차순</option>
            <option value="regAsc">등록 날짜 오름차순</option>
            <option value="deadlineDesc">남은 일수 내림차순</option>
            <option value="deadlineAsc">남은 일수 오름차순</option>
          </select>
        </Grid>
        <hr />
        <Grid
          container justify="center"
          spacing={3}
          direction="column"
          alignItems="center">
          {idx.map(i => {
            if(egg[i].visible) {
              return(<Egg
                oneEgg = {egg[i]}
              ></Egg>);
            } else {
              return(null);
            }
          })}

        </Grid>
      </div>
    )
  }
}