import React from 'react'

const Hero = () => {
  return (
    <main className="hero container">
        <div className="hero-content">
            <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe velit laudantium reprehenderit quia consectetur tempore praesentium, distinctio itaque quis dicta laborum explicabo quo voluptatem, maiores aliquid vero nesciunt. Neque.</p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button>Category</button>
            </div>     
            <div className="shopping">
              <p>Also available On</p>
              <div className="brand-icons">
                <img src="images/daraz.png" alt="daraz" />
              </div>
              </div> 
        </div>
        <div className="hero-img">
          <img src="/images/shoe.png" alt="hero image"/>
        </div>
    </main>
  )
}

export default Hero;