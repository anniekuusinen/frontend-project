import React from "react";
import "../styles/Landing.css";
import Header from "../components/Header.tsx";
import { Typography, Grid, Box } from "@mui/material";
import Euro from "@mui/icons-material/Euro";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import SearchIcon from "@mui/icons-material/Search";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));
const Landing = () => {
  return (
    <div className="container">
      {" "}
      <BorderLinearProgress variant="determinate" value={20} />
      <div className="white-box">
        <Typography variant="h4">How can Clarvo help you?</Typography>
        <Box sx={{ width: "80%" }}>
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Grid item xs={6}>
              <Link to="/career" className="link">
                <Item>
                  <Euro
                    sx={{
                      fontSize: 15,
                      marginTop: 1,
                      marginRight: 1,
                    }}
                  />{" "}
                  I'm looking to increase my salary
                </Item>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <CallMissedOutgoingIcon
                  sx={{
                    fontSize: 17,
                    marginTop: 1,
                    marginRight: 1,
                  }}
                />{" "}
                I want to move up in my career
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <SyncAltIcon
                  sx={{
                    fontSize: 15,
                    marginTop: 1,
                    marginRight: 1,
                  }}
                />{" "}
                I want to change to a different role
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <SearchIcon
                  sx={{
                    fontSize: 15,
                    marginTop: 1,
                    marginRight: 1,
                  }}
                />{" "}
                I'm actively looking for a job
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: "70%", marginLeft: "auto", marginTop: -10 }}>
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Grid item xs={6}>
              <Item>
                <QuestionMarkIcon
                  sx={{
                    fontSize: 15,
                    marginTop: 1,
                    marginRight: 1,
                  }}
                />{" "}
                I'm not sure what I'm looking for
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Typography variant="h6">
        Existing user? <span className="underline">Log in</span>
      </Typography>
    </div>
  );
};

export default Landing;
