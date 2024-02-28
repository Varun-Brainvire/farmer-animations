import React, { useEffect, useState } from "react";
import {
  motion,
  useAnimate,
  stagger,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Card from "./Card";

const FarmerFile = () => {
  const text = "Varun Rokade working in BrainVire".split(" ");
  const [scope, animate] = useAnimate();
  const [open, setOpen] = useState(false);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const cardItems = [
    { Item_1: "Item 1" },
    { Item_2: "Item 2" },
    { Item_3: "Item 3" },
    { Item_4: "Item 4" }
  ];
  const staggerList = stagger(0.1, { startDelay: 0.25 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);


  useEffect(() => {
    animate(
      "ul",
      {
        width: open ? 150 : 0,
        height: open ? 200 : 0,
        opacity: open ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      }
    );
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0,
      }
    );
  }, [open]);

  // for Number Count animation

  useEffect(() => {
    const animation = animate(count, 50, { duration: 2 });
    return animation.stop;
  }, []);

  console.log(rounded,"rounded")

  return (
    <div className="text-div">
      {text.map((letter, i) => {
        return (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: i / 20,
            }}
            key={i}
          >
            {letter}{" "}
          </motion.span>
        );
      })}

      {/* Animation on button */}

      <div>
        <motion.button whileTap={{ scale: 0.85 }}>Click me!</motion.button>
      </div>

      {/* Stagger Animation */}

      <div
        ref={scope}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4>Stagger Animation</h4>
        <button onClick={(prev) => setOpen(!open)} className="stagger-button">
          Click For Stagger Animations
        </button>

        <ul>
          {items.map((item, index) => {
            return <motion.li>{item}</motion.li>;
          })}
        </ul>
      </div>
      <div>
        <motion.h1>{rounded}</motion.h1>
      </div>
      <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        {items.map((item,index) => {
          return (
            <div>
             <motion.div
        className="card"
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? 50 : -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: false }}
      >
        <p className="card-text">{item}</p>
      </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FarmerFile;
