import './Panel.css';

const Panel = ({ background, className, handleClick, index, title }) => {
  return (
    <div className={className} onClick={() => handleClick(index)} style={{ backgroundImage: `url("${background}")` }}>
      <h3>{title}</h3>
    </div>
  )
}

export default Panel;
