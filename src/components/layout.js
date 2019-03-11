/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <MuiThemeProvider>
          <CssBaseline />

          <Button variant="contained">
            Default
          </Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="secondary" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>

          <Button>Default</Button>
      <Button color="primary">
        Primary
      </Button>
      <Button color="secondary">
        Secondary
      </Button>
      <Button disabled>
        Disabled
      </Button>
      <Button href="#text-buttons">
        Link
      </Button>
      <input
        accept="image/*"
        id="text-button-file"
        multiple
        type="file"
      />
      <label htmlFor="text-button-file">
        <Button component="span">
          Upload
        </Button>
      </label>

          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
          </MuiThemeProvider>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
