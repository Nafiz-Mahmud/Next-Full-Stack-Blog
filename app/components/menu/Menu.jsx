import Link from "next/link";
import Image from "next/image";
import "./menu.scss";
export default function Menu() {
  return (
    <div className="menu">
      <h2 className="subtitle">{"What's hot"}</h2>
      <h1 className="title">Most Popular</h1>
      <div className="items">
        <Link href="#" className="item">
          <div className="img_container">
            <Image src="/p1.jpeg" alt="image" fill />
          </div>
          <div className="text_container">
            <h1 className="category">Travel</h1>
            <h3 className="post_title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              optio.
            </h3>
            <h1 className="detail">Jhon Doe - 01.01.1001</h1>
          </div>
        </Link>
        <Link href="#" className="item">
          <div className="img_container">
            <Image src="/p1.jpeg" alt="image" fill />
          </div>
          <div className="text_container">
            <h1 className="category">Travel</h1>
            <h3 className="post_title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              optio.
            </h3>
            <h1 className="detail">Jhon Doe - 01.01.1001</h1>
          </div>
        </Link>
        <Link href="#" className="item">
          <div className="img_container">
            <Image src="/p1.jpeg" alt="image" fill />
          </div>
          <div className="text_container">
            <h1 className="category">Travel</h1>
            <h3 className="post_title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              optio.
            </h3>
            <h1 className="detail">Jhon Doe - 01.01.1001</h1>
          </div>
        </Link>
      </div>
      <div className="topics">
        <h1 className="subtitle">Discover by topic</h1>
        <h1 className="title">Categories</h1>
        <div className="links">
          <Link href="#">Style</Link>
          <Link href="#">Fashion</Link>
          <Link href="#">Food</Link>
          <Link href="#">Travel</Link>
          <Link href="#">Culture</Link>
          <Link href="#">Coding</Link>
        </div>
      </div>
      <div className="editors_pick">
        <h1 className="subtitle">Chosen by editor</h1>
        <h1 className="title">Editors Pick</h1>
        <div className="items">
          <Link href="#" className="item">
            <div className="img_container">
              <Image src="/p1.jpeg" alt="image" fill />
            </div>
            <div className="text_container">
              <h1 className="category">Travel</h1>
              <h3 className="post_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                optio.
              </h3>
              <h1 className="detail">Jhon Doe - 01.01.1001</h1>
            </div>
          </Link>
          <Link href="#" className="item">
            <div className="img_container">
              <Image src="/p1.jpeg" alt="image" fill />
            </div>
            <div className="text_container">
              <h1 className="category">Travel</h1>
              <h3 className="post_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                optio.
              </h3>
              <h1 className="detail">Jhon Doe - 01.01.1001</h1>
            </div>
          </Link>
          <Link href="#" className="item">
            <div className="img_container">
              <Image src="/p1.jpeg" alt="image" fill />
            </div>
            <div className="text_container">
              <h1 className="category">Travel</h1>
              <h3 className="post_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                optio.
              </h3>
              <h1 className="detail">Jhon Doe - 01.01.1001</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
