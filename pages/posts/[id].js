import Layout from "../../components/layout";
import Date from "../../components/date";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

// Catch-all routes
// you can use [...id].js to catchall child paths such as "posts/a/b"
// if you do this, "getStaticPaths" has to return an array of ids such as "id": ["a", "b"]

// 404 pages
// you can create a 404 page at pages/404.js

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// remember that this only gets run at build time in production
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
  // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false
  // when fallback is "false", a 404 will be thrown when going to a non-generated page.

  // when "true", next will serve a "fallback" page (such as a skeleton or loading page) until the actual page has been generated.
  // This includes running "getStaticProps" for the specific id
  // you can have a large number of static pages that depend on data.
  // You pre-render a subset at build time and then the rest are generated after the first request comes in.
  // when it's a new page, "getStaticProps" will be run for that id and next will try to generate a page.
  // You can use "router.isFallback" to render a loading component
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }
  // this is likely what i'll want for fsbr

  // when "blocking", new paths will wait for the HTML to be generated and then it will be cached
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
