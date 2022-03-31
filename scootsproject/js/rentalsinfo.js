const requestURL ="https://beatrizpaola.github.io/scootsproject/data/rentals.Json";
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const rentals = jsonObject['rentals'];
        for (let i = 0; i < rentals.length; i++ ){
            {
            
            let rentals = document.getElementById('sections');
            rentals.className='rental';
            let lines=document.createElement('tr');
            let modelo=document.createElement('td')
            modelo.className='name';
            let maxperson=document.createElement('td');
            let priceRHd = document.createElement('td');
            let priceRFd= document.createElement('td');
            let priceWiHd = document.createElement('td');
            let priceWiFd= document.createElement('td');         
            let image=document.createElement('img');            
            
            modelo.textContent = rentals[i].modelo;
            maxperson.textContent = rentals[i].maxperson;
            priceRHd.textContent = rentals[i].reservationHD;
            priceRFd.textContent = rentals[i].reservationFD;
            priceWiHd.textContent = rentals[i].walkinHD;
            priceWiFd.textContent = rentals[i].walkinFD;
            
            image.setAttribute('src', rentals[i].photo);
            
            lines.appendChild(modelo);
            lines.appendChild(maxperson);
            lines.appendChild(priceRHd);
            lines.appendChild(priceRFd);
            lines.appendChild(priceWiHd);
            lines.appendChild(priceWiFd);
            
            rentals.appendChild(lines);
            

            
            document.querySelector('#sections').appendChild(lines);
               
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
            //document.querySelector('div.contentbox').appendChild(events);
            //}};
            
      });

   