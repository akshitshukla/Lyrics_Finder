# Lyrics_Finder
<!DOCTYPE html>
<html>
<head>
    <!-- Information about the page -->
    <!--This is the comment tag-->
     
    
</head>
 
<body>
    <!--Contents of the webpage-->
  <a href="https://html-css-js.com/?html=%3C!DOCTYPE%20html%3E%0A%3Chtml%3E%0A%20%20%3Chead%3E%0A%20%20%20%20%3Ctitle%3ELyrics%20Finder%3C/title%3E%0A%20%20%20%20%3Clink%20rel=%22stylesheet%22%20href=%22Singtheright.css%22%20/%3E%0A%20%20%20%20%3Cmeta%20charset=%22UTF-8%22%20/%3E%0A%20%20%20%20%3Cmeta%20name=%22viewport%22%20content=%22wi$*$dth=device-wi$*$dth,%20initial-scale=1.0%22%20/%3E%0A%20%20%3C/head%3E%0A%20%20%3Cbody%3E%0A%20%20%20%20%3Cdiv%20class=%22imgContainer%22%3E%0A%20%20%20%20%20%20%3Ch1%20class=%22first%22%3E%0A%20%20%20%20%20%20%20%20S%0A%20%20%20%20%20%20%20%20%3Ch3%20class=%22second%22%3Eing%20The%20Right...%3C/h3%3E%0A%20%20%20%20%20%20%3C/h1%3E%0A%20%20%20%20%20%20%3Cdiv%20class=%22mainContent%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class=%22subHead%22%3ELyricsSearch%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Clabel%20class=%22label%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cinput%0A%20%20%20%20%20%20%20%20%20%20%20%20class=%22searchBar%22%0A%20%20%20%20%20%20%20%20%20%20%20%20i$*$d=%22inputTerm%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type=%22text%22%0A%20%20%20%20%20%20%20%20%20%20%20%20placeholder=%22Enter%20artist%20or%20song%20name...%22%0A%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class=%22search%22%20onclick=%22callSearchSong()%22%3ESearch%3C/button%3E%0A%20%20%20%20%20%20%20%20%3C/label%3E%0A%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20style=%22%0A%20%20%20%20%20%20%20%20display:%20flex;%0A%20%20%20%20%20%20%20%20flex-direction:%20column;%0A%20%20%20%20%20%20%20%20align-items:%20center;%0A%20%20%20%20%20%20%20%20text-align:%20center;%0A%20%20%20%20%20%20%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cdiv%20i$*$d=%22result%22%3EResult%20will%20be%20displayed%20here%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cdiv%20style=%22display:%20flex;%20justify-content:%20center;%20margin:%2010px%22%3E%0A%20%20%20%20%20%20%3Cdiv%20i$*$d=%22more%22%20class=%22container%20centered%22%3E%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%3C/body%3E%0A%20%20%3Cscript%20defer%20src=%22Singtheright.js%22%3E%3C/script%3E%0A%3C/html%3E&css=*%20%7B%0A%20%20box-sizing:%20border-box;%0A%7D%0Abody%20%7B%0A%20%20background-color:%20white;%0A%20%20margin:%200;%0A%7D%0A.imgContainer%20%7B%0A%20%20background-image:%20url(https://42796r1ctbz645bo223zkcdl-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/1260x485-bass-guitar-1281x612.jpg);%0A%20%20background-repeat:%20no-repeat;%0A%20%20background-size:%20cover;%0A%20%20/*%20background-position:%20center;%20*/%0A%20%20padding:%2030px%200;%0A%20%20position:%20relative;%0A%20%20box-shadow:%208px%204px%2060px%20rgb(26,%2025,%2025)%20inset;%0A%20%20wi$*$dth:%20100%25;%0A%7D%0A.first%20%7B%0A%20%20font-size:%2080px;%0A%20%20display:%20inline-block;%0A%20%20margin-left:%204%25;%0A%20%20margin-top:%20-1%25;%0A%20%20letter-spacing:%200.3rem;%0A%20%20color:%20rgb(45,%20143,%2088);%0A%20%20text-shadow:%201px%201px%202px%20black,%200%200%205px%20rgb(17,%2017,%2017),%200%200%2010px%20darkblue;%0A%7D%0A.second%20%7B%0A%20%20color:%20rgb(170,%20156,%20156);%0A%20%20font-size:%2035px;%0A%20%20letter-spacing:%200.2rem;%0A%20%20display:%20inline-block;%0A%20%20font-family:%20Arial,%20Helvetica,%20sans-serif;%0A%20%20text-shadow:%201px%201px%202px%20black,%200%200%205px%20rgb(15,%2015,%2015),%200%200%2010px%20darkblue;%0A%7D%0A%0A.mainContent%20%7B%0A%20%20display:%20flex;%0A%20%20flex-direction:%20column;%0A%20%20justify-content:%20center;%0A%20%20align-items:%20center;%0A%7D%0A%0A.subHead%20%7B%0A%20%20position:%20relative;%0A%20%20font-family:%20Arial,%20Helvetica,%20sans-serif;%0A%20%20font-weight:%20bold;%0A%20%20font-size:%2035px;%0A%20%20color:%20rgb(225,%20215,%20121);%0A%20%20margin-bottom:%2015px;%0A%20%20bottom:%208px;%0A%7D%0A@media%20screen%20and%20(max-wi$*$dth:%201400px)%20%7B%0A%20%20.subHead%20%7B%0A%20%20%20%20color:%20black;%0A%20%20%20%20background-color:%20rgb(227,%20178,%2065);%0A%20%20%20%20border:%201px%20soli$*$d%20rgb(227,%20178,%2065);%0A%20%20%20%20border-radius:%2010px;%0A%20%20%7D%0A%7D%0A@media%20screen%20and%20(max-wi$*$dth:%20635px)%20%7B%0A%20%20.subHead%20%7B%0A%20%20%20%20color:%20rgb(225,%20215,%20121);%0A%20%20%20%20background-color:%20transparent;%0A%20%20%7D%0A%7D%0A.label%20%7B%0A%20%20position:%20relative;%0A%20%20wi$*$dth:%20500px;%0A%20%20max-wi$*$dth:%20100%25;%0A%7D%0Alabel%20input%20%7B%0A%20%20padding:%2015px%2030px;%0A%20%20border-radius:%2050px;%0A%20%20font-size:%2016px;%0A%20%20wi$*$dth:%20100%25;%0A%7D%0Alabel%20button%20%7B%0A%20%20position:%20absolute;%0A%20%20top:%203px;%0A%20%20right:%204px;%0A%20%20cursor:%20pointer;%0A%20%20padding:%2014px%2030px;%0A%20%20border-radius:%2050px;%0A%20%20background-color:%20coral;%0A%20%20font-family:%20Arial,%20Helvetica,%20sans-serif;%0A%20%20color:%20white;%0A%20%20font-size:%2016px;%0A%20%20border:%200;%0A%7D%0A#result%20%7B%0A%20%20font-size:%201.1rem;%0A%20%20wi$*$dth:%20500px;%0A%20%20max-wi$*$dth:%20100%25;%0A%20%20background-color:%20rgb(216,%20221,%20216);%0A%7D%0A%0Ali%20%7B%0A%20%20padding:%205px;%0A%20%20list-style:%20none;%0A%20%20display:%20flex;%0A%20%20justify-content:%20space-between;%0A%20%20margin-left:%20-38px;%0A%7D%0A.btn%20%7B%0A%20%20background-color:%20rgb(96,%2096,%20128);%0A%20%20border:%201px%20soli$*$d%20black;%0A%20%20border-radius:%209px;%0A%20%20cursor:%20pointer;%0A%20%20color:%20white;%0A%7D%0A.page%20%7B%0A%20%20height:%2023px;%0A%20%20wi$*$dth:%2070px;%0A%7D%0A%09%20%20&js=const%20searchedTerm%20=%20%5B%5D;%0Aconst%20apiUrl%20=%20%22https://api.lyrics.ovh%22;%0Aconst%20result%20=%20document.getElementById(%22result%22);%0Aconst%20more%20=%20document.getElementById(%22more%22);%0A%0Adocument.addEventListener(%22keypress%22,%20(e)%20=%3E%20%7B%0A%20%20if%20(e.code%20===%20%22Enter%22)%20%7B%0A%20%20%20%20console.log(%22enter%22);%0A%20%20%20%20callSearchSong();%0A%20%20%7D%0A%7D);%0Aconst%20callSearchSong%20=%20()%20=%3E%20%7B%0A%20%20const%20inputElement%20=%20document.getElementById(%22inputTerm%22);%0A%20%20const%20term%20=%20inputElement.value;%0A%20%20if%20(term)%20%7B%0A%20%20%20%20searchSongs(term);%0A%20%20%7D%20else%20%7B%0A%20%20%20%20alert(%22Please%20type%20in%20a%20search%20term%22);%0A%20%20%7D%0A%7D;%0Aasync%20function%20searchSongs(term)%20%7B%0A%20%20const%20res%20=%20await%20fetch(%60$%7BapiUrl%7D/suggest/$%7Bterm%7D%60);%0A%20%20const%20data%20=%20await%20res.json();%0A%20%20showData(data);%0A%20%20console.log(data);%0A%7D%0Afunction%20showData(data)%20%7B%0A%20%20if%20(data.data.length%20===%200)%20%7B%0A%20%20%20%20alert(%22Enter%20another%20song%22);%0A%20%20%7D%20else%20%7B%0A%20%20%20%20result.innerHTML%20=%20%60%0A%20%20%20%20%3Cul%20class=%22songs%22%3E%0A%20%20%20%20%20%20$%7Bdata.data%0A%20%20%20%20%20%20%20%20.map(%0A%20%20%20%20%20%20%20%20%20%20(song)%20=%3E%20%60%3Cli%3E%0A%20%20%20%20%20%20%3Cspan%3E%3Cstrong%3E$%7Bsong.artist.name%7D%3C/strong%3E%20-%20$%7Bsong.title%7D%3C/span%3E%0A%20%20%20%20%20%20%3Cbutton%20class=%22btn%22%20data-artist=%22$%7Bsong.artist.name%7D%22%20data-songtitle=%22$%7Bsong.title%7D%22%3EGet%20Lyrics%3C/button%3E%0A%20%20%20%20%3C/li%3E%60%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20.join(%22%22)%7D%0A%20%20%20%20%3C/ul%3E%0A%20%20%60;%0A%0A%20%20%20%20if%20(data.prev%20%7C%7C%20data.next)%20%7B%0A%20%20%20%20%20%20more.innerHTML%20=%20%60%0A%20%20%20%20%20%20%20%20$%7B%0A%20%20%20%20%20%20%20%20%20%20data.prev%0A%20%20%20%20%20%20%20%20%20%20%20%20?%20%60%3Cbutton%20class=%22btn%20page%22%20onclick=%22getMoreSongs('$%7Bdata.prev%7D')%22%3EPrev%3C/button%3E%60%0A%20%20%20%20%20%20%20%20%20%20%20%20:%20%22%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20$%7B%0A%20%20%20%20%20%20%20%20%20%20data.next%0A%20%20%20%20%20%20%20%20%20%20%20%20?%20%60%3Cbutton%20class=%22btn%20page%22%20onclick=%22getMoreSongs('$%7Bdata.next%7D')%22%3ENext%3C/button%3E%60%0A%20%20%20%20%20%20%20%20%20%20%20%20:%20%22%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%60;%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20more.innerHTML%20=%20%22%22;%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0Aasync%20function%20getMoreSongs(url)%20%7B%0A%20%20const%20res%20=%20await%20fetch(%60https://cors-anywhere.herokuapp.com/$%7Burl%7D%60);%0A%20%20const%20data%20=%20await%20res.json();%0A%20%20console.log(data);%0A%20%20showData(data);%0A%7D%0Aasync%20function%20getLyrics(artist,%20songTitle)%20%7B%0A%20%20const%20res%20=%20await%20fetch(%60$%7BapiUrl%7D/v1/$%7Bartist%7D/$%7BsongTitle%7D%60);%0A%20%20const%20data%20=%20await%20res.json();%0A%0A%20%20const%20lyrics%20=%20data.lyrics.replace(/(%5Cr%5Cn%7C%5Cr%7C%5Cn)/g,%20%22%3Cbr%3E%22);%0A%0A%20%20result.innerHTML%20=%20%60%3Ch2%3E%3Cstrong%3E$%7Bartist%7D%3C/strong%3E%20-%20$%7BsongTitle%7D%3C/h2%3E%0A%20%20%20%20%3Cspan%3E$%7Blyrics%7D%3C/span%3E%60;%0A%0A%20%20more.innerHTML%20=%20%22%22;%0A%7D%0A%0Aresult.addEventListener(%22click%22,%20(e)%20=%3E%20%7B%0A%20%20const%20clickedEl%20=%20e.target;%0A%20%20if%20(clickedEl.tagName%20===%20%22BUTTON%22)%20%7B%0A%20%20%20%20const%20artist%20=%20clickedEl.getAttribute(%22data-artist%22);%0A%20%20%20%20const%20songTitle%20=%20clickedEl.getAttribute(%22data-songtitle%22);%0A%20%20%20%20getLyrics(artist,%20songTitle);%0A%20%20%7D%0A%7D);">Click here to play game!</a>
</body>
 
</html>
