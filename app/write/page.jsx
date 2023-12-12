"use client";
import { useState } from "react";
import "./write.scss";
import Image from "next/image";
export default function Write() {
  const [open, SetOpen] = useState(false);
  return (
    <div className="write">
      <input type="text" placeholder="Title" />
      <div className="editor">
        <button className="edit_button">
          <Image src="/plus.png" alt="edit" width={16} height={16} />
        </button>
      </div>
    </div>
  );
}
