import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import { Link } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import { deepPurple } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "#f5f5f5",
    },
  },

  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    textAlign: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  input: {
    margin: theme.spacing(1),
    textAlign: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

export default class GroupMake extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: "",
      imagePreviewUrl: "",
    }
    this._handleImageChange = this._handleImageChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  componentWillMount() {
    this.setState({
      file: undefined,
    })
  }
  _handleSubmit(e) {
    e.preventDefault()
    // TODO: do something with -> this.state.file

    let formData = new FormData()
    formData.append("file", this.state.file)

    return alert("등록되었습니다.")
  }

  _handleImageChange(e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      })
    }

    reader.readAsDataURL(file)
  }

  try = () => {
    this.props.history.push("/lllii")
  }

  Inputs = () => {
    const classes = useStyles()

    let { imagePreviewUrl } = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />
    }

    return (
      <div>
        <center>
          <div>
            <TextField
              id="filled-basic"
              className={classes.textField}
              label="그룹이름"
              margin="normal"
              variant="filled"
            />
          </div>
          <div> </div>
          <div>
            그룹 사진
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
            <form onSubmit={this._handleSubmit}>
              <input
                type="file"
                onChange={this._handleImageChange.bind(this)}
              />
              <button type="submit" onClick={this._handleSubmit.bind(this)}>
                Upload Image
              </button>
            </form>
            {$imagePreview}
          </div>

          <div> </div>

          <div>
            <TextField
              id="standard-multiline-static"
              label="그룹설명"
              multiline
              rows="4"
              className={classes.textField}
              margin="normal"
            />
          </div>

          <div> </div>

          <div>
            그룹 초대
            <Link to="/llll" style={{ textDecoration: "none" }}>
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                className={classes.fab}
              >
                <AddIcon />
              </Fab>
            </Link>
          </div>
          <div> </div>

          <div>
            <Button
              onClick={this.try}
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              생성
            </Button>
          </div>
        </center>
      </div>
    )
  }

  render() {
    return (
      <div>
        <this.Inputs />
      </div>
    )
  }
}
