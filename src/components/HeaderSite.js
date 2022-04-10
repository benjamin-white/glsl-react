import React, { useState } from 'react'
import style from './HeaderSite.module.css'

const HeaderSite = ({ items, updateSurface }) => {

  const [currentName, setCurrentName] = useState(items[0])

  const handleClick = (name) => {
    updateSurface(name)
    setCurrentName(name)
  }

  return (
    <header className={style.header}>
      {items.map(name => 
        <button 
          className={`${style.button} ${name === currentName ? style.isCurrent : ''}`} 
          onClick={handleClick.bind(null, name)}
        >{name}</button>
      )}
    </header>
  )

}

export default HeaderSite