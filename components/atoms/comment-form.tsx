import { useState } from "react";
import LoginButton from "./login-button";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogoutButton from "./logout-button";

interface CommentFormProps {
  handleSubmit: (commentText: string) => void;
}

interface CommentFormWithUserProps extends CommentFormProps {
  user?: {
    name?: string | null | undefined;
    picture?: string | null | undefined;
  };
}

export function CommentFormWithHooks(props: CommentFormProps) {
  const { user } = useUser();

  return <CommentForm user={user} handleSubmit={props.handleSubmit} />;
}

export function CommentForm(props: CommentFormWithUserProps) {
  const [comment, setComment] = useState<string>("");

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    props.handleSubmit(comment);
    setComment("");
  };

  return (
    <>
      {!props.user && (
        <form>
          <textarea disabled></textarea>
          <LoginButton />
        </form>
      )}
      {props.user && (
        <form onSubmit={formSubmit}>
          {props.user.name}
          {props.user.picture && <img src={props.user.picture} />}
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
