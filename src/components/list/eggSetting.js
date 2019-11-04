import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import Tooltip from '@material-ui/core/Tooltip';
import './eggSetting.css';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

class EggSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false,
    }
  }

  handleClickOpen = () => {
    this.setState({open : true});
  };
  handleClose = () => {
    this.setState({open : false});
  };

  render() {
    return (
      <div>
        <Tooltip title="설정" placement="top"><SettingsIcon onClick={this.handleClickOpen.bind(this)} /></Tooltip>
        <Dialog onClose={this.handleClose.bind(this)} aria-labelledby="customized-dialog-title" open={this.state.open}>
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose.bind(this)}>
          에그 설정
        </DialogTitle>
        <DialogContent dividers>
          에그 제목 <input type="text"></input>
        </DialogContent>
        <DialogContent dividers>
          벌칙 <input type="text"></input>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.handleClose.bind(this)} color="primary">
            저장
          </Button>
        </DialogActions>
        </Dialog>
      </div>
    )
  }
}
export default withStyles(styles)(EggSetting);