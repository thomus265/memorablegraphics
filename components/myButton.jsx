import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"

const MyButton = (props) => {
    return ( 
        <Link href={"/gallery"}>
        <motion.button className="button" whileHover={{ scale: 1.06 }}>
            <Image src="/arrow.svg" width={24} height={24}/>
            <p className="hidden hover:flex">{props.title}</p>
        </motion.button>
        </Link>
     );
}
 
export default MyButton;