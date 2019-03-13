import React from "react"
import ClassNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import RichText from "./RichText"

const styles = theme => ({
  index: {
    justifyContent: "center",
    padding: "32px 0",
  },

  index__date: {
    fontFamily: "Roboto Mono",
    fontSize: 14,
    color: "#5f6368",
  },

  index__section: {
    marginBottom: "0.35em",
  },
})

function EducationSection({ classes }) {
  return (
    <Grid container spacing={24} className={classes.index}>
      <Grid item xs={12} sm={8}>
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        <RichText className={classes.index__section}>
          <article>
            <Typography variant="h6">
              Bachelors of Information Technology
            </Typography>
            <time className={classes.index__date}>
              Posts and Telecommunications Institute of Technology of Ha Noi -
              09/2008 - 02/2013
            </time>
          </article>
          <article>
            <Typography variant="h6">M102: MongoDB for DBAs</Typography>
            <time className={classes.index__date}>
              MongoDB University - 07/2013 - 09/2013 (2 months)
            </time>
          </article>
          <article>
            <Typography variant="h6">
              M101JS: MongoDB for Node.js Developers
            </Typography>
            <time className={classes.index__date}>
              MongoDB University - 10/2013 - 12/2013 (2 months)
            </time>
          </article>
          <article>
            <Typography variant="h6">
              M202: MongoDB Advanced Deployment and Operations
            </Typography>
            <time className={classes.index__date}>
              MongoDB University - 03/2016 - 05/2016 (2 months)
            </time>
          </article>
        </RichText>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(EducationSection)
