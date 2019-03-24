import React from "react"
import { Link, navigate } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Grid from "@material-ui/core/Grid"
import Tooltip from "@material-ui/core/Tooltip"
import GithubIcon from "../icons/GithubIcon"
import TwitterIcon from "../icons/TwitterIcon"
import LinkedinIcon from "../icons/LinkedinIcon"
import FacebookIcon from "../icons/FacebookIcon"
import WorkIcon from "../icons/WorkIcon"
import Section from "./Section"

import IconButton from "@material-ui/core/IconButton"

const styles = theme => ({
  index__richText: {
    lineHeight: "34px",
  },
  index__link: {
    margin: theme.spacing.unit,
  },
})

function gotoCV(event) {
  event.preventDefault()
  navigate("/cv")
}

function openGithub(event) {
  event.preventDefault()
  window.open("https://github.com/particle4dev", "_blank")
}

function openTwitter(event) {
  event.preventDefault()
  window.open("https://twitter.com/particle4dev", "_blank")
}

function openLinkedin(event) {
  event.preventDefault()
  window.open("https://www.linkedin.com/in/hoang-van-nam-25a30612a", "_blank")
}

function openFacebook(event) {
  event.preventDefault()
  window.open("https://www.facebook.com/namhoang28", "_blank")
}

function AboutSection({ classes }) {
  return (
    <Section color>
      <Typography variant="h3" gutterBottom>
        <Link to="/">Nam Hoang</Link>
      </Typography>
      <Typography
        variant="button"
        gutterBottom
        className={classes.index__richText}
      >
        Fullstack Developer / DevOps / Open source / Scrum Master / who love to
        build a great product
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className={classes.index__richText}
      >
        “Perfection is achieved, not when there is nothing more to add, but when
        there is nothing left to take away.” - Antoine de Saint-Exupéry
      </Typography>
      <Tooltip title="CV" placement="bottom">
        <IconButton
          className={classes.index__link}
          onClick={gotoCV}
          aria-label="Work"
        >
          <WorkIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Github" placement="bottom">
        <IconButton
          className={classes.index__link}
          onClick={openGithub}
          aria-label="Github"
        >
          <GithubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Twitter" placement="bottom">
        <IconButton
          className={classes.index__link}
          onClick={openTwitter}
          aria-label="Twitter"
        >
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Linkedin" placement="bottom">
        <IconButton
          className={classes.index__link}
          onClick={openLinkedin}
          aria-label="Linkedin"
        >
          <LinkedinIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Facebook" placement="bottom">
        <IconButton
          className={classes.index__link}
          onClick={openFacebook}
          aria-label="Facebook"
        >
          <FacebookIcon />
        </IconButton>
      </Tooltip>
    </Section>
  )
}

export default withStyles(styles)(AboutSection)
