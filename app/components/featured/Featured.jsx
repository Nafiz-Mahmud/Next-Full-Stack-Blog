import "./featured.scss";
import Image from "next/image";
export default function Featured() {
  return (
    <div className="featured">
      <h1 className="title">
        <b>Hey, Metal Here!</b>
        <br /> Discover my stories and creative ideas...
      </h1>
      <div className="post">
        <div className="imgContainer">
          <Image src="/p1.jpeg" fill />
        </div>
        <div className="text">
          <h1 className="postTitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
            quis?
          </h1>
          <p className="postDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sunt
            impedit quibusdam minima id cupiditate, exercitationem voluptatibus
            et nobis nemo consectetur nihil suscipit consequuntur placeat
            commodi modi distinctio explicabo quo?
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
}
