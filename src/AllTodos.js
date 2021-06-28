export default function AllTodos(props) {
  const { lists1, lists2, lists3, lists4, lists5, lists6, lists7 } = props;
  return (
    <div>
      <h2>Todo Lists</h2>
      <div className="border mx-5 my-3 py-3">
        <h3 className="text-info">Monday</h3>
        {lists1.map((list1) => {
          return <div>{list1.text}</div>;
        })}
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists1, "asc")}
        >
          Rush
        </button>
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists1, "desc")}
        >
          Relax
        </button>
      </div>
      <div className="border mx-5 my-3 py-3">
        <h3 className="text-info">Tuesday</h3>
        {lists2.map((list2) => {
          return <div>{list2.text}</div>;
        })}
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists2, "asc")}
        >
          Rush
        </button>
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists2, "desc")}
        >
          Relax
        </button>
      </div>
      <div className="border mx-5 my-3 py-3">
        <h3 className="text-info">Wednesday</h3>
        {lists3.map((list3) => {
          return <div>{list3.text}</div>;
        })}
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists3, "asc")}
        >
          Rush
        </button>
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists3, "desc")}
        >
          Relax
        </button>
      </div>
      <div className="border mx-5 my-3 py-3">
        <h3 className="text-info">Thursday</h3>
        {lists4.map((list4) => {
          return <div>{list4.text}</div>;
        })}
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists4, "asc")}
        >
          Rush
        </button>
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists4, "desc")}
        >
          Relax
        </button>
      </div>
      <div className="border mx-5 my-3 py-3">
        <h3 className="text-info">Friday</h3>
        {lists5.map((list5) => {
          return <div>{list5.text}</div>;
        })}
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists5, "asc")}
        >
          Rush
        </button>
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists5, "desc")}
        >
          Relax
        </button>
      </div>
      <div className="border mx-5 my-3 py-3">
        <h3 className="text-info">Saturday</h3>
        {lists6.map((list6) => {
          return <div>{list6.text}</div>;
        })}
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists6, "asc")}
        >
          Rush
        </button>
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists6, "desc")}
        >
          Relax
        </button>
      </div>
      <div className="border mx-5 my-3 py-3">
        <h3 className="text-info">Sunday</h3>
        {lists7.map((list7) => {
          return <div>{list7.text}</div>;
        })}
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists7, "asc")}
        >
          Rush
        </button>
        <button
          className="mx-1 mt-2 bg-info text-white border-0"
          onClick={() => props.onSort(lists7, "desc")}
        >
          Relax
        </button>
      </div>
    </div>
  );
}
