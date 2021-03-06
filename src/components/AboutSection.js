import React from "react"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
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
        <Link to="/">Nam Hoang</Link>
      </Typography>
      <Typography
        variant="button"
        gutterBottom
        className={classes.index__richText}
      >
        Front End / Fullstack Developer / DevOps / Scrum Master who love to
        build a great product
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className={classes.index__richText}
      >
        I am Freelancer on weekday and Solo Startup Founder on weekend. With 8
        years of experience, I've acquired some good knowledge in a variety of
        technologies from React to AWS. Currently, I focus on web technology and
        decentralized system.
        <br />
      </Typography>
      <Grid container spacing={24}>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            padding: "12px 12px 0px",
          }}
        >
          <List dense>
            <ListItem disableGutters>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <Link href="mailto:particle4dev@gmail.com">
                particle4dev@gmail.com
              </Link>
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <Link href="tel:+84934579522">+84934579522 </Link>
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <GithubIcon />
              </ListItemIcon>
              <Link href="https://github.com/particle4dev" target="blank">
                github.com/particle4dev
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <List dense>
            <ListItem disableGutters>
              <ListItemIcon>
                <TwitterIcon />
              </ListItemIcon>
              <Link href="https://twitter.com/particle4dev" target="blank">
                twitter.com/particle4dev
              </Link>
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <Link href="https://www.facebook.com/namhoang28" target="blank">
                facebook.com/namhoang28
              </Link>
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <LinkedinIcon />
              </ListItemIcon>
              <Link
                href="https://www.linkedin.com/in/hoang-van-nam-25a30612a"
                target="blank"
              >
                linkedin.com/in/hoang-van-nam-25a30612a
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Section>
  )
}

export default withStyles(styles)(AboutSection)
