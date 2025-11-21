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
      question: "What is the correct definition of an algorithm?",
      options: [
        "A set of ambiguous steps that solve a problem",
        "A finite sequence of clear steps to solve a problem for all valid inputs",
        "Any code written in a programming language",
        "A diagram that represents program flow",
      ],
      correct: 1,
      explanation:
        "An algorithm is a finite sequence of unambiguous steps applicable to all valid inputs.",
    },

    {
      id: 2,
      question:
        "Which of the following is NOT one of the characteristics of an algorithm?",
      options: ["Finiteness", "Effectiveness", "Ambiguity", "Definiteness"],
      correct: 2,
      explanation:
        "Algorithms must have definite, effective, finite steps; ambiguity is not allowed.",
    },

    {
      id: 3,
      question: "What does 'finiteness' mean in an algorithm?",
      options: [
        "The algorithm eventually stops",
        "The algorithm accepts infinite inputs",
        "The algorithm must run fast",
        "The algorithm must use little memory",
      ],
      correct: 0,
      explanation:
        "Finiteness means the algorithm terminates after a finite number of steps.",
    },

    {
      id: 4,
      question:
        "Which representation of an algorithm is most prone to being ambiguous?",
      options: [
        "Flowchart",
        "Pseudocode",
        "Natural language",
        "Programming code",
      ],
      correct: 2,
      explanation: "Natural language can introduce ambiguity.",
    },

    {
      id: 5,
      question:
        "Which of the following uses standard symbols such as rectangles, diamonds, and ovals?",
      options: [
        "Flowcharts",
        "Pseudocode",
        "Natural language",
        "Mathematical notation",
      ],
      correct: 0,
      explanation:
        "Flowcharts visually represent processes using standard shapes.",
    },

    {
      id: 6,
      question:
        "Why is pseudocode considered more effective than natural language?",
      options: [
        "It is executable on computers directly",
        "It is more precise and avoids ambiguity",
        "It produces visual diagrams automatically",
        "It is faster to write than code",
      ],
      correct: 1,
      explanation:
        "Pseudocode expresses logic precisely without the ambiguity of natural language.",
    },

    {
      id: 7,
      question:
        "Which property ensures every step in an algorithm is clear and unambiguous?",
      options: ["Effectiveness", "Definiteness", "Completeness", "Optimality"],
      correct: 1,
      explanation:
        "Definiteness means all steps are clearly defined and unambiguous.",
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
      question: "What is the main purpose of proving algorithm correctness?",
      options: [
        "To ensure the algorithm runs fast",
        "To show it works for all valid inputs",
        "To reduce memory usage",
        "To simplify implementation",
      ],
      correct: 1,
      explanation:
        "Correctness ensures the algorithm always produces the right output.",
    },

    {
      id: 10,
      question:
        "Which of the following is used to measure how running time grows with the size of input?",
      options: [
        "Space complexity",
        "Time complexity",
        "Correctness proof",
        "Flowcharting",
      ],
      correct: 1,
      explanation:
        "Time complexity analyzes how runtime scales with input size.",
    },

    {
      id: 11,
      question:
        "Which algorithm design technique divides a problem into smaller subproblems?",
      options: [
        "Greedy approach",
        "Dynamic programming",
        "Brute force",
        "Divide and conquer",
      ],
      correct: 3,
      explanation: "Divide and conquer splits problems into smaller parts.",
    },

    {
      id: 12,
      question:
        "Which algorithm representation is most suitable for developers?",
      options: [
        "Pseudocode",
        "Programming code",
        "Natural language",
        "Flowchart",
      ],
      correct: 1,
      explanation:
        "Developers use executable programming code for implementation.",
    },

    {
      id: 13,
      question: "What is the main advantage of flowcharts?",
      options: [
        "They can be executed by the computer",
        "They visually display control flow clearly",
        "They require no symbols",
        "They replace pseudocode entirely",
      ],
      correct: 1,
      explanation:
        "Flowcharts are intuitive visual tools to show flow of control.",
    },

    {
      id: 14,
      question:
        "Which step in algorithm design usually comes AFTER writing pseudocode?",
      options: [
        "Testing and debugging",
        "Proving correctness",
        "Implementation",
        "Understanding the problem",
      ],
      correct: 2,
      explanation: "After pseudocode, the next typical step is implementation.",
    },

    {
      id: 15,
      question: "Which example best describes an algorithm?",
      options: [
        "A Python program",
        "A step-by-step method for finding the largest number in a list",
        "A class definition",
        "A computer’s hardware instruction",
      ],
      correct: 1,
      explanation:
        "An algorithm is a conceptual, language-independent set of steps.",
    },

    {
      id: 16,
      question:
        "Which component of algorithm analysis focuses on memory usage?",
      options: [
        "Space complexity",
        "Time complexity",
        "Correctness",
        "Definiteness",
      ],
      correct: 0,
      explanation: "Space complexity measures memory consumption.",
    },

    {
      id: 17,
      question: "Why is testing NOT enough to guarantee correctness?",
      options: [
        "It is slow",
        "It cannot cover all possible valid inputs",
        "It requires pseudocode first",
        "It is not used in algorithm design",
      ],
      correct: 1,
      explanation:
        "Testing checks some cases; correctness proofs cover all cases.",
    },

    {
      id: 18,
      question:
        "Which algorithm example in the lecture uses a loop from 2 to n?",
      options: [
        "Finding maximum in a list",
        "Factorial calculation",
        "Linear search",
        "Euclidean GCD",
      ],
      correct: 1,
      explanation: "Factorial algorithm multiplies numbers from 2 to n.",
    },

    {
      id: 19,
      question:
        "In the linear search algorithm, what happens if the target is not found?",
      options: [
        "The algorithm returns the last index",
        "The algorithm crashes",
        "The algorithm returns 'Not found'",
        "The algorithm restarts",
      ],
      correct: 2,
      explanation: "Linear search returns 'Not found' when target is absent.",
    },

    {
      id: 20,
      question:
        "Which step in the design process involves choosing between greedy, dynamic programming, or divide-and-conquer?",
      options: [
        "Understanding the problem",
        "Developing a strategy",
        "Testing and debugging",
        "Implementation",
      ],
      correct: 1,
      explanation:
        "Developing a strategy includes selecting an appropriate method.",
    },
  ],
  "algo-chapter-2": [
    {
      id: 1,
      question:
        "Which sorting algorithm has the best average-case time complexity?",
      options: [
        "Bubble Sort",
        "Merge Sort",
        "Selection Sort",
        "Insertion Sort",
      ],
      correct: 1,
      explanation:
        "Merge Sort has O(n log n) average-case time complexity, which is optimal for comparison-based sorting algorithms.",
    },
    {
      id: 2,
      question: "What is the space complexity of Quick Sort?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct: 1,
      explanation:
        "Quick Sort requires O(log n) space for the recursive call stack in the average case.",
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
