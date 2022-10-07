import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'

import { addToCart } from '../actions/cartActions'

// import foods from './data'



function Foodcards({food}) {
  const [quantity,setQuantity]=useState(1)
  const [show,setShow]=useState(false)

  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);
  const dispatch=useDispatch()
  function addtocart(){
    dispatch(addToCart(food,quantity))

  }

  return (
    <div style={{marginTop:'40px'}} className="shadow-lg p-3 mb-5 bg-body rounded w-80">
        <div onClick={handleShow}>
        <h1>{food.name}</h1>
        <img src={food.image} className='img-fluid' alt="foodImg" style={{height:"200px",width:"200px"}} />
        </div>
        <div className="flex-container">
            <div className='w-100 my-1'>
                <p>Price </p>
                <h1 >Rs. {food.prices[0]*quantity}/-</h1>
                
            </div>
            <div className='w-100 my-1' >
                <p>Quantity</p>
                <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} id="">
                {[...Array(10).keys()].map((x,i)=>{
                  return <option value={i+1}>{i+1}</option>
                })}
                </select>
            </div>
        </div>
        <div className="flex-container">
          <button className="add w-100  my-2" onClick={addtocart}>
            ADD TO CART
          </button>
        </div>

        <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{food.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img src={food.image} alt="foodImg" style={{height:"300px",width:"300px"}} />
        <p>{food.description}</p>
      </Modal.Body>

      <Modal.Footer>
        <button className="add" onClick={handleClose}>
          CLOSE
        </button>

      </Modal.Footer>
    </Modal>
       
    </div>
  )
}

export default Foodcards