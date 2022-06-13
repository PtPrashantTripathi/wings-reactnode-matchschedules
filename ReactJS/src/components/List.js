import Card from "./Card";


// props:
//   data: consists of data records to be rendered
const List = ({ data }) => (
  data ? (<div className="list">
    {/* Your code goes here */}
    {/* Render the Card with required props here */}
  </div>) : null
);


export default List;