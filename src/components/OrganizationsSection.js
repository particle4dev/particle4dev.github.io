import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import RichText from "./RichText"

const styles = theme => ({
  index: {
    justifyContent: "center",
    padding: "32px 0",
    backgroundColor: " #f1f3f4",
  },
})

function OrganizationsSection({ classes }) {
  return (
    <Grid container spacing={24} className={classes.index}>
      <Grid item xs={12} sm={8}>
        <Typography variant="h5" gutterBottom>
          Organizations
        </Typography>
        <Typography variant="body1" gutterBottom>
          <p>
            Admin at React VietNam Group where are largest and active ReactJS
            community in Vietnam.
          </p>
          <p>Member of nodejs.org</p>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(OrganizationsSection)
