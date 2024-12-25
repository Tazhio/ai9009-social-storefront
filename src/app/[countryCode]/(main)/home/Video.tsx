import ClientOnly from "./ClientOnly"
import PostMain from "./PostMain"
import { PostWithProfile } from "./types"

export const Video = () => {
  //   let { allPosts, setAllPosts } = usePostStore()
  //   useEffect(() => {
  //     setAllPosts()
  //   }, [])

  const allPosts: PostWithProfile[] = [
    {
      id: "id",
      user_id: "user_id",
      video_url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      text: "MAGA!",
      created_at: new Date().toLocaleString(),
      profile: {
        user_id: "user_id",
        name: "Trump",
        image: "",
      },
    },
  ]
  return (
    <>
      <div className="mt-[80px]  w-[calc(100%-90px)] max-w-[1280px] ml-auto mr-auto">
        <ClientOnly>
          {allPosts.map((post, index) => (
            <PostMain post={post} key={index} />
          ))}
        </ClientOnly>
      </div>
    </>
  )
}
