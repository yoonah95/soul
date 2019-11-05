import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import { deepPurple } from "@material-ui/core/colors"

const images = [
  {
    url: "group2.png",
    title: "그룹 생성",
    width: "50%",
    switch: "/ll",
  },
  {
    url: "group2.png",
    title: "그룹 목록",
    width: "50%",
    switch: "/lll",
  },
]

const name = {
  first: "dd",
}
const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "#f5f5f5",
    },
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    // backgroundColor: purple[50],
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}))

export default class Group extends React.Component {
  ButtonB = () => {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        {images.map(image => (
          <ButtonBase
            onClick={this.try}
            //{this.fun.bind(image)}
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    )
  }

  fun = function(image) {
    this.props.history.push(image.switch)
  }

  try = () => {
    this.props.history.push("/ll")
  }

  tryy = () => {
    this.props.history.push("/lll")
  }

  tryyy = ({ name }) => {
    console.log(name.first)
  }

  render() {
    return (
      <div>
        <div>
          <this.ButtonB />
          <button onClick={this.tryy}>목록</button>
          <button>{name.first}</button>
        </div>
      </div>
    )
  }
}
