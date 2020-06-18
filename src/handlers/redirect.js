const MongoDb = require( '../lib/mongodb' )
const STATUS_HTTP = require( '../lib/statusCode' )

module.exports.handler = async( event ) => {
  const { url } = event.pathParameters

  const client = new MongoDb()

  let longUrl = null
  try {
    await client.connect()

    const result = await client.getLink( url )

    if ( result ) {
      await client.increaseCounter( url )
      longUrl = result.longUrl // eslint-disable-line prefer-destructuring
    }
  } catch ( error ) {
    console.error(
      'An error occurred',
      error
    )

    return { statusCode: STATUS_HTTP.INTERNAL_SERVER_ERROR }
  } finally {
    await client.close()
  }

  if ( longUrl ) {
    return {
      headers: {
        Location: longUrl,
      },
      statusCode: STATUS_HTTP.REDIRECT,
    }
  }

  return {
    statusCode: STATUS_HTTP.NOT_FOUND,
  }
}

