import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link
          href="https://www.instagram.com/estetica.giovannaleite/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center  gap-1"
        >
          <FaInstagram /> Instagran
        </Link>
      </li>

      {/* <li>
        <Link
          href="
          https:target="_blank" //www.facebook.com/profile.php?id=61554987855728&mibextid=LQQJ4d"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </Link>
      </li>{" "}
      */}
      {/* <li>
        <Link
          href="https://www.tiktok.com/@giovannaleite.estetica?_t=8pq5Cn4Vx5x&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok />
        </Link>
      </li> */}
    </ul>
  );
};

export default Socials;
