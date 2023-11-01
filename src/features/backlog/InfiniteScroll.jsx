import React, { useRef, useEffect } from 'https://cdn.skypack.dev/react@17.0.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1';

function InfiniteScroll() {
  const target = useRef(null);

  useEffect(() => {
    observer.observe(target.current);
  }, []);

  const options = {
    threshold: 1.0,
  };

  const callback = () => {
    target.current.innerText += '관측되었습니다';
  };

  const observer = new IntersectionObserver(callback, options);

  return (
    <>
      <div style={{ height: '300vh', backgroundColor: 'green' }} />
      <div style={{ height: '100px', backgroundColor: 'red' }} ref={target}>
        target
      </div>
    </>
  );
}

ReactDOM.render(<InfiniteScroll />, document.getElementById('root'));
