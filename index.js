require('dotenv').config();
let Person = require("./Person");
var mongoose = require('mongoose');
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

/////// Creating a single record

// var person1 = new Person({name: "Mohamed Ashaibi", age: 20, favouriteFoods: ["Apples", "Potatoes"]}) 
// person1.save() 
// .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })


/////// Creating many records using model.create

// var people = [{
//     name: "Ali Abdo",
//     age: 20,
//     favouriteFoods:["Tomatoes", "Food1", "Food2"]
// },
// {
//     name: "Waseeem Abdo",
//     age: 40,
//     favouriteFoods:["foods", "Food1", "Food2"]
// },
// {
//     name: "Haroun Abdo",
//     age: 25,
//     favouriteFoods:["Banana", "Food1", "Food2"]
// }]

// Person.create(people, function(err, doc){
//     if(err){
//         return console.log(err);
//     }
//     console.log("Created successfully!!!!");
// })

///////// Find record  using model.find

// Person.find({name: "Haroun Abdo"}, function(err, doc){
//     if(err){
//         return console.log("Couldnt find!");
//     }
//     console.log(doc)
// })

//////// Find record using model.findOne which has a specific food in its favouriteFoods

// Person.findOne({favouriteFoods: "Apples"}, function(err, doc){
//     if(err){
//         return console.log(err)
//     }
//     console.log(doc)
// })


//////// Fiind record by id

// Person.findById("5ffada5291367a0cec1da935", function(err, doc){
//     if(err){
//         return console.log(err)
//     }
//     console.log(doc)
// })

///////// Perform Classic Updates by Running Find, Edit, then Save

// Person.findOne({_id: "5ffada5291367a0cec1da935"}, function(err, doc){
//     if(err){
//         return console.log(err)
//     }
//     console.log("This is doc =" +doc)
//     doc.favouriteFoods.push("hamburgers")
//     console.log("This is doc =" +doc)
//     doc.save()
// })

////////// Perform update using findoneandupdate to change the age of a specific person to 20

// Person.findOneAndUpdate({name: "Haroun Abdo"}, {age: 20}, function(err, doc){
//     if(err){
//         return console.log(err)
//     }
//     console.log(doc)
// })

///////// Delete a record using findbyidandremove

// Person.findByIdAndRemove("5ffadd1e26b9a00b10d08fc6", function(err, doc){
//     if(err){
//         return console.log(err)
//     }
//     console.log(doc)
// })

/////////// Perform group remove using person.remove()

// Person.remove({name: "Ali Abdo"}, function(err, doc){
//     if(err){
//         return console.log(err)
//     }
//     console.log(doc)
// })

////////// Chain Search Query Helpers to Narrow Search Results

// Person.find({favouriteFoods: "foods"})                // skip the first 100 items
// .limit(2)                // limit to 10 items
// .sort({name: 1})      // sort ascending by firstName
// .select({name: true, favouriteFoods: true}) // select firstName only
// .exec()                   // execute the query
// .then(docs => {
//    console.log(docs)
//  })
// .catch(err => {
//    console.error(err)
//  })