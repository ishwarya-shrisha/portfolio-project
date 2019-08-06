function linkBuilder(links) {

return links.map(function linkLister(link){
  //AN HTML data attribute provides additional information that can be used by JS as a hook.
  //in this case navigo is something that navigo uses to bing the link 'text' to the Navigo router.
     return `<li><a href="/${link.toLowerCase()}" data-navigo>${link}</a></li>`;

}).join(' ');

}
  //Recieve an array of 'strings' that are the names of links
  //return all of <li> items.
 /* let listHTML = "";
  
  links.forEach(function linkHandler(link) {
   // console.log(link);
  listHTML += `<li>${link}</li>`;
  });
return listHTML;
}

*/

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