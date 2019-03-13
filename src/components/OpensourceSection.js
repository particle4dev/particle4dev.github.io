import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import RichText from "./RichText"

const styles = theme => ({
  index: {
    justifyContent: "center",
    padding: "32px 0",
  },
})

function OpensourceSection({ classes }) {
  return (
    <Grid container spacing={24} className={classes.index}>
      <Grid item xs={12} sm={8}>
        <Typography variant="h5" gutterBottom>
          Open source
        </Typography>
        <Typography variant="body1" gutterBottom>
          Music, Movies, Travelling
        </Typography>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(OpensourceSection)
