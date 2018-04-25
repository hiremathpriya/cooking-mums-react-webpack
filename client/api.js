import request from 'superagent'

//const registerURL = HOST_URL + '/api/v1/registrations'
//const imagesURL = HOST_URL + '/api/v1/images'

const registerURL = '/api/v1/registrations'
const imagesURL = '/api/v1/images'

// export function getWidgets (callback) {
//   request
//     .get(widgetUrl)
//     .end((err, res) => {
//       callback(err, res.body)
//     })
// }

export function registerUser (user, callback) {
  request
    .post(registerURL)
    .withCredentials(true)
    .send(user)
    .end((err, res) => {
      //console.log("received response ", res);
      callback(err, res)
    })
}

export function getImages (callback) {
  request
    .get(imagesURL)
    .withCredentials(true)
    .end((err, res) => {
      //console.log("received response ", res.body.images);
      callback(err, res.body.images)
    })
}