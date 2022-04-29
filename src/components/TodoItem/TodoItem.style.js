const styles = {
  taskContainer: {
    justifyContent: "center",
    display: "flex",
  },
  taskWrapper: {
    marginBottom: 12,
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 4,
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0 10px 15px 15px rgba(0,0,0,0.1)",
  },
  task: {
    textAlign: "right",
    textDecoration: "none",
    paddingLeft: 20,
    fontSize: 20,
  },
  iconWrapper: {
    paddingTop: 5,
    display: "flex",
  },
  completedIcon: {
    fontSize: 20,
    paddingTop: 15,
    color: "springgreen",
    cursor: "pointer",
  },
  deleteIcon: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 20,
    fontSize: 20,
    color: "red",
    cursor: "pointer",
  },
};

export default styles;
