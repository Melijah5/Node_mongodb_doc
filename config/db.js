import mongoos from 'mongoose'

const connectionString = async() =>{
    try{
        const conn = await mongoos.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`mongodb connected: ${conn.connection.host}`)

    }catch(error){
        console.log(`Error: ${error.message}`)

    }
}

export default connectionString;