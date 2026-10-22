import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import styles from "./ImageSlider.module.css";

export default function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?${page}=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
      if (loading) {
        return <div>Loading Data...</div>;
      }
      if (errorMsg !== null) {
        return <div>Error Occured !</div>;
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(images);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className={styles.container}>
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className={`${styles.arrow} ${styles["arrow-left"]}`}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlide === index
                  ? styles["current-image"]
                  : `${styles["current-image"]} ${styles["hide-current-image"]}`
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className={`${styles.arrow} ${styles["arrow-right"]}`}
      />
      <span className={styles["circle-indicators"]}>
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? styles["current-indicator"]
                    : `${styles["current-indicator"]} ${styles["inactive-indicator"]}`
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
