import React, { Component } from 'react'
import Link from 'next/link'

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <React.Fragment>
        <section className="error-area ptb-60">
          <div className="container">
            <div className="error-content text-center">
              {/* <img src={require("@images/404.png")} alt="error" /> */}

              <h3 className="mt-3">{this.props.statusCode} Page Not Found</h3>
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>

              <Link href="/">
                <button className="btn btn-light">Go to Home</button>
              </Link>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Error
