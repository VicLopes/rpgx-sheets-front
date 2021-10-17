import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/primarydata.scss'

export const PlayerData = ({ playerDataObj }) => {
  return (
    <section id="player-data">
      <p>
      Name:
      <span className="character-name">{playerDataObj.character_name}</span>
      </p>
      <p>
      Player Name:
      <span className="player-name">{playerDataObj.player.player_name}</span>
      </p>
    </section>
  )
}

PlayerData.propTypes = {
  playeryDataObj: PropTypes.object,
}