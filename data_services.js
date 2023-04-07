//test push premier fichier

/*
Notes sur le site https://www.avendrealouer.fr/location/lille-59/b-appartement/loc-101-27228.html 
Chemin vers le prix : price <- class = "Listing price value" <- class = "Listing price" <- class =" Listing item content " 
<- class = "Listing item body " <- class = "Listing item"

Chemin vers le type de logement : type <- class = "Listing-type" <- class =" Listing item content " 
<- class = "Listing item body " <- class = "Listing item"

Chemin vers la localisation du logement : city <- class = "Listing-city" <- class =" Listing item content " 
<- class = "Listing item body " <- class = "Listing item"

Chemin vers la surface du logement : pas sur (c'est dans un innertext donc pas forcement la meme methode pour tous les sites)


Notes sur le site 
https://www.seloger.com/list.htm?projects=2,5&types=2,1&natures=1,2,4&places=[{%22inseeCodes%22:[590350]}]&enterprise=0&qsVersion=1.0&sort=d_dt_crea&m=search_hp_last

Chemin vers la localisation du logement : localisation <- data-test ="sl.address" <- class = "Card_content Zone (...)"
<- data-test = "sl.card-container"

Chemin vers le prix du logement : price <- data-test ="sl.price-label" <- class = "Price Wrapper (...)" 
<- class ="sl.price-container" <- data-test ="sl.detail-top" <- class = "Card_content Zone (...)"<- data-test = "sl.card-container"
*/

class GenericRequestPoster{
    constructor(url){
        this.url = url;
        this.httpRequester = new XMLHttpRequest();
    }

    processResponse(Text){
        let ApiUrl = 'http://localhost:5000/tempo_data';//remplacer après par le chemin vers la base de données (BD)
        let ApiRequest = new XMLHttpRequest();
        ApiRequest.open("GET",ApiUrl,true)//remplacer le get si il faut par un post selon la BD
        ApiRequest.setRequestHeader("Content-type","application/json");//prévient l'api qu'on va lui envoyer un format json
        ApiRequest.send(JSON.stringify(Text));
    }

    processRequest(RawData)
}