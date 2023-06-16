window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = AccountEndpoint=https://kwazureresume.documents.azure.com:443/;AccountKey=7R78KVIxLVL2Ki4KlP0OZ1zlXkt4kbraeMlIxAGB8ttsJHH002BOQu8t92os1nL2CrgwV1SDhbn7ACDbGzYQEw==;
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}