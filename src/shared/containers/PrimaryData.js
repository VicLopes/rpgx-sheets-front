import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/primarydata.scss'

export const PrimaryData = ({ primaryDataObj }) => {
  return (
    <section id="primary-data">
      <p>
        Level: <span className="level">{primaryDataObj.level}</span>
      </p>
      <p>
        Class: <span className="class">{primaryDataObj.class}</span>
      </p>
      <p>
        Armor Class:
        <span className="armor-class">{primaryDataObj.armor_class}</span>
      </p>
      <p>
        Hit Points: <span className="hit-points">{primaryDataObj.hit_points}</span>
      </p>
      <p>
        Ancestry: <span className="ancestry">{primaryDataObj.ancestry}</span>
      </p>
    </section>
  )
}

PrimaryData.propTypes = {
  primaryDataObj: PropTypes.object,
}