const notes = [
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/how-to-connect-databricks-and-mongodb-atlas-using-python-api/",
    Article_Title:
      "How to Connect DataBricks and MongoDB Atlas using Python API?",
    Date: "APRIL 27, 2021",
    Author: "LEKSHMYHO",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. What is DataBricks? Databricks is a cloud-based analyzing tool that …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/impact-of-global-stock-market-on-indian-stock-index-in-r/",
    Article_Title: "Impact of Global Stock Market on Indian stock Index in R",
    Date: "APRIL 27, 2021",
    Author: "FASIH",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction: Hello Readers! Ever wonder what are the factors which …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/wine-quality-prediction-using-machine-learning/",
    Article_Title: "Wine Quality Prediction Using Machine Learning",
    Date: "APRIL 27, 2021",
    Author: "MAYURBADOLE2407",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview Basics understanding of Wine. Data description Importing modules Study …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/best-boosting-algorithm-in-machine-learning-in-2021/",
    Article_Title: "Best Boosting Algorithm In Machine Learning In 2021",
    Date: "APRIL 27, 2021",
    Author: "MRINAL41",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Boosting Algorithm In Machine Learning Boosting can be referred to …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/shapash-python-library-to-make-machine-learning-interpretable/",
    Article_Title:
      "Shapash- Python Library To Make Machine Learning Interpretable",
    Date: "APRIL 27, 2021",
    Author: "MAYURBADOLE2407",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview Introduction Understanding on Shapash Interpreting RandomForestRegressor Understanding ML model …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/how-to-use-catboost-for-mental-fatigue-score-prediction/",
    Article_Title: "How to use CatBoost For Mental Fatigue Score Prediction",
    Date: "APRIL 27, 2021",
    Author: "YOGITABHOR",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. According to a global survey, about 450 million people live …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/intuition-behind-correlation-definition-and-its-types/",
    Article_Title: "Intuition Behind Correlation – Definition and It’s Types",
    Date: "APRIL 26, 2021",
    Author: "CHIRAG676",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. What is Correlation? Correlation is used to find the relationship …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/how-to-check-stationarity-of-data-in-python/",
    Article_Title: "How to check Stationarity of Data in Python",
    Date: "APRIL 26, 2021",
    Author: "NISHTHA11",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon.   Introduction Hello readers! In our routine life, we come …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/a-beginners-guide-to-multi-processing-in-python/",
    Article_Title: "A beginners guide to Multi-Processing in Python",
    Date: "APRIL 26, 2021",
    Author: "MSMKARTHIK",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. In the era of Big Data, Python has become the …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/insight-into-svm-support-vector-machine-along-with-code/",
    Article_Title:
      "Introduction to SVM(Support Vector Machine) Along with Python Code",
    Date: "APRIL 26, 2021",
    Author: "DISHAA.AGARWAL",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon.   Introduction This article aims to provide a basic understanding …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/beginners-guide-to-logistic-regression-using-python/",
    Article_Title: "Beginner’s Guide To Logistic Regression Using Python",
    Date: "APRIL 25, 2021",
    Author: "PRANSHU0",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview What Is Logistic Regression Mathematics Involved in Logistic Regression …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/google-earth-engine-machine-learning-for-land-cover-classification-with-code/",
    Article_Title:
      "Google Earth Engine Machine Learning for Land Cover Classification (with Code)",
    Date: "APRIL 24, 2021",
    Author: "RENDYK",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introducing Earth Engine and Remote Sensing Earth Engine, also referred …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/a-broader-understanding-of-ml-and-types-of-regression/",
    Article_Title: "A broader understanding of ML and types of regression",
    Date: "APRIL 24, 2021",
    Author: "YAMINI5",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Machine Learning(ML) is the science of interpreting the data …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/top-8-hidden-python-packages-for-machine-learning-in-2021/",
    Article_Title: "Top 8 Hidden Python Packages For Machine Learning in 2021",
    Date: "APRIL 24, 2021",
    Author: "AKSHAY31",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Python is one of the most loved languages in …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/q-learning-algorithm-with-step-by-step-implementation-using-python/",
    Article_Title:
      "Q – Learning Algorithm with Step by Step Implementation using Python",
    Date: "APRIL 24, 2021",
    Author: "LAKSHMI225",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Reinforcement Learning (RL) can be defined as the study …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/you-cannot-miss-these-8-python-libraries/",
    Article_Title: "You Cannot Miss These 8 Python Libraries",
    Date: "APRIL 23, 2021",
    Author: "KAUSTUBH1828",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Python is an all-time favorite language for beginners and aspiring …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/time-series-analysis-forecast-covid-19-vaccination-rate/",
    Article_Title: "Time Series Analysis: Forecast COVID-19 Vaccination Rate",
    Date: "APRIL 23, 2021",
    Author: "DAYANA-BENNY",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In the current scenario of the COVID-19 pandemic, many …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/smote-and-best-subset-selection-for-linear-regression-in-r/",
    Article_Title: "SMOTE and Best Subset Selection for Linear Regression in R",
    Date: "APRIL 23, 2021",
    Author: "MUHAMMADARNALDO",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Victoriano Izquierdo on Unsplash Best subset selection is one …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/discovering-the-shades-of-feature-selection-methods/",
    Article_Title: "Discovering the shades of Feature Selection Methods",
    Date: "APRIL 23, 2021",
    Author: "SWETHA36",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction The data consists of a two-dimensional array of categorical …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/confusion-matrix-detailed-intuition-and-trick-to-learn/",
    Article_Title: "Confusion Matrix: Detailed intuition and trick to learn",
    Date: "APRIL 22, 2021",
    Author: "PRAYAS.SINGH@OUTLOOK.COM",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction What is the first measure coming into your mind …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/beginners-guide-to-automation-in-data-science/",
    Article_Title: "Beginners Guide to Automation in Data Science",
    Date: "APRIL 22, 2021",
    Author: "SNEHAL_BM",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction The field of Data Science is growing by leaps and …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/simple-understanding-and-implementation-of-knn-algorithm/",
    Article_Title: "Simple understanding and implementation of KNN algorithm!",
    Date: "APRIL 21, 2021",
    Author: "SAI107",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview: K Nearest Neighbor (KNN) is intuitive to understand and …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/how-to-perform-monte-carlo-simulation/",
    Article_Title: "How to Perform Monte Carlo Simulation?",
    Date: "APRIL 19, 2021",
    Author: "RENDYK",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction This article aims to introduce Monte Carlo Simulation for …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/proximity-measures-in-data-mining-and-machine-learning/",
    Article_Title: "Proximity measures in Data Mining and Machine Learning",
    Date: "APRIL 19, 2021",
    Author: "CHIRAG676",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Data mining is the process of finding interesting patterns …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/guide-for-feature-extraction-techniques/",
    Article_Title: "Guide For Feature Extraction Techniques",
    Date: "APRIL 19, 2021",
    Author: "DISHAA.AGARWAL",
    Description:
      "ArticleVideo Book Table of Content 1. The need for Dimensionality Reduction 2. What is Dimensionality Reduction 3. PCA(Principal Component Analysis) 4. Kernel PCA 5. …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/how-the-gradient-boosting-algorithm-works/",
    Article_Title: "How the Gradient Boosting Algorithm works?",
    Date: "APRIL 19, 2021",
    Author: "NTARBANI",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Gradient boosting algorithm is one of the most powerful …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/machine-learning-basics-for-data-science-enthusiasts/",
    Article_Title: "Machine Learning Basics For Data Science Enthusiasts",
    Date: "APRIL 19, 2021",
    Author: "PRANSHU0",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview Introduction to Machine Learning Basics Need of Machine Learning …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/bring-devops-to-data-science-with-continuous-mlops/",
    Article_Title: "Bring DevOps To Data Science With MLOps",
    Date: "APRIL 17, 2021",
    Author: "AMITVKULKARNI",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. MLOps is the intersection of Machine Learning, DevOps and Data …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/principal-component-analysis-introduction-and-practice-problem/",
    Article_Title:
      "Principal Component Analysis Introduction and Practice Problem",
    Date: "APRIL 16, 2021",
    Author: "SURBHI_22",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Table of Contents Introduction Gentle Overview Cons of Using PCA …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/improve-naive-bayes-text-classifier-using-laplace-smoothing/",
    Article_Title:
      "Improve Naive Bayes Text classifier using Laplace Smoothing",
    Date: "APRIL 16, 2021",
    Author: "CHIRAG676",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction During the pandemic, a significant increase in the number …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/easily-deploy-your-machine-learning-model-into-a-web-app-netlify/",
    Article_Title:
      "Easily Deploy Your Machine Learning Model into a Web App Using Netlify",
    Date: "APRIL 15, 2021",
    Author: "MUHAMMADARNALDO",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. HalGatewood.com on Unsplash Prerequisites: Basic machine learning (ML) and basic …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/distinguish-between-tree-based-machine-learning-algorithms/",
    Article_Title: "Distinguish between Tree-Based Machine Learning Algorithms",
    Date: "APRIL 15, 2021",
    Author: "RENDYK",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction This article aims to distinguish tree-based Machine Learning algorithms …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/understanding-supervised-and-unsupervised-learning/",
    Article_Title: "Understanding Supervised and Unsupervised Learning",
    Date: "APRIL 15, 2021",
    Author: "SIMRAN.K",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. SUPERVISED LEARNING Before making you understand the broad category of …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/does-the-popularity-of-automl-means-the-end-of-data-science-jobs/",
    Article_Title:
      "Does The Popularity of AutoML Means the End of Data Science Jobs?",
    Date: "APRIL 14, 2021",
    Author: "CHIRAG676",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction With the strike of the COVID-19 pandemic and urge …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/how-aviation-industry-uses-data-science/",
    Article_Title: "How Aviation Industry Uses Data Science?",
    Date: "APRIL 14, 2021",
    Author: "SHARVARI7",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Aviation Industry does use AI or rather data science and …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/machine-learning-in-building-automation/",
    Article_Title: "Machine Learning in Building Automation",
    Date: "APRIL 14, 2021",
    Author: "BHAKTI008",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction When I started learning about machine learning just for …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/ml-trends-for-solving-business-intelligence-problems/",
    Article_Title: "ML Trends for Solving Business Intelligence Problems",
    Date: "APRIL 14, 2021",
    Author: "EMILIA3",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In September 2021, Gartner released a separate report on …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/rethinking-ai-artificial-intelligence/",
    Article_Title: "Rethinking AI – Artificial Intelligence",
    Date: "APRIL 13, 2021",
    Author: "ADITYA.AGAR3",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. 1. Introduction We generally see data science from different perspectives …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/top-15-python-libraries-you-must-know-for-data-science-in-2021/",
    Article_Title:
      "Top 15 Python Libraries you must know for Data Science in 2021",
    Date: "APRIL 13, 2021",
    Author: "AKSHAY31",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Python is one of the most used programming languages for …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/5-amazing-real-world-applications-of-artificial-intelligence-and-data-science/",
    Article_Title:
      "5 Amazing Real-World Applications of Artificial Intelligence and Data Science",
    Date: "APRIL 12, 2021",
    Author: "PAVANKALYAN9065",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Data Science and Artificial Intelligence (AI) are overtaking the …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/evaluating-machine-learning-models-hyperparameter-tuning/",
    Article_Title:
      "Evaluating Machine Learning Models using Hyperparameter Tuning",
    Date: "APRIL 12, 2021",
    Author: "F2005636",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview This paper focuses on evaluating the machine learning models …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/probability-theory-basics-in-machine-learning/",
    Article_Title: "Probability Theory Basics in Machine Learning",
    Date: "APRIL 12, 2021",
    Author: "SARVAGYAAGRAWAL",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Machine Learning is a very interesting branch of Artificial Intelligence …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/alternative-tools-for-effective-machine-learning/",
    Article_Title: "Alternative Tools for Effective Machine Learning",
    Date: "APRIL 10, 2021",
    Author: "PRIYA603",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction As a data science learner, many resources are easily …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/forward-feature-selection-and-its-implementation/",
    Article_Title: "Forward Feature Selection and its Implementation",
    Date: "APRIL 9, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction So far we’ve seen three feature selection techniques- Missing Value Ratio, Low Variance Filter, and Backward Feature Elimination. In this article, …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/dimensionality-reduction-a-descry-for-data-scientist/",
    Article_Title: "Dimensionality Reduction a Descry for Data Scientist",
    Date: "APRIL 8, 2021",
    Author: "SHANTHABABU",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Hello! I like to share my interesting experience While I …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/generating-fantasy-titles-with-a-markov-chain/",
    Article_Title: "Generating Fantasy Titles with a Markov Chain",
    Date: "APRIL 8, 2021",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book I’ve always found the naming convention for the fantasy genre really fascinating – barring perhaps detective stories, this genre has the most …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/backward-feature-elimination-and-its-implementation/",
    Article_Title: "Backward Feature Elimination and its Implementation",
    Date: "APRIL 7, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction In the previous article, we saw another feature selection technique, the Low Variance Filter. So far we’ve seen Missing Value Ratio …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/beginners-guide-to-low-variance-filter-and-its-implementation/",
    Article_Title:
      "Beginner’s Guide to Low Variance Filter and its Implementation",
    Date: "APRIL 6, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction In the previous article, Beginner’s Guide to Missing Value Ratio and its Implementation, we saw a feature selection technique- Missing Value …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/beginners-guide-to-missing-value-ratio-and-its-implementation/",
    Article_Title:
      "Beginner’s Guide to Missing Value Ratio and its Implementation",
    Date: "APRIL 5, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction Feature Selection plays a key role in reducing the dimensions of any dataset. There are various benefits of dimensionality reduction including …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/how-ai-is-used-in-the-cryptocurrency-market/",
    Article_Title:
      "How Artificial Intelligence is used in the cryptocurrency market?",
    Date: "APRIL 5, 2021",
    Author: "EMILIA3",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Cryptocurrencies continue to be an extremely interesting phenomenon today. …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/federated-learning-for-beginners/",
    Article_Title: "Federated Learning for Beginners",
    Date: "APRIL 1, 2021",
    Author: "MARBOER",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction to Federated Learning Federated learning is an emerging approach …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/the-curse-of-dimensionality-in-machine-learning/",
    Article_Title: "The Curse of Dimensionality in Machine Learning!",
    Date: "APRIL 1, 2021",
    Author: "SWAPNIL-VISHWAKARMA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. What is the curse of dimensionality?   Photo by Tim …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/classifying-ddos-attacks-with-artificial-intelligence/",
    Article_Title: "Classifying DDoS attacks with Artificial Intelligence",
    Date: "APRIL 1, 2021",
    Author: "PANNAG",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction The majority of corporates or services rely highly upon …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/introduction-to-naive-bayes-algorithm/",
    Article_Title: "Introduction To Naive Bayes Algorithm",
    Date: "MARCH 31, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective Naive Bayes is a fast, easy to understand, and highly scalable algorithm. Understand the working of Naive Bayes, its types, and …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/introduction-to-random-forest-and-its-hyper-parameters/",
    Article_Title: "Introduction to Random Forest and its Hyper-parameters",
    Date: "MARCH 31, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction In this article, we’ll see what is Random Forest algorithm and also what are its hyper-parameters? Random forest is one of …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/customer-profiling-and-segmentation-an-analytical-approach-to-business-strategy-in-retail-banking/",
    Article_Title:
      "Customer Profiling and Segmentation – An Analytical Approach To Business Strategy In Retail Banking",
    Date: "MARCH 31, 2021",
    Author: "SHAHENAJ",
    Description:
      "ArticleVideo Book   Overview The main purpose behind this study was to analyze the problems faced by big retail banks during business expansion. Typically …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/unleash-the-power-of-data-using-r-with-covid-trial-datasets/",
    Article_Title: "Unleash the Power of Data using R with Covid Trial Dataset",
    Date: "MARCH 31, 2021",
    Author: "ANU631",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Data is the universal truth guiding today’s world of …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/advanced-ensemble-learning-technique-stacking-and-its-variants/",
    Article_Title:
      "Advanced Ensemble Learning technique – Stacking and its Variants",
    Date: "MARCH 30, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction Stacking is an ensemble learning technique that uses predictions for multiple nodes(for example kNN, decision trees, or SVM) to build a …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/feature-transformation-cheatsheet/",
    Article_Title: "Feature Transformation CheatSheet",
    Date: "MARCH 30, 2021",
    Author: "ASYAEVLOEVA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction As is known, a proper feature transformation can bring …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/interpretation-of-performance-measures-to-evaluate-model/",
    Article_Title: "Interpretation of Performance Measures to Evaluate Models",
    Date: "MARCH 30, 2021",
    Author: "SITARA0",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In the last year of my bachelor’s degree, I …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/a-step-by-step-guide-to-nested-cross-validation/",
    Article_Title: "A step by step guide to Nested Cross-Validation",
    Date: "MARCH 28, 2021",
    Author: "JAIME84",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Before explaining nested cross-validation, let’s start with the basics. …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/code-re-usability-through-feature-pipeline-framework/",
    Article_Title: "Code Re-usability through feature pipeline framework",
    Date: "MARCH 28, 2021",
    Author: "ROHIT581",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In any data science, project feature creation is a …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/a-practical-tutorial-to-simple-linear-regression-using-python/",
    Article_Title:
      "A Practical Tutorial to Simple Linear Regression Using Python",
    Date: "MARCH 27, 2021",
    Author: "SRINIKETHCR7",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Hello Everyone for this practical Introduction to Machine Learning …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/introduction-to-adaboost-algorithm-with-python-implementation/",
    Article_Title:
      "Introduction to AdaBoost Algorithm with Python Implementation",
    Date: "MARCH 26, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective Learn how the adaptive boosting algorithm AdaBoost works. See the implementation of AdaBoostClassifer using python.   Introduction In the last article, …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/how-to-select-best-split-in-decision-trees-using-information-gain/",
    Article_Title:
      "How to select Best Split in Decision Trees using Information Gain",
    Date: "MARCH 26, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction In the previous article, we saw the Chi-Square algorithm- How to select Best Split in Decision Trees using Chi-Square. In this …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/must-known-vector-norms-in-machine-learning/",
    Article_Title: "Must Known Vector Norms in Machine Learning",
    Date: "MARCH 26, 2021",
    Author: "CHIRAG676",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In this article, you will find the different ways …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/artificial-intelligence-ai-threat-to-the-world/",
    Article_Title: "Artificial Intelligence – Threat to the World",
    Date: "MARCH 26, 2021",
    Author: "ANANTKNITJ",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. ” We create our own demons “ The destructions caused …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/career-in-machine-learning-and-data-science/",
    Article_Title: "Career in Machine Learning and Data Science",
    Date: "MARCH 26, 2021",
    Author: "DOSSIER",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction   image source-dreamstime.com Machine Learning and Data Science are …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/gradient-boosting-machine-for-data-scientists/",
    Article_Title: "Gradient Boosting Machine for Data Scientists",
    Date: "MARCH 25, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective Boosting is an ensemble learning technique where each model attempts to correct the errors of the previous model. Learn about the …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/how-to-select-best-split-in-decision-trees-using-chi-square/",
    Article_Title:
      "How to select Best Split in Decision Trees using Chi-Square",
    Date: "MARCH 25, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction Welcome back! In the previous article, we learned about Gini impurity which we use to decide the purity of nodes. There …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/fighting-data-bias-everyones-responsibility/",
    Article_Title: "Fighting Data Bias – Everyone’s Responsibility",
    Date: "MARCH 25, 2021",
    Author: "PRASUNA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. What is Bias? Most of you might have watched or …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/everything-you-need-to-know-about-machine-learning/",
    Article_Title: "Everything you need to know about Machine Learning",
    Date: "MARCH 25, 2021",
    Author: "SABITA-AI",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introductory Artificial Intelligence is purely math and scientific exercise but …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/intuitive-understanding-of-bias-and-variance-trade-off-%e2%9a%96%ef%b8%8f/",
    Article_Title: "Intuitive Understanding of Bias and Variance Trade-Off",
    Date: "MARCH 25, 2021",
    Author: "JAY_2233",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Source-Pixabay The Trade-off is when you choose to accept less …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/you-will-be-surprised-artificial-intelligence-ai-is-already-in-marketing/",
    Article_Title:
      "You’d be surprised: Artificial Intelligence is already in marketing!",
    Date: "MARCH 25, 2021",
    Author: "EMILIA3",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon.   Source MRFR predicts the global AI market will have …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/how-to-select-best-split-in-decision-trees-gini-impurity/",
    Article_Title:
      "How to select Best Split in Decision trees using Gini Impurity",
    Date: "MARCH 22, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction In the previous article- How to Split a Decision Tree – The Pursuit to Achieve Pure Nodes, you understood the basics …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/common-terminologies-used-in-machine-learning-and-artificial-intelligence/",
    Article_Title:
      "Common terminologies used in Machine Learning and Artificial Intelligence",
    Date: "MARCH 20, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction In this article, we’ll introduce you to various common terminologies used in the machine learning and artificial intelligence industry. Without any …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/introducing-machine-learning-for-spatial-data-analysis/",
    Article_Title: "Introducing Machine Learning for Spatial Data Analysis",
    Date: "MARCH 20, 2021",
    Author: "RENDYK",
    Description:
      "ArticleVideo Book This article discusses Machine Learning in Geographic Information System GIS, in other words, Machine Learning for spatial data analysis. Usually, we can …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/end-to-end-application-of-data-science-in-personal-finance-mutual-funds-ranking/",
    Article_Title:
      "End to End Application of Data Science in Personal Finance: Mutual Funds Ranking",
    Date: "MARCH 19, 2021",
    Author: "BALAJI SR",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Background This Blog is about how I solved a real-life …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/machine-learning-with-python-gaussian-naive-bayes/",
    Article_Title: "Machine Learning with Python- Gaussian Naive Bayes",
    Date: "MARCH 16, 2021",
    Author: "DESTOYER-BYTE",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction This article assumes that you possess a basic knowledge …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/introduction-to-k-fold-cross-validation-in-r/",
    Article_Title: "Introduction to K-Fold Cross-Validation in R",
    Date: "MARCH 15, 2021",
    Author: "MUHAMMADARNALDO",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Photo by Myriam Jessier on Unsplash Prerequisites: Basic R programming …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/7-popular-feature-selection-routines-in-machine-learning/",
    Article_Title: "7 Popular Feature Selection Routines in Machine Learning",
    Date: "MARCH 12, 2021",
    Author: "PAVANKALYAN9065",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Best ways for Feature Selection The general principle in Data …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/who-will-be-the-useless-species-of-2050-human-intelligence-v-s-artificial-intelligence/",
    Article_Title:
      "Who Will Be The Useless Species of 2050? Human Intelligence v/s Artificial Intelligence",
    Date: "MARCH 12, 2021",
    Author: "HRISHABH89",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview In this article, You will travel with me through …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/step-by-step-process-of-feature-engineering-for-machine-learning-algorithms-in-data-science/",
    Article_Title:
      "Step by Step process of Feature Engineering for Machine Learning Algorithms in Data Science",
    Date: "MARCH 11, 2021",
    Author: "ELLURU_PAVAN_KUMAR",
    Description:
      "ArticleVideo Book Introduction Data Science is not a field where theoretical understanding helps you to start a carrier. It totally depends on the projects …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/basic-ensemble-technique-in-machine-learning/",
    Article_Title: "Basic Ensemble Techniques in Machine Learning",
    Date: "MARCH 10, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction Ensembling is nothing but the technique to combine several individual predictive models to come up with the final predictive model. And …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/a-super-quick-introduction-to-machine-learning/",
    Article_Title: "A Super Quick Introduction to Machine Learning",
    Date: "MARCH 9, 2021",
    Author: "DESTOYER-BYTE",
    Description:
      "ArticleVideo Book Introduction. As we enter future times, man is trying his best to uncover all the secrets of technology. Looking back at a …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/beginners-guide-to-support-vector-machine-svm/",
    Article_Title: "Beginner’s Guide to Support Vector Machine(SVM)",
    Date: "MARCH 8, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective Learn how the support vector machine works Understand the role and types of kernel functions used in an SVM.   Introduction …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/stock-options-chain-analysis-using-excel/",
    Article_Title: "Stock Options Chain Analysis Using Excel",
    Date: "MARCH 8, 2021",
    Author: "KRRAI77@GMAIL.COM",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Simple strategies for trend analysis in stock options data …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/data-validation-and-data-verification-from-dictionary-to-machine-learning/",
    Article_Title:
      "Data Validation and Data Verification – From Dictionary to Machine Learning",
    Date: "MARCH 5, 2021",
    Author: "ADITYA.AGAR3",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Quite often, we use data verification and data validation …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/understanding-gradient-descent-algorithm/",
    Article_Title: "Understanding Gradient Descent Algorithm",
    Date: "MARCH 4, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective Optimization is the core of every machine learning algorithm. Understand how the Gradient descent algorithm works and optimize model performance. Note: …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/data-science-101-introduction-to-cost-function/",
    Article_Title: "Data Science 101: Introduction to Cost Function",
    Date: "MARCH 4, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction While dealing with Linear Regression we can have multiple lines for different values of slopes and intercepts. But the main question …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/lobe-perform-machine-learning-without-code/",
    Article_Title: "Lobe – Perform Machine Learning Without CODE",
    Date: "MARCH 3, 2021",
    Author: "MYEDUNEEDS",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview Machine learning is an area that is very fascinating …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/quick-guide-to-ai-and-ml-universe-for-business-leaders/",
    Article_Title: "Quick Guide to AI and ML Universe for Business Leaders",
    Date: "MARCH 3, 2021",
    Author: "SEJAL23",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Ever since the advent of Globalisation, the environment in …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/using-multiple-features-in-time-series-prediction-with-cnn-gru/",
    Article_Title:
      "Using Multiple features in Time Series Prediction with CNN/GRU",
    Date: "FEBRUARY 26, 2021",
    Author: "IWASNOTHING",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In the time series prediction, it is common to …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/the-exciting-future-potential-of-machine-learning/",
    Article_Title: "The Exciting Future Potential of Machine Learning",
    Date: "FEBRUARY 24, 2021",
    Author: "THIYAGARAJAN4",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Machine Learning works on the principles of computer algorithms …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/is-pypolars-the-new-alternative-to-pandas/",
    Article_Title: "Is Pypolars the New Alternative to Pandas?",
    Date: "FEBRUARY 23, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective Pandas is one of the prominent libraries for a data scientist when it’s about data manipulation and analysis. Let’s see do …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/simple-explanation-to-understand-k-means-clustering/",
    Article_Title: "Simple Explanation To Understand K Means Clustering",
    Date: "FEBRUARY 22, 2021",
    Author: "MANOJ147",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview K-means clustering is a very popular and powerful unsupervised …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/build-your-first-linear-regression-machine-learning-model/",
    Article_Title: "Build Your First Linear Regression Machine Learning Model",
    Date: "FEBRUARY 22, 2021",
    Author: "PRAYUKTHA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Do you find AI and ML interesting? Machine Learning and …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/ml-model-deployment-with-webhosting-frameworks/",
    Article_Title: "ML Model Deployment with Webhosting frameworks",
    Date: "FEBRUARY 20, 2021",
    Author: "ASHA05",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction With the motivation of award-winning from Analytics Vidhya Blogathon3 …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/decoding-the-memory-nomenclature-in-modern-day-computers-starting-with-ram/",
    Article_Title:
      "Decoding the Memory Nomenclature in modern-day computers, Starting with RAM",
    Date: "FEBRUARY 19, 2021",
    Author: "NILABHNISHCHHAL",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction For Data Analysts and ML professionals, the understanding of …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/a-quick-introduction-to-manifold-learning/",
    Article_Title: "A Quick Introduction to Manifold Learning",
    Date: "FEBRUARY 18, 2021",
    Author: "ISHA_SHARMA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction This article introduces the concept of Manifold Learning. It …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/a-simple-machine-learning-implementation-to-predict-linear-algebra-in-python/",
    Article_Title:
      "A Simple Machine Learning Implementation to Predict Linear Algebra in Python",
    Date: "FEBRUARY 18, 2021",
    Author: "MUHAMMADARNALDO",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon.   Photo by Max Fischer from Pexels Machine learning is …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/the-place-of-data-science-in-the-data-universe/",
    Article_Title: "The Place of Data Science in the Data Universe",
    Date: "FEBRUARY 18, 2021",
    Author: "AYOUB04",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. According to Barton Poulson, it is quite difficult to separate Data …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/introduction-to-machine-learning-for-absolute-beginners/",
    Article_Title: "Introduction to Machine Learning for Absolute Beginners",
    Date: "FEBRUARY 18, 2021",
    Author: "SHRISH7",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Machine learning.Sounds cool right? When I see those two …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/multicollinearity-problem-detection-and-solution/",
    Article_Title: "Multicollinearity: Problem, Detection and Solution",
    Date: "FEBRUARY 17, 2021",
    Author: "ANANYA19B",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. What is Multicollinearity? One of the key assumptions for a …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/unboxing-h2o-automl-models/",
    Article_Title: "Unboxing H2O AutoML Models",
    Date: "FEBRUARY 16, 2021",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book Introduction AutoML (Automated Machine Learning) platforms are getting more and more popular these days, as they allow us to automate the process …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/diminishing-the-dimensions-with-pca/",
    Article_Title: "Diminishing the Dimensions with PCA!",
    Date: "FEBRUARY 10, 2021",
    Author: "PRATHAMESH41",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction This article will give you clarity on what is …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/isotonic-regression-and-the-pava-algorithm/",
    Article_Title: "Isotonic Regression and the PAVA algorithm",
    Date: "FEBRUARY 8, 2021",
    Author: "NOOBMASTER21",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Isotonic Regression is one of those regression technique that …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/uninformed-search-algorithms-in-ai/",
    Article_Title: "Uninformed Search Algorithms in AI",
    Date: "FEBRUARY 7, 2021",
    Author: "SRINIKETHCR7",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction: Whoever it may be (humans or AI) need to …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/visualizing-pca-in-r-programming-with-factoshiny/",
    Article_Title: "Visualizing PCA in R-Programming with Factoshiny",
    Date: "FEBRUARY 6, 2021",
    Author: "PRIYA603",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Transforming a data set with Principal Component Analysis (PCA) …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/key-python-packages-for-data-science/",
    Article_Title: "Key Python Packages for Data Science",
    Date: "FEBRUARY 6, 2021",
    Author: "SHANTHABABU",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Hi! Young Data Science enthusiast, Let’s understand key packages …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/modelling-stock-price-using-financial-ratios-and-its-applications-to-make-buy-sell-hold-decisions/",
    Article_Title:
      "Modelling stock price using financial ratios and its applications to make buy/sell/hold decisions",
    Date: "FEBRUARY 4, 2021",
    Author: "GAURAV0979",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. INTRODUCTION Stock prediction is the act of forecasting the future …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/brief-introduction-to-the-rising-field-of-decision-intelligence/",
    Article_Title:
      "Brief Introduction to the Rising Field of Decision Intelligence!",
    Date: "FEBRUARY 4, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Overview Decision Intelligence is still an emerging field though it has been in the market for some time Understand what is a …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/understanding-the-dynamics-of-web-traffic-or-user-acquisition-through-regression-analysis/",
    Article_Title:
      "Understanding the Dynamics of Web Traffic or User Acquisition through Regression Analysis",
    Date: "FEBRUARY 2, 2021",
    Author: "BARUN33",
    Description:
      "ArticleVideo Book This article was published as an entry for the Data Science Blogathon. Introduction If you are a regular blogger, content creator, or …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/interactive-widget-based-hyperparameter-tuning-and-tracking-in-pywedge/",
    Article_Title:
      "Interactive Widget-Based Hyperparameter Tuning and Tracking in Pywedge",
    Date: "FEBRUARY 1, 2021",
    Author: "TAKNEV83@GMAIL.COM",
    Description:
      "ArticleVideo Book This article was published as an entry for the Data Science Blogathon. Introduction Machine Learning is an iterative process and the Model …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/a-look-at-machine-learning-system-design/",
    Article_Title: "A Look at Machine Learning System Design",
    Date: "JANUARY 29, 2021",
    Author: "KPIGATE15",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction As ML applications are maturing over time and becoming …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/profiling-market-segments-using-k-means-clustering/",
    Article_Title: "Profiling Market Segments using K-Means Clustering",
    Date: "JANUARY 28, 2021",
    Author: "SETHNEHA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Each individual is different and so are his preferences. …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/a-simple-guide-to-centroid-based-clustering-with-python-code/",
    Article_Title:
      "A Simple Guide to Centroid Based Clustering (with Python code)",
    Date: "JANUARY 27, 2021",
    Author: "ALIFIA2",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Clustering is the process of grouping similar data together. …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/gaussian-naive-bayes-with-hyperpameter-tuning/",
    Article_Title: "Gaussian Naive Bayes with Hyperparameter Tuning",
    Date: "JANUARY 27, 2021",
    Author: "AKSHAY956",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Naive Bayes is a classification technique based on the …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/security-threats-to-machine-learning-systems/",
    Article_Title: "Security Threats to Machine Learning Systems",
    Date: "JANUARY 25, 2021",
    Author: "TATWADARSHIPN",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Machine Learning has become a buzzword in recent times. …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/in-depth-intuition-of-k-means-clustering-algorithm-in-machine-learning/",
    Article_Title:
      "In-depth Intuition of K-Means Clustering Algorithm in Machine Learning",
    Date: "JANUARY 20, 2021",
    Author: "BASILB2S",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Clustering is an unsupervised machine learning technique. It is …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/a-quick-guide-to-setting-up-a-virtual-environment-for-machine-learning-and-deep-learning-on-macos/",
    Article_Title:
      "A Quick Guide to Setting up a Virtual Environment for Machine Learning and Deep Learning on macOS",
    Date: "JANUARY 20, 2021",
    Author: "SSHANKAR7",
    Description:
      "ArticleVideo Book Introduction Upgrading either Anaconda or Python on macOS is complicated. But using the process explained below will ease it out. For this, …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/a-quick-introduction-to-k-nearest-neighbor-knn-classification-using-python/",
    Article_Title:
      "A Quick Introduction to K – Nearest Neighbor (KNN) Classification Using Python",
    Date: "JANUARY 20, 2021",
    Author: "BASILB2S",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction This article concerns one of the supervised ML classification …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/machine-learning-in-microservices/",
    Article_Title: "Machine Learning in Microservices",
    Date: "JANUARY 19, 2021",
    Author: "PROGRAMMIA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. HIGHLIGHTS The increasing speed of data means the use of …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/ml-interpretability-using-lime-in-r/",
    Article_Title: "ML Interpretability using LIME in R",
    Date: "JANUARY 19, 2021",
    Author: "PURVA HUILGOL",
    Description:
      "ArticleVideo Book Overview Merely building the model is not enough without stakeholders not being to interpret the outputs of your model In this article, …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/a-guide-to-the-naive-bayes-algorithm/",
    Article_Title: "A Guide to the Naive Bayes Algorithm",
    Date: "JANUARY 16, 2021",
    Author: "SURBHI_22",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon.  Introduction to Naive Bayes algorithm Naive Bayes is a classification …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/avid-user-of-google-colab-here-are-some-alternatives-of-google-colab-that-you-should-know-about/",
    Article_Title:
      "Avid User of Google Colab? Here are Some Alternatives to Google Colab That you should Know About",
    Date: "JANUARY 14, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Overview Understand what is Google Colab Get a list of top Alternatives to Google Colab By no means is this list exhaustive. …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/beginners-guide-to-standard-gui-library-in-python-tkinter/",
    Article_Title:
      "Beginners Guide to Standard GUI library in Python – Tkinter",
    Date: "JANUARY 14, 2021",
    Author: "PRACHI.PRAKASH",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction A graphical user interface (GUI) is the interface that …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/5-important-things-to-keep-in-mind-during-data-preprocessing-specific-to-predictive-models/",
    Article_Title:
      "5 Important things to Keep in Mind during Data Preprocessing! (Specific to Predictive Models).",
    Date: "JANUARY 12, 2021",
    Author: "HARSH_K_JANGIR",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Hello, There Data science has been a vastly growing and …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/quick-notes-on-sas-macros-for-efficient-usage/",
    Article_Title: "Quick Notes on SAS Macros for Efficient Usage",
    Date: "JANUARY 12, 2021",
    Author: "F2005636",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Extending and customizing SAS for reducing the amount of …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/validation-of-classification-model/",
    Article_Title: "Validation of Classification Model",
    Date: "JANUARY 11, 2021",
    Author: "SMRUTI.MOH87@GMAIL.COM",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction The main objectives of a model validation include the …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/algotrading-using-technical-indicator-and-ml-models/",
    Article_Title: "AlgoTrading using Technical Indicator and ML models",
    Date: "JANUARY 11, 2021",
    Author: "ANK.DSM@GMAIL.COM",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon.   Introduction Many times we wonder if predictive analytics has …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/a-quick-overview-of-regression-algorithms-in-machine-learning/",
    Article_Title:
      "A Quick Overview of Regression Algorithms in Machine Learning",
    Date: "JANUARY 10, 2021",
    Author: "SURBHI_22",
    Description:
      "ArticleVideo Book The media shown in this article are not owned by Analytics Vidhya and is used at the Author’s discretion. Introduction Let’s start …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/exploring-ensemble-learning-in-machine-learning-world/",
    Article_Title: "Exploring Ensemble Learning in Machine Learning World!",
    Date: "JANUARY 10, 2021",
    Author: "SHANTHABABU",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Before getting starts with “Ensemble Techniques” in Machine Learning …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/explain-how-your-model-works-using-explainable-ai/",
    Article_Title: "Explain How Your Model Works Using Explainable AI",
    Date: "JANUARY 7, 2021",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book Can you explain how your model works? Meet XAI! Artificial intelligence techniques are used to solve real-world problems. We get the data, …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/using-predictive-power-score-to-pinpoint-non-linear-correlations/",
    Article_Title:
      "Using Predictive Power Score to Pinpoint Non-linear Correlations",
    Date: "DECEMBER 25, 2020",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book Image by Author In statistics, correlation or dependence is any statistical relationship, whether causal or not, between two random variables or bivariate …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/model-risk-management-and-the-role-of-explainable-modelswith-python-code/",
    Article_Title:
      "Model Risk Management And the Role of Explainable Models(With Python Code)",
    Date: "DECEMBER 21, 2020",
    Author: "ANK.DSM@GMAIL.COM",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Photo by h heyerlein on Unsplash   Introduction Similar to …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/a-quick-guide-to-data-science-and-machine-learning/",
    Article_Title: "A Quick Guide to Data science and Machine Learning",
    Date: "DECEMBER 21, 2020",
    Author: "MOHAMMED_NABEEL",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In today’s time, an enormous amount of data is …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/a-review-of-2020-and-data-science-trends-in-2021-a-technical-overview-of-machine-learning-and-deep-learning/",
    Article_Title:
      "A Review of 2020 and Trends in 2021 – A Technical Overview of Machine Learning and Deep Learning!",
    Date: "DECEMBER 18, 2020",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book Introduction Data science is not a choice anymore. It is a necessity. 2020 is almost in the books now. What a crazy …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/tutorial-to-data-preparation-for-training-machine-learning-model/",
    Article_Title:
      "Tutorial to data preparation for training machine learning model",
    Date: "DECEMBER 18, 2020",
    Author: "MAANVI",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction It happens quite often that we do not have …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/a-comprehensive-learning-path-to-become-a-data-scientist-in-2021/",
    Article_Title:
      "A Comprehensive Learning Path to Become a Data Scientist in 2021!",
    Date: "DECEMBER 17, 2020",
    Author: "RAM DEWANI",
    Description:
      "ArticleVideo Book Are you Ready to Become a Data Scientist in 2021? A new year beckons! New resolutions to become a data scientist have …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/an-end-to-end-comprehensive-guide-for-pca/",
    Article_Title: "An end-to-end comprehensive guide for PCA",
    Date: "DECEMBER 16, 2020",
    Author: "SETHNEHA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction One of the most sought-after and equally confounding methods …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/decluttering-the-performance-measures-of-classification-models/",
    Article_Title:
      "Decluttering the performance measures of classification models",
    Date: "DECEMBER 16, 2020",
    Author: "HIANJANA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction There are so many performance evaluation measures when it …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/understand-machine-learning-and-its-end-to-end-process/",
    Article_Title: "Understand Machine Learning and Its End-to-End Process",
    Date: "DECEMBER 16, 2020",
    Author: "SHANTHABABU",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. What is Machine Learning? Machine Learning: Machine Learning (ML) is …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/top-15-datasets-of-2020-that-every-data-scientist-should-add-to-their-portfolio/",
    Article_Title:
      "Top 15 Open-Source Datasets of 2020 that every Data Scientist Should add to their Portfolio!",
    Date: "DECEMBER 15, 2020",
    Author: "PURVA HUILGOL",
    Description:
      "ArticleVideo Book Overview Here is a list of Top 15 Datasets for 2020 that we feel every data scientist should practice on The article …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/feature-engineering-using-pandas-for-beginners/",
    Article_Title: "Feature Engineering Using Pandas for Beginners",
    Date: "DECEMBER 12, 2020",
    Author: "PROCRASTINATOR",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview: Feature engineering is one of the most critical steps …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/machine-learning-model-serverless-deployment/",
    Article_Title: "Machine Learning Model – Serverless Deployment",
    Date: "DECEMBER 12, 2020",
    Author: "ASHA05",
    Description:
      "ArticleVideo Book Introduction Read this article on machine learning model deployment using serverless deployment. Serverless compute abstracts away provisioning, managing severs and configuring software, …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/patterns-recognition-the-basis-of-human-and-machine-learning/",
    Article_Title:
      "Pattern Recognition: The basis of Human and Machine Learning",
    Date: "DECEMBER 11, 2020",
    Author: "PRATVS",
    Description:
      "ArticleVideo Book Introduction Find the key to unlock the magic, or else it is all fuzzy logic It was the pre-corona period and I …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/out-of-bag-oob-score-in-the-random-forest-algorithm/",
    Article_Title: "Out-of-Bag (OOB) Score in the Random Forest Algorithm",
    Date: "DECEMBER 9, 2020",
    Author: "RADHIKA_KUNCHHAL",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction While trying to make a better predictive model, we …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/an-academic-overview-of-markov-chain/",
    Article_Title: "An Academic Overview of Markov Chain",
    Date: "DECEMBER 9, 2020",
    Author: "PALAK11",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Analytics can be broadly segmented into 3 buckets by …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/predicting-using-linear-regression-in-r/",
    Article_Title: "Predicting using Linear Regression in R",
    Date: "DECEMBER 9, 2020",
    Author: "FASIH",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Can you predict the revenue of the company by …",
    Topic: "Machine learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/a-complete-guide-to-tensorboard/",
    Article_Title: "A Complete Guide to Tensorboard",
    Date: "APRIL 27, 2021",
    Author: "JYOTIYADAV22111",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction As data volume increases, deep learning techniques tend to …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/estimation-of-neurons-and-forward-propagation-in-neural-net/",
    Article_Title:
      "Estimation of Neurons and Forward Propagation in Neural Net",
    Date: "APRIL 26, 2021",
    Author: "SETHNEHA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In the previous article, we looked at what are …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/neural-networks-inside-internet-infrastructure/",
    Article_Title: "Neural Networks Inside Internet Infrastructure",
    Date: "APRIL 23, 2021",
    Author: "PRIYA603",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Data models are important in decision-making. Node.js programming can …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/role-of-machine-learning-in-natural-language-processing/",
    Article_Title: "Role of Machine Learning in Natural Language Processing",
    Date: "APRIL 23, 2021",
    Author: "TATWADARSHIPN",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Machine Learning and Natural Language Processing are important subfields …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/lets-talk-about-gans/",
    Article_Title: "Let’s Talk about GANs",
    Date: "APRIL 22, 2021",
    Author: "GOURAV29",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. What we want is a machine that can learn from experience. — Alan …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/10-pytorch-transformations-you-need-to-know/",
    Article_Title: "10 PyTorch Transformations you need to know!",
    Date: "APRIL 22, 2021",
    Author: "SHRI_VARSHENI",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Pytorch is a deep learning framework used extensively for …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/neural-networks-and-activation-function/",
    Article_Title: "Neural Networks and Activation Function",
    Date: "APRIL 21, 2021",
    Author: "SHIVAM941",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In the application of the Convolution Neural Network(CNN) model, …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/invert-the-characteristics-of-convolution-with-involution/",
    Article_Title: "Invert the characteristics of Convolution with Involution",
    Date: "APRIL 20, 2021",
    Author: "PAVAN3",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Convolution operation reigned supreme in the domain of computer …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/porting-a-pytorch-model-to-c/",
    Article_Title: "Porting a Pytorch Model to C++",
    Date: "APRIL 19, 2021",
    Author: "AYUSH9096",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Instructions In this article, we are going to see different …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/denoising-hyperspectral-images-using-wavelet-transform-techniques/",
    Article_Title:
      "Denoising Hyperspectral Images using Wavelet Transform Techniques",
    Date: "APRIL 17, 2021",
    Author: "SAWON",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon Introduction Behind any country’s development in several sectors like agriculture, …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/introduction-to-neural-radiance-field-or-nerf/",
    Article_Title: "Introduction to Neural Radiance Field or NeRF",
    Date: "APRIL 16, 2021",
    Author: "UJJAYANTA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Neural Radiance Field or NeRF is a method for …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/highlight-elimination-for-vehicle-detection-at-night-time/",
    Article_Title: "Highlight elimination for vehicle detection at night time",
    Date: "APRIL 14, 2021",
    Author: "SRIJITA_TIWARI",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Table of contents Introduction Methodology Further modifications Results Conclusion and …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/activation-functions-and-their-derivatives-a-quick-complete-guide/",
    Article_Title:
      "Activation Functions and their Derivatives – A Quick & Complete Guide",
    Date: "APRIL 14, 2021",
    Author: "LAKSHMI225",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In Deep learning, a neural network without an activation …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/artificial-neural-network-its-inspiration-and-the-working-mechanism/",
    Article_Title:
      "Artificial Neural Network, Its inspiration and the Working Mechanism",
    Date: "APRIL 14, 2021",
    Author: "KEERTHZ",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Human brain is a complex system made of billions …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/5-amazing-real-world-applications-of-artificial-intelligence-and-data-science/",
    Article_Title:
      "5 Amazing Real-World Applications of Artificial Intelligence and Data Science",
    Date: "APRIL 12, 2021",
    Author: "PAVANKALYAN9065",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Data Science and Artificial Intelligence (AI) are overtaking the …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/a-gentle-introduction-to-pytorch-library/",
    Article_Title: "A Gentle Introduction to PyTorch Library for Deep Learning",
    Date: "APRIL 12, 2021",
    Author: "JNK789",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. The following tutorial assumes some basic knowledge about Python programming …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/introduction-to-autonomous-navigation-lidar-sensor-fusion-kalman-filter/",
    Article_Title:
      "Introduction to Autonomous Navigation – LIDAR, Sensor Fusion, Kalman Filter",
    Date: "APRIL 11, 2021",
    Author: "SRSASPIREDDY",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction This article is an introduction to autonomous navigation. First, …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/how-did-the-machine-read-nutritional-facts-using-optical-character-recognition/",
    Article_Title:
      "How did the machine read nutritional facts using Optical Character Recognition?",
    Date: "APRIL 8, 2021",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book In this article, we show you how it was possible to read nutritional tables with Optical Character Recognition(OCR), Tesseract, and a lot …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/introduction-to-softmax-for-neural-network/",
    Article_Title: "Introduction to Softmax for Neural Network",
    Date: "APRIL 5, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective The activation function is one of the building blocks on Neural Network Understand how the Softmax activation works in a multiclass …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/getting-started-with-kaggle-using-facial-detection/",
    Article_Title: "Getting started with Kaggle using Facial Detection",
    Date: "APRIL 5, 2021",
    Author: "ANU631",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Facial Detection is the technology to detect human faces in …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/is-gradient-descent-sufficient-for-neural-network/",
    Article_Title: "Is Gradient Descent sufficient for Neural Network?",
    Date: "APRIL 1, 2021",
    Author: "SETHNEHA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction An important factor that is the basis of any …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/introduction-to-image-segmentation-for-data-science/",
    Article_Title: "Introduction to Image Segmentation for Data Science",
    Date: "MARCH 22, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective Computer vision is being widely used in the industry. You must have come across the applications where computer vision played a …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/introduction-to-the-architecture-of-alexnet/",
    Article_Title: "Introduction to The Architecture of Alexnet",
    Date: "MARCH 19, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective When we talk about the Pre-trained model in the Computer Vision domain, Alexnet comes out as a leading architecture. Let’s understand …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/improving-your-deep-learning-model-using-model-checkpointing-implementation-part-2/",
    Article_Title:
      "Improving your Deep Learning model using Model Checkpointing(Implementation)- Part 2",
    Date: "MARCH 18, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction In the last article, we understood the model checkpointing technique, which can be used in order to monitor the model performance …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/the-architecture-of-lenet-5/",
    Article_Title: "The Architecture of Lenet-5",
    Date: "MARCH 18, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective Transfer learning through Pre-trained models is a time and cost-efficient solution for deep learning problems. Understand the Architecture of Lenet-5 as …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/why-are-generative-adversarial-networksgans-so-famous-and-how-will-gans-be-in-the-future/",
    Article_Title:
      "Why Are Generative Adversarial Networks(GANs) So Famous And How Will GANs Be In The Future?",
    Date: "MARCH 18, 2021",
    Author: "MRINAL41",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. What are GENERATIVE ADVERESIAL NETWORKS and what are GANs used …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/introduction-to-gated-recurrent-unit-gru/",
    Article_Title: "Introduction to Gated Recurrent Unit (GRU)",
    Date: "MARCH 17, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective In sequence modeling techniques, the Gated Recurrent Unit is the newest entrant after RNN and LSTM, hence it offers an improvement …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/improving-your-deep-learning-model-using-model-checkpointing-part-1/",
    Article_Title:
      "Improving your Deep Learning model using Model Checkpointing- Part 1",
    Date: "MARCH 17, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction Deep learning is ubiquitous – whether it’s Computer Vision applications or breakthroughs in the field of Natural Language Processing, we are …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/introduction-to-long-short-term-memory-lstm/",
    Article_Title: "Introduction to Long Short Term Memory (LSTM)",
    Date: "MARCH 16, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective LSTM is a special kind of recurrent neural network capable of handling long-term dependencies. Understand the architecture and working of an …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/grayscale-and-rgb-format-for-storing-images/",
    Article_Title: "How Images are stored in the computer?",
    Date: "MARCH 16, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction Deep learning techniques are popularly used for unstructured data such as text data or image data. And before working on any …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/license-plate-character-recognition-using-knn-and-cnn/",
    Article_Title: "License Plate Character Recognition using kNN and CNN",
    Date: "MARCH 16, 2021",
    Author: "DKGEARED",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction This article focuses on the high paced growing field …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/variants-of-gradient-descent-algorithm/",
    Article_Title: "Variants of Gradient Descent Algorithm",
    Date: "MARCH 15, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction In a Neural Network, the Gradient Descent Algorithm is used during the backward propagation to update the parameters of the model. …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/edge-detection-extracting-the-edges-from-an-image/",
    Article_Title: "Edge Detection: Extracting The Edges From An Image",
    Date: "MARCH 12, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective Understand what is edge detection and how it can be helpful in image classification. Learn how kernels are used to identify …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/image-augmentation-techniques-for-training-deep-learning-models/",
    Article_Title:
      "Image Augmentation Techniques for Training Deep Learning Models",
    Date: "MARCH 10, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective Image augmentation is an efficacious technique when we don’t have an ample amount of data for training a deep learning model …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/an-image-is-worth-16x16-words-transformers-for-image-recognition-at-scale-vision-transformers/",
    Article_Title:
      "An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale (Vision Transformers)",
    Date: "MARCH 10, 2021",
    Author: "SATISHKUMAR18",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction While the Transformer architecture has become the de-facto standard …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/introduction-to-batch-normalization/",
    Article_Title: "Introduction to Batch Normalization",
    Date: "MARCH 9, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective Learn how to improve the neural network with the process of Batch Normalization. Understand the advantages batch normalization offers.   Introduction …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/forward-propagation-and-errors-in-a-neural-netwrok/",
    Article_Title: "Forward Propagation and Errors in a Neural Network",
    Date: "MARCH 9, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction If there is one area in data science that has led to the growth of Machine Learning and Artificial Intelligence in …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/neural-network-101-ultimate-guide-for-starters/",
    Article_Title: "Neural Network 101 – Ultimate Guide for Starters",
    Date: "MARCH 4, 2021",
    Author: "SHRISH7",
    Description:
      "ArticleVideo Book Date: 03-July-2040 Mission: Project Aries Destination: Mars Date of arrival to Mars: 18-Feb-2041 Landing Location: Jezero Crater, Mars  “Imagine you are on …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/a-beginners-guide-to-image-similarity-using-python/",
    Article_Title: "A Beginners’ Guide to Image Similarity using Python",
    Date: "MARCH 4, 2021",
    Author: "PRATEEKAGRAWAL",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Have you ever dreamt of building your own Image …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/binary-cross-entropy-log-loss-for-binary-classification/",
    Article_Title: "Binary Cross Entropy/Log Loss for Binary Classification",
    Date: "MARCH 3, 2021",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Objective Binary Classification is a recurrent problem in the data science world. Understand the Binary cross entropy and the math behind it …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/intuition-behind-perceptron-for-deep-learning/",
    Article_Title: "Intuition Behind Perceptron for Deep Learning",
    Date: "MARCH 3, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction Perceptron is one of the most fundamental concepts of deep learning which every data scientist is expected to master. It is …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/basics-of-neural-network/",
    Article_Title: "Deep Learning 101: Beginners Guide to Neural Network",
    Date: "MARCH 1, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction If there is one area in data science that has led to the growth of Machine Learning and Artificial Intelligence in …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/incremental-and-reinforced-learning-for-image-classification/",
    Article_Title:
      "Incremental and Reinforced learning for Image classification",
    Date: "FEBRUARY 27, 2021",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book Introduction One of the biggest challenges that deep learning faces today is the addition of newer labels to the neural models without …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/basics-of-natural-language-processing-nlp-basics/",
    Article_Title:
      "Basics of Natural Language Processing(NLP) for Absolute Beginners",
    Date: "FEBRUARY 26, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction According to industry estimates, only 21% of the available data is present in a structured form. Data is being generated as …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/comprehensive-guide-data-science-professional/",
    Article_Title:
      "A Comprehensive Step-by-Step Guide to Become an Industry Ready Data Science Professional",
    Date: "FEBRUARY 24, 2021",
    Author: "RAM DEWANI",
    Description:
      "ArticleVideo Book Introduction to Artificial Intelligence and Machine Learning Artificial Intelligence (AI) and its sub-field Machine Learning (ML) have taken the world by storm. …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/sentiment-analysis-predicting-sentiment-of-covid-19-tweets/",
    Article_Title:
      "Sentiment Analysis: Predicting Sentiment Of COVID-19 Tweets",
    Date: "FEBRUARY 22, 2021",
    Author: "RAJESHMORE1",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Hi folks, I hope you are doing well in …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/dialogue-summarization-a-deep-learning-approach/",
    Article_Title: "Dialogue Summarization: A Deep Learning Approach",
    Date: "FEBRUARY 17, 2021",
    Author: "ASEEM75",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Dialogue Summarization: Its types and methodology   Image cc: Aseem …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/introduction-to-tensorflow-3d-for-3d-scene-understanding-by-google-ai/",
    Article_Title:
      "Introduction to Tensorflow 3D for 3D Scene Understanding by Google AI",
    Date: "FEBRUARY 15, 2021",
    Author: "TANISHQ GAUTAM",
    Description:
      "ArticleVideo Book Overview Google AI has introduced Tensorflow 3D, designed to bring 3D deep learning capabilities into TensorFlow. The library can be used for state-of-the-art …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/hugging-face-introduces-the-first-automatic-speech-recognition-model-wav2vec2/",
    Article_Title:
      "Introduction to Hugging Face’s Transformers v4.3.0 and its First Automatic Speech Recognition Model – Wav2Vec2",
    Date: "FEBRUARY 10, 2021",
    Author: "TANISHQ GAUTAM",
    Description:
      "ArticleVideo Book Overview Hugging Face has released Transformers v4.3.0 and it introduces the first Automatic Speech Recognition model to the library: Wav2Vec2 Using one …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/trim-videos-with-deep-learning/",
    Article_Title: "Trim Videos with Deep Learning!",
    Date: "FEBRUARY 4, 2021",
    Author: "SHARAN-BABU2001",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. INTRODUCTION Hi, in this tutorial, we are going to have …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/self-supervised-learning-models-to-predict-early-covid-19-deterioration-by-facebook-ai/",
    Article_Title:
      "Self Supervised Learning Models to Predict Early COVID-19 Deterioration by Facebook AI",
    Date: "JANUARY 27, 2021",
    Author: "TANISHQ GAUTAM",
    Description:
      "ArticleVideo Book Overview Facebook AI and NYU Health Predictive Unit have developed machine learning models that can help doctors predict how a patient’s condition …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/understanding-architecture-of-lstm/",
    Article_Title: "Understanding Architecture of LSTM",
    Date: "JANUARY 21, 2021",
    Author: "GOURAV29",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction “Machine intelligence is the last invention that humanity will …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/implementation-of-attention-mechanism-for-caption-generation-on-transformers-using-tensorflow/",
    Article_Title:
      "Implementation of Attention Mechanism for Caption Generation on Transformers using TensorFlow",
    Date: "JANUARY 20, 2021",
    Author: "TANISHQ GAUTAM",
    Description:
      "ArticleVideo Book Overview Learning about the state of the art model that is Transformers. Understand how we can implement Transformers on the already seen …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/a-quick-guide-to-setting-up-a-virtual-environment-for-machine-learning-and-deep-learning-on-macos/",
    Article_Title:
      "A Quick Guide to Setting up a Virtual Environment for Machine Learning and Deep Learning on macOS",
    Date: "JANUARY 20, 2021",
    Author: "SSHANKAR7",
    Description:
      "ArticleVideo Book Introduction Upgrading either Anaconda or Python on macOS is complicated. But using the process explained below will ease it out. For this, …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/lets-throw-some-torch-on-tensor-operations/",
    Article_Title: "Let’s throw some “Torch” on Tensor Operations",
    Date: "JANUARY 18, 2021",
    Author: "ANCHIT13",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon.   Discussing 5 Basic and Most Used Tensor Operations Deep …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/aiaas-out-of-the-box-pre-built-solutions/",
    Article_Title: "AIaaS – Out of the box pre-built Solutions",
    Date: "JANUARY 18, 2021",
    Author: "PATTABHIRAMANSRINIVASAN@GMAIL.COM",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Software as a service, Infrastructure as a service, Platform …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/building-a-cnn-model-with-95-accuracy/",
    Article_Title: "Building a CNN Model with 95% accuracy",
    Date: "JANUARY 15, 2021",
    Author: "AROMALJOSEBABY",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction If you are determined to make a CNN model …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/avid-user-of-google-colab-here-are-some-alternatives-of-google-colab-that-you-should-know-about/",
    Article_Title:
      "Avid User of Google Colab? Here are Some Alternatives to Google Colab That you should Know About",
    Date: "JANUARY 14, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Overview Understand what is Google Colab Get a list of top Alternatives to Google Colab By no means is this list exhaustive. …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/auto-encoders-for-computer-vision-an-endless-world-of-possibilities/",
    Article_Title:
      "Auto-Encoders for Computer Vision: An Endless world of Possibilities",
    Date: "JANUARY 14, 2021",
    Author: "RITWEK",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Hi everyone, for the past few months I am …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/emotion-classification-on-twitter-data-using-transformers/",
    Article_Title: "Emotion classification on Twitter Data Using Transformers",
    Date: "JANUARY 13, 2021",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book Introduction The world of Natural language processing is recently overtaken by the invention of Transformers. Transformers are entirely indifferent to the conventional …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/querying-similar-images-with-tensorflow/",
    Article_Title: "Querying Similar Images with TensorFlow",
    Date: "JANUARY 12, 2021",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book Two different image search engines developed with Deep Learning algorithms Photo by Geran de Klerk on Unsplash Introduction Imagine that you want …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/image-classification-using-convolutional-neural-networks-a-step-by-step-guide/",
    Article_Title:
      "Image Classification Using Convolutional Neural Networks: A step by step guide",
    Date: "JANUARY 11, 2021",
    Author: "DEVANSH75",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Convolutional Neural Networks come under the subdomain of Machine …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/out-of-the-box-nlp-functionalities-for-your-project-using-transformers-library/",
    Article_Title:
      "Out-of-the-box NLP functionalities for your project using Transformers Library!",
    Date: "JANUARY 9, 2021",
    Author: "SHARAN-BABU2001",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In this tutorial, you will learn how you can …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/openais-future-of-vision-contrastive-language-image-pre-trainingclip/",
    Article_Title:
      "OpenAI’s Future of Vision: Contrastive Language Image Pre-training (CLIP)",
    Date: "JANUARY 8, 2021",
    Author: "TANISHQ GAUTAM",
    Description:
      "ArticleVideo Book Introduction 2021 has begun with a bang! OpenAI has released two major innovations in the field of Computer Vision: CLIP and DALL-E. …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/openais-future-of-vision-with-dall-e-creating-images-from-text/",
    Article_Title:
      "OpenAI’s Future of Vision with DALL-E: Creating Images from Text",
    Date: "JANUARY 8, 2021",
    Author: "TANISHQ GAUTAM",
    Description:
      "ArticleVideo Book Introduction A major goal of Artificial Intelligence in recent years has been creating multimodal systems, i.e, systems that can learn concepts in …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/coca-cola-bottle-image-recognition/",
    Article_Title: "Coca-Cola Bottle Image Recognition (with Python code)",
    Date: "JANUARY 8, 2021",
    Author: "T_TSU",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction The Coca-Cola company has embraced the reuse of its …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/introduction-to-automatic-speech-recognition-and-natural-language-processing/",
    Article_Title:
      "Introduction to Automatic Speech Recognition and Natural Language Processing",
    Date: "JANUARY 7, 2021",
    Author: "PRATEEK.SAWHNEY97@GMAIL.COM",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In this article, we will take a closer look …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/gpt-3-the-next-big-thing-foundation-of-future/",
    Article_Title: "GPT-3 THE NEXT BIG THING! Foundation of Future?",
    Date: "JANUARY 6, 2021",
    Author: "KAUSHAL113",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Did you ever have a thought or a wish …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/fake-news-classifier-on-us-election-news%f0%9f%93%b0-lstm-%f0%9f%88%9a/",
    Article_Title: "Fake news classifier on US Election News | LSTM",
    Date: "DECEMBER 31, 2020",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book Introduction News media has become a channel to pass on the information of what’s happening in the world to the people living. …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/multilingual-languages-in-natural-language-processing-targeting-low-resource-indian-languages/",
    Article_Title:
      "Multilingualism in Natural Language Processing: Targeting Low Resource Indian Languages",
    Date: "DECEMBER 20, 2020",
    Author: "HRITHIK",
    Description:
      "ArticleVideo Book Introduction A language is a systematic form of communication that can take a variety of forms. There are approximately 7,000 languages believed …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/a-review-of-2020-and-data-science-trends-in-2021-a-technical-overview-of-machine-learning-and-deep-learning/",
    Article_Title:
      "A Review of 2020 and Trends in 2021 – A Technical Overview of Machine Learning and Deep Learning!",
    Date: "DECEMBER 18, 2020",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book Introduction Data science is not a choice anymore. It is a necessity. 2020 is almost in the books now. What a crazy …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/a-comprehensive-learning-path-to-become-a-data-scientist-in-2021/",
    Article_Title:
      "A Comprehensive Learning Path to Become a Data Scientist in 2021!",
    Date: "DECEMBER 17, 2020",
    Author: "RAM DEWANI",
    Description:
      "ArticleVideo Book Are you Ready to Become a Data Scientist in 2021? A new year beckons! New resolutions to become a data scientist have …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/an-overview-of-neural-approach-on-pattern-recognition/",
    Article_Title: "An Overview of Neural Approach on Pattern Recognition",
    Date: "DECEMBER 16, 2020",
    Author: "SAWON",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction We often see that when people are giving the …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/misguiding-deep-neural-networks-generalized-pixel-attack/",
    Article_Title: "Misguiding Deep Neural Networks: Generalized Pixel Attack",
    Date: "DECEMBER 16, 2020",
    Author: "KOPALDEEP",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Recent advancements in machine learning and deep neural networks …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/top-15-datasets-of-2020-that-every-data-scientist-should-add-to-their-portfolio/",
    Article_Title:
      "Top 15 Open-Source Datasets of 2020 that every Data Scientist Should add to their Portfolio!",
    Date: "DECEMBER 15, 2020",
    Author: "PURVA HUILGOL",
    Description:
      "ArticleVideo Book Overview Here is a list of Top 15 Datasets for 2020 that we feel every data scientist should practice on The article …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/an-approach-towards-neural-network-based-image-clustering/",
    Article_Title: "An Approach towards Neural Network based Image Clustering",
    Date: "DECEMBER 14, 2020",
    Author: "RITWEK",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction: Hi everyone, recently while participating in a Deep Learning …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/mlp-multilayer-perceptron-simple-overview/",
    Article_Title: "A Simple overview of Multilayer Perceptron(MLP)",
    Date: "DECEMBER 13, 2020",
    Author: "FRANCKEPEIXOTO",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Understanding this network helps us to obtain information about …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/patterns-recognition-the-basis-of-human-and-machine-learning/",
    Article_Title:
      "Pattern Recognition: The basis of Human and Machine Learning",
    Date: "DECEMBER 11, 2020",
    Author: "PRATVS",
    Description:
      "ArticleVideo Book Introduction Find the key to unlock the magic, or else it is all fuzzy logic It was the pre-corona period and I …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/what-i-did-when-i-had-to-work-with-unstructured-data/",
    Article_Title: "What I did when I had to work with unstructured data?",
    Date: "DECEMBER 9, 2020",
    Author: "PALAK11",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction I am sure those of you working with data …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/training-stylegan-using-transfer-learning-on-a-custom-dataset-in-google-colaboratory/",
    Article_Title:
      "Training StyleGAN using Transfer learning on a custom dataset in google colaboratory",
    Date: "DECEMBER 7, 2020",
    Author: "PATTABHIRAMANSRINIVASAN@GMAIL.COM",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Summary Share my knowledge of training the style GAN step …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/deep-learning-with-google-teachable-machine/",
    Article_Title:
      "Control the Mouse with your Head Pose using Deep Learning with Google Teachable Machine",
    Date: "DECEMBER 5, 2020",
    Author: "SHARAN-BABU2001",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Hi, In this article, let us go over how …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/tired-of-reading-long-articles-text-summarization-will-make-your-task-easier/",
    Article_Title:
      "Tired of Reading Long Articles? Text Summarization will make your task easier!",
    Date: "DECEMBER 2, 2020",
    Author: "EKTA15",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Millions of web pages and websites exist on the …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/11/extending-the-imagedatagenerator-keras-tensorflow/",
    Article_Title: "Extending the ImageDataGenerator in Keras and TensorFlow",
    Date: "NOVEMBER 27, 2020",
    Author: "RAMAN70",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Understanding the Problem Many times while working on computer vision …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/11/tutorial-how-to-visualize-feature-maps-directly-from-cnn-layers/",
    Article_Title:
      "Tutorial — How to visualize Feature Maps directly from CNN layers",
    Date: "NOVEMBER 21, 2020",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book Introduction Let’s put on the eyes of Neural Networks and see what the Convolution Neural Networks see. Photo by David Travis on …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/11/attention-mechanism-for-caption-generation/",
    Article_Title:
      "A Hands-on Tutorial to Learn Attention Mechanism For Image Caption Generation in Python",
    Date: "NOVEMBER 20, 2020",
    Author: "TANISHQ GAUTAM",
    Description:
      "ArticleVideo Book Overview Understand the attention mechanism for image caption generation Implement attention mechanism to generate caption in python   Introduction The attention mechanism …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/11/deep-unsupervised-learning-in-energy-sector-autoencoders-in-action/",
    Article_Title:
      "Deep Unsupervised Learning in Energy Sector – Autoencoders in Action",
    Date: "NOVEMBER 12, 2020",
    Author: "PATTABHIRAMANSRINIVASAN@GMAIL.COM",
    Description:
      "ArticleVideo Book Introduction In this short article, I will talk about unsupervised learning especially in the energy domain. The blog would mainly focus on …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/11/baseline-for-policy-gradients/",
    Article_Title:
      "Baseline for Policy Gradients that All Deep Learning Enthusists Must Know",
    Date: "NOVEMBER 11, 2020",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book Introduction Photo by Kevin Ku on Unsplash Deep reinforcement learning has a variety of different algorithms that solves many types of complex …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/11/generate-carnatic-music-with-google-magenta/",
    Article_Title: "Generate Carnatic Music with Google Magenta",
    Date: "NOVEMBER 10, 2020",
    Author: "PRATVS",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Music is the rhythm of the life Music is a …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/11/computer-vision-a-key-concept-to-solve-many-problems-related-to-image-data/",
    Article_Title:
      "Computer Vision: A Key Concept to Solve Many Problems Related to Image Data",
    Date: "NOVEMBER 8, 2020",
    Author: "LIKHITHA6",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Computer Vision is evolving from the emerging stage and …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/11/how-to-download-install-and-use-nvidia-gpu-for-tensorflow-on-windows/",
    Article_Title:
      "How to Download, Install and Use Nvidia GPU for Training Deep Neural Networks by TensorFlow on Windows Seamlessly",
    Date: "NOVEMBER 8, 2020",
    Author: "SATYANARAYANA5",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview understanding GPU’s in Deep learning. Starting with prerequisites for …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/11/a-short-intuitive-explanation-of-convolutional-recurrent-neural-networks/",
    Article_Title:
      "A Short Intuitive Explanation of Convolutional Recurrent Neural Networks",
    Date: "NOVEMBER 7, 2020",
    Author: "SORANA",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Hello! Today I am going to try my best …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/11/create-your-own-image-caption-generator-using-keras/",
    Article_Title: "Create your Own Image Caption Generator using Keras!",
    Date: "NOVEMBER 4, 2020",
    Author: "TANISHQ GAUTAM",
    Description:
      "ArticleVideo Book Overview Understand how image caption generator works using the encoder-decoder Know how to create your own image caption generator using Keras   …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/10/multivariate-multi-step-time-series-forecasting-using-stacked-lstm-sequence-to-sequence-autoencoder-in-tensorflow-2-0-keras/",
    Article_Title:
      "Multivariate Multi-step Time Series Forecasting using Stacked LSTM sequence to sequence Autoencoder in Tensorflow 2.0 / Keras",
    Date: "OCTOBER 29, 2020",
    Author: "JAGADEESH23",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview This article will see how to create a stacked …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/10/what-is-the-convolutional-neural-network-architecture/",
    Article_Title: "What is the Convolutional Neural Network Architecture?",
    Date: "OCTOBER 28, 2020",
    Author: "PHANI8",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Working on a Project on image recognition or Object …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/10/virtual-reality-for-the-web-a-framecreating-3d-models-from-images/",
    Article_Title:
      "Virtual Reality for the Web: A-Frame(Creating 3D models from Images)",
    Date: "OCTOBER 27, 2020",
    Author: "UJJAYANTA",
    Description:
      "ArticleVideo Book Introduction Virtual reality refers to a simulation generated by a computer which allows user interaction with the use of special headsets. In …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/10/introduction-and-implementation-to-neural-style-transfer-deep-learning/",
    Article_Title:
      "Introduction and Implementation to Neural Style Transfer – Deep Learning",
    Date: "OCTOBER 22, 2020",
    Author: "ANANYD36",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. INTRODUCTION What is Deep Learning? Deep Learning is a subset …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/10/how-to-get-background-blur-using-deep-learning/",
    Article_Title:
      "Generate Background Blur using Deep Learning in Python with this Simple Tutorial",
    Date: "OCTOBER 19, 2020",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book Overview Get to know the deep learning model we will use and ReLu6 Understand how to get blur background using deep learning …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/10/create-image-classification-model-python-keras/",
    Article_Title:
      "Create your Own Image Classification Model using Python and Keras",
    Date: "OCTOBER 16, 2020",
    Author: "TANISHQ GAUTAM",
    Description:
      "ArticleVideo Book Introduction Have you ever stumbled upon a dataset or an image and wondered if you could create a system capable of differentiating …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/10/building-an-end-to-end-image-classification-recognition-application/",
    Article_Title:
      "Build an End to End Image Classification/Recognition Application",
    Date: "OCTOBER 14, 2020",
    Author: "EKTA15",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In the recent years, face recognition applications have been …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/10/sanitizing-the-data-merging-disparate-data-sources-on-common-categories/",
    Article_Title:
      "Sanitizing the Data – Merging Disparate Data Sources on Common Categories",
    Date: "OCTOBER 12, 2020",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book Introduction In general terms, this article is going to be about data cleansing. Specifically, the process I would like to explore is …",
    Topic: "Deep learning",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/introduction-and-a-new-convection-about-data-science/",
    Article_Title: "Introduction and a New Convection About Data Science",
    Date: "APRIL 26, 2021",
    Author: "YAMINI5",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Today Data Science has become a huge topic and …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/25-probability-and-statistics-questions-to-ace-your-data-science-interviews/",
    Article_Title:
      "25 Probability and Statistics Questions to Ace your Data Science Interviews",
    Date: "APRIL 23, 2021",
    Author: "CHIRAG676",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Statistics is the heart of Machine Learning Statistical methods …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/top-30-mcqs-to-ace-your-data-science-questions-interviews/",
    Article_Title: "Top 30 MCQs to Ace Your Data Science Interviews",
    Date: "APRIL 22, 2021",
    Author: "CHIRAG676",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Data Science is getting popular day by day with …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/data-science-immersive-bootcamp-2nd-edition-with-internship-and-job-guarantee/",
    Article_Title:
      "Launching the Data Science Immersive Bootcamp with internship and Job Guarantee! (2021 Batch)",
    Date: "APRIL 21, 2021",
    Author: "ABHIRAJ SURESH",
    Description:
      "ArticleVideo Book Introduction Analytics Vidhya has been at the forefront of bridging the gap between theoretical knowledge and practical application of data science concepts …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/interesting-kaggle-datasets-every-beginner-in-data-science-should-try-out/",
    Article_Title:
      "Interesting Kaggle Datasets Every Beginner in Data Science Should Try Out",
    Date: "APRIL 21, 2021",
    Author: "PRATEEKMAJ21",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction These days, Kaggle has indeed become one of the …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/machine-learning-basics-for-data-science-enthusiasts/",
    Article_Title: "Machine Learning Basics For Data Science Enthusiasts",
    Date: "APRIL 19, 2021",
    Author: "PRANSHU0",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview Introduction to Machine Learning Basics Need of Machine Learning …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/what-data-science-future-looks-like/",
    Article_Title: "What Data Science Future Looks Like?",
    Date: "APRIL 16, 2021",
    Author: "ANANTKNITJ",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. ” Opportunities don’t happen you create them” Data Science isn’t …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/top-online-platforms-to-learn-python/",
    Article_Title: "Top Online Platforms to Learn Python",
    Date: "APRIL 16, 2021",
    Author: "SION",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. What is Python? Python is arguably the most popular programming …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/how-to-make-an-impressive-data-science-portfolio/",
    Article_Title: "How to make an impressive Data Science Portfolio?",
    Date: "APRIL 15, 2021",
    Author: "ANJALI001",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. ” A good first impression can work wonders” – J. …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/does-the-popularity-of-automl-means-the-end-of-data-science-jobs/",
    Article_Title:
      "Does The Popularity of AutoML Means the End of Data Science Jobs?",
    Date: "APRIL 14, 2021",
    Author: "CHIRAG676",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction With the strike of the COVID-19 pandemic and urge …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/upcoming-ds-ml-ai-online-conference-in-2021/",
    Article_Title: "7 Upcoming DS/ML/AI/DE Online Conferences in 2021",
    Date: "APRIL 13, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction The value of meeting people and interacting with people in a private space is one of the best ways to network …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/beginning-your-data-science-journey/",
    Article_Title: "Beginning your Data Science Journey",
    Date: "APRIL 13, 2021",
    Author: "SION",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. A complete Data science guide for people beginning their Data …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/step-by-step-guide-to-become-a-data-scientist-from-scratch/",
    Article_Title:
      "Step By Step Guide To Become A Data Scientist (from scratch!)",
    Date: "APRIL 12, 2021",
    Author: "PRANSHU0",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Overview Step by Step guide to developing must learn skills …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/alternative-tools-for-effective-machine-learning/",
    Article_Title: "Alternative Tools for Effective Machine Learning",
    Date: "APRIL 10, 2021",
    Author: "PRIYA603",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction As a data science learner, many resources are easily …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/common-mistakes-data-engineers-do-in-their-learning-path/",
    Article_Title: "Common mistakes Data Engineers do in their Learning Path",
    Date: "APRIL 10, 2021",
    Author: "SAURAV88",
    Description:
      "ArticleVideo Book It has been lately called that ‘data scientist’ is the sexiest job of the 21st century. However, now, data engineering jobs are …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/04/how-ai-is-used-in-the-cryptocurrency-market/",
    Article_Title:
      "How Artificial Intelligence is used in the cryptocurrency market?",
    Date: "APRIL 5, 2021",
    Author: "EMILIA3",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Cryptocurrencies continue to be an extremely interesting phenomenon today. …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/7-proven-steps-to-impress-the-recruiter-with-your-machine-learning-ml-projects/",
    Article_Title:
      "7 Proven Steps to Impress the Recruiter with Your Machine Learning Projects",
    Date: "MARCH 27, 2021",
    Author: "MANPREET36",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction After arming yourself up with all the relevant industry …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/career-in-machine-learning-and-data-science/",
    Article_Title: "Career in Machine Learning and Data Science",
    Date: "MARCH 26, 2021",
    Author: "DOSSIER",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction   image source-dreamstime.com Machine Learning and Data Science are …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/common-tools-used-in-data-science-spectrum/",
    Article_Title: "Common Tools used in Data Science Spectrum",
    Date: "MARCH 24, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction In the previous article, Common Data Capturing Types and Tools, we got an understanding of different tools and ways of capturing …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/kickstart-guide-to-become-a-m-a-d-programmer/",
    Article_Title: "Kickstart Guide to Become a M-A-D Programmer",
    Date: "MARCH 22, 2021",
    Author: "GHVARDHAN@123",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Artificial Intelligence – Machine Learning – Deep Learning – Data …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/common-terminologies-used-in-machine-learning-and-artificial-intelligence/",
    Article_Title:
      "Common terminologies used in Machine Learning and Artificial Intelligence",
    Date: "MARCH 20, 2021",
    Author: "HIMANSHI SINGH",
    Description:
      "ArticleVideo Book Introduction In this article, we’ll introduce you to various common terminologies used in the machine learning and artificial intelligence industry. Without any …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/the-most-important-skills-needed-to-become-a-successful-data-scientist-in-2021/",
    Article_Title:
      "The Most Important Skills Needed to Become a Successful Data Scientist in 2021",
    Date: "MARCH 17, 2021",
    Author: "ANANYACY",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. In the present era, plenty of aspiring data science professionals …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/interview-questions-on-exploratory-data-analysis-eda/",
    Article_Title: "Interview Questions on Exploratory Data Analysis (EDA)",
    Date: "MARCH 10, 2021",
    Author: "RADHIKA_KUNCHHAL",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Are you aspiring to become a data analyst/scientist, but …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/data-science-is-not-good-for-health-a-unique-look-at-data-science/",
    Article_Title:
      "Data Science is Not Good for Health – A Unique Look at Data Science",
    Date: "MARCH 9, 2021",
    Author: "AUDDY",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Sarcasm? Well, why would someone talk bad about data …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/a-super-quick-introduction-to-machine-learning/",
    Article_Title: "A Super Quick Introduction to Machine Learning",
    Date: "MARCH 9, 2021",
    Author: "DESTOYER-BYTE",
    Description:
      "ArticleVideo Book Introduction. As we enter future times, man is trying his best to uncover all the secrets of technology. Looking back at a …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/understanding-data-science-from-a-beginners-lens/",
    Article_Title: "Understanding Data Science from a Beginner’s Lens",
    Date: "MARCH 9, 2021",
    Author: "INFITRIX",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction You think data science is just a buzz word …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/kaggle-grandmaster-series-exclusive-interview-with-kaggle-notebooks-grandmaster-tarun-paparaju-rank-25/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Kaggle Notebooks Grandmaster Tarun Paparaju (#Rank 25)",
    Date: "MARCH 8, 2021",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book Welcome back to Kaggle Grandmaster Series! Today we are thrilled to be joined by Tarun Paparaju to share his journey with us. …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/data-scientist-roles-in-telecom-industry/",
    Article_Title: "Data Science Roles in Telecom industry",
    Date: "MARCH 4, 2021",
    Author: "TRUPTI0",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction As a Data Scientist, I have worked with one …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/03/quick-guide-to-ai-and-ml-universe-for-business-leaders/",
    Article_Title: "Quick Guide to AI and ML Universe for Business Leaders",
    Date: "MARCH 3, 2021",
    Author: "SEJAL23",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Ever since the advent of Globalisation, the environment in …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/comprehensive-guide-data-science-professional/",
    Article_Title:
      "A Comprehensive Step-by-Step Guide to Become an Industry Ready Data Science Professional",
    Date: "FEBRUARY 24, 2021",
    Author: "RAM DEWANI",
    Description:
      "ArticleVideo Book Introduction to Artificial Intelligence and Machine Learning Artificial Intelligence (AI) and its sub-field Machine Learning (ML) have taken the world by storm. …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/the-exciting-future-potential-of-machine-learning/",
    Article_Title: "The Exciting Future Potential of Machine Learning",
    Date: "FEBRUARY 24, 2021",
    Author: "THIYAGARAJAN4",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Machine Learning works on the principles of computer algorithms …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/why-programming-is-essential-for-data-science/",
    Article_Title: "Why Programming is Essential for Data Science",
    Date: "FEBRUARY 22, 2021",
    Author: "ABHIRAJ SURESH",
    Description:
      "ArticleVideo Book Introduction I graduated with a degree in Bachelor’s of Commerce from Delhi University and decided to pursue Data Science as a career. …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/6-open-source-data-science-projects-that-provide-an-edge-to-your-portfolio/",
    Article_Title:
      "6 Open Source Data Science Projects That Provide an Edge to Your Portfolio",
    Date: "FEBRUARY 19, 2021",
    Author: "ABHIRAJ SURESH",
    Description:
      "ArticleVideo Book Introduction “I understand the concepts well. Why should I focus on data science projects in my data science journey?” I have been …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/introduction-to-machine-learning-for-absolute-beginners/",
    Article_Title: "Introduction to Machine Learning for Absolute Beginners",
    Date: "FEBRUARY 18, 2021",
    Author: "SHRISH7",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Machine learning.Sounds cool right? When I see those two …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/kaggle-grandmaster-series-exclusive-interview-with-kaggle-competiton-grandmaster-oleg-yaroshevskiy-rank-32/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Kaggle Competiton Grandmaster Oleg Yaroshevskiy (#Rank 32)",
    Date: "FEBRUARY 17, 2021",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book Welcome back to the 22nd edition of the Kaggle Grandmaster Series Today, we are thrilled to be joined by Oleg Yaroshevskiy to …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/kaggle-grandmaster-series-exclusive-interview-with-kaggle-notebooks-grandmaster-kostiantyn-isaienkovrank-8/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Kaggle Notebooks Grandmaster Kostiantyn Isaienkov (#Rank 8)",
    Date: "FEBRUARY 12, 2021",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book “I think the main challenge for a lot of beginner kagglers is to overcome their fear of failure and criticism”- Kostiantyn Isaienkov …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/kaggle-grandmaster-series-exclusive-interview-with-kaggle-quadruple-grandmaster-rohan-rao/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Kaggle Quadruple/4x Grandmaster Rohan Rao",
    Date: "FEBRUARY 9, 2021",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book Ever seen a data scientist with more than 2 Kaggle Grandmaster titles? Well, don’t stop at 3 now as we bring to …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/kaggle-grandmaster-series-exclusive-interview-with-kaggle-datasets-grandmaster-ruchi-bhatiarank-5/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Kaggle Datasets Grandmaster Ruchi Bhatia(#Rank 5)",
    Date: "FEBRUARY 5, 2021",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book Welcome back to the Kaggle Grandmaster Series In the 19th edition of the Kaggle Grandmaster Series, we are thrilled to be joined …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/analytics-vidhya-presents-job-a-thon-your-dream-data-science-job-at-your-fingertips/",
    Article_Title:
      "Analytics Vidhya Presents JOB-A-THON – Your Dream Data Science Job at your Fingertips!",
    Date: "FEBRUARY 3, 2021",
    Author: "RAM DEWANI",
    Description:
      "ArticleVideo Book Introduction What if I told you that your dream data science role was just around the corner? How easy would life be …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/02/kaggle-grandmaster-series-exclusive-interview-with-kaggle-notebooks-grandmaster-gabriel-preda-rank-10/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Kaggle Notebooks Grandmaster Gabriel Preda (#Rank 10)",
    Date: "FEBRUARY 2, 2021",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book “When, a few years ago, I started to study Data Science systematically, I could use all this previous experience”- Gabriel Preda The …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/kaggle-grandmaster-series-exclusive-interview-with-kaggle-discussion-grandmaster-raju-kumar-mishra-rank-48/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Kaggle Discussion Grandmaster Raju Kumar Mishra (#Rank 48)",
    Date: "JANUARY 28, 2021",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book “Let me tell you a secret, getting the first freelance data science project may require huge patience”- Raju Kumar Mishra India is …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/an-quick-overview-of-data-science-universe/",
    Article_Title: "A Quick Overview of Data Science Universe",
    Date: "JANUARY 26, 2021",
    Author: "SRINIKETHCR7",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. What is Data Science (DS)? Data Science is a blend …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/kaggle-grandmaster-series-exclusive-interview-with-kaggle-competitions-grandmaster-philip-margolis-rank-47/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Kaggle Competitions Grandmaster Philip Margolis (#Rank 47)",
    Date: "JANUARY 25, 2021",
    Author: "ABHIRAJ SURESH",
    Description:
      "ArticleVideo Book “I just followed my interests and focussed on learning machine learning as much as I could”- Philip Margolis Age is just a …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/heres-what-you-need-to-know-to-become-a-data-scientist/",
    Article_Title: "Here’s What You Need to Know to Become a Data Scientist!",
    Date: "JANUARY 22, 2021",
    Author: "RAM DEWANI",
    Description:
      "ArticleVideo Book Overview Being a data scientist has become a prestigious career path in 2021 Understand the whole ball of wax around being a …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/5-highly-recommended-skills-tools-to-learn-in-2021-for-being-a-data-analyst/",
    Article_Title:
      "5 Highly Recommended Skills / Tools to learn in 2021 for being a Data Analyst",
    Date: "JANUARY 22, 2021",
    Author: "PALAK11",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Here in this article, I share five highly recommended …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/kaggle-grandmaster-series-exclusive-interview-with-2x-kaggle-grandmaster-marios-michailidis/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with 2x Kaggle Grandmaster Marios Michailidis",
    Date: "JANUARY 21, 2021",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book “Start with the “knowledge” type of hackathons. There you do not compete for money (or other rewards). You can receive more help …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/kaggle-grandmaster-series-exclusive-interview-with-kaggle-competitions-grandmaster-peiyuan-liao-rank-28/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Kaggle Competitions Grandmaster Peiyuan Liao (Rank 28!)",
    Date: "JANUARY 19, 2021",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book Welcome back to the Kaggle Grandmaster Series! There is no age to learn and master something. The general perception that data scientists …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/quick-steps-to-learn-data-science-as-a-beginner/",
    Article_Title: "Quick Steps to Learn Data Science As a Beginner",
    Date: "JANUARY 18, 2021",
    Author: "ANANYACY",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Data Science and its applications first caught my attention in …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/kaggle-grandmaster-series-exclusive-interview-with-kaggle-competitions-grandmaster-peter-pesti-rank-23/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Kaggle Competitions Grandmaster Peter Pesti (Rank 23!)",
    Date: "JANUARY 15, 2021",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book “My transition from SWE to Data Science/AI is still not complete; I am working on it every day.” Being a Kaggle Grandmaster …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/kaggle-grandmaster-series-exclusive-interview-with-kaggle-notebooks-grandmaster-and-rank-30-theo-viel/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Kaggle Notebooks Grandmaster Theo Viel (Rank 30!)",
    Date: "JANUARY 13, 2021",
    Author: "GUEST BLOG",
    Description:
      "ArticleVideo Book “During a competition, the difference between a top 50% and a top 10% is mostly the time invested”- Theo Viel 2021 is …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/tips-to-become-a-data-scientist-in-this-pandemic/",
    Article_Title: "Tips to Become a Data Scientist in this Pandemic",
    Date: "JANUARY 13, 2021",
    Author: "PAVANKALYAN9065",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Simple steps to get you Hired! The main intention of …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/using-social-media-platforms-for-building-data-science-profile/",
    Article_Title:
      "Using social media platforms for building data science profile",
    Date: "JANUARY 13, 2021",
    Author: "ROHIT742",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction Everyone is familiar with the power that social media …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/kaggle-grandmaster-series-exclusive-interview-with-2x-kaggle-grandmaster-prashant-banerjee/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with 2x Kaggle Grandmaster Prashant Banerjee",
    Date: "JANUARY 7, 2021",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book “Data Science is full of opportunities and challenges and I want to explore those opportunities.” Mindset is one of the factors that …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/what-is-it-like-to-be-a-data-scientist-in-2021/",
    Article_Title: "What is it Like to Be a Data Scientist in 2021?",
    Date: "JANUARY 6, 2021",
    Author: "RAM DEWANI",
    Description:
      "ArticleVideo Book Overview The rise in demand for data scientist continues in 2021 too Understand what is it like to be a Data Scientist …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2021/01/9-tips-for-a-seamless-transition-to-data-science-for-absolute-noobs/",
    Article_Title:
      "9 Tips for a Seamless Transition to Data Science for Absolute Beginners!",
    Date: "JANUARY 4, 2021",
    Author: "ABHIRAJ SURESH",
    Description:
      "ArticleVideo Book Overview The data science industry is growing exponentially It is important to have a clear understanding of the very basic questions before …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/kaggle-grandmasters-series-exclusive-interview-with-competitions-grandmaster-and-rank-67-dmytro-danevskyi/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Competitions Grandmaster Dmytro Danevskyi",
    Date: "DECEMBER 30, 2020",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book “I’ve never felt that had I more degrees or no degree at all to mention in my resume, things would go dramatically …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/10-data-science-projects-for-beginners/",
    Article_Title:
      "10 Data Science Projects Every Beginner should add to their Portfolio",
    Date: "DECEMBER 29, 2020",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Overview The projects are a way to enhance and improve your knowledge in the data science domain. To boost your resume, here …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/top-ai-startups/",
    Article_Title:
      "Top 14 Artificial Intelligence Startups to watch out for in 2021!",
    Date: "DECEMBER 24, 2020",
    Author: "SHIPRA SAXENA",
    Description:
      "ArticleVideo Book Overview Reducing company costs, generating customer insights & intelligence, and improving customer experiences are the three most popular ML and AI use …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/top-data-science-articles-of-2020/",
    Article_Title:
      "10 Most Popular Data Science Articles on Analytics Vidhya in 2020",
    Date: "DECEMBER 23, 2020",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book Overview Here is a list of the top 10 articles published this year by Analytics Vidhya The articles have been ranked in …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/a-super-useful-month-by-month-plan-to-master-data-science-in-2021/",
    Article_Title:
      "A Super Useful Month-by-Month Plan to Master Data Science in 2021",
    Date: "DECEMBER 22, 2020",
    Author: "RAM DEWANI",
    Description:
      "ArticleVideo Book Overview Your quest to understand how to become a data scientist in 2021 ends here Here’s a month on month plan that …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/a-quick-guide-to-data-science-and-machine-learning/",
    Article_Title: "A Quick Guide to Data science and Machine Learning",
    Date: "DECEMBER 21, 2020",
    Author: "MOHAMMED_NABEEL",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Introduction In today’s time, an enormous amount of data is …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/a-comprehensive-learning-path-to-become-a-data-scientist-in-2021/",
    Article_Title:
      "A Comprehensive Learning Path to Become a Data Scientist in 2021!",
    Date: "DECEMBER 17, 2020",
    Author: "RAM DEWANI",
    Description:
      "ArticleVideo Book Are you Ready to Become a Data Scientist in 2021? A new year beckons! New resolutions to become a data scientist have …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/top-10-data-science-webinars-recordings-of-2020/",
    Article_Title: "Top 10 Data Science Webinars of 2020!",
    Date: "DECEMBER 14, 2020",
    Author: "RAM DEWANI",
    Description:
      "ArticleVideo Book Overview Here is a list of Top 10 Data Science Webinars Organized by Analytics Vidhya in 2020 These Data Science Webinars are …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/top-15-free-data-science-courses-to-kick-start-your-data-science-journey/",
    Article_Title:
      "Top 15 Free Data Science Courses to Kick Start your Data Science Journey!",
    Date: "DECEMBER 10, 2020",
    Author: "HARSHIT AHLUWALIA",
    Description:
      "ArticleVideo Book Overview Here is a list of 15 Free Data Science Courses to get you going initially These are well-curated courses. Please probe …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/kaggle-grandmaster-series-exclusive-interview-with-competitions-grandmaster-and-rank-21-agnis-liukis/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Competitions Grandmaster and Rank #21 Agnis Liukis",
    Date: "DECEMBER 9, 2020",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book “When it comes to implementing some algorithm, my programming skills help a lot in that. I would say that Python is a …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/kaggle-grandmaster-series-notebooks-grandmaster-and-rank-2-dan-beckers-data-science-journey/",
    Article_Title:
      "Kaggle Grandmaster Series – Notebooks Grandmaster and Rank #2 Dan Becker’s Data Science Journey!",
    Date: "DECEMBER 8, 2020",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book ” If I were explicitly trying to be in the top 1%, I might have given up before I got there. It’s …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/10-resources-to-successfully-navigate-a-career-in-data-science/",
    Article_Title:
      "10 Resources to Successfully navigate a career in Data Science!",
    Date: "DECEMBER 7, 2020",
    Author: "RAM DEWANI",
    Description:
      "ArticleVideo Book Overview Here are 10 Data Science resources that answer the majority of career-related questions beginners have By no means is this list …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/a-quick-guide-to-become-a-data-analyst/",
    Article_Title: "A Quick Guide to Become a Data Analyst",
    Date: "DECEMBER 7, 2020",
    Author: "KRRAI77@GMAIL.COM",
    Description:
      "ArticleVideo Book This article was published as a part of the Data Science Blogathon. Explore the simple path to become a great visual data …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/exclusive-interview-with-andrey-lukyanenko/",
    Article_Title:
      "Kaggle Grandmaster Series – Exclusive Interview with Andrey Lukyanenko (Notebooks and Discussions Grandmaster)",
    Date: "DECEMBER 5, 2020",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book Introduction “In case you are only starting your journey, I suggest to read some great notebooks to understand what is interesting to …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.analyticsvidhya.com/blog/2020/12/kaggle-grandmaster-series-notebooks-grandmaster-and-rank-12-martin-henzes-mind-blowing-journey/",
    Article_Title:
      "Kaggle Grandmaster Series – Notebooks Grandmaster and Rank #12 Martin Henze’s Mind Blowing Journey!",
    Date: "DECEMBER 4, 2020",
    Author: "ANALYTICS VIDHYA",
    Description:
      "ArticleVideo Book Welcome back to the Kaggle Grandmaster Series! “Bad examples can often be just as educational as good ones”- Martin Henze In data …",
    Topic: "Carrer-in-DataScience",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/04/easing-functions-css-animations-transitions/",
    Article_Title:
      "Understanding Easing Functions For CSS Animations And Transitions",
    Date: "april 27, 2021",
    Author: "Adrian Bece",
    Description:
      "Easing functions can change the look and feel of an animation by affecting the rate, or speed, of an animation. In this article, we’re going to take a deep dive into easing functions and see how we can use them to create those natural and stunning animations.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/04/guide-supported-modern-css-pseudo-class-selectors/",
    Article_Title:
      "A Guide To Newly Supported, Modern CSS Pseudo-Class Selectors",
    Date: "april 23, 2021",
    Author: "Stephanie Eckles",
    Description:
      "The CSS Working Group Editor’s Draft for Selectors Level 4 includes several pseudo-class selectors that already have proposal candidates in most modern browsers. This guide will cover ones that currently have the best support along with examples to demonstrate how you can start using them today!",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/04/web-design-done-well-part1/",
    Article_Title:
      "Web Design Done Well: The Ordinary Made Extraordinary (Part 1)",
    Date: "april 22, 2021",
    Author: "Frederick O’Brien",
    Description:
      "Sometimes it’s the little things in web life that make us look twice. From carousels to documentation to cookie disclaimers, here are some sites taking the mundane and sprinkling in a little magic.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/04/css-overflow-issues/",
    Article_Title: "Overflow Issues In CSS",
    Date: "april 14, 2021",
    Author: "Ahmad Shadeed",
    Description:
      "In this article, we will explore the causes of overflow issues and how to solve them. We will also explore how modern features in the developer tools (DevTools) can make the process of fixing and debugging easier.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/",
    Article_Title:
      "Meet Utopia: Designing And Building With Fluid Type And Space Scales",
    Date: "april 1, 2021",
    Author: "James Gilyead & Trys Mudford",
    Description:
      "By systemizing the fundamentals of typography and space, and leaning into the inherent fluidity of the web, a free new CSS tool called Utopia offers an alternative to breakpoint-driven design.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/",
    Article_Title: "A Complete Guide To Accessible Front-End Components",
    Date: "march 22, 2021",
    Author: "Vitaly Friedman",
    Description:
      "Reliable accessible front-end components: :focus styles, content sliders, dark mode, data charts, date pickers, form styles, navigation menu, modals, radio buttons, “skip” links, SVGs, tabs, tables, toggles and tooltips.",
    Topic: "CSS",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2021/03/css-generators/",
    Article_Title: "CSS Generators",
    Date: "march 15, 2021",
    Author: "Iris Lješnjanin",
    Description:
      "In a new short series of posts, we highlight some of the useful tools and techniques for developers and designers. This time it’s all about CSS Generators: from CSS shadows to easing gradients to CSS overlays to CSS doodles.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/03/css-auditing-tools/",
    Article_Title: "CSS Auditing Tools",
    Date: "march 11, 2021",
    Author: "Iris Lješnjanin",
    Description:
      "In a new short series of posts, we highlight some of the useful tools and techniques for developers and designers to get their work done better and faster. Starting out with a few tools for getting to the bottom of CSS.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/02/responsive-image-effects-css-gradients-aspect-ratio/",
    Article_Title:
      "Create Responsive Image Effects With CSS Gradients And aspect-ratio",
    Date: "february 23, 2021",
    Author: "Stephanie Eckles",
    Description:
      "A classic problem in CSS is maintaining the aspect ratio of images across related components, such as cards. The newly supported aspect-ratio property in combination with object-fit provides a remedy to this headache of the past! Let’s learn to use these properties, in addition to creating a responsive gradient image effect for extra flair.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/02/css-z-index-large-projects/",
    Article_Title: "Managing CSS Z-Index In Large Projects",
    Date: "february 8, 2021",
    Author: "Steven Frieson",
    Description:
      "Wrangling z-index values is a difficult task for many developers. Here is an easy-to-implement mini-framework based on existing conventions that brings clarity and confidence to working with z-index.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/02/things-you-can-do-with-css-today/",
    Article_Title: "Things You Can Do With CSS Today",
    Date: "february 1, 2021",
    Author: "Andy Bell",
    Description:
      "The present and future of CSS are very bright indeed and if you take a pragmatic, progressive approach to your CSS, then things will continue to get better and better on your projects, too.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/",
    Article_Title: "Front-End Performance Checklist 2021",
    Date: "january 12, 2021",
    Author: "Vitaly Friedman",
    Description:
      "Let’s make 2021… fast! An annual front-end performance checklist (available as PDF, Apple Pages, MS Word), with everything you need to know to create fast experiences on the web today, from metrics to tooling and CSS/JavaScript techniques.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/playfulness-code-supercharge-fun-learning/",
    Article_Title:
      "Playfulness In Code: Supercharge Your Learning By Having Fun",
    Date: "november 25, 2020",
    Author: "Jhey Tompkins",
    Description:
      "In the product-focused world of development, it can be easy to forget the joy of making for the sake of making. By dropping the ‘Why’ and ‘How’, and focusing instead on the ‘What’ of weird, wonderful ideas, you can nurture a totally different side to your skill sets.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/native-css-masonry-layout-css-grid/",
    Article_Title: "Native CSS Masonry Layout In CSS Grid",
    Date: "november 2, 2020",
    Author: "Rachel Andrew",
    Description:
      "There is now a specification for native CSS masonry layout, as part of the Grid Layout spec. In this article, Rachel Andrew explains how it works with the help of a couple of demos you can try out in Firefox Nightly.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/face-motion-typography/",
    Article_Title: "How To Use Face Motion To Interact With Typography",
    Date: "october 2, 2020",
    Author: "Edoardo Cavazza",
    Description:
      "In this article, we will cover how to combine Machine Learning, variable fonts, and CSS grids to create layouts that respond to the proximity, the inclination, and the number of the users’ faces.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/css-grid-framework-shopify-collection-pages/",
    Article_Title: "A CSS Grid Framework For Shopify Collection Pages",
    Date: "september 22, 2020",
    Author: "Liam Griffin",
    Description:
      "In this article, we’ll be looking at how to set up a grid layout for products on your collection pages, and how to use Shopify’s section settings to create customizable options in the online store editor.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/inspired-design-decisions-bradbury-thompson/",
    Article_Title:
      "Inspired Design Decisions With Bradbury Thompson: The Art Of Graphic Design",
    Date: "august 18, 2020",
    Author: "Andrew Clarke",
    Description:
      "In this final article of the “Inspired Design Decisions” series, Andy explains how studying the work of Bradbury Thompson can teach you a number of things to help you create stunning designs for the web.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/application-color-schemes-css-custom-properties/",
    Article_Title:
      "How To Configure Application Color Schemes With CSS Custom Properties",
    Date: "august 11, 2020",
    Author: "Artur Basak",
    Description:
      "In this article, Artur Basak introduces a modern approach on how to set up CSS Custom Properties that respond to the application colors. The idea of dividing colors into three levels can be quite useful: a palette (or scheme), functional colors (or theme), and component colors (local scope).",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/inspired-design-decisions-emmett-mcbain/",
    Article_Title:
      "Inspired Design Decisions With Emmett McBain: Art Direction As Social Equity",
    Date: "july 28, 2020",
    Author: "Andrew Clarke",
    Description:
      "Emmett McBain was a Black American graphic designer whose work had a remarkable impact on the representation of Black Americans in advertising. In this part of Andy’s series, he’ll explain how his work can inspire what we design for the web.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/styled-components-react/",
    Article_Title: "How To Use Styled-Components In React",
    Date: "july 23, 2020",
    Author: "Adebiyi Adedotun",
    Description:
      "While the component-driven approach has ushered in a new frontier in the way we build web applications, it isn’t without its imperfections",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/css-techniques-legibility/",
    Article_Title: "Modern CSS Techniques To Improve Legibility",
    Date: "july 22, 2020",
    Author: "Edoardo Cavazza",
    Description:
      "In this article, we cover how we can improve websites legibility using some modern CSS techniques, great new technologies like variable fonts and putting into practise what we learned from doing scientific researches.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/design-wireframes-accessible-html-css/",
    Article_Title: "Translating Design Wireframes Into Accessible HTML/CSS",
    Date: "july 21, 2020",
    Author: "Harris Schneiderman",
    Description:
      "In this article, Harris Schneiderman walks you through the process of analyzing a wireframe and making coding decisions to optimize for accessibility.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/css-transitions-vuejs-nuxtjs/",
    Article_Title: "CSS Transitions In Vuejs And Nuxtjs",
    Date: "july 10, 2020",
    Author: "Timi Omoyeni",
    Description:
      "Transitions are a nice way to remove, change, or update data in an application because their occurrence adds a nice effect and is good for the user experience. In this tutorial, we’ll look at the different ways to apply transitions in both Vue.js and Nuxt.js applications.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/css-news-july-2020/",
    Article_Title: "CSS News July 2020",
    Date: "july 7, 2020",
    Author: "Rachel Andrew",
    Description:
      "In this article, Rachel Andrew takes a look at some of the interesting CSS features that are making their way into browsers right now.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/smashing-podcast-episode-19/",
    Article_Title:
      "Smashing Podcast Episode 19 With Andy Bell: What Is CUBE CSS?",
    Date: "june 30, 2020",
    Author: "Drew McLellan",
    Description:
      "We’re talking about CUBE CSS. What is it, and how does it differ from approaches such as BEM, SMACSS, and OOCSS? Drew McLellan talks to its creator, Andy Bell, to find out.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/inspired-design-decisions-giovanni-pintori/",
    Article_Title:
      "Inspired Design Decisions With Giovanni Pintori: Publicity Becomes An Art Form",
    Date: "june 26, 2020",
    Author: "Andrew Clarke",
    Description:
      "In the tenth issue of Inspired Design Decisions, Andy Clarke will explain how Giovanni Pintori can inspire design for the web with his distinctive use of color and shape.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/",
    Article_Title: "Building Reusable React Components Using Tailwind",
    Date: "may 25, 2020",
    Author: "Tilo Mitra",
    Description:
      "Tailwind is a popular utility-first CSS framework that provides low-level class names to web developers. In this article, we’ll explore ways to build reusable React components using Tailwind.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/inspired-design-decisions-max-huber/",
    Article_Title:
      "Inspired Design Decisions With Max Huber: Turning Mundane Subjects Into Exciting Visual Communication",
    Date: "may 22, 2020",
    Author: "Andrew Clarke",
    Description:
      "In this ninth issue of Inspired Design Decisions, Andy Clarke will explain how studying the work of Max Huber",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/micro-typography-space-kern-punctuation-marks-symbols/",
    Article_Title:
      "Micro-Typography: How To Space And Kern Punctuation Marks And Other Symbols",
    Date: "may 12, 2020",
    Author: "Thomas Bohm",
    Description:
      "For hundreds of years, we have been using white space in typography. Today, in 2020, how do we add spacing to punctuation marks and other symbols, and how do we adjust the space on the left and right side in an easy and consistent way? It is actually not as easy and quick as it should be.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/04/smashing-podcast-episode-14/",
    Article_Title:
      "Smashing Podcast Episode 14 With Rachel Andrew: How Can I Run Online Workshops?",
    Date: "april 21, 2020",
    Author: "Drew McLellan",
    Description:
      "In this episode of the Smashing Podcast, we’re talking about running online workshops. How can a traditional event adapt when participants can’t attend in person? Drew McLellan talks to Rachel Andrew to find out.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/04/inspired-design-decisions-herb-lubalin/",
    Article_Title:
      "Inspired Design Decisions With Herb Lubalin: Typography Can Be As Exciting As Illustration And Photography",
    Date: "april 13, 2020",
    Author: "Andrew Clarke",
    Description:
      "In this eighth issue of Inspired Design Decisions, Andy Clarke will explain how learning about American graphic designer and typographer Herb Lubalin has transformed his approach to typography on the web.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/03/inspired-design-decisions-otto-storch/",
    Article_Title:
      "Inspired Design Decisions With Otto Storch: When Idea, Copy, Art And Typography Became Inseparable",
    Date: "march 23, 2020",
    Author: "Andrew Clarke",
    Description:
      "In this seventh instalment of Inspired Design Decisions, Andy Clarke will explore how American art director and graphic designer Otto Storch inspires his designs for the web.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/",
    Article_Title: "A Practical Overview Of CSS Houdini",
    Date: "march 19, 2020",
    Author: "Adrian Bece",
    Description:
      "In this article, we take a look at each part of Houdini, its current browser support, and see how they can be used today using progressive enhancement.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/03/css4-pros-cons-discussion/",
    Article_Title: "Why Are We Talking About CSS4?",
    Date: "march 4, 2020",
    Author: "Rachel Andrew",
    Description:
      "Around the web and within the CSS Working Group, there has been some discussion about whether we should specify a version of CSS",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/03/inspired-design-decisions-neville-brody/",
    Article_Title:
      "Inspired Design Decisions With Neville Brody: Design Cannot Remain Neutral",
    Date: "march 2, 2020",
    Author: "Andrew Clarke",
    Description:
      "How do we use blend modes to add depth to our designs, vertical text for impact and clipping paths to bring in character and energy to a design? In this article, we’ll explore just that.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/",
    Article_Title: "Setting Up Tailwind CSS In A React Project",
    Date: "february 24, 2020",
    Author: "Blessing Krofegha",
    Description:
      "This article introduces Tailwind CSS, a CSS library that gives you all of the building blocks you need to build bespoke designs without opinionated styles. You’ll also learn how to seamlessly set up Tailwind CSS in a React project.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/02/understanding-css-grid-template-areas/",
    Article_Title: "Understanding CSS Grid: Grid Template Areas",
    Date: "february 12, 2020",
    Author: "Rachel Andrew",
    Description:
      "In a new series, Rachel Andrew breaks down the CSS Grid Layout specification. This time, we take a look at how to use grid-template-areas to place items.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/02/magic-flip-cards-common-sizing-problem/",
    Article_Title: "Magic Flip Cards: Solving A Common Sizing Problem",
    Date: "february 5, 2020",
    Author: "Dan Halliday",
    Description:
      "In this article, Dan Halliday reviews the standard approach to creating animated flip cards, and introduces an improved method which solves its sizing problem.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/01/understanding-css-grid-lines/",
    Article_Title: "Understanding CSS Grid: Grid Lines",
    Date: "january 10, 2020",
    Author: "Rachel Andrew",
    Description:
      "In a new series, Rachel Andrew breaks down the CSS Grid Layout specification. This time, we take a look at how to use the grid lines to place items.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/01/html5-article-section/",
    Article_Title: "Why You Should Choose HTML5 article Over section",
    Date: "january 7, 2020",
    Author: "Bruce Lawson",
    Description:
      "In this article, Bruce Lawson explains what use we have of <section> and how authors should mark up headings that are hugely important to AT users.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/01/front-end-performance-checklist-2020-pdf-pages/",
    Article_Title:
      "Front-End Performance Checklist 2020 [PDF, Apple Pages, MS Word]",
    Date: "january 6, 2020",
    Author: "Vitaly Friedman",
    Description:
      "Let’s make 2020… fast! A front-end performance checklist (PDF/Apple Pages/MS Word), with everything you need to know to create fast experiences on the web today.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/01/understanding-css-grid-container/",
    Article_Title: "Understanding CSS Grid: Creating A Grid Container",
    Date: "january 3, 2020",
    Author: "Rachel Andrew",
    Description:
      "In a new series, Rachel Andrew breaks down the CSS Grid Layout specification. This time, we take a detailed look at what happens when you create a grid container and the various properties that can be applied to the container to shape your grid.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/12/browsers-containment-css-contain-property/",
    Article_Title: "Helping Browsers Optimize With The CSS Contain Property",
    Date: "december 27, 2019",
    Author: "Rachel Andrew",
    Description:
      "The CSS contain property gives you a way to explain your layout to the browser, so performance optimizations can be made. However, it does come with some side effects in terms of your layout.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/12/building-a-css-layout-live-stream-rachel-andrew/",
    Article_Title: "Building A CSS Layout: Live Stream With Rachel Andrew",
    Date: "december 10, 2019",
    Author: "Vitaly Friedman",
    Description:
      "Today, Rachel Andrew spoke about how to build a CSS layout. Follow along and learn how to use Grid and Flexbox, as well as why Rachel makes certain decisions as she builds out the layout.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/11/expanding-contracting-content-panels/",
    Article_Title: "Make Your Own Expanding And Contracting Content Panels",
    Date: "november 19, 2019",
    Author: "Ben Frain",
    Description:
      "In UI/UX, a common pattern that’s needed time and again is that of a simple animated opening and closing panel, or ‘drawer’. You don’t need a library to make these. With some basic HTML/CSS and JavaScript, we’re going to learn how to do it ourselves.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/11/css-things-cant-yet-do/",
    Article_Title: "Things We Can’t (Yet) Do In CSS",
    Date: "november 1, 2019",
    Author: "Rachel Andrew",
    Description:
      "In this article, Rachel Andrew looks at some common layout patterns that we can’t yet do on the web and the CSS Specifications that might let us achieve them in the future.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/10/guide-new-experimental-css-devtools-firefox/",
    Article_Title: "A Guide To New And Experimental CSS DevTools In Firefox",
    Date: "october 10, 2019",
    Author: "Victoria Wang",
    Description:
      "Ever since releasing Grid Inspector, the Firefox DevTools team has been inspired to build a new suite of tools to solve the problems of the modern web. In this article, we’ll learn about all 7 tools and take a peek at potential future projects.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/10/editorial-design-patterns-css-grid-subgrid-naming/",
    Article_Title: "Editorial Design Patterns With CSS Grid And Named Columns",
    Date: "october 4, 2019",
    Author: "Rachel Andrew",
    Description:
      "By naming lines when setting up our CSS Grid layouts, we can tap into some interesting and useful features of Grid",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/10/inspired-design-decisions-bea-feitler/",
    Article_Title:
      "Inspired Design Decisions With Bea Feitler: An Unstoppable Creative Force",
    Date: "october 3, 2019",
    Author: "Andrew Clarke",
    Description:
      "In this fifth installment of Inspired Design Decisions, Andy Clarke will teach you about Bea Feitler, who directed Harper’s Bazaar throughout the 1960s and has been described as “the pioneering female art director you’ve never heard of.” Andy will teach you about Feitler’s confident work and show you how to apply some of her design techniques to the work you make for the web. In this article, you’ll learn how to emphasize scale and maintain its contrast on even the smallest screens. Andy will teach you how to make confident color choices, and how to use pattern and texture to add depth to your designs.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/09/inspired-design-decisions-alexey-brodovitch/",
    Article_Title: "Inspired Design Decisions With Alexey Brodovitch",
    Date: "september 5, 2019",
    Author: "Andrew Clarke",
    Description:
      "In this fourth instalment of Inspired Design Decisions, Andy Clarke will teach you how scattering images will fill your designs with movement. Learn how to mirror pictures and text, and how to carve text into shapes using CSS Shapes.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/",
    Article_Title: "Overflow And Data Loss In CSS",
    Date: "september 4, 2019",
    Author: "Rachel Andrew",
    Description:
      "In this article, Rachel Andrew explores the situations in which you might encounter overflow in your web designs and explains how CSS has evolved to create better ways to manage and design around unknown amounts of content.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/08/handling-unused-css-sass-performance/",
    Article_Title: "Handling Unused CSS In Sass To Improve Performance",
    Date: "august 9, 2019",
    Author: "Luke Harrison",
    Description:
      "Do you know the impact unused CSS has on performance? Spoiler: It’s a lot! In this article, we’ll explore a Sass-oriented solution for dealing with unused CSS, avoiding the need for complicated Node.js dependencies involving headless browsers, and DOM emulation.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/08/inspired-design-decisions-ernest-journal/",
    Article_Title: "Inspired Design Decisions: Ernest Journal",
    Date: "august 8, 2019",
    Author: "Andrew Clarke",
    Description:
      "In this third instalment of Inspired Design Decisions, Andy Clarke will teach you how to use frameworks to create layouts as engaging as in the well-known Ernest Journal. All it takes is an understanding of layout design and imagination.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/08/writing-modes-layout/",
    Article_Title: "Writing Modes And CSS Layout",
    Date: "august 6, 2019",
    Author: "Rachel Andrew",
    Description:
      "An understanding of CSS Writing Modes is useful if you want to work with vertical scripts, or change writing mode for creative reasons. However, they also underpin our new layout methods, and those ideas are increasingly being applied across all of CSS. In this article, find out why Rachel Andrew believes understanding writing modes is so important.",
    Topic: "CSS",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2019/07/margins-in-css/",
    Article_Title: "Everything You Need To Know About CSS Margins",
    Date: "july 15, 2019",
    Author: "Rachel Andrew",
    Description:
      "Margins in CSS seem simple enough at first glance. Applied to an element it forms a space around the element, pushing other elements away. However, there is more to a margin than you might think.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/07/inspired-design-decisions-pressing-matters/",
    Article_Title: "Inspired Design Decisions: Pressing Matters",
    Date: "july 11, 2019",
    Author: "Andrew Clarke",
    Description:
      "In this second installment of Inspired Design Decisions, Andy Clarke will teach you how to expand your repertoire of layouts by combining more than one grid into a compound grid. This article will change the way you think about designing with grids.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/07/css-lists-markers-counters/",
    Article_Title: "CSS Lists, Markers, And Counters",
    Date: "july 9, 2019",
    Author: "Rachel Andrew",
    Description:
      "There is more to styling lists in CSS than you might think. In this article, Rachel starts by looking at lists in CSS, and moving onto some interesting features defined in the CSS Lists specification",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/07/build-sketch-plugin-javascript-html-css-part-2/",
    Article_Title:
      "How To Build A Sketch Plugin With JavaScript, HTML And CSS (Part 2)",
    Date: "july 8, 2019",
    Author: "Matt Curtis",
    Description:
      "In this second part of our tutorial on building Sketch plugins, we’ll pick up where we left off with the building of our user interface, and then we’ll move on to the key feature of actually generating our layer mosaics and optimizing the final plugin code.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/07/build-sketch-plugin-javascript-html-css-part-1/",
    Article_Title:
      "How To Build A Sketch Plugin With JavaScript, HTML And CSS (Part 1)",
    Date: "july 5, 2019",
    Author: "Matt Curtis",
    Description:
      "In this two-part article, you’ll learn how to build your our own Sketch plugins from scratch",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/07/css-custom-properties-cascade/",
    Article_Title: "CSS Custom Properties In The Cascade",
    Date: "july 1, 2019",
    Author: "Miriam Suzanne",
    Description:
      "In this article, Miriam takes a deeper dive into the ‘CSS Custom Properties for Cascading Variables’ specification to ask, “Why are they called custom properties, how do they work in the cascade, and what else can we do with them?”",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/06/create-pdf-web-application/",
    Article_Title: "How To Create A PDF From Your Web Application",
    Date: "june 19, 2019",
    Author: "Rachel Andrew",
    Description:
      "There is a wide variety of choices when it comes to creating a PDF from a web application. In this article, Rachel Andrew takes a look at the tools that are available and shares her recommendations to help you find the tool that works best for you.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/06/unleash-power-path-animations-svgator/",
    Article_Title: "Unleash The Power Of Path Animations With SVGator",
    Date: "june 18, 2019",
    Author: "Mikołaj Dobrucki",
    Description:
      "Creating complex SVG animations can be a challenging and tedious task",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/06/inspired-design-decisions-avaunt-magazine/",
    Article_Title: "Inspired Design Decisions: Avaunt Magazine",
    Date: "june 13, 2019",
    Author: "Andrew Clarke",
    Description:
      "This is the first edition of Inspired Design Decisions in which Andy Clarke explains how to design and implement skinny columns using meaningful markup and efficient CSS.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/06/styling-modern-web-apps/",
    Article_Title: "Styling In Modern Web Apps",
    Date: "june 10, 2019",
    Author: "Ajay NS",
    Description:
      "In this article, we welcome you to take a detailed dive into the different ways of organizing styling in modern applications which often have complex interfaces and design patterns.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/05/display-grid-subgrid/",
    Article_Title: "Digging Into The Display Property: Grids All The Way Down",
    Date: "may 24, 2019",
    Author: "Rachel Andrew",
    Description:
      "Continuing a series on the display property in CSS, this time Rachel Andrew takes a look at what happens when you use grid as a value of display, with added information about how subgrid changes that behavior.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/05/display-box-generation/",
    Article_Title: "Digging Into The Display Property: Box Generation",
    Date: "may 1, 2019",
    Author: "Rachel Andrew",
    Description:
      "Continuing a series on the display property in CSS, this time Rachel Andrew takes a look at the values which control box generation, for those times when you don’t want to generate a box at all.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/04/art-direction-for-the-web-using-css-shapes/",
    Article_Title: "Art Direction For The Web Using CSS Shapes",
    Date: "april 11, 2019",
    Author: "Andrew Clarke",
    Description:
      "Last year, Rachel Andrew wrote “Take A New Look At CSS Shapes” where she reintroduced readers to the basics of using CSS Shapes. In this new tutorial, Andy Clarke expands on the topic of “Art Direction for the Web” with CSS Shapes to create exciting and inspired new design ideas.",
    Topic: "CSS",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2019/04/display-two-value/",
    Article_Title:
      "Digging Into The Display Property: The Two Values Of Display",
    Date: "april 8, 2019",
    Author: "Rachel Andrew",
    Description:
      "We talk a lot about Flexbox and CSS Grid Layout, but these layout methods are essentially values of the CSS display property, a workhorse of a property that doesn’t get a lot of attention. Rachel Andrew takes a better look in a short series.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/04/z-index-component-based-web-application/",
    Article_Title: "Managing Z-Index In A Component-Based Web Application",
    Date: "april 3, 2019",
    Author: "Pavel Pomerantsev",
    Description:
      "The z-index property, despite all that’s written about it, is still widely misunderstood and mishandled. Stacking issues in a complex single-page web application can become a major pain. Adhering to some principles, however, we can easily avoid these issues.",
    Topic: "CSS",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2019/03/css-alignment/",
    Article_Title: "How To Align Things In CSS",
    Date: "march 28, 2019",
    Author: "Rachel Andrew",
    Description:
      "There are a few ways to align elements in CSS. In this article, Rachel Andrew explains what they are with some tips to help you remember which to use and why.",
    Topic: "CSS",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/",
    Article_Title:
      "A Complete Guide To Incremental Static Regeneration (ISR) With Next.js",
    Date: "april 21, 2021",
    Author: "Lee Robinson",
    Description:
      "Incremental Static Regeneration (ISR) is a new evolution of the Jamstack, allowing you to update static content instantly without needing a full rebuild of your site. The hybrid approach of Next.js allows you to use ISR for e-commerce, marketing pages, blog posts, ad-backed media, and more.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/04/building-video-streaming-app-nuxtjs-node-express/",
    Article_Title:
      "Building A Video Streaming App With Nuxt.js, Node And Express",
    Date: "april 13, 2021",
    Author: "Deven Rathore",
    Description:
      "In this article, we’ll be building a video streaming app using Nuxt.js and Node.js. Specifically, we’ll build a server-side Node.js app that will handle fetching and streaming videos, generating thumbnails for your videos, and serving captions and subtitles.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/04/flaky-tests-living-nightmare/",
    Article_Title: "Flaky Tests: Getting Rid Of A Living Nightmare In Testing",
    Date: "april 7, 2021",
    Author: "Ramona Schwering",
    Description:
      "Unreliable tests are a living nightmare for anyone who writes automated tests or pays attention to the results. Flaky tests have even given folks nightmares and sleepless nights. In this article, Ramona Schwering shares her experiences to help you get out of this hell or avoid getting into it.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/04/vanilla-javascript-code-snippets/",
    Article_Title: "Vanilla JavaScript Code Snippets",
    Date: "april 5, 2021",
    Author: "Vitaly Friedman",
    Description: "A guide to vanilla JavaScript code snippets",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2021/03/reactivity-in-vue/",
    Article_Title: "Reactivity In Vue",
    Date: "march 25, 2021",
    Author: "Timi Omoyeni",
    Description:
      "Reactivity is the ability for a variable (array, string, number, object, etc) to update when its value or any other variable that it makes reference to is changed after declaration.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/",
    Article_Title: "A Complete Guide To Accessible Front-End Components",
    Date: "march 22, 2021",
    Author: "Vitaly Friedman",
    Description:
      "Reliable accessible front-end components: :focus styles, content sliders, dark mode, data charts, date pickers, form styles, navigation menu, modals, radio buttons, “skip” links, SVGs, tabs, tables, toggles and tooltips.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/03/ethical-scraping-dynamic-websites-nodejs-puppeteer/",
    Article_Title:
      "The Guide To Ethical Scraping Of Dynamic Websites With Node.js And Puppeteer",
    Date: "march 11, 2021",
    Author: "Andreas Altheimer",
    Description:
      "For a lot of web scraping tasks, an HTTP client is enough to extract a page’s data. However, when it comes to dynamic websites, a headless browser sometimes becomes indispensable. In this tutorial, we will build a web scraper that can scrape dynamic websites based on Node.js and Puppeteer.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/03/outside-focus-click-handler-react-component/",
    Article_Title:
      "Creating An Outside Focus And Click Handler React Component",
    Date: "march 3, 2021",
    Author: "Arihant Verma",
    Description:
      "In this article, we’ll look at how to create an outside focus and click handler with React. We will recreate an open source react component react-foco from scratch in doing so.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/02/building-discord-bot-discordjs/",
    Article_Title: "Building A Discord Bot Using Discord.js",
    Date: "february 25, 2021",
    Author: "Subha Chanda",
    Description:
      "An introduction to building a Discord bot using the Discord.js module. The bot will share random jokes, assign or revoke user roles, and post tweets of a specific account to a Discord channel.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/02/web-app-react-redux-sanity-io/",
    Article_Title: "Building A Web App With React, Redux And Sanity.io",
    Date: "february 11, 2021",
    Author: "Ifeanyi Dike",
    Description:
      "Headless CMS is a powerful and easy way to manage content and access API. Built on React, Sanity.io is a seamless tool for flexible content management. It can be used to build simple to complex applications from the ground up. In this article, Ifeanyi explains how to build a simple listing app with Sanity.io and React. The global states will be managed with Redux and the application will be styled with styled-components.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/dynamic-static-typing-typescript/",
    Article_Title: "Dynamic Static Typing In TypeScript",
    Date: "january 29, 2021",
    Author: "Stefan Baumgartner",
    Description:
      "In this article, we look at some of the more advanced features of TypeScript, like union types, conditional types, template literal types, and generics. We want to formalize the most dynamic JavaScript behavior in a way that we can catch most bugs before they happen.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/nodejs-api-ethereum-blockchain/",
    Article_Title: "How To Build A Node.js API For Ethereum Blockchain",
    Date: "january 19, 2021",
    Author: "John Agbanusi",
    Description:
      "In this article, John Agbanusi explains how you can build a Node.js API from scratch by building and deploying an Ethereum Blockchain for decentralization. He also shows you a step-by-step process of integrating both the API and blockchain into a single API called a “decentralized application API”.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/grommet-react-applications/",
    Article_Title: "Using Grommet In React Applications",
    Date: "january 18, 2021",
    Author: "Fortune Ikechi",
    Description:
      "In this tutorial, we’re going to learn how to use Grommet as a UI library for React applications. We’ll use Grommet as a UI library of choice to create a pricing component, this would help us have a better understanding of how to use Grommet.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/dialogflow-agent-react-application/",
    Article_Title: "Integrating A Dialogflow Agent Into A React Application",
    Date: "january 14, 2021",
    Author: "Nwani Victory",
    Description:
      "When it comes to building a conversational chat assistant that could be used at a small or enterprise level, Dialogflow would most likely be one of the first options that would show up in your search list. But apart from its console that is provided to design and manage an Agent, how can we create a chat assistant that can be used within our built web applications, too?",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/",
    Article_Title: "Front-End Performance Checklist 2021",
    Date: "january 12, 2021",
    Author: "Vitaly Friedman",
    Description:
      "Let’s make 2021… fast! An annual front-end performance checklist (available as PDF, Apple Pages, MS Word), with everything you need to know to create fast experiences on the web today, from metrics to tooling and CSS/JavaScript techniques.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/getx-package-flutter-applications/",
    Article_Title:
      "Getting Started With The GetX Package In Flutter Applications",
    Date: "january 8, 2021",
    Author: "Kelvin Omereshone",
    Description:
      "GetX is an extra lightweight solution for state, navigation, and dependencies management for Flutter applications. In this article, we will be looking at its benefits, features, and how to start using it in Flutter applications.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/12/practical-introduction-dependency-injection/",
    Article_Title: "A Practical Introduction To Dependency Injection",
    Date: "december 30, 2020",
    Author: "Jamie Corkhill",
    Description:
      "This article is the first part of an upcoming series that provides a practical introduction to Dependency Injection in a manner that immediately permits you to realize its many benefits without being hampered down by theory.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2020/12/vuex-library/",
    Article_Title: "What’s Coming To VueX?",
    Date: "december 24, 2020",
    Author: "Joseph Zimmerman",
    Description:
      "Vuex is the go-to state management library for Vue applications, and the Vue core team has some big plans to make it better than ever. Here’s a preview of where they are looking to take it.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/12/stocks-price-notifier-app-react-apollo-graphql-hasura/",
    Article_Title:
      "Building A Stocks Price Notifier App Using React, Apollo GraphQL And Hasura",
    Date: "december 21, 2020",
    Author: "Ankita Masand",
    Description:
      "In this article, we’ll learn how to build an event-based application and send a web-push notification when a particular event is triggered. We’ll set up database tables, events, and scheduled triggers on the Hasura GraphQL engine and wire up the GraphQL endpoint to the front-end application to record the stock price preference of the user.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/reactive-variables-graphql-apollo-client/",
    Article_Title: "Reactive Variables In GraphQL Apollo Client",
    Date: "november 27, 2020",
    Author: "Daniel Don",
    Description:
      "Reactive variables work with GraphQL Apollo and offer you the same functionality with Redux or Context API without the complexity or extra layers that come with these other tools. A reactive variable in GraphQL Apollo is easy to use and doesn’t have as much setup process compared to Redux.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/vue-applications-vue-testing-library/",
    Article_Title: "Testing Vue Applications With The Vue Testing Library",
    Date: "november 24, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "The Vue Testing library can help you to test your applications by mirroring the way that a user would interact with them. Here’s everything you need to know if you want to get started right away.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/comparison-async-await-versus-then-catch/",
    Article_Title: "A Comparison Of async/await Versus then/catch",
    Date: "november 23, 2020",
    Author: "Bret Cameron",
    Description:
      "In JavaScript, there are two main ways to handle asynchronous code: then/catch (ES6) and async/await (ES7). These syntaxes give us the same underlying functionality, but they affect readability and scope in different ways. In this article, we’ll see how one syntax lends itself to maintainable code, while the other puts us on the road to callback hell!",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/typescript-in-50-lessons-release/",
    Article_Title: "Making Sense Of TypeScript, In 50 Lessons",
    Date: "november 17, 2020",
    Author: "Vitaly Friedman",
    Description:
      "Meet our new practical guide on everything you need to know about TypeScript, its type system, and all its benefits in 50 lessons. Jump to table of contents and get the book right away.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2020/11/new-vue3-update/",
    Article_Title: "What’s New In Vue 3?",
    Date: "november 13, 2020",
    Author: "Timi Omoyeni",
    Description:
      "In this article, we’re going to take a look at some of these new features and how to get started with them. We’re also going be taking a look at some of the changes done to the existing features.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/threejs-react-three-fiber/",
    Article_Title: "A Dive Into React And Three.js Using react-three-fiber",
    Date: "november 9, 2020",
    Author: "Fortune Ikechi",
    Description:
      "react-three-fiber is a powerful Three.js renderer that helps render 3D models and animations for React and its native applications. In this tutorial, you will learn how to configure and build 3D models in a React application.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/graphql-server-next-javascript-api-routes/",
    Article_Title: "How To Build A GraphQL Server Using Next.js API Routes",
    Date: "october 29, 2020",
    Author: "Ibrahima Ndaw",
    Description:
      "This guide will teach you the basics of Next.js API Routes. We will start by explaining what they are and why API Routes are useful compared to REST or GraphQL APIs. Then, we will guide you through a step by step tutorial on how to build your very first GraphQL server with Next.js and the Github API.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/authentication-in-vue-js/",
    Article_Title: "Authentication In Vue.js",
    Date: "october 27, 2020",
    Author: "Precious Ndubueze",
    Description:
      "This article is aimed at beginner developers who want to learn about authentication in Vue. In order to be able to follow along, you’ll need to have a good knowledge of Vue and Vuex.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/getting-started-with-next-js/",
    Article_Title: "Getting Started With Next.js",
    Date: "october 22, 2020",
    Author: "Adebiyi Adedotun",
    Description:
      "Next.js is a React framework that is bound to ease your life as a React developer by abstracting away the common and redundant tasks (such as routing) into relatively simpler and powerful APIs. That way, you can focus on writing your apps instead of reinventing the wheel.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/supercharge-testing-react-applications-wallabyjs/",
    Article_Title: "Supercharge Testing React Applications With Wallaby.js",
    Date: "october 16, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "Ever had to switch your focus from your editor and to your terminal to see the results of your tests? This article will introduce you to Wallaby.js",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/tasks-react-app-web-workers/",
    Article_Title:
      "Managing Long-Running Tasks In A React App With Web Workers",
    Date: "october 15, 2020",
    Author: "Chidi Orji",
    Description:
      "In this tutorial, we’re going to learn how to use the Web Worker API to manage time-consuming and UI-blocking tasks in a JavaScript app by building a sample web app that leverages Web Workers.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/using-webxr-with-babylonjs/",
    Article_Title: "Using WebXR With Babylon.js",
    Date: "october 9, 2020",
    Author: "Preston So",
    Description:
      "In this overview of WebXR technologies and the Babylon.js framework, we’ll inspect the underpinnings of WebXR and the most important aspects of the WebXR Device API before turning our attention to Babylon.js.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/typescript-in-50-lessons-pre-release/",
    Article_Title: "Master TypeScript In 50 Short Lessons",
    Date: "october 7, 2020",
    Author: "Vitaly Friedman",
    Description:
      "Meet our new practical guide on everything you need to know about TypeScript, its type system, and all its benefits in 50 lessons. Jump to table of contents and get the book right away.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/useful-tools-vue-javascript-web-development/",
    Article_Title: "Useful Tools In Vue.js Web Development",
    Date: "october 5, 2020",
    Author: "Timi Omoyeni",
    Description:
      "There are some tools that developers that are just getting started with Vue or sometimes, have experience building with Vue sometimes do not know exist to make development in Vue a lot easier. In this article, we’re going to look at a few of these libraries, what they do, and how to use them during development.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/stack-custom-made-static-site-generator/",
    Article_Title:
      "Simplify Your Stack With A Custom-Made Static Site Generator",
    Date: "september 23, 2020",
    Author: "Bryan Robinson",
    Description:
      "In this article, Bryan Robinson explores how to take a humble HTML page and make its content editable in a CMS with no frameworks and no client-side JavaScript.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/smashing-podcast-episode-25/",
    Article_Title:
      "Smashing Podcast Episode 25 With Anthony Campolo: What Is RedwoodJS?",
    Date: "september 22, 2020",
    Author: "Drew McLellan",
    Description:
      "We’re talking about RedwoodJS. What exactly does it mean to be a full-stack Jamstack framework? Drew McLellan talks to community champion Anthony Campolo to find out.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/advanced-graphql-usage-gatsby-websites/",
    Article_Title: "Advanced GraphQL Usage In Gatsby Websites",
    Date: "september 16, 2020",
    Author: "Aleem Isiaka",
    Description:
      "In this article, we will take a closer look at GraphQL and how we can integrate it into a Gatsby website by building and implementing advanced data sourcing and transformation in Gatsby.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/animating-react-components-greensock/",
    Article_Title: "Animating React Components With GreenSock",
    Date: "september 14, 2020",
    Author: "Blessing Krofegha",
    Description:
      "In this article, Blessing explains how GSAP plays well with the React library by integrating its functions into a React component in building an example landing page with a variety of animations.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/build-blog-nextjs-mdx/",
    Article_Title: "How To Build A Blog With Next And MDX",
    Date: "september 9, 2020",
    Author: "Ibrahima Ndaw",
    Description:
      "In this guide, we will be looking at Next.js, a popular React framework that offers a great developer experience and ships with all of the features you need for production.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/automate-api-testing-postman/",
    Article_Title: "How To Automate API Testing With Postman",
    Date: "september 7, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "In this article, we will learn how to write automated tests on web APIs with Postman. In order to follow along to this tutorial, you’ll need at least a fair amount of familiarity with Postman.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/component-library-react-emotion/",
    Article_Title: "Building A Component Library With React And Emotion",
    Date: "september 4, 2020",
    Author: "Ademola Adegbuyi",
    Description:
      "A component library helps to keep a design consistent across multiple projects. It ensures consistency because any changes made will propagate across the projects that make use of it. In this tutorial, we’ll learn how to build a component library, using Emotion in React to resolve inconsistencies.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/vue-router-features/",
    Article_Title: "How To Do More With Vue Router",
    Date: "august 31, 2020",
    Author: "Timi Omoyeni",
    Description:
      "In this tutorial, we’re going to learn about some amazing features the Vue Router has and how we can make use of them in our app.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/comment-system-firebase/",
    Article_Title: "How To Build Your Own Comment System Using Firebase",
    Date: "august 24, 2020",
    Author: "Aman Thakur",
    Description:
      "Ever wanted to have a comments section for your blog, but were overwhelmed by the high cost and maintenance solutions? Firebase can be your savior. In this guide, we’ll learn how to add a comments section to your blog with Firebase, while learning the basics of Firebase on the way.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/mastering-props-proptypes-react/",
    Article_Title: "Mastering Props And PropTypes In React",
    Date: "august 17, 2020",
    Author: "Adeneye David Abiodun",
    Description:
      "Props and PropTypes are an important mechanism for passing information between React components, and in this article, we’re going to look into them in great detail.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/error-handling-nodejs-error-classes/",
    Article_Title: "Better Error Handling In NodeJS With Error Classes",
    Date: "august 10, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "This article is for JavaScript and NodeJS developers who want to improve error-handling in their applications. Kelvin Omereshone explains the error class pattern and how to use it for a better, more efficient way of handling errors across your applications.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/static-blog-sapper-strapi/",
    Article_Title: "Creating A Static Blog With Sapper And Strapi",
    Date: "august 5, 2020",
    Author: "Daniel Madalitso Phiri",
    Description:
      "This article will take you through how to build a Svelte-powered static blog with Sapper and Strapi, as well as how to deploy the website to Netlify.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/redux-real-world-application/",
    Article_Title: "Setting Up Redux For Use In A Real-World Application",
    Date: "august 3, 2020",
    Author: "Jerry Navi",
    Description:
      "Redux is a robust state-management library for single-page JavaScript apps. It is described on the official documentation as a predictable state container for Javascript applications and it’s fairly simple to learn the concepts and implement Redux in a simple app. Going from a simple counter app to a real-world app, however, can be quite the jump.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/client-side-graphql-apollo-client-react-apps/",
    Article_Title:
      "Understanding Client-Side GraphQl With Apollo-Client In React Apps",
    Date: "july 29, 2020",
    Author: "Blessing Krofegha",
    Description:
      "In this article, you’ll learn a few basics of GraphQL and Apollo Client, learning how to work with both of them. By the end, we’ll have built a pet shop app that uses Apollo Client.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/styled-components-react/",
    Article_Title: "How To Use Styled-Components In React",
    Date: "july 23, 2020",
    Author: "Adebiyi Adedotun",
    Description:
      "While the component-driven approach has ushered in a new frontier in the way we build web applications, it isn’t without its imperfections",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/desktop-apps-electron-vue-javascript/",
    Article_Title: "Building Desktop Apps With Electron And Vue",
    Date: "july 21, 2020",
    Author: "Timi Omoyeni",
    Description:
      "In this tutorial, Timi Omoyeni explains what you need to keep in mind when building a desktop application with Vue.js using the Vue CLI Plugin Electron Builder.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/accessible-front-end-application-chakra-ui-nuxtjs/",
    Article_Title:
      "How To Build An Accessible Front-End Application With Chakra UI And Nuxt.js",
    Date: "july 20, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "In this article, we are going to be looking at how to use Chakra UI and NuxtJS in building accessible front-end applications.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/introduction-stimulusjs/",
    Article_Title: "An Introduction To Stimulus.js",
    Date: "july 15, 2020",
    Author: "Mike Rogers",
    Description:
      "In this article, Mike Rogers will introduce you to Stimulus, a modest JavaScript framework that complements your existing HTML. By the end, you’ll have an understanding of the premise of Stimulus and why it’s a useful tool to have in your backpack.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/css-transitions-vuejs-nuxtjs/",
    Article_Title: "CSS Transitions In Vuejs And Nuxtjs",
    Date: "july 10, 2020",
    Author: "Timi Omoyeni",
    Description:
      "Transitions are a nice way to remove, change, or update data in an application because their occurrence adds a nice effect and is good for the user experience. In this tutorial, we’ll look at the different ways to apply transitions in both Vue.js and Nuxt.js applications.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/tiny-desktop-apps-tauri-vuejs/",
    Article_Title: "Creating Tiny Desktop Apps With Tauri And Vue.js",
    Date: "july 8, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "Tauri is a toolchain for creating small, fast, and secure desktop apps from your existing HTML, CSS, and JavaScript. In this article, Kelvin explains how Tauri plays well with the progressive framework Vue.js by integrating both technologies in bundling an example web app called nota as a native application.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/react-apps-testing-library/",
    Article_Title: "How To Test Your React Apps With The React Testing Library",
    Date: "july 3, 2020",
    Author: "Chidi Orji",
    Description:
      "Testing gives confidence in written code. In the context of this article, ‘testing’ means ‘automated testing’. Without automated testing, it is significantly harder to ensure the quality of a web application of significant complexity. Fails caused by automated testing may lead to more bugs in production. In this article, we’re going to show how React developers can quickly start testing their app with the React Testing Library (RTL).",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/differences-static-generated-sites-server-side-rendered-apps/",
    Article_Title:
      "Differences Between Static Generated Sites And Server-Side Rendered Apps",
    Date: "july 2, 2020",
    Author: "Timi Omoyeni",
    Description:
      "Statically generated sites or pre-rendering and server-side rendered applications are two modern ways to build front-end applications using JavaScript frameworks. These two modes, yet different, are often mixed up as the same thing and in this tutorial, we’re going to learn about the differences between them.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/firebase-push-notifications-react/",
    Article_Title: "Firebase Push Notifications In React",
    Date: "june 29, 2020",
    Author: "Chidi Orji",
    Description:
      "In this tutorial, we’ll learn how to work with Firebase push notifications in the backend and frontend. We’ll set up the notifications system with an Express back-end server. Afterwards, we’ll listen for the notifications in a React front-end app.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/introduction-swr-react-hooks-remote-data-fetching/",
    Article_Title:
      "An Introduction To SWR: React Hooks For Remote Data Fetching",
    Date: "june 22, 2020",
    Author: "Ibrahima Ndaw",
    Description:
      "In this article, we’ll be looking at a new way of retrieving data in React Apps named SWR. This is a set of hooks for remote data fetching that makes things easier, such as caching, pagination, and so on.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/mirage-javascript-cypress-ui-testing/",
    Article_Title:
      "Mirage JS Deep Dive: Using Mirage JS And Cypress For UI Testing (Part 4)",
    Date: "june 17, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "In this final part of Mirage JS Deep Dive series, we will be putting everything we’ve learned in the past series into learning how to perform UI tests with Mirage JS.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/better-reducers-with-immer/",
    Article_Title: "Better Reducers With Immer",
    Date: "june 16, 2020",
    Author: "Chidi Orji",
    Description:
      "When working with React, we maintain a lot of state. To make updates to our state, we need to write a lot of reducers. In this article, we’re going to learn how to use Immer to write reducers, and more.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/internationalization-vue-i18n/",
    Article_Title: "Internationalization In Vue With The Vue I18n Plugin",
    Date: "june 12, 2020",
    Author: "Timi Omoyeni",
    Description:
      "Adding Internationalization to your Vue.js application has a lot of use cases and in this tutorial, we’re going to learn how to do this with the Vue I18n plugin and how to set it up in our application.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/mirage-javascript-timing-response-passthrough/",
    Article_Title:
      "Mirage JS Deep Dive: Understanding Timing, Response And Passthrough (Part 3)",
    Date: "june 10, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "In this third part of Mirage JS Deep Dive series, we will be focusing on using response, timing and passthrough in Mirage for a better handle on simulating an actual backend server.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/higher-order-components-react/",
    Article_Title: "Higher-Order Components In React",
    Date: "june 8, 2020",
    Author: "Shedrack Akintayo",
    Description:
      "In this tutorial, we are going to learn about higher-order components, the syntax of higher-order components, as well as use cases for them. In the process, we will build a higher-order component from an existing React component.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/",
    Article_Title: "Consuming REST APIs In React With Fetch And Axios",
    Date: "june 3, 2020",
    Author: "Shedrack Akintayo",
    Description:
      "If you’re a React developer who’d like to learn how you can start consuming APIs in your React applications, then this article is for you. Shedrack Akintayo explains what a REST API is and how to build a simple application that consumes a REST API by using both Fetch API and Axios.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/react-error-handling-reporting-error-boundary-sentry/",
    Article_Title:
      "React Error Handling And Reporting With Error Boundary And Sentry",
    Date: "june 1, 2020",
    Author: "Chidi Orji",
    Description:
      "In this article, we’ll explore the concept of error boundaries in a React application. We’ll work through an example app to see how we can use error boundaries to deliver a better app experience. Finally, we’ll integrate Sentry into our error boundary for realtime error reporting.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/mirage-javascript-factories-fixtures-serializers/",
    Article_Title:
      "Mirage JS Deep Dive: Understanding Factories, Fixtures And Serializers (Part 2)",
    Date: "may 29, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "In this second part of the Mirage JS Deep Dive series, we will be looking at Mirage JS’ Factories, Fixtures, and Serializers. We’ll see how they enable rapid API mocking using Mirage.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/angular-templates-pug/",
    Article_Title: "How To Create Better Angular Templates With Pug",
    Date: "may 28, 2020",
    Author: "Zara Cooper",
    Description:
      "Pug is a template engine that allows you to write cleaner templates with less repetition. In this article, Zara Cooper explains what Pug is and how you can use it in your Angular app.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/getting-started-axios-nuxt/",
    Article_Title: "Getting Started With Axios In Nuxt",
    Date: "may 26, 2020",
    Author: "Timi Omoyeni",
    Description:
      "In this tutorial, we will learn how to make a request in our Nuxt.js applications using the Axios module. We will also learn how to use the ayncData and fetch methods to fetch data on the server-side and the differences between the two methods.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/",
    Article_Title: "Building Reusable React Components Using Tailwind",
    Date: "may 25, 2020",
    Author: "Tilo Mitra",
    Description:
      "Tailwind is a popular utility-first CSS framework that provides low-level class names to web developers. In this article, we’ll explore ways to build reusable React components using Tailwind.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/understanding-machines-open-standard-javascript-functions/",
    Article_Title:
      "Understanding Machines: An Open Standard For JavaScript Functions",
    Date: "may 21, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "In this article, Kelvin Omereshone introduces you to machines, an open standard for JavaScript functions. At the end of this article, you should be familiar with what machines are and how to implement them.",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/styling-components-react/",
    Article_Title: "Styling Components In React",
    Date: "may 14, 2020",
    Author: "Shedrack Akintayo",
    Description:
      "React is a fantastic JavaScript library for building rich user interfaces. It provides a great component abstraction for organizing your interfaces into well-functioning code, but what about the look and feel of the app?",
    Topic: "JAVASCRIPT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/03/outside-focus-click-handler-react-component/",
    Article_Title:
      "Creating An Outside Focus And Click Handler React Component",
    Date: "march 3, 2021",
    Author: "Arihant Verma",
    Description:
      "In this article, we’ll look at how to create an outside focus and click handler with React. We will recreate an open source react component react-foco from scratch in doing so.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/02/web-app-react-redux-sanity-io/",
    Article_Title: "Building A Web App With React, Redux And Sanity.io",
    Date: "february 11, 2021",
    Author: "Ifeanyi Dike",
    Description:
      "Headless CMS is a powerful and easy way to manage content and access API. Built on React, Sanity.io is a seamless tool for flexible content management. It can be used to build simple to complex applications from the ground up. In this article, Ifeanyi explains how to build a simple listing app with Sanity.io and React. The global states will be managed with Redux and the application will be styled with styled-components.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/design-developer-friendly-react-code-animaapp/",
    Article_Title:
      "From Design To Developer-Friendly React Code In Minutes With Anima",
    Date: "january 26, 2021",
    Author: "Miroslav Bekyarov",
    Description:
      "In this article, we’ll learn how to turn our static designs into a live, code-based prototype with real fields, forms, maps, and animations, and in turn, transform this prototype into React code",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/grommet-react-applications/",
    Article_Title: "Using Grommet In React Applications",
    Date: "january 18, 2021",
    Author: "Fortune Ikechi",
    Description:
      "In this tutorial, we’re going to learn how to use Grommet as a UI library for React applications. We’ll use Grommet as a UI library of choice to create a pricing component, this would help us have a better understanding of how to use Grommet.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/dialogflow-agent-react-application/",
    Article_Title: "Integrating A Dialogflow Agent Into A React Application",
    Date: "january 14, 2021",
    Author: "Nwani Victory",
    Description:
      "When it comes to building a conversational chat assistant that could be used at a small or enterprise level, Dialogflow would most likely be one of the first options that would show up in your search list. But apart from its console that is provided to design and manage an Agent, how can we create a chat assistant that can be used within our built web applications, too?",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/12/stocks-price-notifier-app-react-apollo-graphql-hasura/",
    Article_Title:
      "Building A Stocks Price Notifier App Using React, Apollo GraphQL And Hasura",
    Date: "december 21, 2020",
    Author: "Ankita Masand",
    Description:
      "In this article, we’ll learn how to build an event-based application and send a web-push notification when a particular event is triggered. We’ll set up database tables, events, and scheduled triggers on the Hasura GraphQL engine and wire up the GraphQL endpoint to the front-end application to record the stock price preference of the user.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/12/how-redux-reducers-work/",
    Article_Title: "How Redux Reducers Work",
    Date: "december 14, 2020",
    Author: "Fortune Ikechi",
    Description:
      "If you have used Redux at any point while developing an application to manage state, you will most definitely have come across reducers. This tutorial will explain the concept of reducers and how they work specifically in Redux.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/12/conversational-nlp-enabled-chatbot-google-dialogflow/",
    Article_Title:
      "Building A Conversational N.L.P Enabled Chatbot Using Google’s Dialogflow",
    Date: "december 8, 2020",
    Author: "Nwani Victory",
    Description:
      "The 2019 Capgemini research institute’s report published after a research on the use of chat assistants showed a drastic 76% increase in customer satisfaction from organizations where chat assistants where built and incorporated into their services. But how does Dialogflow, a product from Google’s ecosystem, aid developers in building chat assistants and contribute to this quota?",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/reactive-variables-graphql-apollo-client/",
    Article_Title: "Reactive Variables In GraphQL Apollo Client",
    Date: "november 27, 2020",
    Author: "Daniel Don",
    Description:
      "Reactive variables work with GraphQL Apollo and offer you the same functionality with Redux or Context API without the complexity or extra layers that come with these other tools. A reactive variable in GraphQL Apollo is easy to use and doesn’t have as much setup process compared to Redux.",
    Topic: "REACT",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2020/11/react-useref-hook/",
    Article_Title: "A Thoughtful Way To Use React’s useRef() Hook",
    Date: "november 19, 2020",
    Author: "Aleem Isiaka",
    Description:
      "In a React component, useState and useReducer can cause your component to re-render each time there is a call to the update functions. In this article, you will find out how to use the useRef() hook to keep track of variables without causing re-renders, and how to enforce the re-rendering of React Components.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/authenticating-react-apps-auth0/",
    Article_Title: "Authenticating React Apps With Auth0",
    Date: "november 11, 2020",
    Author: "Nefe Emadamerho-Atori",
    Description:
      "In this article, Nefe explains how to authenticate React apps using Auth0. You’ll also see how you can set up Social Logins in your apps.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/threejs-react-three-fiber/",
    Article_Title: "A Dive Into React And Three.js Using react-three-fiber",
    Date: "november 9, 2020",
    Author: "Fortune Ikechi",
    Description:
      "react-three-fiber is a powerful Three.js renderer that helps render 3D models and animations for React and its native applications. In this tutorial, you will learn how to configure and build 3D models in a React application.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/serverless-frontend-applications-google-cloud-platform/",
    Article_Title:
      "Building Serverless Front-End Applications Using Google Cloud Platform",
    Date: "november 6, 2020",
    Author: "Nwani Victory",
    Description:
      "In this article, you will learn what serverless applications are, how they are used on the Google Cloud, and also scenarios in which they can be used in a front-end application.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/data-visualization-apexcharts/",
    Article_Title: "Data Visualization With ApexCharts",
    Date: "november 5, 2020",
    Author: "Nefe Emadamerho-Atori",
    Description:
      "In this article, you will be exposed to ApexCharts and to the different types and variants of charts it provides. Along the way, we’ll build several types of charts and learn how we can customize the appearance of our charts.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/graphql-server-next-javascript-api-routes/",
    Article_Title: "How To Build A GraphQL Server Using Next.js API Routes",
    Date: "october 29, 2020",
    Author: "Ibrahima Ndaw",
    Description:
      "This guide will teach you the basics of Next.js API Routes. We will start by explaining what they are and why API Routes are useful compared to REST or GraphQL APIs. Then, we will guide you through a step by step tutorial on how to build your very first GraphQL server with Next.js and the Github API.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/introduction-to-framer-motion/",
    Article_Title: "Introducing Framer Motion",
    Date: "october 26, 2020",
    Author: "Nefe Emadamerho-Atori",
    Description:
      "Animations, when done right, are powerful. However, creating eye-catching animations with CSS can be tricky. In comes Framer Motion. With Framer Motion, you don’t need to be a CSS expert to make beautiful animations. Framer Motion provides us with production-ready animations and a low-level API we can interact with to integrate these animations into our applications.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/getting-started-with-next-js/",
    Article_Title: "Getting Started With Next.js",
    Date: "october 22, 2020",
    Author: "Adebiyi Adedotun",
    Description:
      "Next.js is a React framework that is bound to ease your life as a React developer by abstracting away the common and redundant tasks (such as routing) into relatively simpler and powerful APIs. That way, you can focus on writing your apps instead of reinventing the wheel.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/supercharge-testing-react-applications-wallabyjs/",
    Article_Title: "Supercharge Testing React Applications With Wallaby.js",
    Date: "october 16, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "Ever had to switch your focus from your editor and to your terminal to see the results of your tests? This article will introduce you to Wallaby.js",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/tasks-react-app-web-workers/",
    Article_Title:
      "Managing Long-Running Tasks In A React App With Web Workers",
    Date: "october 15, 2020",
    Author: "Chidi Orji",
    Description:
      "In this tutorial, we’re going to learn how to use the Web Worker API to manage time-consuming and UI-blocking tasks in a JavaScript app by building a sample web app that leverages Web Workers.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/react-validation-formik-yup/",
    Article_Title: "React Form Validation With Formik And Yup",
    Date: "october 12, 2020",
    Author: "Nefe Emadamerho-Atori",
    Description:
      "Forms are an integral part of how users interact with our websites and web applications. Validating the data the user passes through the form is a critical aspect of our jobs as web developers. However, it doesn’t have to be a pain-staking process. In this article, we’ll learn how Formik handles the state of the form data, validates the data, and handles form submission.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/file-uploads-react-apollo-google-storage-graphql/",
    Article_Title:
      "How To Manage File Uploads In React With Google Storage And GraphQL",
    Date: "october 8, 2020",
    Author: "Nwani Victory",
    Description:
      "From a user’s profile picture to other media assets, data collection and storage to cloud services through file uploads have become an essential feature for most modern applications. In this article, you will learn how file uploads can be implemented in a GraphQL application.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/unit-testing-react-native-applications/",
    Article_Title: "Unit Testing In React Native Applications",
    Date: "september 29, 2020",
    Author: "Fortune Ikechi",
    Description:
      "Unit testing has become an integral part of the software development process. It is the level of testing at which the components of the software are tested. In this tutorial, you’ll learn how to test units of a React Native application.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/comparison-styling-methods-next-js/",
    Article_Title: "Comparing Styling Methods In Next.js",
    Date: "september 17, 2020",
    Author: "Adebiyi Adedotun",
    Description:
      "Among others, Next.js has dubbed itself: The React Framework for Static Websites. But just like every other framework whose goal is to help you build what matters by abstracting common, redundant tasks, you’re often required to learn something new and opinionated. With Next.js, one of the things you need to know is how to integrate different CSS methods with its API, and that is the focus of this tutorial.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/animating-react-components-greensock/",
    Article_Title: "Animating React Components With GreenSock",
    Date: "september 14, 2020",
    Author: "Blessing Krofegha",
    Description:
      "In this article, Blessing explains how GSAP plays well with the React library by integrating its functions into a React component in building an example landing page with a variety of animations.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/build-blog-nextjs-mdx/",
    Article_Title: "How To Build A Blog With Next And MDX",
    Date: "september 9, 2020",
    Author: "Ibrahima Ndaw",
    Description:
      "In this guide, we will be looking at Next.js, a popular React framework that offers a great developer experience and ships with all of the features you need for production.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/component-library-react-emotion/",
    Article_Title: "Building A Component Library With React And Emotion",
    Date: "september 4, 2020",
    Author: "Ademola Adegbuyi",
    Description:
      "A component library helps to keep a design consistent across multiple projects. It ensures consistency because any changes made will propagate across the projects that make use of it. In this tutorial, we’ll learn how to build a component library, using Emotion in React to resolve inconsistencies.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/building-react-apps-storybook/",
    Article_Title: "Building React Apps With Storybook",
    Date: "september 1, 2020",
    Author: "Abdulazeez Adeshina",
    Description:
      "In this article, you will learn how to build and test React components in isolation using Storybook. You will also learn how to use the knobs add-on to modify data directly from the storybook explorer.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/mobx-state-manager-react-native-applications/",
    Article_Title: "Using Mobx As A State Manager In React Native Applications",
    Date: "august 26, 2020",
    Author: "Fortune Ikechi",
    Description:
      "MobX is one of the many state management tools available to React developers. In this tutorial, we’re going to learn how to use MobX to manage state in React Native applications by building a React Native application to see how this is done.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/forms-validation-ionic-react/",
    Article_Title: "Forms And Validation In Ionic React",
    Date: "august 20, 2020",
    Author: "Jerry Navi",
    Description:
      "In this tutorial, you will learn how to build forms when working with Ionic React and how to make these forms interactive by adding validation rules with helpful text hints.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/mastering-props-proptypes-react/",
    Article_Title: "Mastering Props And PropTypes In React",
    Date: "august 17, 2020",
    Author: "Adeneye David Abiodun",
    Description:
      "Props and PropTypes are an important mechanism for passing information between React components, and in this article, we’re going to look into them in great detail.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/guide-product-tours-react-apps/",
    Article_Title: "A Practical Guide To Product Tours In React Apps",
    Date: "august 6, 2020",
    Author: "Blessing Krofegha",
    Description:
      "In this guide, you’ll learn how to proactively use product tours to onboard users into a new and complex UX, and how to familiarize them with UI functionality without boring them, using a typical React app.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/redux-real-world-application/",
    Article_Title: "Setting Up Redux For Use In A Real-World Application",
    Date: "august 3, 2020",
    Author: "Jerry Navi",
    Description:
      "Redux is a robust state-management library for single-page JavaScript apps. It is described on the official documentation as a predictable state container for Javascript applications and it’s fairly simple to learn the concepts and implement Redux in a simple app. Going from a simple counter app to a real-world app, however, can be quite the jump.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/client-side-graphql-apollo-client-react-apps/",
    Article_Title:
      "Understanding Client-Side GraphQl With Apollo-Client In React Apps",
    Date: "july 29, 2020",
    Author: "Blessing Krofegha",
    Description:
      "In this article, you’ll learn a few basics of GraphQL and Apollo Client, learning how to work with both of them. By the end, we’ll have built a pet shop app that uses Apollo Client.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/styled-components-react/",
    Article_Title: "How To Use Styled-Components In React",
    Date: "july 23, 2020",
    Author: "Adebiyi Adedotun",
    Description:
      "While the component-driven approach has ushered in a new frontier in the way we build web applications, it isn’t without its imperfections",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/methods-performance-react-apps/",
    Article_Title:
      "Methods Of Improving And Optimizing Performance In React Apps",
    Date: "july 16, 2020",
    Author: "Shedrack Akintayo",
    Description:
      "Since React was introduced, it has transformed the way front-end developers build web applications, and its virtual DOM is famous for effectively rendering components. In this tutorial, we will discuss various methods of optimizing performance in React applications, and also the features of React that we can use to improve performance.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/",
    Article_Title: "How To Create A Custom React Hook To Fetch And Cache Data",
    Date: "july 13, 2020",
    Author: "Ademola Adegbuyi",
    Description:
      "There is a high possibility that a lot of components in your React application will have to make calls to an API to retrieve data that will be displayed to your users. It’s already possible to do that using the componentDidMount() lifecycle method, but with the introduction of Hooks, you can build a custom hook which will fetch and cache the data for you. That’s what this tutorial will cover.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/understanding-plugin-development-gatsby/",
    Article_Title: "Understanding Plugin Development In Gatsby",
    Date: "july 6, 2020",
    Author: "Aleem Isiaka",
    Description:
      "Gatsby is a modern static-site generator that has revamped the way static websites are being built. It incorporates React, Node.js, and GraphQL to create stunning and blazing-fast websites. In this post, we will discuss Gatsby plugins and develop our own comment plugin.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/react-apps-testing-library/",
    Article_Title: "How To Test Your React Apps With The React Testing Library",
    Date: "july 3, 2020",
    Author: "Chidi Orji",
    Description:
      "Testing gives confidence in written code. In the context of this article, ‘testing’ means ‘automated testing’. Without automated testing, it is significantly harder to ensure the quality of a web application of significant complexity. Fails caused by automated testing may lead to more bugs in production. In this article, we’re going to show how React developers can quickly start testing their app with the React Testing Library (RTL).",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/firebase-push-notifications-react/",
    Article_Title: "Firebase Push Notifications In React",
    Date: "june 29, 2020",
    Author: "Chidi Orji",
    Description:
      "In this tutorial, we’ll learn how to work with Firebase push notifications in the backend and frontend. We’ll set up the notifications system with an Express back-end server. Afterwards, we’ll listen for the notifications in a React front-end app.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/",
    Article_Title: "A Practical Guide To Testing React Applications With Jest",
    Date: "june 24, 2020",
    Author: "Adeneye David Abiodun",
    Description:
      "Building a well-functioning application requires good testing; otherwise, knowing whether your application works as expected would be a matter of guesswork and luck. Jest is one of the best tools available for testing React applications. In this article, you will learn everything you need to create a solid test for your React components and application.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/introduction-swr-react-hooks-remote-data-fetching/",
    Article_Title:
      "An Introduction To SWR: React Hooks For Remote Data Fetching",
    Date: "june 22, 2020",
    Author: "Ibrahima Ndaw",
    Description:
      "In this article, we’ll be looking at a new way of retrieving data in React Apps named SWR. This is a set of hooks for remote data fetching that makes things easier, such as caching, pagination, and so on.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/better-reducers-with-immer/",
    Article_Title: "Better Reducers With Immer",
    Date: "june 16, 2020",
    Author: "Chidi Orji",
    Description:
      "When working with React, we maintain a lot of state. To make updates to our state, we need to write a lot of reducers. In this article, we’re going to learn how to use Immer to write reducers, and more.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/smashing-podcast-episode-18/",
    Article_Title:
      "Smashing Podcast Episode 18 With Mina Markham: How Can I Learn React?",
    Date: "june 16, 2020",
    Author: "Drew McLellan",
    Description:
      "In this episode of the Smashing Podcast, we’re talking about learning React. What’s React like to work with, and how can experienced developers get started? Drew McLellan chats to Mina Markham to find out.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/facial-recognition-web-application-react/",
    Article_Title: "Building A Facial Recognition Web Application With React",
    Date: "june 11, 2020",
    Author: "Adeneye David Abiodun",
    Description:
      "In this article, we will build a facial recognition web app with the help of React and the Face Recognition API, and cover the Face Detection model and Predict API.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/higher-order-components-react/",
    Article_Title: "Higher-Order Components In React",
    Date: "june 8, 2020",
    Author: "Shedrack Akintayo",
    Description:
      "In this tutorial, we are going to learn about higher-order components, the syntax of higher-order components, as well as use cases for them. In the process, we will build a higher-order component from an existing React component.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/",
    Article_Title: "Consuming REST APIs In React With Fetch And Axios",
    Date: "june 3, 2020",
    Author: "Shedrack Akintayo",
    Description:
      "If you’re a React developer who’d like to learn how you can start consuming APIs in your React applications, then this article is for you. Shedrack Akintayo explains what a REST API is and how to build a simple application that consumes a REST API by using both Fetch API and Axios.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/react-error-handling-reporting-error-boundary-sentry/",
    Article_Title:
      "React Error Handling And Reporting With Error Boundary And Sentry",
    Date: "june 1, 2020",
    Author: "Chidi Orji",
    Description:
      "In this article, we’ll explore the concept of error boundaries in a React application. We’ll work through an example app to see how we can use error boundaries to deliver a better app experience. Finally, we’ll integrate Sentry into our error boundary for realtime error reporting.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/",
    Article_Title: "Building Reusable React Components Using Tailwind",
    Date: "may 25, 2020",
    Author: "Tilo Mitra",
    Description:
      "Tailwind is a popular utility-first CSS framework that provides low-level class names to web developers. In this article, we’ll explore ways to build reusable React components using Tailwind.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/mobile-app-expo-react-native-firebase-ios-android/",
    Article_Title:
      "How To Create A Mobile App In Expo And Firebase (For iOS And Android)",
    Date: "may 18, 2020",
    Author: "Chafik Gharbi",
    Description:
      "In this article, based on my experience with creating a GPS and navigation application, I will show you how to create a mobile app using Expo and Firebase services such as Firestore, Firebase functions and Expo push notifications.",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/styling-components-react/",
    Article_Title: "Styling Components In React",
    Date: "may 14, 2020",
    Author: "Shedrack Akintayo",
    Description:
      "React is a fantastic JavaScript library for building rich user interfaces. It provides a great component abstraction for organizing your interfaces into well-functioning code, but what about the look and feel of the app?",
    Topic: "REACT",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/04/growing-ux-maturity-in-organizations-part-3/",
    Article_Title:
      "Growing UX Maturity In Organizations: Education And Training (Part 3)",
    Date: "april 9, 2021",
    Author: "Victor Yocco",
    Description:
      "UX practitioners can play an important role in growing the UX maturity of the organizations and product teams they work with. This final article in a three-part series presents two additional tactics: education of staff on UX principles and processes.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/04/guarding-against-disposable-design/",
    Article_Title: "Guarding Against Disposable Design",
    Date: "april 2, 2021",
    Author: "Frederick O’Brien",
    Description:
      "Quick, constant change is a given on the web. It is often one of its greatest strengths. As ever, though, there is a balance to find. Although longevity takes a different form online, its value is immeasurable.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/03/growing-ux-maturity-in-organizations-part-2/",
    Article_Title:
      "Growing UX Maturity: Knowledge Sharing And Mentorship (Part 2)",
    Date: "march 26, 2021",
    Author: "Victor Yocco",
    Description:
      "This article presents tactics that can be helpful for those working in organizations that have started engaging in UX, but are still at the lower to middle stages of maturity: knowledge sharing and mentorship.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/03/good-better-best-untangling-complex-world-accessible-patterns/",
    Article_Title:
      "Good, Better, Best: Untangling The Complex World Of Accessible Patterns",
    Date: "march 16, 2021",
    Author: "Carie Fisher",
    Description:
      "How do we know which patterns are good, better, best when it comes to accessibility? Is it better to use an established pattern/library or create new ones? With the myriad of choices available, we can quickly become caught up in a web of confusion on this topic.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/03/growing-ux-maturity-in-organizations-part-1/",
    Article_Title:
      "Growing UX Maturity: Finding A UX Champion And Demonstrating ROI (Part 1)",
    Date: "march 12, 2021",
    Author: "Victor Yocco",
    Description:
      "We all benefit when we work to increase the overall UX maturity of our organizations. This article explores the concept of UX maturity, and focuses on finding and utilizing UX champions, and demonstrating the return on investment or value of UX.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/03/solutions-mobile-design-boost-user-experience/",
    Article_Title: "Obscure Mobile Design Techniques That Boost UX",
    Date: "march 8, 2021",
    Author: "Gert Svaiko",
    Description:
      "To inspire mobile designers, let’s look at how some clever design solutions tackle mobile navigation, confirmation dialogs, animations, and gamifying the waiting experience.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/02/building-user-trust-in-ux-design/",
    Article_Title: "Building User Trust In UX Design",
    Date: "february 26, 2021",
    Author: "Adam Fard",
    Description:
      "Trust is at the heart of a long-term strategy of any product. There are many ways to earn it, and even more ways to lose it. In this article, we’ll go through how you, as a product designer, can make sure your product nurtures and retains trust throughout every touchpoint. To do that, we’ll be borrowing some of the tricks marketers and product people have up their sleeves.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/02/material-design-text-fields/",
    Article_Title: "Material Design Text Fields Are Badly Designed",
    Date: "february 24, 2021",
    Author: "Adam Silver",
    Description:
      "Where to put the label in a web form? In the early days, we talked about left-aligned labels versus top-aligned labels. These days we talk about floating labels. Let’s explore why they aren’t a very good idea, and what to use instead.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/02/saul-bass-teach-web-design/",
    Article_Title: "What Saul Bass Can Teach Us About Web Design",
    Date: "february 12, 2021",
    Author: "Frederick O’Brien",
    Description:
      "Film credits, brand logos, posters… Saul Bass did it all, and the principles that informed his work are just as valuable now as they were 50 years ago.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/create-engaging-useful-chatbot/",
    Article_Title: "How To Create An Engaging And Useful Chatbot",
    Date: "january 28, 2021",
    Author: "Marli Mesibov",
    Description:
      "What makes a good chatbot experience? Most people think of witty responses and machine learning, but the basis of a chatbot UX is actually rooted in content strategy. Learn how to develop a chatbot that sounds human and engages people.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/towards-ad-free-web-diversifying-online-economy/",
    Article_Title: "Towards An Ad-Free Web: Diversifying The Online Economy",
    Date: "january 4, 2021",
    Author: "Frederick O’Brien",
    Description:
      "The founding principles of the World Wide Web have been warped by years of over-reliance on advertising. Fixing that imbalance and moving toward a more ethical, open web means relaying the foundations, with sites showing other ways are possible.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/12/progressive-web-apps/",
    Article_Title:
      "How To Optimize Progressive Web Apps: Going Beyond The Basics",
    Date: "december 23, 2020",
    Author: "Gert Svaiko",
    Description:
      "Progressive web applications are proven to raise user engagement and keep the costs down effectively. Building a modern PWA requires more than just the core setup to keep up with the user’s expectations. Therefore, let’s take a first-hand look at adding contemporary characteristics to PWAs, from functioning offline to user-friendly permission requests.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/12/feature-prioritizing-ways-reduce-subjectivity-bias/",
    Article_Title: "Feature Prioritizing: Ways To Reduce Subjectivity And Bias",
    Date: "december 22, 2020",
    Author: "Slava Shestopalov",
    Description:
      "When you’re working on a new project, what is more crucial than choosing the right features to develop? However, the exercise often turns into a spectacle of team voting. As a result, decisions change many times down the road. Let’s talk about the pitfalls of popular prioritization techniques and approaches to reducing bias and disagreement.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/12/design-simple-ui-complex-solution/",
    Article_Title: "How To Design A Simple UI When You Have A Complex Solution",
    Date: "december 11, 2020",
    Author: "Suzanne Scacca",
    Description:
      "Software and apps often solve very complex problems for businesses and consumers in the way of sales, marketing, finances, and so on. But offering a product that solves your users’ problems isn’t enough. If the UI is just as complex as the original problem, user churn is going to be high. Today, we’re going to look at some tips for designing a simple UI regardless of your solution’s complexity.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/12/making-websites-accessible/",
    Article_Title: "Making Websites Easier To Talk To",
    Date: "december 10, 2020",
    Author: "Frederick O’Brien",
    Description:
      "Modern websites aren’t inseparable from screens any more. Between phone assistants, home speakers, and screen readers, more and more people are using the web without even looking at it. Websites need to evolve in kind.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/12/ethical-considerations-ux-research/",
    Article_Title:
      "Ethical Considerations In UX Research: The Need For Training And Review",
    Date: "december 9, 2020",
    Author: "Victor Yocco",
    Description:
      "Research is an essential part of creating good UX. In this article, Victor Yocco discusses areas of ethical consideration for UX practitioners when conducting UX research, and explores potential solutions to preventing research from venturing into unethical territory.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/12/designing-attractive-usable-data-importer-app/",
    Article_Title:
      "Designing An Attractive And Usable Data Importer For Your App",
    Date: "december 2, 2020",
    Author: "Suzanne Scacca",
    Description:
      "Even though the development of a data importer is a complex matter, you don’t want your users’ experience with it to be just as complex or complicated. The second they experience any friction or fault in data onboarding, the chances of them bailing from the software will skyrocket. So, in this post, we’re going to focus on how best to present your data importer to users.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/weaving-web-accessibility-usability/",
    Article_Title: "Weaving Web Accessibility With Usability",
    Date: "november 30, 2020",
    Author: "Uri Paz",
    Description:
      "In this article, Uri Paz explains how a site complying with accessibility guidelines may still present usability issues when testing with real users. Find out how weaving accessibility best practices with usability testing, can help as many people as possible to fully use your site.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/global-digital-accessibility-developments-during-covid/",
    Article_Title:
      "From The Experts: Global Digital Accessibility Developments During COVID-19",
    Date: "november 12, 2020",
    Author: "Robin Christopherson",
    Description:
      "In this article, Robin Christopherson talks with experts about COVID, the challenges and opportunities the crisis brings, agile adjustments, digital inclusion, and much more.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/overcome-data-onboarding-challenges-software-products/",
    Article_Title:
      "How To Overcome Data Onboarding Challenges For Software Products",
    Date: "october 23, 2020",
    Author: "Suzanne Scacca",
    Description:
      "Data onboarding with a custom-built solution can be a difficult and error-prone process. This article takes a closer look at how Flatfile Concierge deals with this particular problem.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/using-webxr-with-babylonjs/",
    Article_Title: "Using WebXR With Babylon.js",
    Date: "october 9, 2020",
    Author: "Preston So",
    Description:
      "In this overview of WebXR technologies and the Babylon.js framework, we’ll inspect the underpinnings of WebXR and the most important aspects of the WebXR Device API before turning our attention to Babylon.js.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/website-policy-disclosure-pages/",
    Article_Title:
      "Do Website Policy Disclosure Pages Always Have To Be So Ugly?",
    Date: "october 6, 2020",
    Author: "Suzanne Scacca",
    Description:
      "In this article, we’re going to look at four ways that web designers can contribute to getting more policy disclosure pages read and terms actually agreed to.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/google-analytics-web-developers-ui-ux-design/",
    Article_Title:
      "5 Ways Google Analytics Helps Web Developers In UI/UX Design",
    Date: "september 30, 2020",
    Author: "Clara Buenconsejo",
    Description:
      "In this article, we’ll look at 5 features in Google Analytics that can help web developers and designers in making a better user experience on their website.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2020/09/intuitive-design/",
    Article_Title: "Intuitive Design? No Such Thing!",
    Date: "september 25, 2020",
    Author: "Carrie Webster",
    Description:
      "This article explores what intuitive design actually means, why it doesn’t make sense, how we can better approach design solutions, and what the future of interfaces might look like.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/09/designing-for-attention/",
    Article_Title: "Designing For Attention",
    Date: "september 15, 2020",
    Author: "Victor Yocco",
    Description:
      "In this article, Victor Yocco covers specific tactics with supporting research that are bound to help you design for attention.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/tips-customer-centric-landing-pages/",
    Article_Title: "How To Create Customer-Centric Landing Pages",
    Date: "august 25, 2020",
    Author: "Travis Jamison",
    Description:
      "Customer needs should be one of the primary considerations when designing a website or landing page.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/lessons-web-app-designers-learn-google/",
    Article_Title: "4 Lessons Web App Designers Can Learn From Google",
    Date: "august 12, 2020",
    Author: "Suzanne Scacca",
    Description:
      "Google knows exactly what consumers want and it has designed simple, intuitive, and useful solutions for them. This article explains why it’s a company whose product features you should be mirroring.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/design-website-five-senses/",
    Article_Title: "Can You Design A Website For The Five Senses?",
    Date: "august 4, 2020",
    Author: "Suzanne Scacca",
    Description:
      "In this article, we’ll take a look at five ways you can use the senses to put your visitors in a better headspace when they enter your site and interact with your brand.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/redesigning-mobile-app/",
    Article_Title: "Is Redesigning Your Mobile App A Bad Idea?",
    Date: "july 14, 2020",
    Author: "Suzanne Scacca",
    Description:
      "The Scrabble GO, Instacart and YouTube mobile apps have recently undergone disruptive redesigns. Were they worth it in the end? Let’s take a look at the mistakes made and the lessons we can extract from them.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/information-architecture-big-picture/",
    Article_Title: "Information And Information Architecture: The BIG Picture",
    Date: "july 1, 2020",
    Author: "Carrie Webster",
    Description:
      "Information architecture is the process of categorizing and organizing information to create structure and meaning. To give this context, this article explores not only the basics of information architecture, but also the broader view of the information age, how we use information and how it impacts our world and our lives. Understanding the bigger picture enables us to get a much clearer perception of the value that good information architecture delivers to help our information-overloaded lives.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/web-designers-help-restaurants-digital-experiences/",
    Article_Title:
      "How Web Designers Can Help Restaurants Move Into Digital Experiences",
    Date: "june 23, 2020",
    Author: "Suzanne Scacca",
    Description:
      "The restaurant industry has begun to undergo a major digital transformation. Those that want to survive will need a website that can handle the new way of operating, which means they can no longer afford to hold onto that cheap website built years ago.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/vitruvius-web-design/",
    Article_Title: "What Vitruvius Can Teach Us About Web Design",
    Date: "june 19, 2020",
    Author: "Frederick O’Brien",
    Description: "The ancients can teach us a thing or two about design",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/website-stressing-out-visitors/",
    Article_Title: "Is Your Website Stressing Out Visitors?",
    Date: "june 10, 2020",
    Author: "Suzanne Scacca",
    Description:
      "Stress isn’t just something that makes people feel uncomfortable. There are many things that might invoke this response from your visitors, including the design. In this article, we’re going to look at some ways to de-stress your design.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/user-interview-questions/",
    Article_Title: "12 Ways To Improve User Interview Questions",
    Date: "june 9, 2020",
    Author: "Slava Shestopalov",
    Description:
      "Right questions don’t simply roll off the tongue, but it’s a handy skill everyone can train. The following pieces of advice will help you to formulate questions that foster reliable answers from your users and clients.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/equivalent-experiences-part2/",
    Article_Title: "Equivalent Experiences: Thinking Equivalently",
    Date: "june 5, 2020",
    Author: "Eric Bailey",
    Description:
      "Constructing an equivalent experience may mean changing the way you think about development and design, and potentially reevaluating your existing work. In this article, we’ll address common accessibility issues, and how to best go about improving them so everyone can effortlessly access your content.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/test-design-concept-effectiveness/",
    Article_Title: "How To Test A Design Concept For Effectiveness",
    Date: "june 4, 2020",
    Author: "Paul Boag",
    Description:
      "Getting a client or stakeholder to approve a design concept can be challenging. However, testing can make it easier, as well as ensuring you have the right solution.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/research-study-double-diamond-model/",
    Article_Title:
      "How To Run The Right Kind Of Research Study With The Double-Diamond Model",
    Date: "may 29, 2020",
    Author: "Steve Bromley",
    Description:
      "This article equips you with some of the tools you will need to run high quality, reliable studies that have a real impact on design and product decisions.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/equivalent-experiences-part1/",
    Article_Title: "Equivalent Experiences: What Are They?",
    Date: "may 27, 2020",
    Author: "Eric Bailey",
    Description:
      "An equivalent experience is one that has been deliberately conceived of and built to be able to be used by the widest possible range of people. To create an equivalent experience, you must understand all the different ways people interact with technology.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/data-visualization-mobile-web-experience/",
    Article_Title: "Can Data Visualization Improve The Mobile Web Experience?",
    Date: "may 19, 2020",
    Author: "Suzanne Scacca",
    Description:
      "In this article, Suzanne Scacca proposes some ways to turn essential content into graphics to conserve space, create a more engaging UI and preserve the overall integrity of your content on mobile.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2020/05/accessible-images/",
    Article_Title: "Accessible Images For When They Matter Most",
    Date: "may 15, 2020",
    Author: "Carie Fisher",
    Description:
      "In this article, we will review the different types of images, dive into some real-world examples of inaccessible public service announcements, and discuss which elements matter most when critical messages need to reach everyone.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/convince-others-against-dark-patterns/",
    Article_Title: "How To Convince Others Not To Use Dark Patterns",
    Date: "may 13, 2020",
    Author: "Paul Boag",
    Description:
      "Arguing that dark patterns are unethical is not enough on its own. We will also need to make the case to clients and colleagues that they are damaging to business.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/micro-typography-space-kern-punctuation-marks-symbols/",
    Article_Title:
      "Micro-Typography: How To Space And Kern Punctuation Marks And Other Symbols",
    Date: "may 12, 2020",
    Author: "Thomas Bohm",
    Description:
      "For hundreds of years, we have been using white space in typography. Today, in 2020, how do we add spacing to punctuation marks and other symbols, and how do we adjust the space on the left and right side in an easy and consistent way? It is actually not as easy and quick as it should be.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/reducing-design-risk/",
    Article_Title: "Reducing Design Risk",
    Date: "may 7, 2020",
    Author: "Eric Olive",
    Description:
      "The pressure to rush market and usability research carries risk. In this article, we’ll cover four practical techniques to mitigate this risk and create designs that better serve customers and the company.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/04/landing-page-design/",
    Article_Title: "How To Create A Compelling Landing Page",
    Date: "april 21, 2020",
    Author: "Paul Boag",
    Description:
      "Creating a compelling landing page involves a combination of clear focus, persuasive copy, considered design and relentless testing. Without all four your page will fail.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/04/structured-data-design-process/",
    Article_Title: "Baking Structured Data Into The Design Process",
    Date: "april 9, 2020",
    Author: "Frederick O’Brien",
    Description:
      "Retrofitting search engine optimization only gets you so far. As metadata gets smarter, it’s more important than ever to build it into the design process from the start.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/03/web-design-trend-popular/",
    Article_Title:
      "What Should You Do When A Web Design Trend Becomes Too Popular?",
    Date: "march 31, 2020",
    Author: "Suzanne Scacca",
    Description:
      "This guide aims to help you figure out which approach makes the most sense when considering popular design trends for your site.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/03/ethical-design-handbook-release/",
    Article_Title:
      "Make Honest Design Work For Digital Business, With “Ethical Design Handbook”",
    Date: "march 10, 2020",
    Author: "Vitaly Friedman",
    Description:
      "Meet “Ethical Design Handbook”, our new practical guide on how to help companies grow sustainably with honest digital products. Without dark patterns, with ethics in mind, and ready for GDPR and CCPA.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/02/foldable-web-meaning/",
    Article_Title: "What Does A Foldable Web Actually Mean?",
    Date: "february 26, 2020",
    Author: "Frederick O’Brien",
    Description:
      "Foldable devices have brought with them talk of a ‘foldable web,’ and the idea that long-standing web conventions may be on the verge of a serious shakeup. Is it all hype, or is it time to get flexible?",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/02/design-mobile-apps-one-hand-usage/",
    Article_Title: "How To Design Mobile Apps For One-Hand Usage",
    Date: "february 20, 2020",
    Author: "Maitrik Kataria",
    Description:
      "90% of the smartphones sold today have >5-inch displays. Bigger screen real estate presents newer challenges and opportunities for app makers and designers. Let’s look at how designing apps for one-handed usage can solve those challenges.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/01/design-powerful-narratives-mobile/",
    Article_Title: "How To Design Powerful Narratives On Mobile",
    Date: "january 27, 2020",
    Author: "Suzanne Scacca",
    Description:
      "Want to build a website or PWA that attracts a large audience and then converts as much of that audience into paying customers as possible? If that’s the case, what you need to do is use storytelling in your design.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/12/beyond-sprint-alternative-integrating-teams/",
    Article_Title: "Beyond Sprint 0: An Alternative For Integrating Teams",
    Date: "december 24, 2019",
    Author: "Shamsi Brinn",
    Description:
      "Sprint 0, and its close cousin the design sprint, came about to solve real, everyday challenges. But do they deliver real value or just an illusion? In this article, Shamsi Brinn proposes an alternative first sprint that supports agile teamwork and delivers measurable results.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/12/voice-skills-google-assistant-amazon-alexa/",
    Article_Title:
      "Creating Voice Skills For Google Assistant And Amazon Alexa",
    Date: "december 23, 2019",
    Author: "Tris Tolliday",
    Description:
      "Voice assistants are hopping out of emerging tech and into everyday life. As a front end developer, you already have the skills to build one, so let’s dive into the platforms.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/12/brand-illustration-systems-visual-identity/",
    Article_Title:
      "Brand Illustration Systems: Drawing A Strong Visual Identity",
    Date: "december 9, 2019",
    Author: "Yihui Liu",
    Description:
      "Brand illustrations are an adaptable and effective way to build a company’s visual brand. In this article, Yihui Liu outlines her process for developing a strong brand illustration system.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/11/fomo-increase-conversions/",
    Article_Title: "How To Use FOMO To Increase Conversions",
    Date: "november 21, 2019",
    Author: "Suzanne Scacca",
    Description:
      "What if we removed “fear” from the “fear of missing out” and put the good parts of this marketing strategy to use in web and app design? This article unpacks four ways you can use (F)OMO when designing digital experiences.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/11/expanding-contracting-content-panels/",
    Article_Title: "Make Your Own Expanding And Contracting Content Panels",
    Date: "november 19, 2019",
    Author: "Ben Frain",
    Description:
      "In UI/UX, a common pattern that’s needed time and again is that of a simple animated opening and closing panel, or ‘drawer’. You don’t need a library to make these. With some basic HTML/CSS and JavaScript, we’re going to learn how to do it ourselves.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/11/stop-analysis-paralysis-design/",
    Article_Title: "How To Stop Analysis Paralysis With Design",
    Date: "november 11, 2019",
    Author: "Suzanne Scacca",
    Description:
      "When it comes to putting our visitors on the spot, giving them too many options hurts their decision-making ability along with how they feel about the experience as a whole.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/11/online-environments-older-users/",
    Article_Title:
      "Creating Online Environments That Work Well For Older Users",
    Date: "november 4, 2019",
    Author: "Barry Rueger",
    Description:
      "A significant part of the Internet-using population is aged 50 or older",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/10/signs-website-haunted-house-welcoming-home/",
    Article_Title:
      "Signs Your Website Feels More Like A Haunted House Than A Welcoming Home",
    Date: "october 31, 2019",
    Author: "Suzanne Scacca",
    Description:
      "What is it that makes a haunted house feel so disturbing? Is it the fact that it’s been long abandoned? That it’s riddled with dark and twisty hallways? That it simulates danger? Or maybe it’s the low-quality construction that makes people nervous? We’re going to take these frightening characteristics and spin them around for the web. After all, what is a website, but a digital house? (Let’s just make sure yours doesn’t feel haunted!)",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/10/users-expectations-story-principles/",
    Article_Title:
      "Great Expectations: Using Story Principles To Anticipate What Your User Expects",
    Date: "october 21, 2019",
    Author: "John Rhea",
    Description:
      "When someone reads a story, they have certain expectations about how that story will unfold. And they have them even if they don’t know how to articulate them. The same is true about users coming to our websites. We can pull principles from storytelling to help us meet and, hopefully, exceed those user expectations.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/10/text-to-speech-aws-part-2/",
    Article_Title: "Text-To-Speech And Back Again With AWS (Part 2)",
    Date: "october 2, 2019",
    Author: "Philip Kiely",
    Description:
      "In this article, we will use speech-to-text to draft transcripts of podcasts and interviews for publication. We’ll also evaluate the overall accuracy of these format-transformation technologies by running a few samples through round-trip transcriptions.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/09/creating-tables-in-figma/",
    Article_Title: "Creating Tables In Figma",
    Date: "september 25, 2019",
    Author: "Sasha Belichenko",
    Description:
      "This is a detailed guide for those who are struggling with tables in Figma. We’ll create a table using components, so that later on you could save a lot of time on scalability and edits. Moreover, you’ll be able to easily integrate the table into your design system.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2019/09/ai-climate-change/",
    Article_Title: "How AI Is Helping Solve Climate Change",
    Date: "september 19, 2019",
    Author: "Nicholas Farmen",
    Description:
      "Climate change is a complex problem that cannot be solved with a swift flick of a biodegradable, magic wand. But certain environmental issues can be solved with the right code. That’s where you come in.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/09/machine-learning-front-end-developers-tensorflowjs/",
    Article_Title:
      "Machine Learning For Front-End Developers With Tensorflow.js",
    Date: "september 9, 2019",
    Author: "Charlie Gerard",
    Description:
      "Using JavaScript and frameworks like Tensorflow.js is a great way to get started and learn more about machine learning. In this article, Charlie Gerard covers the three main features currently available using Tensorflow.js and sheds light onto the limits of using machine learning in the frontend.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/08/text-to-speech-aws/",
    Article_Title: "Text-To-Speech With AWS (Part 1)",
    Date: "august 1, 2019",
    Author: "Philip Kiely",
    Description:
      "Text-to-speech can help you create more versatile, accessible content. You could purchase recording equipment and spend hours recording and editing each narration, but if you want most of the benefit for only a couple of minutes and a few pennies per post, consider using AWS instead. This article will demonstrate how to use Amazon Polly to narrate your content.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/07/web-on-50mb-budget/",
    Article_Title: "I Used The Web For A Day On A 50 MB Budget",
    Date: "july 29, 2019",
    Author: "Chris Ashton",
    Description:
      "Data can be prohibitively expensive, especially in developing countries. Chris Ashton puts himself in the shoes of someone on a tight data budget and offers practical tips for reducing our websites’ data footprint.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/07/integrate-social-media-mobile-web-design/",
    Article_Title: "How To Integrate Social Media Into Mobile Web Design",
    Date: "july 4, 2019",
    Author: "Suzanne Scacca",
    Description:
      "Social media communication is unlike any other. It’s abbreviated. It’s personal. And it’s driven by visuals. Doesn’t that sound a lot like what a mobile website or PWA would benefit from?",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/06/better-search-ux-microcopy/",
    Article_Title: "Better Search UX Through Microcopy",
    Date: "june 28, 2019",
    Author: "Andrew Millen",
    Description:
      "For large-scale and e-commerce sites, the search experience is an increasingly critical tool. You can vastly improve the experience for users with thoughtful microcopy and the right contextualization.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/06/design-mobile-emails-increase-on-site-conversion/",
    Article_Title: "Design Your Mobile Emails To Increase On-Site Conversion",
    Date: "june 21, 2019",
    Author: "Suzanne Scacca",
    Description:
      "Just as you now approach web design with a mobile-first mentality, the same switch should occur as you design email marketing campaigns for your clients. Here are some facts and tips you need to know for designing mobile-first emails.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/06/ux-optimizations-keyboard-only-assistive-technology-users/",
    Article_Title:
      "UX Optimizations For Keyboard-Only And Assistive Technology Users",
    Date: "june 11, 2019",
    Author: "Aaron Pearlman",
    Description:
      "Accessibility forces you to see and think about your application beyond the typical sighted, mouse-based user experience. In this article, we’ll dig into some specific, practical examples.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/06/web-accessibility-context/",
    Article_Title: "Web Accessibility In Context",
    Date: "june 7, 2019",
    Author: "Be Birchall",
    Description:
      "In this article, Be Birchall explains why it’s so important to prioritize accessibility among teams and why there needs to be more awareness raised among developers.",
    Topic: "UX DESIGN",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/04/building-video-streaming-app-nuxtjs-node-express/",
    Article_Title:
      "Building A Video Streaming App With Nuxt.js, Node And Express",
    Date: "april 13, 2021",
    Author: "Deven Rathore",
    Description:
      "In this article, we’ll be building a video streaming app using Nuxt.js and Node.js. Specifically, we’ll build a server-side Node.js app that will handle fetching and streaming videos, generating thumbnails for your videos, and serving captions and subtitles.",
    Topic: "VUE",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2021/03/reactivity-in-vue/",
    Article_Title: "Reactivity In Vue",
    Date: "march 25, 2021",
    Author: "Timi Omoyeni",
    Description:
      "Reactivity is the ability for a variable (array, string, number, object, etc) to update when its value or any other variable that it makes reference to is changed after declaration.",
    Topic: "VUE",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2020/12/vuex-library/",
    Article_Title: "What’s Coming To VueX?",
    Date: "december 24, 2020",
    Author: "Joseph Zimmerman",
    Description:
      "Vuex is the go-to state management library for Vue applications, and the Vue core team has some big plans to make it better than ever. Here’s a preview of where they are looking to take it.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/vue-applications-vue-testing-library/",
    Article_Title: "Testing Vue Applications With The Vue Testing Library",
    Date: "november 24, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "The Vue Testing library can help you to test your applications by mirroring the way that a user would interact with them. Here’s everything you need to know if you want to get started right away.",
    Topic: "VUE",
  },
  {
    Article_Link: "https://www.smashingmagazine.com/2020/11/new-vue3-update/",
    Article_Title: "What’s New In Vue 3?",
    Date: "november 13, 2020",
    Author: "Timi Omoyeni",
    Description:
      "In this article, we’re going to take a look at some of these new features and how to get started with them. We’re also going be taking a look at some of the changes done to the existing features.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/authentication-in-vue-js/",
    Article_Title: "Authentication In Vue.js",
    Date: "october 27, 2020",
    Author: "Precious Ndubueze",
    Description:
      "This article is aimed at beginner developers who want to learn about authentication in Vue. In order to be able to follow along, you’ll need to have a good knowledge of Vue and Vuex.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/smashing-podcast-episode-26/",
    Article_Title:
      "Smashing Podcast Episode 26 With Natalia Tepluhina: What’s New In Vue 3.0?",
    Date: "october 6, 2020",
    Author: "Drew McLellan",
    Description:
      "We’re talking all about VueJS. What’s new in the 3.0 release, and how hard will it be to migrate? Drew McLellan talks to core team member Natalia Tepluhina to find out.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/useful-tools-vue-javascript-web-development/",
    Article_Title: "Useful Tools In Vue.js Web Development",
    Date: "october 5, 2020",
    Author: "Timi Omoyeni",
    Description:
      "There are some tools that developers that are just getting started with Vue or sometimes, have experience building with Vue sometimes do not know exist to make development in Vue a lot easier. In this article, we’re going to look at a few of these libraries, what they do, and how to use them during development.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/vue-router-features/",
    Article_Title: "How To Do More With Vue Router",
    Date: "august 31, 2020",
    Author: "Timi Omoyeni",
    Description:
      "In this tutorial, we’re going to learn about some amazing features the Vue Router has and how we can make use of them in our app.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/desktop-apps-electron-vue-javascript/",
    Article_Title: "Building Desktop Apps With Electron And Vue",
    Date: "july 21, 2020",
    Author: "Timi Omoyeni",
    Description:
      "In this tutorial, Timi Omoyeni explains what you need to keep in mind when building a desktop application with Vue.js using the Vue CLI Plugin Electron Builder.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/accessible-front-end-application-chakra-ui-nuxtjs/",
    Article_Title:
      "How To Build An Accessible Front-End Application With Chakra UI And Nuxt.js",
    Date: "july 20, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "In this article, we are going to be looking at how to use Chakra UI and NuxtJS in building accessible front-end applications.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/css-transitions-vuejs-nuxtjs/",
    Article_Title: "CSS Transitions In Vuejs And Nuxtjs",
    Date: "july 10, 2020",
    Author: "Timi Omoyeni",
    Description:
      "Transitions are a nice way to remove, change, or update data in an application because their occurrence adds a nice effect and is good for the user experience. In this tutorial, we’ll look at the different ways to apply transitions in both Vue.js and Nuxt.js applications.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/tiny-desktop-apps-tauri-vuejs/",
    Article_Title: "Creating Tiny Desktop Apps With Tauri And Vue.js",
    Date: "july 8, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "Tauri is a toolchain for creating small, fast, and secure desktop apps from your existing HTML, CSS, and JavaScript. In this article, Kelvin explains how Tauri plays well with the progressive framework Vue.js by integrating both technologies in bundling an example web app called nota as a native application.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/06/internationalization-vue-i18n/",
    Article_Title: "Internationalization In Vue With The Vue I18n Plugin",
    Date: "june 12, 2020",
    Author: "Timi Omoyeni",
    Description:
      "Adding Internationalization to your Vue.js application has a lot of use cases and in this tutorial, we’re going to learn how to do this with the Vue I18n plugin and how to set it up in our application.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/getting-started-axios-nuxt/",
    Article_Title: "Getting Started With Axios In Nuxt",
    Date: "may 26, 2020",
    Author: "Timi Omoyeni",
    Description:
      "In this tutorial, we will learn how to make a request in our Nuxt.js applications using the Axios module. We will also learn how to use the ayncData and fetch methods to fetch data on the server-side and the differences between the two methods.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/vue-survey-app-firebase-authentication-database/",
    Article_Title:
      "How To Build A Vue Survey App Using Firebase Authentication And Database",
    Date: "may 8, 2020",
    Author: "David Atanda",
    Description:
      "This tutorial would take you on a step by step guide to build a functional survey app using Vue.js and Firebase. From validating the user’s data through Vuelidate, to authentication, storing the user’s data, route protection and sending data to Firebase servers. All the steps used in the tutorial are practical, and can be reproduced in any real-life project, even with a custom backend.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/04/miraje-js-models-associations/",
    Article_Title:
      "Mirage JS Deep Dive: Understanding Mirage JS Models And Associations (Part 1)",
    Date: "april 30, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "In this first part of the Mirage JS Deep Dive series, we will be looking at Mirage JS models and associations. We’ll take a closer look at what they are and the roles they play in crafting out production-ready frontend without an actual backend with Mirage JS.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/04/getting-started-nuxt/",
    Article_Title: "Getting Started With Nuxt",
    Date: "april 27, 2020",
    Author: "Timi Omoyeni",
    Description:
      "In this tutorial, we’re going to learn how to create server-side rendered applications by using Nuxt.js, how to configure your application for development, and how to deploy to Heroku.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/02/music-manager-nuxtjs-expressjs/",
    Article_Title: "How To Build A Music Manager With Nuxt.js And Express.js",
    Date: "february 27, 2020",
    Author: "Deven Rathore",
    Description:
      "This article introduces how Multer streamlines the process of handling file uploads. It also introduces how to use Mongoose to interact with our database by building a music manager app using Express.js alongside Multer for the music upload and Nuxt.js (Vue framework) for our frontend.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/02/api-mocking-mirage-vue-javascript/",
    Article_Title: "Setting Up API Mocking With Mirage JS And Vue.js",
    Date: "february 13, 2020",
    Author: "Kelvin Omereshone",
    Description:
      "This article introduces Mirage JS, an API mocking library that lets you build, test and share a complete working JavaScript application without having to rely on any backend API or services. You’ll also learn how to set up Mirage JS with the progressive front-end framework, Vue.js.",
    Topic: "VUE",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/03/solutions-mobile-design-boost-user-experience/",
    Article_Title: "Obscure Mobile Design Techniques That Boost UX",
    Date: "march 8, 2021",
    Author: "Gert Svaiko",
    Description:
      "To inspire mobile designers, let’s look at how some clever design solutions tackle mobile navigation, confirmation dialogs, animations, and gamifying the waiting experience.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/02/material-design-text-fields/",
    Article_Title: "Material Design Text Fields Are Badly Designed",
    Date: "february 24, 2021",
    Author: "Adam Silver",
    Description:
      "Where to put the label in a web form? In the early days, we talked about left-aligned labels versus top-aligned labels. These days we talk about floating labels. Let’s explore why they aren’t a very good idea, and what to use instead.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/02/designing-tooltips-mobile-user-interfaces/",
    Article_Title: "Designing Better Tooltips For Mobile User Interfaces",
    Date: "february 3, 2021",
    Author: "Eric Olive",
    Description:
      "Tooltips are powerful design patterns implemented to enhance the design experience by providing additional information precisely when users need it. Sometimes, however, tooltips are obtrusive, especially on mobile devices where available space is at a premium.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2021/01/web-design-trends-report-2021/",
    Article_Title: "Web Design Trends 2021: The Report",
    Date: "january 15, 2021",
    Author: "Suzanne Scacca",
    Description:
      "2020 was anything but normal. Consumers had their lives shaken up and many businesses experienced new challenges as well as opportunities thanks to the novel events of the year.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/11/best-practices-ecommerce-ui-design/",
    Article_Title: "Best Practices For E-Commerce UI Design",
    Date: "november 10, 2020",
    Author: "Suzanne Scacca",
    Description:
      "In this article, we look at three key parts of a digital store and what you can do to design each to help customers more quickly and effortlessly get to the checkout stage.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/design-shopping-workflow-showcase/",
    Article_Title:
      "Design Shopping: Get A Faster Client Buy-In Through A Guided Design Showcase",
    Date: "october 13, 2020",
    Author: "Kelly Schummer",
    Description:
      "How can you convince your clients to make a faster (and easier) buy-in? With the help of a guided design exercise, Kelly Schummer explains how the Design Shopping workflow can help guide you throughout the design phases.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/10/website-policy-disclosure-pages/",
    Article_Title:
      "Do Website Policy Disclosure Pages Always Have To Be So Ugly?",
    Date: "october 6, 2020",
    Author: "Suzanne Scacca",
    Description:
      "In this article, we’re going to look at four ways that web designers can contribute to getting more policy disclosure pages read and terms actually agreed to.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/08/tips-customer-centric-landing-pages/",
    Article_Title: "How To Create Customer-Centric Landing Pages",
    Date: "august 25, 2020",
    Author: "Travis Jamison",
    Description:
      "Customer needs should be one of the primary considerations when designing a website or landing page.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/07/redesigning-mobile-app/",
    Article_Title: "Is Redesigning Your Mobile App A Bad Idea?",
    Date: "july 14, 2020",
    Author: "Suzanne Scacca",
    Description:
      "The Scrabble GO, Instacart and YouTube mobile apps have recently undergone disruptive redesigns. Were they worth it in the end? Let’s take a look at the mistakes made and the lessons we can extract from them.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/05/convince-others-against-dark-patterns/",
    Article_Title: "How To Convince Others Not To Use Dark Patterns",
    Date: "may 13, 2020",
    Author: "Paul Boag",
    Description:
      "Arguing that dark patterns are unethical is not enough on its own. We will also need to make the case to clients and colleagues that they are damaging to business.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/04/landing-page-design/",
    Article_Title: "How To Create A Compelling Landing Page",
    Date: "april 21, 2020",
    Author: "Paul Boag",
    Description:
      "Creating a compelling landing page involves a combination of clear focus, persuasive copy, considered design and relentless testing. Without all four your page will fail.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/02/design-mobile-apps-one-hand-usage/",
    Article_Title: "How To Design Mobile Apps For One-Hand Usage",
    Date: "february 20, 2020",
    Author: "Maitrik Kataria",
    Description:
      "90% of the smartphones sold today have >5-inch displays. Bigger screen real estate presents newer challenges and opportunities for app makers and designers. Let’s look at how designing apps for one-handed usage can solve those challenges.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2020/01/mobile-pwa-sticky-bars-elements/",
    Article_Title: "How To Decide Which PWA Elements Should Stick",
    Date: "january 2, 2020",
    Author: "Suzanne Scacca",
    Description:
      "Are you using sticky elements on your mobile website or PWA? If so, take a moment and ask yourself this question: Do you have anything in them besides your logo, hamburger menu or search bar?",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/12/things-stop-doing-mobile-app-design/",
    Article_Title: "5 Things To Stop Doing In Mobile App Design",
    Date: "december 30, 2019",
    Author: "Suzanne Scacca",
    Description:
      "Have you ever looked at the design techniques and elements you use to build mobile apps and evaluated whether or not they’re still useful or relevant? If you haven’t done this in a while (or ever), stop what you’re doing and read this. We’re going to look at the 5 things mobile app designers should stop doing so they can create more streamlined and positive user experiences.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/11/newspapers-teach-web-design/",
    Article_Title: "What Newspapers Can Teach Us About Web Design",
    Date: "november 8, 2019",
    Author: "Frederick O’Brien",
    Description:
      "Before the home page, there was the front page. From the Gutenberg Principle to grid systems to above the fold, newspapers teach us much about the foundations of web design.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/10/signs-website-haunted-house-welcoming-home/",
    Article_Title:
      "Signs Your Website Feels More Like A Haunted House Than A Welcoming Home",
    Date: "october 31, 2019",
    Author: "Suzanne Scacca",
    Description:
      "What is it that makes a haunted house feel so disturbing? Is it the fact that it’s been long abandoned? That it’s riddled with dark and twisty hallways? That it simulates danger? Or maybe it’s the low-quality construction that makes people nervous? We’re going to take these frightening characteristics and spin them around for the web. After all, what is a website, but a digital house? (Let’s just make sure yours doesn’t feel haunted!)",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/08/bottom-navigation-pattern-mobile-web-pages/",
    Article_Title:
      "Bottom Navigation Pattern On Mobile Web Pages: A Better Alternative?",
    Date: "august 29, 2019",
    Author: "Arturas Leonovas",
    Description:
      "As our phones are getting bigger, we need to adjust how we build and design our websites. Is there something to learn from app design and tap bars? Can we fix the mobile navigation of our websites to have a lower interaction cost? In this article, we’ll find out.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/04/privacy-ux-aware-design-framework/",
    Article_Title: "Privacy UX: Privacy-Aware Design Framework",
    Date: "april 25, 2019",
    Author: "Vitaly Friedman",
    Description:
      "In this final article of the series, we’ll look into notifications UX and permission requests, and how we can design the experience around them better, with the user’s privacy in mind.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/04/privacy-better-notifications-ux-permission-requests/",
    Article_Title: "Privacy UX: Better Notifications And Permission Requests",
    Date: "april 18, 2019",
    Author: "Vitaly Friedman",
    Description:
      "This third article of the series explores some of the respectful ways on how to deal with cookie consent prompts, push notifications, and third-party tracking.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/04/privacy-ux-better-cookie-consent-experiences/",
    Article_Title: "Privacy UX: Better Cookie Consent Experiences",
    Date: "april 10, 2019",
    Author: "Vitaly Friedman",
    Description:
      "In this second part of the series, we’ll look into notorious GDPR cookie consent prompts, and how we can design the experience around them better",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/04/privacy-concerns-ux-web-forms/",
    Article_Title: "Privacy UX: Common Concerns And Privacy In Web Forms",
    Date: "april 4, 2019",
    Author: "Vitaly Friedman",
    Description:
      "This is the first part of a four-part series in which we’ll explore some of the respectful ways to approach privacy and data collection.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/02/complex-web-tables/",
    Article_Title: "How To Architect A Complex Web Table",
    Date: "february 6, 2019",
    Author: "Slava Shestopalov",
    Description:
      "Tables frequently appear on the web but aren’t easy to design and code. This illustrated guide explains the table anatomy and how to build a table, keeping in mind its future elaboration.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2019/01/table-design-patterns-web/",
    Article_Title: "Table Design Patterns On The Web",
    Date: "january 24, 2019",
    Author: "Huijing Chen",
    Description:
      "Tables are a design pattern for displaying large amounts of data in rows and columns, and have not yet seemed to fall out of favor, so let’s take a look at how we can create tables on the web in 2019.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2018/11/the-101-course-on-crafting-404-pages/",
    Article_Title: "The 101 Course On Crafting 404 Pages",
    Date: "november 1, 2018",
    Author: "Shelby Rogers",
    Description:
      "A 404 page should do more than apologize for poor navigation on behalf of your website. Here’s why making an effort with a 404 page could better your website’s chances of people coming back despite the inconvenience, and how to track those errors to reduce how often people see it.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2018/09/dark-patterns-and-other-design-no-nos-for-mobile/",
    Article_Title: "Dark Patterns And Other Design No-Nos For Mobile",
    Date: "september 24, 2018",
    Author: "Suzanne Scacca",
    Description:
      "The mobile web is a booming place right now, which means web designers are spending lots of time trying to figure out how to win over this particular class of users. One way not to do that? Dark patterns. While your company may get some superficial and short-term gains in the process, nothing good will come from it in the long-run.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2018/06/bringing-personality-back-to-the-web/",
    Article_Title:
      "Smashing Book 6 Excerpt: Bringing Personality Back To The Web",
    Date: "june 14, 2018",
    Author: "Vitaly Friedman",
    Description:
      "In times when everything is generic, how do we stand out without spending too much time and resources on elaborate art direction? Let’s explore a strategic guide for bringing back personality to the web, in regular real-life projects.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2018/06/ethics-of-persuasion/",
    Article_Title: "The Ethics Of Persuasion",
    Date: "june 5, 2018",
    Author: "Lyndon Cerejo",
    Description:
      "Nowadays, users are increasingly cautious of online and email scams, phishing attacks, and data breaches. This article provides food for thought for designers and developers to avoid crossing the ethical line to the dark side of persuasion.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2018/04/designing-tactile-experience/",
    Article_Title: "Designing For The Tactile Experience",
    Date: "april 2, 2018",
    Author: "Lucia Kolesárová",
    Description:
      "Have you noticed the alarming lack of touch stimuli in current technologies? With the help of this article, let’s aim to consider using more touch and motor skills when designing your very next product.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2018/03/ux-contact-forms-essentials-conversions/",
    Article_Title:
      "UX In Contact Forms: Essentials To Turn Leads Into Conversions",
    Date: "march 28, 2018",
    Author: "Kate Sipkina & Olga Ratinova",
    Description:
      "There’s always room for improvement. Start making a change today by improving your contact forms",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2018/02/designing-a-perfect-responsive-configurator/",
    Article_Title: "Designing A Perfect Responsive Configurator",
    Date: "february 19, 2018",
    Author: "Vitaly Friedman",
    Description:
      "How would you design a responsive car configurator? How would you deal with accessibility, navigation, real-time previews, interaction and performance? Let’s figure it out.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2018/01/customer-offboarding/",
    Article_Title: "Offboarding In The Online World",
    Date: "january 29, 2018",
    Author: "Christine Logan",
    Description:
      "Offboarding is something users come into contact with every time they complete an online transaction. Learn about the benefits offboarding can bring to your company and how to apply it in such a way that it is a good experience for all users.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2018/01/ghost-button-design/",
    Article_Title:
      "Ghost Button Design: Is This Really Still A Thing (And Why)?",
    Date: "january 8, 2018",
    Author: "Suzanne Scacca",
    Description:
      "Logic would dictate that ghost buttons are not good for web design. Yet, research shows us that visitors don’t necessarily see them that way.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2017/10/large-scale-design-system-us-government/",
    Article_Title:
      "Building A Large-Scale Design System For The U.S. Government (Case Study)",
    Date: "october 9, 2017",
    Author: "Maya Benari",
    Description:
      "Editor’s Note: We’ve been closely working with Maya on this article, and we’re happy to see the final result now being published on 18F. We highly encourage more teams to share the lessons they learned when building design systems or pattern libraries, and we’re always happy to support them in writing, editing and shaping that article. This post is a re-post of Maya’s final article. Today, there are nearly 30,000 U.S. federal websites with almost no consistency between them. Between the hundreds of thousands of government employees working in technology, there’s nothing in common with how these websites are built or maintained.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2017/08/designing-perfect-feature-comparison-table/",
    Article_Title: "Designing The Perfect Feature Comparison Table",
    Date: "august 15, 2017",
    Author: "Vitaly Friedman",
    Description:
      "For a price tag that meets a certain threshold or if we are particularly invested in the quality of a product, we want to be absolutely certain that we are making the right choice and are getting a good product for a good price. That’s where a feature comparison table makes all the difference.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2017/07/designing-perfect-slider/",
    Article_Title: "Designing The Perfect Slider",
    Date: "july 19, 2017",
    Author: "Vitaly Friedman",
    Description:
      "When we think about a slider, we usually imagine an image gallery slider, or the infamous carousel, or perhaps off-canvas navigation, with the overlay sliding in from the side. However, this article is not about those kinds of sliders. Instead, we’ll look into the fine details of designing better slider controls for selecting a value or a range of values. Think of price range sliders, 360-degree-view sliders, timeline sliders, health insurance quote calculators, or build-your-own-mobile-plan features.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2017/07/designing-perfect-date-time-picker/",
    Article_Title: "Designing The Perfect Date And Time Picker",
    Date: "july 5, 2017",
    Author: "Vitaly Friedman",
    Description:
      "Well, not every date picker fits every interface, just like not every interface actually needs a date picker. But when a date picker is required, quite often it’s just a bit too tedious and annoying to specify that one date, and too often it produces irrelevant results or even a zero-results page, although just a few minor refinements would make it much easier to use.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2017/06/designing-perfect-accordion-checklist/",
    Article_Title: "Designing The Perfect Accordion",
    Date: "june 21, 2017",
    Author: "Vitaly Friedman",
    Description:
      "Design patterns. An almost mythical phrase that often inspires either awe or resentment. As designers, we tend to think of design patterns as generic off-the-shelf solutions that can be applied to various contexts almost mechanically, often without proper consideration. Navigation? Off-canvas! Deals of the day? Carousel! You get the idea.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2016/10/how-to-build-honest-uis-and-help-users-make-better-decisions/",
    Article_Title:
      "How To Build Honest UIs And Help Users Make Better Decisions",
    Date: "october 19, 2016",
    Author: "Graeme Fulton",
    Description:
      "Many apps today, such as Google Now, Spotify and Amazon, make assumptions about user preferences based on personal data. They may even use this information to make decisions on our behalf, without any direct input from us. For example, Facebook tailors your news feed and Amazon recommends products",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2016/10/inclusive-design-patterns/",
    Article_Title:
      "Meet “Inclusive Front-End Design Patterns”, A New Smashing Book",
    Date: "october 18, 2016",
    Author: "Vitaly Friedman",
    Description:
      "We might not realize it, but as developers, we build inaccessible websites all the time. It’s not for the lack of care or talent though",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2016/07/ten-requirements-for-making-home-page-carousels-work-for-end-users/",
    Article_Title:
      "10 Requirements For Making Home Page Carousels Work For End Users (If Needed)",
    Date: "july 6, 2016",
    Author: "Christian Holst",
    Description:
      "Are home page carousels actually helpful to users? Or are they simply popular because they are an easy tool for solving internal discussions in large organizations about who gets to put their banner on the home page? The short answer is that home page carousels can work, but in practice the vast majority of implementations perform poorly with end users.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2016/05/smart-responsive-design-patterns-or-when-off-canvas-isnt-good-enough/",
    Article_Title:
      "Smart Responsive Design Patterns, Or When Off-Canvas Isn’t Good Enough",
    Date: "may 30, 2016",
    Author: "Vitaly Friedman",
    Description:
      "This article features some of the slightly more obscure design patterns, such as responsive car-builder interfaces, mega dropdown navigation, content grids, maps and charts, as well as responsive art direction.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2016/05/design-systems-responsive-design-sell-output-not-workflow/",
    Article_Title: "On Design Systems: Sell The Output, Not The Workflow",
    Date: "may 6, 2016",
    Author: "Vitaly Friedman",
    Description:
      "So how do you sell a design system to the client? How do you establish a shared commitment within the company to put a pattern library on the roadmap? As designers and developers, we often know and see the benefits of an overarching system that radiates consistency throughout the different experiences of a company. But sometimes it’s seen as a very unpredictable investment, and the value isn’t necessarily visible right away.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2016/01/is-the-internet-killing-creativity/",
    Article_Title: "Is The Internet Killing Creativity?",
    Date: "january 27, 2016",
    Author: "Espen Brunborg",
    Description:
      "The internet is a wonderful place (mostly). An unprecedented revolution in communication, it continues to empower more people to publish and share their knowledge than any other phenomenon in history. It is a limitless playground of ideas and unbridled creativity. Or is it? In 2014, Elliot Jay Stocks declared that designers have stopped dreaming. That we’ve stopped being creative. That every site looks the same. A crazy notion, considering the magnitude of tools and resources we have at our disposal. But Elliot’s been right before, and he’s not alone either.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2015/03/continuous-input-in-mobile-devices-pain-or-gain/",
    Article_Title: "Continuous Input In Mobile Devices: Pain Or Gain?",
    Date: "march 10, 2015",
    Author: "Igor Fastovski",
    Description:
      "Working with text has long been the domain of desktops and notebooks. Yet the screen size, resolution and software of mobile devices have improved in recent years, which has made typing a fairly large amount of text quite achievable. A number of apps and techniques are intended to make this task easier, thus increasing productivity and increasing the amount of text that can be comfortably created or edited on a mobile device.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2014/10/inventory-based-discrete-slider/",
    Article_Title: "Mobile Design Pattern: Inventory-Based Discrete Slider",
    Date: "october 8, 2014",
    Author: "Greg Nudelman & Daria Kempka",
    Description:
      "Sliders are cool. When they’re done well, customers love to interact with them. When they’re not done well, they can cause a lot of frustration (not to mention lost sales) by standing between your customers and what they want. And getting them wrong is surprisingly easy. In this article, we will present a solution, including the design and code, for a new type of Android slider to address common problems, along with a downloadable Android mini-app for you to try out. It’s a deep dive into sliders based on a chapter in Android Design Patterns. The experimental inventory-based slider we will look at would be at home in any application that asks for a price, a size, or any other faceted input within a widely distributed range.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2014/04/rethinking-mobile-tutorials-which-patterns-really-work/",
    Article_Title: "Rethinking Mobile Tutorials: Which Patterns Really Work?",
    Date: "april 22, 2014",
    Author: "Theresa Neil, Rich Malley",
    Description:
      "Pattern libraries are a great source of inspiration and education for designers. But common practice doesn’t always equal best practice. In this post, we’ll look at why many common tutorial patterns are ineffective and how you can leverage game design principles to increase user engagement.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2014/02/off-the-beaten-canvas-exploring-the-potential-of-the-off-canvas-pattern/",
    Article_Title:
      "Off The Beaten Canvas: Exploring The Potential Of The Off-Canvas Pattern",
    Date: "february 24, 2014",
    Author: "Kyle Peatt",
    Description:
      "The off-canvas flyout menu has taken over as the primary navigation pattern for mobile layouts",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2014/01/how-working-walls-unlock-creative-insight/",
    Article_Title: "Up On The Wall: How Working Walls Unlock Creative Insight",
    Date: "january 2, 2014",
    Author: "Laura Busche",
    Description:
      "Research wall, design wall, research board, ideation wall, inspiration board, moodboard, pinboard",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2013/10/incorporating-quiet-into-ux-design-process/",
    Article_Title: "Incorporating More Quiet Into The UX Design Process",
    Date: "october 9, 2013",
    Author: "Angela Craven and SuAnne Hall",
    Description:
      "Behind every successful design is a dynamic creative team, and it takes all kinds of personalities and skills to get the job done. However, the culture and expectations of a design agency are often largely centered on one outspoken, gregarious personality.",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://www.smashingmagazine.com/2013/05/typographic-design-patterns-practices-case-study-2013/",
    Article_Title:
      "Typographic Design Patterns And Current Practices (2013 Edition)",
    Date: "may 17, 2013",
    Author: "Jan Constantin",
    Description:
      "Good typography has always been a defining aspect of effective Web design, and this holds true especially for websites in which the emphasis is on presenting a large amount of content",
    Topic: "Design Patterns",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/attention-flubot-android-banking.html",
    Article_Title:
      "Attention! FluBot Android Banking Malware Spreads Quickly Across Europe",
    Date: "April 28, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Attention, Android users! A banking malware capable of stealing sensitive information is "spreading rapidly" across Europe, with the U.S. likely to be the next target. According to a new analysis by  Proofpoint , the threat actors behind FluBot (aka  Cabassous ) have branched out beyond Spain to target the U.K., Germany, Hungary, Italy, and Poland. The English-language campaign alone has been observed to make use of more than 700 unique domains, infecting about 7,000 devices in the U.K. In addition, German and English-language SMS messages were found being sent to U.S. users from Europe, which Proofpoint suspects could be the result of malware propagating via contact lists stored on compromised phones. A concerted campaign aimed at the U.S. is yet to be detected. FluBot, a nascent entry in the banking trojan landscape, began its operations late last year, with campaigns leveraging the malware infecting more than 60,000 users in Spain, according to an analysis published b',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/hackers-threaten-to-leak-dc-police.html",
    Article_Title:
      "Hackers Threaten to Leak D.C. Police Informants' Info If Ransom Is Not Paid",
    Date: "April 27, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "The Metropolitan Police Department (MPD) of the District of Columbia has become the latest high-profile government agency to fall victim to a ransomware attack. The Babuk Locker gang claimed in a post on the dark web that they had compromised the DC Police's networks and stolen 250 GB of unencrypted files. Screenshots shared by the group, and seen by The Hacker News, include various folders containing what appears to be investigation reports, arrests, disciplinary actions, and other intelligence briefings. Also called the DC Police, the MPD is the primary law enforcement agency for the District of Columbia in the U.S. The ransomware gang has given the department three days to heed to their ransom demand or risk leaking sensitive files that could expose police informants to criminal gangs. \"Hello! Even an institution such as DC can be threatened, we have downloaded a sufficient amount of information from your internal networks, and we advise you to contact us as soon as p",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/cybersecurity-webinar-understanding.html",
    Article_Title:
      "Cybersecurity Webinar: Understanding the 2020 MITRE ATT&CK Results",
    Date: "April 27, 2021",
    Author: "The Hacker News",
    Description:
      "The release of MITRE Engenuity's Carbanak+Fin7 ATT&CK evaluations every year is a benchmark for the cybersecurity industry. The organization's tests measure how well security vendors can detect and respond to threats and offers an independent metric for customers and security leaders to understand how well vendors perform on a variety of tasks. However, for the uninitiated, the results can be hard to decipher and contextualize properly. Unlike many benchmarks that compare participants in a competitive manner, MITRE's framework evaluates companies exclusively on how they respond to the tests. This means that customers must really know what they're looking for. A new webinar ( register here ) aims to provide some clarity on what to look for and how to interpret the results.  Cynet's new live webinar will dig a little deeper into the MITRE ATT&CK evaluation. The company's research team will break down how the evaluations work, what the results mean, an",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/hackers-exploit-0-day-gatekeeper-flaw.html",
    Article_Title:
      "Hackers Exploit 0-Day Gatekeeper Flaw to Attack macOS Computers",
    Date: "April 27, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Security is only as strong as the weakest link. As further proof of this, Apple released an update to macOS operating systems to address an actively exploited zero-day vulnerability that could circumvent all security protections, thus permitting unapproved software to run on Macs. The macOS flaw, identified as  CVE-2021-30657 , was discovered and reported to Apple by security engineer Cedric Owens on March 25, 2021. "An unsigned, unnotarized, script-based proof of concept application [...] could trivially and reliably sidestep all of macOS\'s relevant security mechanisms (File Quarantine, Gatekeeper, and Notarization Requirements), even on a fully patched M1 macOS system," security researcher Patrick Wardle  explained  in a write-up. "Armed with such a capability macOS malware authors could (and are) returning to their proven methods of targeting and infecting macOS users." Apple\'s macOS comes with a feature called  Gatekeeper , which allows only  truste',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/fbi-cisa-uncover-tactics-employed-by.html",
    Article_Title:
      "FBI, CISA Uncover Tactics Employed by Russian Intelligence Hackers",
    Date: "April 27, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'The U.S. Cybersecurity and Infrastructure Security Agency (CISA), Department of Homeland Security (DHS), and the Federal Bureau of Investigation (FBI) on Monday published a new joint advisory as part of their latest attempts to expose the tactics, techniques, and procedures (TTPs) adopted by the Russian Foreign Intelligence Service (SVR) in its attacks targeting the U.S and foreign entities. By employing "stealthy intrusion tradecraft within compromised networks," the intelligence agencies  said , "the SVR activity—which includes the recent  SolarWinds Orion supply chain compromise —primarily targets government networks, think tank and policy analysis organizations, and information technology companies and seeks to gather intelligence information." The cyber actor is also being tracked under different monikers, including Advanced Persistent Threat 29 (APT29), the Dukes, CozyBear, and Yttrium. The development comes as the U.S. sanctioned Russia and  formally pinn',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/minnesota-university-apologizes-for.html",
    Article_Title:
      "Minnesota University Apologizes for Contributing Malicious Code to the Linux Project",
    Date: "April 26, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Researchers from the University of Minnesota apologized to the maintainers of Linux Kernel Project on Saturday for intentionally including vulnerabilities in the project\'s code, which led to the school being banned from contributing to the open-source project in the future. "While our goal was to improve the security of Linux, we now understand that it was hurtful to the community to make it a subject of our research, and to waste its effort reviewing these patches without its knowledge or permission," assistant professor Kangjie Lu, along with graduate students Qiushi Wu and Aditya Pakki,  said  in an email. "We did that because we knew we could not ask the maintainers of Linux for permission, or they would be on the lookout for the hypocrite patches," they added. The apology comes over a study into what\'s called "hypocrite commits," which was  published  earlier this February. The project aimed to deliberately add  use-after-free  vulnerabil',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/apple-airdrop-bug-could-leak-your.html",
    Article_Title:
      "Apple AirDrop Bug Could Leak Your Personal Info to Anyone Nearby",
    Date: "April 26, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "New research has uncovered privacy weaknesses in Apple's wireless file-sharing protocol that could result in the exposure of a user's contact information such as email addresses and phone numbers. \"As an attacker, it is possible to learn the phone numbers and email addresses of AirDrop users – even as a complete stranger,\"  said  a team of academics from the Technical University of Darmstadt, Germany. \"All they require is a Wi-Fi-capable device and physical proximity to a target that initiates the discovery process by opening the sharing pane on an iOS or macOS device.\" AirDrop  is a proprietary ad hoc service present in Apple's iOS and macOS operating systems, allowing users to transfer files between devices by making use of close-range wireless communication. While this feature shows only receiver devices that are in users' contact lists by an authentication mechanism that compares an individual's phone number and email address with entrie",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/how-to-test-and-improve-your-domains.html",
    Article_Title: "How to Test and Improve Your Domain's Email Security?",
    Date: "April 26, 2021",
    Author: "The Hacker News",
    Description:
      "No matter which type of business you are in, whether small, medium, or large, email has become an irrefutable tool for communicating with your employees, partners, and customers. Emails are sent and received each day in bulk by companies from various sources. In addition, organizations may also employ third-party vendors who may be authorized to send emails on behalf of the company. As a result, it becomes increasingly difficult to distinguish between sources that are legitimate and malicious. Here's a solution – PowerDMARC. This SaaS platform helps you assess your  email authentication  protocols from time to time and see if your domain is secure against spoofing with a DMARC record checker, so you can make changes if necessary. Check Your Domain Today!  Use our free tool to examine your domain's DMARC, SPF, DKIM, BIMI, and MTA-STS records instantly to ensure your domain is protected from impersonation and email fraud! Importance of Having Robust Email Security in 2021 S",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/emotet-malware-destroys-itself-today.html",
    Article_Title: "Emotet Malware Destroys Itself From All Infected Computers",
    Date: "April 26, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Emotet, the notorious email-based Windows malware behind several botnet-driven spam campaigns and ransomware attacks, was automatically wiped from infected computers en masse following a European law enforcement operation. The development comes three months after a coordinated disruption of Emotet as part of " Operation Ladybird " to seize control of servers used to run and maintain the malware network. The orchestrated effort saw at least 700 servers associated with the botnet\'s infrastructure neutered from the inside, thus preventing further exploitation. Law enforcement authorities from the Netherlands, Germany, the U.S., U.K., France, Lithuania, Canada, and Ukraine were involved in the international action. Previously, the Dutch police, which seized two central servers located in the country, said it had deployed a software update to counter the threat posed by Emotet effectively. "All infected computer systems will automatically retrieve the update there, a',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/32-billion-leaked-passwords-contain-15.html",
    Article_Title:
      "3.2 Billion Leaked Passwords Contain 1.5 Million Records with Government Emails",
    Date: "April 26, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "A staggering number of 3.28 billion passwords linked to 2.18 billion unique email addresses were exposed in what's one of the largest data dumps of breached usernames and passwords. In addition, the leak includes 1,502,909 passwords associated with email addresses from government domains across the world, with the U.S. government alone taking up 625,505 of the exposed passwords, followed by the U.K (205,099), Australia (136,025), Brazil (68,535), and Canada (50,726). The findings come from an analysis of a massive 100GB data set called \"COMB21\" — aka Compilation of Many Breaches — that was published for free in an online cybercrime forum earlier this February by putting together data from multiple leaks in different companies and organizations that occurred over the years. It's worth noting that a leak doesn't imply a breach of public administration systems. The passwords are said to have been obtained via techniques such as password hash cracking after bein",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/critical-rce-bug-found-in-homebrew.html",
    Article_Title:
      "Critical RCE Bug Found in Homebrew Package Manager for macOS and Linux",
    Date: "April 24, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "A recently identified security vulnerability in the official Homebrew Cask repository could have been exploited by an attacker to execute arbitrary code on users' machines that have Homebrew installed. The issue, which was reported to the maintainers on April 18 by a Japanese security researcher named RyotaK, stemmed from the way code changes in its  GitHub repository  were handled, resulting in a scenario where a malicious  pull request  — i.e., the proposed changes — could be automatically reviewed and approved. The flaw was fixed on April 19. Homebrew is a free and open-source software package manager solution that allows the installation of software on Apple's macOS operating system as well as Linux. Homebrew  Cask  extends the functionality to include command-line workflows for GUI-based macOS applications, fonts, plugins, and other non-open source software. \"The discovered vulnerability would allow an attacker to inject arbitrary code into a cask and have it be",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/passwordstate-password-manager-update.html",
    Article_Title:
      "Passwordstate Password Manager Update Hijacked to Install Backdoor on Thousands of PCs",
    Date: "April 24, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Click Studios, the Australian software company behind the Passwordstate password management application, has notified customers to reset their passwords following a supply chain attack. The Adelaide-based firm said a bad actor used sophisticated techniques to compromise the software\'s update mechanism and used it to drop malware on user computers. The breach is said to have occurred between April 20, 8:33 PM UTC, and April 22, 0:30 AM UTC, for a total period of about 28 hours. "Only customers that performed In-Place Upgrades between the times stated above are believed to be affected," the company  said  in an advisory. "Manual Upgrades of Passwordstate are not compromised. Affected customers password records may have been harvested." The development was first reported by the Polish tech news site  Niebezpiecznik . It\'s not immediately clear who the attackers are or how they compromised the password manager\'s update feature. Click Studios said an i',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/new-qnap-nas-flaws-exploited-in-recent.html",
    Article_Title:
      "New QNAP NAS Flaws Exploited In Recent Ransomware Attacks - Patch It!",
    Date: "April 23, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'A new ransomware strain called " Qlocker " is targeting QNAP network attached storage (NAS) devices as part of an ongoing campaign and encrypting files in password-protected 7zip archives. First reports of the  infections   emerged on April 20, with the adversaries behind the operations demanding a bitcoin payment (0.01 bitcoins or about $500.57) to receive the decryption key. In response to the ongoing attacks, the Taiwanese company has released an advisory prompting users to apply updates to QNAP NAS running Multimedia Console, Media Streaming Add-on, and HBS 3 Hybrid Backup Sync to secure the devices from any attacks. "QNAP strongly urges that all users immediately install the latest Malware Remover version and run a malware scan on QNAP NAS," the company  said . "The Multimedia Console, Media Streaming Add-on, and Hybrid Backup Sync apps need to be updated to the latest available version as well to further secure QNAP NAS from ransomware attacks.',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/prometei-botnet-exploiting-unpatched.html",
    Article_Title:
      "Prometei Botnet Exploiting Unpatched Microsoft Exchange Servers",
    Date: "April 23, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Attackers are exploiting the ProxyLogon Microsoft Exchange Server flaws to co-opt vulnerable machines to a cryptocurrency botnet named Prometei, according to new research. "Prometei exploits the recently disclosed Microsoft Exchange vulnerabilities associated with the HAFNIUM attacks to penetrate the network for malware deployment, credential harvesting and more," Boston-based cybersecurity firm Cybereason  said  in an analysis summarizing its findings. First documented by Cisco Talos in July 2020,  Prometei  is a multi-modular botnet, with the actor behind the operation employing a wide range of specially-crafted tools and known exploits such as EternalBlue and BlueKeep to harvest credentials, laterally propagate across the network and "increase the amount of systems participating in its Monero-mining pool." "Prometei has both Windows-based and Linux-Unix based versions, and it adjusts its payload based on the detected operating system, on the targeted in',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/hackers-exploit-vpn-flaw-to-deploy.html",
    Article_Title:
      "Hackers Exploit VPN to Deploy SUPERNOVA malware on SolarWinds Orion",
    Date: "April 22, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has disclosed details of a new advanced persistent threat (APT) that's leveraging the Supernova backdoor to compromise SolarWinds Orion installations after gaining access to the network through a connection to a Pulse Secure VPN device. \"The threat actor connected to the entity's network via a Pulse Secure virtual private network (VPN) appliance, moved laterally to its SolarWinds Orion server, installed malware referred to by security researchers as SUPERNOVA (a .NET web shell), and collected credentials,\" the agency  said  on Thursday. CISA said it identified the threat actor during an incident response engagement at an unnamed organization and found that the attacker had access to the enterprise's network for nearly a year through the use of the VPN credentials between March 2020 and February 2021. Interestingly, the adversary is said to have used valid accounts that had multi-factor authent",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/researchers-find-additional.html",
    Article_Title:
      "Researchers Find Additional Infrastructure Used By SolarWinds Hackers",
    Date: "April 22, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'The sprawling  SolarWinds cyberattack  which came to light last December was known for its sophistication in the breadth of tactics used to infiltrate and persist in the target infrastructure, so much so that Microsoft went on to call the threat actor behind the campaign "skillful and methodic operators who follow operations security (OpSec) best practices to minimize traces, stay under the radar, and avoid detection." As further proof of this, new research published today shows that the threat actor carefully planned each stage of the operation to "avoid creating the type of patterns that make tracking them simple," thus deliberately making forensic analysis difficult. By analyzing telemetry data associated with previously published indicators of compromise, RiskIQ said it identified an additional set of 18 servers with high confidence that likely communicated with the targeted, secondary Cobalt Strike payloads delivered via the TEARDROP and RAINDROP malware, r',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/cost-of-account-unlocks-and-password.html",
    Article_Title: "Cost of Account Unlocks, and Password Resets Add Up",
    Date: "April 22, 2021",
    Author: "The Hacker News",
    Description:
      "There are many labor-intensive tasks that the IT service desk carries out on a daily basis. None as tedious and costly as resetting passwords. Modern IT service desks spend a significant amount of time both unlocking and resetting passwords for end-users. This issue has been exacerbated by the COVID-19 pandemic. Causes of account lockouts and password resets End-user password policies, such as those found in Microsoft Active Directory Domain Services (ADDS), typically define a  password age . The password age is the length of time an end-user can keep their current password. While  new guidance from NIST  recommends against the long-held notion of forced password changes, it is still a common and required security mechanism across other compliance standards and industry certifications such as PCI and HITRUST. When the password age is reached for the user account, the user must change their account password. It is generally prompted at the next login on their workstation. This sce",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/cybercriminals-using-telegram-messenger.html",
    Article_Title:
      "Cybercriminals Using Telegram Messenger to Control ToxicEye Malware",
    Date: "April 22, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Adversaries are increasingly abusing Telegram as a "command-and-control" system to distribute malware into organizations that could then be used to capture sensitive information from targeted systems. "Even when Telegram is not installed or being used, the system allows hackers to send malicious commands and operations remotely via the instant messaging app," said researchers from cybersecurity firm Check Point , who have identified no fewer than 130 attacks over the past three months that make use of a new multi-functional remote access trojan (RAT) called "ToxicEye." The use of Telegram for facilitating malicious activities is not new. In September 2019, an information stealer dubbed  Masad Stealer  was found to plunder information and cryptocurrency wallet data from infected computers using Telegram as an exfiltration channel. Then last year,  Magecart groups  embraced the same tactic to send stolen payment details from compromised websites back to',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/facebook-busts-palestinian-hackers.html",
    Article_Title:
      "Facebook Busts Palestinian Hackers' Operation Spreading Mobile Spyware",
    Date: "April 21, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "Facebook on Wednesday said it took steps to dismantle malicious activities perpetrated by two state-sponsored hacking groups operating out of Palestine that abused its platform to distribute malware. The social media giant attributed the attacks to a network connected to the Preventive Security Service ( PSS ), the security apparatus of the State of Palestine, and another threat actor known as Arid Viper (aka Desert Falcon and APT-C-23), the latter of which is alleged to be connected to the cyber arm of Hamas. The two digital espionage campaigns, active in 2019 and 2020, exploited a range of devices and platforms, such as Android, iOS, and Windows, with the PSS cluster primarily targeting domestic audiences in Palestine. The other set of attacks went after users in the Palestinian territories and Syria and, to a lesser extent Turkey, Iraq, Lebanon, and Libya. Both the groups appear to have leveraged the platform as a springboard to launch a variety of social engineering attacks in",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/hackers-threaten-to-leak-stolen-apple.html",
    Article_Title:
      "Hackers threaten to leak stolen Apple blueprints if $50 million ransom isn't paid",
    Date: "April 21, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Prominent Apple supplier Quanta on Wednesday said it suffered a ransomware attack from the REvil ransomware group, which is now demanding the iPhone maker pay a ransom of $50 million to prevent leaking sensitive files on the dark web. In a post shared on its deep web "Happy Blog" portal, the threat actor said it came into possession of schematics of the U.S. company\'s products such as MacBooks and Apple Watch by infiltrating the network of the Taiwanese manufacturer, claiming it\'s making a ransom demand to Apple after Quanta expressed no interest in paying to recover the stolen blueprints. "Our team is negotiating the sale of large quantities of confidential drawings and gigabytes of personal data with several major brands," the REvil operators said. "We recommend that Apple buy back the available data by May 1." Since first detected in June 2019,  REvil  (aka Sodinokibi or Sodin) has emerged as one of the most prolific ransomware-as-a-servic',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/improve-your-cyber-security-posture-by.html",
    Article_Title:
      "Improve Your Cyber Security Posture by Combining State of the Art Security Tools",
    Date: "April 21, 2021",
    Author: "The Hacker News",
    Description:
      "Today there are plenty of cybersecurity tools on the market. It is now more important than ever that the tools you decide to use work well together. If they don't, you will not get the complete picture, and you won't be able to analyze the entire system from a holistic perspective.  This means that you won't be able to do the right mitigations to improve your security posture. Here are examples of two tools that work very well together and how they will help you to get a holistic view of your cybersecurity posture.  Debricked - Use Open Source Securely How is Open Source a Security Risk?  Open source is not a security risk per se; it's more secure than proprietary software in many ways! With the code being publicly available, it's a lot easier for the surrounding community to identify vulnerabilities, and fixes can be done quickly. What you do need to keep in mind, though, is that any vulnerabilities in open source are publicly disclosed and the public to anyo",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/update-your-chrome-browser-immediately.html",
    Article_Title:
      "Update Your Chrome Browser ASAP to Patch a Week Old Public Exploit",
    Date: "April 21, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Google on Tuesday released an update for Chrome web browser for Windows, Mac, and Linux, with a total of seven security fixes, including one flaw for which it says an exploit exists in the wild. Tracked as CVE-2021-21224 , the flaw concerns a type confusion vulnerability in V8 open-source JavaScript engine that was reported to the company by security researcher Jose Martinez on April 5 According to security researcher  Lei Cao , the bug [ 1195777 ] is triggered when performing integer data type conversion, resulting in an out-of-bounds condition that could be used to achieve arbitrary memory read/write primitive. "Google is aware of reports that exploits for CVE-2021-21224 exist in the wild," Chrome\'s Technical Program Manager Srinivas Sista  said  in a blog post. The update comes after proof-of-concept (PoC) code exploiting the flaw published by a researcher named " frust " emerged on April 14 by taking advantage of the fact that the issue was addressed',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/3-zero-day-exploits-hit-sonicwall.html",
    Article_Title:
      "3 Zero-Day Exploits Hit SonicWall Enterprise Email Security Appliances",
    Date: "April 20, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "SonicWall has addressed three critical security vulnerabilities in its hosted and on-premises email security (ES) product that are being actively exploited in the wild. Tracked as CVE-2021-20021 and CVE-2021-20022, the  flaws  were discovered and reported to the company by FireEye's Mandiant subsidiary on March 26, 2021, after the cybersecurity firm detected post-exploitation web shell activity on an internet-accessible system within a customer's environment that had SonicWall's ES application running on a Windows Server 2012 installation. A third flaw (CVE-2021-20023) identified by FireEye was disclosed to SonicWall on April 6, 2021. FireEye is tracking the malicious activity under the moniker UNC2682. \"These vulnerabilities were executed in conjunction to obtain administrative access and code execution on a SonicWall ES device,\" researchers Josh Fleischer, Chris DiGiamo, and Alex Pennino  said . The adversary leveraged these vulnerabilities, with intimate",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/warning-hackers-exploit-unpatched-pulse.html",
    Article_Title:
      "WARNING: Hackers Exploit Unpatched Pulse Secure 0-Day to Breach Organizations",
    Date: "April 20, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'If Pulse Connect Secure gateway is part of your organization network, you need to be aware of a newly discovered critical zero-day authentication bypass vulnerability (CVE-2021-22893) that is currently being exploited in the wild and for which there is no patch available yet. At least two threat actors have been behind a series of intrusions targeting defense, government, and financial organizations in the U.S. and elsewhere by leveraging critical vulnerabilities in Pulse Secure VPN devices to circumvent multi-factor authentication protections and breach enterprise networks. "A combination of prior vulnerabilities and a previously unknown vulnerability discovered in April 2021,  CVE-2021-22893 , are responsible for the initial infection vector," cybersecurity firm FireEye  said  on Tuesday, identifying 12 malware families associated with the exploitation of Pulse Secure VPN appliances. The company is also tracking the activity under two threat clusters UNC2630 and UNC271',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/over-750000-users-download-new-billing.html",
    Article_Title:
      "Over 750,000 Users Downloaded New Billing Fraud Apps From Google Play Store",
    Date: "April 20, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Researchers have uncovered a new set of fraudulent Android apps in the Google Play store that were found to hijack SMS message notifications for carrying out billing fraud. The apps in question primarily targeted users in Southwest Asia and the Arabian Peninsula, attracting a total of 700,000 downloads before they were discovered and removed from the platform. The findings were reported independently by cybersecurity firms  Trend Micro  and  McAfee . "Posing as photo editors, wallpapers, puzzles, keyboard skins, and other camera-related apps, the malware embedded in these fraudulent apps hijack SMS message notifications and then make unauthorized purchases," researchers from McAfee said in a Monday write-up. The fraudulent apps belong to the so-called " Joker " (aka Bread) malware, which has been found to repeatedly sneak past Google Play defenses over the past four years, resulting in Google removing no fewer than 1,700 infected apps from the Play Store as of',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/ebook-why-autonomous-xdr-is-going-to.html",
    Article_Title: "[eBook] Why Autonomous XDR Is Going to Replace NGAV/EDR",
    Date: "April 20, 2021",
    Author: "The Hacker News",
    Description:
      'For most organizations today, endpoint protection is the primary security concern. This is not unreasonable – endpoints tend to be the weakest points in an environment – but it also misses the forest for the trees. As threat surfaces expand, security professionals are harder pressed to detect threats that target other parts of an environment and can easily miss a real vulnerability by focusing too hard on endpoints. This is why pairing tools such as next-generation antivirus (NGAV) and endpoint detection and response (EDR) has become a popular, if flawed, choice. Fortunately, newer technologies and security methods offer much greater prevention and detection capabilities. This is the key argument of a new eBook ( download here ) offered by XDR provider Cynet. The eBook, titled  Why Autonomous XDR is Going to Replace NGAV/EDR,  starts with a look at how NGAV and EDR tools can defend an organization with the "assume breach" mentality – expecting a breach to occur and protecting endpoi',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/120-compromised-ad-servers-target.html",
    Article_Title:
      "120 Compromised Ad Servers Target Millions of Internet Users",
    Date: "April 20, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'An ongoing malvertising campaign tracked as "Tag Barnakle" has been behind the breach of more than 120 ad servers over the past year to sneakily inject code in an attempt to serve malicious advertisements that redirect users to rogue websites, thus exposing victims to scamware or malware. Unlike other operators who set about their task by infiltrating the ad-tech ecosystem using "convincing personas" to buy space on legitimate websites for running the malicious ads, Tag Barnakle is "able to bypass this initial hurdle completely by going straight for the jugular — mass compromise of ad serving infrastructure,"  said  Confiant security researcher Eliya Stein in a Monday write-up. The development follows a year after the Tag Barnakle actor was found to have  compromised nearly 60 ad servers  in April 2020, with the infections primarily targeting an open-source advertising server called Revive. The latest slew of attacks is no different, although the adve',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/lazarus-apt-hackers-are-now-using-bmp.html",
    Article_Title:
      "Lazarus APT Hackers are now using BMP images to hide RAT malware",
    Date: "April 19, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'A spear-phishing attack operated by a North Korean threat actor targeting its southern counterpart has been found to conceal its malicious code within a bitmap (.BMP) image file to drop a remote access trojan (RAT) capable of stealing sensitive information. Attributing the attack to the  Lazarus Group  based on similarities to prior tactics adopted by the adversary, researchers from Malwarebytes said the phishing campaign started by distributing emails laced with a malicious document that it identified on April 13. "The actor has used a clever method to bypass security mechanisms in which it has embedded its malicious  HTA  file as a compressed  zlib  file within a PNG file that then has been decompressed during run time by converting itself to the BMP format," Malwarebytes researchers  said .  "The dropped payload was a loader that decoded and decrypted the second stage payload into memory. The second stage payload has the capability to receive and execute commands',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/passwordless-more-mirage-than-reality.html",
    Article_Title: "Passwordless: More Mirage Than Reality",
    Date: "April 19, 2021",
    Author: "The Hacker News",
    Description:
      "The concept of \"passwordless\" authentication has been gaining significant industry and media attention. And for a good reason. Our digital lives are demanding an ever-increasing number of online accounts and services, with security best practices dictating that each requires a strong, unique password in order to ensure data stays safe. Who wouldn't want an easier way? That's the premise behind one-time passwords (OTP), biometrics, pin codes, and other authentication methods presented as passwordless security. Rather than remembering cumbersome passwords, users can authenticate themselves using something they own, know, or are. Some examples include a smartphone, OTP, hardware token, or biometric marker like a fingerprint. While this sounds appealing on the surface, the problem is that, when you dig deeper, these passwordless solutions are still reliant on passwords. This happens in two primary ways: Passwordless Solutions Rely on Passwords as a Fallback If you ha",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/malware-spreads-via-xcode-projects-now.html",
    Article_Title:
      "Malware That Spreads Via Xcode Projects Now Targeting Apple's M1-based Macs",
    Date: "April 19, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "A Mac malware campaign targeting Xcode developers has been retooled to add support for Apple's new M1 chips and expand its features to steal confidential information from cryptocurrency apps. XCSSET came into the spotlight in  August 2020  after it was found to spread via modified Xcode IDE projects, which, upon the building, were configured to execute the payload. The malware repackages payload modules to imitate legitimate Mac apps, which are ultimately responsible for infecting local Xcode projects and injecting the main payload to execute when the compromised project builds. XCSSET modules come with the capabilities to steal credentials, capture screenshots, inject malicious JavaScript into websites, plunder user data from different apps, and even encrypt files for a ransom.  Then in March 2021, Kaspersky researchers  uncovered  XCSSET samples compiled for the new Apple M1 chips, suggesting that the malware campaign was not only ongoing but also that adversaries are  activ",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/sysadmin-of-billion-dollar-hacking.html",
    Article_Title:
      "SysAdmin of Billion-Dollar Hacking Group Gets 10-Year Sentence",
    Date: "April 17, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "A high-level manager and systems administrator associated with the FIN7 threat actor has been sentenced to 10 years in prison, the U.S. Department of Justice announced Friday. Fedir Hladyr , a 35-year-old Ukrainian national, is said to have played a crucial role in a criminal scheme that compromised tens of millions of debit and credit cards, in addition to aggregating the stolen information, supervising other members of the group, and maintaining the server infrastructure that FIN7 used to attack and control victims' machines. The development comes after Hladyr pleaded guilty to conspiracy to commit wire fraud and one count of conspiracy to commit computer hacking in September 2019. He was arrested in Dresden, Germany, in 2018 and extradited to the U.S. city of Seattle. Hladyr has also been ordered to pay $2.5 million in restitution. \"This criminal organization had more than 70 people organized into business units and teams. Some were hackers, others developed the malwa",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/what-are-different-roles-within.html",
    Article_Title: "What are the different roles within cybersecurity?",
    Date: "April 17, 2021",
    Author: "The Hacker News",
    Description:
      "People talk about the cybersecurity job market like it's a monolith, but there are a number of different roles within cybersecurity, depending not only on your skill level and experience but on what you like to do. In fact, Cybercrime Magazine came up with a list of  50 cybersecurity job titles , while CyberSN, a recruiting organization, came up with its own list of  45 cybersecurity job categories . Similarly, OnGig.com, a company that helps firms write their job ads, analyzed 150 cybersecurity job titles and came up with its  own top 30 list . This article is based on research I did with Springboard, one of the  first cybersecurity bootcamps with a job guarantee  and 1:1 mentorship. In particular, CyberSeek.org, a joint industry initiative looking at the cybersecurity job market, offers an  interactive list  of not only the various positions within cybersecurity but offers you a career path showing how you can get promoted. The complicated part is that these titles and roles",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/severe-bugs-reported-in-ethernetip.html",
    Article_Title:
      "Severe Bugs Reported in EtherNet/IP Stack for Industrial Systems",
    Date: "April 16, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Thursday issued an  advisory  warning of multiple vulnerabilities in the OpENer  EtherNet/IP  stack that could expose industrial systems to denial-of-service (DoS) attacks, data leaks, and remote code execution. All OpENer commits and versions prior to February 10, 2021, are affected, although there are no known public exploits that specifically target these vulnerabilities. The four security flaws were discovered and reported to CISA by researchers Tal Keren and Sharon Brizinov from operational technology security company Claroty. Additionally, a fifth security issue identified by Claroty was previously disclosed by Cisco Talos ( CVE-2020-13556 ) on December 2, 2020. "An attacker would only need to send crafted ENIP/CIP packets to the device in order to exploit these vulnerabilities," the researchers  said . CVE-2020-13556 concerns an out-of-bounds write vulnerability in the Ethernet/IP server that cou',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/us-sanctions-russia-and-expels-10.html",
    Article_Title:
      "US Sanctions Russia and Expels 10 Diplomats Over SolarWinds Cyberattack",
    Date: "April 15, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'The U.S. and U.K. on Thursday formally attributed the supply chain attack of IT infrastructure management company SolarWinds with "high confidence" to government operatives working for Russia\'s Foreign Intelligence Service (SVR). "Russia\'s pattern of malign behaviour around the world – whether in cyberspace, in election interference or in the aggressive operations of their intelligence services – demonstrates that Russia remains the most acute threat to the U.K.\'s national and collective security," the U.K. government  said  in a statement. To that effect, the U.S. Department of the Treasury has imposed sweeping sanctions against Russia for "undermining the conduct of free and fair elections and democratic institutions" in the U.S. and for its role in facilitating the sprawling SolarWinds hack, while also barring six technology companies in the country that provide support to the cyber program run by Russian Intelligence Services. The com',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/1-click-hack-found-in-popular-desktop.html",
    Article_Title:
      "1-Click Hack Found in Popular Desktop Apps — Check If You're Using Them",
    Date: "April 15, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Multiple one-click vulnerabilities have been discovered across a variety of popular software applications, allowing an attacker to potentially execute arbitrary code on target systems. The issues were discovered by Positive Security researchers Fabian Bräunlein and Lukas Euler and affect apps like Telegram, Nextcloud, VLC, LibreOffice, OpenOffice, Bitcoin/Dogecoin Wallets, Wireshark, and Mumble. "Desktop applications which pass user supplied URLs to be opened by the operating system are frequently vulnerable to code execution with user interaction," the researchers  said . "Code execution can be achieved either when a URL pointing to a malicious executable (.desktop, .jar, .exe, …) hosted on an internet accessible file share (nfs, webdav, smb, …) is opened, or an additional vulnerability in the opened application\'s URI handler is exploited." Put differently; the flaws stem from an insufficient validation of URL input that, when opened with the help of the u',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/malware-variants-more-sophisticated.html",
    Article_Title:
      "Malware Variants: More Sophisticated, Prevalent and Evolving in 2021",
    Date: "April 15, 2021",
    Author: "The Hacker News",
    Description:
      "A malicious program intended to cause havoc with IT systems—malware—is becoming more and more sophisticated every year. The year 2021 is no exception, as recent trends indicate that several  new variants of malware  are making their way into the world of cybersecurity. While smarter security solutions are popping up, modern malware still eludes and challenges cybersecurity experts.  The evolution of malware has infected everything from personal computers to industrial units since the 70s. Cybersecurity firm  FireEye's network was attacked  in 2020 by hackers with the most sophisticated form of hacking i.e., supply chain. This hacking team demonstrated world-class capabilities to disregard security tools and forensic examination, proving that anybody can be hacked. Also, the year 2021 is already witnessing a bump in  COVID-19 vaccine-related phishing attacks .  Let's take a look at the trends that forecast an increase in malware attacks: COVID-19 and Work-from-Home (WFH)",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/yikes-cybercriminals-flood-intrenet.html",
    Article_Title:
      "YIKES! Hackers flood the web with 100,000 pages offering malicious PDFs",
    Date: "April 15, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "Cybercriminals are resorting to search engine poisoning techniques to lure business professionals into seemingly legitimate Google sites that install a Remote Access Trojan (RAT) capable of carrying out a wide range of attacks. The attack works by leveraging searches for business forms such as invoices, templates, questionnaires, and receipts as a stepping stone toward infiltrating the systems. Users attempting to download the alleged document templates are  redirected , without their knowledge, to a malicious website that hosts the malware. \"Once the RAT is on the victim's computer and activated, the threat actors can send commands and upload additional malware to the infected system, such as ransomware, a credential stealer, a banking trojan, or simply use the RAT as a foothold into the victim's network,\" researchers from eSentire  said  in a write-up published on Tuesday. The cybersecurity firm said it discovered over 100,000 unique web pages that contain pop",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/new-whatsapp-bug-couldve-let-attackers.html",
    Article_Title:
      "New WhatsApp Bugs Could've Let Attackers Hack Your Phone Remotely",
    Date: "April 14, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Facebook-owned WhatsApp recently addressed two security vulnerabilities in its messaging app for Android that could have been exploited to execute malicious code remotely on the device and even exfiltrate sensitive information. The flaws take aim at devices running Android versions up to and including Android 9 by carrying out what\'s known as a "man-in-the-disk" attack that makes it possible for adversaries to compromise an app by manipulating certain data being exchanged between it and the external storage. "The two aforementioned WhatsApp vulnerabilities would have made it possible for attackers to remotely collect TLS cryptographic material for TLS 1.3 and TLS 1.2 sessions," researchers from Census Labs  said  today.  "With the TLS secrets at hand, we will demonstrate how a man-in-the-middle (MitM) attack can lead to the compromise of WhatsApp communications, to remote code execution on the victim device and to the extraction of Noise protocol keys u',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/new-javascript-exploit-can-now-carry.html",
    Article_Title:
      "New JavaScript Exploit Can Now Carry Out DDR4 Rowhammer Attacks",
    Date: "April 14, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Academics from Vrije University in Amsterdam and ETH Zurich have published a new research paper describing yet another variation of the Rowhammer attack. Dubbed  SMASH  (Synchronized MAny-Sided Hammering), the technique can be used to successfully trigger the attack from JavaScript on modern DDR4 RAM cards, notwithstanding extensive mitigations that have been put in place by manufacturers over the last seven years. "Despite their in-DRAM Target Row Refresh (TRR) mitigations, some of the most recent DDR4 modules are still vulnerable to many-sided Rowhammer bit flips," the researchers said.  "SMASH exploits high-level knowledge of cache replacement policies to generate optimal access patterns for eviction-based many-sided Rowhammer. To bypass the in-DRAM TRR mitigations, SMASH carefully schedules cache hits and misses to successfully trigger synchronized many-sided Rowhammer bit flips." By synchronizing memory requests with DRAM refresh commands, the researchers',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/simplify-then-add-lightness.html",
    Article_Title:
      "Simplify, then Add Lightness – Consolidating the Technology to Better Defend Ourselves",
    Date: "April 14, 2021",
    Author: "The Hacker News",
    Description:
      'One of the biggest consequences of the rapidly evolving cybersecurity threat landscape is that defenses must constantly build bigger systems to defend themselves.  This leads to both more complex systems and often less communication between them. More importantly, it can lead companies to invest in disparate "best in class" components instead of finding the best fit for their needs. The constant arms race means that companies often get bigger, more powerful tools that can\'t handle the nuanced threats they face. For instance, in a car race, it\'s not often the fastest, most powerful car that wins, but the one that is more balanced, lighter, and more able to turn and react when needed. In a new live webinar, Cynet Chief Strategist Chris Roberts breaks down why the philosophy of "simpler is better" is just what cybersecurity needs ( register here ). The webinar will focus on how quickly cybersecurity stacks are growing and how this is not always a good thing. Companies are too focused',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/2-new-chrome-0-days-under-attack-update.html",
    Article_Title:
      "Update Your Chrome Browser to Patch 2 New In-the-Wild 0-Day Exploits",
    Date: "April 13, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "Google on Tuesday released a new version of Chrome web-browsing software for Windows, Mac, and Linux with patches for two newly discovered security vulnerabilities for both of which it says exploits exist in the wild, allowing attackers to engage in active exploitation. One of the two flaws concerns an insufficient validation of untrusted input in its V8 JavaScript rendering engine (CVE-2021-21220), which was demonstrated by Dataflow Security's Bruno Keith and Niklas Baumstark at the  Pwn2Own 2021  hacking contest last week. While Google moved to fix the flaw quickly, security researcher Rajvardhan Agarwal published a  working exploit  over the weekend by reverse-engineering the patch that the Chromium team pushed to the open-source component, a factor that may have played a crucial role in the release. UPDATE:   Agarwal, in an email to The Hacker News, confirmed that there's one more vulnerability affecting Chromium-based browsers that has been patched in the latest vers",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/nsa-discovers-new-vulnerabilities.html",
    Article_Title:
      "NSA Discovers New Vulnerabilities Affecting Microsoft Exchange Servers",
    Date: "April 13, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'In its April slate of patches, Microsoft rolled out fixes for a total of  114 security flaws , including an actively exploited zero-day and four remote code execution bugs in Exchange Server. Of the  114 flaws , 19 are rated as Critical, 88 are rated Important, and one is rated Moderate in severity. Chief among them is  CVE-2021-28310 , a privilege escalation vulnerability in Win32k that\'s said to be under active exploitation, allowing attackers to elevate privileges by running malicious code on a target system.  Cybersecurity firm Kaspersky, which discovered and reported the flaw to Microsoft in February, linked the zero-day exploit to a threat actor named Bitter APT, which was found exploiting a similar flaw ( CVE-2021-1732 ) in attacks late last year. "It is an escalation of privilege (EoP) exploit that is likely used together with other browser exploits to escape sandboxes or get system privileges for further access," Kaspersky researcher Boris Larin  said . NS',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/new-namewreck-vulnerabilities-impact.html",
    Article_Title:
      "New NAME:WRECK Vulnerabilities Impact Nearly 100 Million IoT Devices",
    Date: "April 13, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Security researchers have uncovered nine vulnerabilities affecting four TCP/IP stacks impacting more than 100 million consumer and enterprise devices that could be exploited by an attacker to take control of a vulnerable system. Dubbed " NAME:WRECK " by Forescout and JSOF, the flaws are the latest in series of studies undertaken as part of an initiative called Project Memoria to study the security of widely-used TCP/IP stacks that are incorporated by various vendors in their firmware to offer internet and network connectivity features. "These vulnerabilities relate to Domain Name System (DNS) implementations, causing either Denial of Service (DoS) or Remote Code Execution (RCE), allowing attackers to take target devices offline or to take control over them," the researchers said. The name comes from the fact that parsing of domain names can break (i.e., "wreck") DNS implementations in TCP/IP stacks, adding to a recent uptick in vulnerabilities such as',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/hackers-using-websites-contact-forms-to.html",
    Article_Title:
      "Hackers Using Website's Contact Forms to Deliver IcedID Malware",
    Date: "April 13, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Microsoft has warned organizations of a "unique" attack campaign that abuses contact forms published on websites to deliver malicious links to businesses via emails containing fake legal threats, in what\'s yet another instance of adversaries abusing legitimate infrastructure to mount evasive campaigns that bypass security protections. "The emails instruct recipients to click a link to review supposed evidence behind their allegations, but are instead led to the download of IcedID, an info-stealing malware," the company\'s threat intelligence team  said  in a write-up published last Friday. IceID  is a Windows-based banking trojan that\'s used for reconnaissance and exfiltration of banking credentials, alongside features that allow it to connect to a remote command-and-control (C2) server to deploy additional payloads such as ransomware and malware capable of performing hands-on-keyboard attacks, stealing credentials, and moving laterally across affecte',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/detecting-next-solarwinds-attack.html",
    Article_Title: 'Detecting the "Next" SolarWinds-Style Cyber Attack',
    Date: "April 13, 2021",
    Author: "The Hacker News",
    Description:
      "The SolarWinds attack , which succeeded by utilizing the sunburst malware , shocked the cyber-security industry. This attack achieved persistence and was able to evade internal systems long enough to gain access to the source code of the victim. Because of the far-reaching SolarWinds deployments, the perpetrators were also able to infiltrate many other organizations, looking for intellectual property and other assets. Among the co-victims: US government, government contractors, Information Technology companies, and NGOs. An incredible amount of sensitive data was stolen from several customers after a trojanized version of SolarWinds' application was installed on their internal structures. Looking at the technical capabilities of the malware, as you will see, this particular attack was quite impressive. A particular file, named  SolarWinds.Orion.Core.BusinessLayer.dll  is a SolarWinds digitally signed component of the Orion software framework. The threat actors installed a back",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/brata-malware-poses-as-android-security.html",
    Article_Title:
      "BRATA Malware Poses as Android Security Scanners on Google Play Store",
    Date: "April 12, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'A new set of malicious Android apps have been caught posing as app security scanners on the official Play Store to distribute a backdoor capable of gathering sensitive information. "These malicious apps urge users to update Chrome, WhatsApp, or a PDF reader, yet instead of updating the app in question, they take full control of the device by abusing accessibility services," cybersecurity firm McAfee  said  in an analysis published on Monday. The apps in question were designed to target users in Brazil, Spain, and the U.S., with most of them accruing anywhere between 1,000 to 5,000 installs. Another app named DefenseScreen racked up 10,000 installs before it was removed from the Play Store last year. First documented by Kaspersky in August 2019,  BRATA  (short for "Brazilian Remote Access Tool Android") emerged as an Android malware with screen recording abilities before steadily morphing into a banking trojan. "It combines full device control capabilitie',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/rce-exploit-released-for-unpatched.html",
    Article_Title:
      "RCE Exploit Released for Unpatched Chrome, Opera, and Brave Browsers",
    Date: "April 12, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "An Indian security researcher has publicly published a proof-of-concept (PoC) exploit code for a newly discovered flaw impacting Google Chrome and other Chromium-based browsers like Microsoft Edge, Opera, and Brave. Released by Rajvardhan Agarwal, the working  exploit  concerns a remote code execution vulnerability in the V8 JavaScript rendering engine that powers the web browsers. It is believed to be the same flaw demonstrated by Dataflow Security's Bruno Keith and Niklas Baumstark at  Pwn2Own 2021 hacking contest  last week. Keith and Baumstark were awarded $100,000 for leveraging the vulnerability to run malicious code inside Chrome and Edge. According to the screenshot shared by Agarwal, the PoC HTML file, and its associated JavaScript file, can be loaded in a Chromium-based browser to exploit the security flaw and launch the Windows calculator (calc.exe) app. But it's worth noting that the exploit needs to be chained with another flaw that can allow it to escape Chro",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/indian-brokerage-firm-upstox-suffers.html",
    Article_Title:
      "Indian Brokerage Firm Upstox Suffers Data Breach Leaking 2.5 Millions Users' Data",
    Date: "April 12, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "Online trading and discount brokerage platform Upstox has become the latest Indian company to suffer a security breach of its systems, resulting in the exposure of sensitive information of approximately 2.5 million users on the dark web. The leaked information includes names, email addresses, dates of birth, bank account information, and about 56 million know your customer (KYC) documents pulled from the company's server. The breach was first disclosed by independent researcher  Rajshekhar Rajaharia  on April 11. It's not immediately clear when the incident occurred. Reacting to the development, the company, however,  said  it had recently upgraded its security systems following reports of \"unauthorized access into our database\" while stressing that users' funds and securities remained protected. As a precaution, besides initiating a secure password reset of users' accounts, Upstox said it restricted access to the impacted database, implying it was a ca",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/what-does-it-take-to-be-cybersecurity.html",
    Article_Title: "What Does It Take To Be a Cybersecurity Researcher?",
    Date: "April 12, 2021",
    Author: "The Hacker News",
    Description:
      "Behind the strategies and solutions needed to counter today's cyber threats are—dedicated cybersecurity researchers. They spend their lives dissecting code and analyzing incident reports to discover how to stop the bad guys.  But what drives these specialists? To understand the motivations for why these cybersecurity pros do what they do, we decided to talk with cybersecurity analysts from around the world. To get viewpoints from across Europe, Asia, and the Americas, we recently spoke with a team of researchers from Acronis' global network of Cyber Protection Operations Centers (CPOCs):  Candid Wüest , VP of Cyber Protection Research who is based in Switzerland;  Alexander Ivanyuk , Senior Director, Product, and Technology Positioning, who is based in Singapore; and two Cybersecurity Analysts,  Topher Tebow  and  Blake Collins , who are both based in the U.S. The conversation yielded some interesting insights into their views of the world, how they approach cyber threat an",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/windows-ubuntu-zoom-safari-ms-exchange.html",
    Article_Title:
      "Windows, Ubuntu, Zoom, Safari, MS Exchange Hacked at Pwn2Own 2021",
    Date: "April 12, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "The 2021 spring edition of  Pwn2Own  hacking contest concluded last week on April 8 with a three-way tie between Team Devcore, OV, and Computest researchers Daan Keuper and Thijs Alkemade. A total of $1.2 million was awarded for 16 high-profile exploits over the course of the three-day virtual event organized by the Zero Day Initiative (ZDI). Targets with successful attempts included Zoom, Apple Safari, Microsoft Exchange, Microsoft Teams, Parallels Desktop, Windows 10, and Ubuntu Desktop operating systems. Some of the major highlights are as follows — Using an authentication bypass and a local privilege escalation to completely take over a Microsoft Exchange server, for which the Devcore team netted $200,000 Chaining a pair of bugs to achieve code execution in Microsoft Teams, earning researcher OV $200,000 A zero-click exploit targeting Zoom that employed a three-bug chain to exploit the messenger app and gain code execution on the target system. ($200,000) The exploitation",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/hackers-tampered-with-apkpure-store-to.html",
    Article_Title:
      "Hackers Tampered With APKPure Store to Distribute Malware Apps",
    Date: "April 09, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'APKPure, one of the largest alternative app stores outside of the Google Play Store, was infected with malware this week, allowing threat actors to distribute Trojans to Android devices. In a supply-chain attack similar to that of German telecommunications  equipment manufacturer Gigaset , the APKPure client version 3.17.18 is said to have been tampered with in an attempt to trick unsuspecting users into downloading and installing malicious applications linked to the malicious code built into the APKpure app. The development was reported by researchers from  Doctor Web  and  Kaspersky . "This trojan belongs to the dangerous Android.Triada malware family capable of downloading, installing and uninstalling software without users\' permission," Doctor Web researchers said. According to Kaspersky, the APKPure version 3.17.18 was tweaked to incorporate an advertisement SDK that acts as a Trojan dropper designed to deliver other malware to a victim\'s device. "This',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/alert-theres-new-malware-out-there.html",
    Article_Title:
      "Alert — There's A New Malware Out There Snatching Users' Passwords",
    Date: "April 09, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'A previously undocumented malware downloader has been spotted in the wild in phishing attacks to deploy credential stealers and other malicious payloads. Dubbed " Saint Bot ," the malware is said to have first appeared on the scene in January 2021, with indications that it\'s under active development. "Saint Bot is a downloader that appeared quite recently, and slowly is getting momentum. It was seen dropping stealers (i.e.  Taurus  Stealer) or further loaders ( example ), yet its design allows [it] to utilize it for distributing any kind of malware," said Aleksandra "Hasherezade" Doniec, a threat intelligence analyst at Malwarebytes . "Furthermore, Saint Bot employs a wide variety of techniques which, although not novel, indicate some level of sophistication considering its relatively new appearance." The infection chain analyzed by the cybersecurity firm begins with a phishing email containing an embedded ZIP file ("bitcoin.zip&qu',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/whitepaper-how-to-achieve-cmmc-security.html",
    Article_Title:
      "[WHITEPAPER] How to Achieve CMMC Security Compliance for Your Business",
    Date: "April 09, 2021",
    Author: "The Hacker News",
    Description:
      'For organizations that deal with the defense infrastructure – cybersecurity is more than just a buzzword. Recently the US Department of Defense (DoD) created a new certification process – the Cybersecurity Maturity Model Certificate (CMMC) – to ensure that all its vendors and contractors follow established best cybersecurity practices. For organizations that work along the DoD supply chain, this means adhering to a strict regulatory framework, which can be quite complex. For one, must ensure that cybersecurity processes and practices are aligned with the type and sensitivity of the information that needs to be protected. Even though the model is tiered (from "basic cybersecurity hygiene" to "advanced"), organizations will expend a significant effort to ensure they align with the compliance level appropriate for their contracts. This is why one XDR provider has created a new guide to demonstrate how it helps organizations achieve CMMC compliance ( download the whitepaper here ). T',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/cisco-will-not-patch-critical-rce-flaw.html",
    Article_Title:
      "Cisco Will Not Patch Critical RCE Flaw Affecting End-of-Life Business Routers",
    Date: "April 09, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Networking equipment major Cisco Systems has said it does not plan to fix a critical security vulnerability affecting some of its Small Business routers, instead urging users to replace the devices. The bug, tracked as CVE-2021-1459, is rated with a CVSS score of 9.8 out of 10, and affects RV110W VPN firewall and Small Business RV130, RV130W, and RV215W routers, allowing an unauthenticated, remote attacker to execute arbitrary code on an affected appliance. The flaw, which stems from improper validation of user-supplied input in the web-based management interface, could be exploited by a malicious actor to send specially-crafted HTTP requests to the targeted device and achieve remote code execution. "A successful exploit could allow the attacker to execute arbitrary code as the root user on the underlying operating system of the affected device," Cisco  said  in its advisory. Security researcher Treck Zhou has been credited with reporting the vulnerability. Although th',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/gigaset-android-update-server-hacked-to.html",
    Article_Title:
      "Gigaset Android Update Server Hacked to Install Malware on Users' Devices",
    Date: "April 09, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Gigaset has revealed a malware infection discovered in its Android devices was the result of a compromise of a server belonging to an external update service provider. Impacting older smartphone models — GS100, GS160, GS170, GS180, GS270 (plus), and GS370 (plus) series — the malware took the form of multiple  unwanted apps  that were downloaded and installed through a pre-installed system update app. The infections are said to have occurred starting  March 27 . The German manufacturer of telecommunications devices said it took steps to alert the update service provider of the issue, following which further infections were prevented on April 7. "Measures have been taken to automatically rid infected devices of the malware. In order for this to happen the devices must be connected to the internet (WLAN, WiFi or mobile data). We also recommend connecting the devices to their chargers. Affected devices should automatically be freed from the malware within 8 hours," the comp',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/researchers-uncover-new-iranian-malware.html",
    Article_Title:
      "Researchers uncover a new Iranian malware used in recent cyberattacks",
    Date: "April 08, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "An Iranian threat actor has unleashed a new cyberespionage campaign against a possible Lebanese target with a backdoor capable of exfiltrating sensitive information from compromised systems. Cybersecurity firm Check Point attributed the operation to APT34, citing similarities with previous techniques used by the threat actor as well as based on its pattern of victimology. APT34  (aka OilRig) is known for its reconnaissance campaigns aligned with the strategic interests of Iran, primarily hitting financial, government, energy, chemical, and telecommunications industries in the Middle East. The group typically resorts to targeting individuals through the use of booby-trapped job offer documents, delivered directly to the victims via LinkedIn messages. Although the latest campaign bears some of the same hallmarks, the exact mode of delivery remains unclear as yet. The Word document analyzed by Check Point — which was  uploaded  to VirusTotal from Lebanon on January 10 — claims to of",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/hackers-exploit-unpatched-vpns-to.html",
    Article_Title:
      "Hackers Exploit Unpatched VPNs to Install Ransomware on Industrial Targets",
    Date: "April 08, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Unpatched Fortinet VPN devices are being targeted in a series of attacks against industrial enterprises in Europe to deploy a new strain of ransomware called "Cring" inside corporate networks. At least one of the hacking incidents led to the temporary shutdown of a production site, said cybersecurity firm Kaspersky in a report published on Wednesday, without publicly naming the victim. The attacks happened in the first quarter of 2021, between January and March. "Various details of the attack indicate that the attackers had carefully analyzed the infrastructure of the targeted organization and prepared their own infrastructure and toolset based on the information collected at the reconnaissance stage,"  said  Vyacheslav Kopeytsev, a security researcher at Kaspersky ICS CERT. The disclosure comes days after the Federal Bureau of Investigation (FBI) and the Cybersecurity and Infrastructure Security Agency (CISA)  warned  of advanced persistent threat (APT) actor',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/nist-and-hipaa-is-there-password.html",
    Article_Title: "NIST and HIPAA: Is There a Password Connection?",
    Date: "April 08, 2021",
    Author: "The Hacker News",
    Description:
      "When dealing with user data, it's essential that we design our password policies around compliance. These policies are defined both internally and externally. While companies uphold their own password standards, outside forces like HIPAA and NIST have a heavy influence. Impacts are defined by industry and one's unique infrastructure. How do IT departments maintain compliance with NIST and HIPAA? We'll discuss each compliance measure and its importance in this article. What is NIST compliance? Defined by the National Institute of Standards and Technology, NIST compliance aims to harden federal systems against cyber-attacks. While the agency is non-regulatory, it  is  part of the U.S. Department of Commerce, which has plenty of influence over government agencies and their contractors. For example, NIST guidelines help agencies  satisfy the requirements of the Federal Information Security Management Act  (FISMA). NIST is instrumental in creating Federal Information Proce",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/php-sites-user-database-was-hacked-in.html",
    Article_Title:
      "PHP Site's User Database Was Hacked In Recent Source Code Backdoor Attack",
    Date: "April 07, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'The maintainers of the PHP programming language have issued an update regarding the security incident that came to light late last month, stating that the actors may have gotten hold of a user database containing their passwords to make unauthorized changes to the repository. "We no longer believe the git.php.net server has been compromised. However, it is possible that the master.php.net user database leaked," Nikita Popov  said  in a message posted on its mailing list on April 6. On March 28, unidentified actors used the names of Rasmus Lerdorf and Popov to  push malicious commits  to the "php-src" repository hosted on the git.php.net server that involved adding a backdoor to the PHP source code in an instance of a software supply chain attack. While this was initially treated as a compromise of the git.php.net server, further investigation into the incident has revealed that the commits were a result of pushing them using HTTPS and password-based authentica',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/android-to-support-rust-programming.html",
    Article_Title:
      "Android to Support Rust Programming Language to Prevent Memory Flaws",
    Date: "April 07, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Google on Tuesday announced that its open source version of the Android operating system will add support for Rust programming language in a bid to prevent memory safety bugs. To that end, the company has been building parts of the Android Open Source Project (AOSP) with Rust for the past 18 months, with plans in the pipeline to scale this initiative to cover more aspects of the operating system. "Managed languages like Java and Kotlin are the best option for Android app development," Google  said . "The Android OS uses Java extensively, effectively protecting large portions of the Android platform from memory bugs. Unfortunately, for the lower layers of the OS, Java and Kotlin are not an option." Stating that code written in C and C++ languages requires robust isolation when parsing untrustworthy input, Google said the technique of containing such code within a tightly constrained and unprivileged sandbox can be expensive, causing latency issues and additional',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/whatsapp-based-wormable-android-malware.html",
    Article_Title:
      "WhatsApp-based wormable Android malware spotted on the Google Play Store",
    Date: "April 07, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Cybersecurity researchers have discovered yet another piece of wormable Android malware—but this time downloadable directly from the official Google Play Store—that\'s capable of propagating via WhatsApp messages. Disguised as a rogue Netflix app under the name of "FlixOnline," the malware comes with features that allow it to automatically reply to a victim\'s incoming WhatsApp messages with a payload received from a command-and-control (C&C) server.  "The application is actually designed to monitor the user\'s WhatsApp notifications, and to send automatic replies to the user\'s incoming messages using content that it receives from a remote C&C server," Check Point researchers said in an analysis published today. Besides masquerading as a Netflix app, the malicious "FlixOnline" app also requests intrusive permissions that allow it to create fake Login screens for other apps, with the goal of stealing credentials and gain access to',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/11-useful-security-tips-for-securing.html",
    Article_Title: "11 Useful Security Tips for Securing Your AWS Environment",
    Date: "April 07, 2021",
    Author: "The Hacker News",
    Description:
      "Want to take advantage of excellent cloud services? Amazon Web Services may be the perfect solution, but don't forget about AWS security. Whether you want to use AWS for a few things or everything, you need to protect access to it. Then you can make sure your business can run smoothly. Read on to learn some important AWS security tips. Use Multi-Factor authentication When setting up your AWS security settings or adding new users, you should implement multi-factor authentication (MFA). MFA relies on more than one login factor to grant you access to your account. For example, when you log in to your account, the program might send a code to your mobile phone. Then you must verify that you have that phone and enter the code to access your account. MFA is an excellent way to protect your data if someone figures out your username and password. This way, you can still have a layer of protection against the hacker. Create strong passwords Even with MFA, you should use strong, uni",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/critical-auth-bypass-bug-found-in.html",
    Article_Title:
      "Critical Auth Bypass Bug Found in VMware Data Center Security Product",
    Date: "April 07, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'A critical vulnerability in the VMware Carbon Black Cloud Workload appliance could be exploited to bypass authentication and take control of vulnerable systems. Tracked as CVE-2021-21982, the flaw is rated 9.1 out of a maximum of 10 in the CVSS scoring system and affects all versions of the product prior to 1.0.1.  Carbon Black Cloud Workload is a data center security product from VMware that aims to protect critical servers and workloads hosted on vSphere, the company\'s cloud-computing virtualization platform. "A URL on the administrative interface of the VMware Carbon Black Cloud Workload appliance can be manipulated to bypass authentication," VMware  said  in its advisory, thereby allowing an adversary with network access to the interface to gain access to the administration API of the appliance. Armed with the access, a malicious actor can then view and alter  administrative configuration settings , the company added. In addition to releasing a fix for CVE-2021',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/pre-installed-malware-dropper-found-on.html",
    Article_Title:
      "Pre-Installed Malware Dropper Found On German Gigaset Android Phones",
    Date: "April 07, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'In what appears to be a fresh twist in Android malware, users of Gigaset mobile devices are encountering unwanted apps that are being downloaded and installed through a pre-installed system update app. "The culprit installing these malware apps is the Update app, package name  com.redstone.ota.ui , which is a pre-installed system app," Malwarebytes researcher Nathan Collier  said . "This app is not only the mobile device\'s system updater, but also an auto installer known as Android/PUP.Riskware.Autoins.Redstone." The development was  first reported  by German author and blogger Günter Born last week. While the issue seems to be mainly affecting Gigaset phones, devices from a handful of other manufacturers appear to be impacted as well. The full list of devices that come with the pre-installed auto-installer includes Gigaset GS270, Gigaset GS160, Siemens GS270, Siemens GS160, Alps P40pro, and Alps S20pro+. According to Malwarebytes, the Update app installs',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/experts-uncover-new-banking-trojan.html",
    Article_Title:
      "Experts uncover a new Banking Trojan targeting Latin American users",
    Date: "April 06, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Researchers on Tuesday revealed details of a new banking trojan targeting corporate users in Brazil at least since 2019 across various sectors such as engineering, healthcare, retail, manufacturing, finance, transportation, and government. Dubbed " Janeleiro " by Slovak cybersecurity firm ESET, the malware aims to disguise its true intent via lookalike pop-up windows that are designed to resemble the websites of some of the biggest banks in the country, including Itaú Unibanco, Santander, Banco do Brasil, Caixa Econômica Federal, and Banco Bradesco. "These pop-ups contain fake forms, aiming to trick the malware\'s victims into entering their banking credentials and personal information that the malware captures and exfiltrates to its [command-and-control] servers," ESET researchers Facundo Muñoz and Matías Porolli said in a write-up. This modus operandi is not new to banking trojans. In August 2020, ESET uncovered a Latin American (LATAM) banking trojan call',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/watch-out-mission-critical-sap.html",
    Article_Title:
      "Watch Out! Mission Critical SAP Applications Are Under Active Attack",
    Date: "April 06, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'Cyber attackers are actively setting their sights on unsecured SAP applications in an attempt to steal information and sabotage critical processes, according to new research. "Observed exploitation could lead in many cases to full control of the unsecured SAP application, bypassing common security and compliance controls, and enabling attackers to steal sensitive information, perform financial fraud or disrupt mission-critical business processes by deploying ransomware or stopping operations," cybersecurity firm Onapsis and SAP  said  in a joint report published today. The Boston-based company said it detected over 300 successful exploitations out of a total of 1,500 attempts targeting previously known vulnerabilities and insecure configurations specific to SAP systems between mid-2020 to March 2021, with multiple brute-force attempts made by adversaries aimed at high-privilege SAP accounts as well as chaining together several flaws to strike SAP applications. Applicatio',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/mitre-madness-guide-to-weathering.html",
    Article_Title:
      "MITRE Madness: A Guide to Weathering the Upcoming Vendor Positioning Storm",
    Date: "April 06, 2021",
    Author: "The Hacker News",
    Description:
      "April is usually a whirlwind month for the cybersecurity industry as it coincides with the release of the highly regarded and influential MITRE ATT&CK test results. The ATT&CK test measures cybersecurity platforms' abilities to detect and react to emulated, multistep attacks that can be used as a barometer of platform effectiveness.  This means that every cybersecurity vendor will be tripping over themselves to push out blog posts, webinars, press releases, and more touting how great their services are and how the results validate their products. The result is a storm of spin and PR that is hard to navigate. An upcoming webinar offered by Cynet ( register here ) aims to help industry participants differentiate the spin from the real information when it comes to MITRE ATT&CK results. The Webinar will be led by renowned cybersecurity researcher and Chief Security Strategist for Cynet, Chris Roberts, and Director of Product Marketing for Cynet, George Tubin. The conver",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/hackers-from-china-target-vietnamese.html",
    Article_Title:
      "Hackers From China Target Vietnamese Military and Government",
    Date: "April 06, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'A hacking group related to a Chinese-speaking threat actor has been linked to an advanced cyberespionage campaign targeting government and military organizations in Vietnam. The attacks have been attributed with low confidence to the advanced persistent threat (APT) called  Cycldek  (or Goblin Panda, Hellsing, APT 27, and Conimes), which is known for using spear-phishing techniques to compromise diplomatic targets in Southeast Asia, India, and the U.S. at least since 2013. According to researchers from Kaspersky, the offensive, which was observed between June 2020 and January 2021, leverages a method called DLL side-loading to execute shellcode that decrypts a final payload dubbed " FoundCore ." DLL side-loading  has been a tried-and-tested technique used by various threat actors as an obfuscation tactic to bypass antivirus defenses. By loading malicious DLLs into legitimate executables, the idea is to mask their malicious activity under a trusted system or software proc',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/hackers-targeting-professionals-with.html",
    Article_Title:
      "Hackers Targeting professionals With 'more_eggs' Malware via LinkedIn Job Offers",
    Date: "April 06, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      'A new spear-phishing campaign is targeting professionals on LinkedIn with weaponized job offers in an attempt to infect targets with a sophisticated backdoor trojan called "more_eggs." To increase the odds of success, the phishing lures take advantage of malicious ZIP archive files that have the same name as that of the victims\' job titles taken from their LinkedIn profiles. "For example, if the LinkedIn member\'s job is listed as Senior Account Executive—International Freight the malicious zip file would be titled Senior Account Executive—International Freight position (note the \'position\' added to the end)," cybersecurity firm eSentire\'s Threat Response Unit (TRU)  said  in an analysis. "Upon opening the fake job offer, the victim unwittingly initiates the stealthy installation of the fileless backdoor, more_eggs." Campaigns delivering more_eggs using the  same modus operandi  have been spotted at least since 2018, with the backdo',
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/how-work-from-home-shift-impacts-saas.html",
    Article_Title: "How the Work-From-Home Shift Impacts SaaS Security",
    Date: "April 05, 2021",
    Author: "The Hacker News",
    Description:
      "The data is in. According to IBM Security's  2020 Cost of a Data Breach Report , there is a 50% increase in cloud usage for enterprises across all industries. The number of threats targeting cloud services, predominantly collaboration services like Office 365, has  increased 630% . Moreover, 75% of respondents report that discovery and recovery time from data breaches has significantly increased due to remote work during the pandemic. Although organizations can save over $1 million if they discover a breach in the first 30 days, the average reported response time was a whopping 280 days.  In the remote-work world, SaaS apps have become an enticing vector-of-choice for bad actors. Just think of the typical employee, working off-site, untrained in security measures, and how their access or privileges increase the risk of sensitive data being stolen, exposed, or compromised. However, it doesn't have to be that way — a company's SaaS security posture can be strengthened, an",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/533-million-facebook-users-phone.html",
    Article_Title:
      "533 Million Facebook Users' Phone Numbers and Personal Data Leaked Online",
    Date: "April 04, 2021",
    Author: "Ravie Lakshmanan",
    Description:
      "In what's likely to be a goldmine for bad actors, personal information associated with approximately 533 million Facebook users worldwide has been leaked on a popular cybercrime forum for free—which was harvested by hackers in 2019 using a Facebook vulnerability. The  leaked data  includes full names, Facebook IDs, mobile numbers, locations, email addresses, gender, occupation, city, country, marital status broken, account creation date, and other profile details broken down by country, with over 32 million records belonging to users in the U.S., 11 million users the U.K., and six million users in India, among others. Also included in the leak are  phone numbers  from Facebook CEO Mark Zuckerberg, and co-founders Chris Hughes, and Dustin Moskovitz, who are the fourth, fifth, and sixth members to have registered on Facebook. Interestingly, it appears that the same phone number is also registered to his name on the privacy-focussed messaging app Signal. \"Mark Zuckerberg als",
    Topic: "Cyber Security",
  },
  {
    Article_Link:
      "https://thehackernews.com/2021/04/how-cyrebro-can-unify-multiple.html",
    Article_Title:
      "How Cyrebro Can Unify Multiple Cybersecurity Defenses to Optimize Protection",
    Date: "April 02, 2021",
    Author: "The Hacker News",
    Description:
      "Many enterprises rely on more than one security tool to protect their technology assets, devices, and networks. This is particularly true for organizations that use hybrid systems or a combination of cloud and local applications. Likewise, companies whose networks include a multitude of smartphones and IoT devices are likely to deploy multiple security solutions suitable for different scenarios. Employing several security solutions tends to be inevitable for many, especially those that have outgrown their previous network setups. Companies that expand to new branches and even overseas operations have to make use of additional security measures and tools. This use of multiple tools or software often leads to critical issues, though. The management of the many cybersecurity solutions can become too complicated and difficult to handle, especially for organizations with little experience in addressing cyber threats, let alone actual attacks. This can result in confusion and the inabilit",
    Topic: "Cyber Security",
  },
];

export default notes;
