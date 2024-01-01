const Snowflake = () => {
  const style = {
    left: Math.random() * 100 + "vw",
    animationDuration: Math.random() * 2 + 2 + 2 + "s",
    animationDelay: Math.random() + "s",
  };
  return <div className="snowflake" style={style}></div>;
};
export default function App() {
  const snowflakes = Array.from({ length: 100 }, (e, index) => (
    <Snowflake key={index} />
  ));

  return <div className="App">{snowflakes}</div>;
}
