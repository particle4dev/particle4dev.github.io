import React from "react"
import ClassNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Chip from "@material-ui/core/Chip"
import RichText from "./RichText"

const styles = theme => ({
  index: {
    justifyContent: "center",
    padding: "32px 0",
  },

  index__section: {
    marginBottom: "0.35em",
  },

  index__richText: {
    lineHeight: "34px",
  },

  index__chip: {
    margin: theme.spacing.unit,
  },
})

function ExpertiseSection({ classes }) {
  return (
    <Grid container spacing={24} className={classes.index}>
      <Grid item xs={12} sm={8}>
        <Typography variant="h5" gutterBottom>
          Expertise
        </Typography>
        <div
          className={ClassNames(
            classes.index__section,
            classes.index__richText
          )}
        >
          <Chip label="Javascript" className={classes.index__chip} />
          <Chip label="Agile" className={classes.index__chip} />
          <Chip label="AWS" className={classes.index__chip} />
          <Chip label="Node.JS" className={classes.index__chip} />
          <Chip label="Express.js" className={classes.index__chip} />
          <Chip label="Mongodb" className={classes.index__chip} />
          <Chip label="React" className={classes.index__chip} />
          <Chip label="React Ecosystem" className={classes.index__chip} />
          <Chip label="Electron" className={classes.index__chip} />
          <Chip label="Progressive Web App" className={classes.index__chip} />
          <Chip label="Material Design" className={classes.index__chip} />
          <Chip label="Scrum" className={classes.index__chip} />
          <Chip label="Docker" className={classes.index__chip} />
          <Chip label="Terraform" className={classes.index__chip} />
          <Chip label="Git" className={classes.index__chip} />
          <Chip label="Gitlab CI" className={classes.index__chip} />
          <Chip label="Blockchain" className={classes.index__chip} />
          <Chip label="Komodo" className={classes.index__chip} />
          <Chip label="Ethereum" className={classes.index__chip} />
          <Chip label="Golang" className={classes.index__chip} />
          <Chip label="..." className={classes.index__chip} />
        </div>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(ExpertiseSection)
