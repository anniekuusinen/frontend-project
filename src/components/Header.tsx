import React from "react";
import BackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import "../styles/Header.css";

const Header = ({ value }) => {
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
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <BackIcon />
      <BorderLinearProgress variant="determinate" value={value} />
    </Stack>
  );
};

export default Header;
