import cryptoBlue from "../../assets/crypto-logo-blue.webp";
import cryptoWhite from "../../assets/crypto-logo-white.webp";

const Logo = ({ logo }) => {
  if (logo === "blue") {
    return <img src={cryptoBlue} alt="Blue Crypto.com logo" width="150" />;
  }
  if (logo === "white") {
    return <img src={cryptoWhite} alt="White Crypto.com logo" width="150" />;
  }
};

export default Logo;
