export async function getServerSideProps({ res }) {
  const url = process.env.LUCY_URL || "https://app.getlucy.ai";
  res.writeHead(302, { Location: url });
  res.end();
  return { props: {} };
}
export default function Portal() { return null; }
