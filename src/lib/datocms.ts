export default class DatoCMS {
  constructor() {}

  async request() {
    const response = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
      },
      body: JSON.stringify({
        query: `
          `,
      }),
    });

    const json = await response.json();
    const data = json.data.home;
  }
}
