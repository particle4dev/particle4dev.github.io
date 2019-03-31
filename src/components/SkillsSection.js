import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import RichText from "./RichText"
import Section from "./Section"
import HeaderSection from "./HeaderSection"

const styles = theme => ({
  index__date: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "1rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    letterSpacing: "0.00938em",
  },

  index__section: {
    marginBottom: "32px",
  },
})

function SkillsSection({ classes }) {
  return (
    <Section color>
      <HeaderSection id="skills-section" title="Programming Skills" />

      <RichText className={classes.index__section}>
        <Typography variant="h6">
          Product Development Process: Scrum, Agile, Tdd / Bdd
        </Typography>
        <div className={classes.index__date}>Tools: pivotaltracker, trello</div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">Source Code Management: Git</Typography>
        <div className={classes.index__date}>
          Tools: github, gitlab, bitbucket
        </div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">Language</Typography>
        <div className={classes.index__date}>
          Proficient: JS/Node.js
          <br />
          Currently learning: Go, Rust, Python
          <br />
          Familiar with: Php, Java
        </div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">UI Technologies</Typography>
        <div className={classes.index__date}>
          DHTML, Ajax, jQuery, Meteor, ReactJS and ReactJS ecosystem
        </div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">Web servers & App servers</Typography>
        <div className={classes.index__date}>
          Apache, Nginx, ExpressJS, FeatherJS, Meteor, Restify
        </div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">Database</Typography>
        <div className={classes.index__date}>
          Mongodb, InfluxData, Redis, Postgresql, Mysql
        </div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">Cloud Computing Platforms</Typography>
        <div className={classes.index__date}>
          AWS: ECS, ALB, EC2, ELB, Cloudfront, VPC, S3, Redshift, Route53,
          Serverless (Api Gateway, Lambda), IAM
          <br />
          Digitalocean (Deployment and Configuration)
        </div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">IDE</Typography>
        <div className={classes.index__date}>
          Sublime Text, Vim, Visual Studio
        </div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">Devops</Typography>
        <div className={classes.index__date}>
          Jenkins, Consul, ELK, Terraform, setup CI/CD, Docker engine, docker
          compose, docker swarm
        </div>
      </RichText>

      <RichText>
        <Typography variant="h6">OTHER SKILLS</Typography>
        <div className={classes.index__date}>
          Cordova, RESTful API Implementation, Css & Sass & Smacss
        </div>
      </RichText>
    </Section>
  )
}

export default withStyles(styles)(SkillsSection)
