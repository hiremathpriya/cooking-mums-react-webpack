import request from 'superagent'

const registerURL = 'http://localhost:3000/api/v1/registrations'

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
      console.log("received response ", res);
      callback(err, res)
    })
}