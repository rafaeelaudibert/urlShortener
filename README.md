# URL Shortener 📝

> **No longer deployed.** This ran at `url.rafaaudibert.dev` on AWS Lambda and API
> Gateway until September 2026, when the AWS account was decommissioned in favour of
> Cloudflare. The endpoints below no longer resolve. The code is kept for reference and
> still works if you deploy it yourself, following the instructions below.

Custom URL Shortener, using MongoDB and AWS Lambda.

## Usage 🖥️

* Create a free MongoDB database (you can use [Mongo Atlas M0](https://www.mongodb.com/cloud/atlas)).
* Fill the environment variables on `.env.sample` and copy it to `.env` file.
* Deploy the functions to AWS Lambda (or any other lambda provider, if you prefer)
* Configure your domain manager to point to it

### Configuring domain on AWS

Using Route 53 and API Gateway:

* In Lambdas, select the app you just created (probably with the name url-shortener-prd)
* In the Resources tab, click on the link to access ApiGatewayRestApi
* In API Gateway, select "Custom domain names"
* Create a new domain name in the format you want, for example, `url.yourdomain.com`. It will create a new domain in the format `<id>.execute-api.<your-region>.amazonaws.com`
* On Route53, create a new A type record, pointing to the domain created above

## Endpoints ⚡

### Shorten

Send a `POST` request to `/shorten`, with the `shortUrl` and `longUrl` parameters on body, and a `x-secret` headers, which should match the one filled on `.env` file, if you filled it.

### Redirect

Send a `GET` request to `/request/:shortUrl` passing the `shortUrl`, to be redirected to the `longUrl`.

## What is missing?

[ ] Find a way to solve the manual step to configure the domain, using, probably, [serverless-domain-manager](https://github.com/amplify-education/serverless-domain-manager).

## Author 🧙‍♂️

* [RafaAudibert](https://rafaaudibert.dev)
