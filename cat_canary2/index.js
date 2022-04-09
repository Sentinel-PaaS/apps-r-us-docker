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

function pad(value) {
  value = String(value);
  if (value.length < 2) {
    return "0" + value;
  } else {
    return value;
  }
}

function timeStamp() {
  var date = new Date(Date.now());
  return `${+date.getDate()}/${+(date.getMonth()+1)}/${+date.getFullYear()}-${pad(+date.getHours())}:${pad(+date.getMinutes())}:${pad(+date.getSeconds())}`;
}

app.get('/', (req, res) => {
  console.log(`[${timeStamp()}] GET/: 200`)
  res.render('index', {
    title: 'Dogs-R-Us',
    message: 'Dogs-R-Us',
    //gif: getRandomGif(gifs)
    gif: getNextGif(gifs)
  })
})

app.get('/login', (req, res) => {
  console.log(`[${timeStamp()}] GET/login: 404`);
  res.status(404).json({
    status: 404,
    message: "Login page does not exist"
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})