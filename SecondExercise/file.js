const { mongoClient, MongoClient, ObjectId } = require("mongodb");
const uri = require("./atlas_uri");
console.log(uri);

const client = new MongoClient(uri);
const dbname = "bank";
const collection_name = "accounts";
const accountsCollection = client.db(dbname).collection(collection_name);
const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`connected to the ${dbname} database`);
    } catch (err) {
        console.error(`Error connecting to the database : ${err}`);
    }
};

const sampleAccount = {
    account_holder: "kojit elias",
    accoutn_id: "KE78787878",
    account_type: "checking",
    balance: 9000000,
    last_updated: new Date(),
};
const sampleAccounts = [
    {
        account_holder: "kojit elias",
        accoutn_id: "KE78787870",
        account_type: "checking",
        balance: 9000000,
        last_updated: new Date(),
    },
    {
        account_holder: "senedu elias",
        accoutn_id: "KE78787871",
        account_type: "checking",
        balance: 9000000,
        last_updated: new Date(),
    },
    {
        account_holder: "mihret elias",
        accoutn_id: "KE78787872",
        account_type: "checking",
        balance: 9000000,
        last_updated: new Date(),
    },
    {
        account_holder: "shashe elias",
        accoutn_id: "KE78787873",
        account_type: "checking",
        balance: 9000000,
        last_updated: new Date(),
    },
];
// const main = async () => {
//   try {
//       await connectToDatabase();
//       //uncomment this for inserting one document
//     //let result = await accountsCollection.insertOne(sampleAccount);
//    // console.log(`Inserted document: ${result.insertedId}`);

//       //uncomment this for inserting many documents to the collection
//       let result = await accountsCollection.insertMany(sampleAccounts)
//       console.log(`Inserted document: ${result.insertedCount} documents`)
//       console.log(result)
//   } catch (err) {
//     console.error(`Error inserting document : ${err}`);
//   } finally {
//     await client.close();
//   }
// };
// main();

// finding documents
// const findDocument = { balance: { $gt: 8000000 } };

// const findDoc = async () => {
//   try {
//     await connectToDatabase();
//     //uncomment this to find one specified document from a collection
//       //and we can filter a single document with specific object id
//     //let result = await accountsCollection.findOne()
//     // console.log(`Found one document`)
//     // uncomment this to find many documents acording to the filter
//     let result = accountsCollection.find(findDocument);

//     let docCount = accountsCollection.countDocuments(findDocument);
//     await result.forEach((doc) => console.log(doc));
//     console.log(`Found ${await docCount} documents`);
//   } catch (err) {
//     console.error(`Error inserting document : ${err}`);
//   } finally {
//     await client.close();
//   }
// };
// findDoc();

//***updating documents */
const documentToUpdate = { _id: ObjectId("63ead3496e503b2011d6c8775") };
const update = { $inc: { balance: 1000 } };

const updateDoc = async () => {
    try {
        await connectToDatabase();
        let result = await accountsCollection.updateOne(documentToUpdate, update);
        result.modifiedCount = 1
            ? console.log("updated one document")
            : console.log("no documents updated");
    } catch (err) {
        console.error(`Error updating documen : ${err}`);
    } finally {
        await client.close();
    }
};
updateDoc();