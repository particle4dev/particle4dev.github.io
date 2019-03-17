import React from "react"
import { navigate } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import RichText from "./RichText"
import Section from "./Section"
import HeaderSection from "./HeaderSection"

const styles = theme => ({
  index__chip: {
    margin: theme.spacing.unit,
  },
})

function ExpertiseSection({ classes }) {
  const handleClick = evt => {
    evt.preventDefault()
    navigate("#skills-section")
  }
  return (
    <Section>
      <HeaderSection title="Expertise" />
      <RichText>
        <Chip
          label="Javascript"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Agile"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="AWS"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Node.JS"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Express.js"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Mongodb"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="React"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="React Ecosystem"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Electron"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Serverless "
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Microservice "
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Progressive Web App"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Material Design"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Scrum"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Docker"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Terraform"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Git"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Gitlab CI"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Blockchain"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Komodo"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Ethereum"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="Golang"
          onClick={handleClick}
          className={classes.index__chip}
        />
        <Chip
          label="more ..."
          onClick={handleClick}
          className={classes.index__chip}
        />
      </RichText>
    </Section>
  )
}

export default withStyles(styles)(ExpertiseSection)
