const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        
            let preston = document.createElement('section');
            
            let h2 = document.createElement('h2');
            let span= document.createElement('span');
            let p1=document.createElement('p');
            let p2=document.createElement('p');
            let p3=document.createElement('p');
            let image=document.createElement('img');
            
            
            
            h2.textContent = towns[6].name;
            span.textContent = towns[6].motto;
            p1.textContent = 'Year founded: '+ ' ' + towns[6].yearFounded;
            p2.textContent = 'Population:' + ' ' + towns[6].currentPopulation;
            p3.textContent = 'Annual Rain Fall: ' + ' ' + towns[6].averageRainfall;
            image.setAttribute('src', towns[6].photo);
            preston.appendChild(h2);
            preston.appendChild(span);
            preston.appendChild(p1);
            preston.appendChild(p2);
            preston.appendChild(p3);
            
            document.querySelector('div.prestonInfo').appendChild(preston);
            document.querySelector('div.prestonInfo').appendChild(image);
  
          
            let fishHaven = document.createElement('section');
            let fh2 = document.createElement('h2');
            let fspan= document.createElement('span');
            let fp1=document.createElement('p');
            let fp2=document.createElement('p');
            let fp3=document.createElement('p');
            let fimage=document.createElement('img');
            
            fh2.textContent = towns[2].name;
            fspan.textContent = towns[2].motto;
            fp1.textContent = 'Year founded: '+ ' ' + towns[2].yearFounded;
            fp2.textContent = 'Population:' + ' ' + towns[2].currentPopulation;
            fp3.textContent = 'Annual Rain Fall: ' + ' ' + towns[2].averageRainfall;
            fimage.setAttribute('src', towns[2].photo);
            fishHaven.appendChild(fh2);
            fishHaven.appendChild(fspan);
            fishHaven.appendChild(fp1);
            fishHaven.appendChild(fp2);
            fishHaven.appendChild(fp3);
           
            document.querySelector('div.fishHavenInfo').appendChild(fishHaven);
            document.querySelector('div.fishHavenInfo').appendChild(fimage);
            

            let sodaSpring = document.createElement('section');
            let sh2 = document.createElement('h2');
            let sspan= document.createElement('span');
            let sp1=document.createElement('p');
            let sp2=document.createElement('p');
            let sp3=document.createElement('p');
            let simage=document.createElement('img');
            
            sh2.textContent = towns[0].name;
            sspan.textContent = towns[0].motto;
            sp1.textContent = 'Year founded: '+ ' ' + towns[0].yearFounded;
            sp2.textContent = 'Population:' + ' ' + towns[0].currentPopulation;
            sp3.textContent = 'Annual Rain Fall: ' + ' ' + towns[0].averageRainfall;
            simage.setAttribute('src', towns[0].photo);
            sodaSpring.appendChild(sh2);
            sodaSpring.appendChild(sspan);
            sodaSpring.appendChild(sp1);
            sodaSpring.appendChild(sp2);
            sodaSpring.appendChild(sp3);
            
            document.querySelector('div.sodaSpringInfo').appendChild(sodaSpring);
            document.querySelector('div.sodaSpringInfo').appendChild(simage);
            
           
      });
      