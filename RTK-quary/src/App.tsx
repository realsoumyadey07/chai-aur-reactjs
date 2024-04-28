import PostsCard from "./components/PostsCard";
import { useGetPostsQuery } from "./redux/api"


function App() {

  const { isLoading, isError, isSuccess, data, error} = useGetPostsQuery("");
  console.log(isLoading, isError, isSuccess, data, error);
  
  return (
    <div>
      <h3>My App</h3>
      {
        data?.map(i=>(
          <PostsCard posts={i} key={i.id}/>
        ))
      }
    </div>
  )
}

export default App
