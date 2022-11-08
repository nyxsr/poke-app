import axios from "axios";
import { useEffect, useState } from "react";
import Pokecard from "../Pokecard/Pokecard";
import { PokelistSection } from "../style";
import { motion } from "framer-motion";

let baseurl = "https://pokeapi.co/api/v2/pokemon/";

export default function Pokelist() {
  const [poke, setPoke] = useState([]);
  const [limiter, setLimiter] = useState(21)

  const getPoke = () => {
      axios.get(`${baseurl}?offset=${limiter}&limit=21`).then((response) => {
        getPokeData(response.data.results);
      });
  };
  const getPokeData = (data = []) => {
      data.forEach((v) => {
        axios.get(`${baseurl}${v.name}`).then((response) => {
          setPoke((prev) => [...prev, response.data]);
        });
      });
  };

  const tambahLimiter = ()=>{
    setLimiter(limiter + 21)
    getPoke()
  }
  // const kurangLimiter = ()=>{
  //   setLimiter(limiter - 21)
  //   getPoke()
  // }

  useEffect(() => {
    getPoke();
  }, []);

  console.log(poke.length);
  console.log(limiter)
  return (
    <>
      <PokelistSection className="container mt-5">
        <motion.div
          className="row justify-content-between"
          initial={{opacity:0}}
          animate={{
            opacity:1
          }}
          transition={{
            type:'tween',
            delay:1.5,
            duration:2,
            delayChildren:0.5,
            staggerChildren: 0.3,
          }}
        >
          {poke.map((v, idx) => {
            return (
              <Pokecard
                key={idx}
                name={v.name}
                height={v.height / 10}
                weight={v.weight / 10}
                image={v.sprites.other.dream_world.front_default}
                color={v.types[0].type.name}
                type={v.types[0].type.name}
              />
            );
          })}
        </motion.div>
        <div className="row justify-content-center gap-3 mt-5">
          {/* <button className="btn btn-primary w-25 fs-2" onClick={kurangLimiter}>Prev</button> */}
          <button className="btn btn-primary w-25 fs-2" onClick={tambahLimiter}>Load More</button>
        </div>
      </PokelistSection>
    </>
  );
}
