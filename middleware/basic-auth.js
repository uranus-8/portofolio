// frontend/middleware/basic-auth.js

export default function ({ req, res }) {
  if (process.server) {
    const auth = { login: 'uranus', password: 'VVqZz7r7eZNr' }

    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    if (login !== auth.login || password !== auth.password) {
      res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="401"' })
      res.end('Unauthorized')
    }
  }
}
