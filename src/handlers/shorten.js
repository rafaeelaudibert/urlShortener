const MongoDb = require( '../lib/mongodb' )
const STATUS_HTTP = require( '../lib/statusCode' )

const { secretKey } = require( '../config' )

module.exports.handler = async( event ) => {
  // Authorize shortUrl creation
  const { 'x-secret': xSecretHeader } = event.headers
  if ( secretKey && secretKey !== xSecretHeader ) {
    return { statusCode: STATUS_HTTP.UNAUTHORIZED }
  }

  const { shortUrl, longUrl } = JSON.parse( event.body )
  const client = new MongoDb()

  try {
    await client.connect()

    await client.insertLink( {
      longUrl,
      shortUrl,
    } )

  } catch ( error ) {
    console.error(
      'An error occurred',
      error
    )

    return { statusCode: STATUS_HTTP.INTERNAL_SERVER_ERROR }
  } finally {
    await client.close()
  }

  return {
    statusCode: STATUS_HTTP.CREATED,
  }
}

