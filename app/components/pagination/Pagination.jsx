import "./pagination.scss";
import Link from "next/link";
export default function Pagination() {
  return (
    <div className="pagination">
      <div className="btns">
        <Link href="#" className="previous">
          Previous
        </Link>
        <Link href="#" className="next">
          Next
        </Link>
      </div>
    </div>
  );
}
