import classes from "./Tags.module.css";

const Tags = (props) => {
  return <li className={classes.list}>{props.tag}</li>;
};

export default Tags;
