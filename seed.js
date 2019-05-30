var db=require('./db');

var seedItems=[
    {
        name:"Shirt",
        price:100,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    },
    {
        name:"Short",
        price:100,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    },
    {
        name:"Pant",
        price:100,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    },
    {
        name:"Saree",
        price:100,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    },
    {
        name:"Jeans",
        price:100,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    }
]

seedItems.forEach((item)=>{
    var newItem=new db.Item(item);
    newItem.save((err,item)=>{
        if(err) console.log("Failed to load item");
        console.log("Item:" +  item.name + " is added to shop database")
    });
})

console.log("Done")