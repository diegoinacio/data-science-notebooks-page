export const HEADER = {
  title: `Data Science Notebooks`,
  description: `An authorial set of fundamental <span class="stripe">Python recipes</span> on <strong>Data Science</strong> and <strong>Analytics</strong>.`,
};

export const INDEX = [
  // ! Probability & Statistics
  {
    id: "Probability-and-Statistics",
    name: "Probability & Statistics",
    description:
      "Everything about <em>statistics</em>, <em>probabilities</em>, <em>inferences</em>, <em>combinatorics</em>, <em>discrete math</em> and so on.",
    notebooks: [
      {
        id: "distributions_discrete",
        name: "Discrete probability distributions",
        description: "Brief overview of discrete probability distributions.",
      },
      {
        id: "distributions_continuous",
        name: "Continuous probability distributions",
        description: "Brief overview of continuous probability distributions.",
      },
      {
        id: "combinatorial_analysis",
        name: "Combinatorial Analysis",
        description:
          "Gathering of some of the main methods of combinatorial analysis.",
      },
      {
        id: "z-table",
        name: "Z Table",
        description: "Study about standard normal distribution.",
      },
      {
        id: "measures_central_location",
        name: "Measures of Central Location",
        description:
          "Overview of location measures and central tendency of data.",
      },
      {
        id: "measures_dispersion",
        name: "Measures of Dispersion",
        description: "Overview of dispersion measures in statistics.",
      },
      {
        id: "measures_position",
        name: "Measures of Position",
        description:
          "Overview of measures of position in sample or distributions.",
      },
      {
        id: "measures_shape",
        name: "Measures of Shape",
        description: "Overview of measures of shape in distributions.",
      },
    ],
  },
  // ! Data Analytics
  {
    id: "Data-Analytics",
    name: "Data Analytics",
    description:
      "Best practices in <em>data analysis</em> and the main methods of <em>advanced analytics</em>.",
    notebooks: [
      {
        id: "regression-analysis",
        name: "Regression Analysis",
        description:
          "Analysis and implementation of some of the main <em>Regression</em> models.",
      },
      {
        id: "feature-scaling",
        name: "Feature scaling",
        description:
          "Overview and practical applications of key <em>feature scaling</em> methods.",
      },
    ],
  },
  // ! Mathematics
  {
    id: "Mathematics",
    name: "Mathematics",
    description:
      "Main mathematical concepts applied to <em>data science</em>. (<em>mainly calculus, linear algebra and financial mathematics</em>)",
    notebooks: [
      {
        id: "calculus_fourier-series",
        name: "Calculus - Fourier Series",
        description: "Brief overview of <em>Fourier series</em>.",
      },
      {
        id: "linear-algebra_vectors",
        name: "Linear Algebra - Vectors",
        description: "Linear Algebra topic about <em>Vectors</em>.",
      },
      {
        id: "linear-algebra_matrices",
        name: "Linear Algebra - Matrices",
        description: "Linear Algebra topic about <em>Matrices</em>.",
      },
    ],
  },
  // ! Data Visualization
  {
    id: "Data-Visualization",
    name: "Data Visualization",
    description:
      "Best reporting practices, with a focus on <em>data visualization</em> and <em>storytelling</em>.",
    notebooks: [
      {
        id: "matplotlib_3D",
        name: "Matplotlib 3D",
        description: "Examples of 3D visualization using <em>Matplotlib</em>.",
      },
      {
        id: "matplotlib_animation",
        name: "Matplotlib Animation",
        description:
          "Examples of animated visualization using <em>Matplotlib</em>.",
      },
      {
        id: "matplotlib_charts",
        name: "Matplotlib Charts",
        description:
          "Examples of chart visualization using <em>Matplotlib</em>.",
      },
      {
        id: "matplotlib_diagrams",
        name: "Matplotlib Diagrams",
        description:
          "Examples of diagram visualization using <em>Matplotlib</em>.",
      },
      {
        id: "matplotlib_figures",
        name: "Matplotlib Figures",
        description:
          "Examples of figure visualization using <em>Matplotlib</em>.",
      },
      {
        id: "plotly_charts",
        name: "Plotly Charts",
        description:
          "Examples of <em>interactive</em> chart visualization using <em>Plotly</em>.",
      },
    ],
  },
  // ! Tips & Tricks
  {
    id: "Tips-and-Tricks",
    name: "Tips & Tricks",
    description:
      "A gathering of <em>Tips & Tricks</em> involving any supporting information for <em>data science</em> in general.",
    notebooks: [
      {
        id: "kaggle-data",
        name: "Kaggle data",
        description:
          "Methods to obtain dataset from the <em>Kaggle</em> platform.",
      },
      {
        id: "web-scraping",
        name: "Web Scraping",
        description: "Some demonstrations of how to scrape data on the web.",
      },
    ],
  },
];
