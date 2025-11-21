import { Cpu, GitBranch, BarChart3, Percent, BrainCircuit } from "lucide-react";

// Subjects with nested chapters
export const SUBJECTS_DATA = {
  os: {
    id: "os",
    title: "Operating Systems",
    description: "Master OS concepts, processes, and memory management",
    icon: Cpu,
    color: "#B19EEF",
    chapters: [
      {
        id: "os-chapter-1",
        title: "OS Fundamentals",
        description: "Basic concepts and goals of operating systems",
      },
      {
        id: "os-chapter-2",
        title: "Process Management",
        description: "Process scheduling and synchronization",
      },
      {
        id: "os-chapter-3",
        title: "Memory Management",
        description: "Virtual memory and paging techniques",
      },
    ],
  },
  algorithm: {
    id: "algorithm",
    title: "Algorithms",
    description: "Learn sorting, searching, and complexity analysis",
    icon: GitBranch,
    color: "#5227FF",
    chapters: [
      {
        id: "algo-chapter-1",
        title: "Algorithm Ch-1",
        description: "Binary search and linear search techniques",
      },
      {
        id: "algo-chapter-2",
        title: "Sorting Algorithms",
        description: "Merge sort, quick sort, and more",
      },
    ],
  },
  "data-science": {
    id: "data-science",
    title: "Data Science",
    description: "Statistics, data analysis, and visualization techniques",
    icon: BarChart3,
    color: "#FF6B6B",
    chapters: [
      {
        id: "ds-chapter-1",
        title: "Statistical Analysis",
        description: "P-values and statistical significance",
      },
    ],
  },
  probabilistic: {
    id: "probabilistic",
    title: "Probability & Statistics",
    description: "Master probability theory and statistical methods",
    icon: Percent,
    color: "#4ECDC4",
    chapters: [
      {
        id: "prob-chapter-1",
        title: "Basic Probability",
        description: "Fundamental probability concepts",
      },
    ],
  },
  ai: {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Neural networks, machine learning, and AI fundamentals",
    icon: BrainCircuit,
    color: "#FFE66D",
    chapters: [
      {
        id: "ai-chapter-1",
        title: "Neural Networks",
        description: "Fundamentals of neural networks",
      },
    ],
  },
};

// Legacy support - convert to array for Subjects page
export const CHAPTERS_DATA = Object.values(SUBJECTS_DATA);

// Questions organized by chapter ID
export const QUESTIONS_DB = {
  "os-chapter-1": [
    {
      id: 1,
      question: "What is the main goal of an Operating System?",
      options: [
        "Maximize CPU usage",
        "Minimize RAM usage",
        "Cool the CPU",
        "Design user interfaces",
      ],
      correct: 0,
      explanation:
        "The OS aims to maximize resource utilization while ensuring efficient and fair access to system resources.",
    },
    {
      id: 2,
      question: "What is the kernel in an operating system?",
      options: [
        "User interface",
        "Core component managing resources",
        "Application software",
        "Web browser",
      ],
      correct: 1,
      explanation:
        "The kernel is the core component of an OS that manages system resources and hardware-software communication.",
    },
  ],
  "os-chapter-2": [
    {
      id: 1,
      question: "What is a Deadlock?",
      options: [
        "System crash",
        "Cyclic waiting for resources",
        "Fast processing mode",
        "Memory leak",
      ],
      correct: 1,
      explanation:
        "Deadlock occurs when processes are blocked indefinitely because each is holding a resource and waiting for another resource held by another process.",
    },
    {
      id: 2,
      question: "Which scheduling algorithm can cause starvation?",
      options: [
        "Round Robin",
        "First Come First Serve",
        "Priority Scheduling",
        "Shortest Job First",
      ],
      correct: 2,
      explanation:
        "Priority Scheduling can cause starvation when high-priority processes continuously arrive, preventing low-priority processes from executing.",
    },
  ],
  "os-chapter-3": [
    {
      id: 1,
      question: "What is the purpose of virtual memory?",
      options: [
        "Increase RAM speed",
        "Allow programs larger than physical RAM",
        "Encrypt data",
        "Backup storage",
      ],
      correct: 1,
      explanation:
        "Virtual memory allows execution of programs that may not fit completely in physical memory by using disk space as an extension of RAM.",
    },
    {
      id: 2,
      question: "What is thrashing in an OS?",
      options: [
        "CPU overheating",
        "Excessive paging activity",
        "Fast disk access",
        "Network congestion",
      ],
      correct: 1,
      explanation:
        "Thrashing occurs when the system spends more time swapping pages in and out of memory than executing processes.",
    },
  ],
  "algo-chapter-1": [
    {
      id: 1,
      question:
        "Which of the following is NOT a required characteristic of an algorithm?",
      options: ["Definiteness", "Finiteness", "Recursiveness", "Effectiveness"],
      correct: 2,
      explanation:
        "The five essential characteristics of an algorithm are Input, Output, Definiteness, Finiteness, and Effectiveness. Recursiveness is not a required property.",
    },
    {
      id: 2,
      question:
        "What is the primary advantage of using pseudocode over natural language descriptions?",
      options: [
        "It can be executed directly by a computer",
        "It is completely unambiguous",
        "It focuses on logic while abstracting away programming details",
        "It is easier for beginners to understand",
      ],
      correct: 2,
      explanation:
        "Pseudocode uses a structured, programming-like style that focuses on logic without worrying about exact syntax, making it ideal for algorithm design.",
    },
    {
      id: 3,
      question:
        "According to the definiteness property, what must be true about each step in an algorithm?",
      options: [
        "It must execute in constant time",
        "It must be precisely and clearly defined with no ambiguity",
        "It must use only basic arithmetic operations",
        "It must be reversible",
      ],
      correct: 1,
      explanation:
        "Definiteness requires that each step must be precisely and clearly defined, leaving no ambiguity about what needs to be done.",
    },
    {
      id: 4,
      question:
        "In a flowchart, which shape is used to represent decision points?",
      options: ["Rectangle", "Oval", "Diamond", "Circle"],
      correct: 2,
      explanation:
        "Diamonds are used for decisions in flowcharts, while ovals represent Start/End and rectangles represent processes.",
    },
    {
      id: 5,
      question:
        "What is the fundamental difference between an algorithm and a program?",
      options: [
        "An algorithm is faster than a program",
        "An algorithm is language-independent while a program is a specific implementation",
        "A program is more efficient than an algorithm",
        "An algorithm can only be written in pseudocode",
      ],
      correct: 1,
      explanation:
        "An algorithm is a conceptual, language-independent procedure, while a program is a specific implementation written in a programming language.",
    },
    {
      id: 6,
      question:
        "Which algorithm design technique involves making locally optimal choices at each step?",
      options: [
        "Dynamic programming",
        "Divide and conquer",
        "Greedy algorithms",
        "Brute force",
      ],
      correct: 2,
      explanation:
        "Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum.",
    },
    {
      id: 7,
      question:
        "What is the purpose of proving correctness in the algorithm design process?",
      options: [
        "To determine time complexity",
        "To translate pseudocode into code",
        "To show that the algorithm works for all valid inputs",
        "To optimize memory usage",
      ],
      correct: 2,
      explanation:
        "Proving correctness ensures that the algorithm works correctly for all valid inputs and helps avoid hidden logical errors.",
    },
    {
      id: 8,
      question: "Which step is the FIRST in the algorithm design process?",
      options: [
        "Testing and debugging",
        "Understanding the problem",
        "Analyzing complexity",
        "Writing pseudocode",
      ],
      correct: 1,
      explanation:
        "You must first fully understand the problem before designing a solution.",
    },
    {
      id: 9,
      question:
        "In the linear search algorithm, what is returned when the target value is not found?",
      options: [
        "The last element in the list",
        "An error message",
        '"Not found"',
        "The index -1",
      ],
      correct: 2,
      explanation:
        'According to the linear search algorithm provided, if we reach the end of the list without finding the target, we return "Not found".',
    },
    {
      id: 10,
      question:
        "What is the initial value of 'max' in the maximum-finding algorithm?",
      options: [
        "Zero",
        "The last element in the list",
        "Negative infinity",
        "The first element in the list",
      ],
      correct: 3,
      explanation:
        "The algorithm initializes max to the first element in the list, then compares subsequent elements to update it.",
    },
    {
      id: 11,
      question:
        "Which of the following best describes the 'finiteness' property of algorithms?",
      options: [
        "The algorithm must have a finite number of variables",
        "The algorithm must terminate after a finite number of steps",
        "The algorithm must process finite input",
        "The algorithm must use finite memory",
      ],
      correct: 1,
      explanation:
        "Finiteness means the algorithm must terminate after a finite number of steps and should not go into an infinite loop.",
    },
    {
      id: 12,
      question:
        "What is the main disadvantage of representing algorithms using flowcharts?",
      options: [
        "They cannot show decision points",
        "They are difficult for beginners to understand",
        "They can get messy for complex algorithms",
        "They cannot represent loops",
      ],
      correct: 2,
      explanation:
        "While flowcharts are very intuitive and help visualize processes, they can become messy and difficult to manage for complex algorithms.",
    },
    {
      id: 13,
      question:
        "In the factorial algorithm, what is the initial value of 'result'?",
      options: ["0", "1", "n", "2"],
      correct: 1,
      explanation:
        "The result is initialized to 1 because factorial is computed through multiplication, and 1 is the multiplicative identity.",
    },
    {
      id: 14,
      question:
        "Which representation of an algorithm is most suitable for immediate execution by a computer?",
      options: [
        "Natural language description",
        "Pseudocode",
        "Flowchart",
        "Programming code",
      ],
      correct: 3,
      explanation:
        "Programming code written in languages like Python, C++, or Java can be executed immediately by a computer, unlike other representations.",
    },
    {
      id: 15,
      question: "What does the 'effectiveness' property of algorithms require?",
      options: [
        "The algorithm must run in polynomial time",
        "All operations must be basic enough to be carried out exactly and within finite time",
        "The algorithm must use minimum memory",
        "The algorithm must be parallelizable",
      ],
      correct: 1,
      explanation:
        "Effectiveness requires that all operations must be basic enough to be carried out exactly and within a finite amount of time.",
    },
    {
      id: 16,
      question:
        "According to the document, what did people who followed algorithms perform calculations before electronic computers were called?",
      options: ["Calculators", "Programmers", "Computers", "Mathematicians"],
      correct: 2,
      explanation:
        "Historically, before electronic computers existed, people who followed algorithms to perform calculations were called 'computers'.",
    },
    {
      id: 17,
      question:
        "Which core algorithm component involves arithmetic and logical operations?",
      options: ["Input", "Computation", "Selection", "Iteration"],
      correct: 1,
      explanation:
        "Computation is the core component that involves arithmetic and logical operations in an algorithm.",
    },
    {
      id: 18,
      question:
        "In the algorithm design process, what should be determined during the 'Analyzing Efficiency' step?",
      options: [
        "The correctness of the algorithm",
        "The programming language to use",
        "Time and space complexity",
        "The input format",
      ],
      correct: 2,
      explanation:
        "During efficiency analysis, we determine both time complexity (how running time grows) and space complexity (memory usage).",
    },
    {
      id: 19,
      question:
        "What is the minimum number of outputs an algorithm must produce?",
      options: [
        "Zero",
        "At least one",
        "Exactly two",
        "It depends on the problem",
      ],
      correct: 1,
      explanation:
        "According to the Output characteristic, an algorithm must produce at least one output (result).",
    },
    {
      id: 20,
      question:
        "Which best practice suggests starting with pseudocode for design before moving to implementation?",
      options: [
        "Target Your Audience",
        "Validate with Math",
        "Start Simple",
        "Use Tools",
      ],
      correct: 2,
      explanation:
        "The 'Start Simple' best practice recommends using pseudocode for design and then code for implementation.",
    },
    {
      id: 21,
      question:
        "In the maximum-finding algorithm, when is the variable 'max' updated?",
      options: [
        "After every iteration",
        "Only at the end of the algorithm",
        "When an element x is greater than max",
        "When an element x is less than max",
      ],
      correct: 2,
      explanation:
        "The max variable is updated only when we find an element x that is greater than the current max value.",
    },
    {
      id: 22,
      question:
        "What is the primary purpose of the 'Iteration and Improvement' phase in algorithm design?",
      options: [
        "To write the initial pseudocode",
        "To optimize performance and handle additional edge cases",
        "To choose the programming language",
        "To prove correctness",
      ],
      correct: 1,
      explanation:
        "Iteration and Improvement focuses on optimizing performance, handling additional edge cases, and making code cleaner after initial implementation and testing.",
    },
    {
      id: 23,
      question:
        "According to the input characteristic, how many inputs can an algorithm receive?",
      options: ["Exactly one", "At least one", "Zero or more", "At least two"],
      correct: 2,
      explanation:
        "The Input characteristic states that the algorithm receives zero or more inputs from a specified set.",
    },
    {
      id: 24,
      question:
        "Which representation method is described as being 'easy for beginners to understand' but potentially 'ambiguous'?",
      options: [
        "Pseudocode",
        "Flowcharts",
        "Natural language description",
        "Programming code",
      ],
      correct: 2,
      explanation:
        "Natural language descriptions are easy for beginners but can be ambiguous or too informal for precise communication.",
    },
    {
      id: 25,
      question:
        "In the factorial algorithm for n=5, what is the final value of 'result'?",
      options: ["25", "15", "120", "720"],
      correct: 2,
      explanation:
        "For n=5, the factorial is 1 × 2 × 3 × 4 × 5 = 120, as explicitly stated in the example.",
    },
    {
      id: 26,
      question:
        "Which tool is recommended for creating flowcharts according to the best practices?",
      options: [
        "VisuAlgo",
        "LeetCode Playground",
        "Diagrams.net",
        "Algorithm Visualizer",
      ],
      correct: 2,
      explanation:
        "Diagrams.net and Mermaid are specifically mentioned as tools for creating flowcharts.",
    },
    {
      id: 27,
      question:
        "What type of loop structure is mentioned as part of the Iteration component in algorithms?",
      options: [
        "SWITCH and CASE",
        "TRY and CATCH",
        "WHILE and FOR",
        "BEGIN and END",
      ],
      correct: 2,
      explanation:
        "The Iteration component specifically mentions WHILE and FOR as repetition structures.",
    },
    {
      id: 28,
      question:
        "During the 'Developing a Strategy' step, which of the following is NOT listed as a technique to consider?",
      options: [
        "Greedy algorithms",
        "Dynamic programming",
        "Parallel processing",
        "Divide and conquer",
      ],
      correct: 2,
      explanation:
        "The listed techniques are greedy algorithms, divide and conquer, dynamic programming, and brute force. Parallel processing is not mentioned.",
    },
    {
      id: 29,
      question:
        "What should you identify when understanding the problem in the algorithm design process?",
      options: [
        "The best programming language to use",
        "The fastest algorithm available",
        "Inputs, required outputs, and constraints",
        "The number of lines of code needed",
      ],
      correct: 2,
      explanation:
        "When understanding the problem, you must identify the inputs, required outputs, and any constraints.",
    },
    {
      id: 30,
      question:
        "According to the document, which audience should primarily receive executable code as the algorithm representation?",
      options: ["Exams and textbooks", "Researchers", "Developers", "Students"],
      correct: 2,
      explanation:
        "The 'Target Your Audience' section specifies that developers should receive executable code, while exams/textbooks use pseudocode and researchers use math and pseudocode.",
    },
  ],
  "algo-chapter-2": [
    {
      id: 1,
      question:
        "Which of the following best describes the goal of algorithm analysis?",
      options: [
        "To determine the exact execution time on a specific machine",
        "To compare algorithms in terms of running time and memory usage",
        "To minimize the number of lines of code",
        "To ensure the algorithm always produces the correct output",
      ],
      correct: 1,
      explanation:
        "The primary goal of algorithm analysis is to compare algorithms objectively, focusing on efficiency in terms of running time and memory usage, rather than machine-specific execution times or code length.",
    },
    {
      id: 2,
      question:
        "What does the input size generally refer to in algorithm analysis?",
      options: [
        "The number of variables used in the algorithm",
        "The number of elements in the input",
        "The number of function calls made",
        "The total memory allocated",
      ],
      correct: 1,
      explanation:
        "Input size refers to the number of elements in the input, such as the size of an array or the number of vertices in a graph, and is crucial for expressing the running time as a function of input size.",
    },
    {
      id: 3,
      question:
        "Which of the following is NOT a valid reason to use asymptotic analysis?",
      options: [
        "To compare algorithms independently of hardware",
        "To determine the exact running time on a given machine",
        "To focus on the growth rate of the algorithm",
        "To abstract away from programming language details",
      ],
      correct: 1,
      explanation:
        "Asymptotic analysis is used to compare algorithms based on their growth rates, not to determine exact running times on specific machines, which depend on hardware and implementation details.",
    },
    {
      id: 4,
      question:
        "Which rate of growth is dominant in the function ( f(n) = n^4 + 2n^2 + 100n + 500 )?",
      options: ["n^4", "2n^2", "100n", "500"],
      correct: 0,
      explanation:
        "For large values of n, the term with the highest degree, ( n^4 ), dominates the growth rate of the function, making it the most significant for asymptotic analysis.",
    },
    {
      id: 5,
      question:
        "Which of the following asymptotic notations represents an upper bound?",
      options: ["Ω", "Θ", "O", "o"],
      correct: 2,
      explanation:
        "The notation O (Big-O) represents an upper bound on the growth rate of a function, indicating the worst-case scenario for an algorithm’s running time.",
    },
    {
      id: 6,
      question:
        "Which type of algorithm analysis considers the input for which the algorithm performs the slowest?",
      options: ["Best case", "Average case", "Worst case", "Optimal case"],
      correct: 2,
      explanation:
        "Worst-case analysis examines the input that causes the algorithm to run the slowest, providing a guarantee on the maximum running time.",
    },
    {
      id: 7,
      question:
        "What is the purpose of ignoring lower-order terms in asymptotic analysis?",
      options: [
        "To simplify the mathematical expression",
        "To focus on the dominant term for large inputs",
        "To reduce the number of operations",
        "To make the algorithm more efficient",
      ],
      correct: 1,
      explanation:
        "Lower-order terms become insignificant as input size grows, so asymptotic analysis focuses on the dominant term to understand the algorithm’s growth rate.",
    },
    {
      id: 8,
      question: "Which step is the FIRST in the algorithm design process?",
      options: [
        "Testing and debugging",
        "Understanding the problem",
        "Analyzing complexity",
        "Writing pseudocode",
      ],
      correct: 1,
      explanation:
        "You must first fully understand the problem before designing a solution.",
    },
    {
      id: 9,
      question:
        "Which of the following is a common reason for multiple algorithms existing for the same problem?",
      options: [
        "All algorithms have identical efficiency",
        "Different algorithms may optimize for different resources",
        "Algorithms are only created for academic purposes",
        "There is no way to compare algorithm efficiency",
      ],
      correct: 1,
      explanation:
        "Multiple algorithms exist because they may optimize for different resources, such as time, space, or developer effort, making some more suitable for specific situations.",
    },
    {
      id: 10,
      question: "What does the expression ( f(n) = O(g(n)) ) mean?",
      options: [
        "f(n) grows faster than g(n)",
        "f(n) grows at the same rate as g(n)",
        "f(n) grows no faster than g(n)",
        "f(n) grows slower than g(n)",
      ],
      correct: 2,
      explanation:
        "The expression ( f(n) = O(g(n)) ) means that f(n) grows no faster than g(n), providing an upper bound on the growth rate of f(n).",
    },
    {
      id: 11,
      question: "Which asymptotic notation represents a tight bound?",
      options: ["O", "Ω", "Θ", "o"],
      correct: 2,
      explanation:
        "Θ (Theta) notation represents a tight bound, meaning the function is bounded both above and below by the same asymptotic growth rate.",
    },
    {
      id: 12,
      question:
        "Which of the following is a typical input size for a sorting algorithm?",
      options: [
        "Number of comparisons made",
        "Number of swaps performed",
        "Number of elements in the array",
        "Number of function calls",
      ],
      correct: 2,
      explanation:
        "For sorting algorithms, the input size is usually the number of elements in the array being sorted.",
    },
    {
      id: 13,
      question:
        "What is the main advantage of expressing running time as a function of input size?",
      options: [
        "It allows comparison across different hardware platforms",
        "It guarantees the algorithm will be correct",
        "It ensures the algorithm uses minimal memory",
        "It makes debugging easier",
      ],
      correct: 0,
      explanation:
        "Expressing running time as a function of input size allows for objective, hardware-independent comparison of algorithms.",
    },
    {
      id: 14,
      question: "Which of the following is true about the best-case analysis?",
      options: [
        "It represents the slowest possible running time",
        "It represents the fastest possible running time",
        "It represents the average running time",
        "It is never used in practice",
      ],
      correct: 1,
      explanation:
        "Best-case analysis considers the input that allows the algorithm to run the fastest, representing the minimum possible running time.",
    },
    {
      id: 15,
      question:
        "Which of the following is an example of a problem where the input size could be measured in bits?",
      options: [
        "Sorting an array",
        "Searching a list",
        "Factoring a large integer",
        "Finding the shortest path in a graph",
      ],
      correct: 2,
      explanation:
        "For problems like factoring large integers, the input size is often measured in the number of bits in the binary representation of the input.",
    },
    {
      id: 16,
      question:
        "Which of the following is a reason to perform average-case analysis?",
      options: [
        "To determine the worst possible running time",
        "To determine the best possible running time",
        "To predict the expected running time for random inputs",
        "To minimize memory usage",
      ],
      correct: 2,
      explanation:
        "Average-case analysis predicts the expected running time when inputs are chosen randomly, providing insight into typical performance.",
    },
    {
      id: 17,
      question: "What does the notation ( f(n) = Omega(g(n)) ) indicate?",
      options: [
        "f(n) grows no faster than g(n)",
        "f(n) grows at least as fast as g(n)",
        "f(n) grows at the same rate as g(n)",
        "f(n) grows slower than g(n)",
      ],
      correct: 1,
      explanation:
        "Ω (Omega) notation indicates a lower bound, meaning f(n) grows at least as fast as g(n).",
    },
    {
      id: 18,
      question:
        "Which of the following is a valid reason to ignore constants in asymptotic analysis?",
      options: [
        "Constants are always negligible",
        "Constants do not affect the growth rate for large inputs",
        "Constants make the analysis more complicated",
        "Constants are not part of the algorithm",
      ],
      correct: 1,
      explanation:
        "For large inputs, constants become insignificant compared to the growth rate, so they are typically ignored in asymptotic analysis.",
    },
    {
      id: 19,
      question:
        "Which of the following best describes the purpose of pseudocode?",
      options: [
        "To provide a high-level description of an algorithm’s logic",
        "To write code that can be directly executed",
        "To minimize the number of variables used",
        "To optimize the algorithm for speed",
      ],
      correct: 0,
      explanation:
        "Pseudocode provides a high-level, language-independent description of an algorithm’s logic, making it easier to understand and analyze.",
    },
    {
      id: 20,
      question:
        "Which of the following is a characteristic of an efficient algorithm?",
      options: [
        "It always produces the correct output",
        "It uses minimal memory and time for large inputs",
        "It is written in the shortest possible code",
        "It works for all possible inputs",
      ],
      correct: 1,
      explanation:
        "An efficient algorithm minimizes both time and memory usage, especially for large inputs, making it suitable for practical use.",
    },
    {
      id: 21,
      question:
        "Which of the following is an example of a problem where the input size is the number of vertices in a graph?",
      options: [
        "Sorting an array",
        "Searching a list",
        "Finding the shortest path",
        "Factoring an integer",
      ],
      correct: 2,
      explanation:
        "For graph problems like finding the shortest path, the input size is often the number of vertices in the graph.",
    },
    {
      id: 22,
      question: "Which of the following is true about the worst-case analysis?",
      options: [
        "It represents the fastest possible running time",
        "It represents the slowest possible running time",
        "It represents the average running time",
        "It is always the same as the best case",
      ],
      correct: 1,
      explanation:
        "Worst-case analysis considers the input that causes the algorithm to run the slowest, providing a guarantee on the maximum running time.",
    },
    {
      id: 23,
      question:
        "Which of the following is a reason to analyze the complexity of an algorithm?",
      options: [
        "To ensure the algorithm is bug-free",
        "To compare different algorithms for the same problem",
        "To minimize the number of lines of code",
        "To make the algorithm easier to understand",
      ],
      correct: 1,
      explanation:
        "Analyzing complexity allows for objective comparison of different algorithms, helping to choose the most efficient one for a given problem.",
    },
    {
      id: 24,
      question:
        "Which of the following is a typical input size for a matrix multiplication algorithm?",
      options: [
        "Number of rows",
        "Number of columns",
        "Number of elements in the matrix",
        "Number of operations performed",
      ],
      correct: 2,
      explanation:
        "For matrix multiplication, the input size is typically the number of elements in the matrices being multiplied.",
    },
    {
      id: 25,
      question:
        "Which of the following best describes the relationship between best, average, and worst-case running times?",
      options: [
        "Best case is always greater than worst case",
        "Average case is always equal to best case",
        "Worst case is always greater than or equal to average case",
        "Average case is always greater than worst case",
      ],
      correct: 2,
      explanation:
        "The worst-case running time is always greater than or equal to the average-case running time, as it represents the maximum possible time for any input.",
    },
    {
      id: 26,
      question:
        "Which of the following is a common application of asymptotic analysis?",
      options: [
        "Determining the exact running time on a specific machine",
        "Comparing algorithms for efficiency",
        "Writing pseudocode",
        "Debugging algorithms",
      ],
      correct: 1,
      explanation:
        "Asymptotic analysis is primarily used to compare algorithms for efficiency, focusing on their growth rates rather than machine-specific details.",
    },
    {
      id: 27,
      question: "Which of the following is a reason to use Big-O notation?",
      options: [
        "To find the exact number of operations",
        "To provide an upper bound on the running time",
        "To minimize memory usage",
        "To ensure the algorithm is correct",
      ],
      correct: 1,
      explanation:
        "Big-O notation provides an upper bound on the running time, indicating the worst-case scenario for an algorithm’s performance.",
    },
    {
      id: 28,
      question:
        "Which of the following is a characteristic of a good algorithm design process?",
      options: [
        "Starting with pseudocode",
        "Understanding the problem before designing a solution",
        "Testing before understanding the problem",
        "Writing code before analyzing complexity",
      ],
      correct: 1,
      explanation:
        "A good algorithm design process begins with a thorough understanding of the problem, ensuring that the solution is both correct and efficient.",
    },
    {
      id: 29,
      question:
        "Which of the following is a typical input size for a polynomial evaluation algorithm?",
      options: [
        "Number of variables",
        "Degree of the polynomial",
        "Number of terms",
        "Number of operations",
      ],
      correct: 1,
      explanation:
        "For polynomial evaluation, the input size is often the degree of the polynomial, which determines the number of terms to be evaluated.",
    },
    {
      id: 30,
      question:
        "Which of the following is true about the average-case analysis?",
      options: [
        "It represents the worst possible running time",
        "It represents the best possible running time",
        "It represents the expected running time for random inputs",
        "It is never used in practice",
      ],
      correct: 2,
      explanation:
        "Average-case analysis represents the expected running time when inputs are chosen randomly, providing insight into typical performance rather than best or worst cases.",
    },
    {
      id: 31,
      question:
        "هل معاذ ومصطفى اب اشرف عبط؟",
      options: [
        "نعم",
        "لا",
      ],
      correct: 1,
      explanation:
        "Average-case analysis represents the expected running time when inputs are chosen randomly, providing insight into typical performance rather than best or worst cases.",
    },
  ],
  "ds-chapter-1": [
    {
      id: 1,
      question: "What does a p-value less than 0.05 typically indicate?",
      options: [
        "No significance",
        "Statistical significance",
        "Data error",
        "Perfect correlation",
      ],
      correct: 1,
      explanation:
        "A p-value less than 0.05 typically indicates that the results are statistically significant at the 95% confidence level.",
    },
    {
      id: 2,
      question: "What is the purpose of data normalization?",
      options: [
        "Remove duplicates",
        "Scale features to similar ranges",
        "Encrypt data",
        "Compress files",
      ],
      correct: 1,
      explanation:
        "Normalization scales numerical features to a common range, preventing features with larger values from dominating the analysis.",
    },
  ],
  "prob-chapter-1": [
    {
      id: 1,
      question:
        "What is the probability of getting heads twice when flipping a fair coin twice?",
      options: ["1/2", "1/4", "1/3", "2/3"],
      correct: 1,
      explanation:
        "Each flip is independent with probability 1/2, so P(HH) = 1/2 × 1/2 = 1/4.",
    },
    {
      id: 2,
      question: "What does Bayes' Theorem calculate?",
      options: [
        "Future probability",
        "Conditional probability",
        "Expected value",
        "Standard deviation",
      ],
      correct: 1,
      explanation:
        "Bayes' Theorem calculates conditional probabilities by updating prior beliefs with new evidence.",
    },
  ],
  "ai-chapter-1": [
    {
      id: 1,
      question: "What is a neural network's activation function purpose?",
      options: [
        "Store weights",
        "Introduce non-linearity",
        "Reduce dimensions",
        "Normalize data",
      ],
      correct: 1,
      explanation:
        "Activation functions introduce non-linearity into the network, allowing it to learn complex patterns and relationships.",
    },
    {
      id: 2,
      question: "What does 'backpropagation' do in neural networks?",
      options: [
        "Forward pass",
        "Calculate gradients for weight updates",
        "Initialize weights",
        "Predict outputs",
      ],
      correct: 1,
      explanation:
        "Backpropagation calculates gradients of the loss function with respect to weights, enabling the network to learn through gradient descent.",
    },
  ],

  // Legacy support - keep old structure
  os: [],
  algorithm: [],
  "data-science": [],
  probabilistic: [],
  ai: [],
  default: [],
};
