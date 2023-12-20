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
          <Heading as="h1">About the Renku blog</Heading>
          <p>
            Here you will find articles about reproducibility in data science,
            technical solutions to engineering problems and use-cases of the
            Renku platform.
          </p>
        </section>
      </div>
    </div>
  );
}
