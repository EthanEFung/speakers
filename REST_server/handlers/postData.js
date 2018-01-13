var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var speech_to_text = new SpeechToTextV1({
  username: //'{username}',
    password: //'{password}'
});

/**
 * Route handler that receives requests from clients with an https url that contains 
 * the desired mp3 analysis, and returns to the client a 200 status 
 * it posts the url to our databases.
 * @param {{ params: { id: string }, body: {} }} req 
 * @param {{ send: function ( any ) }} res 
 */
function postData(req, res) {
  console.log(req.body)
  res.sendStatus(201)
}



module.exports = postData;