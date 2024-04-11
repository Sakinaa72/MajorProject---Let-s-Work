import "./ScrollPosts.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import StartPost from "./StartPost";

function ScrollPosts() {
  return (
    <>
      {" "}
      <StartPost />
      <div className="ScrollPosts">
        <div className="userInfo">
          <img
            src="https://images.unsplash.com/photo-1567219934540-9f75f7b87552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVvdGVzfGVufDB8fDB8fHww"
            alt=""
          />
          <span>elite.mindsets</span>
          <p>2h</p>
        </div>
        <div className="post">
          <img
            src="https://images.unsplash.com/photo-1617251137884-f135eccf6942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHF1b3Rlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div className="likes">
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
          <ShareIcon />
        </div>
        <div className="caption">
          <p>Share a "YES" if this resonates with you right now...</p>
        </div>
        <div className="addComment">
          <input type="text" placeholder="Add a comment...." />
        </div>
      </div>
      <div className="ScrollPosts">
        <div className="userInfo">
          <img
            src="https://images.unsplash.com/photo-1567219934540-9f75f7b87552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVvdGVzfGVufDB8fDB8fHww"
            alt=""
          />
          <span>elite.mindsets</span>
          <p>2h</p>
        </div>
        <div className="post">
          <img
            src="https://images.unsplash.com/photo-1617251137884-f135eccf6942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHF1b3Rlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div className="likes">
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
          <ShareIcon />
        </div>
        <div className="caption">
          <p>Share a "YES" if this resonates with you right now...</p>
        </div>
        <div className="addComment">
          <input type="text" placeholder="Add a comment...." />
        </div>
      </div>
      <div className="ScrollPosts">
        <div className="userInfo">
          <img
            src="https://images.unsplash.com/photo-1567219934540-9f75f7b87552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVvdGVzfGVufDB8fDB8fHww"
            alt=""
          />
          <span>elite.mindsets</span>
          <p>2h</p>
        </div>
        <div className="post">
          <img
            src="https://images.unsplash.com/photo-1617251137884-f135eccf6942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHF1b3Rlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div className="likes">
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
          <ShareIcon />
        </div>
        <div className="caption">
          <p>Share a "YES" if this resonates with you right now...</p>
        </div>
        <div className="addComment">
          <input type="text" placeholder="Add a comment...." />
        </div>
      </div>
    </>
  );
}

export default ScrollPosts;
