import React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import App from 'next/app'
import { DefaultSeo } from 'next-seo'
import Router from 'next/router'
import NProgress from 'nprogress'

import withRedux from 'next-redux-wrapper'
import { initStore } from '../src/store/store'

NProgress.configure({ showSpinner: true })

Router.onRouteChangeStart = () => {
  NProgress.start()
  document.body.classList.add('loading')
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
  document.body.classList.remove('loading')
}

Router.onRouteChangeError = () => {
  NProgress.done()
  document.body.classList.remove('loading')
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { originalUrl } = ctx.req || {}
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
      originalUrl,
    }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <>
        <DefaultSeo
          title="TexKleen Dashboard"
          description="TexKleen Dashboard"
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: '',
            site_name: '',
          }}
        />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" type="image/png" href="#" />
          <link rel="apple-touch-icon" href="#" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    )
  }
}

export default withRedux(initStore)(MyApp)
