const Aside = ({ count, showResolved, resolved }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Task Status</h3>
      <div className="mb-8">
        {count.map((oneIssue, i) => {
          return (
            <div className="bg-white p-4 mb-4 shadow-sm" key={i}>
              <p className="font-semibold text-lg">{oneIssue.description}</p>
              <button
                className="btn btn-primary bg-[#02a53b] text-white border-none w-full my-2"
                onClick={() => showResolved(oneIssue.description)}
              >
                Complete
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h3 className="text-2xl font-bold">Resolved Task</h3>
        {resolved.length == 0 && <p>No resolved task yet</p>}
        {resolved.map((oneResolvedTask) => (
          <div className="bg-[#e0e7ff] p-4 my-4 rounded shadow-sm">
            <p>{oneResolvedTask}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;
