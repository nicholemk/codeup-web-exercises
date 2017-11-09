"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];
    //
    // const evens = findLanguages.filter(function(id) {
    //     return (languages >= 3);
    // });
    // console.log(evens);
    //
    //
    //
    // const namesToEmail = email.map(function(user) {
    //     return namesToEmail;
    // });
    // console.log(email);
    //
    //
    //
    // const findKey = users.reduce((id, name, email, languages) => {
    //     return (array);
    // });
    //


// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

        const filteredUsers = users.filter((element) => {
            return element.languages.length >= 3;
        });

        console.log(filteredUsers);

//     Use .map to create an array of strings where each element is a user's email address

        let arrayOfEmails = [];

        users.forEach((element) => {
            arrayOfEmails.push(element.email);
        })

        console.log(arrayOfEmails);


// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user

        const usersObject = users.reduce((object, user) => {
            object["id"] = user;
            return object;

            }, {});

        console.log(usersObject);

