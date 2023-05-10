import { useRouter } from "next/router";
import ButtonLink from "./buttonLink";
export default function LoginButton() {
  const router = useRouter();
  return (
    <ButtonLink href={`/api/auth/login?returnTo=${router.asPath}`}>
      Login
    </ButtonLink>
  );
}
