
export default function(state) {
  return  `
  <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="./About/">About</a></li>
            <li><a href="./Contact/">Contact</a></li>
            <li class="dropdown">
              Portfolio

              <ul>
                <li><a href="">Project1</a></li>
                <li><a href="">Project2</a></li>
                <li><a href="">Project3></a></li>
              </ul>
            </li>
          </ul>
        </nav>
        `;
}