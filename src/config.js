const { MONGO_URI, MONGO_DATABASE, MONGO_COLLECTION, SECRET } = process.env

module.exports = {
  mongoCollection: MONGO_COLLECTION,
  mongoDatabase: MONGO_DATABASE,
  mongoUri: MONGO_URI,
  secretKey: SECRET,
}
