import { LogoContainer } from "./styles/logo.style";

export default function Logo({ children }: { children: React.ReactNode }) {
  return <LogoContainer className="logo">{children}</LogoContainer>;
}
