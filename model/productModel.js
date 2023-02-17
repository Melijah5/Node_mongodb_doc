import mongoos from 'mongoose'


const reviewCount = mongoos.Schema({
    name: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    }, 
    comment:{
        type: String,
        required: true
    }
})


const productSchema = mongoos.Schema({

    user:{
        type: mongoos.Schema.Types.ObjectId,
        ref:'Users',
        // required: true
    },

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }, 
    brand:{
        type: String,
        required: true

    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true

    },
    countInStock:{
        type: Number,
        required: true,
        default: 0
    },
    reviews: [reviewCount],
    rating:{
        type: Number,
        required: true,
        default: 0
    }

},{
    timestamps: true
})

const Products = mongoos.model('Products' , productSchema)
export default Products