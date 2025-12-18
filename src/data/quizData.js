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
        title: "OS Ch-1",
        description: "Basic concepts and goals of operating systems",
      },
      {
        id: "os-chapter-2",
        title: "OS Ch-2",
        description: "Process scheduling and synchronization",
      },
      {
        id: "os-chapter-3",
        title: "OS Ch-3",
        description: "Virtual memory and paging techniques",
      },
    ],
    pdfs: [
      { id: "os-intro", title: "OS Introduction", file: "/OS Ch-1 V2.pdf" },
      {
        id: "os-scheduling",
        title: "Scheduling",
        file: "/pdfs/os-scheduling.pdf",
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
        title: "Algorithm Ch-2",
        description: "Merge sort, quick sort, and more",
      },
    ],
    pdfs: [
      {
        id: "algo-sorting",
        title: "Sorting Algorithms",
        file: "/pdfs/algo-sorting.pdf",
      },
      {
        id: "algo-search",
        title: "Search Algorithms",
        file: "/pdfs/algo-search.pdf",
      },
      {
        id: "algo-complexity",
        title: "Time Complexity",
        file: "/pdfs/algo-complexity.pdf",
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
        title: "Data Science Ch-1",
        description: "P-values and statistical significance",
      },
    ],
    pdfs: [
      {
        id: "ds-stats",
        title: "Statistical Methods",
        file: "/pdfs/ds-stats.pdf",
      },
      {
        id: "ds-visualization",
        title: "Data Visualization",
        file: "/pdfs/ds-visualization.pdf",
      },
      {
        id: "ds-analysis",
        title: "Data Analysis",
        file: "/pdfs/ds-analysis.pdf",
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
    pdfs: [
      {
        id: "prob-basics",
        title: "Probability Basics",
        file: "/pdfs/prob-basics.pdf",
      },
      {
        id: "prob-distributions",
        title: "Probability Distributions",
        file: "/pdfs/prob-distributions.pdf",
      },
      {
        id: "prob-inference",
        title: "Statistical Inference",
        file: "/pdfs/prob-inference.pdf",
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
    pdfs: [
      { id: "ai-nn", title: "Neural Networks", file: "/pdfs/ai-nn.pdf" },
      { id: "ai-ml", title: "Machine Learning", file: "/pdfs/ai-ml.pdf" },
      { id: "ai-deep", title: "Deep Learning", file: "/pdfs/ai-deep.pdf" },
    ],
  },
};

// Legacy support - convert to array for Subjects page
export const CHAPTERS_DATA = Object.values(SUBJECTS_DATA);

// Questions organized by chapter ID
export const QUESTIONS_DB = {
  "os-chapter-1": [
    // ---------------------- GROUP 1: OS BASICS (1–10) ----------------------
    {
      id: 1,
      question: "What is the main role of an operating system?",
      options: [
        "To design CPU architecture",
        "To manage hardware and provide a platform for applications",
        "To manufacture computer components",
        "To translate high-level code into hardware signals",
      ],
      correct: 1,
      explanation:
        "An OS manages hardware resources and provides a basis for application programs.",
    },
    {
      id: 2,
      question: "Which component acts as the resource manager of the system?",
      options: [
        "Users",
        "Hardware",
        "Operating System",
        "Application Programs",
      ],
      correct: 2,
      explanation: "The OS manages CPU time, memory, storage, and I/O devices.",
    },
    {
      id: 3,
      question: "What is the only program running at all times on a computer?",
      options: ["System daemon", "Compiler", "Kernel", "User application"],
      correct: 2,
      explanation: "The kernel is always running and is the core of the OS.",
    },
    {
      id: 4,
      question:
        "Which type of program supports OS functionality but is not part of the kernel?",
      options: [
        "Firmware",
        "System programs",
        "Application programs",
        "Drivers only",
      ],
      correct: 1,
      explanation:
        "System programs enhance OS functionality but run outside the kernel.",
    },
    {
      id: 5,
      question: "Which mode allows execution of privileged instructions?",
      options: ["User mode", "Kernel mode", "Application mode", "Driver mode"],
      correct: 1,
      explanation: "Kernel mode has full hardware privileges.",
    },
    {
      id: 6,
      question: "What does the mode bit distinguish?",
      options: [
        "OS version",
        "Kernel vs. user mode",
        "Disk type",
        "Memory size",
      ],
      correct: 1,
      explanation:
        "The mode bit indicates whether code runs in user or kernel mode.",
    },
    {
      id: 7,
      question: "What happens if user mode attempts a privileged instruction?",
      options: [
        "It executes normally",
        "It is ignored",
        "A trap occurs",
        "The OS shuts down",
      ],
      correct: 2,
      explanation: "Illegal privileged instructions trigger a trap to the OS.",
    },
    {
      id: 8,
      question: "What prevents a process from keeping the CPU forever?",
      options: ["Cache", "Interrupt", "Timer", "Bootstrap"],
      correct: 2,
      explanation:
        "A timer forces control back to the OS to prevent infinite loops.",
    },
    {
      id: 9,
      question: "A trap is best described as:",
      options: [
        "A hardware signal from I/O",
        "A software-generated interrupt",
        "A virus",
        "A program counter reset",
      ],
      correct: 1,
      explanation:
        "Traps are software-generated interrupts triggered by errors or system calls.",
    },
    {
      id: 10,
      question: "Time-sharing systems aim to provide:",
      options: [
        "Long batch throughput",
        "Rapid user interaction",
        "Single-user execution",
        "No multitasking",
      ],
      correct: 1,
      explanation: "Time-sharing gives users fast, interactive responses.",
    },

    // ---------------------- GROUP 2: SYSTEM STRUCTURE (11–20) ----------------------
    {
      id: 11,
      question: "Where is the bootstrap program stored?",
      options: ["RAM", "SSD", "ROM/EEPROM", "Cache"],
      correct: 2,
      explanation: "The bootstrap resides in firmware such as ROM or EEPROM.",
    },
    {
      id: 12,
      question: "What is the job of the bootstrap program?",
      options: [
        "Compile C programs",
        "Load the OS kernel into memory",
        "Start user applications",
        "Format the hard disk",
      ],
      correct: 1,
      explanation:
        "The bootstrap initializes hardware and loads the OS kernel.",
    },
    {
      id: 13,
      question: "What causes an interrupt?",
      options: [
        "CPU idle state",
        "Hardware signals or system calls",
        "Low memory",
        "Application UI changes",
      ],
      correct: 1,
      explanation:
        "Interrupts come from hardware events or software system calls.",
    },
    {
      id: 14,
      question: "Where is the interrupt vector stored?",
      options: ["High memory", "Registers", "Low memory", "SSD"],
      correct: 2,
      explanation:
        "Interrupt pointers are stored in low memory for fast access.",
    },
    {
      id: 15,
      question: "Which memory type is volatile?",
      options: ["Magnetic disk", "Flash", "Main memory", "SSD"],
      correct: 2,
      explanation: "Main memory loses contents when powered off.",
    },
    {
      id: 16,
      question: "Which statement about main memory is correct?",
      options: [
        "It is permanent storage",
        "It holds instructions and data for executing processes",
        "It cannot be written to",
        "It is slower than disk",
      ],
      correct: 1,
      explanation:
        "Main memory holds the active instructions and data for running programs.",
    },
    {
      id: 17,
      question: "Which is the most common form of secondary storage?",
      options: ["Registers", "Cache", "Magnetic disk", "EEPROM"],
      correct: 2,
      explanation: "Magnetic disks are the standard form of permanent storage.",
    },
    {
      id: 18,
      question: "What is the main advantage of DMA?",
      options: [
        "CPU executes disk instructions",
        "Data transfers occur without CPU intervention",
        "Cache becomes nonvolatile",
        "Interrupts are disabled",
      ],
      correct: 1,
      explanation:
        "DMA transfers entire data blocks directly to memory without using the CPU.",
    },
    {
      id: 19,
      question: "What is the purpose of a device driver?",
      options: [
        "To design hardware",
        "To give the OS a uniform interface to the device controller",
        "To replace memory",
        "To handle only CPU tasks",
      ],
      correct: 1,
      explanation:
        "Drivers translate OS commands into device-specific operations.",
    },
    {
      id: 20,
      question:
        "Which feature enables programs larger than physical memory to execute?",
      options: ["Swapping", "Virtual memory", "Firmware", "Direct I/O"],
      correct: 1,
      explanation:
        "Virtual memory allows execution of programs not fully loaded in RAM.",
    },

    // ---------------------- GROUP 3: MULTIPROCESSOR & CLUSTER SYSTEMS (21–30) ----------------------
    {
      id: 21,
      question: "Which is a benefit of multiprocessor systems?",
      options: [
        "Lower memory usage",
        "Increased throughput",
        "Slower I/O",
        "Independent CPUs only",
      ],
      correct: 1,
      explanation: "Multiple processors increase throughput.",
    },
    {
      id: 22,
      question: "What is graceful degradation?",
      options: [
        "System runs faster after failure",
        "System partially operates when hardware fails",
        "System stops completely during failure",
        "System enters safe mode only",
      ],
      correct: 1,
      explanation:
        "Graceful degradation means partial service continues after failures.",
    },
    {
      id: 23,
      question: "Fault-tolerant systems can:",
      options: [
        "Stop entirely when a component fails",
        "Continue operating even after a component failure",
        "Run faster when failing",
        "Never detect errors",
      ],
      correct: 1,
      explanation:
        "Fault tolerance allows operation even with hardware failures.",
    },
    {
      id: 24,
      question: "In asymmetric multiprocessing:",
      options: [
        "All CPUs share identical roles",
        "One CPU controls others (boss–worker)",
        "No communication exists",
        "Each CPU must run a different OS",
      ],
      correct: 1,
      explanation: "A boss CPU assigns tasks to worker CPUs.",
    },
    {
      id: 25,
      question: "In symmetric multiprocessing (SMP):",
      options: [
        "Only one CPU schedules tasks",
        "CPUs have different privileges",
        "All CPUs are peers and run all OS tasks",
        "One CPU is always idle",
      ],
      correct: 2,
      explanation: "SMP means all CPUs are equal peers.",
    },
    {
      id: 26,
      question: "Which statement about multicore systems is correct?",
      options: [
        "All multiprocessor systems are multicore",
        "Multicore means multiple CPUs on one chip",
        "Multicore systems cannot use shared caches",
        "Multicore requires distributed architecture",
      ],
      correct: 1,
      explanation: "Multicore refers to multiple processing cores on one chip.",
    },
    {
      id: 27,
      question: "Clustered systems are defined as:",
      options: [
        "Multiple CPUs on one motherboard",
        "Multiple separate computers connected together",
        "Single-core CPUs only",
        "Systems without storage",
      ],
      correct: 1,
      explanation: "Clusters are multiple independent nodes joined together.",
    },
    {
      id: 28,
      question: "Asymmetric clustering means:",
      options: [
        "All nodes run applications",
        "One node is hot-standby while the other runs applications",
        "Nodes take turns shutting down",
        "Nodes share no storage",
      ],
      correct: 1,
      explanation:
        "One node actively monitors and replaces the other if it fails.",
    },
    {
      id: 29,
      question: "Symmetric clustering allows:",
      options: [
        "Only one active server",
        "Multiple hosts to run applications and monitor each other",
        "Only standby nodes",
        "No parallel processing",
      ],
      correct: 1,
      explanation:
        "Symmetric clustering uses all hardware by running applications on all nodes.",
    },
    {
      id: 30,
      question: "Parallelization in clusters means:",
      options: [
        "Ignoring CPU cores",
        "Executing program components simultaneously across nodes",
        "Running one task per day",
        "Stopping tasks on failure",
      ],
      correct: 1,
      explanation:
        "Parallelization divides a program so parts run concurrently on different nodes.",
    },

    // ---------------------- GROUP 4: DATA STRUCTURES & RELATED OS CONCEPTS (31–40) ----------------------
    {
      id: 31,
      question: "Which data structure provides LIFO behavior?",
      options: ["Queue", "Array", "Stack", "Tree"],
      correct: 2,
      explanation: "Stacks use the Last-In, First-Out principle.",
    },
    {
      id: 32,
      question: "Which data structure provides FIFO behavior?",
      options: ["Stack", "Queue", "Hash map", "Binary tree"],
      correct: 1,
      explanation: "Queues remove items in the order they were inserted.",
    },
    {
      id: 33,
      question: "What is a linked list's main advantage?",
      options: [
        "Constant-time random access",
        "Easy insertion and deletion",
        "No memory usage",
        "Sorted automatically",
      ],
      correct: 1,
      explanation: "Linked lists allow efficient insertion and deletion.",
    },
    {
      id: 34,
      question: "Which is NOT a type of linked list?",
      options: [
        "Singly linked list",
        "Doubly linked list",
        "Circularly linked list",
        "Reversed-array linked list",
      ],
      correct: 3,
      explanation: "Reversed-array linked list is not a standard structure.",
    },
    {
      id: 35,
      question: "What does a hash function produce?",
      options: [
        "A tree",
        "A sorted array",
        "A numeric index",
        "A binary queue",
      ],
      correct: 2,
      explanation:
        "Hash functions return numeric values used as table indices.",
    },
    {
      id: 36,
      question: "What causes a hash collision?",
      options: [
        "Too much RAM",
        "Two inputs producing the same hash value",
        "Lack of threads",
        "Slow CPU",
      ],
      correct: 1,
      explanation:
        "Hash collisions occur when different inputs map to the same index.",
    },
    {
      id: 37,
      question: "A bitmap is used to represent:",
      options: [
        "CPU registers",
        "Resource availability",
        "Thread hierarchy",
        "Hash map speed",
      ],
      correct: 1,
      explanation: "Bitmaps represent the state of resources using bits.",
    },
    {
      id: 38,
      question: "Cache coherency ensures:",
      options: [
        "Registers never change",
        "All caches see the most recent value of shared data",
        "Each CPU runs a different OS",
        "Disks remain synchronized",
      ],
      correct: 1,
      explanation:
        "Cache coherency ensures updated data is reflected across caches.",
    },
    {
      id: 39,
      question: "A distributed system is best defined as:",
      options: [
        "One CPU shared among users",
        "A collection of networked, independent computers",
        "A single laptop with multiple apps",
        "A server without clients",
      ],
      correct: 1,
      explanation:
        "Distributed systems are multiple connected systems sharing resources.",
    },
    {
      id: 40,
      question: "In a peer-to-peer system:",
      options: [
        "One server controls all nodes",
        "All nodes are equal and can act as clients or servers",
        "Only one node can provide services",
        "Nodes cannot store files",
      ],
      correct: 1,
      explanation:
        "Peer-to-peer systems allow every node to request or provide services.",
    },
  ],
  "os-chapter-2": [
    {
      id: 1,
      question: "What is the main difference between a program and a process?",
      options: [
        "A program is stored in RAM, while a process is stored on disk",
        "A program is a passive entity, while a process is an active entity in execution",
        "A program contains data, while a process contains only code",
        "A program always has multiple threads, while a process has only one",
      ],
      correct: 1,
      explanation:
        "A program is a passive entity (an executable file on disk), whereas a process is a program in execution with a program counter, registers, and allocated resources.",
    },
    {
      id: 2,
      question: "Which of the following is NOT typically part of a process?",
      options: ["Text section", "Stack", "Heap", "BIOS firmware"],
      correct: 3,
      explanation:
        "A process typically consists of a text (code) section, stack, data section, and heap. BIOS firmware is part of the hardware/firmware layer, not the process.",
    },
    {
      id: 3,
      question: "Which section of a process contains global variables?",
      options: ["Text section", "Data section", "Stack", "Heap"],
      correct: 1,
      explanation:
        "Global variables are stored in the data section of a process.",
    },
    {
      id: 4,
      question:
        "In the context of the Java Virtual Machine (JVM), which of the following is TRUE?",
      options: [
        "The JVM is part of the hardware",
        "The JVM itself runs as a process and executes Java bytecode",
        "Each Java class file is a separate process",
        "The JVM does not interact with the operating system",
      ],
      correct: 1,
      explanation:
        "The JVM is a process started by a command like java Program; it interprets Java bytecode and uses native machine instructions on behalf of the Java code.",
    },
    {
      id: 5,
      question:
        "Which process state represents a process that is ready to run but not currently executing?",
      options: ["New", "Waiting", "Ready", "Terminated"],
      correct: 2,
      explanation:
        "The Ready state means the process is in main memory and waiting to be assigned to a CPU.",
    },
    {
      id: 6,
      question:
        "A process that is waiting for I/O completion is in which state?",
      options: ["New", "Running", "Waiting", "Ready"],
      correct: 2,
      explanation:
        "When a process is waiting for some event (like I/O completion), it is in the Waiting (or Blocked) state.",
    },
    {
      id: 7,
      question:
        "At any instant, how many processes can be in the Running state on a single-core processor?",
      options: ["Zero or one", "Exactly two", "At least one", "Unlimited"],
      correct: 0,
      explanation:
        "On a single-core CPU, at most one process can be running at any instant; others must be ready or waiting.",
    },
    {
      id: 8,
      question:
        "Which of the following is NOT typically stored in the Process Control Block (PCB)?",
      options: [
        "CPU registers",
        "Process state",
        "List of I/O devices allocated",
        "Source code of the program",
      ],
      correct: 3,
      explanation:
        "The PCB stores execution context and management information, not the program’s source code.",
    },
    {
      id: 9,
      question: "What does the program counter field in the PCB represent?",
      options: [
        "The total number of instructions executed",
        "The address of the next instruction to be executed",
        "The starting address of the process in memory",
        "The size of the stack",
      ],
      correct: 1,
      explanation:
        "The program counter contains the address of the next instruction that the CPU will execute for that process.",
    },
    {
      id: 10,
      question:
        "Which type of information in the PCB is used directly by the CPU scheduler?",
      options: [
        "CPU-scheduling information",
        "Accounting information",
        "I/O status information",
        "Memory-management information",
      ],
      correct: 0,
      explanation:
        "The CPU scheduler uses CPU-scheduling information (such as priority and queue pointers) to decide which process runs next.",
    },
    {
      id: 11,
      question:
        "What is the main advantage of allowing a process to have multiple threads of execution?",
      options: [
        "It reduces the size of the PCB",
        "It allows the process to perform multiple tasks concurrently",
        "It removes the need for a scheduler",
        "It forces each thread to use separate memory space",
      ],
      correct: 1,
      explanation:
        "Multiple threads allow a process to perform more than one task at a time, especially beneficial on multicore systems.",
    },
    {
      id: 12,
      question:
        "On a multicore system, how can multiple threads of the same process improve performance?",
      options: [
        "By disabling context switches",
        "By running in strict sequence on one core",
        "By running in parallel on different cores",
        "By sharing no data at all",
      ],
      correct: 2,
      explanation:
        "Multiple threads can be scheduled on different cores, enabling true parallel execution.",
    },
    {
      id: 13,
      question: "What is the primary objective of multiprogramming?",
      options: [
        "To reduce the number of processes in the system",
        "To maximize CPU utilization by always having some process running",
        "To eliminate I/O operations",
        "To ensure only one user can use the system at a time",
      ],
      correct: 1,
      explanation:
        "Multiprogramming aims to keep the CPU busy by having some process running at all times.",
    },
    {
      id: 14,
      question:
        "In a time-sharing system, why is the CPU frequently switched among processes?",
      options: [
        "To reduce memory usage",
        "To make users feel their programs are running interactively",
        "To avoid using multitasking",
        "To prevent context switching",
      ],
      correct: 1,
      explanation:
        "Frequent switching gives the illusion that each user has a dedicated CPU, improving interactivity.",
    },
    {
      id: 15,
      question:
        "Which queue holds all processes that are in main memory and ready to execute?",
      options: ["Job queue", "Ready queue", "Device queue", "Exit queue"],
      correct: 1,
      explanation:
        "The ready queue contains all processes that are in memory and ready for CPU execution.",
    },
    {
      id: 16,
      question: "What is the job queue?",
      options: [
        "All processes currently running on the CPU",
        "All processes that are in the ready state",
        "All processes in the system",
        "All processes waiting for I/O completion",
      ],
      correct: 2,
      explanation:
        "The job queue consists of all processes in the system, including those not yet in memory.",
    },
    {
      id: 17,
      question:
        "Which of the following is a possible event while a process is executing on the CPU?",
      options: [
        "It requests I/O and moves to an I/O queue",
        "It always remains running until termination",
        "It cannot create child processes",
        "It can never be interrupted",
      ],
      correct: 0,
      explanation:
        "A running process may issue an I/O request, create child processes, or be preempted and moved back to the ready queue.",
    },
    {
      id: 18,
      question:
        "Which scheduler selects processes from secondary storage (spooled processes) and loads them into memory?",
      options: [
        "Short-term scheduler (CPU scheduler)",
        "Long-term scheduler (job scheduler)",
        "Medium-term scheduler",
        "Context scheduler",
      ],
      correct: 1,
      explanation:
        "The long-term scheduler chooses which processes from the pool on disk are brought into main memory.",
    },
    {
      id: 19,
      question:
        "What is the main role of the short-term scheduler (CPU scheduler)?",
      options: [
        "To decide which process to admit into the system",
        "To select which ready process gets the CPU next",
        "To swap processes to and from disk",
        "To terminate zombie processes",
      ],
      correct: 1,
      explanation:
        "The short-term scheduler selects from the ready queue which process should execute on the CPU next.",
    },
    {
      id: 20,
      question: "Which statement about the long-term scheduler is TRUE?",
      options: [
        "It runs very frequently (e.g., every few milliseconds)",
        "It controls the degree of multiprogramming in the system",
        "It is responsible only for I/O-bound processes",
        "It is the same as the dispatcher",
      ],
      correct: 1,
      explanation:
        "The long-term scheduler determines how many processes are in memory, thus controlling the degree of multiprogramming.",
    },
    {
      id: 21,
      question: "An I/O-bound process is characterized by:",
      options: [
        "Spending most of its time doing computations",
        "Generating frequent I/O requests and less computation",
        "Never performing I/O operations",
        "Always running at the highest priority",
      ],
      correct: 1,
      explanation:
        "I/O-bound processes perform I/O frequently and use relatively less CPU time between I/O operations.",
    },
    {
      id: 22,
      question:
        "Why is it important for the long-term scheduler to select a good mix of I/O-bound and CPU-bound processes?",
      options: [
        "To simplify context switching",
        "To ensure all processes terminate quickly",
        "To keep both CPU and I/O devices busy for better system balance",
        "To reduce the size of the ready queue",
      ],
      correct: 2,
      explanation:
        "A good mix keeps CPU and devices utilized; otherwise, either CPU or I/O devices may sit idle.",
    },
    {
      id: 23,
      question: "What is a context switch?",
      options: [
        "Changing from user mode to kernel mode",
        "Saving the state of one process and restoring the state of another",
        "Switching from one thread to another within the same process",
        "Restarting a process from the beginning",
      ],
      correct: 1,
      explanation:
        "A context switch saves the current process’s context (registers, state, etc.) and restores another process’s context.",
    },
    {
      id: 24,
      question:
        "Where is the context of a process stored during a context switch?",
      options: [
        "In the data section",
        "In the PCB",
        "In the stack only",
        "In the heap",
      ],
      correct: 1,
      explanation:
        "The context (registers, program counter, state, memory info) is stored in the process’s PCB.",
    },
    {
      id: 25,
      question: "Which of the following is TRUE about context switching?",
      options: [
        "It is free and has no overhead",
        "It requires saving and restoring CPU registers and process state",
        "It only happens when a process terminates",
        "It does not involve the operating system",
      ],
      correct: 1,
      explanation:
        "Context switching involves the OS saving and restoring state, which introduces overhead.",
    },
    {
      id: 26,
      question: "In a typical operating system, what is a parent process?",
      options: [
        "A process that has terminated",
        "A process that creates one or more child processes",
        "A process that cannot create any other process",
        "A process that only runs in kernel mode",
      ],
      correct: 1,
      explanation:
        "The process that calls a create operation (e.g., fork) is the parent of the newly created child process.",
    },
    {
      id: 27,
      question:
        "Which of the following is a possible execution relationship between a parent and its child processes?",
      options: [
        "The parent must always terminate before the child",
        "The parent must always terminate after the child",
        "The parent and child can execute concurrently",
        "The parent cannot execute once a child is created",
      ],
      correct: 2,
      explanation:
        "One option is for the parent to continue executing concurrently with its children.",
    },
    {
      id: 28,
      question:
        "Which of the following is a possible address-space relationship when a process creates a child?",
      options: [
        "The child must share the exact same stack frame",
        "The child is always an independent program unrelated to the parent",
        "The child can be a duplicate of the parent or have a new program loaded",
        "The child cannot use memory at all",
      ],
      correct: 2,
      explanation:
        "Two cases: the child is a duplicate of the parent, or a new program is loaded into the child’s address space.",
    },
    {
      id: 29,
      question: "What is cascading termination?",
      options: [
        "When a process terminates and all its child processes are also terminated",
        "When a process is repeatedly restarted after termination",
        "When the CPU scheduler constantly replaces processes",
        "When a process terminates without freeing memory",
      ],
      correct: 0,
      explanation:
        "In cascading termination, if a parent process terminates, the operating system also terminates all its child processes.",
    },
    {
      id: 30,
      question: "What is a zombie process?",
      options: [
        "A process that is running in an infinite loop",
        "A terminated process whose parent has not yet called wait()",
        "A child process that kills its parent",
        "A process that cannot be terminated",
      ],
      correct: 1,
      explanation:
        "A zombie process has terminated, but its entry remains in the process table until the parent calls wait() to collect its exit status.",
    },
    {
      id: 31,
      question:
        "What happens to a zombie process when the parent process finally calls wait()?",
      options: [
        "It is moved back to the ready queue",
        "Its resources are reallocated to the parent",
        "Its PID and process table entry are released",
        "It becomes an orphan process",
      ],
      correct: 2,
      explanation:
        "When the parent calls wait(), the system can free the zombie’s PID and remove its entry from the process table.",
    },
    {
      id: 32,
      question: "Which of the following best describes an independent process?",
      options: [
        "A process that shares data with other processes",
        "A process that can be affected by other processes",
        "A process that does not share any data with other processes",
        "A process that must always run in kernel mode",
      ],
      correct: 2,
      explanation:
        "An independent process neither affects nor is affected by other processes; it shares no data with them.",
    },
    {
      id: 33,
      question:
        "Which of the following is NOT a reason for providing an environment for cooperating processes?",
      options: [
        "Information sharing",
        "Computation speedup",
        "Modularity",
        "Increasing context-switch overhead",
      ],
      correct: 3,
      explanation:
        "Cooperation is aimed at sharing information, speeding up computation, modularity, and convenience—not increasing overhead.",
    },
    {
      id: 34,
      question:
        "In the shared-memory model of interprocess communication (IPC), processes exchange information by:",
      options: [
        "Writing and reading data in a common memory region",
        "Sending signals only",
        "Using only message queues managed by the kernel",
        "Directly modifying each other’s private stacks",
      ],
      correct: 0,
      explanation:
        "Shared-memory IPC establishes a common memory region that all cooperating processes can read from and write to.",
    },
    {
      id: 35,
      question: "Which requirement must be met for shared-memory IPC to work?",
      options: [
        "The OS must completely prevent access to other processes’ memory",
        "Processes must agree to share a specific memory region",
        "Processes must not execute concurrently",
        "Each process must run on a different CPU core",
      ],
      correct: 1,
      explanation:
        "Shared-memory IPC requires that processes agree to attach and access a shared memory region.",
    },
    {
      id: 36,
      question:
        "In the producer–consumer problem using shared memory, what is the main purpose of the buffer?",
      options: [
        "To store process control blocks",
        "To hold items produced but not yet consumed",
        "To store only error messages",
        "To queue incoming interrupts",
      ],
      correct: 1,
      explanation:
        "The buffer allows the producer to place items and the consumer to remove them, enabling concurrent operation.",
    },
    {
      id: 37,
      question:
        "Why must the producer and consumer be synchronized in the producer–consumer problem?",
      options: [
        "To prevent the CPU from switching between them",
        "To ensure the producer never stops producing",
        "To prevent the consumer from consuming items that haven’t been produced",
        "To guarantee that both always run on the same core",
      ],
      correct: 2,
      explanation:
        "Synchronization is required so the consumer does not read from an empty buffer and the producer does not overwrite unconsumed items.",
    },
    {
      id: 38,
      question:
        "In the message-passing model, which primitives are typically used for communication?",
      options: [
        "open() and close()",
        "malloc() and free()",
        "send() and receive()",
        "fork() and exec()",
      ],
      correct: 2,
      explanation:
        "Message passing uses send() and receive() primitives for communication between processes.",
    },
    {
      id: 39,
      question:
        "Which of the following best describes a blocking send operation in message passing?",
      options: [
        "The sender continues execution immediately after sending the message",
        "The sender waits until the message is received by the receiver or mailbox",
        "The sender waits until the receiver terminates",
        "The sender never resumes after sending the message",
      ],
      correct: 1,
      explanation:
        "With blocking send, the sending process is blocked until the message is received.",
    },
    {
      id: 40,
      question:
        "In a nonblocking receive operation, what does the receiver get?",
      options: [
        "It always blocks until a message is available",
        "It either gets a valid message or a null result",
        "It always gets a valid message",
        "It terminates if no message is available",
      ],
      correct: 1,
      explanation:
        "A nonblocking receive returns immediately with either a valid message (if available) or a null indicating no message.",
    },
  ],
  "os-chapter-3": [
    {
      id: 1,
      question:
        "Which advantage of multithreading allows an application to remain usable while a long-running task executes?",
      options: ["Scalability", "Responsiveness", "Economy", "Resource Sharing"],
      correct: 1,
      explanation:
        "Responsiveness allows an application to continue running even when a lengthy operation occurs in a separate thread.",
    },
    {
      id: 2,
      question:
        "Which feature allows threads to share code and data of the same process?",
      options: [
        "Message passing",
        "Separate address spaces",
        "Resource sharing",
        "Context switching",
      ],
      correct: 2,
      explanation:
        "Threads share the same memory space of the process, giving them automatic access to shared resources.",
    },
    {
      id: 3,
      question:
        "Why is creating a thread generally more economical than creating a process?",
      options: [
        "Threads do not need memory at all",
        "Threads share resources of their parent process",
        "Processes execute faster than threads",
        "Threads run only on a single core",
      ],
      correct: 1,
      explanation:
        "Thread creation is cheaper because threads reuse the memory and resources of their containing process.",
    },
    {
      id: 4,
      question:
        "On a multicore system, multithreading improves performance primarily due to:",
      options: [
        "Better RAM usage",
        "Parallel execution",
        "Better power management",
        "Reduced memory fragmentation",
      ],
      correct: 1,
      explanation:
        "Multiple cores allow threads to run simultaneously, enabling true parallel execution.",
    },
    {
      id: 5,
      question:
        "A system that rapidly switches between tasks to make progress is considered:",
      options: ["Parallel", "Concurrent", "Single-threaded", "Kernel-based"],
      correct: 1,
      explanation:
        "Concurrency means multiple tasks make progress, even without running simultaneously.",
    },
    {
      id: 6,
      question: "User-level threads are managed by:",
      options: [
        "The hardware",
        "The kernel",
        "The compiler",
        "A thread library above the kernel",
      ],
      correct: 3,
      explanation:
        "User threads are created and controlled without kernel involvement, using a user-level thread library.",
    },
    {
      id: 7,
      question:
        "Which multithreading model maps many user-level threads to a single kernel thread?",
      options: ["One-to-one", "Two-level", "Many-to-one", "Many-to-many"],
      correct: 2,
      explanation:
        "The many-to-one model maps all user threads onto one kernel thread.",
    },
    {
      id: 8,
      question: "Which model maps each user thread to a kernel thread?",
      options: ["Many-to-one", "Two-level", "One-to-one", "Many-to-many"],
      correct: 2,
      explanation:
        "The one-to-one model assigns every user thread its own kernel thread.",
    },
    {
      id: 9,
      question:
        "Which multithreading model multiplexes many user threads to fewer or equal kernel threads?",
      options: ["Two-level", "One-to-one", "Many-to-many", "Many-to-one"],
      correct: 2,
      explanation:
        "The many-to-many model connects user threads to multiple kernel threads, allowing flexible scheduling.",
    },
    {
      id: 10,
      question: "The two-level model differs from many-to-many because it:",
      options: [
        "Requires only one kernel thread",
        "Allows binding a user thread to a specific kernel thread",
        "Map threads using hardware interrupts",
        "Does not support concurrency",
      ],
      correct: 1,
      explanation:
        "Two-level model allows optional binding between a user thread and a kernel thread.",
    },
    {
      id: 11,
      question:
        "Which is the first challenge in programming for multicore systems?",
      options: [
        "Identifying tasks",
        "Data dependency",
        "Balance",
        "Testing and debugging",
      ],
      correct: 0,
      explanation:
        "Task identification is the first challenge: finding parts of the program that can run in parallel.",
    },
    {
      id: 12,
      question: "Which challenge focuses on dividing data among cores?",
      options: ["Balance", "Identifying tasks", "Testing", "Data splitting"],
      correct: 3,
      explanation:
        "Data splitting distributes data across cores to support parallel processing.",
    },
    {
      id: 13,
      question:
        "When one task relies on results from another task, this is known as:",
      options: [
        "Thread starvation",
        "Data dependency",
        "Load imbalance",
        "Context coupling",
      ],
      correct: 1,
      explanation:
        "Data dependency occurs when one task requires the output of another, requiring synchronization.",
    },
    {
      id: 14,
      question: "Debugging multithreaded programs is difficult because:",
      options: [
        "Threads run slower",
        "Threads cannot access memory",
        "Execution paths are unpredictable",
        "Compilers disable optimizations",
      ],
      correct: 2,
      explanation:
        "Multiple threads introduce many possible execution interleavings, making debugging harder.",
    },
    {
      id: 15,
      question: "Data parallelism involves:",
      options: [
        "Splitting tasks across cores",
        "Running different operations on shared data",
        "Distributing subsets of the same data across cores",
        "Mapping threads to kernel threads",
      ],
      correct: 2,
      explanation:
        "Data parallelism processes different portions of the same dataset on different cores.",
    },
    {
      id: 16,
      question: "Task parallelism differs from data parallelism because it:",
      options: [
        "Runs identical operations on different data",
        "Runs unique operations on possibly shared data",
        "Requires user-level threads only",
        "Is slower on multicore systems",
      ],
      correct: 1,
      explanation:
        "Task parallelism assigns different tasks (operations) to different threads.",
    },
    {
      id: 17,
      question: "Which scenario demonstrates concurrency but not parallelism?",
      options: [
        "Two threads running at the same time on two cores",
        "One core rapidly switching between threads",
        "Two cores executing two tasks simultaneously",
        "Two processes running in parallel on separate cores",
      ],
      correct: 1,
      explanation:
        "Concurrency occurs when tasks make progress without actually running at the same time.",
    },
    {
      id: 18,
      question: "What is a drawback of the many-to-one model?",
      options: [
        "Wastes CPU cores",
        "Cannot run in parallel on multicore systems",
        "Requires too many kernel threads",
        "Prevents resource sharing",
      ],
      correct: 1,
      explanation:
        "Many-to-one cannot achieve parallelism because only one kernel thread exists.",
    },
    {
      id: 19,
      question:
        "Which model offers the best flexibility and performance trade-off for modern OS designs?",
      options: ["Many-to-one", "One-to-one", "Many-to-many", "Two-level"],
      correct: 2,
      explanation:
        "Many-to-many allows concurrency, parallelism, and efficient thread management.",
    },
    {
      id: 20,
      question:
        "Why must programmers consider task balance in multicore design?",
      options: [
        "Some tasks may overpower the scheduler",
        "Unbalanced tasks reduce the benefit of parallel execution",
        "Threads always take equal time to execute",
        "Balance ensures fewer kernel threads are created",
      ],
      correct: 1,
      explanation:
        "Running a small or low-value task on a separate core can waste resources and reduce performance.",
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
      question: "هل معاذ ومصطفى اب اشرف عبط؟",
      options: ["نعم", "لا"],
      correct: 0,
      explanation: "في حاجة غلط في دماغمهم الجماعة دول!",
    },
  ],
  "ds-chapter-1": [
    {
      id: 1,
      question: "Which of the following best describes Data Science?",
      options: [
        "A field focused only on designing computer hardware",
        "An interdisciplinary field that extracts insights from data using statistics and computation",
        "A branch of mathematics focused solely on equations",
        "A technique for storing files efficiently",
      ],
      correct: 1,
      explanation:
        "Data science uses statistics, programming, and domain knowledge to extract value from data.",
    },

    {
      id: 2,
      question:
        "Which term refers to raw facts that have not yet been processed?",
      options: ["Information", "Knowledge", "Data", "Insight"],
      correct: 2,
      explanation:
        "Data are raw unprocessed facts, while information is processed and meaningful.",
    },

    {
      id: 3,
      question: "Which of the following is an example of structured data?",
      options: [
        "A collection of audio recordings",
        "A folder of images",
        "A relational database table",
        "Unlabeled social media posts",
      ],
      correct: 2,
      explanation:
        "Structured data follows a predefined schema, like relational tables.",
    },

    {
      id: 4,
      question: "Which step typically comes first in the Data Science process?",
      options: [
        "Model evaluation",
        "Data cleaning",
        "Defining the problem",
        "Model deployment",
      ],
      correct: 2,
      explanation:
        "A project begins with defining the problem before collecting or cleaning data.",
    },

    {
      id: 5,
      question:
        "What does a domain expert contribute to a data science project?",
      options: [
        "Programming tools",
        "Context and understanding of the real-world problem",
        "New statistical models",
        "Database schemas",
      ],
      correct: 1,
      explanation:
        "Domain experts provide contextual understanding that guides data interpretation.",
    },

    {
      id: 6,
      question:
        "Which of the following is NOT a typical responsibility of a data scientist?",
      options: [
        "Collecting and cleaning data",
        "Designing machine learning models",
        "Performing statistical analysis",
        "Assembling computer hardware",
      ],
      correct: 3,
      explanation:
        "Hardware assembly is unrelated to data science responsibilities.",
    },

    {
      id: 7,
      question:
        "Which skill is essential for communicating findings in data science?",
      options: [
        "Storytelling and visualization",
        "Circuit design",
        "Operating system development",
        "Network packet routing",
      ],
      correct: 0,
      explanation:
        "Data visualization and communication are critical parts of presenting insights.",
    },

    {
      id: 8,
      question: "What is the main purpose of exploratory data analysis (EDA)?",
      options: [
        "Testing a finalized model",
        "Exploring patterns, anomalies, and structure in data",
        "Deploying a model to production",
        "Encrypting sensitive information",
      ],
      correct: 1,
      explanation: "EDA helps uncover patterns and prepare for modeling.",
    },

    {
      id: 9,
      question: "What type of data is produced by sensors and IoT devices?",
      options: [
        "Highly structured numerical streams",
        "Only unstructured text",
        "Only images",
        "Only categorical values",
      ],
      correct: 0,
      explanation: "Sensors commonly produce numeric time-series data.",
    },

    {
      id: 10,
      question:
        "Which term refers to the process of transforming data into a usable format?",
      options: [
        "Data cleaning",
        "Data mining",
        "Data retrieval",
        "Data warehousing",
      ],
      correct: 0,
      explanation:
        "Cleaning resolves missing, inconsistent, and noisy data issues.",
    },

    {
      id: 11,
      question: "Information differs from data because:",
      options: [
        "Information is raw while data is processed",
        "Information requires context and interpretation",
        "Information can only be stored in databases",
        "Information is always text-based",
      ],
      correct: 1,
      explanation:
        "Information results from processing and interpreting raw data.",
    },

    {
      id: 12,
      question: "Which of the following is an unstructured data type?",
      options: ["SQL table", "CSV file", "Image collection", "Excel sheet"],
      correct: 2,
      explanation: "Images lack a predefined schema, making them unstructured.",
    },

    {
      id: 13,
      question:
        "Which role is responsible for maintaining and optimizing databases for storage and access?",
      options: [
        "Machine Learning Engineer",
        "Data Engineer",
        "Statistician",
        "UX Designer",
      ],
      correct: 1,
      explanation: "Data engineers build pipelines and manage storage systems.",
    },

    {
      id: 14,
      question: "Machine learning models rely primarily on:",
      options: [
        "Heuristic guesses",
        "Pattern learning from historical data",
        "Manual labeling of every possible scenario",
        "Purely random behaviors",
      ],
      correct: 1,
      explanation:
        "ML models learn patterns from existing data to make predictions.",
    },

    {
      id: 15,
      question: "Which of the following is a disadvantage of big data?",
      options: [
        "It always guarantees perfect predictions",
        "It can be expensive to store, process, and analyze",
        "It removes the need for domain experts",
        "It eliminates uncertainty in decision-making",
      ],
      correct: 1,
      explanation:
        "Large datasets require resources and expertise to manage effectively.",
    },

    {
      id: 16,
      question:
        "A model that performs very well on training data but poorly on new data is experiencing:",
      options: [
        "Underfitting",
        "Overfitting",
        "Generalization",
        "Normalization",
      ],
      correct: 1,
      explanation:
        "Overfitting means the model memorizes training data instead of learning patterns.",
    },

    {
      id: 17,
      question:
        "Which step involves checking the accuracy, precision, and overall performance of a model?",
      options: [
        "Model evaluation",
        "Data collection",
        "Data storytelling",
        "Feature extraction",
      ],
      correct: 0,
      explanation:
        "Evaluation checks how well the model performs on unseen data.",
    },

    {
      id: 18,
      question:
        "Which technique is commonly used for reducing dimensionality in data?",
      options: [
        "PCA (Principal Component Analysis)",
        "SQL indexing",
        "CPU parallelization",
        "Network segmentation",
      ],
      correct: 0,
      explanation: "PCA reduces dimensionality while preserving variance.",
    },

    {
      id: 19,
      question:
        "Which of the following best describes the role of a hypothesis in data analysis?",
      options: [
        "A guaranteed conclusion about the dataset",
        "A testable statement that can be evaluated with statistical methods",
        "A visualization technique",
        "A type of unstructured data",
      ],
      correct: 1,
      explanation: "Hypotheses must be testable using data-driven approaches.",
    },

    {
      id: 20,
      question:
        "What is the main challenge in working with real-world datasets?",
      options: [
        "They are always perfectly clean and complete",
        "They often contain missing, noisy, or inconsistent data",
        "They never require preprocessing",
        "They are too small to analyze",
      ],
      correct: 1,
      explanation:
        "Real-world data typically requires significant cleaning before analysis.",
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
