import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

export default useStyles;
