import { PageTemplates } from "./styles/pageTemplate.style";

export default function PageTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTemplates>{children}</PageTemplates>;
}
