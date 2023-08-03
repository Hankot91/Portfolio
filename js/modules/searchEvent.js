export function searchEvent(){
    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("searchInput");
        const searchButton = document.getElementById("searchButton");
    
        searchButton.addEventListener("click", function () {
            const searchText = searchInput.value.trim().toLowerCase();
    
            const allTextElements = document.querySelectorAll("body *");
    
            let firstMatchingElement = null;
            allTextElements.forEach(element => {
                // Verificar que element.innerText no sea nulo o indefinido antes de usar trim()
                if (element.innerText && element.innerText.trim().toLowerCase().includes(searchText)) {
                    firstMatchingElement = element;
                    return;
                }
            });
    
            if (firstMatchingElement) {
                firstMatchingElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    });
}