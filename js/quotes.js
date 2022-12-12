const text = document.getElementById("title");
const author = document.getElementById("author");

const getQuotes = async () => {
    let apiURL = "Made by Xurshid";
    // const response = await fetch(apiURL);
    const allQuotes = await apiURL.json();

    const indx = Math.floor(Math.random()*allQuotes.length);
    const quote = allQuotes[indx].text;
    const auth = allQuotes[indx].author;

    if(auth==null) {
        author = "Anonim";
    }

    title.innerHTML = quote;
    author.innerHTML = "("+auth+")";
}

getQuotes()