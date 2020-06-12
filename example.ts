import { use } from "./mod.ts";

export const fetchUser = use("/user", async (req) => {
  return {
    status: 200,
    body: {
      name: "Bobby McTablesFace",
      age: 24,
      pet: "cat",
    },
  };
});

const results = await fetchUser("/user", {});
