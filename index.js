// interface I
var Subject = /** @class */ (function () {
    function Subject(title, options, question, answer, color) {
        this.title = title;
        this.options = options;
        this.question = question;
        this.answer = answer;
        this.color = color;
    }
    return Subject;
}());
var subject1 = new Subject('sport', ['option1', 'option2', 'option3', 'option4', 'option5'], '?', '!', 'goldenrod');
var subject2 = new Subject('science', ['option1', 'option2', 'option3', 'option4', 'option5'], '?', '!', 'rgba(69, 69, 223, 0.897)');
var subject3 = new Subject('music', ['option1', 'option2', 'option3', 'option4', 'option5'], '?', '!', 'tomato');
var subject4 = new Subject('pop-culture', ['option1', 'option2', 'option3', 'option4', 'option5'], '?', '!', 'yellowgreen');
var subject5 = new Subject('street-fashion', ['option1', 'option2', 'option3', 'option4', 'option5'], '?', '!', 'dodgerblue');
var subjects = [subject1, subject2, subject3, subject4, subject5];
var isHover = false;
document.getElementById('body').innerHTML += "<div id='trivia'></div>";
document.getElementById('trivia').innerHTML += "<ul id='triviaNav'></ul>";
document.getElementById('trivia').innerHTML += "<div id='triviaContainer'></div>";
subjects.forEach(function (element) { return createHTMLElements(element); });
subjects.forEach(function (element) { return addEvent(element); });
function createHTMLElements(element) {
    var category;
    var triviaNav = document.getElementById('triviaNav');
    var triviaContainer = document.getElementById('triviaContainer');
    createElement(triviaNav, 'li', element, '_triviaNavItem', 'triviaNavItem');
    createElement(triviaContainer, 'div', element, '_categoryDiv', 'categoryDiv');
    category = document.getElementById(element.title + "_categoryDiv");
    createElement(category, 'div', element, '_question', 'question', element.question);
    element.options.forEach(function (option, index) { return createElement(category, 'div', element, "Option" + (index + 1) + "_", 'option', "" + element.options[index]); });
    createElement(category, 'div', element, '_answer', 'answer', element.answer);
}
function createElement(parent, elementType, element, idName, className, content) {
    var node = document.createElement(elementType);
    var text = document.createTextNode(content ? content : element.title);
    node.setAttribute('id', "" + element.title + idName);
    node.setAttribute('class', "" + className);
    node.appendChild(text);
    parent.appendChild(node);
}
function addEvent(element) {
    var navItem = document.getElementById(element.title + "_triviaNavItem");
    var categoryDiv = document.getElementById(element.title + "_categoryDiv");
    navItem.addEventListener('mouseover', function () { displaySubjectDiv(element); });
    navItem.addEventListener('mouseout', function () { displaySubjectDiv(element); });
    categoryDiv.addEventListener('mouseover', function () { displaySubjectDiv(element); });
    categoryDiv.addEventListener('mouseout', function () { displaySubjectDiv(element); });
}
function displaySubjectDiv(subject) {
    var nav_item = document.getElementById(subject.title + "_triviaNavItem");
    var categoryDiv = document.getElementById(subject.title + "_categoryDiv");
    isHover = !isHover;
    if (isHover) {
        nav_item.style.backgroundColor = "" + subject.color;
        nav_item.style.textShadow = 'black 6px 6px 6px, white 3px 3px 3px';
        categoryDiv.style.display = 'flex';
        categoryDiv.style.flexFlow = 'column wrap';
        categoryDiv.style.justifyContent = 'space-evenly';
        categoryDiv.style.textShadow = 'black 6px 6px 6px, white 3px 3px 3px';
        return;
    }
    nav_item.style.backgroundColor = '';
    nav_item.removeAttribute('style');
    categoryDiv.removeAttribute('style');
}
