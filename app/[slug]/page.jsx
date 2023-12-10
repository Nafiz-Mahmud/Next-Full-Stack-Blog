import "./single_page.scss";
import Image from "next/image";
import Menu from "../components/menu/Menu";
import Comments from "../components/comments/Comments";
export default function SinglePage() {
  return (
    <div className="single_page">
      <div className="info">
        <div className="text">
          <h1 className="post_title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            veritatis.
          </h1>
          <div className="user">
            <div className="user_image">
              <Image src="/p1.jpeg" alt="image" fill className="image" />
            </div>
            <div className="user_text">
              <h1 className="username">Jhon Doe</h1>
              <h2 className="date">01.01.1001</h2>
            </div>
          </div>
        </div>
        <div className="image_container">
          <Image src="/p1.jpeg" alt="image" fill className="image" />
        </div>
      </div>
      <div className="content">
        <div className="post">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            soluta veniam fugiat dolorum autem nostrum in totam obcaecati ex
            aliquid vero molestiae est delectus, molestias dicta ab deleniti.
            Nemo nobis quo obcaecati ad ullam ut praesentium voluptatibus quis
            blanditiis itaque ipsa vero maxime, fuga perspiciatis numquam rerum,
            illum corrupti ex magni molestias voluptatem? Facere dignissimos
            obcaecati maxime perspiciatis accusantium iusto architecto officia
            quo, ab quae dolores soluta! Ab tempore ipsam aut illum quam
            reiciendis laborum ut aperiam, quia earum distinctio eos labore
            commodi? Voluptate quos reprehenderit debitis. Debitis totam
            exercitationem perferendis a eveniet mollitia quae officia tempore
            necessitatibus? Laboriosam, fugiat.
          </p>
          <Comments />
        </div>
        <div className="single_menu">
          <Menu />
        </div>
      </div>
    </div>
  );
}
