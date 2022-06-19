import Card from "./Card";


// props:
//   data: consists of data records to be rendered
const List = ({ data }) =>
    data.records ? (
        <div className="list">
            {/* Your code goes here */}
            {/* Render the Card with required props here */}

            {data.records.map((element, key) => {
                return (
                    <Card
                        key={key}
                        _id={element._id}
                        index={key+1}
                        venue={element.venue}
                        team1={element.team1}
                        team2={element.team2}
                        date={element.date}
                        count={data.count}
                    />
                );
            })}
        </div>
    ) : <div className="list"></div>;

export default List;
