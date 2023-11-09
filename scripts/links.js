const baseURL = 'https://waittred.github.io/wdd230/'
const linksURL = 'https://waittred.github.io/wdd230/data/links.json';
//const linksContainer = document.getElementById('activity-links-container');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
    const displayLinks = (weeks) => {
        weeks.forEach((week) => {
            const weekHeading = document.createElement('h4');
            weekHeading.textContent = `Week ${week.lesson}`;
            linksContainer.appendChild(weekHeading);
    
            const linkList = document.createElement('ul');
    
            week.links.forEach((link) => {
                const listItem = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.href = `${link.url}`;
                anchor.textContent = link.title;
                listItem.appendChild(anchor);
                linkList.appendChild(listItem);
            });
    
            linksContainer.appendChild(linkList);
            console.log(data)
        });
    };

}   

getLinks();
//getLinksData(linksURL);
