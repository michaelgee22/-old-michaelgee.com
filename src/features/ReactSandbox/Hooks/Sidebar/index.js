import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Buttons/Button'

import { useNavigation } from 'hooks/mg-hooks'

import { MG_ROUTE_PATHS } from 'constants/navigation'

import './Sidebar.css'

const HooksSidebar = props => {
  const { navigateTo } = useNavigation()

  return (
    <aside id="mg-hooks-sidebar">
      <Button
        text="Back to Categories"
        onClick={_onBackBtnClick}
        customColor={props.isCustom ? 'canada' : 'react'}
        iconName="arrow left"
        id="mg-hooks-sidebar-backBtn"
      />

      {props.hooksList.map(hook => (
        <div
          onClick={() => {
            if (props.currentHook !== hook) props.onSelectHookItem(hook)
          }}
          id={props.currentHook === hook ? 'mg-hook-currentlySelected' : undefined}
          className="mg-hook-item"
          key={hook}
        >
          {hook}
        </div>
      ))}
    </aside>
  )

  function _onBackBtnClick() {
    navigateTo(MG_ROUTE_PATHS.reactHooksCategories)
  }
}

HooksSidebar.propTypes = {
  hooksList: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentHook: PropTypes.string,
  onSelectHookItem: PropTypes.func.isRequired,
  isCustom: PropTypes.bool.isRequired
}

export default HooksSidebar
