import React from 'react';
import { BsTreeFill } from 'react-icons/bs';
import { GiFishingBoat, GiMineExplosion } from 'react-icons/gi';
import { ImKey } from 'react-icons/im';
import { RiAliensFill } from 'react-icons/ri';


const Filters = () => {
    const sorting = [
        { title: "Boat", icon: <GiFishingBoat/> },
        { title: "Boat", icon: <GiMineExplosion/> },
        { title: "Boat", icon: <ImKey/> },
        { title: "Boat", icon: <RiAliensFill/> },
        { title: "Boat", icon: <BsTreeFill/> },
    ];
    <div className="sm:mx-6 md:mx-10 lg:mx-12">Filters</div>
};

export default Filters