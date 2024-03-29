// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        

        var bestMatch = {
            firstName: "",
            lastName: "",
            photo: "",
            friendDifference: 1000
        };

        // console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        // console.log("userScores",userScores);
        // console.log("userData", userData);

        var totalDifference = 0;

        for (var i = 0; i < friendsData.length; i++) {
            // console.log(friendsData[i]);
            totalDifference = 0;

            for (var j = 0; j < friendsData[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.firstName = friendsData[i].firstName;
                    bestMatch.lastName = friendsData[i].lastName;
                    console.log(friendsData[i]);
                    bestMatch.photo = friendsData[i].photoURL;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        friendsData.push(userData);
        // console.log(bestMatch);
        res.json(bestMatch);

    })



    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!


};
