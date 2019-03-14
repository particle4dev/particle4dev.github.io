import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Link from '@material-ui/core/Link';
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Grid from "@material-ui/core/Grid"
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
        I am Senior Full Stack Developer with 8 years of experience, I've
        acquired some good knowledge in a variety of technologies from React to
        AWS. I am enthusiastic about my job and excited to come in every day to
        learn and contribute.
        <br />
        Here to see a summary of the technologies I've been involved with.
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} style={{
              padding: '0px 12px'
        }}>
          <List dense>
            <ListItem disableGutters>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <a href="mailto:particle4dev@gmail.com">particle4dev@gmail.com</a>
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <a href="tel:+84934579522">+84934579522</a>
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <GithubIcon />
              </ListItemIcon>
              <a href="https://github.com/particle4dev" target="blank">
                https://github.com/particle4dev
              </a>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6}style={{
              padding: '0px 12px'
        }}>
          <List dense>
            <ListItem disableGutters>
              <ListItemIcon>
                <TwitterIcon />
              </ListItemIcon>
              <a href="https://twitter.com/particle4dev" target="blank">
                https://twitter.com/particle4dev
              </a>
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <a href="https://www.facebook.com/namhoang28" target="blank">
                https://www.facebook.com/namhoang28
              </a>
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <LinkedinIcon />
              </ListItemIcon>
              <a
                href="https://www.linkedin.com/in/hoang-van-nam-25a30612a"
                target="blank"
              >
                https://www.linkedin.com/in/hoang-van-nam-25a30612a
              </a>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Section>
  )
}

export default withStyles(styles)(AboutSection)
