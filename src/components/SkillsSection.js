import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({})

function SkillsSection({ classes }) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Programming Skills
      </Typography>
      <article>
        <header>
          <Typography variant="h6" gutterBottom>
            Software engineering && devops && Scrum master
          </Typography>
        </header>
        <p>
          <div>Product Development Process: Scrum, Agile</div>
          <div>Tools: pivotaltracker, trello</div>
        </p>
        <p>
          <Typography variant="subtitle1">
            Source Code Management: Git
          </Typography>
          <div>Tools: github, gitlab, bitbucket</div>
        </p>
        <p>
          <div>Language</div>
          <div>Proficient: JS/Node.js</div>
          <div>Familiar with: Php, Java</div>
          <div>Currently learning: Go, Python</div>
        </p>
        <p>
          <div>
            AWS: ECS, ALB, EC2, ELB, Cloudfront, VPC, S3, Redshift, Route53,
            Serverless (Api Gateway, Lambda), IAM
          </div>
        </p>
        <p>
          <Typography variant="subtitle1">
            Devops: Jenkins, Consul, ELK, Terraform, setup CI/CD
          </Typography>
        </p>
        <p>
          <div>Docker: Docker engine, docker compose, docker swarm</div>
        </p>
        <p>
          <div>Database: Mongodb, Redis, Mysql, Postgresql</div>
        </p>
        <p>
          <div>
            OTHER SKILLS: Git, Cordova, Nginx, Digitalocean (Deployment and
            Configuration), RESTful API Implementation, Css & Sass & Smacss, Tdd
            / Bdd, Sublime
          </div>
        </p>
      </article>
    </>
  )
}

export default withStyles(styles)(SkillsSection)
