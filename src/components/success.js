import React from "react"
import image from '../images/icons8-eggplant-48.png'
import { Avatar } from "@material-ui/core"

export default function success_1() {

    return (
      <div>
        <Avatar alt="Remy Sharp" src={image} />
        <h1>성공</h1>
      </div>
    )
}