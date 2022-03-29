import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelector";
const RepositoriesList = () => {
  const [term, setTerm] = useState("");
  const { data, error, loading } = useTypedSelector(
    ({ repositories }) => repositories
  );

  const { status } = useTypedSelector(({ test }) => test);

  console.log(status, "status");

  const { searchRepositories, testActionCreator } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    searchRepositories(term);
    testActionCreator();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      <button onClick={() => testActionCreator()}>test</button>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {!error && !loading && data.map((item) => <div key={item}>{item}</div>)}
      {status ? "salam" : "by"}
    </div>
  );
};

export default RepositoriesList;
