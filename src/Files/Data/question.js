const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Stephen King", "George Orwell"],
    answer: "Harper Lee",
  },
  {
    question: "Which animal is known as the 'king of the jungle'?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    answer: "Lion",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["W", "H2O", "O2", "H2"],
    answer: "H2O",
  },
  {
    question: "Who is credited with the discovery of gravity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    answer: "Isaac Newton",
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["Japan", "China", "South Korea", "Vietnam"],
    answer: "Japan",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Blue Whale", "African Elephant", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    answer: "Au",
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "J.D. Salinger", "Mark Twain"],
    answer: "F. Scott Fitzgerald",
  },
  {
    question: "Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Neptune", "Uranus", "Mercury"],
    answer: "Earth",
  },
  {
    question: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    answer: "Alexander Graham Bell",
  },
  {
    question: "Which gas do plants use for photosynthesis?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
    answer: "Charles Babbage",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Mercury",
  },
  {
    question: "Who is known as the 'King of Pop'?",
    options: ["Michael Jackson", "Elvis Presley", "Frank Sinatra", "Prince"],
    answer: "Michael Jackson",
  },
  {
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Pt", "Cu"],
    answer: "Ag",
  },
  {
    question: "Who is the author of 'Harry Potter' series?",
    options: ["J.K. Rowling", "Stephenie Meyer", "J.R.R. Tolkien", "George R.R. Martin"],
    answer: "J.K. Rowling",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Robert Koch"],
    answer: "Alexander Fleming",
  },
  {
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Au", "Ag", "Cu"],
    answer: "Fe",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Hydrogen", "Oxygen", "Nitrogen", "Helium"],
    answer: "Hydrogen",
  },
  {
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"],
    answer: "George Orwell",
  },
  {
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "No", "Ni"],
    answer: "Na",
  },
  {
    question: "Who painted 'Starry Night'?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Vincent van Gogh",
  },
  {
    question: "Which is the smallest bone in the human body?",
    options: ["Stapes", "Femur", "Tibia", "Fibula"],
    answer: "Stapes",
  },
  {
    question: "Who is known as the 'Queen of Soul'?",
    options: ["Aretha Franklin", "Whitney Houston", "Tina Turner", "Beyoncé"],
    answer: "Aretha Franklin",
  },
  {
    question: "What is the chemical symbol for carbon?",
    options: ["C", "Co", "Ca", "Cu"],
    answer: "C",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Stephen King", "George Orwell"],
    answer: "Harper Lee",
  },
  {
    question: "Which animal is known as the 'king of the jungle'?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    answer: "Lion",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["W", "H2O", "O2", "H2"],
    answer: "H2O",
  },
  {
    question: "Who is credited with the discovery of gravity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    answer: "Isaac Newton",
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["Japan", "China", "South Korea", "Vietnam"],
    answer: "Japan",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Blue Whale", "African Elephant", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    answer: "Au",
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "J.D. Salinger", "Mark Twain"],
    answer: "F. Scott Fitzgerald",
  },
  {
    question: "Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Neptune", "Uranus", "Mercury"],
    answer: "Earth",
  },
  {
    question: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    answer: "Alexander Graham Bell",
  },
  {
    question: "Which gas do plants use for photosynthesis?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
    answer: "Charles Babbage",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Mercury",
  },
  {
    question: "Who is known as the 'King of Pop'?",
    options: ["Michael Jackson", "Elvis Presley", "Frank Sinatra", "Prince"],
    answer: "Michael Jackson",
  },
  {
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Pt", "Cu"],
    answer: "Ag",
  },
  {
    question: "Who is the author of 'Harry Potter' series?",
    options: ["J.K. Rowling", "Stephenie Meyer", "J.R.R. Tolkien", "George R.R. Martin"],
    answer: "J.K. Rowling",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Robert Koch"],
    answer: "Alexander Fleming",
  },
  {
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Au", "Ag", "Cu"],
    answer: "Fe",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Hydrogen", "Oxygen", "Nitrogen", "Helium"],
    answer: "Hydrogen",
  },
  {
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"],
    answer: "George Orwell",
  },
  {
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "No", "Ni"],
    answer: "Na",
  },
  {
    question: "Who painted 'Starry Night'?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Vincent van Gogh",
  },
  {
    question: "Which is the smallest bone in the human body?",
    options: ["Stapes", "Femur", "Tibia", "Fibula"],
    answer: "Stapes",
  },
  {
    question: "Who is known as the 'Queen of Soul'?",
    options: ["Aretha Franklin", "Whitney Houston", "Tina Turner", "Beyoncé"],
    answer: "Aretha Franklin",
  },
  {
    question: "What is the chemical symbol for carbon?",
    options: ["C", "Co", "Ca", "Cu"],
    answer: "C",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
    answer: "William Shakespeare",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Robert Koch"],
    answer: "Alexander Fleming",
  },
  {
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Au", "Ag", "Cu"],
    answer: "Fe",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Hydrogen", "Oxygen", "Nitrogen", "Helium"],
    answer: "Hydrogen",
  },
  {
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"],
    answer: "George Orwell",
  },
  {
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "No", "Ni"],
    answer: "Na",
  },
  {
    question: "Who painted 'Starry Night'?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Vincent van Gogh",
  },
  {
    question: "Which is the smallest bone in the human body?",
    options: ["Stapes", "Femur", "Tibia", "Fibula"],
    answer: "Stapes",
  },
  {
    question: "Who is known as the 'Queen of Soul'?",
    options: ["Aretha Franklin", "Whitney Houston", "Tina Turner", "Beyoncé"],
    answer: "Aretha Franklin",
  },
  {
    question: "What is the chemical symbol for carbon?",
    options: ["C", "Co", "Ca", "Cu"],
    answer: "C",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Stephen King", "George Orwell"],
    answer: "Harper Lee",
  },
  {
    question: "Which animal is known as the 'king of the jungle'?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    answer: "Lion",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["W", "H2O", "O2", "H2"],
    answer: "H2O",
  },
  {
    question: "Who is credited with the discovery of gravity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    answer: "Isaac Newton",
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["Japan", "China", "South Korea", "Vietnam"],
    answer: "Japan",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Blue Whale", "African Elephant", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    answer: "Au",
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "J.D. Salinger", "Mark Twain"],
    answer: "F. Scott Fitzgerald",
  },
  {
    question: "Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Neptune", "Uranus", "Mercury"],
    answer: "Earth",
  },
  {
    question: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    answer: "Alexander Graham Bell",
  },
  {
    question: "Which gas do plants use for photosynthesis?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
    answer: "Charles Babbage",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Mercury",
  },
  {
    question: "Who is known as the 'King of Pop'?",
    options: ["Michael Jackson", "Elvis Presley", "Frank Sinatra", "Prince"],
    answer: "Michael Jackson",
  },
  {
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Pt", "Cu"],
    answer: "Ag",
  },
  {
    question: "Who is the author of 'Harry Potter' series?",
    options: ["J.K. Rowling", "Stephenie Meyer", "J.R.R. Tolkien", "George R.R. Martin"],
    answer: "J.K. Rowling",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Robert Koch"],
    answer: "Alexander Fleming",
  },
  {
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Au", "Ag", "Cu"],
    answer: "Fe",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Hydrogen", "Oxygen", "Nitrogen", "Helium"],
    answer: "Hydrogen",
  },
  {
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"],
    answer: "George Orwell",
  },
  {
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "No", "Ni"],
    answer: "Na",
  },
  {
    question: "Who painted 'Starry Night'?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Vincent van Gogh",
  },
  {
    question: "Which is the smallest bone in the human body?",
    options: ["Stapes", "Femur", "Tibia", "Fibula"],
    answer: "Stapes",
  },
  {
    question: "Who is known as the 'Queen of Soul'?",
    options: ["Aretha Franklin", "Whitney Houston", "Tina Turner", "Beyoncé"],
    answer: "Aretha Franklin",
  },
  {
    question: "What is the chemical symbol for carbon?",
    options: ["C", "Co", "Ca", "Cu"],
    answer: "C",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
    answer: "William Shakespeare",
  },
];

export default questions;
