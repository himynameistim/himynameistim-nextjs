import { useState } from "react";

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

  return (
    <>
      {!props.authenticated && (
        <form>
          <textarea disabled></textarea>
          <button>Login</button>
        </form>
      )}
      {props.authenticated && (
        <form onSubmit={formSubmit}>
          <textarea
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
          ></textarea>
          <button>Add Comment</button>
        </form>
      )}
    </>
  );
}
