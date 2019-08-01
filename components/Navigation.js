function linkBuilder(links){
  //Recieve an array of 'strings' that are the names of links
  //return all of <li> items.
  let listHTML = "";
  
  links.forEach(function linkHandler(link) {
   // console.log(link);
  listHTML += `<li>${link}</li>`;
  });
return listHTML;
}

export default function(state) {
  return  `
  <nav>
          <ul>
        ${linkBuilder(state.links.primary)}
            <li class="dropdown">
              Portfolio

              <ul>
                ${linkBuilder(state.links.dropdown)}
              </ul>
            </li>
          </ul>
        </nav>
        `;
}