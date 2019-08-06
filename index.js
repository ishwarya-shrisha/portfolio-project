
//Import : Bring in the necessary Functional    components.
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Navigo from 'navigo';  

//location.origin  provides the 'bade' URL for Navigo to get started.
// new creates a new instance of Navigo from its construction fxn.
const router = new Navigo(location.origin);



// describes the current state of the SPA. We say that we pass'pieces of state'
const store = {
  
    
    'home' : {
      'links': {
      'primary': ['Home', 'About', 'Contact', 'Blog'],
      'dropdown': ['project 1', 'project 2', 'project 3']
    },
    
     'title': 'A New Web Developer',
     'page' : `<section>
        <h2>This is a Section</h2>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam neque laborum. Doloribus, vitae? Quod ad voluptatem, numquam vitae quibusdam incidunt eos! Ipsa voluptatibus vel voluptate repudiandae similique alias quam!
      </p>

      <a href="#" class="cta-btn" ">Read More!</a>
    </section>


  <section>
    <h2>This is a section</h2>

    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam neque laborum. Doloribus, vitae? Quod ad voluptatem, numquam vitae quibusdam incidunt eos! Ipsa voluptatibus vel voluptate repudiandae similique alias quam!</p>

    <a href="#" class="cta-btn">Read More!</a>

  </section>

 <section>
    <h2>This is a section</h2>

  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam neque laborum. Doloribus, vitae? Quod ad voluptatem, numquam vitae quibusdam incidunt eos! Ipsa voluptatibus vel voluptate repudiandae similique alias quam!</p>

  <a href="#" class="cta-btn">Read More!</a>

 </section>
`
  } ,

  'about' : {
    'links': {
      'primary': ['Home', 'About', 'Contact', 'Blog'],
      'dropdown': ['project 1', 'project 2', 'project 3']
    },
    'title' : 'About Page',
    'page' : `<p class="aboutpara"> "My Name is Ishwarya Ragavendra and I am" <em> very excited </em> "to welcome you to my online Portfolio. I Hope you like it. I am just beginning my journey as a web developer. I had always had planned on working with kids with special needs and
            devoting my career to learning more about them and how to help them. After years of misleading jobs, i decided decided to change things up. Enter: SavvyCoders. I applied to SavvyCoders with little to no knowledge of coding, and an overwhelming
            desire to change my career. Throughout this program, I learned to love coding and am eager to begin my new career in web application development "</p>`
  } , 

  'contact' : {
    'links': {
      'primary': ['Home', 'About', 'Contact', 'Blog'],
      'dropdown': ['project 1', 'project 2', 'project 3']
    },

    'title' : 'Contact',
    'page' : ` <form action="form-responses/new" method="POST" netlify>
        <!-- Developer's Note: 'placeholder' without using <label> is NOT RECOMMENDED for accessibility purposes. -->
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          autofocus
          required
        />
        <input type="text" name="lastname" placeholder="Last Name" />
        <input
          type="email"
          name="userEmail"
          placeholder="your.email@example.com"
        />

        <p>What's this message about?</p>

        <div class="input-group">
          <span>
            <input
              type="radio"
              name="subject"
              value="professional"
              id="pro"
              checked
            />
            <label for="pro">I'd like to hire you!</label>
          </span>
        </div>

        <div class="input-group">
          <span>
            <input type="radio" name="subject" value="personal" id="personal" />
            <label for="personal">Personal message</label>
          </span>
        </div>

        <div class="input-group">
          <span>
            <input type="radio" name="subject" value="other" />
            <label>Don't know/something else</label>
          </span>
        </div>

        <div class="input-group">
          <input
            type="checkbox"
            name="optin"
            value="trusting"
            checked
          />Subscribe me to your newsletter!
          <input
            type="checkbox"
            name="optout"
            value="skeptical"
            disabled
          />Cheeky checkbox...
        </div>

        <div class="input-group--flex">
          <label for="marketing">How did you hear about me?</label>
          <select name="marketing" id="marketing">
            <optgroup label="Online">
              <option value="social"
                >Social Media (FB, Twitter, LinkedIn)</option>

              <option value="github">Online Portfolio (GitHub)</option>
              <option value="search">Search Engine</option>
              <option value="email">Email</option>
            </optgroup>
            <optgroup label="In-Person">
              <option value="networking">We met at a networking event</option>
              <option value="referral">Personal referral</option>
              <option value="random">We met somewhere else</option>
            </optgroup>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="input-group--flex">
        <textarea name="user_message" rows="8" cols="40"></textarea>
        <div>
        <input type="submit" />
        <input type="reset" value="Reset" />

        </div>
      </div>
      </form>
`
  
},

'blog' : {
    'links': {
      'primary': ['Home', 'About', 'Contact', 'Blog'],
      'dropdown': ['project 1', 'project 2', 'project 3']
    },

    'title' : 'Blog Page',

    //'Page' will be updated after we fetch the data for the blog post.

    'page' : ` <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam neque laborum. Doloribus, vitae? Quod ad voluptatem, numquam vitae quibusdam incidunt eos! Ipsa voluptatibus vel voluptate repudiandae similique alias quam!</p> `
  
}
  
  };



//function declaration . Render is  used to re-render the page.
function render(state) {

console.log('state came in as:' , state);
// We use funtion invocation that actually runs the function ans then 'returns' the markup so that it is properly rendered in the browser.

//innerHTMl property root element
document.querySelector('#root').innerHTML = `
${Navigation(state)}
 ${Header(state)}
  ${Main(state)}
    ${Footer(state)}
    `;
    /*
    Developers note: the 'Navigation functional components renders 'new' links each aand every time. Therefore, on each-render , we must grab those links and re-attach the event listeners to respond to 'clicks'.

    */
const navItems = document.querySelectorAll('nav > ul > li:not(.dropdowm)');

//queryselectorall is a css selector

navItems.forEach(function eventListenerAdder(navItem) {

navItem.addEventListener ( 'click' , function clickHandler(event){

event.preventDefault();

//console.log(event.target.textContent.toLowerCase());
//Recursive function call.
//event is object
render(store[event.target.textContent.toLowerCase()]);
//thats an expression that will evaulate string 


     });
});

}
// invokation
// to render a page we pass in piece of state 
render(store.home);

//router.on("/", () => console.log("hello home page!")).resolve();
// on takes in as a string the result of location.pathname as the first parameter
// on is a navigo method that behaves as any other event listener might.
// it listens to location.pathnamea and responds accordingly.

/*router.on ('/' , function routerFxn() {
  console.log('Hello Home page');
}).resolve();
// The Element wil not exist until page is rendered.
router.on ('/about' , function routerFxn() {
  console.log('Hello About page');
}).resolve();

router
    .on('/', function routerFxn(){
        console.log('hello home page!');
    })
    .resolve();
*/
router
    .on(':view', function handleParams(params){
       // console.log('hello',params.page);
        //console.log('params is:' , params);
       // console.log('router will show:', store(params.view));
        render(store[params.view]);
    })
    .on('/', function resolver(){
       // console.log('hello home page!');
    })
    .resolve();

//let i = 0;

//Here the value of i will run from 0 until 3.
//i will serve as a placeholder to represent the index of the item we need to access from navItems.
//console.log(navItems[0]);
//console.log(navItems[1]);
//console.log(navItems[2]);

//while (i < navItems.length) {

  //Use the value of i as an index to access the  navItem.

 // navItems[i].addEventListener('click' , 
  
  // Add this call back functionto each of the navItems.
  
  //function clickHandler(event) {
   // event.preventDefault();
    
    // Re-render the page with a new piece of State that is  derived from what was clicked.

    //Target will reveal what generated the event - that is, what was 'clicked'.

    //const clickedItem = event.target.textContent;
    //const clicked  = clickedItem.toLowerCase();
   // render(store[clicked]);

  // Developers note: render(store[event.target.textContent.toLowerCase()]);
//event.target gives the elemnt.
   // render(store[event.target.textContent.toLowerCase()]);
  //}
  //);

 // i += 1;
  
//}


// We want to re-render our page based on what the user clicks on our navigation menu.

/* 

1. Capture what was clicked in navigation - what is the text of the element that was clicked?
2. Access a piece of state based on said text.
3. Show the user the new view.

*/