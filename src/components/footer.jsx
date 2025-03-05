function footer() {
    return (
        <nav className="footer">
            <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                From Europe with skills
            </h3>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                <a
                    href={'https://www.linkedin.com/company/get-outsource/about/'}
                    className="mx-3 font-bold hover:underline"
                >
                    Visit our LinkedIn Page
                </a>
            </div>
        </nav>
    );
}

export default footer;