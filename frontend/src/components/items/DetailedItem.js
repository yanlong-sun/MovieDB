import classes from "./DetailedItem.module.css";

const DetailedItem = (props) => {
  const data = props.data;
  console.log(data);
  const containerBkg = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "110rem",
    height: "30rem",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    backgroundImage:
      data && data.backdropUrl !== null ? `url(${data.backdropUrl})` : "none",
    backgroundSize: "cover",
    filter: "grayscale(10%) opacity(50%) blur(4px)",
    zIndex: "2",
  };
  const content = (
    <div className={classes.container}>
      {data && data.backdropUrl !== null ? (
        <div style={containerBkg}></div>
      ) : (
        <div></div>
      )}
      <div className={classes.basicInfo}>
        <div className={classes.poster}>
          <img src={data.posterUrl} alt={data.title} />
        </div>
      </div>
    </div>
  );

  return <div>{content}</div>;
};

export default DetailedItem;
