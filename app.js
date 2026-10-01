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
    ["coding-challenge", "C Challenge", "⌨"], ["career", "Web Dev & DSA", "⌘"], ["progress", "Progress", "↗"], ["resources", "Resources", "▧"], ["settings", "Settings", "⚙"]
  ];
  const CAREER_TRACKS = [
    {
      id: "fullstack",
      name: "Full-Stack Web Development",
      short: "Full-stack",
      icon: "◫",
      topics: [
        "HTML semantics and accessible page structure",
        "CSS layout, Flexbox, Grid, and responsive design",
        "JavaScript fundamentals, DOM, and browser events",
        "Git, GitHub, and collaborative workflow",
        "Modern JavaScript, modules, and asynchronous code",
        "React components, props, state, and forms",
        "React routing, data fetching, and reusable UI",
        "Node.js, Express, and REST API design",
        "Database fundamentals and SQL data modeling",
        "Authentication, authorization, and secure validation",
        "Testing, debugging, and accessibility review",
        "Deploy a full-stack portfolio project"
      ]
    },
    {
      id: "dsa-cpp",
      name: "Data Structures & Algorithms in C++",
      short: "DSA in C++",
      icon: "{ }",
      topics: [
        "C++ setup, input/output, functions, and STL basics",
        "Time complexity, arrays, and vector operations",
        "Strings, hashing, and frequency counting",
        "Sorting, binary search, and two-pointer patterns",
        "Recursion, subsets, and backtracking",
        "Linked lists and pointer practice",
        "Stacks, queues, and monotonic patterns",
        "Trees, traversals, and binary search trees",
        "Heaps, priority queues, and top-K problems",
        "Graphs, BFS, DFS, and connected components",
        "Greedy strategies and dynamic programming foundations",
        "Mixed problem solving and revision"
      ]
    }
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
        ["Conceptual", "Explain the difference between electric current and voltage.", "Current is charge flow per unit time; voltage is energy transferred per unit charge.", "Current is charge flow per unit time (I = Q/t); voltage is energy transferred per unit charge (V = W/Q).", "Conceptual", 2],
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
        ["Conceptual", "What is the difference between declaring and initializing an integer variable?", "Declaration gives a name and type; initialization assigns its first value.", "A declaration gives the object a type and name; an initializer assigns its starting value, for example `int count = 0;`.", "Conceptual", 2],
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
  function dppQuestion(type,prompt,answer,explanation,mistake="Conceptual",marks=2) {
    return [type,prompt,answer,explanation,mistake,marks];
  }
  const DPP_ADDITIONS = {
    electronics: [
      dppQuestion("Conceptual","State Ohm's law and give one condition under which it applies.","V = IR; temperature and other physical conditions remain constant.","For an ohmic conductor under constant physical conditions, current is proportional to voltage: V = IR.","Formula recall"),
      dppQuestion("Application","A 6 Ω resistor is connected to 18 V. Find its current.","3 A","I = V/R = 18/6 = 3 A.","Calculation"),
      dppQuestion("Numerical","A current of 0.4 A flows for 30 s. How much charge passes?","12 C","Q = It = 0.4 × 30 = 12 C.","Calculation"),
      dppQuestion("Conceptual","What is the equivalent resistance of 3 Ω and 5 Ω resistors in series?","8 Ω","Series resistances add: Rₑq = 3 + 5 = 8 Ω.","Formula recall"),
      dppQuestion("Numerical","Two 6 Ω resistors are connected in parallel. Find their equivalent resistance.","3 Ω","1/Rₑq = 1/6 + 1/6 = 1/3, so Rₑq = 3 Ω.","Calculation"),
      dppQuestion("Application","A 2 Ω resistor and a 4 Ω resistor are in series across 12 V. Find the voltage across the 4 Ω resistor.","8 V","The current is 12/(2+4) = 2 A. The 4 Ω resistor has V = IR = 8 V.","Calculation"),
      dppQuestion("Conceptual","At a circuit junction, 5 A enters and 2 A leaves along one branch. How much current leaves through the other branch?","3 A","Kirchhoff's current law: total entering equals total leaving, so 5 = 2 + I.","Calculation"),
      dppQuestion("Application","A closed loop has a 10 V source and drops of 4 V and V₂. Find V₂.","6 V","Kirchhoff's voltage law gives 10 − 4 − V₂ = 0, so V₂ = 6 V.","Calculation"),
      dppQuestion("Conceptual","What is the ideal forward-bias condition for a silicon PN diode?","P-side is positive relative to N-side; forward drop is approximately 0.7 V.","Forward bias lowers the junction barrier. The approximate 0.7 V is a useful silicon-diode model, not an exact constant.","Formula recall"),
      dppQuestion("Application","In the ideal-diode model, what happens to a reverse-biased diode below breakdown?","It blocks current.","Reverse bias widens the depletion region; the ideal model treats current as zero below breakdown.","Conceptual"),
      dppQuestion("Conceptual","Which quantity does a rectifier convert: AC to DC or DC to AC?","AC to DC","Rectifier circuits convert alternating input into unidirectional output; filtering can reduce ripple.","Conceptual"),
      dppQuestion("Design","What is the role of a filter capacitor after a rectifier?","It smooths the rectified output by reducing ripple.","The capacitor charges near waveform peaks and discharges between them, smoothing output voltage.","Conceptual"),
      dppQuestion("Numerical","A device uses 24 W from a 12 V supply. Find its current.","2 A","P = VI, so I = P/V = 24/12 = 2 A.","Calculation"),
      dppQuestion("Numerical","Find the power dissipated by a 4 Ω resistor carrying 2 A.","16 W","P = I²R = 2² × 4 = 16 W.","Calculation"),
      dppQuestion("Application","If the voltage across a fixed resistor doubles, what happens to current and power?","Current doubles; power becomes four times as large.","With R fixed, I = V/R doubles and P = V²/R becomes four times as large.","Formula recall"),
      dppQuestion("PYQ-Style Practice","A 2 Ω resistor and a 4 Ω resistor are in parallel across 12 V. Find the total current.","9 A","Branch currents are 12/2 = 6 A and 12/4 = 3 A; total current is 9 A. Generated practice; not a verified university past-paper question.","Calculation",5)
    ],
    c: [
      dppQuestion("Conceptual","What value does an uninitialized automatic local `int` have in C?","An indeterminate value; do not read it before assigning a value.","An automatic object without an initializer has an indeterminate value; reading it is not a safe way to obtain a default."),
      dppQuestion("Coding","Write a declaration for a `double` named temperature initialized to 21.5.","double temperature = 21.5;","The declaration specifies the floating-point type and initializes the object."),
      dppQuestion("Application","What does `17 % 5` evaluate to?","2","Integer remainder: 17 = 3 × 5 + 2."),
      dppQuestion("Coding","Write a condition that is true when integer `n` is between 1 and 10 inclusive.","n >= 1 && n <= 10","Both bounds must hold, so combine the comparisons with logical AND."),
      dppQuestion("Tracing","What is printed? `int x = 3; printf(\"%d\", x++);`","3","Post-increment yields the old value in the expression; afterward x becomes 4.","Logic"),
      dppQuestion("Tracing","After `int x = 3; printf(\"%d\", ++x);`, what is printed?","4","Pre-increment changes x before the expression's value is used.","Logic"),
      dppQuestion("Coding","Write a `for` loop header that visits integers 0 through 4 inclusive.","for (int i = 0; i < 5; ++i)","Start at 0 and continue while i < 5; the loop visits 0, 1, 2, 3, and 4.","Coding/Syntax"),
      dppQuestion("Tracing","How many times does `for (int i = 1; i <= 6; ++i)` execute?","6","The values 1 through 6 are included: six iterations.","Logic"),
      dppQuestion("Coding","Initialize every element of `int a[4]` to zero using a loop.","for (int i = 0; i < 4; ++i) a[i] = 0;","Valid indices for a four-element array are 0, 1, 2, and 3."),
      dppQuestion("Conceptual","What is the final valid index of `int values[8]`?","7","An array of length 8 has indices 0 through 7; index 8 is out of bounds.","Misinterpretation"),
      dppQuestion("Coding","How do you test whether the first character of `char word[ ]` is the null terminator?","word[0] == '\\0'","An empty C string begins with the null character."),
      dppQuestion("Conceptual","Does `sizeof(char text[20])` return the number of characters before its null terminator?","No; it returns the array's storage size in bytes (20).","sizeof on the array in its declaration scope gives the storage size, including space reserved for the terminator."),
      dppQuestion("Coding","Write a function prototype for `int` function `square` that accepts one `int` argument.","int square(int value);","The return type and parameter type appear in the prototype, which ends with a semicolon."),
      dppQuestion("Conceptual","In C, are arguments generally passed to functions by value or by reference?","By value.","A function receives copies of argument values; a pointer value can be passed to let it modify the pointed-to object."),
      dppQuestion("Pointers","Given `int n = 7; int *p = &n;`, what does `*p` evaluate to?","7","p stores n's address; dereferencing p accesses the int stored there."),
      dppQuestion("Programming","Write a C program that prints the numbers 1 to 5 each on a new line.","#include <stdio.h>\nint main() {\n  for (int i = 1; i <= 5; ++i) {\n    printf(\"%d\\n\", i);\n  }\n  return 0;\n}","Use a loop from 1 to 5 and print each number with `%d` so every value appears on its own line.","Coding/Syntax",5),
      dppQuestion("PYQ-Style Practice","Write a C expression that gives a function the address of integer `score`.","&score","The address-of operator & produces the address. Generated practice; no authentic university source/year is claimed.","Coding/Syntax",5)
    ],
    web: [
      dppQuestion("Conceptual","Which HTML element should contain the document title and metadata?","head","The head contains document metadata, including title; visible page content belongs in body."),
      dppQuestion("Coding","Write the HTML element for a level-two heading reading Circuit Analysis.","<h2>Circuit Analysis</h2>","Use an h2 element for the requested second-level heading.","Coding/Syntax"),
      dppQuestion("Accessibility","What does the `alt` attribute on an informative image provide?","A text alternative describing the image's relevant information.","Alternative text conveys the image's purpose/content when it cannot be seen or loaded.","Conceptual"),
      dppQuestion("Forms","Which `label` attribute associates a label with an input whose id is `email`?","for=\"email\"","The label's for value must match the form control's id."),
      dppQuestion("CSS","With the default content-box model, what does `width: 200px` set?","The content width; padding and borders are added outside it.","In content-box, width excludes padding and border; border-box includes them.","Misinterpretation"),
      dppQuestion("CSS","Which CSS property changes an element's text color?","color","The color property sets foreground text color; background-color sets the background.","Conceptual"),
      dppQuestion("CSS","Write a class selector for `.card` with 16 px of padding.",".card { padding: 16px; }","A class selector begins with a dot, followed by the declaration block.","Coding/Syntax"),
      dppQuestion("Layout","Which Flexbox declaration places items along the horizontal main axis by default?","display: flex;","A flex container defaults to row direction, so its main axis is horizontal."),
      dppQuestion("Layout","In a flex row, which property distributes items along the main axis?","justify-content","justify-content aligns/distributes along the main axis; align-items controls the cross axis.","Conceptual"),
      dppQuestion("Responsive design","What does `max-width: 100%` help prevent for an image?","It overflowing its containing element.","The image can shrink to fit the available container width; `height: auto` preserves its proportions.","Conceptual"),
      dppQuestion("Responsive design","Write a media query that applies when viewport width is at most 600 px.","@media (max-width: 600px) { ... }","The max-width condition applies the enclosed styles at 600 px and narrower."),
      dppQuestion("HTML","Which semantic element is appropriate for a group of site-navigation links?","<nav>","nav marks a navigation landmark for users and assistive technology."),
      dppQuestion("HTML","What is the purpose of the `lang` attribute on the `html` element?","It declares the document's primary language.","For example, `<html lang=\"en\">` allows assistive technology and other tools to identify the language."),
      dppQuestion("CSS","What does `box-sizing: border-box` include in the declared width?","Content, padding, and border.","With border-box, padding and border fit inside the declared width; margins remain outside."),
      dppQuestion("Forms","Which input type is suitable for a browser-validated email address field?","type=\"email\"","An email input provides an appropriate control and basic browser validation; it does not replace server validation."),
      dppQuestion("PYQ-Style Practice","Write a complete anchor opening tag linking to `/resources` with visible text Resources.","<a href=\"/resources\">Resources</a>","The href attribute specifies the destination. Generated practice; not a verified university past-paper question.","Coding/Syntax",5)
    ],
    math: [
      dppQuestion("Limits","Evaluate lim(x→3) (x²−9)/(x−3).","6","Factor x²−9=(x−3)(x+3); cancel for x≠3 and take the limit.","Calculation"),
      dppQuestion("Conceptual","For a two-sided finite limit at x=a to exist, what must the one-sided limits do?","Both one-sided limits must exist and be equal.","The left-hand and right-hand limits must agree."),
      dppQuestion("Continuity","State the three conditions for f to be continuous at x=a.","f(a) is defined; the limit as x→a exists; and lim(x→a) f(x)=f(a).","Continuity at a requires a defined function value equal to the two-sided limit."),
      dppQuestion("Limits","Evaluate lim(x→0) (sin x)/x, with x in radians.","1","This is the standard trigonometric limit, valid when angles are measured in radians.","Formula recall"),
      dppQuestion("Differentiation","Differentiate f(x)=x⁵.","5x⁴","Apply the power rule d(xⁿ)/dx = n xⁿ⁻¹.","Formula recall"),
      dppQuestion("Differentiation","Differentiate f(x)=3x²−4x+7.","6x−4","Differentiate each term: 3·2x, −4, and 0."),
      dppQuestion("Differentiation","If y=sin x, what is dy/dx?","cos x","The derivative of sin x is cos x."),
      dppQuestion("Application","Find the gradient of y=x² at x=3.","6","dy/dx=2x, so the gradient at x=3 is 6."),
      dppQuestion("Application","A particle has position s(t)=t²+4t metres. Find its velocity at t=3 seconds.","10 m/s","Velocity is ds/dt=2t+4; at t=3 it equals 10 m/s."),
      dppQuestion("Matrices","What is the determinant of [[2,1],[3,4]]?","5","For a 2×2 matrix [[a,b],[c,d]], determinant ad−bc = 2·4−1·3 = 5.","Calculation"),
      dppQuestion("Matrices","Can a square matrix with determinant zero have an inverse?","No.","A square matrix is invertible only when its determinant is nonzero."),
      dppQuestion("Linear systems","Solve x+y=5 and x−y=1.","x=3, y=2","Adding the equations gives 2x=6, so x=3; substitution gives y=2.","Calculation"),
      dppQuestion("Limits","Evaluate lim(x→2) (x²−4)/(x−2).","4","Factor, cancel the common factor for x≠2, then evaluate x+2 at 2.","Calculation"),
      dppQuestion("Differentiation","Differentiate f(x)=(x+1)(x²).","3x²+2x","Expand to x³+x², then differentiate term by term."),
      dppQuestion("Conceptual","Does differentiability at x=a imply continuity there?","Yes.","Differentiability implies continuity; continuity alone does not guarantee differentiability."),
      dppQuestion("PYQ-Style Practice","Find the equation of the tangent to y=x² at x=1.","y=2x−1","The point is (1,1) and the gradient is 2; point-slope form gives y−1=2(x−1). Generated practice; not a verified university past-paper question.","Calculation",5)
    ],
    environment: [
      dppQuestion("Conceptual","Name the two broad components of an ecosystem.","Biotic and abiotic components.","Biotic components are living organisms; abiotic components are physical and chemical factors."),
      dppQuestion("Conceptual","In a simple food chain, which organisms are producers?","Organisms that make organic matter from an energy source, such as green plants.","Producers form the base of the food chain by converting light or chemical energy into organic matter."),
      dppQuestion("Application","In grass → grasshopper → frog, identify the primary consumer.","Grasshopper","The grasshopper feeds directly on the producer, grass."),
      dppQuestion("Conceptual","Does energy cycle through an ecosystem in the same way as nutrients?","No. Energy flows through and dissipates; nutrients are recycled.","Energy transfer is not a closed loop, while matter such as nutrients cycles between organisms and the environment."),
      dppQuestion("Application","If producers store 10,000 kJ and a simplified model transfers 10% to the next trophic level, how much reaches primary consumers?","1,000 kJ","10% of 10,000 kJ is 1,000 kJ; the 10% figure is a simplified rule of thumb, not universal."),
      dppQuestion("Conceptual","What is biodiversity?","The variety of life, including variation within species, between species, and among ecosystems.","Biodiversity is considered at genetic, species, and ecosystem levels."),
      dppQuestion("Air pollution","Name one pollutant that contributes to acid deposition.","Sulfur dioxide (SO₂) or nitrogen oxides (NOₓ).","SO₂ and NOₓ can form sulfuric and nitric acids through atmospheric reactions.","Conceptual"),
      dppQuestion("Air pollution","Which instrument is commonly used to report ambient particulate matter concentrations?","A particulate matter sampler/monitor, such as a PM₂.₅ or PM₁₀ monitor.","Ambient particulate concentrations are measured with instruments designed for the particle size fraction being reported.","Conceptual"),
      dppQuestion("Water quality","What does high biochemical oxygen demand (BOD) generally indicate in a water sample?","A high amount of biodegradable organic matter and potential oxygen depletion.","Microorganisms consume oxygen while decomposing biodegradable material, increasing BOD."),
      dppQuestion("Water quality","What is the usual unit for dissolved oxygen concentration in water?","mg/L","Water-quality dissolved oxygen is commonly reported in milligrams per litre."),
      dppQuestion("Water treatment","What is the purpose of coagulation in conventional water treatment?","Destabilize fine particles so they can aggregate into larger flocs.","Coagulants reduce particle stability; flocculation encourages particle collisions and growth."),
      dppQuestion("Water treatment","Which treatment step typically settles formed flocs before filtration?","Sedimentation (clarification).","After coagulation and flocculation, gravity settling removes much of the floc before filtration."),
      dppQuestion("Solid waste","What does composting do to suitable biodegradable organic waste?","Biologically decomposes it into a stabilized compost-like material.","Controlled decomposition can produce a soil amendment; contamination and process conditions matter."),
      dppQuestion("Solid waste","Why should batteries generally be kept out of ordinary mixed waste?","They may contain hazardous substances and can pose fire risks; they need appropriate collection.","Battery chemistry and local rules vary, so use a designated collection/recycling route."),
      dppQuestion("Sustainability","Give one example of reducing resource use at source rather than treating waste later.","Avoiding single-use packaging by choosing a reusable option.","Source reduction prevents material use and waste generation before end-of-pipe treatment."),
      dppQuestion("PYQ-Style Practice","State one difference between recycling and composting.","Recycling reprocesses materials for reuse; composting biologically decomposes suitable organic matter.","The methods target different material streams. Generated practice; source/year not verified, so this is not an authentic university PYQ.","Conceptual",5)
    ]
  };
  Object.entries(DPP_ADDITIONS).forEach(([subjectId,questions])=>TOPICS[subjectId].dpp.push(...questions));
  const C_CHALLENGES = [
    { id:"beginner-positive",topic:0,difficulty:"Beginner",title:"Positive or not?",prompt:"Write a C program that reads an integer and prints `positive` if it is greater than zero, otherwise prints `not positive`. Include input/output and a newline.",starter:"#include <stdio.h>\n\nint main(void) {\n    int number;\n    /* Your code here */\n    return 0;\n}",solution:"#include <stdio.h>\n\nint main(void) {\n    int number;\n    if (scanf(\"%d\", &number) != 1) return 1;\n    if (number > 0) puts(\"positive\");\n    else puts(\"not positive\");\n    return 0;\n}",explanation:"Check that scanf successfully reads the integer, branch on number > 0, and print exactly one of the two requested words."},
    { id:"beginner-even",topic:2,difficulty:"Beginner",title:"Even or odd",prompt:"Read one integer and print `even` when it is divisible by 2, otherwise print `odd`.",starter:"#include <stdio.h>\n\nint main(void) {\n    int number;\n    /* Your code here */\n    return 0;\n}",solution:"#include <stdio.h>\n\nint main(void) {\n    int number;\n    if (scanf(\"%d\", &number) != 1) return 1;\n    puts(number % 2 == 0 ? \"even\" : \"odd\");\n    return 0;\n}",explanation:"An integer is even exactly when number % 2 is zero. The conditional operator selects the required output."},
    { id:"beginner-total",topic:3,difficulty:"Beginner",title:"Sum from 1 to n",prompt:"Read a positive integer n, then calculate and print the sum 1 + 2 + ... + n using a loop. Assume n is at most 1000.",starter:"#include <stdio.h>\n\nint main(void) {\n    int n;\n    /* Your code here */\n    return 0;\n}",solution:"#include <stdio.h>\n\nint main(void) {\n    int n;\n    if (scanf(\"%d\", &n) != 1 || n < 1 || n > 1000) return 1;\n    int sum = 0;\n    for (int i = 1; i <= n; ++i) sum += i;\n    printf(\"%d\\n\", sum);\n    return 0;\n}",explanation:"Initialize an accumulator to zero and add every integer from 1 through n. The loop includes n."},
    { id:"beginner-maximum",topic:4,difficulty:"Beginner",title:"Find the largest of five",prompt:"Given five integers in an array, write a loop that finds the largest value and prints it.",starter:"#include <stdio.h>\n\nint main(void) {\n    int values[5];\n    /* Read the values, then find the maximum. */\n    return 0;\n}",solution:"#include <stdio.h>\n\nint main(void) {\n    int values[5];\n    for (int i = 0; i < 5; ++i) {\n        if (scanf(\"%d\", &values[i]) != 1) return 1;\n    }\n    int maximum = values[0];\n    for (int i = 1; i < 5; ++i) {\n        if (values[i] > maximum) maximum = values[i];\n    }\n    printf(\"%d\\n\", maximum);\n    return 0;\n}",explanation:"Initialize the maximum from the first element—not zero—so the algorithm also works when all inputs are negative."},
    { id:"intermediate-prime",topic:3,difficulty:"Intermediate",title:"Count the divisors",prompt:"Write a function `int count_divisors(int n)` that returns the number of positive divisors of n. Assume n is between 1 and 1,000,000. Explain how you avoid checking every number up to n.",starter:"#include <stdio.h>\n\nint count_divisors(int n) {\n    /* Your code here */\n}\n\nint main(void) {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return 1;\n    printf(\"%d\\n\", count_divisors(n));\n    return 0;\n}",solution:"#include <stdio.h>\n\nint count_divisors(int n) {\n    int count = 0;\n    for (int divisor = 1; divisor <= n / divisor; ++divisor) {\n        if (n % divisor == 0) count += (divisor == n / divisor) ? 1 : 2;\n    }\n    return count;\n}\n\nint main(void) {\n    int n;\n    if (scanf(\"%d\", &n) != 1 || n < 1) return 1;\n    printf(\"%d\\n\", count_divisors(n));\n    return 0;\n}",explanation:"Divisors occur in pairs around √n. Count both members of each pair, but count a square root only once. `divisor <= n / divisor` avoids multiplication overflow."},
    { id:"intermediate-reverse",topic:4,difficulty:"Intermediate",title:"Reverse an array in place",prompt:"Write `void reverse(int values[], int length)` that reverses an integer array in place. Do not allocate a second array. State what happens for lengths 0 and 1.",starter:"void reverse(int values[], int length) {\n    /* Your code here */\n}",solution:"void reverse(int values[], int length) {\n    for (int left = 0, right = length - 1; left < right; ++left, --right) {\n        int temporary = values[left];\n        values[left] = values[right];\n        values[right] = temporary;\n    }\n}",explanation:"Swap symmetric elements while moving two indices toward the centre. For lengths 0 or 1 the loop body does not execute."},
    { id:"intermediate-length",topic:5,difficulty:"Intermediate",title:"Write a string-length function",prompt:"Implement `size_t string_length(const char text[])` without calling `strlen`. Stop at the null terminator and return the number of characters before it.",starter:"#include <stddef.h>\n\nsize_t string_length(const char text[]) {\n    /* Your code here */\n}",solution:"#include <stddef.h>\n\nsize_t string_length(const char text[]) {\n    size_t length = 0;\n    while (text[length] != '\\0') ++length;\n    return length;\n}",explanation:"A C string ends at its first '\\0'. Count characters before that terminator; do not include the terminator."},
    { id:"intermediate-factorial",topic:6,difficulty:"Intermediate",title:"Factorial with a function",prompt:"Write a function `unsigned long long factorial(unsigned int n)` using iteration. Define 0! as 1 and state what input range is safe for a 64-bit unsigned result.",starter:"unsigned long long factorial(unsigned int n) {\n    /* Your code here */\n}",solution:"unsigned long long factorial(unsigned int n) {\n    unsigned long long result = 1;\n    for (unsigned int value = 2; value <= n; ++value) result *= value;\n    return result;\n}",explanation:"Starting at one handles 0! and 1!. With a 64-bit unsigned long long, factorial values through 20! fit; 21! overflows."},
    { id:"advanced-binary-search",topic:4,difficulty:"Advanced",title:"Binary search with a half-open range",prompt:"Implement `int binary_search(const int a[], size_t n, int target)` for an ascending array. Return an index if found, otherwise -1. Use a half-open search interval and avoid unsigned underflow.",starter:"#include <stddef.h>\n\nint binary_search(const int a[], size_t n, int target) {\n    /* Your code here */\n}",solution:"#include <stddef.h>\n\nint binary_search(const int a[], size_t n, int target) {\n    size_t low = 0, high = n;\n    while (low < high) {\n        size_t mid = low + (high - low) / 2;\n        if (a[mid] == target) return (int)mid;\n        if (a[mid] < target) low = mid + 1;\n        else high = mid;\n    }\n    return -1;\n}",explanation:"Maintain the half-open interval [low, high). Calculate the midpoint as low + (high-low)/2; never form mid-1 with an unsigned index."},
    { id:"advanced-gcd",topic:6,difficulty:"Advanced",title:"Recursive Euclidean algorithm",prompt:"Implement a recursive function `unsigned gcd(unsigned a, unsigned b)` using Euclid's algorithm. Explain the base case and why each recursive call makes progress.",starter:"unsigned gcd(unsigned a, unsigned b) {\n    /* Your code here */\n}",solution:"unsigned gcd(unsigned a, unsigned b) {\n    return b == 0 ? a : gcd(b, a % b);\n}",explanation:"When b is zero, a is the greatest common divisor. Otherwise, gcd(a,b)=gcd(b,a%b); the non-negative remainder is smaller than b, so recursion progresses."},
    { id:"advanced-pointers",topic:7,difficulty:"Advanced",title:"Swap through pointers",prompt:"Implement `void swap_int(int *left, int *right)` using pointer dereferencing. Describe what the caller should pass and how you handle a null pointer.",starter:"void swap_int(int *left, int *right) {\n    /* Your code here */\n}",solution:"void swap_int(int *left, int *right) {\n    if (left == NULL || right == NULL) return;\n    int temporary = *left;\n    *left = *right;\n    *right = temporary;\n}",explanation:"Pass the addresses of two valid int objects. Dereference both pointers to exchange their values, and guard null pointers before dereferencing."}
  ];
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
  const CLOUD_SESSION_KEY = "enginex-supabase-session";
  const RESOURCE_DB_NAME = "enginex-resource-files";
  const RESOURCE_STORE_NAME = "pdf-files";
  const MAX_RESOURCE_PDF_BYTES = 50 * 1024 * 1024;
  const PDF_RESOURCE_CATEGORIES = ["Books (PDF)", "Notes (PDF)"];
  const CLOUD_CONFIG = window.ENGINEX_SUPABASE || { url: "", anonKey: "" };
  const BASE = {
    view: "landing", onboardStep: 0, selectedTask: null, taskFilter: "All", difficultyFilter: "All", dateFilter: "", playingResourceId: null,
    authMode: "signin",
    codingChallenge: { completedTopics: [], difficulty: "Beginner", lastReleaseDate: "", attempts: [] },
    onboardDraft: { syllabusText: "", manualTopics: "", timetableText: "", resourceText: "", classList: "", files: [] },
    profile: { name: "", institution: "", semester: "", branch: "", level: "New to these subjects", weekdayHours: 3.5, weekendHours: 8, availableHours: 3.5, classStart: "08:00", classEnd: "17:00", studyStart: "18:00", weekendStudyStart: "09:00", examDate: "", examType: "Mid-semester", targetLevel: "Confident understanding", notes: "", timetable: "", subjects: SUBJECTS.map(item => item.id) },
    resources: [], tasks: [], completedTaskIds: [], sessions: [], quizAttempts: [], dppAttempts: [], testAttempts: [],
    career: { completedSessions: [], projects: [] },
    mistakes: [], testSession: null, search: "", resourceFilter: "All", settingsTab: "Profile", notifications: true, theme: "Dark", themeChosen: false, demo: false
  };
  let state = loadState();
  let testInterval = null;
  let generationTimer = null;
  let challengeClock = null;
  let cloudSession = loadCloudSession();
  let cloudSyncTimer = null;
  let cloudSyncStatus = "Not connected";
  let toastTimer = null;
  let resourceDbPromise = null;
  let resourcePdfObjectUrl = "";
  const app = document.getElementById("app");
  const dialog = document.getElementById("app-dialog");

  function loadCloudSession() {
    try {
      const raw = localStorage.getItem(CLOUD_SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.error("Enginex could not restore the saved sign-in session.", error);
      return null;
    }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredCloneFallback(BASE);
      const saved = JSON.parse(raw);
      const restored = { ...structuredCloneFallback(BASE), ...saved, profile: { ...BASE.profile, ...(saved.profile || {}) }, career: { ...BASE.career, ...(saved.career || {}) } };
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
  function openResourceFileDb() {
    if (!("indexedDB" in window)) return Promise.reject(new Error("This browser does not support local PDF storage."));
    if (!resourceDbPromise) {
      resourceDbPromise = new Promise((resolve, reject) => {
        const request = window.indexedDB.open(RESOURCE_DB_NAME, 1);
        request.onupgradeneeded = () => {
          if (!request.result.objectStoreNames.contains(RESOURCE_STORE_NAME)) {
            request.result.createObjectStore(RESOURCE_STORE_NAME, { keyPath: "id" });
          }
        };
        request.onsuccess = () => {
          request.result.onversionchange = () => request.result.close();
          resolve(request.result);
        };
        request.onerror = () => reject(request.error || new Error("Could not open local PDF storage."));
        request.onblocked = () => reject(new Error("Local PDF storage is busy in another tab. Close other Enginex tabs and retry."));
      }).catch(error => {
        resourceDbPromise = null;
        throw error;
      });
    }
    return resourceDbPromise;
  }
  async function storeResourcePdf(id, file) {
    const db = await openResourceFileDb();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(RESOURCE_STORE_NAME, "readwrite");
      transaction.objectStore(RESOURCE_STORE_NAME).put({ id, blob: file });
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error || new Error("Could not save this PDF in browser storage."));
      transaction.onabort = () => reject(transaction.error || new Error("Saving this PDF was interrupted."));
    });
  }
  async function getResourcePdf(id) {
    const db = await openResourceFileDb();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(RESOURCE_STORE_NAME, "readonly");
      const request = transaction.objectStore(RESOURCE_STORE_NAME).get(id);
      request.onsuccess = () => resolve(request.result?.blob || null);
      request.onerror = () => reject(request.error || new Error("Could not read this saved PDF."));
    });
  }
  async function deleteResourcePdf(id) {
    const db = await openResourceFileDb();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(RESOURCE_STORE_NAME, "readwrite");
      transaction.objectStore(RESOURCE_STORE_NAME).delete(id);
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error || new Error("Could not remove the saved PDF."));
      transaction.onabort = () => reject(transaction.error || new Error("Removing the saved PDF was interrupted."));
    });
  }
  async function clearResourcePdfs() {
    if(!("indexedDB" in window)&&!state.resources.some(item=>item.fileId)) return;
    const db = await openResourceFileDb();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(RESOURCE_STORE_NAME, "readwrite");
      transaction.objectStore(RESOURCE_STORE_NAME).clear();
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error || new Error("Could not clear saved PDFs."));
      transaction.onabort = () => reject(transaction.error || new Error("Clearing saved PDFs was interrupted."));
    });
  }
  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); scheduleCloudSync(); }
    catch (error) { console.error("Enginex could not persist this update.", error); toast("Your browser could not save this change. Check available storage."); }
  }
  function supabaseReady() {
    return Boolean(CLOUD_CONFIG.url&&CLOUD_CONFIG.anonKey);
  }
  function setCloudSession(session) {
    cloudSession=session;
    try {
      if(session) localStorage.setItem(CLOUD_SESSION_KEY,JSON.stringify(session));
      else localStorage.removeItem(CLOUD_SESSION_KEY);
    } catch(error) {
      cloudSession=null;
      console.error("Enginex could not safely save the account session.",error);
      throw new Error("This browser cannot securely keep the sign-in session. Check its local storage settings.");
    }
  }
  function supabaseError(data,status) {
    const message=data?.msg||data?.message||data?.error_description||data?.error;
    return new Error(message?String(message):`Cloud request failed (${status}).`);
  }
  async function authRequest(path,body,accessToken="") {
    const response=await fetch(`${CLOUD_CONFIG.url.replace(/\/+$/,"")}/auth/v1/${path}`,{
      method:"POST",headers:{"Content-Type":"application/json","apikey":CLOUD_CONFIG.anonKey,...(accessToken?{Authorization:`Bearer ${accessToken}`}:{})},
      body:JSON.stringify(body)
    });
    const data=await response.json().catch(()=>null);
    if(!response.ok) throw supabaseError(data,response.status);
    return data;
  }
  async function refreshCloudSession() {
    if(!cloudSession?.refresh_token) throw new Error("Your sign-in session has expired. Sign in again.");
    const refreshed=await authRequest("token?grant_type=refresh_token",{refresh_token:cloudSession.refresh_token});
    const updated={...cloudSession,...refreshed,expires_at:refreshed.expires_at||Math.floor(Date.now()/1000)+(refreshed.expires_in||3600)};
    setCloudSession(updated);
    return updated;
  }
  async function cloudRequest(path,options={},retried=false) {
    if(!supabaseReady()) throw new Error("Cloud accounts are not configured for this deployment.");
    if(!cloudSession?.access_token) throw new Error("Sign in to use cloud storage.");
    if(cloudSession.expires_at&&cloudSession.expires_at<Math.floor(Date.now()/1000)+60) await refreshCloudSession();
    const response=await fetch(`${CLOUD_CONFIG.url.replace(/\/+$/,"")}/rest/v1/${path}`,{
      ...options,headers:{"Content-Type":"application/json","apikey":CLOUD_CONFIG.anonKey,"Authorization":`Bearer ${cloudSession.access_token}`,...(options.headers||{})}
    });
    if(response.status===401&&!retried) {
      await refreshCloudSession();
      return cloudRequest(path,options,true);
    }
    const data=await response.json().catch(()=>null);
    if(!response.ok) throw supabaseError(data,response.status);
    return data;
  }
  function scheduleCloudSync() {
    if(!cloudSession||!supabaseReady()||state.demo) return;
    if(cloudSyncTimer) window.clearTimeout(cloudSyncTimer);
    cloudSyncStatus="Saving…";
    cloudSyncTimer=window.setTimeout(()=>{ saveCloudProgress().catch(error=>{
      cloudSyncStatus="Sync error";
      console.error("Enginex could not sync your progress.",error);
      toast(`Cloud sync failed: ${error.message}`);
      if(state.view==="settings") render();
    }); },800);
  }
  async function saveCloudProgress() {
    if(!cloudSession||!supabaseReady()||state.demo) return;
    cloudSyncTimer=null;
    const progress={...state,resources:state.resources.filter(item=>!item.fileId)};
    const payload={user_id:cloudSession.user.id,progress,updated_at:new Date().toISOString()};
    await cloudRequest("user_progress?on_conflict=user_id",{method:"POST",headers:{Prefer:"resolution=merge-duplicates,return=minimal"},body:JSON.stringify(payload)});
    cloudSyncStatus="All progress synced";
    if(state.view==="settings") render();
  }
  async function loadCloudProgress() {
    if(!cloudSession?.user?.id) throw new Error("The signed-in account has no user ID.");
    const rows=await cloudRequest(`user_progress?select=progress&user_id=eq.${encodeURIComponent(cloudSession.user.id)}&limit=1`);
    if(Array.isArray(rows)&&rows.length&&rows[0].progress) {
      const remote=rows[0].progress;
      const localPdfResources=state.resources.filter(item=>item.fileId);
      const remoteResources=Array.isArray(remote.resources)?remote.resources.filter(item=>!item.fileId):[];
      state={...structuredCloneFallback(BASE),...remote,profile:{...BASE.profile,...(remote.profile||{})},career:{...BASE.career,...(remote.career||{})},resources:[...remoteResources,...localPdfResources]};
      cloudSyncStatus="Account progress loaded";
      persist();
    } else {
      if(state.demo) state=structuredCloneFallback(BASE);
      await saveCloudProgress();
    }
  }
  async function recordCloudLogin() {
    await cloudRequest("rpc/record_login",{method:"POST",body:"{}"});
  }
  async function authenticate(form) {
    if(!supabaseReady()) { toast("Cloud login is not set up yet. Add the Supabase project URL and anon key to the GitHub Pages deployment settings."); return; }
    const data=new FormData(form);
    const email=String(data.get("email")||"").trim();
    const password=String(data.get("password")||"");
    if(!email||password.length<8) { toast("Enter a valid email and a password of at least 8 characters."); return; }
    const mode=String(data.get("mode")||"signin");
    const button=form.querySelector('button[type="submit"]');
    if(button) { button.disabled=true; button.textContent=mode==="signup"?"Creating account…":"Signing in…"; }
    try {
      const result=mode==="signup"
        ?await authRequest("signup",{email,password,data:{name:String(data.get("name")||"").trim()}})
        :await authRequest("token?grant_type=password",{email,password});
      if(!result.access_token) {
        toast("Account created. Check your email to confirm it, then sign in here.");
        state.authMode="signin"; persist(); render(); return;
      }
      const session={...result,expires_at:result.expires_at||Math.floor(Date.now()/1000)+(result.expires_in||3600)};
      setCloudSession(session);
      if(state.demo) state=structuredCloneFallback(BASE);
      await recordCloudLogin();
      await loadCloudProgress();
      state.view="dashboard";
      cloudSyncStatus="Account connected";
      persist(); render(); toast(`Signed in as ${session.user.email}. Your progress is syncing to your account.`);
    } catch(error) {
      console.error("Enginex account authentication failed.",error);
      toast(`Account request failed: ${error.message}`);
    } finally {
      if(button?.isConnected) { button.disabled=false; button.textContent=mode==="signup"?"Create account":"Sign in"; }
    }
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
  function formatFileSize(bytes) { return bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`; }
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
    if (state.view === "coding-challenge") startChallengeClock();
    else stopChallengeClock();
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
      <header class="landing-nav"><a class="brand" href="#" data-view="landing"><span class="brand-mark">E</span><span><span class="brand-word">ENGINEX</span><span class="brand-tagline" style="display:block">Learn. Practice. Recall. Master.</span></span></a><nav class="landing-links"><a href="#features">Features</a><a href="#subjects">Subjects</a><button class="button button-quiet" data-action="account-settings">${cloudSession?"Account &amp; Sync":"Sign in"}</button><button class="button button-quiet" data-action="explore">Explore Dashboard</button></nav></header>
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
  function challengeDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
  }
  function challengeYesterdayKey(date) {
    const yesterday=new Date(date);
    yesterday.setDate(yesterday.getDate()-1);
    return challengeDateKey(yesterday);
  }
  function challengeSession() {
    const now=new Date();
    const today=challengeDateKey(now);
    if(now.getHours()>=22&&state.codingChallenge.lastReleaseDate!==today) {
      state.codingChallenge.lastReleaseDate=today;
      persist();
    }
    const releaseDate=state.codingChallenge.lastReleaseDate;
    const available=releaseDate===today||releaseDate===challengeYesterdayKey(now);
    return {now,today,releaseDate,available};
  }
  function selectedChallenge(releaseDate) {
    const challengeState=state.codingChallenge;
    const completed=challengeState.completedTopics.filter(index=>Number.isInteger(index)&&index>=0&&index<7);
    if(!completed.length) return null;
    if(!completed.includes(challengeState.topic)) challengeState.topic=completed[0];
    const candidates=C_CHALLENGES.filter(item=>item.topic===challengeState.topic&&item.difficulty===challengeState.difficulty);
    if(!candidates.length) return null;
    const seed=Array.from(`${releaseDate}:${challengeState.difficulty}:${challengeState.topic}`).reduce((sum,char)=>(sum*31+char.charCodeAt(0))>>>0,7);
    return candidates[seed%candidates.length];
  }
  function challengeCountdown(now) {
    const next=new Date(now);
    next.setHours(22,0,0,0);
    if(now>=next) next.setDate(next.getDate()+1);
    const total=Math.max(0,Math.floor((next-now)/1000));
    return `${String(Math.floor(total/3600)).padStart(2,"0")}:${String(Math.floor(total%3600/60)).padStart(2,"0")}:${String(total%60).padStart(2,"0")}`;
  }
  function codingChallengePage() {
    const session=challengeSession();
    const challengeState=state.codingChallenge;
    const completed=challengeState.completedTopics.filter(index=>Number.isInteger(index)&&index>=0&&index<7);
    const activeChallenge=session.available?selectedChallenge(session.releaseDate):null;
    const attempt=state.codingChallenge.attempts.find(item=>item.releaseDate===session.releaseDate);
    const completedLabels=completed.map(index=>esc(SUBJECTS[1].topics[index])).join(", ");
    return `${pageHeading("Daily coding practice","Nightly C challenge","One small C-programming problem unlocks at 10 PM using only topics you have marked complete.",`<span class="pill ${session.available?"pill-green":"pill-amber"}">${session.available?"● AVAILABLE":"10 PM LOCAL RELEASE"}</span>`)}
      <div class="challenge-layout">
        <section class="card challenge-main">
          ${!session.available?`<div class="challenge-lock"><span class="feature-icon">◷</span><div><h2>Tonight's challenge unlocks in</h2><strong id="coding-challenge-countdown">${challengeCountdown(session.now)}</strong><p>Enginex uses your device's local time. Keep this page open to see the countdown; challenges become available here at 10 PM.</p></div></div>`:
            !completed.length?`<div class="empty-state"><span class="feature-icon">⌨</span><strong>Choose your completed C topics first</strong><p>Mark one or more concepts as complete in the checklist. Enginex will only select challenge questions from those topics.</p></div>`:
            !activeChallenge?`<div class="notice">No challenge is available for this topic and level yet. Choose a different completed topic or difficulty.</div>`:
            `<div class="card-heading"><div><div class="eyebrow">${esc(challengeState.difficulty)} · ${esc(SUBJECTS[1].topics[activeChallenge.topic])}</div><h2>${esc(activeChallenge.title)}</h2><p>Release date ${esc(session.releaseDate)} · One challenge per nightly release</p></div><span class="pill pill-green">C PROGRAMMING</span></div>
             <p class="challenge-prompt">${esc(activeChallenge.prompt)}</p>
             <label class="field-label" for="challenge-answer">${attempt?"Your saved answer":"Your solution (saved on this device)"}</label>
             <textarea id="challenge-answer" class="textarea code-input challenge-editor" ${attempt?"readonly":""} placeholder="Write your C code here...">${esc(attempt?.answer||activeChallenge.starter)}</textarea>
             ${attempt?`<div class="question-feedback">${attempt.result==="solved"?"Marked as solved by you.":"You chose to reveal the solution."} This is self-reported; Enginex does not compile or automatically grade C code in the browser.</div>`:
               `<div class="challenge-actions"><button class="button button-primary" type="button" data-action="challenge-solved" data-id="${esc(activeChallenge.id)}">I solved it</button><button class="button button-quiet" type="button" data-action="challenge-solution" data-id="${esc(activeChallenge.id)}">Reveal solution &amp; finish</button></div>`}
             <details class="solution-details" ${attempt?.showSolution?"open":""}><summary>Show Solution</summary><pre class="challenge-solution"><code>${esc(activeChallenge.solution)}</code></pre><p>${esc(activeChallenge.explanation)}</p></details>`}
        </section>
        <aside class="card challenge-settings">
          <div class="card-heading"><div><h2>Challenge settings</h2><p>Only released challenges can be submitted.</p></div></div>
          <form data-form="challenge-topics">
            <fieldset class="challenge-topic-list"><legend class="field-label">Topics you have completed</legend>
              ${SUBJECTS[1].topics.slice(0,7).map((topic,index)=>`<label class="challenge-topic"><input type="checkbox" name="completedTopic" value="${index}" ${completed.includes(index)?"checked":""}><span>${esc(topic)}</span></label>`).join("")}
            </fieldset>
            <button class="button button-quiet button-small" type="submit">Save completed topics</button>
          </form>
          <div class="form-field challenge-select"><label class="field-label" for="challenge-level">Difficulty</label><select id="challenge-level" class="select" data-challenge-level ${attempt||!session.available?"disabled":""}>${["Beginner","Intermediate","Advanced"].map(level=>`<option ${challengeState.difficulty===level?"selected":""}>${level}</option>`).join("")}</select></div>
          <div class="form-field challenge-select"><label class="field-label" for="challenge-topic">Question topic</label><select id="challenge-topic" class="select" data-challenge-topic ${attempt||!session.available||!completed.length?"disabled":""}>${completed.map(index=>`<option value="${index}" ${challengeState.topic===index?"selected":""}>${esc(SUBJECTS[1].topics[index])}</option>`).join("")||`<option value="">Mark a completed topic</option>`}</select></div>
          <p class="field-help">Today's selection is stable for this date, level, and topic. Solutions stay collapsed until you choose to reveal them.</p>
          <div class="challenge-history"><strong>Past challenge attempts</strong>${state.codingChallenge.attempts.length?`<ul>${state.codingChallenge.attempts.slice(-5).reverse().map(item=>`<li>${esc(item.releaseDate)} · ${esc(item.title)} · ${item.result==="solved"?"marked solved":"solution revealed"}</li>`).join("")}</ul>`:`<p class="field-help">Your attempts will appear here.</p>`}</div>
        </aside>
      </div>`;
  }
  function startChallengeClock() {
    stopChallengeClock();
    challengeClock=window.setInterval(()=>{
      const session=challengeSession();
      const renderedAsAvailable=!document.querySelector(".challenge-lock");
      if(session.available!==renderedAsAvailable) {
        render();
        return;
      }
      const countdown=document.getElementById("coding-challenge-countdown");
      if(countdown) countdown.textContent=challengeCountdown(session.now);
    },1000);
  }
  function stopChallengeClock() {
    if(challengeClock) { window.clearInterval(challengeClock); challengeClock=null; }
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
  function getDailySubjectiveSheet(subjectId, limit = 20) {
    const base = Array.isArray(TOPICS[subjectId]?.dpp) ? [...TOPICS[subjectId].dpp] : [];
    const extras = {
      c: [
        ["Programming", "Write a C program to print the first 10 natural numbers in ascending order.", "#include <stdio.h>\nint main() {\n  for (int i = 1; i <= 10; ++i) {\n    printf(\"%d\\n\", i);\n  }\n  return 0;\n}", "Use a loop and print each value with `%d` on a new line.", "Coding/Syntax", 5],
        ["Programming", "Write a C function that returns the larger of two integers.", "int max(int a, int b) { return (a > b) ? a : b; }", "You can compare the two inputs and return the greater value.", "Coding/Syntax", 5],
        ["Conceptual", "What is the difference between `==` and `=` in C?", "`==` compares two values; `=` assigns a value.", "The equality operator checks whether two operands are equal, whereas the assignment operator stores a value into a variable.", "Conceptual", 4],
        ["Programming", "Write a C program to calculate the sum of numbers from 1 to 20.", "#include <stdio.h>\nint main() {\n  int sum = 0;\n  for (int i = 1; i <= 20; ++i) sum += i;\n  printf(\"%d\\n\", sum);\n  return 0;\n}", "Accumulate the running total in a loop and print the final total after the loop ends.", "Coding/Syntax", 5],
        ["Tracing", "Predict the output of:\nint a = 2;\nint b = 5;\nprintf(\"%d\", a + b);", "7", "The expression adds the two integers and prints their sum.", "Logic", 4],
        ["Programming", "Write a C program to find whether a number is even or odd.", "#include <stdio.h>\nint main() {\n  int n = 7;\n  if (n % 2 == 0) printf(\"Even\\n\");\n  else printf(\"Odd\\n\");\n  return 0;\n}", "Check the remainder after division by 2; zero means even and non-zero means odd.", "Coding/Syntax", 5]
      ],
      electronics: [
        ["Programming", "Explain how a 5 V source and 1 kΩ resistor determine current in a simple DC circuit.", "I = V/R = 5 V / 1000 Ω = 0.005 A = 5 mA.", "Use Ohm's law to compute current; convert to milliamps when needed.", "Calculation", 5],
        ["Conceptual", "Why does a diode conduct in forward bias but block current in reverse bias?", "Forward bias reduces the depletion barrier, while reverse bias widens it.", "The diode's PN junction barrier is lowered under forward bias and increased under reverse bias.", "Conceptual", 4]
      ]
    };
    const pool = [...base, ...(extras[subjectId] || [])];
    const results = [...pool];
    while (results.length < limit) {
      const fallback = [
        ["Conceptual", `Review and rewrite the main idea of this topic in your own words.`, "Use a concise explanation based on your lecture notes.", "This is a reflection question designed to check your understanding.", "Conceptual", 5],
        ["Application", `Apply one formula or rule from this subject to a short example and explain the result.`, "State the formula, substitute the values, and interpret the result.", "Work step-by-step and highlight the key idea behind the calculation.", "Calculation", 5],
        ["Programming", `Write a short answer or pseudocode that explains your method for solving this problem.`, "Describe the steps clearly and show the logic used.", "Good answers show the method and the final outcome, not just a number.", "Coding/Syntax", 5]
      ][results.length % 3];
      results.push(fallback);
    }
    return results.slice(0, limit);
  }

  function openDailyDppPdf(taskId) {
    const task = state.tasks.find(item => item.id === taskId) || selectedTask();
    if (!task) return;
    const subject = subjectById(task.subjectId);
    const sheet = getDailySubjectiveSheet(subject.id, 20);
    dialog.innerHTML = `
      <div class="dialog-content print-sheet" style="max-width: 850px; width: min(90vw, 850px);">
        <div class="card-heading" style="margin-bottom:16px; align-items:flex-start;">
          <div>
            <div class="eyebrow">Daily subjective sheet</div>
            <h2 style="margin:0; font-size: clamp(22px, 2.3vw, 30px);">${esc(subject.short)} · ${esc(task.title)}</h2>
            <p style="margin:8px 0 0; color: var(--muted);">Answer these questions in your notebook or export to PDF.</p>
          </div>
          <button class="button button-primary" type="button" data-action="print-dpp-sheet">Print / Save PDF</button>
        </div>
        <div class="daily-dpp-sheet">
          ${sheet.map((item, index) => `
            <article class="print-question">
              <div class="question-meta">
                <span class="pill">Q${index + 1}</span>
                <span class="pill ${(item[0] === "Programming" || item[0] === "PYQ-Style Practice") ? "pill-amber" : ""}">${esc(item[0])}</span>
                <span class="pill">${Number(item[5] ?? 5)} marks</span>
              </div>
              <h4>${esc(item[1])}</h4>
              <div class="print-answer-box">Write your answer here…</div>
            </article>
          `).join("")}
        </div>
      </div>
    `;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "open");
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
    const dppMarks=data.dpp.reduce((sum,item)=>sum+item[5],0);
    const learningMinutes=Math.round(task.duration*.35);
    const recallMinutes=Math.round(task.duration*.1);
    const practiceMinutes=Math.round(task.duration*.45);
    const reviewMinutes=task.duration-learningMinutes-recallMinutes-practiceMinutes;
    const dailySheet = getDailySubjectiveSheet(subject.id, 20);
    return `${pageHeading(`ASSIGNED TASK · DAY ${String(task.day).padStart(2,"0")}`, "Today's learning session", "Learn a concept, retrieve it from memory, then apply it in practice.", `<button class="button ${done?"button-quiet":"button-primary"}" data-action="${done?"undo-task":"complete-task"}" data-id="${task.id}">${done?"✓ Completed":"Complete task"}</button>`)}
      ${state.demo ? `<div class="notice" style="margin-bottom:13px"><strong>Illustrative task:</strong> sample starter topic. Replace it with your syllabus during setup for a course-aligned plan.</div>` : ""}
      <div class="notice" style="margin-bottom:13px"><strong>Course alignment:</strong> this prototype's sample question pack checks foundational ideas for the selected subject. Confirm topic-specific details against your syllabus and lecture notes.</div>
      <div class="task-layout"><div class="task-main">
        <section class="task-banner"><div class="eyebrow" style="color:#b4d9bb">${esc(subject.short)}</div><h2>${esc(task.title)}</h2><p>Build understanding, practise retrieval and check your work. Use your official lecture notes as the source of truth.</p><div class="task-detail-grid"><div class="task-detail"><span>Duration</span><strong>${durationText(task.duration)}</strong></div><div class="task-detail"><span>Schedule slot</span><strong>${timeLabel(task.startTime)}</strong></div><div class="task-detail"><span>Difficulty</span><strong>${esc(task.difficulty)}</strong></div><div class="task-detail"><span>Progress</span><strong>${done?"Complete":session?"In progress":"Not started"}</strong></div></div></section>
        <section class="content-block"><h3>📚 Lecture summary &amp; key takeaways</h3><p><strong>Core concepts</strong></p><ul>${data.summary.map(line=>`<li>${esc(line)}</li>`).join("")}</ul><p><strong>Key formulas / code / rules</strong><br>${esc(data.rule)}</p><p><strong>Learning outcomes</strong></p><ul><li>Explain the central idea of ${esc(task.title)} without notes.</li><li>Apply one relevant rule or method to an unfamiliar example.</li><li>Identify and correct one common misconception or mistake.</li></ul></section>
        <section class="content-block"><div class="card-heading"><div><h3 style="margin:0">🧠 Active recall · Flash quiz</h3><p style="margin:5px 0 0">Exactly 3 questions · try from memory before checking.</p></div>${quizResult?`<span class="pill pill-green">Score ${quizResult.score}/${quizResult.total}</span>`:""}</div>
          <form data-form="quiz" data-task="${task.id}">${data.quiz.map((item,index)=>`<div class="question-card"><div class="question-meta"><span class="pill">Q${index+1} · Concept check</span></div><h4>${esc(item[0])}</h4><div class="quiz-options">${item[1].map((option,optionIndex)=>`<label class="quiz-option"><input type="radio" name="quiz-${task.id}-${index}" value="${optionIndex}" ${quizResult?"disabled":""} required><span>${esc(option)}</span></label>`).join("")}</div>${quizResult?`<div class="question-feedback ${quizResult.answers[index]===item[2]?"":"incorrect"}">${quizResult.answers[index]===item[2]?"Correct. ":"Review this idea. "}${esc(item[3])}</div>`:""}</div>`).join("")}${quizResult?"":`<button class="button button-primary button-small" style="margin-top:11px" type="submit">Submit flash quiz</button>`}</form>
        </section>
        <section class="content-block"><div class="card-heading"><div><h3 style="margin:0">📝 Daily practice problems</h3><p style="margin:5px 0 0">Exactly ${data.dpp.length} questions · ${dppMarks} marks total</p></div>${dppResult?`<span class="pill pill-green">Self-check ${dppResult.score}/${dppResult.total}</span>`:""}</div>
          ${data.dpp.map((item,index)=>{
            const isPyq = item[0] === "PYQ-Style Practice";
            const title = isPyq ? `PYQ-Style Practice · ${item[1]}` : item[1];
            return `<article class="question-card"><div class="question-meta"><span class="pill ${isPyq ? "pill-amber" : ""}">Q${index + 1} · ${esc(item[0])}</span><span class="pill">${item[5]} marks</span><span class="pill">${item[5] >= 5 ? "Advanced" : item[5] >= 3 ? "Moderate" : "Foundation"}</span></div><h4>${esc(title)}</h4><label class="field-label" for="dpp-${task.id}-${index}">Your answer</label><textarea class="answer-input ${subject.id === "c" ? "code-input" : ""}" id="dpp-${task.id}-${index}" data-dpp-answer="${index}" ${subject.id === "c" ? 'spellcheck="false"' : ""} ${dppResult ? "disabled" : ""} placeholder="Work it out first, then enter a concise answer…">${dppResult ? esc(dppResult.answers[index] || "") : ""}</textarea>${dppResult ? `<div class="question-feedback ${dppResult.checks[index] ? "" : "incorrect"}">${dppResult.checks[index] ? "Self-marked correct. " : "Review recommended. "}Self-assessment recorded · ${esc(dppResult.mistakes[index] || "No mistake logged")}</div><details class="solution-details"><summary>Show Solution</summary><p>Expected answer: ${esc(item[2])}. ${esc(item[3])}</p></details>` : `<div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:8px"><label><span class="field-label">Self-check</span><select class="select" data-dpp-check="${index}"><option value="">Choose result</option><option value="correct">I got it right</option><option value="review">Needs review</option></select></label><label><span class="field-label">Mistake category, if needed</span><select class="select" data-dpp-mistake="${index}"><option value="">Select category</option>${["Conceptual","Calculation","Coding/Syntax","Logic","Formula recall","Misinterpretation","Careless error"].map(x => `<option>${x}</option>`).join("")}</select></label></div><details class="solution-details"><summary>Show Solution</summary><p>${esc(item[3])}</p></details>`}</article>`;
          }).join("")}
          ${dppResult?"":`<div class="notice" style="margin:10px 0">Attempt all 20 focused questions, check each answer against its hidden solution, then submit your self-assessment. Open responses are not scored by AI in this browser prototype.</div><button class="button button-primary button-small" data-action="submit-dpp" data-id="${task.id}">Check my answers</button>`}
        </section>
        <section class="content-block">
          <div class="card-heading">
            <div>
              <h3 style="margin:0">📄 Daily subjective PDF</h3>
              <p style="margin:5px 0 0">20 prepared questions for today, including programming practice.</p>
            </div>
            <button class="button button-primary button-small" data-action="daily-dpp-pdf" data-id="${task.id}">Download PDF</button>
          </div>
          <ol class="daily-dpp-quick-list">
            ${dailySheet.map((item, index) => `<li><strong>Q${index + 1}</strong> · ${esc(item[0])}: ${esc(item[1])}</li>`).join("")}
          </ol>
        </section>
      </div><aside class="task-aside">
        <section class="card"><div class="card-heading"><div><h2>Study execution plan</h2><p>Fits your available study hours</p></div></div><div class="upcoming-list"><div class="upcoming-item"><div class="upcoming-date"><strong>${learningMinutes}</strong><span>MIN</span></div><div><h4>Learning</h4><p>Understand ideas and examples</p></div></div><div class="upcoming-item"><div class="upcoming-date"><strong>${recallMinutes}</strong><span>MIN</span></div><div><h4>Active recall</h4><p>Answer 3 quiz prompts</p></div></div><div class="upcoming-item"><div class="upcoming-date"><strong>${practiceMinutes}</strong><span>MIN</span></div><div><h4>Daily practice</h4><p>Work through 20 focused problems</p></div></div><div class="upcoming-item"><div class="upcoming-date"><strong>${reviewMinutes}</strong><span>MIN</span></div><div><h4>Mistake review</h4><p>Log the next revision target</p></div></div></div></section>
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
  function careerDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
  }
  function nextCareerSessions() {
    const today=new Date();
    today.setHours(0,0,0,0);
    const sessions=[];
    for(let offset=0;offset<14&&sessions.length<3;offset++) {
      const date=new Date(today);
      date.setDate(today.getDate()+offset);
      if([5,6,0].includes(date.getDay())) sessions.push(date);
    }
    return sessions;
  }
  function careerPage() {
    const schedule=nextCareerSessions();
    const completed=new Set(state.career.completedSessions||[]);
    const weekOffset=date=>{
      const today=new Date();
      today.setHours(0,0,0,0);
      return Math.floor((date.getTime()-today.getTime())/604800000);
    };
    const sessionCards=schedule.map(date=>{
      const key=careerDateKey(date);
      const start=date.getDay()===5?state.profile.studyStart:state.profile.weekendStudyStart;
      const week=weekOffset(date);
      return `<article class="career-day"><div class="career-day-heading"><div><span class="eyebrow">${localDate(date)}</span><h3>${date.toLocaleDateString(undefined,{weekday:"long"})}</h3></div><span class="pill">6 focused hours</span></div><div class="career-track-list">${CAREER_TRACKS.map(track=>{
        const sessionId=`${key}-${track.id}`;
        const done=completed.has(sessionId);
        const topic=track.topics[week%track.topics.length];
        const trackStart=track.id==="fullstack"?start:addMinutesToTime(start,180);
        return `<div class="career-session ${done?"completed":""}"><div class="career-session-icon">${track.icon}</div><div class="career-session-info"><strong>${esc(track.name)}</strong><p>${esc(topic)}</p><span>${timeLabel(trackStart)} · 3 hours</span></div><button class="button ${done?"button-quiet":"button-primary"} button-small" data-action="toggle-career-session" data-id="${sessionId}">${done?"Completed ✓":"Mark complete"}</button></div>`;
      }).join("")}</div></article>`;
    }).join("");
    const projects=state.career.projects||[];
    return `${pageHeading("Your growth tracks","Web development &amp; C++ DSA","A dedicated Full-Stack and Data Structures &amp; Algorithms routine, with a portfolio to track your builds.",`<button class="button button-primary" data-action="add-project">＋ Add portfolio project</button>`)}
      <div class="notice career-hours-notice"><strong>Dedicated schedule:</strong> Friday, Saturday, and Sunday · 3 hours for each track per day (6 extra focused hours total). Friday starts at your weekday study time; Saturday and Sunday start at your weekend study time. These blocks are additional to your regular study plan.</div>
      <section class="career-section"><div class="card-heading"><div><h2>Upcoming weekend sessions</h2><p>Progress through a 12-week Full-Stack and C++ DSA curriculum.</p></div></div><div class="career-schedule">${sessionCards}</div></section>
      <section class="career-section"><div class="card-heading"><div><h2>My project portfolio</h2><p>Add projects you build and keep demo/source links together.</p></div><span class="pill">${projects.length} project${projects.length===1?"":"s"}</span></div>
        ${projects.length?`<div class="portfolio-grid">${projects.map(project=>`<article class="portfolio-card"><div class="portfolio-card-top"><span class="pill ${project.status==="Completed"?"pill-green":"pill-amber"}">${esc(project.status||"In progress")}</span><div class="portfolio-actions"><button class="button button-quiet button-small" data-action="edit-project" data-id="${project.id}">Edit</button><button class="icon-button" data-action="delete-project" data-id="${project.id}" aria-label="Remove ${esc(project.title)}">×</button></div></div><h3>${esc(project.title)}</h3><p>${esc(project.description||"No project description added yet.")}</p>${project.technologies?`<div class="portfolio-tech">${esc(project.technologies)}</div>`:""}<div class="portfolio-links">${project.demoUrl?`<a href="${esc(project.demoUrl)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>`:""}${project.repoUrl?`<a href="${esc(project.repoUrl)}" target="_blank" rel="noopener noreferrer">Source code ↗</a>`:""}</div></article>`).join("")}</div>`:`<div class="empty-state"><strong>Your portfolio starts with a project</strong><p>Track the websites and apps you build during the Full-Stack sessions.</p><button class="button button-primary button-small" data-action="add-project">＋ Add your first project</button></div>`}
      </section>`;
  }
  function resourcesPage() {
    const items=state.resources.filter(item=>(state.resourceFilter==="All"||item.category===state.resourceFilter)&&(!state.search||`${item.title} ${item.category} ${item.fileName||""} ${item.detail||""}`.toLowerCase().includes(state.search.toLowerCase())));
    return `${pageHeading("Your learning library","Resources","Organize syllabus files, lectures, reference links and verified past papers.",`<button class="button button-primary" data-action="add-resource">＋ Add resource</button>`)}
      <div class="card"><div class="resource-filter"><input class="field" style="max-width:260px" type="search" placeholder="Search resources" data-resource-search value="${esc(state.search)}"><select class="select" data-resource-filter>${["All","Syllabus","Lecture","YouTube","Books (PDF)","Notes (PDF)","Notes","PYQs","Reference Material"].map(x=>`<option ${state.resourceFilter===x?"selected":""}>${x}</option>`).join("")}</select></div>
      ${items.length?`<div class="resource-list">${items.map(item=>{const embed=item.category==="YouTube"?youtubeEmbed(item.url):null;const isPdf=Boolean(item.fileId);return `<article class="resource-entry"><div class="resource-row"><span class="resource-icon">${item.category==="YouTube"?"▶":item.category==="Syllabus"?"▤":item.category==="PYQs"?"◎":isPdf?"PDF":"▧"}</span><div><h3>${esc(item.title)} <span class="pill">${item.category==="PYQs"?"PYQ source · unverified":esc(item.category)}</span></h3><p>${item.pyq?`${esc(item.pyq.university)} · ${esc(item.pyq.year)} · ${esc(item.pyq.subject)} · ${esc(item.pyq.marks)} marks · `:""}${esc(item.fileName||item.detail||item.type||"Added resource")}${item.fileSize?` · ${formatFileSize(item.fileSize)}`:""} · ${localDate(new Date(item.createdAt||Date.now()))}</p></div><div style="display:flex;align-items:center;gap:8px">${isPdf?`<button class="button button-primary button-small" data-action="open-resource-pdf" data-id="${item.id}">Open PDF ↗</button>`:item.category==="YouTube"?(embed?`<button class="button button-primary button-small" data-action="toggle-video" data-id="${item.id}">${state.playingResourceId===item.id?"Close player":"▶ Play here"}</button>`:`<span class="pill pill-amber">Unsupported YouTube link</span>`):item.url?`<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">Open ↗</a>`:""}<button class="icon-button" data-action="delete-resource" data-id="${item.id}" aria-label="Remove ${esc(item.title)}">×</button></div></div>${state.playingResourceId===item.id&&embed?`<div class="video-player"><iframe src="${esc(embed.src)}" title="${esc(item.title)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Playing inside Enginex via YouTube's privacy-enhanced embed. Playback depends on the video's embedding permissions and your browser's network access.</p></div>`:""}</article>`;}).join("")}</div>`:empty("No resources in this view",state.resources.length?"Try another search or category.":"Add a syllabus, lecture link, PDF book, PDF notes, or reference material.")}
      <p class="field-help" style="margin-top:12px">PDF books and notes are saved in this browser and can be opened from your library. YouTube links with supported video or playlist IDs play inside Enginex. PDF files are not uploaded to a server or synced across devices.</p></div>`;
  }
  function settingsPage() {
    const tabs=["Profile","Schedule","Subjects & Exams","Preferences","Account & Sync","Data"];
    let body="";
    if (state.settingsTab==="Profile") body=`<form data-form="settings-profile"><div class="form-grid">${formInput("Name","name",state.profile.name,"text","Your name (optional)")}${formInput("University / College","institution",state.profile.institution,"text","Add your institution")}${formInput("Semester","semester",state.profile.semester,"text","e.g. Semester 1")}${formInput("Branch","branch",state.profile.branch,"text","e.g. Computer Engineering")}<div class="form-field"><label class="field-label" for="level">Current academic level</label><select class="select" id="level" name="level">${["New to these subjects","Some prior knowledge","Comfortable with fundamentals","Advanced / revision"].map(x=>`<option ${state.profile.level===x?"selected":""}>${x}</option>`).join("")}</select></div></div><button class="button button-primary" style="margin-top:16px">Save profile</button></form>`;
    else if (state.settingsTab==="Schedule") body=`<form data-form="settings-schedule"><div class="form-grid">${formInput("Weekday study hours","weekdayHours",state.profile.weekdayHours,"number","Maximum planned hours per weekday","1","16","0.5")}${formInput("Weekend study hours","weekendHours",state.profile.weekendHours,"number","Maximum planned hours per weekend day","1","16","0.5")}${formInput("Classes start","classStart",state.profile.classStart,"time","")}${formInput("Classes end","classEnd",state.profile.classEnd,"time","")}${formInput("Weekday study start","studyStart",state.profile.studyStart,"time","")}${formInput("Weekend study start","weekendStudyStart",state.profile.weekendStudyStart,"time","")}</div><button class="button button-primary" style="margin-top:16px">Save schedule</button></form><p class="field-help">Tasks are spaced across your selected weekday or weekend start time and daily study-hour budget. Weekday starts during class hours are rejected.</p>`;
    else if (state.settingsTab==="Subjects & Exams") body=`<form data-form="settings-subjects"><div class="form-field"><span class="field-label">Subjects</span><div class="choice-grid">${SUBJECTS.map(subject=>`<label class="choice"><input type="checkbox" name="subject" value="${subject.id}" ${state.profile.subjects.includes(subject.id)?"checked":""}><span><strong>${subject.name}</strong><span>${subject.topics.length} starter topics; verify against your syllabus.</span></span></label>`).join("")}</div></div><div class="form-grid" style="margin-top:15px">${formInput("Exam date","examDate",state.profile.examDate,"date","") }<div class="form-field"><label class="field-label" for="examType">Exam type</label><select class="select" id="examType" name="examType">${["Mid-semester","End-semester","Quiz","Practical","Other"].map(x=>`<option ${state.profile.examType===x?"selected":""}>${x}</option>`).join("")}</select></div><div class="form-field"><label class="field-label" for="targetLevel">Target preparation level</label><select class="select" id="targetLevel" name="targetLevel">${["Confident understanding","Pass comfortably","High distinction","Revise course material"].map(x=>`<option ${state.profile.targetLevel===x?"selected":""}>${x}</option>`).join("")}</select></div></div><button class="button button-primary" style="margin-top:16px">Save subjects &amp; exam</button></form>`;
    else if (state.settingsTab==="Preferences") body=`<form data-form="settings-preferences"><div class="form-field"><label class="field-label" for="theme">Theme</label><select class="select" id="theme" name="theme"><option ${state.theme==="Light"?"selected":""}>Light</option><option ${state.theme==="Dark"?"selected":""}>Dark</option></select></div><label class="choice" style="margin-top:12px;max-width:450px"><input type="checkbox" name="notifications" ${state.notifications?"checked":""}><span><strong>Study reminders</strong><span>Preference stored locally. Browser notifications require a notification service, which is not connected in this prototype.</span></span></label><button class="button button-primary" style="margin-top:16px">Save preferences</button></form>`;
    else if(state.settingsTab==="Account & Sync") {
      const configured=supabaseReady();
      const account=cloudSession?.user;
      body=account
        ?`<div class="notice"><strong>Signed in:</strong> ${esc(account.email||"Enginex account")}<br><span class="cloud-status">${esc(cloudSyncStatus)}</span></div><p class="small muted">Your profile, curriculum, attempts and progress are saved to your private account. Passwords are handled by Supabase Auth and are never stored by Enginex. Login timestamps are recorded separately; no IP address or password is stored in the login history.</p><button class="button button-quiet" data-action="sync-now">Sync now</button> <button class="button button-danger" data-action="sign-out">Sign out</button>`
        :configured
          ?`<div class="notice">Create an account to sync your Enginex progress across devices, or sign in to restore your saved plan and scores.</div><form data-form="cloud-auth" class="cloud-auth-form"><input type="hidden" name="mode" value="${state.authMode==="signup"?"signup":"signin"}">${state.authMode==="signup"?`<div class="form-field">${formInput("Name (optional)","name",state.profile.name)}</div>`:""}<div class="form-grid"><div class="form-field">${formInput("Email","email","","email","you@example.com")}</div><div class="form-field">${formInput("Password (at least 8 characters)","password","","password","")}</div></div><button class="button button-primary" type="submit">${state.authMode==="signup"?"Create account":"Sign in"}</button></form><button class="button button-quiet button-small auth-mode-toggle" data-action="toggle-auth-mode">${state.authMode==="signup"?"Already have an account? Sign in":"New to Enginex? Create an account"}</button><p class="field-help">Use your own secure password. Email confirmation may be required by the account provider. The login history stores only your account ID and sign-in time.</p>`
          :`<div class="notice"><strong>Cloud login is not configured yet.</strong> Create a Supabase project, run the SQL in <code>supabase/schema.sql</code>, and add the project URL and anon key as GitHub Actions secrets named <code>ENGINEX_SUPABASE_URL</code> and <code>ENGINEX_SUPABASE_ANON_KEY</code>. Redeploy from GitHub Actions to enable account creation and cross-device syncing.</div><p class="small muted">Until a project is connected, your progress stays in this browser's local storage. Never put a Supabase service-role key in this app or its repository.</p>`;
    } else body=`<div class="notice"><strong>Progress storage:</strong> ${cloudSession?"Your account is connected; the browser also keeps a local working copy.": "Without an account, your profile, plan, practice scores and resources are stored in this browser only."}${cloudSession?` Cloud status: ${esc(cloudSyncStatus)}.`:" A configured Supabase account enables private cloud sync and sign-in history."}</div>    <div style="margin-top:17px"><h3 style="font-size:12px">Reset curriculum</h3><p class="small muted">Remove this browser's saved Enginex profile, progress, curriculum, resources, career-track completion and portfolio projects. A later sync will also replace the signed-in account's progress data. This cannot be undone.</p><button class="button button-danger" data-action="reset-data">Reset all local data</button></div>`;
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
      case "coding-challenge": return codingChallengePage();
      case "career": return careerPage();
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
      toast(`Enter an answer and self-check all ${data.dpp.length} questions before submitting.`); return;
    }
    const score=data.dpp.reduce((sum,item,index)=>sum+(checks[index]?item[5]:0),0);
    const total=data.dpp.reduce((sum,item)=>sum+item[5],0);
    data.dpp.forEach((item,index)=>{
      if(!checks[index]) state.mistakes.push({type:mistakes[index]||item[4],subjectId:task.subjectId,taskId:task.id,date:new Date().toISOString()});
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
  function projectDialog(project=null) {
    const item=project||{title:"",description:"",technologies:"",demoUrl:"",repoUrl:"",status:"In progress"};
    dialog.innerHTML=`<div class="dialog-content"><div class="eyebrow">Project portfolio</div><h2>${project?"Edit project":"Add a portfolio project"}</h2><form id="project-form"><input type="hidden" name="projectId" value="${esc(project?.id||"")}"><div class="form-grid"><div class="form-field full"><label class="field-label" for="project-title">Project name</label><input class="field" id="project-title" name="title" required maxlength="100" value="${esc(item.title)}" placeholder="e.g. Personal portfolio site"></div><div class="form-field full"><label class="field-label" for="project-description">What did you build?</label><textarea class="textarea" id="project-description" name="description" maxlength="600" placeholder="Describe the problem, features, and what you learned.">${esc(item.description)}</textarea></div><div class="form-field full"><label class="field-label" for="project-technologies">Technologies</label><input class="field" id="project-technologies" name="technologies" maxlength="180" value="${esc(item.technologies)}" placeholder="HTML, CSS, JavaScript, React…"></div><div class="form-field"><label class="field-label" for="project-demo">Live demo URL (optional)</label><input class="field" id="project-demo" name="demoUrl" type="url" value="${esc(item.demoUrl)}" placeholder="https://…"></div><div class="form-field"><label class="field-label" for="project-repo">Source code URL (optional)</label><input class="field" id="project-repo" name="repoUrl" type="url" value="${esc(item.repoUrl)}" placeholder="https://github.com/…"></div><div class="form-field"><label class="field-label" for="project-status">Status</label><select class="select" id="project-status" name="status">${["In progress","Completed"].map(status=>`<option ${item.status===status?"selected":""}>${status}</option>`).join("")}</select></div></div><div class="dialog-actions"><button class="button button-quiet" type="button" data-action="close-dialog">Cancel</button><button class="button button-primary" type="submit">${project?"Save changes":"Add project"}</button></div></form></div>`;
    if(typeof dialog.showModal==="function") dialog.showModal(); else dialog.setAttribute("open","");
  }
  function saveProject(form) {
    const data=new FormData(form);
    const demoUrl=String(data.get("demoUrl")||"").trim();
    const repoUrl=String(data.get("repoUrl")||"").trim();
    if([demoUrl,repoUrl].some(url=>url&&!isValidUrl(url))) { toast("Project links must be valid HTTP or HTTPS URLs."); return; }
    const id=String(data.get("projectId")||"")||uid();
    const project={
      id,
      title:String(data.get("title")||"").trim(),
      description:String(data.get("description")||"").trim(),
      technologies:String(data.get("technologies")||"").trim(),
      demoUrl,
      repoUrl,
      status:String(data.get("status")||"In progress"),
      updatedAt:new Date().toISOString()
    };
    const current=state.career.projects||[];
    const existingIndex=current.findIndex(item=>item.id===id);
    if(existingIndex>=0) current[existingIndex]=project;
    else current.unshift(project);
    state.career.projects=current;
    persist(); dialog.close(); render();
    toast(existingIndex>=0?"Portfolio project updated.":"Portfolio project added.");
  }
  function addResourceDialog() {
    dialog.innerHTML=`<div class="dialog-content"><div class="eyebrow">Resource library</div><h2>Add a learning resource</h2><form id="resource-form"><div class="form-grid"><div class="form-field full"><label class="field-label" for="resource-title">Title</label><input class="field" id="resource-title" name="title" required maxlength="120" placeholder="Book title, lecture notes…"></div><div class="form-field"><label class="field-label" for="resource-category">Category</label><select class="select" id="resource-category" name="category" data-resource-category data-pyq-category>${["Syllabus","Lecture","YouTube","Books (PDF)","Notes (PDF)","Notes","PYQs","Reference Material"].map(item=>`<option>${item}</option>`).join("")}</select></div><div class="form-field" id="resource-url-field"><label class="field-label" for="resource-url">Resource / source URL</label><input class="field" id="resource-url" name="url" type="url" placeholder="https://…"></div><div class="form-field full" id="resource-pdf-field" hidden><label class="field-label" for="resource-pdf">PDF file</label><input class="field" id="resource-pdf" name="pdfFile" type="file" accept=".pdf,application/pdf"><span class="field-help">PDF only · up to 50 MB. Kept in this browser (IndexedDB).</span></div><div class="form-field full" id="pyq-fields" hidden><div class="notice">PYQ records remain <strong>unverified references</strong> in this prototype. Providing source details does not make Enginex claim authenticity.</div><div class="form-grid" style="margin-top:10px">${formInput("University / College","pyqUniversity","","text","")}${formInput("Paper year","pyqYear","","number","", "1900",String(new Date().getFullYear()))}${formInput("Subject","pyqSubject","","text","")}${formInput("Marks","pyqMarks","","number","", "1","100","1")}</div></div><div class="form-field full"><label class="field-label" for="resource-detail">Note (optional)</label><textarea class="textarea" id="resource-detail" name="detail" placeholder="Source, topic, or notes…"></textarea></div></div><div class="dialog-actions"><button class="button button-quiet" type="button" data-action="close-dialog">Cancel</button><button class="button button-primary">Save resource</button></div></form></div>`;
    if(typeof dialog.showModal==="function") dialog.showModal(); else dialog.setAttribute("open","");
    updateResourceFormFields();
  }
  function updateResourceFormFields() {
    const category=document.getElementById("resource-category")?.value||"";
    const isPdf=PDF_RESOURCE_CATEGORIES.includes(category);
    const urlField=document.getElementById("resource-url-field");
    const urlInput=document.getElementById("resource-url");
    const pdfField=document.getElementById("resource-pdf-field");
    const pdfInput=document.getElementById("resource-pdf");
    const pyqFields=document.getElementById("pyq-fields");
    if(urlField) urlField.hidden=isPdf;
    if(urlInput) { urlInput.disabled=isPdf; urlInput.required=category==="PYQs"; }
    if(pdfField) pdfField.hidden=!isPdf;
    if(pdfInput) pdfInput.required=isPdf;
    if(pyqFields) pyqFields.hidden=category!=="PYQs";
  }
  async function saveResource(form) {
    const data=new FormData(form);
    const url=String(data.get("url")||"").trim();
    if(url&&!isValidUrl(url)) { toast("Enter a valid HTTP or HTTPS resource link."); return; }
    const category=String(data.get("category"));
    const detail=String(data.get("detail")||"").trim();
    const file=data.get("pdfFile");
    const isPdf=PDF_RESOURCE_CATEGORIES.includes(category);
    if(isPdf&&(!(file instanceof File)||file.size===0)) { toast("Choose the PDF file you want to add."); return; }
    if(isPdf&&file.size>MAX_RESOURCE_PDF_BYTES) { toast("This PDF is larger than the 50 MB limit."); return; }
    if(isPdf&&!file.name.toLowerCase().endsWith(".pdf")) { toast("Choose a file with a .pdf extension."); return; }
    if(isPdf) {
      try {
        const signature=await file.slice(0,5).text();
        if(signature!=="%PDF-") { toast("That file does not appear to be a valid PDF."); return; }
      } catch(error) {
        console.error("Enginex could not validate the selected PDF.",error);
        toast("Could not read the selected PDF. Try choosing it again.");
        return;
      }
    }
    let pyq=null;
    if(category==="PYQs") {
      pyq={university:String(data.get("pyqUniversity")||"").trim(),year:String(data.get("pyqYear")||"").trim(),subject:String(data.get("pyqSubject")||"").trim(),marks:String(data.get("pyqMarks")||"").trim()};
      if(Object.values(pyq).some(value=>!value)||!url) { toast("A PYQ reference needs its university, year, subject, marks, and source URL."); return; }
      if(Number(pyq.year)<1900||Number(pyq.year)>new Date().getFullYear()||Number(pyq.marks)<1||Number(pyq.marks)>100) { toast("Check the PYQ year and marks."); return; }
    }
    const id=uid();
    if(isPdf) {
      try {
        await storeResourcePdf(id,file);
      } catch(error) {
        console.error("Enginex could not save the selected PDF.",error);
        toast(`Could not save this PDF in browser storage: ${error.message}`);
        return;
      }
    }
    state.resources.unshift({id,title:String(data.get("title")).trim(),category,type:isPdf?"pdf":url?"link":"note",url:isPdf?"":url,detail,pyq,sourceVerified:false,fileId:isPdf?id:"",fileName:isPdf?file.name:"",fileSize:isPdf?file.size:0,createdAt:new Date().toISOString()});
    persist(); dialog.close(); render();
    toast(isPdf?"PDF saved in your browser's resource library.":category==="PYQs"?"PYQ reference saved as unverified; source authenticity has not been checked.":"Resource saved.");
  }
  async function openResourcePdf(id) {
    try {
      const blob=await getResourcePdf(id);
      if(!blob) throw new Error("The PDF file is missing from this browser. It may have been cleared from browser storage.");
      if(resourcePdfObjectUrl) URL.revokeObjectURL(resourcePdfObjectUrl);
      resourcePdfObjectUrl=URL.createObjectURL(blob);
      const resource=state.resources.find(item=>item.id===id);
      dialog.classList.add("resource-pdf-dialog");
      dialog.innerHTML=`<div class="dialog-content"><div class="card-heading"><div><div class="eyebrow">PDF resource</div><h2 style="margin:4px 0 0">${esc(resource?.title||"Saved PDF")}</h2></div><button class="button button-quiet" type="button" data-action="close-dialog">Close</button></div><iframe class="resource-pdf-preview" src="${esc(resourcePdfObjectUrl)}" title="${esc(resource?.title||"Saved PDF")}"></iframe></div>`;
      if(typeof dialog.showModal==="function") dialog.showModal(); else dialog.setAttribute("open","");
    } catch(error) {
      console.error("Enginex could not open the saved PDF.",error);
      toast(`Could not open this PDF: ${error.message}`);
    }
  }
  async function removeResource(id) {
    const resource=state.resources.find(item=>item.id===id);
    if(!resource) { toast("This resource is no longer in the library."); return; }
    if(resource.fileId) {
      try {
        await deleteResourcePdf(resource.fileId);
      } catch(error) {
        console.error("Enginex could not remove the saved PDF.",error);
        toast(`Could not remove the PDF file: ${error.message}`);
        return;
      }
    }
    state.resources=state.resources.filter(item=>item.id!==id);
    persist();
    if(dialog.open) dialog.close();
    render();
    toast("Resource removed.");
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
      case "daily-dpp-pdf": openDailyDppPdf(id); break;
      case "print-dpp-sheet": {
        const printable = document.querySelector(".print-sheet");
        if (printable) {
          window.print();
        } else {
          toast("Open the PDF sheet first to print it.");
        }
        break;
      }
      case "begin-test": startTest(); break;
      case "test-previous": state.testSession.current=Math.max(0,state.testSession.current-1); persist(); render(); break;
      case "test-next": state.testSession.current=Math.min(9,state.testSession.current+1); persist(); render(); break;
      case "test-jump": state.testSession.current=Number(button.dataset.index); persist(); render(); break;
      case "test-review": { const index=state.testSession.current; state.testSession.review=state.testSession.review.includes(index)?state.testSession.review.filter(x=>x!==index):[...state.testSession.review,index]; persist(); render(); break; }
      case "submit-test": showTestSubmit(false); break;
      case "challenge-solved":
      case "challenge-solution": submitCodingChallenge(action==="challenge-solved"?"solved":"solution",id); break;
      case "toggle-career-session": {
        const completed=new Set(state.career.completedSessions||[]);
        if(completed.has(id)) completed.delete(id); else completed.add(id);
        state.career.completedSessions=[...completed];
        persist(); render();
        toast(completed.has(id)?"Career session marked complete.":"Career session marked incomplete.");
        break;
      }
      case "add-project": projectDialog(); break;
      case "edit-project": {
        const project=state.career.projects.find(item=>item.id===id);
        if(project) projectDialog(project);
        break;
      }
      case "delete-project":
        state.deleteProjectId=id;
        confirmDialog("Remove this project?","This removes the project card from your local portfolio. Your deployed site and repository are not affected.","Remove project","confirm-delete-project",true);
        break;
      case "confirm-delete-project":
        state.career.projects=state.career.projects.filter(item=>item.id!==state.deleteProjectId);
        state.deleteProjectId=null;
        persist(); dialog.close(); render(); toast("Portfolio project removed.");
        break;
      case "add-resource": addResourceDialog(); break;
      case "open-resource-pdf": openResourcePdf(id); break;
      case "toggle-video": state.playingResourceId=state.playingResourceId===id?null:id; persist(); render(); break;
      case "delete-resource": confirmDialog("Remove this resource?","The resource entry will be removed from this browser. This does not delete the original file or link.","Remove resource","confirm-delete-resource",true); state.deleteResourceId=id; break;
      case "confirm-delete-resource": {
        const resourceId=state.deleteResourceId;
        state.deleteResourceId=null;
        if(resourceId) removeResource(resourceId);
        break;
      }
      case "reset-data": confirmDialog("Reset all local data?","This permanently removes your saved profile, curriculum, scores, study history and resource list from this browser.","Reset my data","confirm-reset-data",true); break;
      case "confirm-reset-data":
        clearResourcePdfs().then(()=>{
          stopTestTimer(); state=structuredCloneFallback(BASE); persist(); dialog.close(); render(); toast("Local Enginex data has been reset.");
        }).catch(error=>{
          console.error("Enginex could not clear saved resource PDFs during reset.",error);
          toast(`Could not reset local data: ${error.message}`);
        });
        break;
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
      case "account-settings": state.settingsTab="Account & Sync"; state.view="settings"; persist(); render(); window.scrollTo(0,0); break;
      case "toggle-auth-mode": state.authMode=state.authMode==="signup"?"signin":"signup"; persist(); render(); break;
      case "sign-out": signOutCloud(); break;
      case "sync-now": saveCloudProgress().then(()=>toast("Your progress is synced.")).catch(error=>{console.error("Enginex could not sync your progress.",error);toast(`Cloud sync failed: ${error.message}`);}); break;
      default: break;
    }
  }
  function submitCodingChallenge(result,challengeId) {
    const session=challengeSession();
    if(!session.available) { toast("The C challenge unlocks at 10 PM local time."); return; }
    if(state.codingChallenge.attempts.some(item=>item.releaseDate===session.releaseDate)) { toast("This nightly challenge has already been recorded."); render(); return; }
    const challenge=selectedChallenge(session.releaseDate);
    if(!challenge||challenge.id!==challengeId) { toast("The challenge changed. Review the current question and try again."); render(); return; }
    const answer=document.getElementById("challenge-answer")?.value.trim()||"";
    if(result==="solved"&&!answer) { toast("Write your solution before marking the challenge solved."); return; }
    state.codingChallenge.attempts.push({releaseDate:session.releaseDate,challengeId:challenge.id,title:challenge.title,difficulty:challenge.difficulty,topic:challenge.topic,result,answer,showSolution:result==="solution",date:new Date().toISOString()});
    state.codingChallenge.attempts=state.codingChallenge.attempts.slice(-30);
    persist(); render();
    toast(result==="solved"?"Challenge marked solved. Nice work!":"Solution revealed. Review the approach and try a similar problem tomorrow.");
  }
  async function signOutCloud() {
    if(!cloudSession) return;
    let logoutError=null;
    try { await authRequest("logout",{},cloudSession.access_token); }
    catch(error) { logoutError=error; console.error("Enginex could not revoke the cloud session.",error); }
    try { setCloudSession(null); }
    catch(error) { console.error("Enginex could not clear the local sign-in session.",error); toast(error.message); return; }
    cloudSyncStatus="Not connected";
    state.settingsTab="Account & Sync";
    persist(); render();
    toast(logoutError?`Signed out on this device, but cloud sign-out failed: ${logoutError.message}`:"Signed out. This browser's learning data remains available locally.");
  }
  async function restoreCloudAccount() {
    try {
      await loadCloudProgress();
      render();
    } catch(error) {
      console.error("Enginex could not restore account progress.",error);
      cloudSyncStatus="Sync error";
      toast(`Account sync failed: ${error.message}`);
      if(state.view==="settings") render();
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
    else if(form.dataset.form==="cloud-auth") { event.preventDefault(); authenticate(form); }
    else if(form.id==="test-score-form") { event.preventDefault(); finishTest(form); }
    else if(form.id==="resource-form") { event.preventDefault(); saveResource(form); }
    else if(form.dataset.form==="quiz") { event.preventDefault(); submitQuiz(form); }
    else if(form.dataset.form==="challenge-topics") {
      event.preventDefault();
      state.codingChallenge.completedTopics=[...new Set(new FormData(form).getAll("completedTopic").map(Number).filter(index=>Number.isInteger(index)&&index>=0&&index<7))];
      if(!state.codingChallenge.completedTopics.includes(state.codingChallenge.topic)) state.codingChallenge.topic=state.codingChallenge.completedTopics[0]??-1;
      persist(); render(); toast(state.codingChallenge.completedTopics.length?"Completed C topics saved.":"No topics selected; choose a completed topic to enable challenges.");
    }
    else if(form.dataset.form?.startsWith("settings-")) { event.preventDefault(); submitSettings(form); }
  });
  app.addEventListener("change",event=>{
    const target=event.target;
    if(target.matches('[data-filter-tasks]')) { state.taskFilter=target.value; render(); }
    if(target.matches("[data-filter-difficulty]")) { state.difficultyFilter=target.value; render(); }
    if(target.matches("[data-filter-date]")) { state.dateFilter=target.value; render(); }
    if(target.matches("[data-resource-filter]")) { state.resourceFilter=target.value; render(); }
    if(target.matches("[data-challenge-level]")) { state.codingChallenge.difficulty=target.value; persist(); render(); }
    if(target.matches("[data-challenge-topic]")) { state.codingChallenge.topic=Number(target.value); persist(); render(); }
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
      const matchingProject=(state.career.projects||[]).some(item=>`${item.title} ${item.description} ${item.technologies}`.toLowerCase().includes(term));
      if(matchingTask) { state.taskFilter="All"; if(matchingTask.type==="test")go("tests");else startTask(matchingTask.id); }
      else if(matchingResource) go("resources");
      else if(matchingProject) go("career");
      else { go("curriculum"); toast("No exact match. Browse the curriculum or resource library."); }
    }
  });
  dialog.addEventListener("click",event=>{
    if(event.target===dialog) dialog.close();
    const action=event.target.closest("[data-action]");
    if(action) handleAction(action);
  });
  dialog.addEventListener("close",()=>{
    dialog.classList.remove("resource-pdf-dialog");
    if(resourcePdfObjectUrl) {
      URL.revokeObjectURL(resourcePdfObjectUrl);
      resourcePdfObjectUrl="";
    }
  });
  dialog.addEventListener("submit",event=>{
    event.preventDefault();
    if(event.target.id==="test-score-form") finishTest(event.target);
    else if(event.target.id==="resource-form") saveResource(event.target);
    else if(event.target.id==="project-form") saveProject(event.target);
  });
  dialog.addEventListener("change",event=>{
    if(event.target.matches("[data-resource-category]")) updateResourceFormFields();
  });
  render();
  if(cloudSession&&supabaseReady()) restoreCloudAccount();
})();
