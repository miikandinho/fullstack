import Part from './Part'

const Content = ({parts}) => {
    return (
      <div>
        {parts.map(parts =>
            <Part key={parts.id} content={parts.name} number={parts.exercises} />
        )}
      </div>
    )
  }

export default Content