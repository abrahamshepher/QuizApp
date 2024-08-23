const questions = [
  {
    id: 1,
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the hero in the 80s animated video game 'Dragon's Lair'?",
    answers: [
      "Dirk the Daring",
      "Arthur",
      "Sir Toby Belch",
      "Guy of Gisbourne",
    ],
  },
  {
    id: 2,
    category: "Animals",
    type: "multiple",
    difficulty: "easy",
    question: "What is the scientific name for modern day humans?",
    answers: [
      "Homo Sapiens",
      "Homo Ergaster",
      "Homo Erectus",
      "Homo Neanderthalensis",
    ],
  },
  {
    id: 3,
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "What is Ron Weasley's middle name?",
    answers: ["Bilius", "Arthur", "John", "Dominic"],
  },
  {
    id: 4,
    category: "Entertainment: Comics",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the creator of the comic series 'The Walking Dead'?",
    answers: [
      "Robert Kirkman",
      "Stan Lee",
      "Malcolm Wheeler-Nicholson",
      "Robert Crumb",
    ],
  },
  {
    id: 5,
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "At the start of a standard game of Monopoly, if you throw a double six, which square would you land on?",
    answers: ["Electric Company", "Water Works", "Chance", "Community Chest"],
  },
  {
    id: 6,
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of Jamaica?",
    answers: ["Kingston", "Rio de Janeiro", "Dar es Salaam", "Kano"],
  },
  {
    id: 7,
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "When did Jamaica receive its independence from England?",
    answers: ["1962", "1492", "1963", "1987"],
  },
  {
    id: 8,
    category: "Animals",
    type: "boolean",
    difficulty: "easy",
    question: "Kangaroos keep food in their pouches next to their children.",
    answers: ["False", "True"],
  },
  {
    id: 9,
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "In 2013 how much money was lost by Nigerian scams?",
    answers: ["$12.7 Billion", "$95 Million", "$956 Million", "$2.7 Billion"],
  },
  {
    id: 10,
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "How old was Lyndon B. Johnson when he assumed the role of President of the United States?",
    answers: ["55", "50", "60", "54"],
  },
  {
    id: 11,
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In World of Warcraft lore, who organized the creation of the Paladins?",
    answers: [
      "Alonsus Faol",
      "Uther the Lightbringer",
      "Alexandros Mograine",
      "Sargeras, The Daemon Lord",
    ],
  },
  {
    id: 12,
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "medium",
    question: "In the game 'Subnautica', a 'Cave Crawler' will attack you.",
    answers: ["True", "False"],
  },
  {
    id: 13,
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the device that allows for infinite energy in the anime 'Dimension W'?",
    answers: ["Coils", "Wires", "Collectors", "Tesla"],
  },
  {
    id: 14,
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of Cream the Rabbit's mom in the 'Sonic the Hedgehog' series?",
    answers: ["Vanilla", "Peach", "Strawberry", "Mint"],
  },
  {
    id: 15,
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "These two countries held a commonwealth from the 16th to 18th century.",
    answers: [
      "Poland and Lithuania",
      "Hutu and Rwanda",
      "North Korea and South Korea",
      "Bangladesh and Bhutan",
    ],
  },
  {
    id: 16,
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these voices wasn't a choice for the House AI in 'The Simpsons Treehouse of Horror' short, House of Whacks?",
    answers: [
      "George Clooney",
      "Matthew Perry",
      "Dennis Miller",
      "Pierce Brosnan",
    ],
  },
  {
    id: 17,
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "From which album is the Gorillaz song, 'On Melancholy Hill' featured?",
    answers: ["Plastic Beach", "Demon Days", "Humanz", "The Fall"],
  },
  {
    id: 18,
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question:
      "Scotland voted to become an independent country during the referendum from September 2014.",
    answers: ["False", "True"],
  },
  {
    id: 19,
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Left 4 Dead, which campaign has the protagonists going through a subway in order to reach a hospital for evacuation?",
    answers: ["No Mercy", "Subway Sprint", "Hospital Havoc", "Blood Harvest"],
  },
  {
    id: 20,
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the last colony the UK ceded marking the end of the British Empire?",
    answers: ["Hong Kong", "India", "Australia", "Ireland"],
  },
];

export default questions;
