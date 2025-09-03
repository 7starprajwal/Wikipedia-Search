let SearchInputE1 = document.getElementById("searchInput");
let SearchResults = document.getElementById("searchResults");
let SpinnerE1 = document.getElementById("spinner");

function createAndappend(result) {
    let {
        title,
        link,
        description
    } = result;
    //1.Div Container -- result -item
    let resultItemE1 = document.createElement("div");
    resultItemE1.classList.add("result-item");
    SearchResults.appendChild(resultItemE1);
    //2.Anchor title -- result-title
    let resultTitleE1 = document.createElement("a");
    resultTitleE1.classList.add("result-title");
    resultTitleE1.textContent = title;
    resultTitleE1.href = link;
    resultTitleE1.target = "_blank";
    resultItemE1.appendChild(resultTitleE1);
    //3.title break
    let titleBreakE1 = document.createElement("br");
    resultItemE1.appendChild(titleBreakE1);
    //4.Anchor URL -- result -url
    let URLE1 = document.createElement("a");
    URLE1.classList.add("result-url");
    URLE1.href = link;
    URLE1.target = "_blank";
    URLE1.textContent = link;
    resultItemE1.appendChild(URLE1);
    //5.Line Break 
    let lineBreakE1 = document.createElement("br");
    resultItemE1.appendChild(lineBreakE1);
    //6.Paragraph Description -- line-description
    let descriptionE1 = document.createElement("p");
    descriptionE1.classList.add("link-description");
    descriptionE1.textContent = description;
    resultItemE1.appendChild(descriptionE1);

}

function displayResult(searchResult) {
    SpinnerE1.classList.toggle("d-none");
    for (let result of searchResult) {
        createAndappend(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        SpinnerE1.classList.toggle("d-none");
        SearchResults.textContent = "";
        let Input_value = SearchInputE1.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + Input_value;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResult(search_results);
            });
    }
}
SearchInputE1.addEventListener("keydown", searchWikipedia);