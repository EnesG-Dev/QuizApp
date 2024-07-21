let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was ist JavaScript?",
        "answer_1": "Eine Programmiersprache",
        "answer_2": "Ein Betriebssystem",
        "answer_3": "Eine Datenbank",
        "answer_4": "Ein Webbrowser",
        "right_answer": 1
    },
    {
        "question": "Welches Symbol wird verwendet, um einen Kommentar in JavaScript zu schreiben?",
        "answer_1": "//",
        "answer_2": "##",
        "answer_3": "<!-- -->",
        "answer_4": "**",
        "right_answer": 1
    },
    {
        "question": "Welcher JavaScript-Befehl wird verwendet, um eine Variable zu deklarieren?",
        "answer_1": "variable",
        "answer_2": "let",
        "answer_3": "int",
        "answer_4": "declare",
        "right_answer": 2
    },
    {
        "question": "Welches der folgenden ist kein JavaScript-Datentyp?",
        "answer_1": "Number",
        "answer_2": "String",
        "answer_3": "Boolean",
        "answer_4": "Float",
        "right_answer": 4
    },
    {
        "question": "Wie definiert man eine Funktion in JavaScript?",
        "answer_1": "function:myFunction()",
        "answer_2": "def myFunction()",
        "answer_3": "function myFunction()",
        "answer_4": "fn myFunction()",
        "right_answer": 3
    },
    {
        "question": "Welches Schlüsselwort wird verwendet, um eine Konstante in JavaScript zu definieren?",
        "answer_1": "constant",
        "answer_2": "let",
        "answer_3": "const",
        "answer_4": "var",
        "right_answer": 3
    },
    {
        "question": "Welche Methode wird verwendet, um ein Element mit einer bestimmten ID auszuwählen?",
        "answer_1": "getElementByClass()",
        "answer_2": "getElementById()",
        "answer_3": "querySelector()",
        "answer_4": "getElementsByTagName()",
        "right_answer": 2
    },
    {
        "question": "Wie fügt man ein Element am Ende eines Arrays hinzu?",
        "answer_1": "append()",
        "answer_2": "add()",
        "answer_3": "push()",
        "answer_4": "insert()",
        "right_answer": 3
    },
    {
        "question": "Wie überprüft man in JavaScript, ob eine Variable einen Wert hat?",
        "answer_1": "if (variable is defined)",
        "answer_2": "if (variable exists)",
        "answer_3": "if (variable != null)",
        "answer_4": "if (variable is not null)",
        "right_answer": 3
    },
    {
        "question": "Was ist das Ergebnis von 2 + '2' in JavaScript?",
        "answer_1": "22",
        "answer_2": "4",
        "answer_3": "NaN",
        "answer_4": "Error",
        "right_answer": 1
    },
    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a=title {...}",
        "right_answer": 1
    },
    {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate; ",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right_answer": 4
    },
    {
        "question": "Was bedeutet das HTML Tag &lt; a&gt;?",
        "answer 1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },
    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": "&lt;iframe&gt;, &lt; frame&gt;, and &lt; frameset&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt; frame&gt;",
        "answer_4": "&lt; frameset&gt;",
        "right_answer": 2
    },
    {
        "question": "Wie stellt man Text am BESTEN fett dar?",
        "answer_1": "&lt,strong&gt;",
        "answer_2": "CSS nutzen",
        "answer_3": "&lt;bold&gt;",
        "answer_4": "&lt;b&gt,",
        "right_answer": 1
    }
]

let currentQuestion = 0;

function init() {
    renderMaxQestions();
    showQuestion();
}

function renderMaxQestions() {
    document.getElementById('maxQuestons').innerHTML = questions.length;
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}