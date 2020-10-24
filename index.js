function App() {
    const [quotes, setQuotes] = React.useState([]);
    const [currentQuote, setCurrentQuote] = React.useState('');
    const [color, setColor] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();

            setQuotes(data);
            let randomIndex = Math.floor(Math.random() * data.length);
            setCurrentQuote(data[randomIndex]);
        }
        fetchData();
    }, [])
    
    const colors = [
        '#440381',
        '#3ABEFF',
        '#FFA5A5',
        '#5B9279',
        '#8FCB9B',
        '#816C61',
        '#12130F',
        '#7C9EB2',
        '#52528C',
        '#372554',
        '#8A9B68',
        '#931F1D',
        '#937B63',
        '#2A4494',
        '#4EA5D9',
        '#44CFCB',
        '#224870',
        '#03256C',
        '#91A8A4',
        '#776871',
        '#648767',
        '#208AAE',
        '#463F1A',
        '#0B7A75',
        '#19535F'
    ];
    
    const getNewQuote = () => {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);

        let randomColorIndex = Math.floor(Math.random() * colors.length);
        setColor(colors[randomColorIndex]);
    }

    return(
        <div className="app" style={{backgroundColor: color}}>
            <div id="quote-box">
                <div className="wrapper">
                    <div id="quote" style={{color}}>
                        <p id="text">
                            {currentQuote ? 
                                (<p>{currentQuote.text}</p>)
                            : (<p>Loading...</p>)
                            }
                        </p>
                        <p id="author">
                            {currentQuote ? 
                                (<span>&quot;{currentQuote.author || 'No Author'}&quot;</span>)
                            : (<span>Loading...</span>)
                            }
                        </p>
                    </div>
                    <div className="buttons">
                        <a href={'https://twitter.com/intent/tweet?text=' + encodeURI(currentQuote.text + ' - ' + currentQuote.author)}
                            target='_blank'
                            id="tweet-quote"
                            style={{backgroundColor: color}}
                        >
                            <span><i class="fab fa-twitter fa-1x"></i></span>
                        </a>
                        <button id="new-quote" style={{backgroundColor: color}} onClick={getNewQuote}>New Quote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));