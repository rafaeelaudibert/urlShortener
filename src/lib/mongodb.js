const { MongoClient } = require( 'mongodb' )

const config = require( '../config' )

const URI = config.mongoUri
const DATABASE_NAME = config.mongoDatabase
const COLLECTION_NAME = config.mongoCollection

class MongoDB {
  constructor() {
    this.client = new MongoClient(
      URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    this.isConnected = false
  }

  connect() {
    return this.client.connect()
  }

  close() {
    return this.client.close()
  }

  getCollection() {
    return this.client.db( DATABASE_NAME ).collection( COLLECTION_NAME )
  }

  insertLink( { shortUrl, longUrl } ) {
    return this.getCollection()
      .insertOne( {
        count: 0,
        longUrl,
        shortUrl,
      } )
  }

  getLink( shortUrl ) {
    return this.getCollection().findOne( { shortUrl } )
  }

  increaseCounter( shortUrl ) {
    return this.getCollection().updateOne(
      { shortUrl },
      { $inc: { count: 1 } },
    )
  }
}

module.exports = MongoDB
