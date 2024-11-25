import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header.tsx";
import Anonymous from "../assets/stayanonymous.png";
import Jobs from "../assets/relevantoffers.png";
import Opportunity from "../assets/careeropportunities.png";
import "../styles/Career.css";

const Career = () => {
  return (
    <div className="container">
      {" "}
      <div className="white-container">
        <Typography variant="h4">Let's advance your career</Typography>
        <Box sx={{ width: "50%" }}>
          <Stack spacing={2}>
            <Card sx={{ display: "flex" }}>
              <img src={Anonymous} alt="" className="images" />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Stay Anonymous
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    Remain anonymouse until you choose to reveal your details
                  </Typography>
                </CardContent>
              </Box>
            </Card>
            <Card sx={{ display: "flex" }}>
              <img src={Opportunity} alt="" className="images" />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Promotion Search{" "}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    Let Clarvo actively look for promotion opportunities for you{" "}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
            <Card sx={{ display: "flex" }}>
              <img src={Jobs} alt="" className="images" />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Relevant offers
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    Receive higher-level job offers that match your criteria{" "}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Stack>
        </Box>
      </div>
      <div className="button">Continue</div>
      <Typography variant="h6">
        Existing user? <span className="underline">Log in</span>
      </Typography>
    </div>
  );
};

export default Career;
