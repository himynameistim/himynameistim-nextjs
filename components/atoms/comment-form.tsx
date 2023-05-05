interface CommentFormsProps {
  authenticated: boolean;
}

export default function CommentForm(props: CommentFormsProps) {
  return (
    <>
      {!props.authenticated && (
        <form>
          <textarea disabled></textarea>
          <button>Login</button>
        </form>
      )}
      {props.authenticated && (
        <form>
          <textarea></textarea>
          <button>Post</button>
        </form>
      )}
    </>
  );
}
