
import Image from 'next/image';
import markdownStyles from './markdown-styles.module.css'

const PostExample = ({
  examples
}) => {
  return (
    <div className="max-w-2xl mx-auto">
      {
        examples.map((example) => {
          return (
            <div key={example.id} className={markdownStyles['markdown']}>
              <h3>{example.title}</h3>
              <h5 className="mb-2">{example.subtitle}</h5>
              {
                example.url && <Image className="mb-2" src={example.url} alt="" width={720} height={300} />
              }
              <p>{example.description}</p>
            </div>
          )
        })
      }
    </div>        
  )
}

export default PostExample
