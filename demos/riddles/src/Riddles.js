import { createElement, useState } from 'rax';

function Riddle({ question, answer }) {
  const [riddle, setRiddle] = useState('点击此处揭晓谜底');

  return (
    <div>
      <div style={{textAlign: 'center', padding: '10px 0'}}>
        <div style={{backgroundColor: '#fef7f0', color: '#c65f03'}}>
          <div style={{padding: '12rpx 0'}}>
            <div style={{border: '1rpx solid #fddcd3'}}>
              <img style={{width: '450rpx', display: 'block', position: 'relative', top: '-12rpx', left: '-12rpx'}} src="https://img.alicdn.com/imgextra/i1/O1CN01ftHuPs26WS5g6Eq5j_!!6000000007669-2-tps-267-100.png"/>
              <div style={{paddingTop: '26rpx'}} />
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{width: '64rpx', height: '64rpx', backgroundColor: '#fdd4ae', borderRadius: '30rpx', color: '#e31440', textAlign: 'center', fontSize: '28rpx', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    灯
                  </div>
                </div>
                <div style={{textAlign: 'center', marginLeft: '6px'}}>
                  <div style={{width: '64rpx', height: '64rpx', backgroundColor: '#fdd4ae', borderRadius: '30rpx', color: '#e31440', textAlign: 'center', fontSize: '28rpx', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    谜
                  </div>
                </div>
              </div>
              <div style={{fontSize: '28rpx', letterSpacing: '1.5rpx', lineHeight: '28rpx', padding: '16rpx 0'}}>
                {
                  question.map(text => {
                    return <p style={{textAlign: 'center', color: '#c65f03', margin: '15rpx 0 0'}}>
                      {text}
                    </p>
                  })
                }
              </div>
              <div style={{paddingBottom: '24rpx'}}>
                <div style={{textAlign: 'center'}}>
                  <div onClick={() => setRiddle(answer)} style={{display: 'inline-block', backgroundColor: '#e31440', padding: '10rpx 16rpx', margin: '0px auto', color: '#fff', letterSpacing: '1.5rpx', borderRadius: '6rpx', textAlign: 'center', fontSize: '24rpx'}}>
                    {riddle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Riddles() {

  return (
    <div style={{ backgroundColor: 'rgb(254, 247, 240)' }}>
      <div style={{border: '1px solid #e31440', margin:'5rpx', padding: '20rpx'}}>
        <img src="https://img.alicdn.com/imgextra/i2/O1CN01dT5qeu1W05wPqTGXn_!!6000000002725-2-tps-641-406.png" style={{width: '700rpx', height: '450rpx', display: 'block'}} />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20rpx'}}>
          <div style={{display: 'inline-block', width: '52rpx', position: 'relative', right: '-14px'}}>
            <img src="https://img.alicdn.com/imgextra/i3/O1CN01zQ2V8H1rqrVOe3Msi_!!6000000005683-2-tps-47-34.png" style={{width: '52rpx', display: 'block'}} />
          </div>
          <div style={{border: '1px solid #e31440', textAlign: 'center', padding: '4rpx 25rpx', color: '#e31440', fontSize: '32rpx', letterSpacing: '1.5rpx'}}>
            元宵佳节
          </div>
          <div style={{display: 'inline-block', width: '52rpx', position: 'relative', left: '-14px'}}>
            <img src="https://img.alicdn.com/imgextra/i3/O1CN01zQ2V8H1rqrVOe3Msi_!!6000000005683-2-tps-47-34.png" style={{width: '52rpx', display: 'block'}} />
          </div>
        </div>
        <div style={{color: '#333', padding: '10rpx', fontSize: '28rpx', textAlign: 'justify', letterSpacing: '1.5rpx'}}>
          <div style={{width: '680rpx'}}>
            元宵起源于春秋时期的楚昭王。某个正月十五日，楚昭王经过长江，见江面有漂浮物，为一种外白内红的甜美食物。楚昭王请教孔子，孔子说“此浮萍果也，得之主复兴之兆”。从此，元宵节吃元宵便成了一种历史。
          </div>
        </div>
      </div>

      <div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{textAlign: 'center'}}>
            <div style={{width: '96rpx', display: 'inline-block'}}>
              <img style={{width: '96rpx', display: 'block'}} src="https://img.alicdn.com/imgextra/i3/O1CN01CNiYeq1YlqSxNkTYi_!!6000000003100-2-tps-89-120.png" />
            </div>
            <div style={{width: '48rpx', height: '48rpx', backgroundColor: '#fedfc2', borderRadius: '30rpx', margin: '0px auto',position: 'relative', top: '-90rpx', color: '#e31440', transform: 'rotate(0deg)', WebkitTransform: 'rotate(0deg)', MozTransform: 'rotate(0deg)', OTransform: 'rotate(0deg)'}}>
              <div style={{textAlign: 'center', fontSize: '28rpx',   color: '#e31440',}}>
                猜
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center', marginLeft: '6px'}}>
            <div style={{width: '96rpx', display: 'inline-block'}}>
              <img style={{width: '96rpx', display: 'block'}} src="https://img.alicdn.com/imgextra/i3/O1CN01CNiYeq1YlqSxNkTYi_!!6000000003100-2-tps-89-120.png" />
            </div>
            <div style={{width: '48rpx', height: '48rpx', backgroundColor: '#fedfc2', borderRadius: '30rpx', margin: '0px auto',position: 'relative', top: '-90rpx', color: '#e31440', transform: 'rotate(0deg)', WebkitTransform: 'rotate(0deg)', MozTransform: 'rotate(0deg)', OTransform: 'rotate(0deg)'}}>
              <div style={{textAlign: 'center', fontSize: '28rpx',  color: '#e31440',}}>
                灯
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center', marginLeft: '6rpx'}}>
            <div style={{width: '96rpx', display: 'inline-block'}}>
              <img style={{width: '96rpx', display: 'block'}} src="https://img.alicdn.com/imgextra/i3/O1CN01CNiYeq1YlqSxNkTYi_!!6000000003100-2-tps-89-120.png" />
            </div>
            <div style={{width: '48rpx', height: '48rpx', backgroundColor: '#fedfc2', borderRadius: '30rpx', margin: '0px auto',position: 'relative', top: '-90rpx', transform: 'rotate(0deg)', WebkitTransform: 'rotate(0deg)', MozTransform: 'rotate(0deg)', OTransform: 'rotate(0deg)'}}>
              <div style={{textAlign: 'center', fontSize: '28rpx',  color: '#e31440',}}>
                谜
              </div>
            </div>
          </div>
        </div>
      </div>

      <Riddle question={['红公鸡', '绿尾巴', '身体钻到地底下', '又甜又脆营养大', '(打一蔬菜)']} answer={'胡萝卜'} />
      <Riddle question={['像熊比熊小', '像猫比猫大', '竹笋是食粮', '密林中安家', '(打一动物)']} answer={'熊猫'} />
      <Riddle question={['独木造高楼', '没瓦没砖头', '人在水下走', '水在人上流', '(打一工具)']} answer={'雨伞'} />
    </div>
  );
}
