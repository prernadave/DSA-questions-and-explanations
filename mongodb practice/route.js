const express  = require('express');const { Book } = require('./schems');
const { record } = require('./record');
const  router = express.Router();


// --------------------------------------------all books-------------------
router.get('/books', async(req,res)=>{
  try {
    const data = await Book.find();
    console.log(data);
    res.json({data: data})
  } catch (error) {
    res.send({error:error.message})
  }
})

// -----------------------------  Get price book by low to high -----------------------------

router.get('/book', async (req, res) => {
    const l = req.query.price_low;
    const h = req.query.price_high;
    console.log(l, h);
  
    try {
      const data = await Book.find({ price: { $gte: l, $lte: h } });
     
      res.send(data);
    } catch (error) {
      res.send({ error: error.message });
    }
  });

//   --------------------get book by genre --------------------

  router.get('/book/gen', async(req, res)=>{
    const genre = req.query.genre;
    try {
        const data = await Book.find({ genre:  genre  });
        console.log(data);
     
      res.send(data);
    } catch (error) {
        res.send({error:error.message})
    }
  })

// --------------------------Add book in db--------------------------------------
  
router.post('/books', async(req,res)=>{
const {title,genre,price,author}=req.body;
try {
   const data = new Book({
    title,genre,price,author
   });
   await data.save()
   console.log(data);
   res.status(200).json({data:data, message:"Data added successfully"})
} catch (error) {
    res.send({error:error.message})
}
})


//-----------------------put books-----------------------------------------
router.put('/books/:id',record, async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const {title,genre,price,author}=req.body;
    try {
       const data = await Book.findByIdAndUpdate({_id:id},{
        title,genre,price,author
       });
     
       console.log(data);
       res.status(200).json({data:data, message:"Data updated successfully"})
    } catch (error) {
        res.send({error:error.message})
    }
    })


//--------------------------delete books--------------------------------------


    router.delete('/books/:id',record, async(req,res)=>{
        const id = req.params.id;
        console.log(id);
       
        try {
           const data = await Book.findByIdAndDelete(id)
           console.log(data);
           res.status(200).json({ message:"Data deleteted successfully"})
        } catch (error) {
            res.send({error:error.message})
        }
        })

module.exports = {router}

 