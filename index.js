const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
  },
];

app.get("/", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("Post method Hitten", req.body);
  //res.send("Post method Hitten");
  res.json(newUser);
});

app.get("/query", (req, res) => {
  const search = req.query.search.toLocaleLowerCase();
  if(search){
      const searchResult = users.filter((usr) =>
        usr.name.toLocaleLowerCase().includes(search)
      );
      res.send(searchResult);
  }
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
