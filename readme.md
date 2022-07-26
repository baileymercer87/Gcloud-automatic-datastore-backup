Description:

A simple JS function which creates backups of a google datastore and stores them in a specified bucket. This app should be deployed as a cloud function and can then be set as a scheduler job so automatic backups are made at specified intrevals.

Deployment:

To deploy the cloud function:
`gcloud functions deploy backup --runtime nodejs16 --trigger-http --allow-unauthenticated --region {REGION} --stage-bucket {BUCKET NAME} --service-account {YOUR SERVICE ACCOUNT}`

To run automatic backups and set up a scheduler job (Replace URI with your cloud function URI):
`gcloud scheduler jobs create http backup-1min --schedule "* * * * *" --uri "https://europe-west3-sse-5-project.cloudfunctions.net/backup" --http-method GET`
