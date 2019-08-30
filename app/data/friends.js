//You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

var friendArray = [
    {
        firstName: "Duane",
        lastName: "Stafford",
        photoURL: "https://s3.amazonaws.com/f6s-public/profiles/1538912_original.jpg",
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