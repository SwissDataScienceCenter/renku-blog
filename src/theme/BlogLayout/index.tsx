import HomePageHeader from "@site/src/components/HomePageHeader";
import type { Props } from "@theme/BlogLayout";
import BlogSidebar from "@theme/BlogSidebar";
import Layout from "@theme/Layout";
import clsx from "clsx";

// Original <BlogLayout> but with <HomePageHeader> added.
export default function BlogLayout(props: Props) {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <HomePageHeader />
      <div className="container margin-vert--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx("col", {
              "col--7": hasSidebar,
              "col--9 col--offset-1": !hasSidebar,
            })}
            itemScope
            itemType="https://schema.org/Blog"
          >
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
