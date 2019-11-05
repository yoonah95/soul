import React, { Component } from "react"
import axios from "axios"

class Test extends Component {
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

    axios
      .post("/api/upload", formData)
      .then(response => {
        alert("성공")
      })
      .catch(error => {
        alert("실패")
      })
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

  render() {
    let { imagePreviewUrl } = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />
    }

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange.bind(this)} />
          <button type="submit" onClick={this._handleSubmit.bind(this)}>
            Upload Image
          </button>
        </form>
        {$imagePreview}
      </div>
    )
  }
}
export default Test
