import PostCard from "./components/PostCard";
import { useGetPostsQuery } from "./redux/api"

function App() {

  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  return (
    <div>
      <h1>my app</h1>
      {isLoading?(<div>Loading...</div>):
        (data?.map((i)=> (
          <PostCard key={i.id} post={i}/>
        )))
      }
    </div>
  )
}

export default App
