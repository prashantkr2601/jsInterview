function Timmer({ initialSeconds = 60 }) {
  const [second, setSecond] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  const inputSecond = useRef();

  useEffect(() => {
    if (second < 1 || !isRunning) return;

    intervalRef.current = setInterval(() => {
      setSecond((prevSecond) => prevSecond - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [second, isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setSecond(0);
  };

  const handleFormate = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((time % 3600) % 60)
      .toString()
      .padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSecond(inputSecond.current.value);
  };

  return (
    <div>
      <h1>Timmer: {handleFormate(second)}</h1>
      <div onClick={handleStart} className="button">
        Start
      </div>
      <div onClick={handlePause} className="button">
        Pause
      </div>
      <div onClick={handleReset} className="button">
        Reset
      </div>

      {/* input second */}

      <form onSubmit={handleSubmit}>
        <label>
          Timmer In Seconds:
          <input type="number" ref={inputSecond} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h1>Timmer In Seconds:{second}s</h1>
    </div>
  );
}
export default Timmer;
