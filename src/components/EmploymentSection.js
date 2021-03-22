import React, { useState } from "react"
import ClassNames from "classnames"
import Img from "gatsby-image"
import { withStyles } from "@material-ui/core/styles"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Collapse from "@material-ui/core/Collapse"
import ExpandMoreIcon from "../icons/ExpandMoreIcon"
import RichText from "./RichText"
import Section from "./Section"
import HeaderSection from "./HeaderSection"

const renderImage = ({ node }) => {
  const { childImageSharp } = node
  return <Img key={node.relativePath} fluid={childImageSharp.fluid} />
}

const styles = theme => ({
  index__date: {
    fontFamily: "Roboto Mono",
    fontSize: 14,
    color: "#5f6368",
  },

  index__section: {
    marginBottom: "32px",
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

function EmploymentSection({ classes, data }) {
  // const [commingUpState, setCommingUpState] = useState(true)
  const [lilypetshopState, setLilypetshopState] = useState(true)
  const [komodoState, setKomodoState] = useState(true)
  const [fiftyline50State, setFiftyline50State] = useState(false)
  const [fptState, setFptState] = useState(false)
  const [citymeState, setCitymeState] = useState(false)
  const [hitchLabState, setHitchLabState] = useState(false)
  const { diceappImages, atomicdexImages } = data

  return (
    <Section color>
      <HeaderSection title="Employment" />

      <RichText className={classes.index__section}>
        <header className={classes.index__header}>
          <Typography variant="h6">
            Founder at{" "}
            <Link href="#lilypetshop">
              @lilypetshop
            </Link>
          </Typography>
          <time className={classes.index__date}>
            06/2019 - 01/2021
          </time>
          <IconButton
            aria-label="Show more"
            className={ClassNames(classes.index__expandIcon, classes.expand, {
              [classes.expandOpen]: lilypetshopState,
            })}
            aria-expanded={lilypetshopState}
            onClick={() => setLilypetshopState(!lilypetshopState)}
          >
            <ExpandMoreIcon />
          </IconButton>
        </header>
        <Collapse in={lilypetshopState} timeout="auto" unmountOnExit>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.index__richText}
          >
            Started a new business with my friend in the Pet industry, purchased goods from China and sold them on some e-commerce platforms in Vietnam. Before Covid-19,  we had grown our revenue from 0 to 8000$ per month in just 6 months.
            <br />
            I built several internal-tools to help the business grow sales:
          </Typography>
          <ul>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Inventory management tool: synchronize inventory across multiple platforms to avoid shortage of goods and loss of sales. This app is very important to us because we sell products on multiple platforms (shopee, lazada, tiki .v.v.v.)
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Automatic-message tool: automatically send order status messages or promotions to customers.
              </Typography>
            </li>
          </ul>
        </Collapse>
      </RichText>

      <RichText className={classes.index__section}>
        <header className={classes.index__header}>
          <Typography variant="h6">Fullstack Developer</Typography>
          <time className={classes.index__date}>
            <Link href="https://komodoplatform.com" target="blank">
              Komodo Platform & Chainmakers
            </Link>
            , Remote Developer - 08/2018 - 11/2019
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
            I was hired as a Remote Fullstack Developer where I worked on some
            decentralized applications. My main goal was to built the
            application to make end-user easily accessible to Komodo
            technologies. This is the list of dApp:
          </Typography>
          <ul>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                dICO Application: A Decentralized ICO application built on top
                of BarterDEX swap. This was my first task at Komodo team and the
                goal was to rewrite a dICO Application which based on meteor to
                electron and react. It's quite very successful since it looks
                more solid and easy to use than the old one.
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Dice Application: This is a virtual dice app for Dice Smart
                Contracts. I built this demo in less than 1 month from scratch.
                <ul>
                  <li>Stack: Reactjs / Redux / Electronjs / Material UI</li>
                </ul>
              </Typography>
              {diceappImages && diceappImages.edges.map(renderImage)}
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Atomicdex Application: An instant exchange built on top of
                BarterDEX swap. This application is inspired by Changelly and
                ShapeShift and the goal is to make end-user easily accessible to
                "Atomic Swap" technology. My colleagues said it looks more
                elegant, clean and easy-to-use than the old one.
                <ul>
                  <li>Stack: Reactjs / Redux / Electronjs / Material UI</li>
                </ul>
              </Typography>
              {atomicdexImages && atomicdexImages.edges.map(renderImage)}
            </li>
          </ul>
        </Collapse>
      </RichText>

      <RichText className={classes.index__section}>
        <header className={classes.index__header}>
          <Typography variant="h6">
            Founder at{" "}
            <Link href="http://www.fiftyline.com" target="blank">
              @fiftyline50
            </Link>
          </Typography>
          <time className={classes.index__date}>
            Do everything from planning to "getting shit done" - 02/2018 -
            03/2019
          </time>
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
            <Link href="http://www.fiftyline.com" target="blank">
              Fiftyline
            </Link>{" "}
            is the easy-to-use cryptocurrency portfolio management platform. We
            provide the service that help you to keep track of all your
            cryptocurrency investments, get the latest coin prices, news and
            some special reports.
            <br />
            Visit the website:{" "}
            <Link href="http://www.fiftyline.com" target="blank">
              fiftyline.com
            </Link>
            <br />
            Stack:{" "}
            <Link
              href="https://stackshare.io/fiftyline-llc/fiftyline"
              target="blank"
            >
              stackshare.io/fiftyline-llc/fiftyline
            </Link>
          </Typography>
        </Collapse>
      </RichText>

      <RichText className={classes.index__section}>
        <header className={classes.index__header}>
          <Typography variant="h6">Technical Consultant</Typography>
          <time className={classes.index__date}>
            <Link href="https://www.fpt-software.com" target="blank">
              FPT Software
            </Link>
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
            <Link href="https://www.fpt-software.com" target="blank">
              Fsoft
            </Link>{" "}
            is Vietnam’s largest and one of the fastest growing software
            outsourcing companies.
            <br />
            As a Technical Consultant, my responsibilities are:
          </Typography>
          <ul>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Interview and hire JS developers
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Train the team about React and Nodejs
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Work with Devops team to set up infrastructure for a customer
              </Typography>
              <ul>
                <li>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.index__richText}
                  >
                    Setup Mongodb for staging and production environment
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.index__richText}
                  >
                    Use Troposphere, Ansible to create and run infrastructure on
                    AWS
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.index__richText}
                  >
                    Deploy application on staging environment ...
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Work with core team to design database for some service
              </Typography>
            </li>
          </ul>
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
          </Typography>
          <ul>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Built biz manager service to help the shop manage their deals:
              </Typography>
              <ul>
                <li>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.index__richText}
                  >
                    Designed and implemented RESTful APIs
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.index__richText}
                  >
                    Worked with React and Flux related stack
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.index__richText}
                  >
                    Setup TDD approach
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Built media service with nodejs, s3, cloudfront
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Setup deployment pipeline for Production environment, work with
                many modern technologies like Jenkins, AWS (EC2, ELB), Docker
                ...
              </Typography>
            </li>
          </ul>
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
          </Typography>
          <ul>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Stack: Nodejs/Meteor/Mongodb/Cordova
              </Typography>
            </li>
          </ul>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.index__richText}
          >
            Suitor: Find people you're interested in nearby and meetup as
            friends or something more
          </Typography>
          <ul>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.index__richText}
              >
                Stack : Nodejs/Meteor/Mongodb/Cordova
              </Typography>
            </li>
          </ul>
        </Collapse>
      </RichText>

      <RichText>
        <Typography variant="h6">Freelancer</Typography>
        <time className={classes.index__date}>
          On Upwork (formerly Elance) - 08/2011–07/2012
        </time>
      </RichText>
    </Section>
  )
}

export default withStyles(styles)(EmploymentSection)
