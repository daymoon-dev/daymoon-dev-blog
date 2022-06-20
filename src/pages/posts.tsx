import TitleTemplate from "../components/TitleTemplate";
import PageTemplate from "../components/PageTemplate";
import ContentTemplate from "../components/ContentTemplate";

export default function Posts() {
  return (
    <PageTemplate>
      <TitleTemplate title="echo" />
      <ContentTemplate />
    </PageTemplate>
  );
}
