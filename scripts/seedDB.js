const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Movies collection and inserts the movies below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const movieSeed = [
  {
    title: "The Grey",
    director: "Joe Carnahan",
    synopsis:
    "Following a grueling five-week shift at an Alaskan oil refinery, workers led by sharpshooter John Ottway (Liam Neeson) are flying home for a much-needed vacation. A brutal storm causes their plane to crash in the frozen wilderness, and only eight men (Frank Grillo, Dermot Mulroney), including Ottway, survive. As they trek southward toward civilization and safety, Ottway and his companions must battle mortal injuries, the icy elements, and a pack of hungry wolves.",
    date: new Date(Date.now())
  },
  {
    title: "How to Train Your Dragon",
    director: "Dean DeBlois, Chris Sanders",
    synopsis:
    "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
    date: new Date(Date.now())
  },
  {
    title: "I Can Do Bad All by Myself",
    director: "Tyler Perry",
    synopsis:
    "When Madea (Tyler Perry) catches three young siblings raiding her home, she takes matters into her own hands and delivers the children to their only relative: Aunt April (Taraji P. Henson). At first, April, a boozy nightclub singer who leeches off her married boyfriend, wants nothing to do with them, but when a Mexican immigrant named Sandino (Adam Rodriguez) rents a room in her basement, April begins to realize that life may hold more possibilities.",
    date: new Date(Date.now())
  },
  {
    title: "The Blind Side",
    director: "John Lee Hancock",
    synopsis:
    "Michael Oher (Quinton Aaron), a homeless black teen, has drifted in and out of the school system for years. Then Leigh Anne Tuohy (Sandra Bullock) and her husband, Sean (Tim McGraw), take him in. The Tuohys eventually become Michael's legal guardians, transforming both his life and theirs. Michael's tremendous size and protective instincts make him a formidable force on the gridiron, and with help from his new family and devoted tutor, he realizes his potential as a student and football player.",
    date: new Date(Date.now())
  },
  {
    title: "The Lion King",
    director: "Jon Favreau",
    synopsis:
    "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother -- and former heir to the throne -- has plans of his own. The battle for Pride Rock is soon ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. Now, with help from a curious pair of newfound friends, Simba must figure out how to grow up and take back what is rightfully his.",
    date: new Date(Date.now())
  },
  {
    title: "Eragon",
    director: "Stefen Fangmeier",
    synopsis:
     "Eragon (Ed Speleers), a poor farm boy, lives in Alagaesia, a kingdom ruled by Galbatorix (John Malkovich), a powerful but evil monarch. One day, Eragon discovers a beautiful stone that he soon realizes is a dragon's egg. When the creature hatches, Eragon sets forth on a path that could restore the glory of his homeland's legendary Dragon Riders and perhaps overthrow Galbatorix.", 
    date: new Date(Date.now())
  },
  {
    title: "The Incredibles",
    director: "Brad Bird",
    synopsis:
      "In this lauded Pixar animated film, married superheroes Mr. Incredible (Craig T. Nelson) and Elastigirl (Holly Hunter) are forced to assume mundane lives as Bob and Helen Parr after all super-powered activities have been banned by the government. While Mr. Incredible loves his wife and kids, he longs to return to a life of adventure, and he gets a chance when summoned to an island to battle an out-of-control robot. Soon, Mr. Incredible is in trouble, and it's up to his family to save him.",
    date: new Date(Date.now())
  },
  {
    title: "Planet Earth",
    director: "David Attenborough",
    synopsis:
    "Dazzling, state-of-the-art high-definition imagery highlights this breathtaking documentary series featuring footage of some of the world's most awe-inspiring natural wonders -- from the oceans to the deserts to the polar ice caps. Actress Sigourney Weaver narrates this American version of the original BBC production.",
    date: new Date(Date.now())
  },
  {
    title: "The Pursuit of Happiness",
    director: "Gabriele Muccino",
    synopsis:
      "Life is a struggle for single father Chris Gardner (Will Smith). Evicted from their apartment, he and his young son (Jaden Christopher Syre Smith) find themselves alone with no place to go. Even though Chris eventually lands a job as an intern at a prestigious brokerage firm, the position pays no money. The pair must live in shelters and endure many hardships, but Chris refuses to give in to despair as he struggles to create a better life for himself and his son.",
    date: new Date(Date.now())
  },
  {
    title: "Karate Kid",
    director: "John G. Avildsen",
    synopsis:
      "Daniel (Ralph Macchio) moves to Southern California with his mother, Lucille (Randee Heller), but quickly finds himself the target of a group of bullies who study karate at the Cobra Kai dojo. Fortunately, Daniel befriends Mr. Miyagi (Noriyuki \"Pat\" Morita), an unassuming repairman who just happens to be a martial arts master himself. Miyagi takes Daniel under his wing, training him in a more compassionate form of karate and preparing him to compete against the brutal Cobra Kai.",
    date: new Date(Date.now())
  },
  {
    title: "The Good, the Bad and the Ugly",
    director: "Sergio Leone",
    synopsis:
      "In the Southwest during the Civil War, a mysterious stranger, Joe (Clint Eastwood), and a Mexican outlaw, Tuco (Eli Wallach), form an uneasy partnership -- Joe turns in the bandit for the reward money, then rescues him just as he is being hanged. When Joe's shot at the noose goes awry during one escapade, a furious Tuco tries to have him murdered. The men re-team abruptly, however, to beat out a sadistic criminal and the Union army and find $20,000 that a soldier has buried in the desert.",
    date: new Date(Date.now())
  },
  {
    title: "Casablanca",
    director: "Michael Curtiz",
    synopsis:
     "Rick Blaine (Humphrey Bogart), who owns a nightclub in Casablanca, discovers his old flame Ilsa (Ingrid Bergman) is in town with her husband, Victor Laszlo (Paul Henreid). Laszlo is a famed rebel, and with Germans on his tail, Ilsa knows Rick can help them get out of the country.", 
    date: new Date(Date.now())
  },
  {
    title: "The Purge",
    director: "James DeMonaco, Gerard McMurray",
    synopsis:
      "A wealthy family are held hostage for harboring the target of a murderous syndicate during the Purge, a 12-hour period in which any and all crime is legal.",
    date: new Date(Date.now())
  },
  {
    title: "Nerve",
    director: "Henry Joost, Ariel Schulman",
    synopsis:
      "Industrious high school senior Vee Delmonico (Emma Roberts) is tired of living life on the sidelines. Pressured by her friends, Vee decides to join Nerve, a popular online game that challenges players to accept a series of dares. It's not long before the adrenaline-fueled competition requires her to perform increasingly dangerous stunts. When Nerve begins to take a sinister turn, Vee finds herself in a high-stakes finale that will ultimately determine her entire future.",
    date: new Date(Date.now())
  },
  {
    title: "Would You Rather",
    director: "David Guy Levy",
    synopsis:
      "Iris (Brittany Snow) and seven other desperate people become trapped in Shepard's (Jeffrey Combs) mansion. Shepard forces them to play a sadistic game for a large sum of money -- but the dilemmas become increasingly deadly.",
    date: new Date(Date.now())
  },
  {
    title: "Malibu's Most Wanted",
    director: "John Whitesell",
    synopsis:
      "The son of a wealthy politician (Ryan O'Neal), Brad Gluckman (Jamie Kennedy) tries to emulate urban street culture and aspires to be a rapper, going by the name of \"B-Rad.\" In order to discourage Brad from pursuing his thug-inspired antics, his dad hires two African-American actors, Sean (Taye Diggs) and PJ (Anthony Anderson), to pose as gang members and introduce the naïve youth to real ghetto life. Things don't go as planned when it becomes clear that Sean and PJ are as sheltered as Brad.",
    date: new Date(Date.now())
  }
];

db.Movie
  .remove({})
  .then(() => db.Movie.collection.insertMany(movieSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
