import styled    from '@emotion/styled'
import {connect} from 'react-redux'
import { useState } from 'react'

const HeaderSite = ({ items, currentName, switchSurface }) => {

  const Header = styled.header({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    right: 0,
    top: 0,
    position: 'fixed',
    zIndex: 10,
    padding: '1rem 2rem',
  })

  const Button = styled.button(({ isCurrent }) => ({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color .5s ease-out, opacity .5s ease-out',
    opacity: isCurrent ? .6 : 1,
    pointerEvents: isCurrent ? 'none' : 'all',
    '&:hover': {
      color: 'pink',
    }
  }))

  const [current, setCurrent] = useState(currentName)

  return (
    <Header>
      {items.map(name => 
        <Button key={name} isCurrent={name === current} onClick={() => setCurrent(name)}>{name}</Button>
      )}
    </Header>
  )

}

const select= (surfaceName) => ({
  type: 'SWITCH_SURFACE',
  payload: surfaceName
})

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  switchSurface: (name) => dispatch(select(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSite)