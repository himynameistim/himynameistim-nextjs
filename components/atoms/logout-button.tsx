import { useRouter } from "next/router";

export default function LogoutButton() {
  const router = useRouter();
  return <a href={`/api/auth/logout?returnTo=${router.asPath}`}>Logout</a>;
}
