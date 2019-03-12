import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
  index__date: {
    fontFamily: "Roboto Mono",
    fontSize: 14,
    color: "#5f6368",
  },
})

function EmploymentSection({ classes }) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Employment
      </Typography>
      <div>
        <header>
          <Typography variant="h6">
            Founder at{" "}
            <a href="http://www.fiftyline.com" target="blank">
              @fiftyline50
            </a>
          </Typography>
          <time className={classes.index__date}>02/2018 - present</time>
        </header>
        <Typography variant="body1" gutterBottom>
          <a href="http://www.fiftyline.com" target="blank">
            Fiftyline
          </a>{" "}
          is the easy-to-use cryptocurrency portfolio management platform. We
          provide the service that help you to keep track of all your
          cryptocurrency investments, get the latest coin prices, news and some
          special reports.
          <br />
          <br />
          Visit the website:{" "}
          <a href="http://www.fiftyline.com" target="blank">
            www.fiftyline.com
          </a>
        </Typography>
      </div>

      <Typography variant="body1" gutterBottom>
        <header>
          <Typography variant="h6" gutterBottom>
            Fullstack Developer
          </Typography>
          <span>
            <a href="https://www.fpt-software.com" target="blank">
              Komodo Platform
            </a>
            <address>Remote Developer</address>
            <time>08/2018 - 03/2019</time>
          </span>
        </header>
        As a Fullstack Developer, I worked on some decentralized applications
        with Komodo technologies:
        <ul>
          <li>dICO Application:</li>

          <li>Dice Application:</li>

          <li>Atomicdex Application:</li>
        </ul>
      </Typography>

      <Typography variant="body1" gutterBottom>
        <header>
          <Typography variant="h6" gutterBottom>
            Technical Consultant
          </Typography>
          <span>
            <a href="https://www.fpt-software.com" target="blank">
              FPT Software
            </a>
            <address>Ha Noi, Viet Nam</address>
            <time>10/2016 - 03/2017</time>
          </span>
        </header>
        <a href="https://www.fpt-software.com" target="blank">
          Fsoft
        </a>{" "}
        is Vietnam’s largest and one of the fastest growing software outsourcing
        companies.
        <br />
        <br />
        As a Technical Consultant, my responsibilities are:
        <br />
        <br />
        <ul>
          <li>Interview and hire JS developer</li>
          <li>Train the team about react and nodejs</li>
          <li>
            Work with devops team to set up infrastructure for a customer
            <br />
            <ul>
              <li>Setup mongodb for staging and production environment</li>
              <li>
                Use Troposphere, Ansible to create and run infrastructure on AWS
              </li>
              <li>Deploy application on staging environment ...</li>
            </ul>
          </li>
          <li>Work with core team to design database for some service</li>
        </ul>
      </Typography>

      <Typography variant="body1" gutterBottom>
        <header>
          <Typography variant="h6" gutterBottom>
            Software Engineer
          </Typography>
          <span>
            Cityme.vn
            <address>Ha Noi, Viet Nam</address>
            <time>08/2015 - 10/2016</time>
          </span>
        </header>
        Cityme is a location-based services startup based in Ha Noi. With
        Cityme, you can easy to find deals with best price and share your
        experiences with friends and community.
        <br />
        <br />
        As a Fullstack and Devops engineer, my responsibilities are:
        <br />
        <br />
        <ul>
          <li>
            Built biz manager service to help the shop manage their deals :
            <ul>
              <li>Designed and implemented RESTful APIs</li>
              <li>Worked with React and Flux related stack</li>
              <li>Setup TDD approach</li>
            </ul>
          </li>
          <li>Built media service with nodejs, s3, cloudfront</li>
          <li>
            Setup deployment pipeline for Production environment, work with many
            modern technologies like Jenkins, AWS (EC2, ELB), Docker ...
          </li>
        </ul>
      </Typography>

      <Typography variant="body1" gutterBottom>
        <header>
          <Typography variant="h6" gutterBottom>
            Fullstack Developer
          </Typography>
          <span>
            HitchLab LLC
            <address>Ha Noi, Viet Nam</address>
            <time>08/2013 – 07/2015</time>
          </span>
        </header>
        HitchLab LLC is startup company based in San Francisco. My role on the
        team was that of a senior nodejs web applications developer. I worked on
        some projects:
        <br />
        <br />
        Home Game: An open house app for real estate agents
        <ul>
          <li>Stack: Nodejs/Meteor/Mongodb/Cordova</li>
        </ul>
        Suitor: Find people you're interested in nearby and meetup as friends or
        something more
        <ul>
          <li>Stack : Nodejs/Meteor/Mongodb/Cordova</li>
        </ul>
      </Typography>

      <Typography variant="body1" gutterBottom>
        <header>
          <Typography variant="h6" gutterBottom>
            Freelancer
          </Typography>
          <span>
            <time>08/2011–07/2012</time>
          </span>
        </header>
      </Typography>
    </>
  )
}

export default withStyles(styles)(EmploymentSection)
