import './AddProduct.css'
import upload_area from '../../assets/upload_area.png';
import React, { useState } from 'react';

const AddProduct = () => {
  const [image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
    name: "" ,
    image:"",
    category:"women",
    new_price:"",
    old_price:""
  })
  const [message, setMessage] = useState("");

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const changeHandler = (e) => {
    let value = e.target.value;
    if (e.target.name === 'new_price' || e.target.name === 'old_price') {
      value = isNaN(value) ? "" : String(value);
    }
    setProductDetails({...productDetails, [e.target.name]:value})
  }

  const Add_Product = async () => {
    let product = {...productDetails};

    if (!product.name || !product.new_price || !product.old_price || !image) {
      setMessage("Please fill all the fields");
      return;
    }

    let formData = new FormData();
    formData.append('product', image);

    let responseData;
    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers:{
        Accept : 'application/json',
      },
      body: formData,
    })
    .then((res)=> res.json())
    .then((data) =>{responseData=data})
    .catch((error) => {
      console.error('Error:', error);
    });

    if(responseData && responseData.success)
    {
      product.image= responseData.image_url;
      await fetch('http://localhost:4000/addproduct',{
        method: 'POST',
        headers:{
          Accept : 'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((res)=>res.json()).then((data)=>{
        if(data.success){
          setMessage("Product added");
          setProductDetails({
            name: "" ,
            image:"",
            category:"women",
            new_price:"",
            old_price:""
          });
          setImage(false);
        } else {
          setMessage("Failed to add product");
        }
      })
    }
  }

  return (
    <div className='add-product'>
      {message && <div className="message">{message}</div>}
      <div className="addproduct-itemfield">
          <p>Product title</p>
    <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here" />
  </div>
  <div className="addproduct-price">
  <div className="addproduct-itemfield">
          <p>Price</p>
    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here" />
  </div>
  <div className="addproduct-itemfield">
          <p>Offer Price</p>
    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here" />
  </div>
  </div>
  <div className="addproduct-itemfield">
    <p>Product Category</p>
    <select value={productDetails.category} onChange={changeHandler} name="category" className='add-productselector'>
      <option value="women">Women</option>
      <option value="men">Men</option>
      <option value="kid">Kid</option>
    </select>
  </div>
  <div className="addproduct-itemfield">
    <label htmlFor="file-input">
    <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt="" />
    </label>
    <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
  </div>
  <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct
