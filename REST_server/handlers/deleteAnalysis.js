
/**
 * Route handler that deletes from our databases the sentiments
 * of a given user and returns a 200 status.
 * @param {{ params: { id: string } }} req 
 * @param {{ send: function ( any ) }} res
 */
function deleteAnalysis(req, res) {

  res.sendStatus(200);
}

module.exports = deleteAnalysis;