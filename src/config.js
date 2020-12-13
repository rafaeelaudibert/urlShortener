const { MONGO_URI, MONGO_DATABASE, MONGO_COLLECTION, ENDPOINT_SECRET } = process.env

module.exports = {
  mongoCollection: MONGO_COLLECTION,
  mongoDatabase: MONGO_DATABASE,
  mongoUri: MONGO_URI,
  secretKey: ENDPOINT_SECRET,
}
