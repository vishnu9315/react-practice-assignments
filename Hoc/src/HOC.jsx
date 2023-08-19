const HOC = (Component) => {
  const obj = {
    name: "vishnu",
    age: "20"
  };
  return () => <Component value={obj} />;
};
export default HOC;
