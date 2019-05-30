var mongoose=require('mongoose');

// var dotEnv=require('dotenv');
// dotEnv.load();

// console.log(process.env.DB_URL)
mongoose.connect('mongodb://localhost:27017/shop',{useNewUrlParser: true});

mongoose.Promise=global.Promise;

//Create Schema and Model
var userSchema=mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email: String,
    password: String,
    role:{
        type:String,
        default:"user"
    },
    createdDt:{
        type:Date,
        default:Date.now
    }
});

exports.User=mongoose.model("User",userSchema,'users');

var itemSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    instock:{
        type:Number,
        required:true,
        default:100
    },
    image:{
        type:String
    },
    description:{
        type:String
    }
})

exports.Item=mongoose.model('Item',itemSchema,'items')

var orderSchema=mongoose.Schema({
    orderTotal:{
        type:Number,
        required:true
    },
    items: [{
        item: {
          id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
          },
          name: String
        },
        quantity:{
            type:Number,
            default:1
        },
    }],
    orderedBy: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        name: {
          type: String,
          required: true
        }
      },
    created: {
        type: Date,
        default: Date.now,
        required: true
    }
})

exports.Order=mongoose.model('Order',orderSchema,'orders')