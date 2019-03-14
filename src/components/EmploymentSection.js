import React, { useState } from "react"
import ClassNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Collapse from "@material-ui/core/Collapse"
import ExpandMoreIcon from "../icons/ExpandMoreIcon"
import RichText from "./RichText"
import Section from "./Section"

const styles = theme => ({
  index__date: {
    fontFamily: "Roboto Mono",
    fontSize: 14,
    color: "#5f6368",
  },

  index__section: {
    marginBottom: "0.35em",
  },

  index__richText: {
    lineHeight: "34px",
  },

  index__header: {
    position: "relative",
  },

  index__expandIcon: {
    position: "absolute",
    top: 8,
    right: 0,
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },
})

function EmploymentSection({ classes }) {
  const [fiftyline50State, setFiftyline50State] = useState(true)
  const [komodoState, setKomodoState] = useState(true)
  const [fptState, setFptState] = useState(false)
  const [citymeState, setCitymeState] = useState(false)
  const [hitchLabState, setHitchLabState] = useState(false)

  return (
    <Section color>
      <Typography variant="h5" gutterBottom>
        Employment
      </Typography>
      <RichText className={classes.index__section}>
        <header className={classes.index__header}>
          <Typography variant="h6">
            Founder at{" "}
            <a href="http://www.fiftyline.com" target="blank">
              @fiftyline50
            </a>
          </Typography>
          <time className={classes.index__date}>02/2018 - present</time>
          <IconButton
            aria-label="Show more"
            className={ClassNames(classes.index__expandIcon, classes.expand, {
              [classes.expandOpen]: fiftyline50State,
            })}
            aria-expanded={fiftyline50State}
            onClick={() => setFiftyline50State(!fiftyline50State)}
          >
            <ExpandMoreIcon />
          </IconButton>
        </header>
        <Collapse in={fiftyline50State} timeout="auto" unmountOnExit>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.index__richText}
          >
            <a href="http://www.fiftyline.com" target="blank">
              Fiftyline
            </a>{" "}
            is the easy-to-use cryptocurrency portfolio management platform. We
            provide the service that help you to keep track of all your
            cryptocurrency investments, get the latest coin prices, news and
            some special reports.
            <br />
            Visit the website:{" "}
            <a href="http://www.fiftyline.com" target="blank">
              www.fiftyline.com
            </a>
          </Typography>
        </Collapse>
      </RichText>

      <RichText className={classes.index__section}>
        <header className={classes.index__header}>
          <Typography variant="h6">Fullstack Developer</Typography>
          <time className={classes.index__date}>
            <a href="https://komodoplatform.com" target="blank">
              Komodo Platform
            </a>
            , Remote Developer - 08/2018 - 03/2019
          </time>
          <IconButton
            aria-label="Show more"
            className={ClassNames(classes.index__expandIcon, classes.expand, {
              [classes.expandOpen]: komodoState,
            })}
            aria-expanded={komodoState}
            onClick={() => setKomodoState(!komodoState)}
          >
            <ExpandMoreIcon />
          </IconButton>
        </header>
        <Collapse in={komodoState} timeout="auto" unmountOnExit>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.index__richText}
          >
            As a Fullstack Developer, I worked on some decentralized
            applications with Komodo technologies:
          </Typography>
          <ul>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                dICO Application: A Decentralized ICO application built on top
                of BarterDEX swap.
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Dice Application: An instant exchange built on top of BarterDEX
                swap. It is inspired by Changelly and ShapeShift.
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Atomicdex Application: This is a virtual dice app for Dice Smart
                Contracts.
              </Typography>
            </li>
          </ul>
        </Collapse>
      </RichText>

      <RichText className={classes.index__section}>
        <header className={classes.index__header}>
          <Typography variant="h6">Technical Consultant</Typography>
          <time className={classes.index__date}>
            <a href="https://www.fpt-software.com" target="blank">
              FPT Software
            </a>
            , Ha Noi, Viet Nam - 10/2016 - 03/2017
          </time>
          <IconButton
            aria-label="Show more"
            className={ClassNames(classes.index__expandIcon, classes.expand, {
              [classes.expandOpen]: fptState,
            })}
            aria-expanded={fptState}
            onClick={() => setFptState(!fptState)}
          >
            <ExpandMoreIcon />
          </IconButton>
        </header>
        <Collapse in={fptState} timeout="auto" unmountOnExit>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.index__richText}
          >
            <a href="https://www.fpt-software.com" target="blank">
              Fsoft
            </a>{" "}
            is Vietnam’s largest and one of the fastest growing software
            outsourcing companies.
            <br />
            As a Technical Consultant, my responsibilities are:
            <ul>
              <li>Interview and hire JS developers</li>
              <li>Train the team about react and nodejs</li>
              <li>
                Work with devops team to set up infrastructure for a customer
                <ul>
                  <li>Setup mongodb for staging and production environment</li>
                  <li>
                    Use Troposphere, Ansible to create and run infrastructure on
                    AWS
                  </li>
                  <li>Deploy application on staging environment ...</li>
                </ul>
              </li>
              <li>Work with core team to design database for some service</li>
            </ul>
          </Typography>
        </Collapse>
      </RichText>

      <RichText className={classes.index__section}>
        <header className={classes.index__header}>
          <Typography variant="h6">Software Engineer</Typography>
          <time className={classes.index__date}>
            Cityme.vn, Ha Noi, Viet Nam - 08/2015 - 10/2016
          </time>
          <IconButton
            aria-label="Show more"
            className={ClassNames(classes.index__expandIcon, classes.expand, {
              [classes.expandOpen]: citymeState,
            })}
            aria-expanded={citymeState}
            onClick={() => setCitymeState(!citymeState)}
          >
            <ExpandMoreIcon />
          </IconButton>
        </header>
        <Collapse in={citymeState} timeout="auto" unmountOnExit>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.index__richText}
          >
            Cityme is a location-based services startup based in Ha Noi. With
            Cityme, you can easy to find deals with best price and share your
            experiences with friends and community.
            <br />
            As a Fullstack and Devops engineer, my responsibilities are:
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
                Setup deployment pipeline for Production environment, work with
                many modern technologies like Jenkins, AWS (EC2, ELB), Docker
                ...
              </li>
            </ul>
          </Typography>
        </Collapse>
      </RichText>

      <RichText className={classes.index__section}>
        <header className={classes.index__header}>
          <Typography variant="h6">Fullstack Developer</Typography>
          <time className={classes.index__date}>
            HitchLab LLC, Ha Noi, Viet Nam - 08/2013 – 07/2015
          </time>

          <IconButton
            aria-label="Show more"
            className={ClassNames(classes.index__expandIcon, classes.expand, {
              [classes.expandOpen]: hitchLabState,
            })}
            aria-expanded={hitchLabState}
            onClick={() => setHitchLabState(!hitchLabState)}
          >
            <ExpandMoreIcon />
          </IconButton>
        </header>
        <Collapse in={hitchLabState} timeout="auto" unmountOnExit>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.index__richText}
          >
            HitchLab LLC is startup company based in San Francisco. My role on
            the team was that of a senior nodejs web applications developer. I
            worked on some projects:
            <br />
            Home Game: An open house app for real estate agents
            <ul>
              <li>Stack: Nodejs/Meteor/Mongodb/Cordova</li>
            </ul>
            Suitor: Find people you're interested in nearby and meetup as
            friends or something more
            <ul>
              <li>Stack : Nodejs/Meteor/Mongodb/Cordova</li>
            </ul>
          </Typography>
        </Collapse>
      </RichText>

      <RichText className={classes.index__section}>
        <header>
          <Typography variant="h6">Freelancer</Typography>
          <time className={classes.index__date}>08/2011–07/2012</time>
        </header>
      </RichText>
    </Section>
  )
}

export default withStyles(styles)(EmploymentSection)
