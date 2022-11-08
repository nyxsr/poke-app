import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BoxDetail, PokelistSection } from '../style';
import { motion } from 'framer-motion';

export default function DetailPoke() {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [desc, setDesc] = useState({});

  useEffect(() => {
    let ignore = false;
    const getData = () => {
      setLoading(true);
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
        if (!ignore) {
          setData(res.data);
          setLoading(false);
          return;
        }
        setLoading(false);
      });
    };
    getData();
    return () => (ignore = true);
  }, [name]);

  useEffect(() => {
    let ignore = false;
    const getSpecies = () => {
      setLoading(true);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        .then((res) => {
          if (!ignore) {
            setDesc(res.data);
            setLoading(false);
            return;
          }
          setLoading(false);
        });
    };

    getSpecies();
    return () => (ignore = true);
  }, [name]);

  console.log(data);
  console.log(desc);
  return (
    <>
      {loading ? (
        <p>Data masih di load</p>
      ) : (
        <PokelistSection className="container mt-5">
          <div className="row">
            <div className="col-md-6 d-flex gap-3 mt-5">
              <motion.img
                src={`http://play.pokemonshowdown.com/sprites/xyani/${name}.gif`}
                style={{ width: '10rem', height: '10rem' }}
                alt=""
                drag
              />
              <div className="d-flex flex-column">
                <p
                  className="fw-bold text-capitalize"
                  style={{ fontSize: '2.5rem' }}
                >
                  {data?.name}
                </p>
                <p>
                  {/* Kalo ini dikomen */}
                  {desc?.length !== 0
                    ? desc?.flavor_text_entries?.[1]?.flavor_text
                    : 'Tidak ada!'}
                  {/* Sampai sini dikomennya */}
                </p>
              </div>
            </div>
            {/* Kalo ini dikomen */}
            {desc?.color?.name && (
              <BoxDetail
                color={desc.color.name}
                className="col-md-6 d-flex flex-column"
              >
                <div>
                  <p className="fw-bold text-white">Skill</p>
                  <div className="d-flex justify-content-center gap-3">
                    {data?.abilities?.map((v, idx) => {
                      return (
                        <p
                          style={{
                            padding: '10px 13px',
                            backgroundColor: '#1f1f1f',
                            color: '#fafafa',
                            borderRadius: '10px',
                          }}
                          key={idx}
                        >
                          {v.ability.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="fw-bold text-white">Stat</p>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    {data.stats.map((v, idx) => {
                      return (
                        <p
                          style={{
                            padding: '10px 13px',
                            backgroundColor: '#1f1f1f',
                            color: '#fafafa',
                            borderRadius: '10px',
                            textAlign: 'center',
                            width: '15rem',
                          }}
                          key={idx}
                        >
                          {v.stat.name} : {v.base_stat}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </BoxDetail>
            )}
            {/* Sampai sini dikomennya */}
          </div>
        </PokelistSection>
      )}
    </>
  );
}