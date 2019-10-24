import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import "./list.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 600,
    padding: 3
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid
      container className={classes.root}
      spacing={2}
    >
      <Grid item xs={12}>
        <Grid
          container justify="center"
          spacing={spacing}
          direction="column"
          alignItems="center"
        >
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <div className="Egg">
                  <div className="EggTitle"> 할 일 목록 </div>
                  <div className="Deadline"> 마감까지 N일 남음 </div>
                  <div className="List">
                    <ul>
                      <li>동해물과 백두산이 마르고 닳도록<button>미완료</button></li>
                      <li>울릉도 동남쪽 뱃길따라 이백리<button>미완료</button></li>
                      <li>아름다운 이 땅에 금수강산에<button>미완료</button></li>
                    </ul>
                  </div>
                  <div className="Group"> 그룹 아이콘 오는 곳 </div>
                  <div className="Penalty"> 벌칙 : 미정 </div>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>spacing</FormLabel>
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                value={spacing.toString()}
                onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
