import Link from "next/link";
import { FaAngleUp } from "react-icons/fa6";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
        <div className="footer-text">
            <p>Copyright &copy; 2024 by @ZoyaAfzal | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
            <Link href="/"><i><FaAngleUp /></i></Link>
        </div>
    </footer>
  )
}

export default Footer;