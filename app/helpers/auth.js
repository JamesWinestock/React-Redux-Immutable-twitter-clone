export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() =>
      resolve({
        name: 'James Winestock',
        avatar: "https://s-media-cache-ak0.pinimg.com/originals/52/73/78/527378a38d8aed1ea95c9ccc118ecad3.jpg",
        uid: 'jameswinestock'
    }), 2000)
  })
}
