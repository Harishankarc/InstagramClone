import Post from "./Post";
import Stories from "./Stories";

export default function Feed() {
    return (
      <div className="w-[50%] mt-5 overflow-y-scroll">
        <div className="flex justify-center">
          <Stories />
        </div>
        <div className="ml-20 mr-20 mt-10">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <Post key={index} />
            ))}
        </div>
      </div>
    );
  }