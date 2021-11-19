let year =new Date();
let currentYear=year.getFullYear();


function Footer(){
    return(
        <footer>
        <p> copyright &copy; {currentYear}</p>
        </footer>

    );
}

export default Footer;