import React, { useState } from 'react'
import menuicon from '../Assets/images/menu.svg'


const Subscription = () => {


  const [subscription, setsubscription] = useState("");
  const [name, setName] = useState("");
  const [selectpackage, setSelectpackage] = useState("");
  const [plan, setPlan] = useState("");
  const [selecttenture, setSelecttenture] = useState("");
  const [date, setDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [payment, setPayment] = useState("");





  const addproduct = async () => {

    console.log('called');

    console.log("new1", name, subscription)

    let result = await fetch("http://192.168.1.32:8000/api/v1/sub/createsub", {
      method: "POST",
      body: JSON.stringify(
        {
          subscription: subscription,
          name: name,
          packagetitle: selectpackage,
          plantype: plan,
          packagetenue: selecttenture,
          startdate: date,
          enddate: enddate,
          paymenttype: payment,
          price: price
        }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    console.log('result', result);

    result = await result.json();
    console.log(result)
  }





  return (
    <div className='sub-form'>
      <div className='heading-form'>
        <h1>Create Subscriptions
        </h1>

        <button><img src={menuicon} />Subscriptions</button>
      </div>
      <form>

        <div className='set-fields'>
          <div className='two-div'>
            <div className='form-fields'>
              <label>Subscriptions</label><br />
              <select className='sub-selector' value={subscription} onChange={(e) => setsubscription(e.target.value)}>
                <option>First</option>
                <option>Second</option>
                <option>Third</option>
                <option>Fourth</option>


              </select>

            </div>


            <div className='form-fields'>
              <label>Full Name</label><br />
              <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} />

            </div>

          </div>




          <div className='triple'>

            <div className='form-fields '>
              <label>Select Package</label><br />
              <select className='sub-selector select-pack' value={selectpackage} onChange={(e) => setSelectpackage(e.target.value)}>
                <option>First</option>
                <option>Second</option>
                <option>Third</option>
                <option>Fourth</option>


              </select>

            </div>


            <div className='form-fields'>
              <label>Plan Type</label><br />
              <input type='text' placeholder='Plan Type' value={plan} onChange={(e) => setPlan(e.target.value)} />

            </div>


            <div className='form-fields '>
              <label>Select Packages Tenure</label><br />
              <select className='sub-selector select-pack' value={selecttenture} onChange={(e) => setSelecttenture(e.target.value)}  >
                <option>Select Packages Tenure</option>
                <option>Second</option>
                <option>Third</option>
                <option>Fourth</option>


              </select>

            </div>




          </div>



          <div className='two-div'>
            <div className='form-fields'>
              <label>Start Date</label><br />
              <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />

            </div>


            <div className='form-fields'>
              <label>End Date</label><br />
              <input type='date' placeholder='Username' value={enddate} onChange={(e) => setEndDate(e.target.value)} />

            </div>

          </div>


          <div className='two-div'>
            <div className='form-fields'>
              <label>Select Payment Method</label><br />
              <select className='sub-selector' value={payment} onChange={(e) => setPayment(e.target.value)} >
                <option>Select Payment Type</option>
                <option>Google pay</option>
                <option>Paytm</option>
                <option>Phone Pay</option>


              </select>

            </div>


            <div className='form-fields'>
              <label>Price</label><br />
              <input type='number' placeholder='0.00' value={price} onChange={(e) => setPrice(e.target.value)} />

            </div>

          </div>

          <button className='sub-btn' type='submit' onClick={addproduct} >Submit</button>
        </div>

      </form>


    </div>
  )
}

export default Subscription