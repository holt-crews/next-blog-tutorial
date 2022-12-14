// you can make some stupid simple apis on this thing. Fantastic for basic CRUD I'm guessing

/*
Notes:

- Do not fetch a route from getStaticProps or getStaticPaths
  - these functions never run client-side and are not included in the js bundle for the browser. This means it is safe to write database queries here
- you can create dynamic api routes of course
*/

export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}
