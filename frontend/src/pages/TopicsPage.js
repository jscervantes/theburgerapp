import { React } from 'react';

function TopicsPage() {
    return (
        <>
            <h2>Web Dev Concepts</h2>
            <nav class="local-nav">
                <a class="local-nav-button" href="#servers">Web Servers</a>
                <a class="local-nav-button" href="#frontenddesign">Front End Design</a>
                <a class="local-nav-button" href="#optimizingimages">Optimizing Images</a>
                <a class="local-nav-button" href="#favicons">Favicons</a>
                <a class="local-nav-button" href="#cascading-stylesheets">Cascading Stylesheets</a>
                <a class="local-nav-button" href="#forms">Forms</a>
                <a class="local-nav-button" href="#express">Express</a>
                <a class="local-nav-button" href="#javascript">JavaScript</a>
            </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                <p>
                    The term <strong><b>index</b></strong>, as it relates to
                    <em>websites</em>, refers to a file
                    designated to be the <strong><b>homepage</b></strong> of
                    a website, from which all other files
                    of the website can be reached. In nearly all real-world
                    web applications, the index file--usually named <code>index.html</code>--is
                    returned whenever a GET request is received for the
                    <code>/</code>. This means that
                    when a user searches for a basic address, such as <code>www.example.com</code>,
                    the file
                    <code>index.html</code> will be returned. The term index
                    as it relates to <em>servers</em>,
                    refers to the root directory of the website's server,
                    under which all other files of the
                    website can be found.
                </p>
                <p>
                    When loading the local index file on the web browser,
                    the header only shows the <strong><b>Request Method</b></strong>,
                    <strong><b>Status Code</b></strong>, and <strong><b>Referrer
                            Policy</b></strong>. In contrast, when viewing
                    the index file from OSU's server, the header shows all
                    of the above as well as the <b><strong>Request URL</strong></b>
                    and <strong><b>Remote Address</b></strong>. The local
                    index file shows minimal response headers and
                    only provisional request headers, whereas the index file
                    on OSU servers shows all request and response
                    headers.
                </p>
                <p>
                    When observing the favicon.ico file under the Network
                    tab of the web inspector,
                    the status code given is <strong><b>200</b></strong>.
                    This is the favicon file is available on the OSU server,
                    whereas the main.css and main.js files are not. Because
                    the favicon file is available, it is returned
                    when requested, thus completing the request successfully
                    and giving a successful status code. Because
                    main.css and main.js do not exist, the status code given
                    is <strong><b>404</b></strong>.
                </p>
                <p>
                    Consider the URL for our index file stored on OSU's
                    servers: <code>https://web.engr.oregonstate.edu/~cervanj2/a1-cervanj2/</code>.
                    The <strong><b>scheme</b></strong> is identified as
                    <code>https://</code>. The <strong><b>subdomains</b></strong>
                    are <code>web</code> and <code>engr</code>, while the
                    <strong><b>host</b></strong> and <strong><b>domain</b></strong>
                    is
                    <code>oregonstate</code>. Finally, the <strong><b>resources</b></strong>
                    would
                    be <code>/~cervanj2/a2-cervanj2/</code>. This creates
                    the entire URL for our file hosted on OSU's web server.
                </p>
            </article>
            <article id="frontenddesign">
                <h3>Frontend Design</h3>
                When visiting a website, what are some aspects a user might notice? Does the 
                visual design stand out? How does the actual <it>experience</it>
                of the website feel? Is the graphic user interface responsive? These are 
                all factors that make up what is called <strong>frontend design</strong>. 
                It is important for frontend design to create the best user experience possible,
                striking a balance between speed, efficiency, and richness. This can be 
                accomplished by following the <strong>Five "E"s</strong> of usability:
                <dl>
                   <dt><strong>Effective</strong></dt>
                    <dd>The design of a website helps the user accurately achieve their goals.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>The user can quickly perform tasks or explore a website with as few steps as possible.</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>
                        The design of a website allows for quick and easy navigation that any user in 
                        your intended audience can rapidly figure out. First-time users should be kept in mind here.
                    </dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>
                        When developing the frontend of a website, possible user errors should be kept in mind.
                        Accessibility and availability issues should be avoided, minimizing the potential roadblocks
                        a given user might run into and making the design usable by the most amount of
                        people possible.
                    </dd>
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>
                        All the previous "E"s come together to make this "E" a reality. A design should come 
                        together to make it likely that a user will return to the website.
                    </dd>
                </dl>
                <p>
                    One way to achieve the Five "E"s is through the use of <strong>page layout tags</strong>.
                    Page layout tags do very little themselves for the visuals of a given webpage; rather, they help
                    break up content in a way that CSS can effectively apply styles to the webpage and search
                    engines can effectively find a website. The page layout tag <code>header</code>
                    denotes the banner of a website and usually contains the name, publisher, and marketing slogan. 
                    The <code>nav</code> element helps users travel from one page to another. The <code>main</code> 
                    element is the primary content block that contains stories, galleries, and other important
                    things. The <code>section</code> element helps group content by theme, and the <code>article</code>
                    element is used inside a <code>section</code> to denote a single specific topic within the theme.
                    The <code>aside</code> element includes content related to the article and places the content on 
                    the sidebar, while the <code>figure</code> element is used similarly but typically
                    includes media. The <code>blockquote</code> element is designed for extended quotations that are 
                    too long for a given paragraph. The <code>footer</code> element sits at the very bottom of a webpage 
                    and usually contains contact information, legal information, and links to other important pages. 
                    Finally, the <code>div</code> element is a placeholder for dynamic content. Has no style or
                    dimensions.
                </p>
                <p>
                    The <code>anchor</code> element plays a vital role in navigating websites, apps, and the 
                    internet in general. 
                </p>
                <ol>
                    <li>
                        An anchor can link to <strong>external content</strong> by setting the <code>href</code> attribute
                        to the destination URL. The text between the <code>anchor</code> element should describe the 
                        destination to the user.
                    </li>
                    <li>
                        An anchor can link to <strong>internal content</strong> by using <strong>IDs</strong>. By setting 
                        <code>href</code> of an <code>anchor</code> element to a hashtag followed by the destination ID's 
                        value, the text within the <code>anchor</code> element will take the user to the intended ID.
                    </li>
                    <li>
                        An anchor can link to <strong>different pages</strong> within a website by setting the <code>href</code>
                        value to the relative path of the desired page. 
                    </li>
                </ol>
            </article>
            <article id="optimizingimages">
                <h3>Optimizing Images</h3>
                <p>
                    There are 6 major specifications which help to optimize images on the web. Giving an image a
                    <strong>descriptive file name</strong> helps improve search engine optimization (SEO) by providing
                    search engines with the who, what, when, and where of the image. A <strong>small file size</strong>
                    speeds up load times, only serving high resolution images to high resolution devices. Using 
                    <strong>exact dimensions</strong> for an image allows the image to fit properly in its allocated
                    space on the webpage, again shrinking load times. Using the <strong>correct file format</strong>
                    allows for images to be rendered correctly. Providing the <strong>proper resolution</strong> to the 
                    proper device also allow for quicker load times. <strong>Color mode</strong> also plays into image 
                    optimization. <em>RGB</em> is for .PNG, .JPG, .SVG, and .WebP, while <em>indexed</em> is for .GIF.
                </p>
                <p>
                    Some file formats are better used for certain applications than others. <strong>SVG</strong>,
                    or <strong>Scalable Vector Graphics</strong>, are more appropriate for line art because they are 
                    mathematically derived, making for a much crisper image. <strong>GIF</strong> files have 8-bit 
                    transparency, making them another good candidate for line art. <strong>PNG</strong> files 
                    are also great for line art because they 
                    have true transparency and can be placed over a variety of colors without distortion. Files that 
                    are ideal for photos are <strong>JPG</strong> files, which compress down to a small size while
                    keeping photo quality reasonable, and <strong>WebP</strong> files, which also compress while remaining
                    rectangular.
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    Image files that websites serve up to help users identify websites and brands are called <strong>favicons</strong>,
                    or favorites icons. Usually a symbol or logo which represents the website, favicons are found on browser tabs,
                    application icons on cell phones, website headers, and search results including the website.
                </p>
            </article>
            <article id="cascading-stylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>
                    Providing a fun and efficient experience for the end user is important to ensure said users return
                    to a website. <strong>Stylesheets</strong> are the main tool used to define how the structure, content, and
                    components of HTML look and behave, facilitating a more enjoyable user experience. Without stylesheets, we are left
                    with very plain-looking webpages, or even worse: inline styles!
                </p>
                <p>
                    How can a developer incorporate styles to their webpage? There are five ways this can be achieved. One is 
                    linking an <strong>external</strong> stylesheets. This usually involves creating a separate file, usually titled
                    something like <code>main.css</code> and writing all your styles there. This is the number one recommended way to 
                    incorporate styles (without JavaScript) as it allows your HTML and styling to stay seperated. You can also have your styles <strong>embedded</strong>
                    within <code>style</code> tags in the area. <strong>Inline</strong> styling similarly allows you to modify styles within an
                    element using an attribute and a value. <strong>JavaScript template literals</strong> can be used within a JavaScript function.
                    Finally, you can manipulate the <strong>Document Object Model</strong> in <strong>regular JavaScript</strong> to achieve styling.
                </p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p>
                    There are six major goals of accessible forms that ensures that new users and users with disabilities can use
                    online forms with ease and without frustration. <strong>Providing clear instructions to the user</strong> 
                    maximizes end-user comprehension of tasks at hand. <strong>Listing reasons for gathering data</strong> and 
                    <strong>specifying which fields are required</strong> informs the user how their data is being used and processed.
                    <strong>Setting the first field to autofocus</strong> and <strong>ensuring each form control can be filled in using the keyboard</strong>
                    allows users that can't use a mouse the ability to finish the form. <strong>Adding tab indexing to complex forms</strong> 
                    makes the order in which to fill fields easier to follow. <strong>Ensuring validation messages are screen readable</strong>
                    makes websites accessible to users that use screen readers.
                </p>
                <p>
                    Making accessible forms involves using a variety of HTML tags. The <strong>form</strong> tag creates the form. Other
                    tags related to forms go inside the <strong>form</strong> tag. Two important attributes are used within the form tag. 
                    The <strong>action</strong> attribute specifies where the request from the form should be sent, while the <strong>method</strong>
                    attribute specifies the HTTP method to be used in the HTTP request sent when the form is submitted. The <strong>input</strong>
                    tag receives data from the user using several different attributes. The <strong>type</strong> attribute specifies what form 
                    the information is in. The <strong>name</strong> attribute tells the server where the information is from.
                </p>
                <p>
                    It is recommended to be conscious of certain styles in a form to improve usability. By thoughtfully adjusting the size and placement
                    of form controls, usability on phones and other devices can be maximized. Users with poor vision can be catered to through the use of 
                    color and high contrast. Standard and consistent design ensures a user can comfortably interact with your website.
                </p>
            </article>
            <article id="express">
                <h3>Express</h3>
                <p>
                    <strong>Node</strong> is an open source, cross-platform runtime environment with a rich library of JavaScript 
                    modules that allows users to develop server-side applications in JavaScript. <strong>npm</strong> is a package manager
                    for Node that provides access to an online repository of Node.js packages using the command line. <strong>Express.js</strong>
                    is a framework that provides APIs of various common tasks that web applications need to do, including get, post, and delete data.
                    These tools together allow developers to more easily create websites rather than working from scratch.
                </p>
            </article>
            <article id="javascript">
                <h3>JavaScript</h3>
                <p>
                    The <strong>main data types</strong> in JavaScript are numbers, boolean values, strings, symbols, special values <em>undefined</em> and <em>null</em>,
                    and objects. Objects, arrays, and JSON are used to perform CRUD operations in websites, allowing a website to dynamically take and process
                    data from users. <strong>Conditionals and loops</strong> are used to iterate through object properties, array elements, and JSON data. 
                    <strong>Object-oriented programming</strong> is a programming paradigm which utilizes an object's identity, state, and behavior 
                    to develop effective programs. <strong>Functional programming</strong>, on the other hand, emphasizes the use of functions to 
                    perform tasks.
                </p>
            </article>
        </>
    );
}
    
export default TopicsPage;