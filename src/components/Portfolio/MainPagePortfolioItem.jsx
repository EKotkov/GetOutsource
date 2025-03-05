function MainPagePortfolioItem(props) {
    return (
        <div className="portfolio-item">
            <h1>{props.Header}</h1>
            <img src={props.Image} alt={props.Header} />            
            <p>{props.Description}</p>
            <a href="./page/grades_case.md" >Link !!!1111!!            yfhf                   yjhfyth! </a>
        </div>
  );
}

export default MainPagePortfolioItem;