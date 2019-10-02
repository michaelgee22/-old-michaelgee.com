import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'

import useNavigation from '../../hooks/useNavigation'
import constants from '../../constants'

import { useStyles } from './styles'

const RouteHeader = props => {
  const { currentRoute } = props
  const isHomepage = currentRoute === '/' ? true : false
  const { navigateTo } = useNavigation()
  const classes = useStyles()

  return (
    <div className={classes.headerContainer}>
      {!isHomepage ? (
        <IconButton
          onClick={() => navigateTo(constants.navigation.routePaths.homepage)}
          className={classes.headerIcon}
          title="Navigate to homepage"
          data-testid="rs-header-iconBtn"
        >
          <HomeIcon />
        </IconButton>
      ) : (
        <div className={classes.divHidden} />
      )}
      <div>{_configureRouteTitle(currentRoute, isHomepage)}</div>
      <div className={classes.divHidden} />
    </div>
  )

  function _configureRouteTitle(routePath, isHomepage) {
    if (isHomepage) {
      return 'React Sandbox'
    } else {
      routePath = routePath
        .split('/')[1]
        .split('-')
        .map(item => item.charAt(0).toUpperCase() + item.slice(1))
        .join(' ')

      return routePath
    }
  }
}

RouteHeader.propTypes = {
  currentRoute: PropTypes.string.isRequired
}

export default RouteHeader
