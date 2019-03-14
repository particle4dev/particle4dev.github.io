import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import ListSubheader from "@material-ui/core/ListSubheader"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import GithubIcon from "../icons/GithubIcon"
import TwitterIcon from "../icons/TwitterIcon"
import LinkedinIcon from "../icons/LinkedinIcon"
import FacebookIcon from "../icons/FacebookIcon"
import PhoneIcon from "../icons/PhoneIcon"
import MailIcon from "../icons/MailIcon"
import Section from "./Section"

const styles = theme => ({
  index__richText: {
    lineHeight: "34px",
  },
})

function AboutSection({ classes }) {
  return (
    <Section color>
      <Typography variant="h3" gutterBottom>
        Nam Hoang
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.index__richText}
      >
        Software engineer / DevOps / Open source / Scrum Master / who love to
        build a great product
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className={classes.index__richText}
      >
        I am Full-stack developer with 8 years of experience, currently working
        with NodeJs stack, ExpressJs, FeathersJs, Meteor, React, React
        Ecosystem, Mongo, Postgres Mainly.
        <ul>
          <li>
            I am enthusiastic about my job and excited to learn and contribute
            in every day.
          </li>
        </ul>
      </Typography>

      <List dense>
        <ListItem disableGutters>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          particle4dev@gmail.com
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          +84934579522
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon>
            <GithubIcon />
          </ListItemIcon>
          https://github.com/particle4dev
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon>
            <TwitterIcon />
          </ListItemIcon>
          https://twitter.com/particle4dev
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
          https://github.com/particle4dev
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon>
            <LinkedinIcon />
          </ListItemIcon>
          https://github.com/particle4dev
        </ListItem>
      </List>
    </Section>
  )
}

export default withStyles(styles)(AboutSection)
