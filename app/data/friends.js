//You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

var friendArray = [
    {
        firstName: "Duane",
        lastName: "Stafford",
        photoURL: "https://media.licdn.com/dms/image/C4D03AQEWsrD-ctBQ-Q/profile-displayphoto-shrink_200_200/0?e=1571875200&v=beta&t=17QzD1m_nu9MrYmHaFfv65ZodzsZLD6C2GZGJCPejKU",
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