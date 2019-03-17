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
        <Typography variant="h6" gutterBottom>
          Software engineering && devops && Scrum master
        </Typography>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">
          Product Development Process: Scrum, Agile
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
          Familiar with: Php, Java
          <br />
          Currently learning: Go, Python
        </div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">AWS</Typography>
        <div className={classes.index__date}>
          ECS, ALB, EC2, ELB, Cloudfront, VPC, S3, Redshift, Route53, Serverless
          (Api Gateway, Lambda), IAM
        </div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">Devops</Typography>
        <div className={classes.index__date}>
          Jenkins, Consul, ELK, Terraform, setup CI/CD
        </div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">Docker</Typography>
        <div className={classes.index__date}>
          Docker engine, docker compose, docker swarm
        </div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">Database</Typography>
        <div className={classes.index__date}>
          Mongodb, InfluxData, Redis, Postgresql, Mysql
        </div>
      </RichText>

      <RichText>
        <Typography variant="h6">OTHER SKILLS</Typography>
        <div className={classes.index__date}>
          Git, Cordova, Nginx, Digitalocean (Deployment and Configuration),
          RESTful API Implementation, Css & Sass & Smacss, Tdd / Bdd, Sublime
        </div>
      </RichText>
    </Section>
  )
}

export default withStyles(styles)(SkillsSection)
