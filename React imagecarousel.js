function imageCarousel() {
  const [activeImgIndex, setactiveImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextBtn();
    }, 1000);

    return () => clearInterval(interval);
  }, [activeImgIndex]);

  const imgData = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/200/300/?blur",
    "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    "https://picsum.photos/200",
  ];

  const handlePrevBtn = () => {
    setactiveImgIndex((prev) => (prev < 1 ? imgData.length - 1 : prev - 1));
  };

  const handleNextBtn = () => {
    setactiveImgIndex((prev) => (prev === imgData.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <span onClick={handlePrevBtn}> prev </span>
      {imgData &&
        imgData.map((url, index) => {
          return (
            <img
              src={url}
              alt="carousel image"
              key={url}
              width="150px"
              height="150px"
              className={index === activeImgIndex ? "show" : "hide"}
            />
          );
        })}
      <span onClick={handleNextBtn}> Next </span>
    </>
  );
}
export default imageCarousel;
