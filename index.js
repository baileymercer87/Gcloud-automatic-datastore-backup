const { GoogleAuth } = require('google-auth-library');


module.exports.backup = async function(req, response) {
    const BUCKET_NAME = `gs://signoff-bucket`

    try {
        const auth = new GoogleAuth({
            scopes: 'https://www.googleapis.com/auth/cloud-platform',
        })

        const client = await auth.getClient()

        const projectId = await auth.getProjectId()

        const res = await client.request({
            method: 'POST',
            url: `https://datastore.googleapis.com/v1/projects/${projectId}:export`,
            data: {
                outputUrlPrefix: BUCKET_NAME,
            },
        })

        response.sendStatus(200)
    } catch (error) {
        console.log
        response.sendStatus(500)
    }
}
