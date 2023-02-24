// import TokenRepository from '../../domain/token/token.repository.js'

// export async function verifyToken (req, res, next) {
//   const tokenRepository = new TokenRepository()
//   const token = req.headers.authorization || req.headers['x-access-token']
//   console.log({ token })
//   if (!token) {
//     return res.status(401).json({ error: 'UnAuthorized User!' })
//   }
//   tokenRepository.verifyToken(token).then((error, user) => {
//     if (error) res.json({ error })
//     req.user = user
//     next()
//   })
// }

import TokenRepository from '../../domain/token/token.repository.js'

export async function verifyToken (req, res, next) {
  const tokenRepository = new TokenRepository()
  const token = req.headers.authorization || req.headers['x-access-token']
  console.log({ token })
  if (!token) {
    return res.status(401).json({ error: 'UnAuthorized User!' })
  }
  try {
    const user = await tokenRepository.verifyToken(token)
    req.user = user
    next()
  } catch (error) {
    res.json({ error })
  }
}
