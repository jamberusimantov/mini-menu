// interface I
class Subject {
    title: string;
    options: string[];
    question: string;
    answer: string;
    color: string;
    constructor(title: string, options: string[], question: string, answer: string, color: string) {
        this.title = title;
        this.options = options;
        this.question = question;
        this.answer = answer;
        this.color = color;
    }
}
let subject1 = new Subject('sport', ['option1', 'option2', 'option3', 'option4', 'option5'], '?', '!', 'goldenrod');
let subject2 = new Subject('science', ['option1', 'option2', 'option3', 'option4', 'option5'], '?', '!', 'rgba(69, 69, 223, 0.897)');
let subject3 = new Subject('music', ['option1', 'option2', 'option3', 'option4', 'option5'], '?', '!', 'tomato');
let subject4 = new Subject('pop-culture', ['option1', 'option2', 'option3', 'option4', 'option5'], '?', '!', 'yellowgreen');
let subject5 = new Subject('street-fashion', ['option1', 'option2', 'option3', 'option4', 'option5'], '?', '!', 'dodgerblue');
let subjects: Subject[] = [subject1, subject2, subject3, subject4, subject5];
let isHover: boolean = false;
document.getElementById('body').innerHTML += "<div id='trivia'></div>";
document.getElementById('trivia').innerHTML += "<ul id='triviaNav'></ul>";
document.getElementById('trivia').innerHTML += "<div id='triviaContainer'></div>";
subjects.forEach((element: Subject) => createHTMLElements(element));
subjects.forEach((element: Subject) => addEvent(element));

function createHTMLElements(element: Subject): void {
    let category: HTMLElement;
    let triviaNav: HTMLElement = document.getElementById('triviaNav');
    let triviaContainer: HTMLElement = document.getElementById('triviaContainer');
    createElement(triviaNav, 'li', element, '_triviaNavItem', 'triviaNavItem');
    createElement(triviaContainer, 'div', element, '_categoryDiv', 'categoryDiv');
    category = document.getElementById(`${element.title}_categoryDiv`);
    createElement(category, 'div', element, '_question', 'question', element.question);
    element.options.forEach((option, index) => createElement(category, 'div', element, `Option${index + 1}_`, 'option', `${element.options[index]}`));
    createElement(category, 'div', element, '_answer', 'answer', element.answer);
}
function createElement(parent: HTMLElement, elementType: string, element: Subject, idName: string, className: string, content?: string): void {
    let node: HTMLElement = document.createElement(elementType);
    let text: Text = document.createTextNode(content ? content : element.title);
    node.setAttribute('id', `${element.title}${idName}`)
    node.setAttribute('class', `${className}`)
    node.appendChild(text)
    parent.appendChild(node);
}
function addEvent(element: Subject): void {
    let navItem: HTMLElement = document.getElementById(`${element.title}_triviaNavItem`);
    let categoryDiv: HTMLElement = document.getElementById(`${element.title}_categoryDiv`);
    navItem.addEventListener('mouseover', () => { displaySubjectDiv(element) });
    navItem.addEventListener('mouseout', () => { displaySubjectDiv(element) });
    categoryDiv.addEventListener('mouseover', () => { displaySubjectDiv(element) });
    categoryDiv.addEventListener('mouseout', () => { displaySubjectDiv(element) });
}
function displaySubjectDiv(subject: Subject): void {
    let nav_item: HTMLElement = document.getElementById(`${subject.title}_triviaNavItem`);
    let categoryDiv: HTMLElement = document.getElementById(`${subject.title}_categoryDiv`);
    isHover = !isHover;
    if (isHover) {
        nav_item.style.backgroundColor = `${subject.color}`;
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