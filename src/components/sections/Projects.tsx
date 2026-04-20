import { Box } from "@mui/material";
import Command from "../Command";

export default function Projects() {
  return (
    <Box className="sections">

      {/* Texto */}
      <Command command="$ ls -la ./projects" />

    </Box>
  );
}