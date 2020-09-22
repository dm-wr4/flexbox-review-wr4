import React from 'react';
import './reset.css'
import './App.css';

function App() {
  return (
    <div className="main-container">
      <section className='first-section'>
        <header className="header">
          <div className='box-one'>
            <button>Shop</button>
            <button>All Products</button>
            <button>SALE</button>
            <button>Blog</button>
          </div>

          <div className='box-two'>
            <h2>BlenderBottle</h2>
          </div>

          <div className='box-three'>
            <button>Co-Branding</button>
            <button>Recipes</button>
            <button>Giving Back</button>
            <button>Help</button>
          </div>

        </header>

        <button className='shop-button'>SHOP NOW</button>

      </section>

      <section className='second-section'>
        <h2>Featured BlenderBottle Products</h2>
        <div className='products-container'>
          <div className='product-item'>
            <img src='https://i5.walmartimages.com/asr/b462172e-976e-44ef-afb5-5a33ed061e72_1.1d77d473bc517b7925751ee56209c1c9.jpeg' alt='A blender bottle' style={{ width: '300px', height: '300px' }} />
          </div>
          <div className='product-item'>
            <img src='https://i5.walmartimages.com/asr/b462172e-976e-44ef-afb5-5a33ed061e72_1.1d77d473bc517b7925751ee56209c1c9.jpeg' style={{ width: '300px', height: '300px' }} />
          </div>
          <div className='product-item'>
            <img src='https://i5.walmartimages.com/asr/b462172e-976e-44ef-afb5-5a33ed061e72_1.1d77d473bc517b7925751ee56209c1c9.jpeg' style={{ width: '300px', height: '300px' }} />
          </div>
          <div className='product-item'>
            <img src='https://i5.walmartimages.com/asr/b462172e-976e-44ef-afb5-5a33ed061e72_1.1d77d473bc517b7925751ee56209c1c9.jpeg' style={{ width: '300px', height: '300px' }} />
          </div>
          <div className='product-item'>
            <img src='https://i5.walmartimages.com/asr/b462172e-976e-44ef-afb5-5a33ed061e72_1.1d77d473bc517b7925751ee56209c1c9.jpeg' style={{ width: '300px', height: '300px' }} />
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
