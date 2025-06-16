import { useState, useRef, useEffect } from 'react';
import LazyLoadForm from './components/LazyLoadForm';
import {
  lazyLoadInitialData,
} from './constant';
import 'lazy-load-image-lit';

const App = () => {

  // State
  const [formData, setFormData] = useState(lazyLoadInitialData);

  // Container ref for attaching events
  const imgRef = useRef([]);

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  useEffect(() => {
    imgRef.current.forEach((el, index) => {
      if (!el) return;

      const handler = (e) => {
        console.log(`Event received for image ${index + 1}`, e.detail);
      };

      el.addEventListener('image-loaded', handler);
    });
  }, []);

  return (
    <>
      <div className='lazy-load-container'>
        <LazyLoadForm
          formData={formData}
          handleSelectChange={handleSelectChange}
          handleTextChange={handleTextChange}
        />
        <div
          className={`image-container ${formData.direction}`}
        >
          {
            Array(18).fill(0).map((_, index) => (
              <lazy-img
                key={index}
                ref={(el) => {
                  if (el) {
                    imgRef.current[index] = el;
                  }
                }}
                effect={formData.effect}
                delayMethod={formData.delayMethod}
                delayTime={formData.delayTime}
                threshold={formData.threshold}
                useIntersectionObserver={formData.useIntersectionObserver}
                visibleByDefault={formData.visibleByDefault}
                src={`/images/image_${index + 1}.jpg`}
                placeholderSrc={`/images/image_${index + 1}_60_40.jpg`}
                width='100%'
                height='400'
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App;
