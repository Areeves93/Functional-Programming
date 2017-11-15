var stocking=[
    {itemid:245647, 
    name:'Beats wireless Headphones',
    price: 129.99,
    description:'Powerful sound and audio technology'
    },

    {itemid:345528,
    name:'Nintendo Switch',
    price: 299.99,
    description: 'A gaming console you can play both at home and on-the-go.'
    },

    { itemid:456315,
      name:'Blu Studio Mega',
      price:99.99,
      description:'A smartphone with a 6.0inch screen and beautiful graphics'
    },
    { itemid:154568,
      name:'Samsung Smart Tv',
      price:349.99,
      description:'Beautiful 4k display and wifi built in wifi and front camera'
    },
    { itemid:681142,
      name:'Android USB charging cable',
      price:5.00,
      description:'10ft android mirco usb charging cable'
    },
]
class NewProducts{
    constructor(stocking){
        this.stocking=stocking
        this.names=this.getNames(this.stocking)
        this.saleItems=this.getSaleItems(this.stocking)
        this.salePrice=this.orderItems(this.stocking)
    }
    getNames(stocking){
      let a = stocking.map((stock)=>{
        // console.log(stock.name);
        return stock.name 
      })
      // console.log(a);
      return a.sort()
    }
    getSaleItems(stocking){
      return stocking.filter((stock)=>{
       if(stock.price<6){
        return true
       } else{
         false
       }
       
      })
    }
    orderItems(stocking){
      let totalSalePrice = stocking.reduce((acc,stock)=>{
        return acc + stock.price
      },0)
      return `$${(totalSalePrice * 35).toFixed(2)}`
    }
}
let newproducts= new NewProducts(stocking)

console.log(newproducts.names)
console.log(newproducts.saleItems)
console.log(newproducts.salePrice)