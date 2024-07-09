// app/(home)/page.js

import App from "../components/App";
import { getAlldetailsUrl } from "../helpers/apiurl";

export default async function HomePage() {
  let projects = [];
  let categories = [];

  try {
    const response = await fetch(getAlldetailsUrl, {
      credentials: "include",
    });

    const data = await response.json();

    projects = data.projects
      .map((item) => {
        const { _id, __v, createdAt, ...rest } = item;
        return rest;
      })
      .sort((a, b) => {
        if (
          a.projectCategory === "advanced" &&
          b.projectCategory !== "advanced"
        ) {
          return -1;
        }
        if (
          a.projectCategory !== "advanced" &&
          b.projectCategory === "advanced"
        ) {
          return 1;
        }
        if (
          a.projectCategory === "advanced" &&
          b.projectCategory === "advanced"
        ) {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        }
        return 0;
      });

    categories = data.category.map((item) => item.name);
    categories.unshift("All");
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  return (
    <App
      projects={projects}
      categories={categories}
    />
  );
}
