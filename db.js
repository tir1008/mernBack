// const mongoose = require('mongoose');
// const mongoURI="mongodb://tirtheshpancholi:BharaT%40-1008@ac-4nqmmfj-shard-00-00.0hrg670.mongodb.net:27017,ac-4nqmmfj-shard-00-01.0hrg670.mongodb.net:27017,ac-4nqmmfj-shard-00-02.0hrg670.mongodb.net:27017/RoyalVegDelightmern?ssl=true&replicaSet=atlas-14mnhq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//         if (err) console.log("---" + err)
//         else {
//             // var database =
//             console.log("connected to mongo")
//             const foodCollection = await mongoose.connection.db.collection("food_items");
//             foodCollection.find({}).toArray(async function (err, data) {
//                 const categoryCollection = await mongoose.connection.db.collection("Categories");
//                 categoryCollection.find({}).toArray(async function (err, Catdata) {
//                     callback(err, data, Catdata);

//                 })
//             });
//             // listCollections({name: 'food_items'}).toArray(function (err, database) {
//             // });
//             //     module.exports.Collection = database;
//             // });
//         }
//     })
// };
const mongoose = require('mongoose');
const mongoURI="mongodb://tirtheshpancholi:BharaT%40-1008@ac-4nqmmfj-shard-00-00.0hrg670.mongodb.net:27017,ac-4nqmmfj-shard-00-01.0hrg670.mongodb.net:27017,ac-4nqmmfj-shard-00-02.0hrg670.mongodb.net:27017/RoyalVegDelightmern?ssl=true&replicaSet=atlas-14mnhq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
mongoose.Promise=global.Promise;
const mongoDB= async ()=>{
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log('MongoDB Connected');
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        const catData =  await foodCategory.find({}).toArray();
        console.log();
        global.food_items = data;
        global.foodCategory = catData;
        // console.log(global.food_items)
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = mongoDB;