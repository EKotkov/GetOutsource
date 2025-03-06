function MainPagePortfolioItem(props) {
    return (
        <>
            <h1>{props.Header}</h1>
            <img src={props.Image} alt={props.Header} />            
            <p>{props.Description}</p>
            <p><a href="./page/grades_case.md" ></a></p>
        </>
  );
}

export default MainPagePortfolioItem;