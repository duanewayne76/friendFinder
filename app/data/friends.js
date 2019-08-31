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
      
    },

    {
      firstName: "David",
      lastName: "Hasselhoff",
      photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Hoff_3.jpg/800px-Hoff_3.jpg",
      scores: [
          3,
          3,
          3,
          3,
          5,
          3,
          3,
          3,
          3,
          5
      ]
    
  },
  {
    firstName: "Dwayne",
    lastName: "Johnson",
    photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/800px-Dwayne_Johnson_2%2C_2013.jpg",
    scores: [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ]
  
},


  ];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;