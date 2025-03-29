import { motion } from "framer-motion";
import Banner from "../../components/Banner/Banner";
import Credits from "../../components/Credits/Credits";
import Row from "../../components/Row/Row";
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { defaultPageFadeInVariants } from "../../motionUtils";
import "./movies.scss";

const Movies = () => {
  const rows = useRetrieveData("movies");

  return (
    <motion.div className="Movies" variants={defaultPageFadeInVariants} initial="initial" animate="animate" exit="exit">
      <Banner type="movies" />
      {rows && rows.map((props) => <Row key={props.id} {...props} />)}
      <Credits />
    </motion.div>
  );
};

export default Movies;
