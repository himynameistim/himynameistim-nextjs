import { useRouter } from "next/router";
export default function LoginButton() {
  const router = useRouter();
  return <a href={`/api/auth/login?returnTo=${router.asPath}`}>Login</a>;
}
