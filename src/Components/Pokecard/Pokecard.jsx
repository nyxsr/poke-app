import { Button, Card, DetailCard } from "../style";
import Charmander from "../../Assets/Img/004.png";
import { motion } from "framer-motion";

export default function Pokecard(props) {
  const cardwrap = {
    normal: {
      scale: 1,
    },
    action: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay: 0.1,
      },
    },
  };

  const imagepoke = {
    normal: {
      scale: 1,
    },
    action: {
      scale: 1.3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay: 0.1,
      },
    },
  };
  return (
    <>
      <Card
        whileHover="action"
        variants={cardwrap}
        initial="normal"
        color={props.color}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        drag
      >
        <motion.img
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
          src={props.image}
          alt="charmander"
        />
        <DetailCard>
          <p>
            Name : <span>{props.name}</span>
          </p>
          <p>
            Height : <span>{props.height} m</span>
          </p>
          <p>
            Weight : <span>{props.weight} kg</span>
          </p>
          <p>
            Types : <span>{props.type}</span>
          </p>
        </DetailCard>
        <Button to={`/pokemon/${props.name}`}>See More!</Button>
      </Card>
    </>
  );
}
Pokecard.defaultProps = {
  image: Charmander,
  name: "Charmander",
  ability: "Blaze",
  category: "Lizard",
  color: "#d14c27",
};
