import { createElement, useState, useCallback } from 'rax';

const styles = {
  title: {
    paddingTop: '40rpx',
    paddingBottom: '40rpx',
    textAlign: 'center',
    fontWeight: 100,
    fontSize: '100rpx',
    color: '#f9afaf',
    marginTop: 'env(safe-area-inset-top)',
  },
  todoList: {
    margin: '0 30rpx 30rpx 30rpx',
    // borderBottomWidth: '5px',
    // borderBottomColor: 'red',
    backgroundColor: 'white',
    borderRadius: '10rpx',
    boxShadow: '0 2rpx 4rpx 0 rgba(0,0,0,0.1), 0 25rpx 50rpx 0 rgba(0,0,0,0.15)',

  },
  arrow: {
    marginLeft: '50rpx',
    color: '#e6e6e6',
    display: 'inline-block',
    fontSize: '50rpx',
  },
  header: {
    borderBottom: '1px solid #ededed',
  },
  inputBox: {
    display: 'inline-block',
    padding: '32rpx 32rpx 32rpx 40rpx',
    border: 'none',
    background: 'rgba(0, 0, 0, 0.003)',
    width: '600rpx',
    // height: '80rpx',
    color: '#4d4d4d',
    fontSize: '40rpx',
    fontFamily: 'PingFang SC',
    fontWeight: 100,
  },
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#4d4d4d',
    fontSize: '40rpx',
    fontWeight: 100,
    fontFamily: 'PingFang SC',
    padding: '30rpx',
    borderBottom: '1px solid #ededed',
  },
  checkbox: {
    width: '50rpx',
    height: '50rpx',
    objectFit: 'contain',
    marginRight: '35rpx',
  },
  footer: {
    color: '#4d4d4d',
    fontSize: '26rpx',
    fontWeight: 100,
    padding: '40rpx',
  }
};

const CHECKED = 'checked';
const UNCHECKED = 'unchecked';
const CheckboxImage = {
  [CHECKED]: 'https://gw.alicdn.com/tfs/TB1OLyKlVT7gK0jSZFpXXaTkpXa-84-84.png',
  [UNCHECKED]: 'https://gw.alicdn.com/tfs/TB156eKl1T2gK0jSZFvXXXnFXXa-84-84.png',
};

function Checkbox(props) {
  const isChecked = props.value === CHECKED;
  return (
    <img style={styles.checkbox} src={CheckboxImage[isChecked ? CHECKED : UNCHECKED]} />
  );
}

function TodoItem(props) {
  const { id, description, checked, onClick } = props;
  return (
    <div onClick={onClick} style={{
      ...styles.todoItem,
      textDecoration: checked === CHECKED ? 'line-through' : 'none'
    }}>
      <Checkbox value={checked} />
      {description}
    </div>
  );
}

class Item {
  static count = 0;
  static initialItems = [
    new Item('Code Review'),
    new Item('Kraken TSC Meeting'),
  ];

  constructor(description) {
    this.id = Item.count++;
    this.description = description;
    this.checked = UNCHECKED;
  }
}

export default function App() {
  const [text, setText] = useState('');
  const handleInput = useCallback((evt) => {
    setText(evt.currentTarget.value);
  }, [text]);

  const [list, setList] = useState(Item.initialItems);
  const handleChange = useCallback((evt) => {
    const value = evt.currentTarget.value;
    if (value.length > 0) {
      setList([...list, new Item(value)]);
      evt.currentTarget.value = '';
    }
  }, [text, list]);

  const handleClick = useCallback((item, index) => {
    item.checked = item.checked === CHECKED ? UNCHECKED : CHECKED;
    setList([...list.slice(0, index), item, ...list.slice(index + 1)]);
  }, [list]);

  let count = 0;
  list.forEach((item) => {
    if(item.checked === UNCHECKED) count++;
  });

  return (
    <>
      <div style={styles.title}>todos</div>
      <div style={styles.todoList}>
        <div>
          <div style={styles.header}>
            {/* <div style={styles.arrow}>#</div> */}
            <input
              style={styles.inputBox}
              onInput={handleInput}
              onChange={handleChange}
              value={text}
              placeholder="What needs to be done?"
            />
          </div>
          {list.map((item, index) => <TodoItem
            onClick={handleClick.bind(this, item, index)}
            key={item.id}
            id={item.id}
            description={item.description}
            checked={item.checked}
          />)}
          <div style={styles.footer}>
          {count} items left
          </div>
        </div>
      </div>
    </>
  );
}
