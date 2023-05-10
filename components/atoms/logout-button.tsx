import { useRouter } from "next/router";
import ButtonLink from "./buttonLink";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <ButtonLink href={`/api/auth/logout?returnTo=${router.asPath}`}>
      Logout
    </ButtonLink>
  );
}
