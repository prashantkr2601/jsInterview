export const accordionData = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render the user interface as the data changes.",
  },
  {
    question: "How do I install React?",
    answer:
      "You can install React using the npm package manager. Run the command 'npm install react' to install the core React library. Additionally, you might need to install 'react-dom' for web rendering and 'react-scripts' for creating React applications with Create React App.",
  },
  {
    question: "What are React components?",
    answer:
      "React components are the building blocks of a React application. They are reusable, self-contained pieces of UI that can be composed to create complex user interfaces. Components can be class components or functional components.",
  },
];

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({ question, answer }) => (
          <Accordion title={question} content={answer} />
        ))}
      </div>
    </div>
  );
};

export default App;
