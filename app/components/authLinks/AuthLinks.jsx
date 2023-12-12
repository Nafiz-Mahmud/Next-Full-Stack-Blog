import Link from "next/link";

export default function AuthLinks() {
  const status = "logged";
  return (
    <div>
      {status === "logged" ? (
        <>
          <Link href="/write">Write</Link>
          <button style={{ marginLeft: "2rem" }}>Log Out</button>
        </>
      ) : (
        <Link href="/login">Log In</Link>
      )}
    </div>
  );
}
