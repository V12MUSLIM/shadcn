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
        description: "Ch3 threads",
      },
      {
        id: "os-chapter-1.1",
        title: "OS Ch-1 with Essay Questions",
        description: "Virtual memory and paging techniques",
      },
      {
        id: "os-chapter-2.1",
        title: "OS Ch-2 with Essay Questions",
        description: "Ch2 Process",
      },
      {
        id: "os-chapter-3.1",
        title: "OS Ch-3 with Essay Questions",
        description: "Ch3 threads",
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
      {
        id: "algo-chapter-1-0.2",
        title: "Algorithm Ch-1 V2",
        description: "Merge sort, quick sort, and more",
      },
    ],
    pdfs: [
      {
        id: "algo-sorting",
        title: "Algorithms 1",
        file: "/Algorithms 1.pdf",
      },
      {
        id: "algo-search",
        title: "Algorithms 2 CH2",
        file: "/Algorithms 2.pdf",
      },
      {
        id: "algo-complexity",
        title: "Algorithms 3 CH2",
        file: "/Algorithms 3.pdf",
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
  "os-chapter-1.1": [
    // Essay Questions (20 questions)
    {
      id: 1,
      question:
        "Explain the difference between multiprogramming and time-sharing systems. How does each approach optimize system resource utilization?",
      type: "essay",
      explanation:
        "Multiprogramming keeps several jobs in memory simultaneously and switches between them when one job waits (e.g., for I/O), keeping the CPU busy. Time-sharing extends this concept by switching among jobs so frequently that users can interact with programs while running, providing the illusion of dedicated system access. Multiprogramming focuses on CPU utilization efficiency, while time-sharing emphasizes user interaction and response time (typically under one second).",
    },
    {
      id: 2,
      question:
        "Define the concept of dual-mode operation in operating systems and explain why it is critical for system protection. What are the two modes and how do they differ?",
      type: "essay",
      explanation:
        "Dual-mode operation distinguishes between user mode (mode bit = 1) and kernel mode (mode bit = 0). In kernel mode, the OS can execute privileged instructions and access all system resources. In user mode, applications run with restricted access. This separation prevents user programs from causing system-wide errors or malicious damage. When a user program needs OS services, it makes a system call, triggering a transition to kernel mode. The hardware enforces this by treating privileged instructions in user mode as illegal and trapping to the OS.",
    },
    {
      id: 3,
      question:
        "Explain the bootstrap process from power-on to a fully operational system. Include the role of firmware, kernel loading, and system daemons.",
      type: "essay",
      explanation:
        "When powered on, the bootstrap program (stored in ROM/EEPROM firmware) initializes CPU registers, device controllers, and memory contents. It then locates the OS kernel and loads it into memory. Once loaded, the kernel starts providing services and loads system programs into memory as system processes/daemons. On UNIX, 'init' is the first system process that starts other daemons. After this phase completes, the system is fully booted and waits for events signaled by interrupts.",
    },
    {
      id: 4,
      question:
        "Compare and contrast symmetric multiprocessing (SMP) and asymmetric multiprocessing. Which is more commonly used and why?",
      type: "essay",
      explanation:
        "In asymmetric multiprocessing, processors have specific assigned tasks with a boss-worker relationship where a boss processor controls the system and other processors follow instructions or handle predefined tasks. In symmetric multiprocessing (SMP), all processors are peers performing all OS tasks equally with no boss-worker relationship. SMP is more common because it's more efficient, provides better load balancing, and doesn't have a single point of control failure. However, SMP requires more complex coordination mechanisms.",
    },
    {
      id: 5,
      question:
        "Define what constitutes a process versus a program. Explain the difference between single-threaded and multithreaded processes.",
      type: "essay",
      explanation:
        "A program is a passive entity—the contents of a file stored on disk containing instructions. A process is an active entity—a program loaded into memory and executing. A single-threaded process has one program counter specifying the next instruction to execute, requiring sequential execution. A multithreaded process has multiple program counters, each pointing to the next instruction for a given thread, allowing concurrent execution paths within the same process. The process is the unit of work in a system.",
    },
    {
      id: 6,
      question:
        "Explain the memory hierarchy in computer systems. Why can't programs and data reside permanently in main memory?",
      type: "essay",
      explanation:
        "The memory hierarchy ranges from fast, volatile, expensive storage (registers, cache) to slower, non-volatile, cheaper storage (main memory, SSDs, magnetic disks, tapes). Programs and data cannot reside permanently in main memory for two reasons: (1) main memory is too small to store all needed programs and data permanently, and (2) main memory is volatile and loses contents when power is lost. Therefore, secondary storage (like magnetic disks) provides permanent storage, with programs loaded into memory only when needed for execution.",
    },
    {
      id: 7,
      question:
        "Describe the interrupt mechanism in operating systems. Differentiate between hardware interrupts and software interrupts (traps), and explain how the CPU handles them.",
      type: "essay",
      explanation:
        "Interrupts signal event occurrences to the CPU. Hardware interrupts are triggered by devices sending signals through the system bus at any time. Software interrupts (traps/exceptions) are triggered by executing system calls or by errors like division by zero. When interrupted, the CPU stops current execution and transfers control to a fixed location containing the interrupt service routine's starting address. A table of pointers in low memory provides quick access to interrupt-specific handlers. After handling, control returns to the interrupted process.",
    },
    {
      id: 8,
      question:
        "Explain the concept of virtual memory and its advantages. How does it differ from swapping?",
      type: "essay",
      explanation:
        "Virtual memory is a technique allowing execution of processes not completely in memory, enabling users to run programs larger than physical memory. It abstracts main memory into a large, uniform storage array, separating logical memory (user view) from physical memory, freeing programmers from memory-storage limitations. Swapping moves entire processes between main memory and disk to ensure reasonable response times. Virtual memory is more sophisticated, managing memory at the page level rather than entire processes, providing better memory utilization and flexibility.",
    },
    {
      id: 9,
      question:
        "Define cache coherency and explain why it becomes a critical issue in multiprocessor systems. How does this problem extend to distributed environments?",
      type: "essay",
      explanation:
        "Cache coherency ensures that when data exists in multiple caches simultaneously, updates to that data in one cache are immediately reflected in all other caches. In multiprocessor systems, each CPU has a local cache, and if multiple CPUs access the same data (e.g., variable A), concurrent updates can create inconsistencies. This is typically a hardware issue. In distributed systems, the problem extends to file replicas on different computers—when one replica updates, all others must be synchronized quickly to maintain consistency across the network.",
    },
    {
      id: 10,
      question:
        "Explain the difference between clustered systems and multicore systems. How do they differ in architecture and coupling?",
      type: "essay",
      explanation:
        "Multicore systems have multiple processing cores on a single chip, with each core having its own registers and possibly local cache, sharing some resources like main memory. They are tightly coupled. Clustered systems gather multiple complete computer systems (nodes) together, where each node may itself be a single processor or multicore system. Clustered systems are loosely coupled, connected via LAN, sharing storage. While multicore systems are always multiprocessor systems, not all multiprocessor systems are multicore—clusters being an example.",
    },
    {
      id: 11,
      question:
        "Describe the role of Direct Memory Access (DMA) in I/O operations. Why is it necessary and what problem does it solve?",
      type: "essay",
      explanation:
        "DMA solves the high overhead problem of interrupt-driven I/O when moving bulk data. In interrupt-driven I/O, the CPU is interrupted for each small data transfer, which is inefficient for large data movements like disk I/O. With DMA, after setting up buffers, pointers, and counters, the device controller transfers entire data blocks directly between its buffer storage and memory without CPU intervention. The CPU is interrupted only once when the entire block transfer completes, freeing the CPU for other tasks during the transfer.",
    },
    {
      id: 12,
      question:
        "Explain the concept of graceful degradation and fault tolerance in multiprocessor systems. How do they differ?",
      type: "essay",
      explanation:
        "Graceful degradation is the ability to continue providing service proportional to the level of surviving hardware after component failures—the system continues operating but with reduced capacity. Fault tolerance goes beyond this: the system can suffer failure of any single component and still continue full operation without service degradation. Fault-tolerant systems require mechanisms to detect, diagnose, and if possible correct failures. Graceful degradation accepts reduced performance, while fault tolerance maintains full functionality despite failures.",
    },
    {
      id: 13,
      question:
        "Define the four main components of a computer system and explain how the operating system acts as an intermediary between them.",
      type: "essay",
      explanation:
        "The four components are: hardware (physical resources), operating system (resource manager), application programs (tools for solving user problems), and users. The OS acts as intermediary by managing hardware resources (CPU, memory, I/O devices) and providing services to application programs. It abstracts hardware complexity, provides a convenient interface for users and applications, acts as a resource allocator deciding which resources each program receives, and serves as a control program preventing errors and improper computer use.",
    },
    {
      id: 14,
      question:
        "Explain the job pool concept in multiprogramming systems and describe the process of job scheduling and CPU scheduling.",
      type: "essay",
      explanation:
        "The job pool consists of all processes residing on disk awaiting main memory allocation. Since main memory is too small for all jobs, only a subset is kept in memory. Job scheduling involves the OS selecting which jobs from the pool to load into memory for execution. CPU scheduling occurs when multiple jobs in memory are ready to run simultaneously—the system must choose which job runs first. This two-level scheduling ensures efficient resource utilization: job scheduling manages memory allocation while CPU scheduling manages processor time distribution.",
    },
    {
      id: 15,
      question:
        "Describe the instruction-execution cycle in a von Neumann architecture. Include the roles of registers and memory in this process.",
      type: "essay",
      explanation:
        "In a von Neumann architecture, the instruction-execution cycle: (1) fetches an instruction from memory and stores it in the instruction register, (2) decodes the instruction which may require fetching operands from memory into internal registers, (3) executes the instruction on the operands, and (4) may store the result back in memory. The load instruction moves data from memory to CPU registers, while store moves register contents to memory. The memory unit sees only a stream of addresses; it doesn't distinguish between instruction fetches and data operations.",
    },
    {
      id: 16,
      question:
        "Explain the three main advantages of multiprocessor systems and provide examples of how each advantage manifests.",
      type: "essay",
      explanation:
        "The three main advantages are: (1) Increased throughput—by having multiple processors, more work is completed in less time, though not linearly due to overhead. (2) Economy of scale—sharing peripherals, mass storage, and power supplies among processors is more cost-effective than separate single-processor systems. (3) Increased reliability—if one processor fails, the system continues operating (graceful degradation or fault tolerance), unlike single-processor systems where one failure stops all operations. These advantages make multiprocessor systems valuable for mission-critical applications.",
    },
    {
      id: 17,
      question:
        "Define what constitutes the kernel of an operating system and distinguish it from system programs and application programs.",
      type: "essay",
      explanation:
        "The kernel is the one program running at all times on the computer—the core of the operating system. System programs are associated with the OS but are not necessarily part of the kernel; they run as system processes/daemons providing services (like 'init' in UNIX). Application programs include all programs not associated with system operation—they're user-facing tools for specific tasks. The kernel provides fundamental services and resource management, system programs extend OS functionality, and application programs solve user-specific problems.",
    },
    {
      id: 18,
      question:
        "Explain how the timer mechanism prevents user programs from monopolizing the CPU. How does this relate to system control and protection?",
      type: "essay",
      explanation:
        "A timer is set to interrupt the computer after a specified period (fixed or variable, e.g., 1/60 second to 1 second). It's implemented using a fixed-rate clock and counter—the OS sets the counter, and each clock tick decrements it. When the counter reaches zero, an interrupt occurs, returning control to the OS. This prevents user programs from getting stuck in infinite loops or failing to call system services. The timer ensures the OS maintains control over the CPU, enabling multiprogramming and time-sharing by forcing periodic context switches.",
    },
    {
      id: 19,
      question:
        "Compare symmetric clustering and asymmetric clustering. Discuss the efficiency trade-offs and application requirements for each approach.",
      type: "essay",
      explanation:
        "In asymmetric clustering, one machine operates in hot-standby mode while another runs applications—the standby monitors the active server and takes over if it fails. In symmetric clustering, two or more hosts run applications simultaneously and monitor each other. Symmetric clustering is more efficient as it uses all available hardware, but applications must be written with parallelization techniques to divide work among nodes. Asymmetric clustering is simpler but wastes standby resources. The choice depends on application design capabilities and redundancy requirements.",
    },
    {
      id: 20,
      question:
        "Explain the relationship between protection and security in operating systems. How do they differ in addressing system vulnerabilities?",
      type: "essay",
      explanation:
        "Protection is any mechanism controlling process or user access to system resources—it's about managing internal access rights and preventing processes from interfering with each other. Security defends the system from external and internal attacks beyond access control. A system can have adequate protection but still be insecure—for example, if authentication credentials are stolen, protected data can be compromised despite working file and memory protection. Protection focuses on access control mechanisms, while security encompasses broader defense against threats including authentication breaches, malware, and attacks.",
    },

    // MCQ Questions (30 questions)
    {
      id: 21,
      question:
        "Which storage type is volatile and loses its contents when power is turned off?",
      options: ["Magnetic disk", "Main memory", "Solid-state disk", "NVRAM"],
      correct: 1,
      explanation:
        "Main memory (RAM) is volatile storage that loses its contents when power is lost. This is one reason why secondary storage like magnetic disks is necessary—to provide permanent storage for programs and data.",
    },
    {
      id: 22,
      question:
        "What is the mode bit value when the system is operating in kernel mode?",
      options: ["1", "0", "2", "-1"],
      correct: 1,
      explanation:
        "The mode bit is 0 for kernel mode and 1 for user mode. Kernel mode allows execution of privileged instructions and full system access, while user mode restricts these capabilities.",
    },
    {
      id: 23,
      question:
        "Which of the following is NOT a responsibility of the operating system in process management?",
      options: [
        "Scheduling processes on CPUs",
        "Creating and deleting processes",
        "Compiling user programs",
        "Providing mechanisms for process synchronization",
      ],
      correct: 2,
      explanation:
        "Compiling user programs is the job of system programs (compilers), not the operating system itself. The OS handles process scheduling, creation/deletion, suspension/resumption, and synchronization mechanisms.",
    },
    {
      id: 24,
      question:
        "In a von Neumann architecture, where is a fetched instruction initially stored?",
      options: [
        "Cache memory",
        "Instruction register",
        "Main memory",
        "Program counter",
      ],
      correct: 1,
      explanation:
        "The instruction-execution cycle first fetches an instruction from memory and stores it in the instruction register. The instruction is then decoded and executed from there.",
    },
    {
      id: 25,
      question: "What type of interrupt is caused by division by zero?",
      options: [
        "Hardware interrupt",
        "Trap or exception",
        "Timer interrupt",
        "I/O interrupt",
      ],
      correct: 1,
      explanation:
        "Division by zero causes a trap (also called exception), which is a software-generated interrupt caused by an error or invalid operation, unlike hardware interrupts generated by devices.",
    },
    {
      id: 26,
      question:
        "Which storage device is nonvolatile and faster than magnetic disks?",
      options: ["Cache memory", "Main memory", "Solid-state disk", "Registers"],
      correct: 2,
      explanation:
        "Solid-state disks (SSDs) are nonvolatile, faster than magnetic disks, and don't lose data when power is off. They use technologies like flash memory or DRAM with battery backup.",
    },
    {
      id: 27,
      question: "What is the first system process started in UNIX systems?",
      options: ["kernel", "init", "bootstrap", "daemon"],
      correct: 1,
      explanation:
        "In UNIX, 'init' is the first system process that runs and is responsible for starting many other system daemons during the boot process.",
    },
    {
      id: 28,
      question:
        "Where is the table of pointers to interrupt routines typically stored?",
      options: ["High memory", "Low memory", "Cache", "Secondary storage"],
      correct: 1,
      explanation:
        "The interrupt vector table containing pointers to interrupt routines is stored in low memory (the first hundred or so locations) to provide fast access when interrupts occur.",
    },
    {
      id: 29,
      question:
        "Which data structure uses the LIFO (Last In, First Out) principle?",
      options: ["Queue", "Stack", "Linked list", "Binary tree"],
      correct: 1,
      explanation:
        "A stack uses LIFO principle—the last item pushed onto the stack is the first item popped off. Operating systems commonly use stacks for function calls.",
    },
    {
      id: 30,
      question:
        "What is the typical response time requirement for time-sharing systems?",
      options: [
        "Less than one minute",
        "Less than one second",
        "Less than one millisecond",
        "Less than one hour",
      ],
      correct: 1,
      explanation:
        "Time-sharing systems require short response times, typically less than one second, to provide interactive user experiences where users can interact with programs while they run.",
    },
    {
      id: 31,
      question:
        "Which of the following is NOT stored in firmware (ROM/EEPROM)?",
      options: [
        "Bootstrap program",
        "Factory-installed smartphone programs",
        "User application data",
        "Basic initialization code",
      ],
      correct: 2,
      explanation:
        "User application data is stored in rewritable memory or secondary storage, not firmware. Firmware contains the bootstrap program and static programs like factory-installed software that rarely change.",
    },
    {
      id: 32,
      question:
        "What happens when a privileged instruction is attempted in user mode?",
      options: [
        "It executes normally",
        "The hardware treats it as illegal and traps to the OS",
        "The system crashes",
        "It switches automatically to kernel mode",
      ],
      correct: 1,
      explanation:
        "When a privileged instruction is attempted in user mode, the hardware does not execute it but treats it as illegal and traps to the operating system, which can then handle the violation appropriately.",
    },
    {
      id: 33,
      question:
        "In a binary search tree, what is the relationship between parent and children?",
      options: [
        "Parent > both children",
        "Left child ≤ Parent < Right child",
        "Left child ≤ Right child",
        "Right child ≤ Parent < Left child",
      ],
      correct: 1,
      explanation:
        "A binary search tree requires the ordering: left child ≤ right child, where the left child is less than or equal to the parent, and the right child is greater than the parent.",
    },
    {
      id: 34,
      question: "What does NVRAM stand for and what is its key characteristic?",
      options: [
        "Non-Volatile RAM with battery backup",
        "Network Virtual RAM",
        "New Version RAM",
        "Non-Virtual Random Memory",
      ],
      correct: 0,
      explanation:
        "NVRAM is Non-Volatile RAM—essentially DRAM with battery backup power, allowing it to retain data even when main power is lost, combining RAM speed with non-volatile storage properties.",
    },
    {
      id: 35,
      question:
        "Which scheduling decision involves selecting jobs from the job pool to load into memory?",
      options: [
        "CPU scheduling",
        "Job scheduling",
        "I/O scheduling",
        "Process scheduling",
      ],
      correct: 1,
      explanation:
        "Job scheduling determines which jobs from the job pool on disk should be loaded into main memory for execution. CPU scheduling then decides which job in memory runs first.",
    },
    {
      id: 36,
      question:
        "What is the main disadvantage of using a linked list compared to an array?",
      options: [
        "Cannot store varying-sized items",
        "Difficult to insert/delete items",
        "Performance for retrieving items is O(n)",
        "Requires more complex programming",
      ],
      correct: 2,
      explanation:
        "Retrieving a specified item in a linked list requires potentially traversing all n elements in the worst case, giving O(n) performance. Arrays allow direct access in O(1) time but are less flexible.",
    },
    {
      id: 37,
      question:
        "MS-DOS lacked dual-mode operation because the Intel 8088 architecture:",
      options: [
        "Was too slow",
        "Had no mode bit",
        "Had too little memory",
        "Couldn't handle interrupts",
      ],
      correct: 1,
      explanation:
        "The Intel 8088 architecture had no mode bit and therefore no dual mode operation. This allowed user programs to potentially wipe out the OS or interfere with device operations, creating serious security shortcomings.",
    },
    {
      id: 38,
      question:
        "Which instruction moves data from main memory to an internal CPU register?",
      options: ["Store", "Load", "Fetch", "Push"],
      correct: 1,
      explanation:
        "The load instruction moves a byte or word from main memory to an internal register within the CPU. The store instruction does the opposite, moving register contents to main memory.",
    },
    {
      id: 39,
      question: "What is the role of a device driver in the operating system?",
      options: [
        "To control physical device hardware directly",
        "To provide a uniform interface between the OS and device controller",
        "To manufacture device controllers",
        "To allocate memory for devices",
      ],
      correct: 1,
      explanation:
        "A device driver understands the specific device controller and provides the rest of the operating system with a uniform interface to the device, abstracting hardware-specific details.",
    },
    {
      id: 40,
      question:
        "In a hash map, what problem occurs when two inputs produce the same hash value?",
      options: [
        "Hash overflow",
        "Hash collision",
        "Hash conflict",
        "Hash error",
      ],
      correct: 1,
      explanation:
        "A hash collision occurs when two different inputs produce the same hash value, linking to the same table location. This is typically resolved using a linked list at that location containing all items with the same hash value.",
    },
    {
      id: 41,
      question: "What is caching based on the assumption of?",
      options: [
        "Data will never change",
        "Data will be needed again soon",
        "Memory is unlimited",
        "CPU is faster than memory",
      ],
      correct: 1,
      explanation:
        "Caching works on the principle that when information is used, it's copied to faster storage (cache) under the assumption it will be needed again soon, avoiding slower access to the original storage location.",
    },
    {
      id: 42,
      question:
        "Which of the following is a characteristic of mobile computing devices?",
      options: [
        "High power consumption",
        "Large physical size",
        "Portable and lightweight",
        "Limited connectivity",
      ],
      correct: 2,
      explanation:
        "Mobile computing devices like smartphones and tablets are distinguished by being portable and lightweight, allowing computing on the go.",
    },
    {
      id: 43,
      question: "In peer-to-peer systems, how are nodes distinguished?",
      options: [
        "Servers have more power than clients",
        "All nodes are peers; each can be client or server",
        "Clients cannot provide services",
        "Servers cannot request services",
      ],
      correct: 1,
      explanation:
        "In peer-to-peer systems, clients and servers are not distinguished—all nodes are considered peers and can act as either client or server depending on whether they're requesting or providing services.",
    },
    {
      id: 44,
      question: "What does a bitmap represent in operating systems?",
      options: [
        "Graphical images",
        "Status of n items using n binary digits",
        "Memory addresses",
        "CPU instructions",
      ],
      correct: 1,
      explanation:
        "A bitmap is a string of n binary digits representing the status of n items. For example, it can indicate disk block availability where 0 means available and 1 means unavailable (or vice versa).",
    },
    {
      id: 45,
      question:
        "Which communication scheme allows different processes on different computers to exchange messages in network operating systems?",
      options: [
        "Shared memory",
        "Direct access",
        "Message passing",
        "Pipe communication",
      ],
      correct: 2,
      explanation:
        "Network operating systems provide a communication scheme (message passing) that allows different processes on different computers to exchange messages across the network.",
    },
    {
      id: 46,
      question:
        "How many devices can typically be attached to a SCSI controller?",
      options: [
        "Three or more",
        "Five or more",
        "Seven or more",
        "Ten or more",
      ],
      correct: 2,
      explanation:
        "According to the text, seven or more devices can be attached to a small computer-systems interface (SCSI) controller.",
    },
    {
      id: 47,
      question:
        "What data structure uses the FIFO (First In, First Out) principle?",
      options: ["Stack", "Tree", "Queue", "Hash table"],
      correct: 2,
      explanation:
        "A queue uses FIFO principle—items are removed in the order they were inserted. Examples include print job queues and shoppers waiting in checkout lines.",
    },
    {
      id: 48,
      question: "In a multicore system, what does each core typically have?",
      options: [
        "Only shared cache",
        "Its own register set and local cache",
        "Shared registers among all cores",
        "No cache memory",
      ],
      correct: 1,
      explanation:
        "In typical multicore designs, each core has its own register set and its own local cache. Some designs may also use shared cache or combinations of local and shared caches.",
    },
    {
      id: 49,
      question: "What connects multiple systems in a clustered system?",
      options: [
        "System bus",
        "Local-area network (LAN)",
        "Direct cable",
        "Wireless only",
      ],
      correct: 1,
      explanation:
        "Clustered systems consist of multiple individual computer systems (nodes) that are closely linked via a local-area network (LAN) and typically share storage.",
    },
    {
      id: 50,
      question: "Which of the following best describes a distributed system?",
      options: [
        "A single computer with multiple processors",
        "Multiple programs on one computer",
        "Physically separate networked computer systems",
        "Virtual machines on one host",
      ],
      correct: 2,
      explanation:
        "A distributed system is a collection of physically separate, possibly heterogeneous, computer systems that are networked to provide users with access to various resources maintained by the system.",
    },
  ],

  "os-chapter-2.1": [
    {
      id: 1,
      question:
        "Explain the fundamental differences between a program and a process. Why can two processes be associated with the same program yet be considered separate execution sequences?",
      type: "essay",
      explanation:
        "A program is a passive entity—a file containing instructions stored on disk (executable file). A process is an active entity with a program counter specifying the next instruction and associated resources. A program becomes a process when loaded into memory. Two processes can run the same program but are separate because each has its own data section, heap, stack, program counter, and register values. For example, multiple users running the same mail program create separate processes with different execution states, even though the text sections are identical. Each process maintains independent temporary data, global variables, and dynamically allocated memory.",
    },
    {
      id: 2,
      question:
        "Describe the five process states and explain why only one process can be in the running state on a single processor at any instant. What is the significance of the ready and waiting states?",
      type: "essay",
      explanation:
        "The five process states are: New (being created), Ready (waiting for CPU assignment), Running (instructions executing), Waiting (waiting for event like I/O completion), and Terminated (finished execution). Only one process can run on a processor at any instant because the CPU can only execute one instruction stream at a time. The Ready state is significant because many processes can be ready simultaneously, queued for processor time—this enables multiprogramming. The Waiting state is crucial because it allows the CPU to switch to other processes while one waits for slow I/O operations, maximizing CPU utilization. The distinction between Ready (can run but waiting for CPU) and Waiting (cannot run until event occurs) is essential for efficient scheduling.",
    },
    {
      id: 3,
      question:
        "What is a Process Control Block (PCB) and why is it essential for operating system functionality? Describe at least five types of information stored in a PCB and explain their importance.",
      type: "essay",
      explanation:
        "A PCB (or task control block) is the OS representation of a process containing all information about that specific process. It's essential because it serves as the repository for all data that varies between processes and must be preserved during context switches. Key information includes: (1) Process state—tracks whether process is new, ready, running, waiting, or terminated; (2) Program counter—indicates next instruction address; (3) CPU registers—accumulators, index registers, stack pointers, condition codes that must be saved during interrupts; (4) CPU-scheduling information—priority, scheduling queue pointers, parameters; (5) Memory-management information—base/limit registers, page tables, segment tables; (6) Accounting information—CPU time used, time limits, account numbers; (7) I/O status—allocated devices, open files list. Without PCBs, the OS couldn't manage multiple processes or perform context switching.",
    },
    {
      id: 4,
      question:
        "Compare and contrast the long-term scheduler and short-term scheduler. Why is it important for the long-term scheduler to select a good mix of I/O-bound and CPU-bound processes?",
      type: "essay",
      explanation:
        "The long-term scheduler (job scheduler) selects processes from the disk pool and loads them into memory, executing infrequently and controlling the degree of multiprogramming. The short-term scheduler (CPU scheduler) selects from ready processes and allocates the CPU, executing at least every 100 milliseconds and must be very fast. The process mix is critical: if all processes are I/O-bound, they spend most time doing I/O rather than computation, leaving the ready queue nearly empty and the short-term scheduler idle. If all processes are CPU-bound, they rarely request I/O, leaving the I/O waiting queue empty and devices unused. Both scenarios create system imbalance and poor resource utilization. A balanced mix ensures both CPU and I/O devices remain busy, maximizing overall system throughput and efficiency.",
    },
    {
      id: 5,
      question:
        "Explain what a context switch is, why it's necessary, and what makes it expensive. What information must be saved and restored during a context switch?",
      type: "essay",
      explanation:
        "A context switch is the process of saving the current process's state and restoring another process's state when switching the CPU between processes. It's necessary because interrupts cause the OS to change tasks, and multiprogramming/time-sharing require frequent process switching. Context switches are expensive because they're pure overhead—the system does no useful work while switching, and the time varies by hardware support and memory speed. The context (represented in the PCB) includes: CPU register values, program counter, process state, and memory-management information. During a switch, the system must perform a state save of the current process (storing all context in its PCB) and state restore of the different process (loading its context from its PCB). The frequency of context switches (potentially every 100ms) means this overhead significantly impacts system performance, which is why the short-term scheduler must be extremely fast.",
    },
    {
      id: 6,
      question:
        "Discuss process creation in operating systems. Explain the parent-child relationship, the two execution possibilities, and the two address-space possibilities when a new process is created.",
      type: "essay",
      explanation:
        "During execution, a process (parent) may create new processes (children), forming a tree structure identified by unique PIDs. The init process (PID 1) serves as root for all user processes. When creating a child, two execution possibilities exist: (1) parent continues executing concurrently with children, or (2) parent waits until some/all children terminate. Two address-space possibilities are: (1) child is a duplicate of parent with same program and data, or (2) child has a new program loaded. Children need resources (CPU time, memory, files, I/O devices) which they can obtain directly from the OS or be constrained to a subset of parent's resources. This flexibility allows different use cases—duplicating the parent is useful for parallel task execution, while loading a new program enables command execution. The parent-child relationship is fundamental to process management, enabling features like waiting for child termination and cascading termination.",
    },
    {
      id: 7,
      question:
        "What are zombie and orphan processes? Explain why zombie processes exist and what system mechanisms are related to their creation and removal.",
      type: "essay",
      explanation:
        "A zombie process is one that has terminated but whose parent hasn't yet called wait(), so its entry remains in the process table. Zombies exist because the process table must preserve the child's exit status until the parent retrieves it via wait(). The wait() system call allows parents to obtain the exit status and returns the terminated child's PID so parents know which child terminated. When wait() is called, the zombie's PID and process table entry are released. Orphan processes occur when a parent terminates without calling wait(), leaving children without a parent. Zombies represent a completed process awaiting status collection, while orphans are active processes whose parent died. Both situations require OS management—zombies to eventually clean up process table entries, and orphans to be reassigned (typically to init process). Cascading termination addresses related issues: in systems not allowing children to exist without parents, if a process terminates, all its children are also terminated.",
    },
    {
      id: 8,
      question:
        "Differentiate between independent and cooperating processes. Why would an operating system provide an environment for process cooperation, and what are the key benefits?",
      type: "essay",
      explanation:
        "Independent processes cannot affect or be affected by other executing processes—they don't share data. Cooperating processes can affect or be affected by other processes—they share data. Reasons for providing cooperation environments include: (1) Information sharing—multiple users accessing the same files or data require concurrent access capabilities; (2) Computation speedup—breaking tasks into parallel subtasks executing on multiple cores achieves faster completion; (3) Modularity—constructing systems by dividing functions into separate processes/threads improves design; (4) Convenience—users working on multiple simultaneous tasks (editing, listening to music, compiling) benefit from concurrent execution. Cooperation requires IPC mechanisms for exchanging data. The trade-off is increased complexity and synchronization requirements versus improved functionality, performance, and user experience. Modern systems extensively use cooperating processes for nearly all complex operations.",
    },
    {
      id: 9,
      question:
        "Compare the shared-memory and message-passing models of interprocess communication. What are the advantages and challenges of each approach?",
      type: "essay",
      explanation:
        "In shared-memory IPC, cooperating processes establish a shared memory region where they exchange information by reading/writing data. In message-passing IPC, communication occurs through messages exchanged between processes. Shared memory advantages: faster communication after setup (direct memory access), efficient for large data transfers. Challenges: requires processes to agree to remove OS protection preventing memory access between processes, synchronization is the programmer's responsibility. Message-passing advantages: easier to implement in distributed systems, OS handles protection and synchronization, works across network boundaries. Challenges: typically slower due to system call overhead, less efficient for large data transfers. Shared memory typically resides in the creating process's address space, and other processes must attach it. Message passing uses send() and receive() primitives with various implementation options (blocking/nonblocking). The choice depends on application needs—shared memory suits high-performance local communication, while message passing suits distributed systems and scenarios where OS-managed synchronization is valuable.",
    },
    {
      id: 10,
      question:
        "Explain the producer-consumer problem in the context of cooperating processes. How does this problem illustrate the need for synchronization, and what are practical examples of producer-consumer relationships in computing?",
      type: "essay",
      explanation:
        "The producer-consumer problem is a paradigm where a producer process generates information consumed by a consumer process. It illustrates fundamental cooperation and synchronization needs. For example, a compiler produces assembly code consumed by an assembler; the assembler produces object modules consumed by a loader; a web server produces HTML files/images consumed by client browsers. The solution uses a shared buffer between producer and consumer—the producer fills the buffer while the consumer empties it. They can operate concurrently (producer producing one item while consumer consumes another), but synchronization is critical: the consumer must not try consuming items not yet produced, and the producer must not overwrite unconsumed items. This requires careful coordination mechanisms. The problem demonstrates why cooperating processes need IPC mechanisms and synchronization primitives. It's fundamental because this pattern appears throughout computing—from I/O buffering to network communication to pipeline processing—wherever data flows between processing stages.",
    },

    // MCQ Questions (30 questions)
    {
      id: 11,
      question:
        "Which of the following is NOT a component typically included in a process?",
      options: [
        "Text section containing program code",
        "Heap for dynamically allocated memory",
        "Compiler optimization tables",
        "Stack containing function parameters and local variables",
      ],
      correct: 2,
      explanation:
        "A process includes the text section (program code), current activity (program counter and register contents), process stack (temporary data like function parameters, return addresses, local variables), data section (global variables), and heap (dynamically allocated memory). Compiler optimization tables are used during compilation but are not part of the runtime process structure.",
    },
    {
      id: 12,
      question:
        "When the Java Virtual Machine (JVM) executes a Java program, which statement is most accurate?",
      options: [
        "The JVM replaces the operating system's process model",
        "The JVM runs as a process that interprets Java code and executes native machine instructions",
        "Each Java class file runs as a separate OS process",
        "The JVM eliminates the need for a program counter",
      ],
      correct: 1,
      explanation:
        "The JVM executes as an ordinary operating system process that interprets loaded Java code and takes actions via native machine instructions on behalf of that code. When you run 'java Program', the java command starts the JVM as a process, which then executes the Java program in its virtual machine environment. The JVM is itself a process that serves as an execution environment for Java code.",
    },
    {
      id: 13,
      question:
        "A process transitions from the Running state to the Waiting state when:",
      options: [
        "It is forcibly removed from CPU due to an interrupt",
        "It issues an I/O request",
        "The scheduler assigns it to a processor",
        "It finishes execution",
      ],
      correct: 1,
      explanation:
        "A process moves from Running to Waiting when it must wait for some event to occur, such as I/O completion or signal reception. When a process issues an I/O request, it cannot continue execution until that I/O completes, so it enters the Waiting state. Being forcibly removed from CPU moves it to Ready state, scheduler assignment moves it to Running, and finishing execution moves it to Terminated.",
    },
    {
      id: 14,
      question:
        "Which process state indicates that a process is waiting to be assigned to a processor?",
      options: ["New", "Ready", "Waiting", "Running"],
      correct: 1,
      explanation:
        "The Ready state means the process is prepared to execute and is waiting to be assigned to a processor. Many processes can be in the Ready state simultaneously, forming the ready queue. This differs from Waiting state, where the process is waiting for some event (like I/O) to occur before it can even be ready to run.",
    },
    {
      id: 15,
      question:
        "What critical information must be saved when an interrupt occurs to allow a process to continue correctly afterward?",
      options: [
        "Only the program counter",
        "Only the CPU registers",
        "The program counter and CPU registers (including condition-code information)",
        "Only the process state and memory-management information",
      ],
      correct: 2,
      explanation:
        "When an interrupt occurs, both the program counter and CPU register contents (including accumulators, index registers, stack pointers, general-purpose registers, and condition-code information) must be saved. This state information is stored in the PCB and is essential for resuming the process correctly after the interrupt is handled. Saving only part of this information would lead to incorrect process continuation.",
    },
    {
      id: 16,
      question:
        "In the PCB, which type of information would include pointers to scheduling queues and process priority?",
      options: [
        "Process state information",
        "CPU-scheduling information",
        "Memory-management information",
        "Accounting information",
      ],
      correct: 1,
      explanation:
        "CPU-scheduling information includes process priority, pointers to scheduling queues, and other scheduling parameters. This information is used by the scheduler to make decisions about which process to run next and how to manage the various scheduling queues in the system.",
    },
    {
      id: 17,
      question:
        "Modern operating systems extend the traditional process concept by:",
      options: [
        "Eliminating the need for a program counter",
        "Allowing a process to have multiple threads of execution",
        "Removing the requirement for a process control block",
        "Preventing processes from having heaps",
      ],
      correct: 1,
      explanation:
        "Most modern operating systems have extended the process concept to allow a process to have multiple threads of execution, enabling it to perform more than one task at a time. This is especially beneficial on multicore systems where multiple threads can run in parallel. When a system supports threads, the PCB is expanded to include information for each thread.",
    },
    {
      id: 18,
      question: "What is the primary objective of multiprogramming?",
      options: [
        "To minimize memory usage",
        "To have some process running at all times, maximizing CPU utilization",
        "To reduce the number of context switches",
        "To eliminate the need for scheduling queues",
      ],
      correct: 1,
      explanation:
        "The objective of multiprogramming is to have some process running at all times to maximize CPU utilization. This is achieved by keeping multiple processes in memory so that when one process must wait (for I/O, for example), another process can use the CPU, preventing the CPU from sitting idle.",
    },
    {
      id: 19,
      question: "The ready queue is typically implemented as:",
      options: [
        "A circular buffer",
        "A hash table",
        "A linked list",
        "A binary tree",
      ],
      correct: 2,
      explanation:
        "The ready queue is generally stored as a linked list. A ready-queue header contains pointers to the first and final PCBs in the list, and each PCB includes a pointer field that points to the next PCB in the ready queue. This structure allows efficient insertion and removal of processes.",
    },
    {
      id: 20,
      question:
        "After a process is allocated the CPU and begins executing, which of the following events will NOT occur?",
      options: [
        "The process issues an I/O request and is placed in an I/O queue",
        "The process creates a child process and waits for its termination",
        "The process is forcibly removed from CPU due to interrupt and returns to ready queue",
        "The process automatically transitions to the Waiting state after exactly 100 milliseconds",
      ],
      correct: 3,
      explanation:
        "There is no automatic transition to Waiting state after a fixed time period. A process may issue I/O requests (moving to I/O queue), create child processes and wait, or be removed from CPU by interrupt (returning to ready queue). The 100 milliseconds mentioned in the text refers to how often the short-term scheduler executes, not an automatic state transition time.",
    },
    {
      id: 21,
      question:
        "How frequently does the short-term scheduler typically execute?",
      options: [
        "Once per second",
        "At least once every 100 milliseconds",
        "Once per hour",
        "Only when the system boots",
      ],
      correct: 1,
      explanation:
        "The short-term scheduler executes at least once every 100 milliseconds. Because of this short time between executions, the short-term scheduler must be very fast. This frequent execution enables the time-sharing objective of switching the CPU among processes so users can interact with programs while they run.",
    },
    {
      id: 22,
      question: "Which scheduler controls the degree of multiprogramming?",
      options: [
        "Short-term scheduler",
        "Medium-term scheduler",
        "Long-term scheduler",
        "I/O scheduler",
      ],
      correct: 2,
      explanation:
        "The long-term scheduler controls the degree of multiprogramming, which is the number of processes in memory. It selects processes from the disk pool and loads them into memory for execution. If the degree of multiprogramming is stable, the average rate of process creation must equal the average departure rate of processes leaving the system.",
    },
    {
      id: 23,
      question: "An I/O-bound process is characterized by:",
      options: [
        "Using more time doing computations than I/O",
        "Generating I/O requests infrequently",
        "Spending more time doing I/O than computations",
        "Never entering the Waiting state",
      ],
      correct: 2,
      explanation:
        "An I/O-bound process spends more of its time doing I/O than doing computations. In contrast, a CPU-bound process generates I/O requests infrequently and uses more of its time doing computations. The distinction is important for the long-term scheduler to maintain a balanced process mix.",
    },
    {
      id: 24,
      question:
        "If all processes in a system are I/O-bound, what problem occurs?",
      options: [
        "The I/O waiting queue will be empty and devices unused",
        "The ready queue will almost always be empty",
        "Context switches will happen too frequently",
        "The long-term scheduler will execute more frequently",
      ],
      correct: 1,
      explanation:
        "If all processes are I/O-bound, they spend most of their time doing I/O rather than computation, so the ready queue will almost always be empty and the short-term scheduler will have little to do. The system becomes unbalanced because the CPU remains underutilized while I/O devices are busy.",
    },
    {
      id: 25,
      question: "What does the context of a process include?",
      options: [
        "Only the program counter value",
        "Only the process state",
        "CPU registers, process state, and memory-management information",
        "Only the list of open files",
      ],
      correct: 2,
      explanation:
        "The context is represented in the PCB and includes the value of the CPU registers, the process state, and memory-management information. This complete context must be saved during a context switch to allow the process to resume correctly later. Saving only part of the context would result in incorrect process execution.",
    },
    {
      id: 26,
      question: "Context switching is considered overhead because:",
      options: [
        "It increases the degree of multiprogramming",
        "The system does no useful work while switching contexts",
        "It requires additional memory allocation",
        "It only occurs during system boot",
      ],
      correct: 1,
      explanation:
        "Context switching is pure overhead—the system performs no useful work while switching contexts. It's necessary for multiprogramming and time-sharing, but the time spent switching is time not spent executing user processes. The speed of context switching depends on hardware support and memory speed, and its frequency means this overhead can significantly impact system performance.",
    },
    {
      id: 27,
      question: "In Unix/Linux systems, what is the PID of the init process?",
      options: ["0", "1", "100", "-1"],
      correct: 1,
      explanation:
        "The init process always has a PID of 1 and serves as the root parent process for all user processes. Once the system has booted, init can create various user processes such as web servers, print servers, ssh servers, and others. All processes form a tree with init at the root.",
    },
    {
      id: 28,
      question: "Which statement about process creation is FALSE?",
      options: [
        "A child process can obtain resources directly from the operating system",
        "A child process must always have the same program as its parent",
        "A parent can wait until some or all children have terminated",
        "A child process may be constrained to a subset of parent's resources",
      ],
      correct: 1,
      explanation:
        "It's FALSE that a child must always have the same program as its parent. There are two address-space possibilities: the child can be a duplicate of the parent (same program and data), OR the child can have a new program loaded into it. This flexibility allows for different use cases like executing commands or parallel task processing.",
    },
    {
      id: 29,
      question: "What is cascading termination?",
      options: [
        "When multiple processes terminate due to lack of resources",
        "When a parent terminates and all its children must also be terminated",
        "When a process terminates and becomes a zombie",
        "When the long-term scheduler removes processes from memory",
      ],
      correct: 1,
      explanation:
        "Cascading termination occurs in systems that don't allow children to exist if their parent has terminated. When a process terminates (normally or abnormally), all its children must also be terminated. This phenomenon is normally initiated by the operating system to maintain system consistency.",
    },
    {
      id: 30,
      question: "The wait() system call serves which purpose?",
      options: [
        "It forces a process to enter the Waiting state",
        "It allows a parent to obtain the exit status of a terminated child",
        "It creates a new child process",
        "It moves a process from Ready to Running state",
      ],
      correct: 1,
      explanation:
        "The wait() system call allows a parent process to wait for the termination of a child process. It's passed a parameter that allows the parent to obtain the child's exit status, and it returns the process identifier of the terminated child so the parent can identify which child has terminated. This is essential for proper process synchronization and cleanup.",
    },
    {
      id: 31,
      question: "A zombie process is:",
      options: [
        "A process that has been assigned too low a priority",
        "A terminated process whose parent hasn't yet called wait()",
        "A process stuck in the Waiting state indefinitely",
        "A child process whose parent has terminated",
      ],
      correct: 1,
      explanation:
        "A zombie process is one that has terminated but whose parent has not yet called wait(). Its entry must remain in the process table until the parent calls wait() because the process table contains the process's exit status. Once wait() is called, the zombie's process identifier and process table entry are released.",
    },
    {
      id: 32,
      question:
        "What distinguishes an independent process from a cooperating process?",
      options: [
        "Independent processes run faster than cooperating processes",
        "Independent processes cannot affect or be affected by other processes",
        "Independent processes always have higher priority",
        "Independent processes can only run on single-core systems",
      ],
      correct: 1,
      explanation:
        "A process is independent if it cannot affect or be affected by other processes executing in the system. Any process that does not share data with any other process is independent. In contrast, a cooperating process can affect or be affected by other processes—any process that shares data with other processes is cooperating.",
    },
    {
      id: 33,
      question: "Which is NOT a reason for providing process cooperation?",
      options: [
        "Information sharing among users",
        "Computation speedup on multicore systems",
        "Eliminating the need for synchronization",
        "System modularity",
      ],
      correct: 2,
      explanation:
        "Process cooperation does NOT eliminate the need for synchronization—in fact, it requires it. Cooperation is provided for: information sharing (concurrent access to shared data), computation speedup (parallel subtasks on multiple cores), modularity (dividing system functions into separate processes/threads), and convenience (users working on multiple simultaneous tasks). Synchronization becomes necessary precisely because processes cooperate.",
    },
    {
      id: 34,
      question:
        "In shared-memory IPC, what must cooperating processes agree to do?",
      options: [
        "Use the same programming language",
        "Remove the OS restriction preventing access to each other's memory",
        "Execute on the same processor core",
        "Terminate at the same time",
      ],
      correct: 1,
      explanation:
        "Normally, the operating system prevents one process from accessing another process's memory. Shared memory requires that two or more processes agree to remove this restriction. The shared-memory region typically resides in the address space of the process creating it, and other processes must attach it to their address space to communicate.",
    },
    {
      id: 35,
      question:
        "In the producer-consumer problem, why must the producer and consumer be synchronized?",
      options: [
        "To ensure they run on the same processor",
        "To prevent the consumer from trying to consume items not yet produced",
        "To make sure they use the same programming language",
        "To guarantee they terminate simultaneously",
      ],
      correct: 1,
      explanation:
        "The producer and consumer must be synchronized so that the consumer does not try to consume an item that has not yet been produced. While they can run concurrently (producer producing one item while consumer consumes another), coordination is essential to maintain data integrity and prevent access to invalid data.",
    },
    {
      id: 36,
      question:
        "Which of the following is a practical example of the producer-consumer problem?",
      options: [
        "Two processes competing for the same CPU",
        "A compiler producing assembly code consumed by an assembler",
        "A process transitioning between Ready and Running states",
        "The long-term scheduler selecting processes from disk",
      ],
      correct: 1,
      explanation:
        "A compiler producing assembly code that is consumed by an assembler is a classic producer-consumer example. Other examples include: an assembler producing object modules consumed by a loader, and a web server producing HTML files and images consumed by client browsers. This pattern is fundamental to many computing scenarios.",
    },
    {
      id: 37,
      question: "In message-passing IPC, blocking send means:",
      options: [
        "The message is sent but may be lost",
        "The sending process is blocked until the message is received",
        "The sending process sends the message and immediately resumes",
        "Messages are sent in blocks of fixed size",
      ],
      correct: 1,
      explanation:
        "Blocking send (synchronous send) means the sending process is blocked until the message is received by the receiving process or by the mailbox. This ensures the sender knows the message was delivered before continuing. In contrast, nonblocking send allows the sender to send the message and immediately resume operation.",
    },
    {
      id: 38,
      question: "What happens with nonblocking receive in message-passing?",
      options: [
        "The receiver always blocks until a message arrives",
        "The receiver retrieves either a valid message or a null",
        "The receiver sends an error back to the sender",
        "The receiver terminates if no message is available",
      ],
      correct: 1,
      explanation:
        "With nonblocking receive (asynchronous receive), the receiver retrieves either a valid message or a null—it doesn't wait. This contrasts with blocking receive, where the receiver blocks until a message is available. The choice between blocking and nonblocking affects how processes coordinate and how responsive they are to other events.",
    },
    {
      id: 39,
      question:
        "Which best describes the relationship between program counter and process execution?",
      options: [
        "The program counter is only needed during process creation",
        "The program counter specifies the next instruction to execute",
        "The program counter stores the process's exit status",
        "The program counter determines the process priority",
      ],
      correct: 1,
      explanation:
        "The program counter specifies the address of the next instruction to be executed for a process. It's a crucial part of the process's current activity and must be saved in the PCB during context switches and interrupts. The program counter value, along with CPU registers, defines exactly where the process is in its execution sequence.",
    },
    {
      id: 40,
      question: "Which statement about scheduling queues is most accurate?",
      options: [
        "Only one type of queue exists in process scheduling",
        "The system includes ready queues and device queues",
        "Processes never move between different queues",
        "Queues are only used in batch systems",
      ],
      correct: 1,
      explanation:
        "The system includes multiple types of queues: the ready queue (processes in main memory ready to execute) and various device queues. Processes migrate among these scheduling queues throughout their lifetime. A queueing diagram shows rectangular boxes representing queues, circles representing resources that serve queues, and arrows indicating process flow through the system.",
    },
  ],

  // Essay Questions (10 questions)
  "os-chapter-3.1": [
    {
      id: 1,
      question:
        "Compare and contrast the three multithreading models (many-to-one, one-to-one, and many-to-many). Discuss the advantages and disadvantages of each model, and explain why modern operating systems like Linux and Windows adopt the one-to-one model.",
      type: "essay",
      explanation:
        "The many-to-one model maps many user-level threads to one kernel thread. Its advantage is efficient thread management at user level without kernel involvement, but it has a critical disadvantage: if one thread makes a blocking system call, the entire process blocks since there's only one kernel thread. The one-to-one model maps each user thread to a kernel thread, providing better concurrency since blocking one thread doesn't block others, and it can leverage multiprocessor systems. However, it has overhead of creating kernel threads for each user thread. The many-to-many model multiplexes many user threads to a smaller or equal number of kernel threads, combining benefits of both: it avoids blocking the entire process and doesn't require as many kernel threads as user threads. Linux and Windows use one-to-one because modern systems can handle the kernel thread overhead efficiently, and it provides the best concurrency and multiprocessor utilization, which are more important than minimizing kernel thread creation overhead in contemporary computing environments.",
    },
    {
      id: 2,
      question:
        "Explain the four benefits of multithreading discussed in the chapter: responsiveness, resource sharing, economy, and scalability. Provide a practical example for each benefit demonstrating how multithreading improves application performance or user experience.",
      type: "essay",
      explanation:
        "Responsiveness: A web browser can remain interactive while loading a large image in a separate thread—users can scroll or click other links without waiting. Resource sharing: Multiple threads in a word processor can share the same document data structure, with one thread handling typing, another spell-checking, and another auto-saving, all accessing the same memory without complex inter-process communication. Economy: Creating threads is much more efficient than creating processes—in Solaris, thread creation is 30 times faster than process creation, and context switching is 5 times faster, because threads share the process's memory and resources rather than requiring separate allocation. Scalability: A video encoding application can assign different video segments to different threads running on separate cores in a multicore system, achieving true parallel processing and significantly reducing encoding time compared to a single-threaded approach limited to one core.",
    },
    {
      id: 3,
      question:
        "Discuss the five major programming challenges for multicore systems. For each challenge, explain why it presents difficulty and propose strategies that application programmers can use to address it.",
      type: "essay",
      explanation:
        "Identifying tasks requires analyzing applications to find components that can execute concurrently without interfering with each other—programmers can use decomposition techniques and analyze data flow to identify independent operations. Balance is difficult because unequal workload distribution wastes cores; programmers should profile tasks to ensure roughly equal work distribution and use dynamic load balancing when possible. Data splitting requires careful analysis of how data is accessed to avoid false sharing and ensure each core works on separate data—techniques include partitioning arrays by core count and using thread-local storage. Data dependency is challenging because if one task needs data from another, synchronization is required which can eliminate parallelism benefits—programmers should minimize dependencies through careful design, use producer-consumer patterns, and employ synchronization primitives like locks or semaphores only where necessary. Testing and debugging are difficult because parallel execution creates non-deterministic behavior with many possible execution interleavings—programmers should use race detection tools, add extensive logging, employ systematic testing with different thread counts, and use debugging tools designed for concurrent programs.",
    },
    {
      id: 4,
      question:
        "Explain the difference between parallelism and concurrency in the context of multithreaded systems. How does a single-core system achieve concurrency, and how does this differ from true parallelism on a multicore system?",
      type: "essay",
      explanation:
        "Parallelism means performing more than one task simultaneously—requiring multiple processing cores to execute different threads at the exact same instant. Concurrency means supporting more than one task by allowing all tasks to make progress, but not necessarily executing simultaneously. A single-core system achieves concurrency through rapid context switching: the scheduler switches between threads so quickly that they appear to run simultaneously, providing the illusion of parallelism. However, at any given instant, only one thread is actually executing on the single core. In contrast, a multicore system can achieve true parallelism by running different threads on different cores simultaneously—multiple instructions are genuinely executing at the same instant across different cores. The key difference is that concurrency on a single core is about logical structure and interleaving execution, while parallelism on multicore systems is about physical simultaneous execution. A multithreaded application benefits from concurrency on single-core systems through better responsiveness and resource utilization, but only achieves scalability and true performance speedup through parallelism on multicore systems.",
    },
    {
      id: 5,
      question:
        "Describe the two-level model variant of the many-to-many threading model. What problem does this model solve, and in what scenarios would binding a user-level thread to a kernel thread be beneficial?",
      type: "essay",
      explanation:
        "The two-level model is a variation of many-to-many that multiplexes many user-level threads to a smaller or equal number of kernel threads, but also allows specific user-level threads to be bound directly to kernel threads. This model solves the problem of applications needing both flexibility of many-to-many multiplexing and guaranteed kernel-level execution for critical threads. Binding would be beneficial in several scenarios: time-critical threads that require guaranteed CPU scheduling without waiting for other user threads to yield, threads performing intensive I/O operations that need direct kernel scheduling to prevent blocking other threads, threads requiring specific processor affinity for cache optimization, or real-time threads needing predictable scheduling behavior. For example, in a multimedia application, the audio playback thread might be bound to a kernel thread to ensure no audio stuttering occurs, while numerous background processing threads use multiplexed many-to-many mapping. This provides both the efficiency of multiplexing for most threads and the control and performance guarantees of direct kernel thread binding for critical operations.",
    },
    {
      id: 6,
      question:
        "Why is resource sharing considered a significant benefit of threads over processes? Explain the mechanisms processes must use to share resources and why thread-based sharing is more efficient. Include discussion of shared memory and message passing.",
      type: "essay",
      explanation:
        "Resource sharing is a major thread benefit because threads automatically share the memory and resources of their parent process by default, requiring no special programmer intervention. In contrast, processes have separate address spaces and must use explicit inter-process communication (IPC) mechanisms. Shared memory requires processes to explicitly request shared memory segments from the operating system, map them into their address spaces, and coordinate access—this involves system calls and kernel intervention. Message passing requires processes to send and receive messages through kernel-managed channels or pipes, with overhead of copying data between process address spaces and kernel space. These mechanisms must be explicitly programmed and incur significant overhead. Threads, however, naturally access the same heap memory, global variables, and file descriptors of their process. This makes sharing both simpler and more efficient: no system calls are needed for basic sharing, no data copying occurs between address spaces, and communication latency is minimal. For example, threads can communicate by simply reading and writing shared variables, while processes would need to set up shared memory regions or message queues, both requiring more complex code and greater overhead.",
    },
    {
      id: 7,
      question:
        "Analyze the impact of multithreading on user interface design. Using the example from the text of a user clicking a button that triggers a time-consuming operation, explain how multithreading improves responsiveness and why this design pattern is essential for modern interactive applications.",
      type: "essay",
      explanation:
        "Multithreading transforms user interface responsiveness by separating UI event handling from time-consuming operations. In a single-threaded application, when a user clicks a button that triggers a lengthy operation like database query or file processing, the entire application becomes unresponsive—the UI freezes, buttons don't respond, windows can't be moved, and the application may appear crashed to users. This occurs because the single thread is busy executing the operation and cannot process UI events. With multithreading, the time-consuming operation executes in a separate worker thread while the main UI thread remains free to process user input, repaint the interface, and respond to interactions. Users can continue working, cancel the operation, or start other tasks. This pattern is essential for modern applications because users expect continuous responsiveness—they should always be able to interact with the application regardless of background operations. Examples include web browsers continuing to respond while loading pages, word processors allowing editing while saving large documents, and email clients remaining usable while downloading attachments. Without multithreading, these basic interactions would be frustrating and make applications appear poorly designed or broken.",
    },
    {
      id: 8,
      question:
        "Explain why creating and managing threads is more economical than creating and managing processes. Use the Solaris example from the text to support your answer, and discuss what specific aspects of thread creation and context switching contribute to this efficiency difference.",
      type: "essay",
      explanation:
        "Threads are more economical than processes because they share resources rather than requiring separate allocation. The Solaris example demonstrates dramatic differences: creating a process is about 30 times slower than creating a thread, and context switching is about 5 times slower. These differences stem from several factors. Process creation requires allocating separate memory for the entire address space including code, data, heap, and stack segments, creating new page tables, copying or setting up file descriptor tables, and initializing numerous process control structures in the kernel. Thread creation within an existing process only requires allocating a small stack and thread control block since code, data, and heap are shared. Context switching between processes requires saving and restoring the entire memory management context including page tables, flushing the TLB (translation lookaside buffer), potentially switching to different address spaces, and saving/restoring all process resources. Thread context switching within the same process only requires saving and restoring CPU registers and stack pointer since threads share the same address space—no TLB flush or memory management changes are needed. This efficiency makes threads practical for fine-grained parallelism where creating hundreds or thousands of execution contexts is feasible, whereas creating that many processes would introduce prohibitive overhead.",
    },
    {
      id: 9,
      question:
        "Discuss how the trend toward multicore systems affects both operating system designers and application programmers. What specific challenges does each group face, and how do these challenges relate to achieving efficient utilization of multiple processing cores?",
      type: "essay",
      explanation:
        "The multicore trend places distinct but related pressures on operating system designers and application programmers. OS designers must develop scheduling algorithms that effectively exploit multiple cores—this includes deciding how to distribute threads across cores, managing core affinity to optimize cache performance, balancing load across cores to prevent some from being idle while others are overloaded, and handling thermal and power management across cores. They must also ensure system-level parallelism so multiple processes can effectively share cores. Application programmers face the challenge of restructuring software to be multithreaded—this means modifying existing single-threaded programs to identify parallelizable components and designing new applications with parallelism from the start. Both groups aim for efficient core utilization, but from different perspectives: OS designers focus on system-wide policies that allow all applications to benefit from multiple cores, while application programmers focus on making individual applications leverage parallelism. The challenges relate directly to core utilization because poorly scheduled threads can leave cores idle (OS problem), and applications that can't be effectively parallelized will only use one core regardless of how many are available (application problem). Both must succeed for multicore systems to deliver their performance potential.",
    },
    {
      id: 10,
      question:
        "Compare user threads and kernel threads in terms of where they are supported, how they are managed, and their implications for the operating system. Why might a system choose to implement threads at the user level versus kernel level, and what are the trade-offs involved?",
      type: "essay",
      explanation:
        "User threads are supported above the kernel and managed without kernel support—typically by a user-level thread library. Kernel threads are supported and managed directly by the operating system kernel. User-level threads have several advantages: they can be created and managed very quickly since no kernel involvement is needed, context switching between them is fast because it doesn't require mode switches or system calls, and they can exist on systems that don't support kernel threads. However, they have critical disadvantages: if one user thread makes a blocking system call, the entire process blocks since the kernel only sees one execution context; the kernel cannot schedule user threads across multiple cores since it's unaware of them; and user-level thread scheduling cannot take advantage of kernel-level priorities or preemption. Kernel threads have the opposite trade-offs: creating them is slower due to kernel involvement, context switching requires system calls and mode switches, but they can be scheduled independently across multiple cores, blocking one thread doesn't block the entire process, and the kernel can apply sophisticated scheduling policies. A system might choose user-level threads for applications needing very lightweight threading with minimal overhead and primarily CPU-bound work. Modern systems prefer kernel threads despite overhead because multicore utilization and non-blocking I/O are more important than minimizing thread creation cost in contemporary computing.",
    },
    {
      id: 11,
      question:
        "In a traditional single-threaded process, how many threads of control exist?",
      options: ["Zero", "One", "Two", "Multiple"],
      correct: 1,
      explanation:
        "A traditional single-threaded process has exactly one thread of control, meaning it can execute only one sequence of instructions at a time. Multithreaded processes have multiple threads of control within the same process.",
    },
    {
      id: 12,
      question:
        "What happens when a user clicks a button that triggers a time-consuming operation in a single-threaded interactive application?",
      options: [
        "The application continues to respond normally",
        "The application becomes unresponsive until the operation completes",
        "The operation is automatically moved to a background process",
        "The operating system creates a new thread automatically",
      ],
      correct: 1,
      explanation:
        "In a single-threaded application, when a time-consuming operation is triggered, the entire application becomes unresponsive to the user until that operation completes. This is because the single thread is busy executing the operation and cannot process other user interactions. Multithreading solves this by allowing the operation to run in a separate thread while the main thread remains responsive.",
    },
    {
      id: 13,
      question:
        "Which of the following best describes how threads share resources by default?",
      options: [
        "Threads must use message passing to share resources",
        "Threads must explicitly arrange shared memory segments",
        "Threads automatically share the memory and resources of their parent process",
        "Threads cannot share resources and must use inter-process communication",
      ],
      correct: 2,
      explanation:
        "Threads share the memory and resources of the process to which they belong by default, without requiring explicit arrangement by the programmer. This is a key advantage over processes, which require explicit mechanisms like shared memory or message passing to share resources.",
    },
    {
      id: 14,
      question:
        "According to the Solaris example in the text, approximately how much slower is process creation compared to thread creation?",
      options: [
        "5 times slower",
        "10 times slower",
        "30 times slower",
        "50 times slower",
      ],
      correct: 2,
      explanation:
        "In Solaris, creating a process is about thirty times slower than creating a thread. This significant difference is due to the overhead of allocating separate memory and resources for a new process, whereas threads share the resources of their parent process.",
    },
    {
      id: 15,
      question:
        "In Solaris, context switching between processes is approximately how much slower than context switching between threads?",
      options: [
        "2 times slower",
        "5 times slower",
        "10 times slower",
        "30 times slower",
      ],
      correct: 1,
      explanation:
        "In Solaris, context switching between processes is about five times slower than context switching between threads. This is because process context switching requires more work, including managing separate address spaces, while thread context switching within the same process is much lighter weight.",
    },
    {
      id: 16,
      question:
        "What is the primary limitation of a single-threaded process in a multiprocessor system?",
      options: [
        "It cannot access shared memory",
        "It can run on only one processor regardless of how many are available",
        "It requires more memory than multithreaded processes",
        "It cannot perform I/O operations",
      ],
      correct: 1,
      explanation:
        "A single-threaded process can run on only one processor, regardless of how many processors are available in the system. This is a key scalability limitation, as the process cannot take advantage of parallel execution across multiple cores. Multithreading enables scalability by allowing different threads to run on different processors simultaneously.",
    },
    {
      id: 17,
      question:
        "Which term describes a system that can perform more than one task simultaneously?",
      options: ["Concurrent", "Parallel", "Multitasking", "Distributed"],
      correct: 1,
      explanation:
        "A parallel system can perform more than one task simultaneously—meaning multiple tasks are executing at the exact same instant on different processing cores. This differs from concurrency, which supports multiple tasks making progress but not necessarily executing simultaneously.",
    },
    {
      id: 18,
      question:
        "Which term describes a system that supports more than one task by allowing all tasks to make progress?",
      options: ["Parallel", "Concurrent", "Synchronized", "Distributed"],
      correct: 1,
      explanation:
        "A concurrent system supports more than one task by allowing all tasks to make progress. This can be achieved even on a single processor through rapid context switching that provides the illusion of parallelism. Concurrency is about dealing with multiple tasks, while parallelism is about executing multiple tasks simultaneously.",
    },
    {
      id: 19,
      question: "Where are user threads supported and managed?",
      options: [
        "Directly by the operating system kernel",
        "Above the kernel without kernel support",
        "By the hardware processor",
        "By the BIOS",
      ],
      correct: 1,
      explanation:
        "User threads are supported above the kernel and are managed without kernel support, typically by a user-level thread library. This contrasts with kernel threads, which are supported and managed directly by the operating system.",
    },
    {
      id: 20,
      question:
        "In the many-to-one threading model, how many kernel threads support the user-level threads?",
      options: [
        "Many kernel threads",
        "One kernel thread per user thread",
        "One kernel thread total",
        "Zero kernel threads",
      ],
      correct: 2,
      explanation:
        "The many-to-one model maps many user-level threads to one kernel thread. This means all the user threads in a process are supported by a single kernel thread, which can lead to limitations such as the entire process blocking if one thread makes a blocking system call.",
    },
    {
      id: 21,
      question:
        "Which threading model maps each user thread to a kernel thread?",
      options: ["Many-to-one", "One-to-one", "Many-to-many", "Two-level"],
      correct: 1,
      explanation:
        "The one-to-one model maps each user thread to a kernel thread. This model provides greater concurrency than many-to-one by allowing another thread to run when one thread blocks, and it allows threads to run in parallel on multiprocessors. Linux and Windows implement this model.",
    },
    {
      id: 22,
      question:
        "Which operating systems implement the one-to-one threading model?",
      options: [
        "Only Linux",
        "Only Windows",
        "Linux and the Windows family of operating systems",
        "Solaris and macOS only",
      ],
      correct: 2,
      explanation:
        "Linux, along with the family of Windows operating systems, implement the one-to-one threading model. This model is popular in modern operating systems because it provides good concurrency and multiprocessor utilization.",
    },
    {
      id: 23,
      question: "What does the many-to-many threading model multiplex?",
      options: [
        "Many processes to one kernel thread",
        "Many user-level threads to a smaller or equal number of kernel threads",
        "Many kernel threads to one user thread",
        "Many processors to one thread",
      ],
      correct: 1,
      explanation:
        "The many-to-many model multiplexes many user-level threads to a smaller or equal number of kernel threads. This allows the operating system to create sufficient kernel threads while still providing flexibility at the user level.",
    },
    {
      id: 24,
      question:
        "What distinguishes the two-level model from the standard many-to-many model?",
      options: [
        "It uses only two kernel threads",
        "It allows a user-level thread to be bound to a kernel thread",
        "It supports only two user threads",
        "It requires two processors",
      ],
      correct: 1,
      explanation:
        "The two-level model is a variation of many-to-many that still multiplexes many user threads to fewer kernel threads, but also allows a user-level thread to be bound to a kernel thread. This provides both the flexibility of many-to-many and the ability to dedicate kernel resources to specific critical threads.",
    },
    {
      id: 25,
      question:
        "Which programming challenge for multicore systems involves examining applications to find components that can be divided into separate, concurrent tasks?",
      options: [
        "Balance",
        "Data splitting",
        "Identifying tasks",
        "Data dependency",
      ],
      correct: 2,
      explanation:
        "Identifying tasks involves examining applications to find components that can be divided into separate, concurrent tasks that ideally are independent and can execute in parallel on different cores. This is the first major challenge in programming for multicore systems.",
    },
    {
      id: 26,
      question:
        "What problem does the 'balance' challenge address in multicore programming?",
      options: [
        "Balancing memory usage across cores",
        "Ensuring tasks perform roughly equal amounts of work",
        "Balancing power consumption",
        "Balancing network load",
      ],
      correct: 1,
      explanation:
        "The balance challenge ensures that tasks running in parallel perform roughly equal amounts of work and contribute similar value. Assigning a separate core to a task with low impact may not justify the overhead, so balance is important for efficient core utilization.",
    },
    {
      id: 27,
      question:
        "In multicore programming, what must happen when tasks are divided according to the 'data splitting' challenge?",
      options: [
        "Data must be replicated across all cores",
        "Data must be stored only in cache",
        "Data accessed by tasks must be partitioned for concurrent processing on separate cores",
        "Data must be converted to a different format",
      ],
      correct: 2,
      explanation:
        "Data splitting requires that as tasks are divided, the data they access and manipulate must also be partitioned so it can be processed concurrently on separate cores. This ensures each core can work on its portion of the data without excessive contention.",
    },
    {
      id: 28,
      question:
        "What must be done when one task relies on data produced by another task?",
      options: [
        "The tasks must be merged into one",
        "Execution must be synchronized to preserve correctness",
        "The data must be duplicated",
        "The tasks must run on the same core",
      ],
      correct: 1,
      explanation:
        "When data dependency exists—where one task relies on data produced by another—execution must be synchronized to preserve correctness. This ensures that the dependent task doesn't use data before it has been properly produced by the other task.",
    },
    {
      id: 29,
      question:
        "Why is testing and debugging more difficult for parallel programs compared to single-threaded programs?",
      options: [
        "Parallel programs use more memory",
        "Parallel execution introduces many possible execution paths",
        "Parallel programs cannot use standard debuggers",
        "Parallel programs run too fast to debug",
      ],
      correct: 1,
      explanation:
        "Testing and debugging concurrent programs is significantly more difficult than single-threaded programs because parallel execution introduces many possible execution paths. The non-deterministic nature of thread scheduling means bugs may only appear under specific timing conditions, making them hard to reproduce and diagnose.",
    },
    {
      id: 30,
      question:
        "What responsibility do operating system designers have in the trend toward multicore systems?",
      options: [
        "They must modify application code to use multiple cores",
        "They must develop scheduling algorithms that exploit multiple processing cores",
        "They must manufacture the multicore processors",
        "They must train programmers on parallel programming",
      ],
      correct: 1,
      explanation:
        "Operating system designers must develop scheduling algorithms that exploit multiple processing cores to enable parallel execution. This is their primary responsibility in adapting to multicore systems—creating system-level support that allows both the OS and applications to effectively use multiple cores.",
    },
    {
      id: 31,
      question:
        "What type of resources do processes share using shared memory and message passing?",
      options: [
        "CPU cycles only",
        "Resources between different processes",
        "Resources within the same thread",
        "Only file descriptors",
      ],
      correct: 1,
      explanation:
        "Processes can share resources with other processes through techniques such as shared memory and message passing. These are explicit inter-process communication (IPC) mechanisms that must be arranged by the programmer, unlike threads which share resources by default within the same process.",
    },
    {
      id: 32,
      question:
        "What benefit of multithreading allows an application to remain responsive while performing time-consuming operations?",
      options: ["Economy", "Scalability", "Responsiveness", "Resource sharing"],
      correct: 2,
      explanation:
        "Responsiveness is the benefit that allows a program to continue running and remain interactive even if part of it is blocked or performing a lengthy operation. This is especially useful in user interfaces where users expect continuous interaction.",
    },
    {
      id: 33,
      question:
        "In systems with multicore or multiprocessor architectures, what specific benefit of multithreading becomes even greater?",
      options: ["Responsiveness", "Resource sharing", "Economy", "Scalability"],
      correct: 3,
      explanation:
        "Scalability benefits become even greater in multicore or multiprocessor architectures, where threads may be running in parallel on different processing cores. A single-threaded process can run on only one processor regardless of how many are available, but multithreaded processes can leverage multiple cores for true parallel execution.",
    },
    {
      id: 34,
      question:
        "What do we call systems where processing cores appear across CPU chips or within CPU chips?",
      options: [
        "Distributed systems",
        "Multicore or multiprocessor systems",
        "Virtual systems",
        "Cloud systems",
      ],
      correct: 1,
      explanation:
        "Whether the cores appear across CPU chips or within CPU chips, we call these systems multicore or multiprocessor systems. The text uses these terms interchangeably to refer to any system with multiple processing cores available for parallel execution.",
    },
    {
      id: 35,
      question:
        "How do single-core systems provide the illusion of parallelism?",
      options: [
        "By using multiple processors",
        "By rapidly switching between processes",
        "By duplicating all processes",
        "By using virtual memory",
      ],
      correct: 1,
      explanation:
        "Single-core systems provide the illusion of parallelism by rapidly switching between processes (or threads). This rapid context switching creates concurrency—allowing multiple tasks to make progress—even though only one task is actually executing at any given instant.",
    },
    {
      id: 36,
      question:
        "Which multithreading model has the limitation that if one thread makes a blocking system call, the entire process blocks?",
      options: ["One-to-one", "Many-to-many", "Many-to-one", "Two-level"],
      correct: 2,
      explanation:
        "The many-to-one model has this critical limitation because all user threads map to a single kernel thread. When one user thread makes a blocking system call, the kernel thread blocks, which causes the entire process to block since there's only one kernel-level execution context for all the user threads.",
    },
    {
      id: 37,
      question:
        "What is the primary advantage of kernel threads over user threads in terms of system calls?",
      options: [
        "Kernel threads are faster to create",
        "When one kernel thread blocks, other threads in the process can continue executing",
        "Kernel threads use less memory",
        "Kernel threads don't need system calls",
      ],
      correct: 1,
      explanation:
        "The primary advantage of kernel threads is that when one kernel thread blocks on a system call, other threads in the process can continue executing because the kernel manages each thread independently. With user threads in a many-to-one model, a blocking call by one thread blocks the entire process.",
    },
    {
      id: 38,
      question:
        "Which challenge in multicore programming involves analyzing whether tasks are independent or if one relies on data from another?",
      options: [
        "Balance",
        "Identifying tasks",
        "Data dependency",
        "Data splitting",
      ],
      correct: 2,
      explanation:
        "Data dependency is the challenge of analyzing data used by multiple tasks for dependencies. If one task relies on data produced by another, this creates a dependency that requires synchronization to preserve correctness, potentially limiting parallelism.",
    },
    {
      id: 39,
      question:
        "What is required of application programmers in adapting to multicore systems?",
      options: [
        "They must design new processor architectures",
        "They must modify existing programs and design new ones to be multithreaded",
        "They must rewrite operating systems",
        "They must create new programming languages",
      ],
      correct: 1,
      explanation:
        "Application programmers face the challenge of modifying existing programs and designing new ones to be multithreaded. This is necessary to take advantage of multiple cores, as single-threaded applications cannot benefit from multicore architectures regardless of how many cores are available.",
    },
    {
      id: 40,
      question:
        "Which benefit of threads describes the advantage of having several different threads of activity within the same address space?",
      options: ["Economy", "Scalability", "Resource sharing", "Responsiveness"],
      correct: 2,
      explanation:
        "Resource sharing is the benefit that allows an application to have several different threads of activity within the same address space. Threads share the memory and resources of the process by default, allowing them to share code and data without explicit arrangement, which is more efficient than inter-process communication mechanisms.",
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
