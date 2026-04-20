import { Box } from "@mui/material";
import Command from "../Command";

export default function Experience() {
  return (
    <Box className="sections">

      {/* Texto */}
      <Command command="$ git log --all --graph --decorate" />

    </Box>
  );
}