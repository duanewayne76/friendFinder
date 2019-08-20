//You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

var friendArray = [
    {
        firstName: "Duane",
        lastName: "Stafford",
        photoURL: "afhhttps://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpgaque89",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
      
    }
  ];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;