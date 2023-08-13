export async function getStaticProps({ params }: { params: any }) {
  const id = params.id;

  const res = await fetch(`https://vnexpress.net/microservice/home?id=${id}`);
  const data = await res.json();

  return {
    props: {
      article: data,
    },
  };
}
