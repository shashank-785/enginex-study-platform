(() => {
  "use strict";

  const SUBJECTS = [
    { id: "electronics", name: "Fundamentals of Electronics Engineering", short: "Electronics", icon: "⌁", color: "#25805a", topics: ["Electrical quantities & Ohm's law", "Series and parallel circuits", "Kirchhoff's laws", "PN junction diode", "Rectifiers and filters", "Transistor fundamentals", "Revision & problem solving"] },
    { id: "c", name: "C Programming", short: "C Programming", icon: "{ }", color: "#3972a2", topics: ["Variables, types & I/O", "Operators and expressions", "Conditionals", "Loops and tracing", "Arrays and strings", "Functions and scope", "Pointers", "Revision & problem solving"] },
    { id: "web", name: "Web Designing", short: "Web Designing", icon: "▧", color: "#9b6f32", topics: ["HTML document structure", "Semantic HTML & forms", "CSS selectors & box model", "Flexbox layouts", "Responsive design", "Accessibility fundamentals", "Revision & build practice"] },
    { id: "math", name: "Engineering Mathematics", short: "Engineering Mathematics", icon: "∑", color: "#795ba1", topics: ["Functions and limits", "Continuity", "Differentiation rules", "Applications of derivatives", "Matrices and determinants", "Linear systems", "Revision & problem solving"] },
    { id: "environment", name: "Environmental Engineering", short: "Environmental Engineering", icon: "♧", color: "#59834a", topics: ["Ecosystems & sustainability", "Natural resources", "Air pollution", "Water quality & pollution", "Water treatment basics", "Solid waste management", "Revision & applications"] }
  ];
  const NAV = [
    ["dashboard", "Dashboard", "⌂"], ["curriculum", "My Curriculum", "▤"], ["tasks", "Daily Tasks", "✓"],
    ["dpps", "DPPs", "✎"], ["quiz", "Flash Quiz", "◇"], ["tests", "Weekly Tests", "▦"],
    ["progress", "Progress", "↗"], ["resources", "Resources", "▧"], ["settings", "Settings", "⚙"]
  ];
  const TOPICS = {
    electronics: {
      summary: ["Electric current is the rate of flow of charge; voltage is electrical potential difference.", "Ohm's law relates voltage, current and resistance for an ohmic conductor under constant physical conditions.", "In a series circuit, the same current flows through each element; in parallel, each branch has the same voltage."],
      rule: "V = IR; P = VI = I²R = V²/R. Use consistent SI units: volts (V), amperes (A), ohms (Ω), watts (W).",
      quiz: [
        ["What does electric current measure?", ["Rate of flow of charge", "Electrical resistance", "Energy per unit time"], 0, "Current is charge flow per unit time: I = Q/t."],
        ["A 2 Ω resistor carries 3 A. What is the voltage?", ["1.5 V", "5 V", "6 V"], 2, "Ohm's law gives V = IR = 3 × 2 = 6 V."],
        ["Which quantity is the same across parallel branches?", ["Current", "Voltage", "Resistance"], 1, "Each branch in a parallel circuit has the same potential difference."],
      ],
      dpp: [
        ["Conceptual", "Explain the difference between electric current and voltage.", "Current is charge flow per unit time; voltage is energy transferred per unit charge.", "Conceptual", 2],
        ["Application", "A 12 V source is connected across a 4 Ω resistor. Find the current.", "3", "I = V/R = 12/4 = 3 A.", "Calculation", 3],
        ["Numerical", "A 10 Ω resistor carries 0.5 A. Find its power in watts.", "2.5", "P = I²R = 0.5² × 10 = 2.5 W.", "Calculation", 5],
        ["PYQ-Style Practice", "Two resistors, 2 Ω and 4 Ω, are in series across 12 V. Find the circuit current.", "2", "Rtotal = 2 + 4 = 6 Ω; I = 12/6 = 2 A. This is generated practice, not a sourced university PYQ.", "Calculation", 5],
      ]
    },
    c: {
      summary: ["A variable names a memory location whose value is interpreted using its data type.", "A declaration gives an object a type and name; initialization assigns its first value.", "Use format specifiers that match the type when reading and printing values."],
      rule: "Example: int count = 0; printf(\"%d\", count); scanf(\"%d\", &count);. In scanf, pass the address of the variable.",
      quiz: [
        ["Which type is commonly used for whole numbers in introductory C?", ["int", "double", "char *"], 0, "The int type represents integer values."],
        ["What does scanf(\"%d\", &n) use &n for?", ["The value of n", "The address of n", "The size of n"], 1, "scanf needs the address where it can store the input."],
        ["Which format specifier matches an int in printf?", ["%f", "%d", "%c"], 1, "%d is the standard conversion specifier for int."],
      ],
      dpp: [
        ["Conceptual", "What is the difference between declaring and initializing an integer variable?", "Declaration gives a name and type; initialization assigns its first value.", "Conceptual", 2],
        ["Application", "Write a C statement that declares an integer named score and initializes it to 0.", "int score = 0;", "The declaration and initializer appear together: int score = 0;.", "Coding/Syntax", 3],
        ["Coding", "What is the output? int n = 7; printf(\"%d\", n + 2);", "9", "The expression n + 2 evaluates to 9.", "Logic", 5],
        ["PYQ-Style Practice", "Write a scanf call that reads an integer into variable age.", "scanf(\"%d\", &age);", "Use the %d conversion specifier and pass &age. Generated practice; no university paper is claimed.", "Coding/Syntax", 5],
      ]
    },
    web: {
      summary: ["An HTML document has a doctype declaration and a root html element containing head and body.", "Semantic elements such as main, nav, header and footer communicate structure and improve accessibility.", "Metadata belongs in head; visible page content belongs in body."],
      rule: "A minimal page begins with <!doctype html>, then <html lang=\"en\">, <head> metadata, and a <body> with one main content region.",
      quiz: [
        ["Where should visible page content be placed?", ["<head>", "<body>", "<title>"], 1, "Visible document content belongs inside the body element."],
        ["Which element identifies the page's primary content?", ["<main>", "<span>", "<meta>"], 0, "The main element identifies the document's dominant content."],
        ["Why use semantic HTML instead of generic divs everywhere?", ["It communicates document meaning", "It automatically adds CSS", "It replaces all JavaScript"], 0, "Semantic elements expose structure to people, browsers and assistive technologies."],
      ],
      dpp: [
        ["Conceptual", "Name one benefit of using a semantic <nav> element for site navigation.", "It identifies navigation landmarks for browsers and assistive technologies.", "Semantic structure communicates purpose and creates a navigation landmark.", "Conceptual", 2],
        ["Application", "Which element should wrap a page's central, unique content: header, main, or aside?", "main", "Use main for the document's primary, unique content.", "Misinterpretation", 3],
        ["Design", "Write the HTML opening tag for a document whose primary language is English.", "<html lang=\"en\">", "The language attribute on html declares the document language.", "Coding/Syntax", 5],
        ["PYQ-Style Practice", "Place a level-one heading reading Welcome inside a valid HTML element.", "<h1>Welcome</h1>", "A level-one heading is written <h1>Welcome</h1>. Generated practice; not an authenticated university PYQ.", "Coding/Syntax", 5],
      ]
    },
    math: {
      summary: ["A function assigns each input in its domain exactly one output.", "A limit describes the value a function approaches near a point; it need not equal the function's value there.", "For a two-sided limit to exist, its left- and right-hand limits must agree."],
      rule: "For a polynomial p(x), lim(x→a) p(x) = p(a). If substitution gives 0/0, factor and simplify before substituting.",
      quiz: [
        ["What does lim(x→a) f(x) = L describe?", ["The value approached by f(x) near a", "Only the value f(a)", "The slope at every point"], 0, "A limit describes nearby function values, not necessarily the value at a."],
        ["Evaluate lim(x→1) (x²−1)/(x−1).", ["1", "2", "0"], 1, "Factor x²−1=(x−1)(x+1); simplify and take the limit to get 2."],
        ["Can a limit exist if f(a) is undefined?", ["Yes", "No", "Only if a=0"], 0, "The limit depends on nearby values; f(a) itself can be undefined."],
      ],
      dpp: [
        ["Conceptual", "In one sentence, distinguish f(a) from lim(x→a) f(x).", "f(a) is the value at a; the limit is the value approached near a.", "The function value is at the point; the limit concerns behavior near the point.", "Conceptual", 2],
        ["Application", "Evaluate lim(x→2) (x²−4)/(x−2).", "4", "Factor and cancel x−2 to get x+2; the limit is 4.", "Calculation", 3],
        ["Numerical", "Evaluate lim(x→0) sin(3x)/x, with angles measured in radians.", "3", "Rewrite as 3 × sin(3x)/(3x); the standard limit gives 3.", "Formula recall", 5],
        ["PYQ-Style Practice", "Evaluate lim(x→0) (√(1+x)−1)/x.", "0.5", "Rationalize to get 1/(√(1+x)+1), then substitute 0 to obtain 1/2. Generated practice; source/year not verified.", "Calculation", 5],
      ]
    },
    environment: {
      summary: ["An ecosystem contains interacting organisms and the physical environment they depend on.", "Energy flows through trophic levels while nutrients are recycled within ecosystems.", "Biodiversity supports ecosystem stability, resilience and services that benefit people."],
      rule: "A simple energy pyramid places producers at the base, then primary, secondary and higher consumers; energy transfer between levels is limited.",
      quiz: [
        ["What is a producer's main role in an ecosystem?", ["Capture energy and make organic matter", "Consume only decomposers", "Break down rocks"], 0, "Producers convert an energy source into organic matter that supports food webs."],
        ["Which is recycled through ecosystems?", ["Nutrients", "Energy in a closed loop", "Heat from organisms"], 0, "Nutrients cycle; energy flows through and eventually dissipates as heat."],
        ["Which is a common ecosystem service?", ["Pollination", "Increased plastic litter", "Ozone depletion"], 0, "Pollination is an ecosystem service that supports plant reproduction and food production."],
      ],
      dpp: [
        ["Conceptual", "Distinguish energy flow from nutrient cycling in an ecosystem.", "Energy flows through the ecosystem and dissipates; nutrients are recycled.", "Energy transfer is one-way overall; nutrients cycle between organisms and the environment.", "Conceptual", 2],
        ["Application", "Name the trophic level occupied by a plant in a simple food chain.", "producer", "A green plant is a producer at the base of a simple food chain.", "Misinterpretation", 3],
        ["Application", "In grass → rabbit → fox, identify the primary consumer.", "rabbit", "The rabbit eats the producer, so it is the primary consumer.", "Logic", 5],
        ["PYQ-Style Practice", "Give one example of an ecosystem service and state one human benefit.", "pollination", "Pollination supports crop and wild-plant reproduction; other valid sourced-course examples include water purification. Generated practice, not an authenticated PYQ.", "Conceptual", 5],
      ]
    }
  };
  const TEST_ITEMS = [
    ["Electronics", "electronics", "A 6 Ω resistor is connected across 12 V. Find the current.", "2", "Ohm's law: I = V/R = 12/6 = 2 A.", 5],
    ["Electronics", "electronics", "State the relationship between voltage, current and resistance for an ohmic conductor.", "V=IR", "Ohm's law: V = IR under constant physical conditions.", 5],
    ["C Programming", "c", "Which operator obtains the address of variable x in C?", "&", "The address-of operator is &.", 5],
    ["C Programming", "c", "What is printed by printf(\"%d\", 4 + 3 * 2);?", "10", "Multiplication precedes addition, so the result is 10.", 5],
    ["Web Designing", "web", "Which semantic element identifies a document's primary content?", "main", "The main element identifies primary document content.", 5],
    ["Web Designing", "web", "Which attribute declares the language of an HTML document?", "lang", "The lang attribute on the html element declares document language.", 5],
    ["Engineering Mathematics", "math", "Evaluate lim(x→2) (x²−4)/(x−2).", "4", "Factor x²−4=(x−2)(x+2); the limit is 4.", 5],
    ["Engineering Mathematics", "math", "If f(x)=x², what is f'(x)?", "2x", "By the power rule, d(x²)/dx=2x.", 5],
    ["Environmental Engineering", "environment", "In a food chain, what is the first trophic level generally called?", "producer", "Producers occupy the base of a simple food chain.", 5],
    ["Environmental Engineering", "environment", "Do nutrients cycle or flow one-way through an ecosystem?", "cycle", "Nutrients are recycled, while energy flows through the ecosystem.", 5],
  ];
  const STORAGE_KEY = "enginex-app-v2";
  const BASE = {
    view: "landing", onboardStep: 0, selectedTask: null, taskFilter: "All", difficultyFilter: "All", dateFilter: "", playingResourceId: null,
    onboardDraft: { syllabusText: "", manualTopics: "", timetableText: "", resourceText: "", classList: "", files: [] },
    profile: { name: "", institution: "", semester: "", branch: "", level: "New to these subjects", weekdayHours: 3.5, weekendHours: 8, availableHours: 3.5, classStart: "08:00", classEnd: "17:00", studyStart: "18:00", weekendStudyStart: "09:00", examDate: "", examType: "Mid-semester", targetLevel: "Confident understanding", notes: "", timetable: "", subjects: SUBJECTS.map(item => item.id) },
    resources: [], tasks: [], completedTaskIds: [], sessions: [], quizAttempts: [], dppAttempts: [], testAttempts: [],
    mistakes: [], testSession: null, search: "", resourceFilter: "All", settingsTab: "Profile", notifications: true, theme: "Dark", themeChosen: false, demo: false
  };
  let state = loadState();
  let testInterval = null;
  let generationTimer = null;
  let toastTimer = null;
  const app = document.getElementById("app");
  const dialog = document.getElementById("app-dialog");

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredCloneFallback(BASE);
      const saved = JSON.parse(raw);
      const restored = { ...structuredCloneFallback(BASE), ...saved, profile: { ...BASE.profile, ...(saved.profile || {}) } };
      if (!restored.themeChosen) restored.theme = "Dark";
      return restored;
    } catch (error) {
      console.error("Enginex could not load saved data.", error);
      return structuredCloneFallback(BASE);
    }
  }
  function structuredCloneFallback(value) {
    return JSON.parse(JSON.stringify(value));
  }
  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch (error) { console.error("Enginex could not persist this update.", error); toast("Your browser could not save this change. Check available storage."); }
  }
  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }
  function icon(value) { return `<span class="icon" aria-hidden="true">${value}</span>`; }
  function selectedSubjects() { return SUBJECTS.filter(subject => state.profile.subjects.includes(subject.id)); }
  function subjectById(id) { return SUBJECTS.find(subject => subject.id === id) || SUBJECTS[0]; }
  function go(view) { state.view = view; persist(); render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function toast(message) {
    const region = document.getElementById("toast-region");
    if (!region) return;
    const item = document.createElement("div");
    item.className = "toast"; item.textContent = message; region.appendChild(item);
    window.setTimeout(() => item.remove(), 3400);
  }
  function localDate(date = new Date(), options = { weekday: "short", month: "short", day: "numeric" }) {
    return new Intl.DateTimeFormat(undefined, options).format(date);
  }
  function timeLabel(value) {
    if (!value) return "Not set";
    const [hour, minute] = value.split(":").map(Number);
    const date = new Date(); date.setHours(hour, minute, 0, 0);
    return new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(date);
  }
  function addMinutesToTime(value, minutes) {
    const [hour,minute]=String(value||"18:00").split(":").map(Number);
    const date=new Date(); date.setHours(hour||0,(minute||0)+minutes,0,0);
    return `${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`;
  }
  function timeOverlapsClasses(studyStart,classStart,classEnd) {
    if(!studyStart||!classStart||!classEnd||classStart>=classEnd) return false;
    return studyStart>=classStart&&studyStart<classEnd;
  }
  function makeDemo() {
    const profile = { ...BASE.profile, name: "Demo Learner", institution: "Illustrative sample", semester: "Semester 1", weekdayHours: 3.5, weekendHours: 8, availableHours: 3.5, examDate: "", subjects: SUBJECTS.map(item => item.id) };
    const tasks = buildTasks(profile);
    tasks.forEach(task => { task.date = isoAt(task.day - 1); });
    const resources = [
      { id: uid(), title: "Sample syllabus outline", category: "Syllabus", type: "text", detail: "Illustrative outline only — verify topics against your university syllabus", createdAt: new Date().toISOString(), sample: true },
      { id: uid(), title: "Starter revision playlist", category: "YouTube", type: "link", url: "https://www.youtube.com/", detail: "Example link; no video has been watched or analyzed", createdAt: new Date().toISOString(), sample: true }
    ];
    const completed=tasks.filter(task=>task.type==="study").slice(0,4).map(task=>task.id);
    const demoSessions=Array.from({length:5},(_,index)=>{const date=new Date();date.setDate(date.getDate()-index);return{id:uid(),taskId:completed[index%Math.max(completed.length,1)],minutes:45+index*5,date:date.toISOString()};});
    const quizTask=tasks.find(task=>task.subjectId==="math"&&task.type==="study");
    const dppTask=tasks.find(task=>task.subjectId==="c"&&task.type==="study");
    state = { ...state, view: "dashboard", demo: true, profile, tasks, resources, completedTaskIds: completed, sessions: demoSessions, quizAttempts: quizTask?[{id:uid(),taskId:quizTask.id,subjectId:"math",answers:[1,1,0],score:2,total:3,date:new Date().toISOString()}]:[], dppAttempts: dppTask?[{id:uid(),taskId:dppTask.id,subjectId:"c",answers:["","", "", ""],checks:[true,true,false,true],mistakes:["","","Coding/Syntax",""],score:10,total:15,date:new Date().toISOString()}]:[], testAttempts:[{id:uid(),score:38,total:50,percent:76,subjectScores:{"Electronics":8,"C Programming":7,"Web Designing":9,"Engineering Mathematics":6,"Environmental Engineering":8},minutes:54,date:new Date().toISOString(),recommendation:"Illustrative demo result: practise limits and C pointer fundamentals."}], mistakes:[{type:"Coding/Syntax",subjectId:"c",date:new Date().toISOString()},{type:"Calculation",subjectId:"math",date:new Date().toISOString()}] };
    persist(); render();
  }
  function uid() { return `x${Date.now().toString(36)}${Math.random().toString(36).slice(2,8)}`; }
  function isoAt(day) { const date = new Date(); date.setHours(0, 0, 0, 0); date.setDate(date.getDate() + day); return date.toISOString(); }
  function addDays(iso, days) { const date = new Date(iso); date.setDate(date.getDate() + days); return date; }
  function buildTasks(profile) {
    const subjects = SUBJECTS.filter(subject => profile.subjects.includes(subject.id));
    if (!subjects.length) return [];
    const topicLines = (profile.notes || "").split(/\r?\n/).map(topic => topic.trim()).filter(Boolean);
    const customTopics=new Map(subjects.map(subject=>[subject.id,[]]));
    const unassigned=[];
    topicLines.forEach(line=>{
      const separator=line.indexOf(":");
      if(separator>0) {
        const label=line.slice(0,separator).trim().toLowerCase();
        const topic=line.slice(separator+1).trim();
        const match=subjects.find(subject=>[subject.name,subject.short].some(name=>name.toLowerCase()===label));
        if(match&&topic) customTopics.get(match.id).push(topic);
      } else unassigned.push(line);
    });
    if(subjects.length===1) customTopics.get(subjects[0].id).push(...unassigned);
    const subjectTopicIndex=new Map(subjects.map(subject=>[subject.id,0]));
    const start = new Date(); start.setHours(0, 0, 0, 0);
    const examDays = profile.examDate ? daysUntil(profile.examDate) : null;
    const planLength = examDays !== null && examDays >= 0 ? Math.min(28, Math.max(1, examDays)) : 28;
    const weekdays = Math.max(1, Number(profile.weekdayHours) || 3);
    const weekends = Math.max(1, Number(profile.weekendHours) || 6);
    const tasks = [];
    for (let day = 0; day < planLength; day++) {
      const date = new Date(start); date.setDate(start.getDate() + day);
      const weekend = date.getDay() === 0 || date.getDay() === 6;
      const studyMinutes = Math.round((weekend ? weekends : weekdays) * 60);
      if ((day + 1) % 7 === 0) {
        const start=weekend?profile.weekendStudyStart:profile.studyStart;
        tasks.push({ id: uid(), day: day + 1, date: date.toISOString(), startTime: start||"18:00", subjectId: "test", title: "Cumulative weekly test", duration: 60, difficulty: "Mixed", status: "Not started", type: "test", studyMinutes });
        continue;
      }
      const count = studyMinutes >= 120 ? Math.min(8,Math.ceil(studyMinutes/120)) : 1;
      const breakMinutes=10;
      const perTask = Math.max(25, Math.floor((studyMinutes-(count-1)*breakMinutes) / count / 5) * 5);
      for (let index = 0; index < count; index++) {
        const subject = subjects[(day * count + index) % subjects.length];
        const topicNumber = Math.floor((day * count + index) / subjects.length);
        const subjectTopics = SUBJECTS.find(item => item.id === subject.id).topics;
            const subjectCustomTopics=customTopics.get(subject.id)||[];
            const topicIndex=subjectTopicIndex.get(subject.id)||0;
            subjectTopicIndex.set(subject.id,topicIndex+1);
            const title = subjectCustomTopics.length ? subjectCustomTopics[topicIndex % subjectCustomTopics.length] : subjectTopics[topicNumber % subjectTopics.length];
        const difficulty = topicNumber < 2 ? "Foundation" : topicNumber < 5 ? "Intermediate" : "Advanced";
        const start=weekend?profile.weekendStudyStart:profile.studyStart;
        tasks.push({ id: uid(), day: day + 1, date: date.toISOString(), startTime: addMinutesToTime(start||"18:00",index*(perTask+10)), subjectId: subject.id, title, duration: perTask, difficulty, status: "Not started", type: "study", studyMinutes });
      }
    }
    if (examDays !== null && examDays >= 0 && examDays < 28 && tasks.length) {
      const last = tasks[tasks.length - 1];
      if (last.type === "study") {
        last.title = `${last.title} · final revision`;
        last.difficulty = "Revision";
      }
    }
    return tasks;
  }
  function regeneratePlan() {
    const previous=state.tasks;
    const replacements=buildTasks(state.profile);
    const oldBuckets=new Map();
    previous.forEach(task=>{
      const key=`${task.day}|${task.type}|${task.subjectId}`;
      if(!oldBuckets.has(key)) oldBuckets.set(key,[]);
      oldBuckets.get(key).push(task);
    });
    const idMap=new Map();
    replacements.forEach(task=>{
      const key=`${task.day}|${task.type}|${task.subjectId}`;
      const old=oldBuckets.get(key)?.shift();
      if(old) idMap.set(old.id,task.id);
    });
    state.completedTaskIds=state.completedTaskIds.map(id=>idMap.get(id)||id).filter(id=>replacements.some(task=>task.id===id));
    state.sessions=state.sessions.map(item=>({...item,taskId:idMap.get(item.taskId)||item.taskId}));
    state.quizAttempts=state.quizAttempts.map(item=>({...item,taskId:idMap.get(item.taskId)||item.taskId}));
    state.dppAttempts=state.dppAttempts.map(item=>({...item,taskId:idMap.get(item.taskId)||item.taskId}));
    state.mistakes=state.mistakes.map(item=>({...item,taskId:idMap.get(item.taskId)||item.taskId}));
    if(state.selectedTask) state.selectedTask=idMap.get(state.selectedTask)||null;
    state.tasks=replacements;
  }
  function daysUntil(date) {
    if (!date) return null;
    const target = new Date(`${date}T00:00:00`);
    const today = new Date(); today.setHours(0,0,0,0);
    return Math.ceil((target - today) / 86400000);
  }
  function subjectIcon(subjectId) { return subjectById(subjectId).icon; }
  function durationText(minutes) { return minutes >= 60 ? `${Math.floor(minutes / 60)}h${minutes % 60 ? ` ${minutes % 60}m` : ""}` : `${minutes} min`; }
  function tasksForToday() {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return state.tasks.filter(task => {
      const date = new Date(task.date); date.setHours(0, 0, 0, 0);
      return date.getTime() === today.getTime();
    });
  }
  function completionRate() {
    if (!state.tasks.length) return 0;
    return Math.round(state.completedTaskIds.length / state.tasks.length * 100);
  }
  function quizAccuracy() {
    if (!state.quizAttempts.length) return 0;
    return Math.round(state.quizAttempts.reduce((sum, item) => sum + item.score, 0) / state.quizAttempts.reduce((sum, item) => sum + item.total, 0) * 100);
  }
  function dppAccuracy() {
    if (!state.dppAttempts.length) return 0;
    return Math.round(state.dppAttempts.reduce((sum, item) => sum + item.score, 0) / state.dppAttempts.reduce((sum, item) => sum + item.total, 0) * 100);
  }
  function averageTestScore() {
    if (!state.testAttempts.length) return null;
    return Math.round(state.testAttempts.reduce((sum, item) => sum + item.percent, 0) / state.testAttempts.length);
  }
  function streak() {
    const days = new Set(state.sessions.map(item => new Date(item.date).toDateString()));
    let count = 0, cursor = new Date(); cursor.setHours(0,0,0,0);
    if (!days.has(cursor.toDateString())) cursor.setDate(cursor.getDate() - 1);
    while (days.has(cursor.toDateString())) { count++; cursor.setDate(cursor.getDate() - 1); }
    return count;
  }
  function nextStudyTask() { return state.tasks.find(task => task.type === "study" && !state.completedTaskIds.includes(task.id)); }
  function pageHeading(kicker, title, description, action = "") {
    return `<div class="page-heading"><div><div class="eyebrow">${esc(kicker)}</div><h1>${esc(title)}</h1><p>${esc(description)}</p></div>${action ? `<div class="heading-actions">${action}</div>` : ""}</div>`;
  }
  function topBar() {
    const navItem = NAV.find(item => item[0] === state.view);
    const name = state.profile.name || (state.demo ? "Demo Learner" : "Student");
    return `<header class="topbar">
      <div style="display:flex;align-items:center;gap:12px"><button class="icon-button mobile-menu" data-action="toggle-menu" aria-label="Open navigation">☰</button><div class="breadcrumb">Workspace <span style="color:#bac3bc">/</span> <strong>${esc(navItem ? navItem[1] : "Dashboard")}</strong></div></div>
      <div class="topbar-actions">
        <label class="search-box" aria-label="Search"><span>⌕</span><input type="search" placeholder="Search Enginex" value="${esc(state.search)}" data-search></label>
        <button class="icon-button" data-action="notifications" aria-label="Notifications">♧</button>
        <button class="profile-button" data-action="profile"><span class="avatar">${esc(name[0] || "S").toUpperCase()}</span><span class="profile-name">${esc(name)}</span><span class="profile-chevron">⌄</span></button>
      </div>
    </header>`;
  }
  function sidebar() {
    return `<aside class="sidebar" id="sidebar">
      <a class="brand" href="#" data-view="dashboard" aria-label="Enginex home"><span class="brand-mark">E</span><span><span class="brand-word">ENGINEX</span><span class="brand-tagline" style="display:block">Learn. Practice. Recall. Master.</span></span></a>
      <div class="nav-label">Learning workspace</div>
      <nav class="sidebar-nav" aria-label="Main navigation">${NAV.map(([id,label,glyph]) => `<button class="nav-link ${state.view === id ? "active" : ""}" data-view="${id}">${icon(glyph)}${label}</button>`).join("")}</nav>
      <div class="sidebar-bottom"><strong>${state.demo ? "Illustrative demo plan" : "Your plan, your pace"}</strong><p>${state.demo ? "Sample content is illustrative. Build a curriculum to personalize your own plan." : `${state.tasks.length ? `${state.tasks.length} planned study sessions are saved on this device.` : "Set your schedule, subjects, and learning goals to build your plan."}`}</p><div class="progress-track"><div class="progress-fill" style="width:${completionRate()}%"></div></div></div>
    </aside>`;
  }
  function mobileNav() {
    const ids = ["dashboard","curriculum","tasks","progress","settings"];
    return `<nav class="mobile-nav" aria-label="Mobile navigation">${ids.map(id => { const item = NAV.find(row => row[0] === id); return `<button class="${state.view === id ? "active" : ""}" data-view="${id}">${icon(item[2])}<span>${item[1] === "My Curriculum" ? "Plan" : item[1]}</span></button>`; }).join("")}<button data-action="toggle-menu">${icon("☰")}<span>More</span></button></nav>`;
  }
  function shell() {
    return `<div class="workspace">${sidebar()}<div class="main-area">${topBar()}<main class="page-content" id="page-content">${renderView()}</main></div>${mobileNav()}</div>`;
  }
  function render() {
    if (!app) return;
    document.body.dataset.theme = String(state.theme || "Light").toLowerCase();
    if (state.view === "landing") app.innerHTML = landing();
    else if (state.view === "onboarding") app.innerHTML = onboarding();
    else if (state.view === "generating") app.innerHTML = generating();
    else app.innerHTML = shell();
    if (state.view === "generating") startGeneration();
    if (state.view === "tests" && state.testSession?.active) startTestTimer();
    else stopTestTimer();
  }
  function landing() {
    const features = [
      ["✧","AI-ready curriculum","Turn your syllabus, timetable and exam dates into a practical day-by-day learning path."],
      ["✎","Smart DPPs","Build daily practice around your current topics, with clear marks and solutions."],
      ["◇","Active recall","Use short, focused quizzes to retrieve ideas before they fade."],
      ["◎","University PYQs","Keep verified past papers distinct from clearly labeled PYQ-style practice."],
      ["▦","Weekly tests","Bring the week together in a cumulative, timed 50-mark assessment."],
      ["↗","Adaptive progress","Use results and mistake patterns to steer revision toward weak areas."]
    ];
    const subjects = [["⌁","Electronics"],["{ }","C Programming"],["▧","Web Designing"],["∑","Engineering Mathematics"],["♧","Environmental Engineering"]];
    return `<div class="landing">
      <header class="landing-nav"><a class="brand" href="#" data-view="landing"><span class="brand-mark">E</span><span><span class="brand-word">ENGINEX</span><span class="brand-tagline" style="display:block">Learn. Practice. Recall. Master.</span></span></a><nav class="landing-links"><a href="#features">Features</a><a href="#subjects">Subjects</a><button class="button button-quiet" data-action="explore">Explore Dashboard</button></nav></header>
      <section class="hero"><div class="hero-copy"><div class="eyebrow">A smarter way to engineer your learning</div><h1>Your Engineering Curriculum. <span>Automatically Built.</span></h1><p>Bring your syllabus, timetable, lecture links and exam dates together. Enginex shapes them into a personalized study plan—with practice, active recall and progress that adapts as you learn.</p><div class="hero-actions"><button class="button button-primary" data-action="start-onboarding">Build My Curriculum <span>→</span></button><button class="button button-quiet" data-action="explore">Explore Dashboard</button></div><div class="hero-footnote">A student-controlled study workspace. Your information stays in this browser in this prototype.</div></div>
        <div class="hero-visual" aria-label="Illustrative dashboard preview"><div class="preview-window"><div class="preview-top"><div class="preview-brand"><span class="brand-mark">E</span> ENGINEX</div><span class="pill pill-green">THIS WEEK</span></div><div class="preview-greeting"><span>YOUR LEARNING DASHBOARD</span><h3>A clearer path to exam day.</h3></div><div class="preview-metrics"><div class="preview-metric"><span>STUDY HOURS</span><strong>12.5h</strong></div><div class="preview-metric"><span>COMPLETION</span><strong>68%</strong></div><div class="preview-metric"><span>STREAK</span><strong>5 days</strong></div></div><div class="preview-content"><div class="preview-panel"><h4>YOUR STUDY PLAN <span style="float:right;color:#8a958c">Today</span></h4><div class="preview-task"><i class="preview-task-dot"></i><div><strong>Arrays &amp; strings</strong><span>C Programming · 45 min</span></div></div><div class="preview-task"><i class="preview-task-dot" style="background:#8b76ac"></i><div><strong>Functions and limits</strong><span>Engineering Mathematics · 50 min</span></div></div><div class="preview-task"><i class="preview-task-dot" style="background:#bc9a55"></i><div><strong>HTML semantics</strong><span>Web Designing · 35 min</span></div></div></div><div class="preview-panel"><h4>CURRICULUM</h4><div class="preview-ring"></div><p style="margin:0;color:#78857c;text-align:center;font-size:8px">Illustrative preview</p></div></div></div></div>
      </section>
      <section class="section" id="features"><div class="section-heading"><div class="eyebrow">From syllabus to mastery</div><h2>Everything you need to keep learning moving.</h2><p>One connected routine for planning, learning, practice and reflection—built around your real study time.</p></div><div class="feature-grid">${features.map(([glyph,title,description]) => `<article class="feature-card"><span class="feature-icon">${glyph}</span><h3>${title}</h3><p>${description}</p></article>`).join("")}</div></section>
      <section class="section" id="subjects"><div class="section-heading"><div class="eyebrow">Built for your first steps and next challenges</div><h2>Your engineering subjects, in one place.</h2><p>Choose your subjects during setup. Your plan can start from your own syllabus or a clearly marked starter outline.</p></div><div class="subject-grid">${subjects.map(([glyph,name]) => `<article class="subject-card"><span>${glyph}</span><h3>${name}</h3></article>`).join("")}</div></section>
      <section class="section"><div class="landing-cta"><h2>Make your study hours count.</h2><p>Set up your subjects, schedule and goals. Your plan can evolve as you do.</p><button class="button button-primary" data-action="start-onboarding">Build My Curriculum <span>→</span></button></div></section>
      <footer class="landing-footer">ENGINEX · Learn. Practice. Recall. Master. <br><span style="display:inline-block;margin-top:6px">Demo content is illustrative. PYQ authenticity is never assumed.</span></footer>
    </div>`;
  }
  function dashboardStats() {
    const todayTasks = tasksForToday();
    const todayMinutes = todayTasks.reduce((sum, task) => sum + task.duration, 0);
    const completedToday = todayTasks.filter(task => state.completedTaskIds.includes(task.id)).length;
    const avg = averageTestScore();
    return `<div class="stat-grid">
      ${statCard("Today's Study Time", todayMinutes ? durationText(todayMinutes) : "—", todayMinutes ? `${todayTasks.length} sessions planned today` : "No tasks scheduled for today", "◷")}
      ${statCard("Tasks Completed", `${completedToday}/${todayTasks.length || 0}`, state.completedTaskIds.length ? `${state.completedTaskIds.length} completed in this plan` : "Complete a session to begin", "✓")}
      ${statCard("Current Streak", `${streak()} days`, streak() ? "Keep your rhythm going" : "Log a study session to start", "↗")}
      ${statCard("Curriculum Progress", `${completionRate()}%`, `${state.completedTaskIds.length} of ${state.tasks.length} planned sessions`, "◉")}
      ${statCard("DPP Accuracy", state.dppAttempts.length ? `${dppAccuracy()}%` : "—", state.dppAttempts.length ? `${state.dppAttempts.length} practice sets checked` : "Complete a practice set to measure", "✎")}
      ${statCard("Average Test Score", avg === null ? "—" : `${avg}%`, avg === null ? "Your completed tests appear here" : `${state.testAttempts.length} test${state.testAttempts.length === 1 ? "" : "s"} completed`, "▦")}
    </div>`;
  }
  function statCard(label, value, caption, glyph) { return `<article class="stat-card"><div class="stat-top"><span>${esc(label)}</span>${icon(glyph)}</div><div class="stat-number">${esc(value)}</div><div class="stat-caption">${esc(caption)}</div></article>`; }
  function taskRow(task, compact = false) {
    const subject = task.type === "test" ? { short: "Weekly Test", icon: "▦" } : subjectById(task.subjectId);
    const complete = state.completedTaskIds.includes(task.id);
    const label = complete ? "Review" : task.status === "In progress" ? "Continue" : "Start";
    return `<article class="task-row"><span class="task-symbol">${subject.icon}</span><div><h3>${esc(task.title)}</h3><p>${esc(subject.short)} · ${durationText(task.duration)} · ${esc(task.difficulty)} · ${timeLabel(task.startTime)}</p></div><div class="task-actions">${complete ? `<span class="pill pill-green">Complete</span>` : `<span class="pill">${esc(task.difficulty)}</span>`}<button class="button button-quiet button-small" data-action="${task.type === "test" ? "open-test" : "open-task"}" data-id="${task.id}">${label} →</button></div></article>`;
  }
  function percentForSubject(subjectId) {
    const tasks = state.tasks.filter(task => task.subjectId === subjectId && task.type === "study");
    if (!tasks.length) return 0;
    return Math.round(tasks.filter(task => state.completedTaskIds.includes(task.id)).length / tasks.length * 100);
  }
  function subjectProgressCard() {
    const subjects = selectedSubjects();
    if (!subjects.length) return empty("No subjects selected", "Choose subjects in settings or set up your curriculum.", "start-onboarding");
    return `<div class="subject-progress-list">${subjects.map(subject => { const value = percentForSubject(subject.id); return `<div class="subject-progress"><span class="subject-progress-name">${esc(subject.short)}</span><div class="progress-track" role="progressbar" aria-label="${esc(subject.short)} progress" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill" style="width:${value}%"></div></div><span class="progress-value">${value}%</span></div>`; }).join("")}</div>`;
  }
  function activityChart() {
    const days = Array.from({length: 7}, (_, index) => {
      const date = new Date(); date.setHours(0,0,0,0); date.setDate(date.getDate() - (6-index));
      const minutes = state.sessions.filter(item => new Date(item.date).toDateString() === date.toDateString()).reduce((sum,item) => sum + item.minutes, 0);
      return { label: new Intl.DateTimeFormat(undefined, {weekday:"short"}).format(date), hours: Math.min(100, minutes / 180 * 100) };
    });
    return `<div class="chart" role="img" aria-label="Study activity for the last 7 days">${days.map(day => `<div class="chart-column"><div class="chart-bar-wrap"><div class="chart-bar" style="height:${day.hours}%"></div></div><span class="chart-day">${day.label}</span></div>`).join("")}</div>`;
  }
  function upcoming() {
    const upcomingTasks = state.tasks.filter(task => new Date(task.date) >= new Date(new Date().setHours(0,0,0,0))).slice(0,3);
    const examDays = daysUntil(state.profile.examDate);
    return `<div class="upcoming-list">${upcomingTasks.map(task => {
      const subject = task.type === "test" ? "Cumulative assessment" : subjectById(task.subjectId).short;
      const date = new Date(task.date);
      return `<div class="upcoming-item"><div class="upcoming-date"><strong>${String(date.getDate()).padStart(2,"0")}</strong><span>${new Intl.DateTimeFormat(undefined,{month:"short"}).format(date)}</span></div><div><h4>${esc(task.type === "test" ? "Weekly test · 50 marks" : task.title)}</h4><p>${esc(subject)} · ${durationText(task.duration)}</p></div></div>`;
    }).join("")}${examDays !== null ? `<div class="upcoming-item"><div class="upcoming-date"><strong>${examDays >= 0 ? examDays : "—"}</strong><span>DAYS</span></div><div><h4>${esc(state.profile.examType)} exam</h4><p>${esc(state.profile.examDate)}</p></div></div>` : ""}${!upcomingTasks.length && examDays === null ? `<div class="muted small">Your next lectures and exam dates will appear here when added.</div>` : ""}</div>`;
  }
  function dashboard() {
    const name = state.profile.name || (state.demo ? "Demo Learner" : "");
    const greeting = new Intl.DateTimeFormat(undefined,{hour:"numeric"}).format(new Date());
    const period = Number(greeting.split(" ")[0]) < 12 ? "morning" : Number(greeting.split(" ")[0]) < 17 ? "afternoon" : "evening";
    const todays = tasksForToday();
    const next = state.tasks.find(task => task.type === "study" && !state.completedTaskIds.includes(task.id));
    const taskList = todays.length ? todays : next ? [next] : [];
    const examCount = daysUntil(state.profile.examDate);
    const isWeekend=new Date().getDay()===0||new Date().getDay()===6;
    const todayAvailable=isWeekend?state.profile.weekendHours:state.profile.weekdayHours;
    return `${pageHeading("Your learning dashboard", `Good ${period}${name ? `, ${name}` : ""}`, "Here's your plan for today.", `<button class="button button-primary" data-action="start-onboarding">${state.tasks.length ? "✧ Edit my curriculum" : "✧ Build my curriculum"}</button>`)}
      ${state.demo ? `<div class="notice" style="margin-bottom:14px"><strong>Illustrative demo:</strong> this sample learner and schedule are examples, not your personal information. Build your curriculum to replace them with your own details.</div>` : state.tasks.length ? "" : `<div class="notice" style="margin-bottom:14px"><strong>Your workspace is ready.</strong> Add your subjects, timetable and exam details to build your personalized curriculum. No information has been assumed.</div>`}
      ${dashboardStats()}
      <div class="dashboard-grid">
        <div class="main-stack">
          <section class="card"><div class="card-heading"><div><h2>Today's plan</h2><p>${localDate()} · ${todayAvailable} hours available</p></div><button class="button button-quiet button-small" data-view="tasks">View all tasks →</button></div>
            ${taskList.length ? `<div class="task-list">${taskList.slice(0,4).map(task => taskRow(task)).join("")}</div>` : empty("Your first study session starts here", "Build a plan from your course syllabus, class timetable and available study hours.", "start-onboarding")}
          </section>
          <section class="card"><div class="card-heading"><div><h2>Progress by subject</h2><p>Completion across your generated curriculum</p></div><button class="button button-quiet button-small" data-view="progress">Full report →</button></div>${subjectProgressCard()}</section>
          <section class="card"><div class="card-heading"><div><h2>Weekly activity</h2><p>Logged study time · last 7 days</p></div><span class="pill pill-green">${state.sessions.reduce((sum,item)=>sum+item.minutes,0)} min logged</span></div>${activityChart()}</section>
        </div>
        <aside class="side-stack">
          <section class="card"><div class="card-heading"><div><h2>Curriculum progress</h2><p>Small steps add up</p></div></div><div class="progress-summary"><div class="circle-progress" style="--progress:${completionRate()}%"><strong>${completionRate()}%</strong></div><div><strong>${state.completedTaskIds.length} completed</strong><p>of ${state.tasks.length} planned learning sessions</p></div></div><div style="margin-top:15px">${state.tasks.length ? `<button class="button button-quiet button-small" data-view="curriculum">Open curriculum →</button>` : `<button class="button button-primary button-small" data-action="start-onboarding">Create plan →</button>`}</div></section>
          <section class="card"><div class="card-heading"><div><h2>Coming up</h2><p>${examCount !== null ? examCount >= 0 ? `Exam in ${examCount} days` : "Review your exam date in settings" : "Your next deadlines"}</p></div></div>${upcoming()}</section>
          <section class="card"><div class="card-heading"><div><h2>Practice snapshot</h2><p>From your submitted work</p></div></div><div class="subject-progress-list"><div class="subject-progress"><span class="subject-progress-name">Flash quiz</span><div class="progress-track"><div class="progress-fill" style="width:${quizAccuracy()}%"></div></div><span class="progress-value">${state.quizAttempts.length?`${quizAccuracy()}%`:"—"}</span></div><div class="subject-progress"><span class="subject-progress-name">DPP accuracy</span><div class="progress-track"><div class="progress-fill" style="width:${dppAccuracy()}%"></div></div><span class="progress-value">${state.dppAttempts.length?`${dppAccuracy()}%`:"—"}</span></div></div></section>
        </aside>
      </div>`;
  }
  function empty(title, description, action, buttonText = "Get started") {
    return `<div class="empty-state"><span style="font-size:22px;color:#78a381">✧</span><strong>${esc(title)}</strong><p>${esc(description)}</p>${action ? `<button class="button button-primary button-small" data-action="${action}">${esc(buttonText)} →</button>` : ""}</div>`;
  }
  function curriculum() {
    if (!state.tasks.length) return `${pageHeading("My curriculum","Your path, built around your syllabus","Start with your real subjects, study time and exam date.")}<section class="card">${empty("Your curriculum hasn't been built yet","Set up the subjects you study and add topics from your official syllabus. A starter outline is offered only as an illustrative fallback.","start-onboarding","Build My Curriculum")}</section>`;
    const subjects = selectedSubjects();
    const filtered = state.tasks.filter(task => {
      if(state.search&&!`${task.title} ${task.subjectId==="test"?"weekly test":subjectById(task.subjectId).short}`.toLowerCase().includes(state.search.toLowerCase())) return false;
      if(state.difficultyFilter!=="All"&&task.difficulty!==state.difficultyFilter) return false;
      if(state.dateFilter&&task.date.slice(0,10)!==state.dateFilter) return false;
      if (state.taskFilter !== "All") {
        if (state.taskFilter === "Weekly Test" && task.type !== "test") return false;
        if (state.taskFilter === "Not started" && (task.type === "test" || state.completedTaskIds.includes(task.id))) return false;
        if (state.taskFilter === "Completed" && !state.completedTaskIds.includes(task.id)) return false;
        if (subjects.some(item => item.id === state.taskFilter) && task.subjectId !== state.taskFilter) return false;
      }
      return true;
    });
    return `${pageHeading("My curriculum","Your learning timeline","A 28-day study path shaped by your selected subjects and available study time.",`<button class="button button-quiet" data-action="start-onboarding">Edit plan</button>`)}
      ${state.demo ? `<div class="notice" style="margin-bottom:13px"><strong>Illustrative curriculum:</strong> verify every starter topic against your university syllabus. Practice questions are not authentic PYQs.</div>` : ""}
      <div class="filters"><select class="select" data-filter-tasks aria-label="Filter subject or status"><option>All</option><option>Weekly Test</option><option>Not started</option><option>Completed</option>${subjects.map(item=>`<option value="${item.id}" ${state.taskFilter===item.id?"selected":""}>${esc(item.short)}</option>`).join("")}</select><select class="select" data-filter-difficulty aria-label="Filter difficulty"><option>All</option>${["Foundation","Intermediate","Advanced","Revision","Mixed"].map(item=>`<option ${state.difficultyFilter===item?"selected":""}>${item}</option>`).join("")}</select><input class="field" style="width:auto;min-width:140px" type="date" aria-label="Filter date" data-filter-date value="${esc(state.dateFilter)}"><span class="pill">${filtered.length} sessions shown</span></div>
      <section class="card"><div class="curriculum-timeline">${filtered.length ? filtered.map(task => curriculumRow(task)).join("") : empty("No sessions match this filter","Try a different subject or status filter.")}</div></section>
      <div class="notice" style="margin-top:12px"><strong>Question source:</strong> generated exam-style prompts are labeled “PYQ-Style Practice.” An authentic university PYQ is shown only when its university, year and source are verifiable.</div>`;
  }
  function curriculumRow(task) {
    const date = new Date(task.date);
    const completed = state.completedTaskIds.includes(task.id);
    const isTest = task.type === "test";
    const subject = isTest ? "WEEKLY TEST" : subjectById(task.subjectId).short;
    return `<article class="timeline-item ${completed?"completed":""} ${isTest?"test":""}"><div class="timeline-day">DAY ${String(task.day).padStart(2,"0")}<br><span style="font-weight:500;letter-spacing:0">${localDate(date,{month:"short",day:"numeric"})}</span></div><div class="timeline-line"><span class="timeline-dot"></span></div><div class="timeline-card"><div><h3>${esc(isTest ? "Cumulative weekly test · 50 marks" : `${subject} · ${task.title}`)}</h3><p>${isTest ? `60 minutes · 10 marks per supported subject · ${timeLabel(task.startTime)}` : `${durationText(task.duration)} · ${esc(task.difficulty)} · ${timeLabel(task.startTime)}`}</p><div class="timeline-meta"><span class="pill ${completed?"pill-green":isTest?"pill-amber":""}">${completed?"Complete":isTest?"Scheduled":"Not started"}</span>${!isTest?`<span class="pill">${esc(subject)}</span>`:""}</div></div><button class="button button-quiet button-small" data-action="${isTest?"open-test":"open-task"}" data-id="${task.id}">${completed?"Review":isTest?"Open test":"Open task"} →</button></div></article>`;
  }
  function selectedTask() {
    return state.tasks.find(task=>task.id===state.selectedTask) || nextStudyTask() || state.tasks.find(task=>task.type==="study");
  }
  function taskPage() {
    const task = selectedTask();
    if (!task || task.type === "test") return `${pageHeading("Daily tasks","A focused study session","Choose a session from your curriculum.")}<section class="card">${empty("No study tasks to open","Build your curriculum to create tasks from your study availability.","start-onboarding")}</section>`;
    const subject = subjectById(task.subjectId);
    const data = TOPICS[subject.id];
    const done = state.completedTaskIds.includes(task.id);
    const session = state.sessions.find(item=>item.taskId===task.id);
    const quizResult = state.quizAttempts.find(item=>item.taskId===task.id);
    const dppResult = state.dppAttempts.find(item=>item.taskId===task.id);
    return `${pageHeading(`ASSIGNED TASK · DAY ${String(task.day).padStart(2,"0")}`, "Today's learning session", "Learn a concept, retrieve it from memory, then apply it in practice.", `<button class="button ${done?"button-quiet":"button-primary"}" data-action="${done?"undo-task":"complete-task"}" data-id="${task.id}">${done?"✓ Completed":"Complete task"}</button>`)}
      ${state.demo ? `<div class="notice" style="margin-bottom:13px"><strong>Illustrative task:</strong> sample starter topic. Replace it with your syllabus during setup for a course-aligned plan.</div>` : ""}
      <div class="notice" style="margin-bottom:13px"><strong>Course alignment:</strong> this prototype's sample question pack checks foundational ideas for the selected subject. Confirm topic-specific details against your syllabus and lecture notes.</div>
      <div class="task-layout"><div class="task-main">
        <section class="task-banner"><div class="eyebrow" style="color:#b4d9bb">${esc(subject.short)}</div><h2>${esc(task.title)}</h2><p>Build understanding, practise retrieval and check your work. Use your official lecture notes as the source of truth.</p><div class="task-detail-grid"><div class="task-detail"><span>Duration</span><strong>${durationText(task.duration)}</strong></div><div class="task-detail"><span>Schedule slot</span><strong>${timeLabel(task.startTime)}</strong></div><div class="task-detail"><span>Difficulty</span><strong>${esc(task.difficulty)}</strong></div><div class="task-detail"><span>Progress</span><strong>${done?"Complete":session?"In progress":"Not started"}</strong></div></div></section>
        <section class="content-block"><h3>📚 Lecture summary &amp; key takeaways</h3><p><strong>Core concepts</strong></p><ul>${data.summary.map(line=>`<li>${esc(line)}</li>`).join("")}</ul><p><strong>Key formulas / code / rules</strong><br>${esc(data.rule)}</p><p><strong>Learning outcomes</strong></p><ul><li>Explain the central idea of ${esc(task.title)} without notes.</li><li>Apply one relevant rule or method to an unfamiliar example.</li><li>Identify and correct one common misconception or mistake.</li></ul></section>
        <section class="content-block"><div class="card-heading"><div><h3 style="margin:0">🧠 Active recall · Flash quiz</h3><p style="margin:5px 0 0">Exactly 3 questions · try from memory before checking.</p></div>${quizResult?`<span class="pill pill-green">Score ${quizResult.score}/${quizResult.total}</span>`:""}</div>
          <form data-form="quiz" data-task="${task.id}">${data.quiz.map((item,index)=>`<div class="question-card"><div class="question-meta"><span class="pill">Q${index+1} · Concept check</span></div><h4>${esc(item[0])}</h4><div class="quiz-options">${item[1].map((option,optionIndex)=>`<label class="quiz-option"><input type="radio" name="quiz-${task.id}-${index}" value="${optionIndex}" ${quizResult?"disabled":""} required><span>${esc(option)}</span></label>`).join("")}</div>${quizResult?`<div class="question-feedback ${quizResult.answers[index]===item[2]?"":"incorrect"}">${quizResult.answers[index]===item[2]?"Correct. ":"Review this idea. "}${esc(item[3])}</div>`:""}</div>`).join("")}${quizResult?"":`<button class="button button-primary button-small" style="margin-top:11px" type="submit">Submit flash quiz</button>`}</form>
        </section>
        <section class="content-block"><div class="card-heading"><div><h3 style="margin:0">📝 Daily practice problems</h3><p style="margin:5px 0 0">Exactly 4 questions · 15 marks total</p></div>${dppResult?`<span class="pill pill-green">Self-check ${dppResult.score}/${dppResult.total}</span>`:""}</div>
          ${data.dpp.map((item,index)=>`<article class="question-card"><div class="question-meta"><span class="pill ${item[0]==="PYQ-Style Practice"?"pill-amber":""}">Q${index+1} · ${esc(item[0])}</span><span class="pill">${item[4]} marks</span><span class="pill">${index<2?"Foundation":"Intermediate"}</span></div><h4>${item[0]==="PYQ-Style Practice"?"PYQ-Style Practice · ":""}${esc(item[1])}</h4><label class="field-label" for="dpp-${task.id}-${index}">Your answer</label><textarea class="answer-input ${subject.id==="c"&&index>0?"code-input":""}" id="dpp-${task.id}-${index}" data-dpp-answer="${index}" ${subject.id==="c"&&index>0?'spellcheck="false"':""} ${dppResult?"disabled":""} placeholder="Work it out first, then enter a concise answer…">${dppResult?esc(dppResult.answers[index]||""):""}</textarea>${dppResult?`<div class="question-feedback ${dppResult.checks[index]?"":"incorrect"}">${dppResult.checks[index]?"Self-marked correct. ":"Review recommended. "}Self-assessment recorded · ${esc(dppResult.mistakes[index]||"No mistake logged")}</div><details class="solution-details"><summary>Show Solution</summary><p>Expected answer: ${esc(item[2])}. ${esc(item[3])}</p></details>`:`<div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:8px"><label><span class="field-label">Self-check</span><select class="select" data-dpp-check="${index}"><option value="">Choose result</option><option value="correct">I got it right</option><option value="review">Needs review</option></select></label><label><span class="field-label">Mistake category, if needed</span><select class="select" data-dpp-mistake="${index}"><option value="">Select category</option>${["Conceptual","Calculation","Coding/Syntax","Logic","Formula recall","Misinterpretation","Careless error"].map(x=>`<option>${x}</option>`).join("")}</select></label></div><details class="solution-details"><summary>Show Solution</summary><p>${esc(item[3])}</p></details>`}</article>`).join("")}
          ${dppResult?"":`<div class="notice" style="margin:10px 0">Self-check each answer against the hidden solution, then mark it. Open responses are not scored by AI in this browser prototype.</div><button class="button button-primary button-small" data-action="submit-dpp" data-id="${task.id}">Check my answers</button>`}
        </section>
      </div><aside class="task-aside">
        <section class="card"><div class="card-heading"><div><h2>Study execution plan</h2><p>Fits your available study hours</p></div></div><div class="upcoming-list"><div class="upcoming-item"><div class="upcoming-date"><strong>${Math.round(task.duration*.48)}</strong><span>MIN</span></div><div><h4>Learning</h4><p>Understand ideas and examples</p></div></div><div class="upcoming-item"><div class="upcoming-date"><strong>${Math.round(task.duration*.12)}</strong><span>MIN</span></div><div><h4>Active recall</h4><p>Answer 3 quiz prompts</p></div></div><div class="upcoming-item"><div class="upcoming-date"><strong>${Math.round(task.duration*.28)}</strong><span>MIN</span></div><div><h4>Daily practice</h4><p>Solve 4 marked problems</p></div></div><div class="upcoming-item"><div class="upcoming-date"><strong>${task.duration-Math.round(task.duration*.48)-Math.round(task.duration*.12)-Math.round(task.duration*.28)}</strong><span>MIN</span></div><div><h4>Mistake review</h4><p>Log the next revision target</p></div></div></div></section>
        <section class="card"><div class="card-heading"><div><h2>Adaptive next step</h2><p>Based on your recent performance</p></div></div><p class="small muted">${adaptiveAdvice(subject.id)}</p></section>
        <section class="card"><div class="card-heading"><div><h2>Mark this session</h2><p>Track actual study time</p></div></div><label class="field-label" for="session-minutes">Minutes studied</label><input class="field" id="session-minutes" type="number" min="1" max="${Math.max(task.duration,1)}" value="${session?session.minutes:task.duration}" ${done?"disabled":""}><button class="button ${done?"button-quiet":"button-primary"} button-small" style="margin-top:9px" data-action="${done?"undo-task":"complete-task"}" data-id="${task.id}">${done?"Undo completion":"Complete session"}</button></section>
      </aside></div>`;
  }
  function adaptiveAdvice(subjectId) {
    const recent = [...state.quizAttempts,...state.dppAttempts].filter(item=>item.subjectId===subjectId).sort((a,b)=>new Date(b.date)-new Date(a.date))[0];
    if (!recent) return "Complete today's quiz or DPP to unlock targeted revision. No performance has been assumed.";
    const percent = Math.round(recent.score/recent.total*100);
    if (percent < 60) return "Below 60%: revisit prerequisite concepts and try a shorter reinforcement set at a lower difficulty.";
    if (percent < 80) return "Developing: continue with the next topic and add more application problems.";
    return "Strong performance: move toward mixed-topic, higher-difficulty practice and space out basic review.";
  }
  function adaptUpcomingTasks(subjectId,score,total,currentTaskId) {
    if(!total) return "No change made; there is no scored performance data.";
    const percent=score/total*100;
    const subject=subjectById(subjectId);
    const future=state.tasks.filter(task=>task.type==="study"&&task.subjectId===subjectId&&task.id!==currentTaskId&&!state.completedTaskIds.includes(task.id)&&new Date(task.date)>=new Date(new Date().setHours(0,0,0,0))).slice(0,2);
    if(percent<60) {
      future.forEach(task=>{task.title=`Prerequisite revision: ${subject.topics[0]}`;task.difficulty="Foundation";});
      return future.length?"Below 60%: upcoming sessions now reinforce prerequisites at foundation difficulty.":"Below 60%: revisit prerequisites before your next topic.";
    }
    if(percent<80) {
      if(future[0]) {future[0].title=`Application practice: ${future[0].title}`;future[0].difficulty="Intermediate";}
      return future.length?"Developing result: your next session now emphasizes application.":"Developing result: continue with application practice.";
    }
    future.forEach(task=>{task.title=`Mixed-topic challenge: ${task.title}`;task.difficulty="Advanced";});
    return future.length?"Strong result: upcoming sessions now include mixed, higher-difficulty practice.":"Strong result: keep spaced review and mixed-topic practice.";
  }
  function taskListPage(type) {
    const tasks = state.tasks.filter(task=>task.type==="study");
    const visible = tasks.filter(task=>(state.taskFilter==="All" || task.subjectId===state.taskFilter)&&(!state.search||`${task.title} ${subjectById(task.subjectId).short}`.toLowerCase().includes(state.search.toLowerCase())));
    const label = type==="dpps"?"Daily practice problems":"Daily tasks";
    const action = type==="dpps"?"Start DPP":"Open task";
    return `${pageHeading(type==="dpps"?"Daily Practice Problems":"Your learning routine",label,type==="dpps"?"Four marked questions per topic. Generated questions are not presented as verified past papers.":"Every session pairs course concepts with recall, problem solving and a short mistake review.",`<button class="button button-quiet" data-view="curriculum">View curriculum →</button>`)}
      ${state.demo?`<div class="notice" style="margin-bottom:12px"><strong>Illustrative starter questions:</strong> verify course alignment with your syllabus. All unsourced exam-style practice is labeled PYQ-Style Practice.</div>`:""}
      ${!tasks.length?`<section class="card">${empty("No daily tasks yet","Build a curriculum to turn your subjects and available time into study sessions.","start-onboarding")}</section>`:`<div class="filters"><select class="select" data-filter-tasks><option value="All">All subjects</option>${selectedSubjects().map(s=>`<option value="${s.id}" ${state.taskFilter===s.id?"selected":""}>${esc(s.short)}</option>`).join("")}</select><span class="pill">${visible.length} study sessions</span></div><section class="card"><div class="task-list">${visible.slice(0,40).map(task=>taskRow(task)).join("")}</div>${visible.length>40?`<p class="small muted">Showing first 40 sessions. Open My Curriculum to browse all 28 study days.</p>`:""}</section>`}`;
  }
  function quizPage() {
    const task=selectedTask();
    if (!task || task.type==="test") return `${pageHeading("Active Recall","Flash quiz","Three questions per study session. Retrieve before you review.")}<section class="card">${empty("No quiz ready","Start a daily task to unlock its topic-specific flash quiz.","tasks")}</section>`;
    return `${pageHeading("Active Recall","Flash quiz","Recall first; reveal explanations after you submit.",`<button class="button button-quiet" data-action="open-task" data-id="${task.id}">Open current task →</button>`)}<section class="card">${taskPageQuizOnly(task)}</section>`;
  }
  function taskPageQuizOnly(task) {
    const subject=subjectById(task.subjectId), data=TOPICS[subject.id], result=state.quizAttempts.find(item=>item.taskId===task.id);
    return `<div class="card-heading"><div><h2>${esc(subject.short)} · ${esc(task.title)}</h2><p>Exactly 3 questions · results contribute to your progress analytics</p></div>${result?`<span class="pill pill-green">${result.score}/${result.total} correct</span>`:""}</div>
      <form data-form="quiz" data-task="${task.id}">${data.quiz.map((item,index)=>`<div class="question-card"><div class="question-meta"><span class="pill">Question ${index+1} of 3</span></div><h4>${esc(item[0])}</h4><div class="quiz-options">${item[1].map((option,i)=>`<label class="quiz-option"><input type="radio" name="quiz-${task.id}-${index}" value="${i}" ${result?"disabled":""} required><span>${esc(option)}</span></label>`).join("")}</div>${result?`<div class="question-feedback ${result.answers[index]===item[2]?"":"incorrect"}">${result.answers[index]===item[2]?"Correct. ":"Review. "}${esc(item[3])}</div>`:""}</div>`).join("")}${result?"":`<button class="button button-primary" style="margin-top:13px" type="submit">Submit quiz</button>`}</form>`;
  }
  function weeklyTestPage() {
    const attempt=state.testAttempts[state.testAttempts.length-1];
    const session=state.testSession;
    if (attempt && !session?.active) return `${pageHeading("Weekly Tests","Your test result","A cumulative 50-mark assessment with a subject-by-subject review.",`<button class="button button-primary" data-action="begin-test">Start next test →</button>`)}${testResult(attempt)}${testIntro()}`;
    if (!session?.active) return `${pageHeading("Weekly Tests","Cumulative review","Every seventh study day: 50 marks · 60 minutes · 10 marks per supported subject.",`<button class="button button-primary" data-action="begin-test">Begin 60-minute test</button>`)}${testIntro()}${attempt?testResult(attempt):""}`;
    const index=Math.max(0,Math.min(TEST_ITEMS.length-1,session.current||0));
    const item=TEST_ITEMS[index];
    return `${pageHeading("Weekly Tests","Assessment in progress","Answer all 10 items; each question is worth 5 marks.",`<span class="pill pill-amber">⏱ <span id="test-timer">${formatTime(session.remaining)}</span></span>`)}
      <div class="test-layout"><section class="test-question"><div class="question-meta"><span class="pill">${esc(item[0])}</span><span class="pill">Question ${index+1} of 10</span><span class="pill">${item[5]} marks</span></div><h3>${esc(item[2])}</h3><textarea class="textarea ${item[1]==="c"?"code-input":""}" data-test-answer="${index}" ${item[1]==="c"?'spellcheck="false"':""} placeholder="Write your answer. For code, include a short explanation.">${esc(session.answers[index]||"")}</textarea><div style="display:flex;justify-content:space-between;gap:8px;margin-top:13px"><button class="button button-quiet button-small" data-action="test-previous" ${index===0?"disabled":""}>← Previous</button><button class="button button-quiet button-small" data-action="test-review">${session.review.includes(index)?"Remove review flag":"⚑ Mark for review"}</button><button class="button button-primary button-small" data-action="test-next">${index===9?"Review answers":"Next →"}</button></div></section>
        <aside class="card"><div class="card-heading"><div><h2>Question navigator</h2><p>Green = answered · underline = review</p></div></div><div class="timer" id="test-timer-side">${formatTime(session.remaining)}</div><div style="margin:12px 0" class="progress-track"><div class="progress-fill" style="width:${session.answers.filter(Boolean).length*10}%"></div></div><div class="test-nav-grid">${TEST_ITEMS.map((_,i)=>`<button class="test-nav-button ${i===index?"current":""} ${session.answers[i]?"answered":""} ${session.review.includes(i)?"review":""}" data-action="test-jump" data-index="${i}" aria-label="Go to question ${i+1}">${i+1}</button>`).join("")}</div><p class="field-help">${session.answers.filter(Boolean).length} of 10 answered</p><button class="button button-primary" style="width:100%;margin-top:12px" data-action="submit-test">Submit Test</button></aside>
      </div>`;
  }
  function testIntro() {
    return `<section class="card" style="margin-bottom:13px"><div class="card-heading"><div><h2>Test format</h2><p>All questions below are illustrative PYQ-style practice—not authenticated university past-paper questions.</p></div><span class="pill pill-amber">50 MARKS</span></div><div class="subject-progress-list">${[["Electronics",2],["C Programming",2],["Web Designing",2],["Engineering Mathematics",2],["Environmental Engineering",2]].map(([name,count])=>`<div class="subject-progress"><span class="subject-progress-name">${name}</span><span class="muted tiny">${count} questions × 5 marks</span><span class="progress-value">10</span></div>`).join("")}</div><p class="field-help">60 minutes · 10 questions · 5 marks each · mixed concept and application prompts. Open-response answers use self-assessment, not automatic AI grading.</p></section>`;
  }
  function formatTime(seconds) { return `${String(Math.floor(Math.max(0,seconds)/60)).padStart(2,"0")}:${String(Math.max(0,seconds)%60).padStart(2,"0")}`; }
  function testResult(attempt) {
    const scores=attempt.subjectScores||{};
    return `<section class="card" style="margin-bottom:13px"><div class="card-heading"><div><h2>Latest test · ${attempt.score}/50</h2><p>${attempt.percent}% self-assessed · ${attempt.minutes} minutes used · ${localDate(new Date(attempt.date))}</p></div><span class="circle-progress" style="--progress:${attempt.percent}%"><strong>${attempt.percent}%</strong></span></div><div class="subject-progress-list">${Object.entries(scores).map(([name,score])=>`<div class="subject-progress"><span class="subject-progress-name">${esc(name)}</span><div class="progress-track"><div class="progress-fill" style="width:${score*10}%"></div></div><span class="progress-value">${score}/10</span></div>`).join("")}</div><div class="notice" style="margin-top:13px"><strong>Revision recommendation:</strong> ${esc(attempt.recommendation)}</div><div class="card-heading" style="margin:18px 0 10px"><div><h3>Subject diagnostics</h3><p>Performance is based on your self-marked score.</p></div></div><div class="upcoming-list">${Object.entries(scores).map(([name,score])=>{const level=score<6?"Weak":score<8?"Developing":"Strong";return `<div class="upcoming-item"><span class="pill ${score<6?"pill-red":score<8?"pill-amber":"pill-green"}">${level}</span><div><h4>${esc(name)}</h4><p>${score<6?"Priority: review prerequisites and redo missed questions.":score<8?"Priority: practise applications and check working.":"Priority: spaced review and mixed-topic problems."}</p></div></div>`;}).join("")}</div><details class="solution-details"><summary>Reveal Weekly Test Solutions</summary><ol>${TEST_ITEMS.map((item,index)=>`<li><strong>${esc(item[0])} · Question ${index+1}.</strong> ${esc(item[3])} ${esc(item[4])}</li>`).join("")}</ol></details></section>`;
  }
  function progressPage() {
    const topics=selectedSubjects().map(subject=>`<div class="card"><div class="card-heading"><div><h2>${esc(subject.short)}</h2><p>Completed sessions and recent practice accuracy</p></div><span class="pill">${percentForSubject(subject.id)}% complete</span></div><div class="subject-progress-list"><div class="subject-progress"><span class="subject-progress-name">Curriculum</span><div class="progress-track"><div class="progress-fill" style="width:${percentForSubject(subject.id)}%"></div></div><span class="progress-value">${percentForSubject(subject.id)}%</span></div><div class="subject-progress"><span class="subject-progress-name">Quiz / DPP</span><div class="progress-track"><div class="progress-fill" style="width:${subjectAccuracy(subject.id)}%"></div></div><span class="progress-value">${subjectAccuracy(subject.id)?`${subjectAccuracy(subject.id)}%`:"—"}</span></div></div></div>`).join("");
    const mistakeCounts={};
    state.mistakes.forEach(item=>mistakeCounts[item.type]=(mistakeCounts[item.type]||0)+1);
    const categories=["Conceptual","Calculation","Coding/Syntax","Logic","Formula recall","Misinterpretation","Careless error"];
    return `${pageHeading("Progress analytics","Your learning, in focus","Track study sessions, practice accuracy, test scores and the mistakes worth revisiting.")}
      <div class="analytics-grid"><section class="card"><div class="card-heading"><div><h2>Overall curriculum completion</h2><p>Completed learning sessions</p></div></div><div class="progress-summary"><div class="circle-progress" style="--progress:${completionRate()}%"><strong>${completionRate()}%</strong></div><div><strong>${state.completedTaskIds.length} / ${state.tasks.length}</strong><p>study tasks completed<br>${streak()} day current streak</p></div></div></section>
      <section class="card"><div class="card-heading"><div><h2>Practice accuracy</h2><p>From recorded quiz and DPP attempts</p></div></div><div class="subject-progress-list"><div class="subject-progress"><span class="subject-progress-name">Flash quiz</span><div class="progress-track"><div class="progress-fill" style="width:${quizAccuracy()}%"></div></div><span class="progress-value">${state.quizAttempts.length?`${quizAccuracy()}%`:"—"}</span></div><div class="subject-progress"><span class="subject-progress-name">DPP self-check</span><div class="progress-track"><div class="progress-fill" style="width:${dppAccuracy()}%"></div></div><span class="progress-value">${state.dppAttempts.length?`${dppAccuracy()}%`:"—"}</span></div><div class="subject-progress"><span class="subject-progress-name">Weekly tests</span><div class="progress-track"><div class="progress-fill" style="width:${averageTestScore()||0}%"></div></div><span class="progress-value">${averageTestScore()===null?"—":`${averageTestScore()}%`}</span></div></div></section>
      <section class="card wide"><div class="card-heading"><div><h2>Daily study time</h2><p>Logged study sessions for the last 7 days</p></div><span class="pill">${state.sessions.reduce((sum,item)=>sum+item.minutes,0)} min total</span></div>${activityChart()}</section>
      <section class="wide"><div class="card-heading"><div><h2 style="font-size:13px">Subject progress</h2><p class="muted small">Topic/session completion by selected subject</p></div></div><div class="analytics-grid">${topics||`<section class="card">${empty("No subjects selected","Add subjects in settings.")}</section>`}</div></section>
      <section class="card"><div class="card-heading"><div><h2>Mistake categories</h2><p>From DPP self-review</p></div></div>${state.mistakes.length?`<div class="mistake-list">${categories.map(type=>`<div class="mistake-row"><span>${type}</span><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,(mistakeCounts[type]||0)*18)}%"></div></div><span>${mistakeCounts[type]||0}</span></div>`).join("")}</div>`:`<div class="empty-state"><strong>No mistakes logged yet</strong><p>Self-review DPPs and record error types to spot patterns.</p></div>`}</section>
      <section class="card"><div class="card-heading"><div><h2>Strong &amp; focus areas</h2><p>Based on recorded scores</p></div></div>${strongWeak()}</section></div>`;
  }
  function subjectAccuracy(id) {
    const items=[...state.quizAttempts,...state.dppAttempts].filter(item=>item.subjectId===id);
    if (!items.length) return 0;
    return Math.round(items.reduce((sum,item)=>sum+item.score,0)/items.reduce((sum,item)=>sum+item.total,0)*100);
  }
  function strongWeak() {
    if (!state.dppAttempts.length&&!state.quizAttempts.length) return `<p class="small muted">Complete a flash quiz or DPP; Enginex will use your results rather than assume strong or weak topics.</p>`;
    return `<div class="upcoming-list">${selectedSubjects().map(subject=>{const score=subjectAccuracy(subject.id); return `<div class="upcoming-item"><span class="subject-symbol">${subject.icon}</span><div><h4>${esc(subject.short)} · ${score>=80?"Strong":score>=60?"Developing":"Priority revision"}</h4><p>${esc(adaptiveAdvice(subject.id))}</p></div></div>`;}).join("")}</div>`;
  }
  function resourcesPage() {
    const items=state.resources.filter(item=>(state.resourceFilter==="All"||item.category===state.resourceFilter)&&(!state.search||`${item.title} ${item.category} ${item.detail||""}`.toLowerCase().includes(state.search.toLowerCase())));
    return `${pageHeading("Your learning library","Resources","Organize syllabus files, lectures, reference links and verified past papers.",`<button class="button button-primary" data-action="add-resource">＋ Add resource</button>`)}
      <div class="card"><div class="resource-filter"><input class="field" style="max-width:260px" type="search" placeholder="Search resources" data-resource-search value="${esc(state.search)}"><select class="select" data-resource-filter>${["All","Syllabus","Lecture","YouTube","Notes","PYQs","Reference Material"].map(x=>`<option ${state.resourceFilter===x?"selected":""}>${x}</option>`).join("")}</select></div>
      ${items.length?`<div class="resource-list">${items.map(item=>{const embed=item.category==="YouTube"?youtubeEmbed(item.url):null;return `<article class="resource-entry"><div class="resource-row"><span class="resource-icon">${item.category==="YouTube"?"▶":item.category==="Syllabus"?"▤":item.category==="PYQs"?"◎":"▧"}</span><div><h3>${esc(item.title)} <span class="pill">${item.category==="PYQs"?"PYQ source · unverified":esc(item.category)}</span></h3><p>${item.pyq?`${esc(item.pyq.university)} · ${esc(item.pyq.year)} · ${esc(item.pyq.subject)} · ${esc(item.pyq.marks)} marks · `:""}${esc(item.detail||item.type||"Added resource")} · ${localDate(new Date(item.createdAt||Date.now()))}</p></div><div style="display:flex;align-items:center;gap:8px">${item.category==="YouTube"?(embed?`<button class="button button-primary button-small" data-action="toggle-video" data-id="${item.id}">${state.playingResourceId===item.id?"Close player":"▶ Play here"}</button>`:`<span class="pill pill-amber">Unsupported YouTube link</span>`):item.url?`<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">Open ↗</a>`:""}<button class="icon-button" data-action="delete-resource" data-id="${item.id}" aria-label="Remove ${esc(item.title)}">×</button></div></div>${state.playingResourceId===item.id&&embed?`<div class="video-player"><iframe src="${esc(embed.src)}" title="${esc(item.title)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><p>Playing inside Enginex via YouTube's privacy-enhanced embed. Playback depends on the video's embedding permissions and your browser's network access.</p></div>`:""}</article>`;}).join("")}</div>`:empty("No resources in this view",state.resources.length?"Try another search or category.":"Add a syllabus, lecture link, notes or reference material.")}
      <p class="field-help" style="margin-top:12px">YouTube links with a supported video or playlist ID play inside Enginex. Other file contents are not uploaded or parsed in this prototype; add syllabus text manually to use it in your plan.</p></div>`;
  }
  function settingsPage() {
    const tabs=["Profile","Schedule","Subjects & Exams","Preferences","Data"];
    let body="";
    if (state.settingsTab==="Profile") body=`<form data-form="settings-profile"><div class="form-grid">${formInput("Name","name",state.profile.name,"text","Your name (optional)")}${formInput("University / College","institution",state.profile.institution,"text","Add your institution")}${formInput("Semester","semester",state.profile.semester,"text","e.g. Semester 1")}${formInput("Branch","branch",state.profile.branch,"text","e.g. Computer Engineering")}<div class="form-field"><label class="field-label" for="level">Current academic level</label><select class="select" id="level" name="level">${["New to these subjects","Some prior knowledge","Comfortable with fundamentals","Advanced / revision"].map(x=>`<option ${state.profile.level===x?"selected":""}>${x}</option>`).join("")}</select></div></div><button class="button button-primary" style="margin-top:16px">Save profile</button></form>`;
    else if (state.settingsTab==="Schedule") body=`<form data-form="settings-schedule"><div class="form-grid">${formInput("Weekday study hours","weekdayHours",state.profile.weekdayHours,"number","Maximum planned hours per weekday","1","16","0.5")}${formInput("Weekend study hours","weekendHours",state.profile.weekendHours,"number","Maximum planned hours per weekend day","1","16","0.5")}${formInput("Classes start","classStart",state.profile.classStart,"time","")}${formInput("Classes end","classEnd",state.profile.classEnd,"time","")}${formInput("Weekday study start","studyStart",state.profile.studyStart,"time","")}${formInput("Weekend study start","weekendStudyStart",state.profile.weekendStudyStart,"time","")}</div><button class="button button-primary" style="margin-top:16px">Save schedule</button></form><p class="field-help">Tasks are spaced across your selected weekday or weekend start time and daily study-hour budget. Weekday starts during class hours are rejected.</p>`;
    else if (state.settingsTab==="Subjects & Exams") body=`<form data-form="settings-subjects"><div class="form-field"><span class="field-label">Subjects</span><div class="choice-grid">${SUBJECTS.map(subject=>`<label class="choice"><input type="checkbox" name="subject" value="${subject.id}" ${state.profile.subjects.includes(subject.id)?"checked":""}><span><strong>${subject.name}</strong><span>${subject.topics.length} starter topics; verify against your syllabus.</span></span></label>`).join("")}</div></div><div class="form-grid" style="margin-top:15px">${formInput("Exam date","examDate",state.profile.examDate,"date","") }<div class="form-field"><label class="field-label" for="examType">Exam type</label><select class="select" id="examType" name="examType">${["Mid-semester","End-semester","Quiz","Practical","Other"].map(x=>`<option ${state.profile.examType===x?"selected":""}>${x}</option>`).join("")}</select></div><div class="form-field"><label class="field-label" for="targetLevel">Target preparation level</label><select class="select" id="targetLevel" name="targetLevel">${["Confident understanding","Pass comfortably","High distinction","Revise course material"].map(x=>`<option ${state.profile.targetLevel===x?"selected":""}>${x}</option>`).join("")}</select></div></div><button class="button button-primary" style="margin-top:16px">Save subjects &amp; exam</button></form>`;
    else if (state.settingsTab==="Preferences") body=`<form data-form="settings-preferences"><div class="form-field"><label class="field-label" for="theme">Theme</label><select class="select" id="theme" name="theme"><option ${state.theme==="Light"?"selected":""}>Light</option><option ${state.theme==="Dark"?"selected":""}>Dark</option></select></div><label class="choice" style="margin-top:12px;max-width:450px"><input type="checkbox" name="notifications" ${state.notifications?"checked":""}><span><strong>Study reminders</strong><span>Preference stored locally. Browser notifications require a notification service, which is not connected in this prototype.</span></span></label><button class="button button-primary" style="margin-top:16px">Save preferences</button></form>`;
    else body=`<div class="notice"><strong>Local prototype storage:</strong> your profile, plan, practice scores and resources are stored in this browser's local storage. There is no server, account login, cloud sync, or cross-device backup.</div><div style="margin-top:17px"><h3 style="font-size:12px">Reset curriculum</h3><p class="small muted">Remove saved Enginex profile, progress, curriculum and resources from this browser. This cannot be undone.</p><button class="button button-danger" data-action="reset-data">Reset all local data</button></div>`;
    return `${pageHeading("Your preferences","Settings","Manage your profile, study schedule, subjects and stored learning data.")}<div class="settings-tabs">${tabs.map(tab=>`<button class="tab-button ${state.settingsTab===tab?"active":""}" data-settings-tab="${tab}">${tab}</button>`).join("")}</div><section class="card">${body}</section>`;
  }
  function formInput(label,name,value,type="text",placeholder="",min="",max="",step="") {
    return `<div class="form-field"><label class="field-label" for="${name}">${label}</label><input class="field" id="${name}" name="${name}" type="${type}" value="${esc(value)}" placeholder="${esc(placeholder)}" ${min?`min="${min}"`:""} ${max?`max="${max}"`:""} ${step?`step="${step}"`:""}></div>`;
  }
  function renderView() {
    switch (state.view) {
      case "dashboard": return dashboard();
      case "curriculum": return curriculum();
      case "tasks": return taskPage();
      case "dpps": return taskListPage("dpps");
      case "quiz": return quizPage();
      case "tests": return weeklyTestPage();
      case "progress": return progressPage();
      case "resources": return resourcesPage();
      case "settings": return settingsPage();
      default: return dashboard();
    }
  }

  const WIZARD_STEPS = ["Student","Subjects","Syllabus","Timetable","Resources","Exams","Generate"];
  function beginOnboarding() {
    state.onboardStep = 0;
    state.onboardDraft = {
      syllabusText: "", manualTopics: "", timetableText: "", resourceText: "",
      classList: "", files: [], profile: { ...state.profile, subjects: [...state.profile.subjects] }
    };
    state.view = "onboarding"; persist(); render(); window.scrollTo(0,0);
  }
  function wizardProgress() {
    const step=state.onboardStep;
    return `<div class="wizard-progress" aria-label="Step ${step+1} of 7">${WIZARD_STEPS.map((label,index)=>`<span class="wizard-step ${index<=step?"done":""}" title="${label}"></span>`).join("")}</div><div class="wizard-labels">${WIZARD_STEPS.map((label,index)=>`<span style="${index===step?"color:var(--green);font-weight:800":""}">${label}</span>`).join("")}</div>`;
  }
  function wizardBody() {
    const draft=state.onboardDraft;
    const profile=draft.profile || state.profile;
    if(state.onboardStep===0) return `<h2>Let's get to know your learning context.</h2><p>Share only details you know. You can leave optional fields blank and fill them in later.</p><div class="form-grid">${wizardInput("Name (optional)","name",profile.name,"text","Your name")}${wizardInput("University / College (optional)","institution",profile.institution,"text","Your institution")}${wizardInput("Semester","semester",profile.semester,"text","e.g. Semester 1")}${wizardInput("Branch (optional)","branch",profile.branch,"text","e.g. Computer Engineering")}<div class="form-field full"><label class="field-label" for="wiz-level">Current academic level</label><select class="select" id="wiz-level" name="level">${["New to these subjects","Some prior knowledge","Comfortable with fundamentals","Advanced / revision"].map(x=>`<option ${profile.level===x?"selected":""}>${x}</option>`).join("")}</select></div></div>`;
    if(state.onboardStep===1) return `<h2>Choose your subjects.</h2><p>Select the subjects you want this curriculum to cover. You can change your choices later.</p><div class="choice-grid">${SUBJECTS.map(subject=>`<label class="choice"><input type="checkbox" name="subject" value="${subject.id}" ${profile.subjects.includes(subject.id)?"checked":""}><span><strong>${esc(subject.name)}</strong><span>${subject.topics.length} starter topics · verify against your official syllabus</span></span></label>`).join("")}</div>`;
    if(state.onboardStep===2) return `<h2>Bring your syllabus into the plan.</h2><p>Paste syllabus text or enter specific topics. File selection is for organizing resources only in this prototype—contents are not parsed.</p><div class="form-grid"><div class="form-field full"><label class="file-drop"><strong>＋ Add a syllabus PDF or document</strong><span class="field-help">PDF, DOC, DOCX, or TXT · file stays on this device as metadata in this prototype</span><input type="file" name="syllabusFiles" multiple accept=".pdf,.doc,.docx,.txt"></label><div class="field-help">${draft.files.length?`${draft.files.length} file(s) selected: ${draft.files.map(item=>esc(item.name)).join(", ")}`:"No files selected"}</div></div><div class="form-field full"><label class="field-label" for="wiz-syllabusText">Paste syllabus text (optional)</label><textarea class="textarea" id="wiz-syllabusText" name="syllabusText" placeholder="Paste your syllabus topics or module headings here.">${esc(draft.syllabusText)}</textarea></div><div class="form-field full"><label class="field-label" for="wiz-manualTopics">Or enter topics manually (one per line)</label><textarea class="textarea" id="wiz-manualTopics" name="manualTopics" placeholder="C Programming: Arrays and strings&#10;Engineering Mathematics: Matrices&#10;Electronics: Diodes">${esc(draft.manualTopics)}</textarea><div class="field-help">With several subjects, prefix each topic with a subject name to avoid assigning topics to the wrong course. Unlabeled syllabus text is saved as a reference, not guessed into a subject.</div></div></div>`;
    if(state.onboardStep===3) return `<h2>Make room for your learning routine.</h2><p>Set your class hours and study availability so planned work respects your schedule.</p><div class="form-grid">${wizardInput("Weekday study time · hours/day","weekdayHours",profile.weekdayHours,"number","",{min:"1",max:"16",step:"0.5"})}${wizardInput("Weekend study time · hours/day","weekendHours",profile.weekendHours,"number","",{min:"1",max:"16",step:"0.5"})}${wizardInput("Classes start","classStart",profile.classStart,"time")}${wizardInput("Classes end","classEnd",profile.classEnd,"time")}${wizardInput("Weekday study start","studyStart",profile.studyStart,"time")}${wizardInput("Weekend study start","weekendStudyStart",profile.weekendStudyStart,"time")}<div class="form-field full"><label class="field-label" for="wiz-timetableText">Class timetable (optional)</label><textarea class="textarea" id="wiz-timetableText" name="timetableText" placeholder="Enter your class days and times, or paste a timetable summary.">${esc(draft.timetableText)}</textarea><div class="field-help">The prototype stores this text for reference. It does not extract a schedule from uploaded files.</div></div><div class="form-field full"><label class="file-drop"><strong>＋ Add a timetable file (optional)</strong><span class="field-help">Document or image · tracked locally as resource metadata</span><input type="file" name="timetableFiles" multiple accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"></label></div></div>`;
    if(state.onboardStep===4) return `<h2>Add lectures and learning resources.</h2><p>Add a playlist, video, or lecture topic. A title or link is treated as source information—not as video content that Enginex has watched.</p><div class="form-grid">${wizardInput("YouTube playlist URL (optional)","playlistUrl",draft.playlistUrl||"","url","https://www.youtube.com/playlist?list=…")}${wizardInput("YouTube video URL (optional)","videoUrl",draft.videoUrl||"","url","https://www.youtube.com/watch?v=…")}<div class="form-field full"><label class="field-label" for="wiz-resourceText">Lecture topics or notes (optional)</label><textarea class="textarea" id="wiz-resourceText" name="resourceText" placeholder="Enter a lecture title or topic on each line.">${esc(draft.resourceText)}</textarea></div>${wizardInput("Additional lecture link (optional)","lectureUrl",draft.lectureUrl||"","url","https://…")}</div><div class="notice" style="margin-top:13px"><strong>Source transparency:</strong> without accessible lecture content, assignments are topic-based. No video summary is claimed.</div>`;
    if(state.onboardStep===5) return `<h2>Set your exam priorities.</h2><p>Exam details help order revision. Leave the date blank until you know it.</p><div class="form-grid">${wizardInput("Exam date (optional)","examDate",profile.examDate,"date")}<div class="form-field"><label class="field-label" for="wiz-examType">Exam type</label><select class="select" id="wiz-examType" name="examType">${["Mid-semester","End-semester","Quiz","Practical","Other"].map(x=>`<option ${profile.examType===x?"selected":""}>${x}</option>`).join("")}</select></div><div class="form-field"><label class="field-label" for="wiz-targetLevel">Target preparation level</label><select class="select" id="wiz-targetLevel" name="targetLevel">${["Confident understanding","Pass comfortably","High distinction","Revise course material"].map(x=>`<option ${profile.targetLevel===x?"selected":""}>${x}</option>`).join("")}</select></div>${wizardInput("Weekday available study time · hours","availableHours",profile.weekdayHours,"number","",{min:"1",max:"16",step:"0.5"})}</div><div class="notice" style="margin-top:13px"><strong>Plan pacing:</strong> the generator splits weekday and weekend time across learning sessions, adds a 60-minute checkpoint every seventh study day, and uses a revision focus as the exam approaches. It will not invent an exam date.</div>`;
    const chosen=SUBJECTS.filter(item=>profile.subjects.includes(item.id)).map(item=>item.short).join(", ")||"No subjects selected";
    const manual=draft.manualTopics.split(/\r?\n/).filter(line=>line.trim()).length;
    const resources=[draft.playlistUrl,draft.videoUrl,draft.lectureUrl,...draft.resourceText.split(/\r?\n/).filter(line=>line.trim())].filter(Boolean).length;
    return `<h2>Ready to build your curriculum?</h2><p>Review your inputs before generating your personal study timeline.</p><div class="subject-progress-list"><div class="time-row"><span>Student</span><strong>${esc(profile.name||"Not provided")}</strong></div><div class="time-row"><span>Institution</span><strong>${esc(profile.institution||"Not provided")}</strong></div><div class="time-row"><span>Semester / branch</span><strong>${esc([profile.semester,profile.branch].filter(Boolean).join(" · ")||"Not provided")}</strong></div><div class="time-row"><span>Subjects</span><strong style="max-width:60%;text-align:right">${esc(chosen)}</strong></div><div class="time-row"><span>Topics entered manually</span><strong>${manual}${draft.syllabusText.trim()?" + pasted syllabus":""}</strong></div><div class="time-row"><span>Study availability</span><strong>${esc(profile.weekdayHours)}h weekdays · ${esc(profile.weekendHours)}h weekends</strong></div><div class="time-row"><span>Exam date</span><strong>${esc(profile.examDate||"Not provided")}</strong></div><div class="time-row"><span>Learning resources</span><strong>${resources} item(s)</strong></div></div><div class="notice" style="margin-top:15px"><strong>Before you continue:</strong> if no syllabus topics are provided, the app uses a starter outline that is clearly marked as illustrative. This browser-only prototype does not parse files, watch videos, verify university PYQs, or connect to an AI backend.</div>`;
  }
  function wizardInput(label,name,value,type="text",placeholder="",attributes={}) {
    return `<div class="form-field"><label class="field-label" for="wiz-${name}">${label}</label><input class="field" id="wiz-${name}" name="${name}" type="${type}" value="${esc(value)}" placeholder="${esc(placeholder)}" ${attributes.min?`min="${attributes.min}"`:""} ${attributes.max?`max="${attributes.max}"`:""} ${attributes.step?`step="${attributes.step}"`:""}></div>`;
  }
  function onboarding() {
    return `<div class="workspace">${sidebar()}<div class="main-area">${topBar()}<main class="page-content"><div class="wizard-shell">${pageHeading("Curriculum builder","Build your Enginex curriculum","A quick setup to shape a study routine around your real semester.")}<div class="card" style="margin-bottom:15px"><div class="card-heading"><div><h2>Seven steps · one personal plan</h2><p>Your information remains in this browser in this prototype.</p></div><span class="pill">STEP ${state.onboardStep+1} OF 7</span></div>${wizardProgress()}</div><form class="wizard-card" id="wizard-form">${wizardBody()}<div class="wizard-actions">${state.onboardStep>0?`<button type="button" class="button button-quiet" data-action="wizard-back">← Back</button>`:`<button type="button" class="button button-quiet" data-action="wizard-cancel">Cancel</button>`}<button type="button" class="button button-primary" data-action="wizard-next">${state.onboardStep===6?"Generate my curriculum ✧":"Continue →"}</button></div></form></div></main></div>${mobileNav()}</div>`;
  }
  function generating() {
    return `<div class="workspace">${sidebar()}<div class="main-area">${topBar()}<main class="page-content"><div class="wizard-shell"><section class="card loading-wrap"><div><div class="loader"></div><div class="eyebrow">Curriculum builder</div><h1 style="font-family:Manrope,sans-serif;font-size:25px">Enginex is building your personalized curriculum…</h1><p class="muted small">Organizing your selected subjects, study availability, topics and exam priorities on this device.</p><div class="progress-track" style="width:min(340px,80vw);margin:18px auto 0"><div class="progress-fill generation-progress" style="width:10%;transition:width .45s ease"></div></div><div class="field-help" id="generation-status">Preparing your study timeline…</div></div></section></div></main></div>${mobileNav()}</div>`;
  }
  function startGeneration() {
    if(generationTimer) return;
    const messages=["Preparing your study timeline…","Balancing topics across your available study time…","Adding spaced revision and weekly checkpoints…"];
    let index=0;
    generationTimer=window.setInterval(()=>{
      const progress=document.querySelector(".generation-progress");
      const status=document.getElementById("generation-status");
      if(progress) progress.style.width=`${Math.min(92,(index+1)*27)}%`;
      if(status) status.textContent=messages[Math.min(index,messages.length-1)];
      index++;
    },450);
    window.setTimeout(()=>{
      window.clearInterval(generationTimer); generationTimer=null;
      const draft=state.onboardDraft;
      const profile={...draft.profile};
      const topicText=draft.manualTopics.trim() || draft.syllabusText.trim();
      profile.notes=topicText.split(/\r?\n/).map(line=>line.trim()).filter(Boolean).slice(0,120).join("\n");
      profile.availableHours=Number(profile.availableHours)||Number(profile.weekdayHours)||3;
      profile.weekdayHours=Math.min(profile.weekdayHours,profile.availableHours);
      profile.weekendHours=Math.max(profile.weekendHours,profile.availableHours);
      profile.timetable=draft.timetableText||"";
      state.profile=profile;
      regeneratePlan();
      state.demo=false;
      const newResources=[];
      (draft.files||[]).forEach(file=>newResources.push({id:uid(),title:file.name,category:"Syllabus",type:"file metadata",detail:`${file.sizeLabel} · contents not parsed`,createdAt:new Date().toISOString()}));
      (draft.timetableFiles||[]).forEach(file=>newResources.push({id:uid(),title:file.name,category:"Reference Material",type:"file metadata",detail:`${file.sizeLabel} · contents not parsed`,createdAt:new Date().toISOString()}));
      if(draft.syllabusText.trim()) newResources.push({id:uid(),title:"Pasted syllabus text",category:"Syllabus",type:"text",detail:`${profile.notes.split("\n").length} topic line(s)`,createdAt:new Date().toISOString()});
      if(draft.timetableText.trim()) newResources.push({id:uid(),title:"Class timetable notes",category:"Reference Material",type:"text",detail:draft.timetableText.trim().slice(0,140),createdAt:new Date().toISOString()});
      const addLink=(url,title,category)=>{if(url&&isValidUrl(url))newResources.push({id:uid(),title,category,type:"link",url,detail:"Link saved; content not accessed",createdAt:new Date().toISOString()});};
      addLink(draft.playlistUrl,"YouTube playlist","YouTube");
      addLink(draft.videoUrl,"YouTube lecture","YouTube");
      addLink(draft.lectureUrl,"Lecture link","Lecture");
      (draft.resourceText||"").split(/\r?\n/).map(line=>line.trim()).filter(Boolean).forEach(title=>newResources.push({id:uid(),title,category:"Lecture",type:"topic",detail:"Topic/title only; lecture content not accessed",createdAt:new Date().toISOString()}));
      state.resources=[...newResources,...state.resources.filter(item=>!item.sample)];
      state.selectedTask=state.tasks.find(task=>task.type==="study")?.id||null;
      state.view="dashboard"; state.onboardDraft={...BASE.onboardDraft}; persist(); render();
      toast(`Curriculum ready: ${state.tasks.length} sessions across ${profile.subjects.length} subject(s).`);
    },1650);
  }
  function isValidUrl(value) {
    if(!value) return false;
    try { const url=new URL(value); return url.protocol==="https:"||url.protocol==="http:"; } catch { return false; }
  }
  function youtubeEmbed(value) {
    if(!value||!isValidUrl(value)) return null;
    try {
      const url=new URL(value);
      const host=url.hostname.toLowerCase().replace(/^www\./,"");
      let videoId="";
      let playlistId=url.searchParams.get("list")||"";
      if(host==="youtu.be") videoId=url.pathname.split("/").filter(Boolean)[0]||"";
      else if(["youtube.com","m.youtube.com","music.youtube.com"].includes(host)) {
        videoId=url.searchParams.get("v")||"";
        const parts=url.pathname.split("/").filter(Boolean);
        if(!videoId&&["embed","shorts","live"].includes(parts[0])) videoId=parts[1]||"";
      } else return null;
      const validId=id=>/^[A-Za-z0-9_-]{6,80}$/.test(id);
      if(videoId&&validId(videoId)) return {kind:"video",src:`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`};
      if(playlistId&&validId(playlistId)) return {kind:"playlist",src:`https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(playlistId)}`};
      return null;
    } catch(error) {
      console.error("Could not parse this YouTube URL.",error);
      return null;
    }
  }
  function selectedFiles(files) {
    return [...files].map(file=>({name:file.name,size:file.size,sizeLabel:file.size<1024?`${file.size} bytes`:`${(file.size/1024).toFixed(1)} KB`}));
  }

  function startTask(id) {
    const task=state.tasks.find(item=>item.id===id);
    if(!task) { toast("That study session is no longer available."); return; }
    if(task.type==="test") { state.view="tests"; state.selectedTask=id; persist(); render(); return; }
    state.selectedTask=id;
    task.status="In progress";
    state.view="tasks"; persist(); render(); window.scrollTo(0,0);
  }
  function completeTask(id) {
    const task=state.tasks.find(item=>item.id===id);
    if(!task) { toast("That study session is no longer available."); return; }
    const field=document.getElementById("session-minutes");
    const minutes=Math.max(1,Math.min(task.duration,Number(field?.value)||task.duration));
    if(!state.completedTaskIds.includes(id)) state.completedTaskIds.push(id);
    task.status="Complete";
    const old=state.sessions.findIndex(item=>item.taskId===id);
    const record={id:uid(),taskId:id,minutes,date:new Date().toISOString()};
    if(old>=0) state.sessions[old]=record; else state.sessions.push(record);
    persist(); render(); toast("Study session completed. Your progress has been updated.");
  }
  function undoTask(id) {
    state.completedTaskIds=state.completedTaskIds.filter(item=>item!==id);
    state.sessions=state.sessions.filter(item=>item.taskId!==id);
    const task=state.tasks.find(item=>item.id===id);
    if(task) task.status="Not started";
    persist(); render(); toast("Session marked as not completed.");
  }
  function submitQuiz(form) {
    const task=state.tasks.find(item=>item.id===form.dataset.task);
    if(!task) return;
    if(state.quizAttempts.some(item=>item.taskId===task.id)) { toast("This quiz has already been recorded."); return; }
    const data=TOPICS[task.subjectId];
    const answers=data.quiz.map((_,index)=>{
      const checked=form.querySelector(`input[name="quiz-${task.id}-${index}"]:checked`);
      return checked?Number(checked.value):-1;
    });
    if(answers.some(answer=>answer<0)) { toast("Answer all three questions before submitting."); return; }
    const score=answers.reduce((sum,answer,index)=>sum+(answer===data.quiz[index][2]?1:0),0);
    state.quizAttempts.push({id:uid(),taskId:task.id,subjectId:task.subjectId,answers,score,total:3,date:new Date().toISOString()});
    answers.forEach((answer,index)=>{if(answer!==data.quiz[index][2])state.mistakes.push({type:["Conceptual","Formula recall","Misinterpretation"][index],subjectId:task.subjectId,taskId:task.id,date:new Date().toISOString()});});
    const adaptive=adaptUpcomingTasks(task.subjectId,score,3,task.id);
    persist(); render(); toast(`Flash quiz recorded: ${score}/3.`);
    toast(adaptive);
  }
  function submitDpp(taskId) {
    const task=state.tasks.find(item=>item.id===taskId);
    if(!task) return;
    if(state.dppAttempts.some(item=>item.taskId===task.id)) { toast("This DPP has already been recorded."); return; }
    const form=document.querySelector(".task-main");
    const data=TOPICS[task.subjectId];
    const answers=data.dpp.map((_,index)=>form.querySelector(`[data-dpp-answer="${index}"]`)?.value.trim()||"");
    const checks=data.dpp.map((_,index)=>form.querySelector(`[data-dpp-check="${index}"]`)?.value==="correct");
    const mistakes=data.dpp.map((_,index)=>form.querySelector(`[data-dpp-mistake="${index}"]`)?.value||"");
    if(answers.some(answer=>!answer)||data.dpp.some((_,index)=>!form.querySelector(`[data-dpp-check="${index}"]`)?.value)) {
      toast("Enter an answer and self-check all four questions before submitting."); return;
    }
    const score=data.dpp.reduce((sum,item,index)=>sum+(checks[index]?item[4]:0),0);
    const total=data.dpp.reduce((sum,item)=>sum+item[4],0);
    data.dpp.forEach((item,index)=>{
      if(!checks[index]) state.mistakes.push({type:mistakes[index]||item[5],subjectId:task.subjectId,taskId:task.id,date:new Date().toISOString()});
    });
    state.dppAttempts.push({id:uid(),taskId:task.id,subjectId:task.subjectId,answers,checks,mistakes,score,total,date:new Date().toISOString()});
    const adaptive=adaptUpcomingTasks(task.subjectId,score,total,task.id);
    persist(); render(); toast(`DPP self-check saved: ${score}/${total}. Open a solution to review each answer.`);toast(adaptive);
  }
  function startTest() {
    if(state.testSession?.active) { state.view="tests"; persist(); render(); toast("Resumed your in-progress test."); return; }
    state.testSession={active:true,current:0,remaining:3600,answers:Array(10).fill(""),review:[],startedAt:new Date().toISOString()};
    state.view="tests"; persist(); render(); toast("The 60-minute test has started.");
  }
  function stopTestTimer() {
    if(testInterval) { window.clearInterval(testInterval); testInterval=null; }
  }
  function startTestTimer() {
    if(testInterval) return;
    testInterval=window.setInterval(()=>{
      if(!state.testSession?.active) { stopTestTimer(); return; }
      state.testSession.remaining=Math.max(0,state.testSession.remaining-1);
      const display=formatTime(state.testSession.remaining);
      const mainTimer=document.getElementById("test-timer");
      const sideTimer=document.getElementById("test-timer-side");
      if(mainTimer) mainTimer.textContent=display;
      if(sideTimer) sideTimer.textContent=display;
      if(state.testSession.remaining%10===0) persist();
      if(state.testSession.remaining===0) { stopTestTimer(); showTestSubmit(true); }
    },1000);
  }
  function saveTestAnswer(index,value) {
    if(!state.testSession?.active||index<0||index>=10) return;
    state.testSession.answers[index]=value;
    persist();
    const button=document.querySelector(`.test-nav-button[data-index="${index}"]`);
    if(button) button.classList.toggle("answered",Boolean(value.trim()));
    const progress=document.querySelector(".test-layout .progress-fill");
    if(progress) progress.style.width=`${state.testSession.answers.filter(Boolean).length*10}%`;
  }
  function showTestSubmit(auto=false) {
    if(!state.testSession?.active) return;
    const unanswered=state.testSession.answers.filter(answer=>answer.trim()).length;
    dialog.innerHTML=`<div class="dialog-content"><div class="eyebrow">${auto?"Time is up":"Final check"}</div><h2>${auto?"Your test time has ended.":"Submit your weekly test?"}</h2><p>${unanswered} of 10 questions contain an answer. Since questions are open response and this prototype does not use an AI grader, self-assess each answer from 0–5 marks before recording your result.</p><form id="test-score-form"><div class="form-grid">${TEST_ITEMS.map((item,index)=>`<div class="form-field"><label class="field-label" for="test-score-${index}">${esc(item[0])} · Q${index+1} ${state.testSession.answers[index].trim()?"":"(blank)"}</label><select class="select" id="test-score-${index}" name="score${index}">${Array.from({length:6},(_,score)=>`<option value="${score}" ${!state.testSession.answers[index].trim()&&score===0?"selected":""}>${score} / 5${score===5?" · fully correct":""}</option>`).join("")}</select></div>`).join("")}</div><div class="dialog-actions"><button class="button button-quiet" type="button" data-action="close-dialog">Continue test</button><button class="button button-primary" type="submit">Save test result</button></div></form></div>`;
    if(typeof dialog.showModal==="function") dialog.showModal();
    else dialog.setAttribute("open","");
  }
  function finishTest(form) {
    if(!state.testSession?.active) return;
    const values=TEST_ITEMS.map((_,index)=>Number(new FormData(form).get(`score${index}`))||0);
    const score=values.reduce((sum,value)=>sum+value,0);
    const subjectScores={};
    TEST_ITEMS.forEach((item,index)=>subjectScores[item[0]]=(subjectScores[item[0]]||0)+values[index]);
    const weak=Object.entries(subjectScores).filter(([,value])=>value<6).map(([name])=>name);
    const recommendation=weak.length?`Prioritize prerequisite revision in ${weak.join(", ")}; follow with shorter subject-specific practice.`:"Maintain spaced review and move toward mixed, higher-difficulty problems.";
    const attempt={id:uid(),score,total:50,percent:Math.round(score/50*100),subjectScores,minutes:Math.round((3600-state.testSession.remaining)/60),date:new Date().toISOString(),recommendation};
    TEST_ITEMS.forEach((item,index)=>{if(values[index]<5)state.mistakes.push({type:item[1]==="c"?"Coding/Syntax":item[1]==="math"||item[1]==="electronics"?"Calculation":item[1]==="web"?"Misinterpretation":"Conceptual",subjectId:item[1],date:new Date().toISOString()});});
    Object.entries(subjectScores).forEach(([name,value])=>{const subject=SUBJECTS.find(item=>item.short===name||item.name===name);if(subject)adaptUpcomingTasks(subject.id,value,10,null);});
    state.testAttempts.push(attempt);
    const testTask=state.tasks.find(task=>task.type==="test"&&!state.completedTaskIds.includes(task.id));
    if(testTask) state.completedTaskIds.push(testTask.id);
    state.testSession={...state.testSession,active:false};
    stopTestTimer(); persist();
    if(dialog.open) dialog.close(); else dialog.removeAttribute("open");
    render(); toast(`Weekly test saved: ${score}/50. Review your subject priorities.`);
  }
  function confirmDialog(title,message,confirmLabel,action,destructive=false) {
    dialog.innerHTML=`<div class="dialog-content"><div class="eyebrow">Enginex</div><h2>${esc(title)}</h2><p>${esc(message)}</p><div class="dialog-actions"><button class="button button-quiet" data-action="close-dialog">Cancel</button><button class="button ${destructive?"button-danger":"button-primary"}" data-action="${action}">${esc(confirmLabel)}</button></div></div>`;
    if(typeof dialog.showModal==="function") dialog.showModal(); else dialog.setAttribute("open","");
  }
  function addResourceDialog() {
    dialog.innerHTML=`<div class="dialog-content"><div class="eyebrow">Resource library</div><h2>Add a learning resource</h2><form id="resource-form"><div class="form-grid"><div class="form-field full"><label class="field-label" for="resource-title">Title</label><input class="field" id="resource-title" name="title" required maxlength="120" placeholder="Lecture notes, textbook chapter…"></div><div class="form-field"><label class="field-label" for="resource-category">Category</label><select class="select" id="resource-category" name="category" data-pyq-category>${["Syllabus","Lecture","YouTube","Notes","PYQs","Reference Material"].map(item=>`<option>${item}</option>`).join("")}</select></div><div class="form-field"><label class="field-label" for="resource-url">Resource / source URL</label><input class="field" id="resource-url" name="url" type="url" placeholder="https://…"></div><div class="form-field full" id="pyq-fields" hidden><div class="notice">PYQ records remain <strong>unverified references</strong> in this prototype. Providing source details does not make Enginex claim authenticity.</div><div class="form-grid" style="margin-top:10px">${formInput("University / College","pyqUniversity","","text","")}${formInput("Paper year","pyqYear","","number","", "1900",String(new Date().getFullYear()))}${formInput("Subject","pyqSubject","","text","")}${formInput("Marks","pyqMarks","","number","", "1","100","1")}</div></div><div class="form-field full"><label class="field-label" for="resource-detail">Note (optional)</label><textarea class="textarea" id="resource-detail" name="detail" placeholder="Source, topic, or notes…"></textarea></div></div><div class="dialog-actions"><button class="button button-quiet" type="button" data-action="close-dialog">Cancel</button><button class="button button-primary">Save resource</button></div></form></div>`;
    if(typeof dialog.showModal==="function") dialog.showModal(); else dialog.setAttribute("open","");
  }
  function saveResource(form) {
    const data=new FormData(form);
    const url=String(data.get("url")||"").trim();
    if(url&&!isValidUrl(url)) { toast("Enter a valid HTTP or HTTPS resource link."); return; }
    const category=String(data.get("category"));
    const detail=String(data.get("detail")||"").trim();
    let pyq=null;
    if(category==="PYQs") {
      pyq={university:String(data.get("pyqUniversity")||"").trim(),year:String(data.get("pyqYear")||"").trim(),subject:String(data.get("pyqSubject")||"").trim(),marks:String(data.get("pyqMarks")||"").trim()};
      if(Object.values(pyq).some(value=>!value)||!url) { toast("A PYQ reference needs its university, year, subject, marks, and source URL."); return; }
      if(Number(pyq.year)<1900||Number(pyq.year)>new Date().getFullYear()||Number(pyq.marks)<1||Number(pyq.marks)>100) { toast("Check the PYQ year and marks."); return; }
    }
    state.resources.unshift({id:uid(),title:String(data.get("title")).trim(),category,type:url?"link":"note",url,detail,pyq,sourceVerified:false,createdAt:new Date().toISOString()});
    persist(); dialog.close(); render();
    toast(category==="PYQs"?"PYQ reference saved as unverified; source authenticity has not been checked.":"Resource saved.");
  }
  function captureWizard(form) {
    const data=new FormData(form);
    const draft=state.onboardDraft;
    const profile={...(draft.profile||state.profile)};
    switch(state.onboardStep) {
      case 0:
        profile.name=String(data.get("name")||"").trim();
        profile.institution=String(data.get("institution")||"").trim();
        profile.semester=String(data.get("semester")||"").trim();
        profile.branch=String(data.get("branch")||"").trim();
        profile.level=String(data.get("level")||profile.level);
        break;
      case 1:
        profile.subjects=data.getAll("subject").map(String);
        if(!profile.subjects.length) { toast("Select at least one subject to continue."); return false; }
        break;
      case 2:
        draft.syllabusText=String(data.get("syllabusText")||"").trim();
        draft.manualTopics=String(data.get("manualTopics")||"").trim();
        break;
      case 3: {
        const weekday=Number(data.get("weekdayHours"));
        const weekend=Number(data.get("weekendHours"));
          if(!Number.isFinite(weekday)||weekday<1||weekday>16||!Number.isFinite(weekend)||weekend<1||weekend>16) { toast("Enter study availability from 1 to 16 hours per day so the 60-minute weekly test fits."); return false; }
        profile.weekdayHours=weekday; profile.weekendHours=weekend;
        profile.classStart=String(data.get("classStart")||"08:00");
        profile.classEnd=String(data.get("classEnd")||"17:00");
        profile.studyStart=String(data.get("studyStart")||"18:00");
        profile.weekendStudyStart=String(data.get("weekendStudyStart")||"09:00");
        if(timeOverlapsClasses(profile.studyStart,profile.classStart,profile.classEnd)) { toast("Choose a weekday study start time outside your class hours."); return false; }
        draft.timetableText=String(data.get("timetableText")||"").trim();
        break;
      }
      case 4:
        draft.playlistUrl=String(data.get("playlistUrl")||"").trim();
        draft.videoUrl=String(data.get("videoUrl")||"").trim();
        draft.lectureUrl=String(data.get("lectureUrl")||"").trim();
        for(const url of [draft.playlistUrl,draft.videoUrl,draft.lectureUrl]) if(url&&!isValidUrl(url)) { toast("Check the resource URL. Use a complete HTTP or HTTPS address."); return false; }
        draft.resourceText=String(data.get("resourceText")||"").trim();
        break;
      case 5:
        profile.examDate=String(data.get("examDate")||"");
        profile.examType=String(data.get("examType")||"Mid-semester");
        profile.targetLevel=String(data.get("targetLevel")||"Confident understanding");
        profile.availableHours=Number(data.get("availableHours"));
        if(!Number.isFinite(profile.availableHours)||profile.availableHours<1||profile.availableHours>16) { toast("Enter weekday availability from 1 to 16 hours."); return false; }
        profile.weekdayHours=Math.min(Number(profile.weekdayHours),profile.availableHours);
        break;
    }
    draft.profile=profile;
    state.onboardDraft=draft;
    if(state.onboardStep<6) { state.onboardStep++; persist(); render(); window.scrollTo(0,0); }
    else if(!profile.subjects.length) { toast("Go back and select at least one subject."); return false; }
    else { state.view="generating"; persist(); render(); window.scrollTo(0,0); }
    return true;
  }
  function renderSettingsTab(tab) {
    state.settingsTab=tab; persist(); render();
  }
  function handleAction(button) {
    const action=button.dataset.action;
    const id=button.dataset.id;
    switch(action) {
      case "start-onboarding": beginOnboarding(); break;
      case "explore": makeDemo(); break;
      case "open-task": startTask(id); break;
      case "open-test": state.view="tests"; state.selectedTask=id; persist(); render(); break;
      case "complete-task": completeTask(id); break;
      case "undo-task": undoTask(id); break;
      case "submit-dpp": submitDpp(id); break;
      case "begin-test": startTest(); break;
      case "test-previous": state.testSession.current=Math.max(0,state.testSession.current-1); persist(); render(); break;
      case "test-next": state.testSession.current=Math.min(9,state.testSession.current+1); persist(); render(); break;
      case "test-jump": state.testSession.current=Number(button.dataset.index); persist(); render(); break;
      case "test-review": { const index=state.testSession.current; state.testSession.review=state.testSession.review.includes(index)?state.testSession.review.filter(x=>x!==index):[...state.testSession.review,index]; persist(); render(); break; }
      case "submit-test": showTestSubmit(false); break;
      case "add-resource": addResourceDialog(); break;
      case "toggle-video": state.playingResourceId=state.playingResourceId===id?null:id; persist(); render(); break;
      case "delete-resource": confirmDialog("Remove this resource?","The resource entry will be removed from this browser. This does not delete the original file or link.","Remove resource","confirm-delete-resource",true); state.deleteResourceId=id; break;
      case "confirm-delete-resource": state.resources=state.resources.filter(item=>item.id!==state.deleteResourceId); state.deleteResourceId=null; persist(); dialog.close(); render(); toast("Resource removed."); break;
      case "reset-data": confirmDialog("Reset all local data?","This permanently removes your saved profile, curriculum, scores, study history and resource list from this browser.","Reset my data","confirm-reset-data",true); break;
      case "confirm-reset-data": stopTestTimer(); state=structuredCloneFallback(BASE); persist(); dialog.close(); render(); toast("Local Enginex data has been reset."); break;
      case "close-dialog": dialog.close(); if(state.testSession?.active&&state.view==="tests") render(); break;
      case "wizard-back": state.onboardStep=Math.max(0,state.onboardStep-1); persist(); render(); break;
      case "wizard-cancel": confirmDialog("Leave curriculum setup?","Your current wizard inputs will be discarded. Your existing saved plan will remain unchanged.","Leave setup","confirm-wizard-cancel"); break;
      case "confirm-wizard-cancel": state.onboardDraft=structuredCloneFallback(BASE.onboardDraft); state.view=state.demo?"dashboard":state.tasks.length?"dashboard":"landing"; persist(); dialog.close(); render(); break;
      case "wizard-next": {
        const form=document.getElementById("wizard-form");
        if(!form) break;
        if(state.onboardStep===2) { state.onboardDraft.files=selectedFiles(form.querySelector('[name="syllabusFiles"]')?.files||[]); }
        if(state.onboardStep===3) { state.onboardDraft.timetableFiles=selectedFiles(form.querySelector('[name="timetableFiles"]')?.files||[]); }
        captureWizard(form); break;
      }
      case "toggle-menu": document.getElementById("sidebar")?.classList.toggle("open"); break;
      case "notifications": toast(state.notifications?"No new study reminders.":"Study reminders are turned off in settings."); break;
      case "profile": go("settings"); break;
      default: break;
    }
  }
  function submitSettings(form) {
    const data=new FormData(form);
    if(form.dataset.form==="settings-profile") {
      ["name","institution","semester","branch","level"].forEach(key=>{const value=data.get(key);if(value!==null)state.profile[key]=String(value).trim();});
      toast("Profile saved.");
    } else if(form.dataset.form==="settings-schedule") {
      const weekday=Number(data.get("weekdayHours")),weekend=Number(data.get("weekendHours"));
      if(weekday<1||weekday>16||weekend<1||weekend>16) { toast("Study hours must be between 1 and 16 per day so the weekly test fits."); return; }
      const classStart=String(data.get("classStart")||"08:00"),classEnd=String(data.get("classEnd")||"17:00"),studyStart=String(data.get("studyStart")||"18:00");
      if(timeOverlapsClasses(studyStart,classStart,classEnd)) { toast("Choose a weekday study start time outside your class hours."); return; }
      state.profile.weekdayHours=weekday;state.profile.weekendHours=weekend;
      state.profile.classStart=classStart;state.profile.classEnd=classEnd;state.profile.studyStart=studyStart;state.profile.weekendStudyStart=String(data.get("weekendStudyStart")||"09:00");
      regeneratePlan(); toast("Study schedule saved and upcoming tasks refreshed.");
    } else if(form.dataset.form==="settings-subjects") {
      const subjects=data.getAll("subject").map(String);
      if(!subjects.length) { toast("Keep at least one subject selected."); return; }
      state.profile.subjects=subjects;
      state.profile.examDate=String(data.get("examDate")||"");
      state.profile.examType=String(data.get("examType")||"Mid-semester");
      state.profile.targetLevel=String(data.get("targetLevel")||"Confident understanding");
      regeneratePlan(); toast("Subjects and exam details saved; upcoming sessions refreshed.");
    } else if(form.dataset.form==="settings-preferences") {
      state.theme=String(data.get("theme")||"Dark");
      state.themeChosen=true;
      state.notifications=data.get("notifications")==="on";
      toast("Preferences saved.");
    }
    persist(); render();
  }
  app.addEventListener("click",event=>{
    const viewButton=event.target.closest("[data-view]");
    if(viewButton) {
      event.preventDefault();
      const view=viewButton.dataset.view;
      if(view==="landing") { state.view="landing";persist();render();window.scrollTo(0,0); }
      else { state.taskFilter="All"; go(view); }
      document.getElementById("sidebar")?.classList.remove("open");
      return;
    }
    const tab=event.target.closest("[data-settings-tab]");
    if(tab) { renderSettingsTab(tab.dataset.settingsTab); return; }
    const action=event.target.closest("[data-action]");
    if(action) { handleAction(action); return; }
  });
  app.addEventListener("submit",event=>{
    const form=event.target;
    if(form.id==="wizard-form") { event.preventDefault(); captureWizard(form); }
    else if(form.id==="test-score-form") { event.preventDefault(); finishTest(form); }
    else if(form.id==="resource-form") { event.preventDefault(); saveResource(form); }
    else if(form.dataset.form==="quiz") { event.preventDefault(); submitQuiz(form); }
    else if(form.dataset.form?.startsWith("settings-")) { event.preventDefault(); submitSettings(form); }
  });
  app.addEventListener("change",event=>{
    const target=event.target;
    if(target.matches('[data-filter-tasks]')) { state.taskFilter=target.value; render(); }
    if(target.matches("[data-filter-difficulty]")) { state.difficultyFilter=target.value; render(); }
    if(target.matches("[data-filter-date]")) { state.dateFilter=target.value; render(); }
    if(target.matches("[data-resource-filter]")) { state.resourceFilter=target.value; render(); }
    if(target.matches("[data-resource-search]")) { state.search=target.value; render(); const search=document.querySelector("[data-resource-search]"); search?.focus(); }
    if(target.matches('[name="syllabusFiles"]')) state.onboardDraft.files=selectedFiles(target.files);
    if(target.matches('[name="timetableFiles"]')) state.onboardDraft.timetableFiles=selectedFiles(target.files);
  });
  app.addEventListener("input",event=>{
    const target=event.target;
    if(target.matches("[data-test-answer]")) saveTestAnswer(Number(target.dataset.testAnswer),target.value);
    if(target.matches("[data-search]")) {
      state.search=target.value;
      if(target.value.trim()) target.setAttribute("aria-label",`Search query: ${target.value}`);
    }
  });
  app.addEventListener("keydown",event=>{
    if(event.target.matches("[data-search]")&&event.key==="Enter") {
      event.preventDefault();
      const term=state.search.trim().toLowerCase();
      if(!term) return;
      const matchingTask=state.tasks.find(task=>task.title.toLowerCase().includes(term)||subjectById(task.subjectId).short.toLowerCase().includes(term));
      const matchingResource=state.resources.some(item=>`${item.title} ${item.category} ${item.detail||""}`.toLowerCase().includes(term));
      if(matchingTask) { state.taskFilter="All"; if(matchingTask.type==="test")go("tests");else startTask(matchingTask.id); }
      else if(matchingResource) go("resources");
      else { go("curriculum"); toast("No exact match. Browse the curriculum or resource library."); }
    }
  });
  dialog.addEventListener("click",event=>{
    if(event.target===dialog) dialog.close();
    const action=event.target.closest("[data-action]");
    if(action) handleAction(action);
  });
  dialog.addEventListener("submit",event=>{
    event.preventDefault();
    if(event.target.id==="test-score-form") finishTest(event.target);
    else if(event.target.id==="resource-form") saveResource(event.target);
  });
  dialog.addEventListener("change",event=>{
    if(event.target.matches("[data-pyq-category]")) {
      const fields=document.getElementById("pyq-fields");
      if(fields) fields.hidden=event.target.value!=="PYQs";
    }
  });
  render();
})();
