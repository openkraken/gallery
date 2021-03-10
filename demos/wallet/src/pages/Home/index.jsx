import { createElement } from 'rax';
import './index.css';

export default function Home() {

  document.body.style.backgroundColor = '#F7F7F7';

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-before"></div>
          <div className="header-summary">
            <div className="summary-text">
              My Balance
            </div>
            <div className="summary-balance">
              $ 293.00
            </div>
            <div className="summary-text-2">
              + 280.00
            </div>
          </div>
          <div className="user-profile">
            <img src="https://img.alicdn.com/imgextra/i4/O1CN01MgYuOZ1q1jg8RnD6g_!!6000000005436-2-tps-512-512.png" className="user-photo" />
          </div>
          <div className="header-after"></div>
        </div>
        
        <div className="content">
          <div className="card">
            <div className="upper-row">
              <div className="card-item">
                <span className="card-item-first-child">Active Balance</span>
                <span className="card-item-last-child">1 804 <span className="dollar">$</span></span>
              </div>
              <div className="card-item">
                <span className="card-item-first-child">My Save it</span>
                <span className="card-item-last-child">2 000 <span className="dollar">$</span></span>
              </div>
            </div>
            <div className="lower-row">
              <div className="lower-row-before"></div>
              <div className="icon-item">
                <div className="icon">
                  <img className="icon-img" src="https://img.alicdn.com/imgextra/i3/O1CN01VSvvG91VRkEsfDSky_!!6000000002650-2-tps-48-48.png" />
                </div>
                <div className="icon-text">Top-up</div>
              </div>
              <div className="icon-item">
                <div className="icon">
                  <img className="icon-img" src="https://img.alicdn.com/imgextra/i3/O1CN01HBATRx1Fif0tAuWs7_!!6000000000521-2-tps-48-48.png" />
                </div>
                <div className="icon-text">Send</div>
              </div>
              <div className="icon-item">
                <div className="icon">
                  <img className="icon-img" src="https://img.alicdn.com/imgextra/i1/O1CN011yPz4926xvrAUGvNi_!!6000000007729-2-tps-48-48.png" />
                </div>
                <div className="icon-text">Withdraw</div>
              </div>
              <div className="icon-item">
                <div className="icon">
                  <img className="icon-img" src="https://img.alicdn.com/imgextra/i1/O1CN01V4UVtY227U2QxdUA3_!!6000000007073-2-tps-48-48.png" />
                </div>
                <div className="icon-text">Pay</div>
              </div>
            </div>
          </div>
          <div className="transactions">
            <span className="t-desc">Recent Transactions</span>
            <div className="transaction">
              <div className="t-icon-container">
                <img className="t-icon" src="https://img.alicdn.com/imgextra/i4/O1CN01Q1h3EH29iJC7hEfuI_!!6000000008101-2-tps-128-128.png" />
              </div>
              <div className="t-details">
                <div className="t-title">Alipay</div>
                <div className="t-time">03.45 PM</div>
              </div>
              <div className="t-amount">+ 750$</div>
            </div>

            <div className="transaction">
              <div className="t-icon-container">
                <img src="https://img.alicdn.com/imgextra/i2/O1CN01lj5fzx1rhFBkOFyTm_!!6000000005662-2-tps-128-128.png" className="t-icon" />
              </div>
              <div className="t-details">
                <div className="t-title">Paypal</div>
                <div className="t-time">03.45 AM</div>
              </div>
              <div className="t-amount">+ 200$</div>
            </div>

            <div className="transaction">
              <div className="t-icon-container">
                <img src="https://img.alicdn.com/imgextra/i2/O1CN01ovqXvL1rpUJiipNvp_!!6000000005680-2-tps-128-128.png" className="t-icon" />
                </div>
              <div className="t-details">
                <div className="t-title">WeChat</div>
                <div className="t-time">08.00 PM</div>
              </div>
              <div className="t-amount red">- 120$</div>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer">
        <div><img className="icon-img" src="https://img.alicdn.com/imgextra/i1/O1CN01E7F4iI24GItkIMjAP_!!6000000007363-2-tps-48-48.png" /></div>
        <div><img className="icon-img" src="https://img.alicdn.com/imgextra/i4/O1CN01Y3X8nh1Frow4ZXVe1_!!6000000000541-2-tps-48-48.png" /></div>
        <div className="menu-btn"><img className="icon-img menu-btn-icon" src="https://img.alicdn.com/imgextra/i1/O1CN013q7ZId1CP1BN4nO7E_!!6000000000072-2-tps-64-64.png" /></div>
        <div><img className="icon-img " src="https://img.alicdn.com/imgextra/i1/O1CN01HAXGpS27Na2EzrsSe_!!6000000007785-2-tps-48-48.png" /></div>
        <div><img className="icon-img" src="https://img.alicdn.com/imgextra/i4/O1CN01wyMwdW1WUmTr8l38f_!!6000000002792-2-tps-48-48.png" /></div>
      </div>
    </>
  );
}
