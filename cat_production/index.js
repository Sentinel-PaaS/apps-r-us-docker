const express = require('express')
const app = express()
const port = 5000
const path = require('path')

//app.use(express.static('public'))

gifs = [
  "https://media.giphy.com/media/3o72EX5QZ9N9d51dqo/giphy.gif",
  "https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif",
  "https://media.giphy.com/media/3o85xqZZ20Sk51USTC/giphy.gif",
  "https://media.giphy.com/media/WXB88TeARFVvi/giphy.gif",
  "https://media.giphy.com/media/iTOS89Y0gD1ny/giphy.gif",
  "https://media.giphy.com/media/79KlcJHXNtpPW/giphy.gif"
]

// function getRandomGif(gifs) {
//   return gifs[Math.floor(Math.random() * gifs.length)]
// }

let index = 0;

function getNextGif(gifs) {
  if (index >= gifs.length) {
    index = 0;
  }
  let gif = gifs[index];
  index++;
  return gif;
}

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  console.log("GET/: 200")
  res.render('index', {
    title: 'Cats-R-Us',
    message: 'Cats-R-Us',
    //gif: getRandomGif(gifs)
    gif: getNextGif(gifs)
  })
})

app.get('/login', (req, res) => {
  console.log("GET/login: 200")
  res.status(200).json({
    status: 200,
    message: "Successful login!"
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})