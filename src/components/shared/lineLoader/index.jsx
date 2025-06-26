import LinearProgress from "@mui/material/LinearProgress";
import { useMovies } from "../../../context/MovieContext";
import { LineWrapper } from "./styled";

const LineLoader = () => {
  const { loading } = useMovies();

  if (!loading) return null;

  return (
    <LineWrapper>
      <LinearProgress />
    </LineWrapper>
  );
};

export default LineLoader;
