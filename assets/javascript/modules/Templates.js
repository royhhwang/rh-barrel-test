const data = [
    { 'image': '../images/splash/bourbon-barrels.jpg', 'alt': 'Liquor well-aged in stacked barrels', 'display': 'NOVEMBER 10', 'date': '2018-11-10', 'title': 'This Creek Runs Full, Making Every Glass Count', 'a': '#twitter', 'key': 1 },
    { 'image': '../images/splash/bourbon-campfire-solo.jpg', 'alt': 'Man sitting comtemplating whether to drink more Knob Creek. The answer is yes.', 'display': 'NOVEMBER 01', 'date': '2018-11-01', 'title': 'Celebrating Knob Creek\'s 25th Anniversary', 'a': '#twitter', 'key': 2 }
    // { 'image': 'url3', 'alt': 'filler-img alt', 'date': '10/11/10', 'title': 'wefeffd', 'a': 'link to article' },
]

const markup = `
${data.map(bourbon => `
<div key="${bourbon.key}">
    <img src="${bourbon.image}" alt="${bourbon.alt}" class="__image" />
    <div class='__icon'></div>
    <div class='__card'>
        <h5 class="subpara--font">${bourbon.display}</h5>
        <h2>${bourbon.title}</h2>
        <a href='${bourbon.a}'>Read More</a>
    </div>
    <div id="date" style="background-color:white"></div>
</div>
`).join('')}
`;

document.getElementById('article--content').innerHTML = markup;

export default function tmplContent() { }