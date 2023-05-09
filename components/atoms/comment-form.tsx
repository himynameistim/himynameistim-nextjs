import { useState } from "react";
import LoginButton from "./login-button";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogoutButton from "./logout-button";

interface CommentFormsProps {
  authenticated: boolean;
  handleSubmit: (commentText: string) => void;
}

export default function CommentForm(props: CommentFormsProps) {
  const [comment, setComment] = useState<string>("");

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    props.handleSubmit(comment);
    setComment("");
  };

  const { user } = useUser();

  return (
    <>
      {!user && (
        <form>
          <textarea disabled></textarea>
          <LoginButton />
        </form>
      )}
      {user && (
        <form onSubmit={formSubmit}>
          {user.name}
          {user.picture && <img src={user.picture} />}
          <textarea
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
          ></textarea>
          <button>Add Comment</button>
          <LogoutButton />
        </form>
      )}
    </>
  );
}
