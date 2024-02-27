import React, { useEffect, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

const FarmerFile = () => {
  const text = "Varun Rokade working in BrainVire".split(" ");
  const [scope, animate] = useAnimate();
  const [open, setOpen] = useState(false);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const staggerList = stagger(0.1, { startDelay: 0.25 });

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
      <div ref={scope}>
        <h4>Stagger Animation</h4>
        <button onClick={(prev) => setOpen(!open)} className="stagger-button">Click For Stagger Animations</button>

        <ul>
      {items.map((item,index) =>{
        return(
            <motion.li>{item}</motion.li>
        )
      })}

        </ul>
      </div>
    </div>
  );
};

export default FarmerFile;
