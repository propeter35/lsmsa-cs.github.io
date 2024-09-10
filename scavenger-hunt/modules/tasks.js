export let tasks = {
  categories: [
    {
      id: "g000000",
      name: "uncategorized",
      cards: [
        {
          id: "c000000",
          name: "The power of Python!",
          description: "Code some scripts in the Python programming language.",
          icon: "code",
          skills: ["Coding"],
          tasks: [
            {
              id: "t000000",
              name: "Code",
              description: "desc",
              group: {
                discriminator: "level",
                value: "1",
              },
            },
            {
              id: "t000001",
              name: "Coder",
              description: "desc",
              group: {
                discriminator: "level",
                value: "2",
              },
            },
            {
              id: "t000002",
              name: "Codest",
              description: "desc",
              group: {
                discriminator: "level",
                value: "3",
              },
            },
          ],
        },
      ],
    },
  ],
};
