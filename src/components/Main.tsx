function Main(){
    return(
       <div>
       <main id="cart">
        <h2>Your Cart</h2>
  
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
          <li>
            <img className='cart--item-icon'
            src="assets/001-beetroot.svg" alt="beetroot" />
            <p>beetroot</p>
            
         <button className='quantity-btn remove-btn center'>-</button>
         <span className='quantity-text center'>1</span>
         <button className='quantity-btn add-btn center'>+</button>
         
    
            <img className='cart--item-icon'
            src="assets/002-carrot.svg" alt="" />
            <p>carrot</p>
        
         <button className='quantity-btn remove-btn center'>-</button>
         <span className='quantity-text center'>1</span>
           <button className='quantity-btn add-btn center'>+</button>
         
         
          
            <img className='cart--item-icon'
            src="assets/003-apple.svg" alt="beetroot" />
            <p>apple</p>
             
         <button className='quantity-btn remove-btn center'>-</button>
         <span className='quantity-text center'>1</span>
         <button className='quantity-btn add-btn center'>+</button>
         
      
         </li>
         </ul>
         </div>
         </main>
         </div>
    )
}     
        export default Main