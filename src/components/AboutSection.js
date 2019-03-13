import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import ListSubheader from "@material-ui/core/ListSubheader"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
// import MailIcon from "@material-ui/icons/Mail"
// import PhoneIcon from "@material-ui/icons/Phone"
import Grid from "@material-ui/core/Grid"
import GithubIcon from "./GithubIcon"
import TwitterIcon from "./TwitterIcon"
import LinkedinIcon from "./LinkedinIcon"
import FacebookIcon from "./FacebookIcon"
import PhoneIcon from "./PhoneIcon"
import MailIcon from "./MailIcon"

const styles = theme => ({
  index: {
    justifyContent: "center",
    backgroundColor: " #f1f3f4",
    padding: "54px 0",
  },

  index__richText: {
    lineHeight: "34px",
  },
})

function AboutSection({ classes }) {
  return (
    <Grid container spacing={24} className={classes.index}>
      <Grid item xs={12} sm={8} className={classes.index__header}>
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
          I am Full-stack developer with 8 years of experience, currently
          working with NodeJs stack, ExpressJs, FeathersJs, Meteor, React, React
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
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(AboutSection)
