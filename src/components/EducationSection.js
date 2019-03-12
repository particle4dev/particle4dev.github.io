import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({})

function EducationSection({ classes }) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Education
      </Typography>
      <article>
        <header>
          <Typography variant="h6" gutterBottom>
            Information Technology
          </Typography>
          <span>
            Posts and Telecommunications Institute of Technology of Ha Noi
          </span>
          <span>
            <address>Ha Noi, Viet Nam</address>
            <time className={classes.index__date}>
              09/2008 - 02/2013 ( 4 years 5 months )
            </time>
          </span>
        </header>
        <p>
          <em>Bachelors</em>
        </p>
      </article>
      <article>
        <header>
          <Typography variant="h6" gutterBottom>
            M102: MongoDB for DBAs
          </Typography>
          <span>MongoDB University</span>
          <time className={classes.index__date}>
            07/2013 - 09/2013 ( 2 months )
          </time>
        </header>
      </article>
      <article>
        <header>
          <Typography variant="h6" gutterBottom>
            M101JS: MongoDB for Node.js Developers
          </Typography>
          <span>MongoDB University</span>
          <time className={classes.index__date}>
            10/2013 - 12/2013 ( 2 months )
          </time>
        </header>
      </article>
      <article>
        <header>
          <Typography variant="h6" gutterBottom>
            M202: MongoDB Advanced Deployment and Operations
          </Typography>
          <span>MongoDB University</span>
          <time className={classes.index__date}>
            03/2016 - 05/2016 ( 2 months )
          </time>
        </header>
      </article>
    </>
  )
}

export default withStyles(styles)(EducationSection)
