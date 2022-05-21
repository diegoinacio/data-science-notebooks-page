export const HEADER = {
  title: `Data Science Notebooks`,
  description: `An authorial collection of fundamental <span class="emphasis1">Python recipes</span> on <span class="stripe"><span class="emphasis2">Data Science</span> and <span class="emphasis2">Analytics</span></span>.`,
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
        id: "binomial_distribution",
        name: "Binomial Distribution",
        description:
          "Brief overview about Discrete probability and binomial distribution.",
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
];
