import componentsImage from '../../assets/components.png'
export default function CoreConcepts({image, title, description}){
    return(
      <ul>
        <li>
          <img src={image} alt={title}/>
          <h2>{title}</h2>
          <p>{description}</p>
        </li>
      </ul>
    );
  }
  