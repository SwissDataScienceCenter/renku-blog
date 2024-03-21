import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";

export default function HomePageHeader() {
  const {
    siteConfig: { baseUrl },
  } = useDocusaurusContext();
  const { pathname } = useLocation();

  if (pathname !== baseUrl) {
    return null;
  }

  return (
    <div className="container margin-top--lg">
      <div className="row">
        <section className="col col--9">
          <Heading as="h1">The Renku blog</Heading>
          <p>
            Posts about new Renku features, platform design, reproducibility in
            data science, solutions to engineering challenges, and Renku
            use-cases.
          </p>
        </section>
      </div>
    </div>
  );
}
