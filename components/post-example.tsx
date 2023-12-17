
import markdownStyles from './markdown-styles.module.css'

const PostExample = ({
  examples
}) => {
  
  const {example_1, example_2, example_3} = examples;
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        <h3>{example_1.title}</h3>
        <h5 className="mb-2">{example_1.subtitle}</h5>
        <img className="mb-2" src={example_1.url} alt="" />
        <div>{example_1.description}</div>
      </div>    
      <div className={markdownStyles['markdown']}>
        <h3>{example_2.title}</h3>
        <h5 className="mb-2">{example_2.subtitle}</h5>
        <img className="mb-2" src={example_2.url} alt="" />
        <div>{example_2.description}</div>
      </div>     
      <div className={markdownStyles['markdown']}>
        <h3>{example_3.title}</h3>
        <h5 className="mb-2">{example_3.subtitle}</h5>
        <img className="mb-2" src={example_3.url} alt="" />
        <div>{example_3.description}</div>
      </div>      
    </div>
  )
}

export default PostExample
