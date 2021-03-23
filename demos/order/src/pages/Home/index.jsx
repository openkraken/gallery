import { createElement, useRef } from 'rax';
import './index.css';

document.body.style.backgroundColor = '#F4F4FB';

export default function Home() {
  const odcEl = useRef(null);

  return (
    <>
      <div onClick={() => {
          odcEl.current.style.transform = 'translateY(100vh)';
        }}>
        <div className="header">
        <div className="order-summary">
          <div className="order-summary-text order-status">Arriving date</div>
          <div className="order-summary-text order-date">03 Mar, 2019</div>
          <div className="order-summary-text order-day">Friday</div>
        </div>
        <div className="action-btn">
          <div className="back-btn"></div>
        </div>
      </div>
      <div className="hero-img-container">
        <div className="hero-img-container-before"></div>
        <div className="triangle1"></div>
        <img src="https://img.alicdn.com/imgextra/i2/O1CN01k7x9GV1xo0ji6virQ_!!6000000006489-2-tps-1084-827.png" className="hero-img" />
      </div>
    </div>
    <div className="order-status-container">
      <div className="status-item-first-before"></div>
      <div className="status-item first">
        <div className="status-item-div status-circle"></div>
        <div className="status-item-div status-text">Today</div>
      </div>
      <div className="status-item-second-before"></div>
      <div className="status-item second">
        <div className="status-item-div status-circle"></div>
        <div className="status-item-div status-text">Shipped</div>
      </div>
      <div className="status-item">
        <div className="status-item-div status-circle"></div>
        <div className="status-item-div">
          <span className="status-text-span status-text green">Out</span>
          <span className="status-text-span status-text green">for delivery</span>
        </div>
      </div>
      <div className="status-item">
        <div className="status-item-div status-circle"></div>
        <div className="status-item-div status-text">
         <span className="status-text-span status-text green">Ariving</span>
         <span className="status-text-span status-text green">03 - 05</span>
       </div>
      </div>
    </div>

    <div className="odc">
      <div className="odc-before"></div>
        <div className="odc-header">
            <div className="cta-text">See your product details</div>
            <div className="cta-button-container">
              <div className="cta-button" onClick={()=>{
                odcEl.current.style.transform = 'translateY(0)';
              }}>View</div>
            </div>
        </div>
    </div>

    <div className="order-details-container" ref={odcEl}>
      <div className="order-details-container-before"></div>
      <div className="odc-wrapper">
      <div className="odc-header-line">
        Your order details
      </div>
      <div className="odc-header-details">
        Your product details (order 430-909-390)
      </div>
      <div className="product-container">
        <div className="product">
          <div className="product-photo">
            <img src="https://img.alicdn.com/imgextra/i1/O1CN01Shw6Mx1doeylYFcbh_!!6000000003783-2-tps-128-128.png" className="img-photo" />
          </div>
          <div className="product-desc">
            <span className="product-text product-text-first-child">Porsche Sports Lite</span>
            <span className="product-text product-text-last-child">$84</span>
          </div>
        </div><div className="product">
          <div className="product-photo">
            <img src="https://img.alicdn.com/imgextra/i1/O1CN01Shw6Mx1doeylYFcbh_!!6000000003783-2-tps-128-128.png" className="img-photo" />
          </div>
          <div className="product-desc">
            <span className="product-text product-text-first-child">Carota Sports Edition</span>
            <span className="product-text product-text-last-child">$78</span>
          </div>
        </div>
      </div>
      <div className="cancellation">
        Request Cancellation
      </div>
      
      <div className="shipping-desc">Your Shipping Address</div>
      
      <div className="shipping-address">
        <p className="shipping-address-text">4619 Ranchview Dr</p>
        <p className="shipping-address-text">Rogaland</p>
        <p className="shipping-address-text">M5GK274</p>
        <p className="shipping-address-text">ON, CANADA</p>
      </div>
    </div>
    </div>
    </>
  );
}
