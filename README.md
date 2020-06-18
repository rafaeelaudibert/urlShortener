# URL Shortener 📝

Custom URL Shortener, using MongoDB and AWS Lambda.

## Usage 🖥️

* Create a free MongoDB database (you can use [mlab](https://mlab.com/)).
* Fill the environment variables on `.env.sample` and copy it to `.env` file.
* Deploy the functions to AWS Lambda (or any other lambda provider, if you prefer)

### Shorten

Send a `POST` request to `/shorten`, with the `shortUrl` and `longUrl` parameters on body, and a `x-secret` headers, which should match the one filled on `.env` file, if you filled it.

### Redirect

Send a `GET` request to `/request/:shortUrl` passing the `shortUrl`, to be redirected to the `longUrl`.

## Author 🧙‍♂️

* [RafaAudibert](https://rafaaudibert.dev)
