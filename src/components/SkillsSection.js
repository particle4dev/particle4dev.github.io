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

  index__date: {
    fontFamily: "Roboto Mono",
    fontSize: 14,
    color: "#5f6368",
  },
})

function SkillsSection({ classes }) {
  return (
    <Grid container spacing={24} className={classes.index}>
      <Grid item xs={12} sm={8}>
        <Typography variant="h5" gutterBottom>
          Programming Skills
        </Typography>
        <RichText>
          <header>
            <Typography variant="h6" gutterBottom>
              Software engineering && devops && Scrum master
            </Typography>
          </header>
          <Typography variant="h6">
            Product Development Process: Scrum, Agile
          </Typography>
          <div className={classes.index__date}>
            Tools: pivotaltracker, trello
          </div>

          <Typography variant="h6">Source Code Management: Git</Typography>
          <div className={classes.index__date}>
            Tools: github, gitlab, bitbucket
          </div>

          <Typography variant="h6">Language</Typography>
          <div className={classes.index__date}>
            Proficient: JS/Node.js
            <br />
            Familiar with: Php, Java
            <br />
            Currently learning: Go, Python
          </div>

          <Typography variant="h6">AWS</Typography>
          <div className={classes.index__date}>
            ECS, ALB, EC2, ELB, Cloudfront, VPC, S3, Redshift, Route53,
            Serverless (Api Gateway, Lambda), IAM
          </div>

          <Typography variant="h6">Devops</Typography>
          <div className={classes.index__date}>
            Jenkins, Consul, ELK, Terraform, setup CI/CD
          </div>

          <Typography variant="h6">Docker</Typography>
          <div className={classes.index__date}>
            Docker engine, docker compose, docker swarm
          </div>

          <Typography variant="h6">Database</Typography>
          <div className={classes.index__date}>
            Mongodb, InfluxData, Redis, Mysql, Postgresql
          </div>

          <Typography variant="h6">OTHER SKILLS</Typography>
          <div className={classes.index__date}>
            Git, Cordova, Nginx, Digitalocean (Deployment and Configuration),
            RESTful API Implementation, Css & Sass & Smacss, Tdd / Bdd, Sublime
          </div>
        </RichText>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(SkillsSection)
