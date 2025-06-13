const Total = ({parts}) => {
    return (
      <div>
        <b>
          Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
        </b>
      </div>
    )
  }

export default Total