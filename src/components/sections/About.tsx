import { Box, Typography, Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Command from "../Command";

export default function About() {
  return (
    <Box className="sections">

      {/* Texto */}
      <Command command="$ cat about.txt" />

      {/* Titulo */}
      <Typography className="title">▸ Backend Developer</Typography>

      {/* Descripción */}
      <Typography
        className="description"
        sx={{
          mt: 1,
          fontFamily: "monospace",
          color: "#cbd5e1",
          lineHeight: 1.6,
        }}
      >
        Desarrollador backend apasionado por crear APIs robustas y escalables.
        Especializado en arquitecturas de microservicios, bases de datos y
        optimización de rendimiento. Me encanta resolver problemas complejos y
        escribir código limpio y mantenible.
      </Typography>

      {/* Caja de informacion */}
      <Box className="information">
        <Grid container spacing={2}>
          <Grid size={6} sx={{ display: "flex", alignItems: "center", gap: 1}}>
            <PersonIcon className="icon-information" />
            <Typography className="text-information">
              Nombre: Junior Alcarraz Montes
            </Typography>
          </Grid>
          <Grid size={6} sx={{ display: "flex", alignItems: "center", gap: 1}}>
            <EmailIcon className="icon-information" />
            <Typography className="text-information">
              guillermo.junior.30@gmail.com
            </Typography>
          </Grid>
          <Grid size={6} sx={{ display: "flex", alignItems: "center", gap: 1}}>
            <LocationOnIcon className="icon-information" />
            <Typography className="text-information">
              Lima, Perú
            </Typography>
          </Grid>
          <Grid size={6} sx={{ display: "flex", alignItems: "center", gap: 1}}>
            <GitHubIcon className="icon-information" />
            <Typography className="text-information">
              github.com/alcarraz301997
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Whoami */}
      <Box className="whoami">
        <Typography className="text-whoami">$ whoami</Typography>
        <Typography className="description-whoami">Un desarrollador que convierte café en código y bugs en features 🚀</Typography>
      </Box>
    </Box>
  );
}