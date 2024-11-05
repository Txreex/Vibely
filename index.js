async function search(query){
    try{
        let response = await fetch(`https://saavn.dev/api/search/songs?query=${query}`);
        let result = await response.json();
        // console.log(result);
        if(result.success){
            // let url = result.data.results[0].downloadUrl[4].url;
            // console.log(result.data.results[0].downloadUrl[4].url);
            // document.getElementById("audio-player").src = url;
            // let img = result.data.results[0].image[2].url;
            // console.log(img);
            // document.getElementById("sexx").src = img;
            let innerHTMl = '';
            let array = [];
            let len = result.data.results.length;
            for(let i = 0 ; i < len ; i ++){
                let url = result.data.results[i].downloadUrl[4].url;
                let img = result.data.results[i].image[2].url;  
                let name = result.data.results[i].name;
                let artist = result.data.results[i].artists.all[0].name;
                array.push({
                    'name': name,
                    'url' : url,
                    'img' : img,
                    'artists' : artist
                });
                innerHTMl += `
                    <div class="sex">
                        <img src="${img}" id = 'sexx' alt="">
                        <h1 id = "name">${name}</h1>
                        <h1>.</h1>
                        <h1 id = "artist">${artist}</h1>
                        <img id = 'play-button' src="play-button.png" alt="sex">
                    </div>
                `
            }   
            document.querySelector(".upper-sex").innerHTML = innerHTMl;
            console.log(array);
            // console.log(len);

        }
    }catch(error){
        console.log();
    }
}
search("Antidote");
document.getElementById("sex-button").onclick = () => {
    let value = document.getElementById("search-input").value;
    search(value);
    document.getElementById("search-input").textContent = '';
}

