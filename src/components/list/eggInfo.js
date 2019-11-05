import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';

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

class EggInfo extends React.Component {
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
        <Tooltip title="상세정보" placement="top"><InfoIcon onClick={this.handleClickOpen.bind(this)} /></Tooltip>
        <Dialog onClose={this.handleClose.bind(this)} aria-labelledby="customized-dialog-title" open={this.state.open}>
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose.bind(this)}>
          에그 상세 정보
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            에그 제목 : {this.props.eggTitle}
          </Typography>
          <Typography gutterBottom>
            벌칙 : {this.props.penalty}
          </Typography>
          <Typography gutterBottom>
            에그 생성 날짜 : {this.props.createdDate}
          </Typography>
        </DialogContent>
        </Dialog>
      </div>
    )
  }
}
export default withStyles(styles)(EggInfo);