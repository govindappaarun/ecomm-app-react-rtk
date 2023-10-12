import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url = "http://localhost:3000/posts";

export default function CrudOperations() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get(url).then((res) => setPosts(res.data));
  };

  useEffect(() => {
    getPosts();
  }, []);

  const notify = (msg) => toast(msg || "Wow so easy!");

  const handleDelete = (id) => {
    axios.delete(`${url}/${id}`).then((res) => {
      console.log(res);
      notify("Deleted post successfully!");
      getPosts();
    });
  };

  const handleCreatePost = () => {
    axios
      .post(url, {
        userId: 2,
        title: "aaaaaaaaaaabbbbcccc",
        body: "zzzzzzzzzzzzzzzzzzzzzzzzzzz",
      })
      .then((res) => {
        console.log(res);
        notify("Created !");
        getPosts();
      });
  };

  const handleCreatePatch = () => {
    axios
      .patch(`${url}/1`, {
        body: "pppppppppppppppppppppppppppp",
      })
      .then(() => {
        notify("Patched successfully!");
        getPosts();
      });
  };
  return (
    <div>
      <h3>Posts - CRUD</h3>
      <hr />
      <ToastContainer />
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        );
      })}
      <div>
        <button onClick={handleCreatePost}>Create Post</button>
      </div>
      <div>
        <button onClick={handleCreatePatch}>Patch Post</button>
      </div>
    </div>
  );
}
