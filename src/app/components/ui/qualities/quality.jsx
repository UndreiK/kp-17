import React from "react"
import PropTypes from "prop-types"
import { useQuality } from "../../../hooks/useQuality"

const Quality = ({ id }) => {
  const { getQuality } = useQuality()
  const { color, name } = getQuality(id)
  return (
    <span key={id} className={`badge m-2 bg-${color}`}>
      {name}
    </span>
  )
}

Quality.propTypes = {
  id: PropTypes.string.isRequired
}

export default Quality
