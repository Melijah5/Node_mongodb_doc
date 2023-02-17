import Products from "./model/productModel.js"
import Users from "./model/userModel.js"
import connectionString from './config/db.js'
import products from "./data/products.js"
import users from "./data/users.js"

import dotenv from 'dotenv'


dotenv.config()
connectionString()

const importData = async() => {
    try{
        // Existing collection
        await Products.deleteMany({})
        await Users.deleteMany({})

        const createUsers = await Users.insertMany(users)
        const adminUser = createUsers[0]._id

        const addProducts = products.map((pro) => {
            return { ...pro, adminUser }
        })

        //on the fly
        await Products.insertMany(addProducts)
        console.log('data inserted')

    }catch(error){
        console.log(`${error.message}`)

    }

}

const destroyData = async()=> {

    try{
        await Products.deleteMany()
        await Users.deleteMany()

        console.log('data deleted')
    }catch(error) {
        console.log(`${error.message}`)
    }

}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}