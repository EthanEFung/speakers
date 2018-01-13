
/**
 * A route handler that searches receives a GET request from a client
 * and returns the sentiment analysis of processed mp3s in the form of JSON.
 * @param {{ params: { id: string } }} req 
 * @param {{ send: function ( any ) }} res
 */
function fetchAnalysis(req, res) {

  res.send(req.params.id);
}

module.exports = fetchAnalysis;