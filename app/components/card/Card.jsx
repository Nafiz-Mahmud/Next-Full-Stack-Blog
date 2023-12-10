import Link from "next/link";
import Image from "next/image";
import "./card.scss";
export default function Card() {
  return (
    <div className="card">
      <div className="img_container">
        <Image src="/p1.jpeg" fill />
      </div>
      <div className="text_container">
        <h1 className="details">
          01.01.1001 - <span className="cat">Culture</span>
        </h1>
        <Link href="#" className="post_title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, earum?{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          unde, eligendi adipisci repellat, aliquam repudiandae fuga at nam
          commodi blanditiis voluptatum. Autem explicabo, beatae dolore soluta
          obcaecati veritatis dicta delectus.
        </p>
        <Link href="#" className="btn">
          Read More
        </Link>
      </div>
    </div>
  );
}
