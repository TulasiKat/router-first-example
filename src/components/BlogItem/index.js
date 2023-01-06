// Write your JS code here
const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <li>
      <div className="first-line">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
