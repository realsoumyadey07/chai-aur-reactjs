
const PostsCard = ({posts}:{posts: Post}) => {
  return (
    <div>
        <h4>{posts.title}</h4>
        <p>{posts.body}</p>
    </div>
  )
}

export default PostsCard