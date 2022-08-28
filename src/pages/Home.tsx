import { Accordion } from "components";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div>
        <Accordion
          title="Accordion"
          paddingRight={8}
          paddingLeft={8}
          paddingBottom={8}
        >
          <div className="accordion-content">
            <span>{`Hi ${String.fromCodePoint(
              0x1f44b
            )}, This is an Accordion!`}</span>
            <ul>
              <li>option 1</li>
              <li>option 2</li>
              <li>option 3</li>
              <li>option 4</li>
            </ul>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default Home;
