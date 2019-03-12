import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({})

function OrganizationsSection({ classes }) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Organizations
      </Typography>
      <article>
        <p>
          Admin at React VietNam Group where are largest and active ReactJS
          community in Vietnam.
        </p>
        <p>Member of nodejs.org</p>
      </article>
    </>
  )
}

export default withStyles(styles)(OrganizationsSection)
