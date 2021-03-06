import React from "react"
import Bookmark from "./bookmark"
import PropTypes from "prop-types"
import Quality from "./quality"

const User = ({
  name,
  _id,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onDelete,
  onToggleBookmark
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((i) => (
          <Quality {...i} key={i._id} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <Bookmark status={bookmark} onClick={() => onToggleBookmark(_id)} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>
          delete
        </button>
      </td>
    </tr>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
  bookmark: PropTypes.bool.isRequired
}

export default User
