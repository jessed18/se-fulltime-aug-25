const headerTemplate = `
    <nav>
        <a class="top_nav" href="javascript:loadPage('index')">Home</a>
        <a class="top_nav" href="javascript:loadPage('projects')">Projects</a>
        <a class="top_nav" href="javascript:loadPage('tools')">Tools</a>
        <a class="top_nav" href="javascript:loadPage('about')">About</a>
    </nav>
`;

document.querySelector('.js-menu').innerHTML = headerTemplate;

var pages = {
    'index': {
        color: '#558822',
        template: '<h1>Home</h1><p>home page</p>'
    },
    'projects': {
        color: 'lightblue',
        template: '<h1>Projects</h1><p>projects page</p>'
    },
    'tools': {
        color: 'lightgrey',
        template: '<h1>Tools</h1><p>tools page</p>'
    },
    'about': {
        color: 'orange',
        template: '<h1>About</h1><p>about page</p>'
    }
};

const loadPage = function(pageIndex) {
    const { color, template } = pages[pageIndex];

    document.querySelector('.js-content').innerHTML = template;
    document.body.style.backgroundColor = color;

    document.body.classList
      .remove('green')
      .remove('lightblue')
      .remove('lightgrey')
      .remove('orange')
      .add(colorClass);
};

loadPage('index');