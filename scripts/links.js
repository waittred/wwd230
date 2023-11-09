const baseURL = 'https://waittred.github.io/wdd230/';
const linksURL = 'https://waittred.github.io/wdd230/data/links.json';
const cards = document.querySelector('#list');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}
getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let card = document.createElement('li');
        card.textContent = `${week.week}: `;
        
        week.links.forEach((individualLink) => {
            let linkElement = document.createElement('a');
            linkElement.setAttribute('href', individualLink.url);
            linkElement.textContent = `${individualLink.title} |`;
            card.appendChild(linkElement);
        });
        
        cards.appendChild(card);
    });
}





//    const displayLinks = (weeks) => {
//        weeks.forEach((week) => {
//            const weekHeading = document.createElement('h4');
//            weekHeading.textContent = `Week ${week.lesson}`;
//            linksContainer.appendChild(weekHeading);
  //  
    //        const linkList = document.createElement('ul');
    //
      //      week.links.forEach((link) => {
        //        const listItem = document.createElement('li');
          //      const anchor = document.createElement('a');
            //    anchor.href = `${link.url}`;
              //  anchor.textContent = link.title;
//                listItem.appendChild(anchor);
  //              linkList.appendChild(listItem);
    //        });
    
      //      linksContainer.appendChild(linkList);
        //    });
//    };
        
//}   


//getLinks();

