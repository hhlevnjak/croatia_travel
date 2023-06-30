function Pagination({
  pageNumberSelected,
  setPageNumberSelected,
  numberOfpages,
  threeDots,
}) {
  return numberOfpages?.length > 1 ? (
    <div className="pages">
      <div
        onClick={() =>
          setPageNumberSelected(
            pageNumberSelected > 1 ? pageNumberSelected - 1 : pageNumberSelected
          )
        }
      >
        Previous
      </div>
      {numberOfpages.length < 5
        ? numberOfpages.map((el, i) => {
            return (
              <div key={i} onClick={() => setPageNumberSelected(i + 1)}>
                {el}
              </div>
            );
          })
        : numberOfpages.map((el, i) => {
            const check = i + 1;
            if (check === 3) return <div key={i}>...</div>;
            if (threeDots.includes(check)) return;
            else
              return (
                <div key={i} onClick={() => setPageNumberSelected(i + 1)}>
                  {el}
                </div>
              );
          })}
      <div
        onClick={() =>
          setPageNumberSelected(
            pageNumberSelected === numberOfpages.length
              ? pageNumberSelected
              : pageNumberSelected + 1
          )
        }
      >
        Next
      </div>
    </div>
  ) : null;
}

export default Pagination;
