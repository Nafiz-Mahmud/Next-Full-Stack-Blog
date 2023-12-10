import "./comments.scss";
import Image from "next/image";
import Link from "next/link";
export default function Comments() {
  const status = "authenticated";
  return (
    <div className="comments">
      <h1 className="comments_title">Comments</h1>
      {status === "authenticated" ? (
        <div className="write">
          <textarea
            name="commnet_input"
            id="comment_input"
            placeholder="Write a comment"
            className="comment_input"
          ></textarea>
          <button className="post_comment">Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className="all_comments">
        <div className="comment">
          <div className="user">
            <div className="comment_img_container">
              <Image src="/p1.jpeg" alt="user image" fill />
            </div>
            <div className="user_info">
              <h1 className="username">Jhon Doe</h1>
              <h1 className="date">01.01.1001</h1>
            </div>
          </div>
          <div className="text">
            <p className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quae
              molestias distinctio dolores autem cumque!
            </p>
            <br />
            <hr />
          </div>
        </div>
        <div className="comment">
          <div className="user">
            <div className="comment_img_container">
              <Image src="/p1.jpeg" alt="user image" fill />
            </div>
            <div className="user_info">
              <h1 className="username">Jhon Doe</h1>
              <h1 className="date">01.01.1001</h1>
            </div>
          </div>
          <div className="text">
            <p className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quae
              molestias distinctio dolores autem cumque!
            </p>
            <br />
            <hr />
          </div>
        </div>
        <div className="comment">
          <div className="user">
            <div className="comment_img_container">
              <Image src="/p1.jpeg" alt="user image" fill />
            </div>
            <div className="user_info">
              <h1 className="username">Jhon Doe</h1>
              <h1 className="date">01.01.1001</h1>
            </div>
          </div>
          <div className="text">
            <p className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quae
              molestias distinctio dolores autem cumque!
            </p>
            <br />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
