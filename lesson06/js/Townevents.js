const requestURL ="https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++ ){
            if (towns[i].name == "Soda Springs" || towns[i].name =="Preston" || towns[i].name == "Fish Haven"){
            

            let town = document.createElement('article');
            town.className='town';
            let towninfo=document.createElement('div');
            towninfo.className='townInfo';
            let h2 = document.createElement('h2');
            let span= document.createElement('span');
            let p1=document.createElement('p');
            let p2=document.createElement('p');
            let p3=document.createElement('p');
            let events=document.createElement('p');            
            let image=document.createElement('img');            
            
            h2.textContent = towns[i].name;
            span.textContent = towns[i].motto;
            p1.textContent = 'Year founded: '+ ' ' + towns[i].yearFounded;
            p2.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
            p3.textContent = 'Annual Rain Fall: ' + ' ' + towns[i].averageRainfall;
            events.textContent = towns[i].events;
            
            image.setAttribute('src', towns[i].photo);
            towninfo.appendChild(h2);
            towninfo.appendChild(span);
            towninfo.appendChild(p1);
            towninfo.appendChild(p2);
            towninfo.appendChild(p3);
            towninfo.appendChild(events);
            town.appendChild(towninfo);
            town.appendChild(image);

            
            document.querySelector('section.towns').appendChild(town);
               
        }};
        //for (let i = 0; i < towns.length; i++ ){
           // if (towns[i].name == "Soda Springs" || towns[i].name =="Preston" || towns[i].name == "Fish Haven"){
             //   let events =createElement('div');
               // events.className="eventos"
                //events.textContent=towns[i].events;

                //for (let j = 0; j < towns.events.length ; j++){
                 //   let evnt = document.createElement("h3")
                   // evnt.textContent = towns.events[j]
                    //events.appendChild(evnt)
              //  }
            //document.querySelector('div.content-box').appendChild(events);
            //}};
            
      });

   