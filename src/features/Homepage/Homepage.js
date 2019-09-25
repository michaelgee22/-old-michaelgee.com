import React from 'react'

import Button from '@material-ui/core/Button'

import useNavigation from '../../hooks/useNavigation'
import constants from '../../constants'

const Homepage = props => {
  const { navigateTo } = useNavigation()

  return (
    <div data-testid="rs-homepage-container">
      <h1>Homepage</h1>

      <Button
        onClick={() => navigateTo(constants.navigation.routePaths.counter)}
        data-testid="rs-homepage-counter-navBtn"
      >
        Navigate to Counter
      </Button>
      <Button
        onClick={() => navigateTo(constants.navigation.routePaths.dataTable)}
        data-testid="rs-homepage-dataTable-navBtn"
      >
        Navigate to Data Table
      </Button>
      <Button
        onClick={() => navigateTo(constants.navigation.routePaths.treeList)}
        data-testid="rs-homepage-treeList-navBtn"
      >
        Navigate to Tree List
      </Button>
    </div>
  )
}

export default Homepage