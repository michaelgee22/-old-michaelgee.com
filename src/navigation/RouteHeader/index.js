import React from 'react'

// import IconButton from '@material-ui/core/IconButton'
// import HomeIcon from '@material-ui/icons/Home'

import { Button } from 'semantic-ui-react'

import { useHistory, useLocation } from 'react-router-dom'

import { RS_ROUTE_PATHS } from 'constants/navigation'

import './RouteHeader.css'

const RouteHeader = () => {
  const history = useHistory()
  const location = useLocation()
  const isHomepage = location.pathname === RS_ROUTE_PATHS.homepage

  return (
    <div id="rs-header-container" data-testid="rs-header-container">
      {!isHomepage ? (
        // <IconButton
        //   id="rs-header-icon"
        //   onClick={history.goBack}
        //   title="Navigate to homepage"
        //   data-testid="rs-header-iconBtn"
        // >
        //   <HomeIcon />
        // </IconButton>
        <Button icon="home" content="Home" />
      ) : (
        <div className="rs-header-hidden" />
      )}
      <div>{_configureRouteTitle(location.pathname)}</div>
      <div className="rs-header-hidden" />
    </div>
  )

  function _configureRouteTitle(pathname) {
    if (isHomepage) {
      return 'React Sandbox'
    } else {
      const routePath = pathname
        .split('/')[1]
        .split('-')
        .map(item => item.charAt(0).toUpperCase() + item.slice(1))
        .join(' ')

      return routePath
    }
  }
}

export default RouteHeader
