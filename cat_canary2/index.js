const express = require('express')
const app = express()
const port = 5000
const path = require('path')

//app.use(express.static('public'))

gifs = [
  "https://media.giphy.com/media/l3vQZX02NdzuWKnsI/giphy.gif",
  "https://media.giphy.com/media/dTH3e76xjh5e0/giphy.gif",
  "https://media.giphy.com/media/UGbu0ivp1UFqw/giphy.gif",
  "https://media.giphy.com/media/sEH3lMz5hMBEc/giphy.gif",
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
  res.render('index', {
    title: 'Dogs-R-Us',
    message: 'Dogs-R-Us',
    //gif: getRandomGif(gifs)
    gif: getNextGif(gifs)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})