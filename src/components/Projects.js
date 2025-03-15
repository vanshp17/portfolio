  import React, { useState } from 'react';
  import '../styles/Projects.css'; // Import the specific styles for Projects component
  // import salesImg from '../assets/images/sales.png';
  // import customerImg from '../assets/images/customer.jpg';
  // import revenueImg from '../assets/images/revenue.jpg';
  // import predictiveImg from '../assets/images/predictive.png';
  // import reccsystemImg from '../assets/images/reccsystem.png';
  // import fraudImg from '../assets/images/fraud.png';
  // import laptopImg from '../assets/images/laptop.png';
  import laptop2Img from '../assets/images/laptop2.png';
  import roadImg from '../assets/images/road.png';
  import t20Img from '../assets/images/t20.png';
  import carImg from '../assets/images/car.png';
  import churnImg from '../assets/images/churn.png';
  import churnDashboard from '../assets/images/churnDashboard.png';
  import sales2Img from '../assets/images/sales2.png';
  import gpaImg from '../assets/images/gpa.png';
  
  

  
  
  
  const projectsData = {
    dataAnalyst: [
      {
        id: 1,
        name: 'Road Accident Dashboard',
        image: roadImg, // Correct image reference
        demoLink: 'https://your-demo-link.com/sales-dashboard', // Add proper demo link
        githubLink: 'https://github.com/your-repo/sales-dashboard', // Add GitHub link
        problemStatement: [
          'The project involves analyzing road accident data to identify key patterns and factors contributing to accidents. The objective is to develop a dashboard that provides actionable insights for policymakers, traffic authorities, and the general public to enhance road safety measures.'
        ],
        objective: [
          'To analyze road accident data, identify trends, and provide insights through visualizations. The project involves analyzing data, identifying key indicators, and creating an actionable tool that helps stakeholders make informed decisions.'
        ],
        dataCollection: [
          'Collected accident data from multiple sources.',
          'Performed data cleaning, removing inconsistencies and errors.',
          'Engineered features such as accident severity by road type and weather conditions.',
        ],
        eda: [
          'Analyzed accident trends across different years and months.',
          'Used bar charts to visualize accident severity by vehicle type.',
          'Performed statistical analysis to detect accident-prone areas.',
        ],
        keyFeatures: [
          'Accident severity by road type and junction control.',
          'Impact of weather and lighting conditions on accident frequency.',
          'Vehicle types most involved in accidents.',
        ],
        insights:[
          'Accidents were highest in urban areas with uncontrolled junctions.',
          'Fatal accidents were more common in poor lighting conditions and icy road surfaces.',
          'Motorcycles and cars were the most involved vehicle types in accidents.',
          'Traffic signals and controlled junctions reduced accident severity',
        ],
        challenges: [
          'Data discrepancies between different reporting authorities.',
          'Handling missing data for certain accident attributes.',
        ],
        tools: ['Excel', 'Excel for data visualization'],
        results:
          'Developed a comprehensive road accident dashboard, helping traffic authorities identify high-risk zones and implement preventive measures.',
        futureImprovements: [
          'Incorporate real-time accident data for more accurate analysis.',
          'Integrate dashboard with GIS mapping for better spatial analysis.',
        ],
      },
      {
        id: 2,
        name: 'Customer Churn Analysis',
        image: churnDashboard,
        demoLink: 'https://your-demo-link.com/customer-segmentation',
        githubLink: 'https://github.com/vanshp17/customers-churn-prediction/blob/main/ChurnProjectReport.pbix',
        problemStatement: [
          'Analyze customer behavior and transaction history to identify key factors influencing customer churn in an e-commerce platform. The goal is to provide data-driven insights to help businesses retain customers.'
        ],
        objective: [
          'Understand patterns and trends in customer churn.',
          'Identify critical factors that contribute to customer retention and churn.',
          'Provide actionable recommendations for improving customer engagement and satisfaction.',
        ],
        dataCollection: [
          'Used an Excel dataset containing customer demographics, transactions, and interactions.',
          'Handled missing values and performed necessary data cleaning.',
          'Feature engineering: Created new variables such as customer tenure and interaction frequency.',
          'Outlier detection & treatment: Used boxplots and statistical methods.',
          'Categorical encoding: Converted categorical features for effective analysis.',
        ],
        eda: [
          'Analyzed customer demographics, purchasing behavior, and platform usage.',
          'Visualized key insights such as:',
          'Impact of tenure and order history on churn.',
          'Preferred payment modes and their influence on retention.',
          'Effect of cashback and coupons on customer loyalty.',
          'Correlation between customer complaints and churn rates.',
          'Used bar charts, histograms, boxplots, and heatmaps for visualization',
        ],
        // modeling: [
        //   'Used K-Means clustering to segment customers.',
        //   'Tested different numbers of clusters to find the optimal segmentation.',
        // ],
        keyFeatures: ['Tenure – Longer tenure reduces churn likelihood.',
          'OrderCount & DaySinceLastOrder – Customers with frequent transactions are more loyal.',
          'SatisfactionScore – Higher scores indicate better retention rates.',
          'CashbackAmount & CouponUsed – Incentives impact customer loyalty.',
          'Complain – Customers with unresolved complaints have a higher churn rate',
      ],
        // modelEvaluation: ['Evaluated clustering results using silhouette score and elbow method.'],
        insights:
          [
            'Retention Strategies: Increase engagement for customers with low order counts.',
          'Personalized Offers: Provide cashback and coupon incentives for at-risk customers.',
          'Customer Support Improvement: Address complaints quickly to improve retention.',
          ],
        challenges: [
          'Data Imbalance: Majority of customers did not churn, requiring oversampling techniques.',
          'Feature Selection: Identifying the most impactful variables for model performance.', 
        ],
        tools: ['Python (Scikit-learn for clustering)', 'Jupyter Notebook for analysis and visualization','Power BI for interactive dashboards'],
        results: [
          'Provided data-driven insights to help businesses reduce churn.',
          'Identified key areas for improvement in customer engagement strategies.',
        ],
        futureImprovements: [
          'Conduct sentiment analysis on customer reviews and complaints.','Use real-time transaction data for better churn prediction',
        ],
      },
      {
      id: 3,
      name: 'Google Play Store Analysis',
      image: gpaImg, // Correct image reference
      demoLink: 'https://your-demo-link.com/revenue-analysis', // Add proper demo link
      githubLink: 'https://github.com/vanshp17/GooglePlayStoreAnalysis', // Add GitHub link
      problemStatement: 'The Google Play Store hosts thousands of apps, making it essential for developers and investors to analyze trends and make data-driven decisions. This project focuses on visualizing key insights from the Play Store dataset using Power BI.',
      objective: 'Develop an interactive Power BI dashboard to provide insights into app performance, installs, revenue trends, and user behavior on the Google Play Store.',
      dataCollection: [
        'Dataset: Google Play Store dataset (~10,841 records, 13 columns).',
        'Preprocessing Steps:',
        'Handled missing values in the Rating column.',
        'Converted Reviews, Installs, and Price to numeric format.',
        'Removed duplicate app records for data consistency.',
      ],
      eda: [
        ' Identified outliers in installs and ratings.',
        'Analyzed category-wise distribution of apps.',
        'Detected trends in paid vs. free app revenues.',
      ],
      // modeling: [
      //   'Implemented linear regression to forecast future revenues.',
      //   'Used time series analysis to capture seasonal trends.',
      // ],
      keyFeatures: [
        'Top App Categories by Installs:',
        'Games (28B Installs)',
        'Communication (17B Installs)',
        'Tools (11B Installs)',
        'App Type Breakdown:',
        'Free Apps: 92.67%',
        'Paid Apps: 7.33%',
        'Top Apps by Installs:',
        'Google Photos',
        'Hangouts',
        'Subway Surfers',
        'App Distribution by Content Rating:',
        'Majority rated "Everyone"',
        'Fewest apps are "Unrated" ',
      ],
      // modelEvaluation: [
      //   'Evaluated regression model performance using R² and adjusted R².',
      //   'Performed residual analysis for model diagnostics.',
      // ],
      insights:[
        'Category-wise Total Installs – Bar Chart',
        'Percentage of Free vs. Paid Apps – Pie Chart',
        'Sum of Reviews by Category – Stacked Column Chart',
        'Count of Apps by Content Rating – Tree Map',
        'Top Apps by Installs – Table',
        'Count of Apps by Category – Heatmap',
    ],
      challenges: [
        'Handling outliers in revenue and installs.',
        'Managing data inconsistencies in category names.',
        'Aggregating revenue for paid apps across different price points',
      ],
      tools: ['Power BI – Dashboard creation',
      'Excel – Initial data exploration',
      'SQL – Querying and retrieving cleaned data',
      'Python (Pandas, Matplotlib, Seaborn) – Data preprocessing and EDA'],
      results:[
        'Developed a dynamic Power BI dashboard that provides:',
        'Market trends & key insights into app categories and installs.',
        'Revenue distribution analysis for free vs. paid apps.',
        'Content rating analysis to understand audience segmentation.',
      ],
      futureImprovements: [
        'Incorporate real-time Play Store data updates.',
        'Use machine learning to predict app success based on ratings & reviews.',
        'Enhance category-wise revenue analysis for better monetization strategies.',
      ],
      },
      {
        id: 4,
        name: 'Sales Dashboard',
        image: sales2Img, // Correct image reference
        demoLink: 'https://your-demo-link.com/sales-dashboard', // Add proper demo link
        githubLink: 'https://github.com/vanshp17/SalesAnalysisForecasting', // Add GitHub link
        problemStatement: [
          'Royal Store wants to analyze sales performance, identify key trends, and forecast future sales to optimize business strategies.'
        ],
        objective: [
          'Develop an interactive Power BI dashboard to visualize sales insights and predict future sales trends for better decision-making.',
        ],
        dataCollection: [
          'Dataset: Sales data from 2019 & 2020 (Excel, ~6,000 rows).',
          'Preprocessing Steps:',
          'Cleaned missing values and removed duplicate records.',
          'Standardized date formats and corrected inconsistent entries.',
          'Engineered new features, such as average delivery time per regio',
        ],
        eda: [
          'Analyzed sales trends across different segments and regions.',
          'Visualized top-performing sub-categories using bar charts.',
          'Performed statistical analysis to detect seasonal trends & anomalies.',
        ],
        // modeling: [
        //   'Segmentation of sales data by region.',
        //   'Used time series forecasting to predict future sales trends.',
        // ],
        keyFeatures: [
          'Region-wise Sales Performance: Highest profit in West USA, lowest in South USA.',
          'Top-Selling Products: Phones, Chairs, and Binders contributed the most revenue.',
          'Sales by Segment: Consumer (48%), Corporate (33%), Home Office (19%).',
          'Payment Mode Breakdown: COD (43%), Online (35%), Cards (22%).',
        ],
        // modelEvaluation: [
        //   'Used RMSE and MAE for time series model evaluation.',
        //   'Confusion matrix for classification model evaluation.',
        // ],
        insights:[
          'Sales peaked in December 2020—suggests holiday promotions drive revenue.',
         'April 2020 profit decline despite high sales—possible discount-heavy strategy.',
          'Expanding operations in high-profit regions (California, New York, Texas) could boost revenue..',
        ],
        challenges: [
          'Data inconsistencies in sales records from different locations.',
          'Missing delivery data for some regions, requiring imputation.',
          'Balancing dashboard simplicity while maintaining data depth.',
        ],
        tools: ['Power BI – Data visualization & interactive dashboard creation',
          'Excel – EDA and data cleaning',
          'DAX (Data Analysis Expressions) – Custom metric calculations',
          'SQL – Querying and aggregating sales data]',
        ],
        results:[
          'Developed a dynamic Power BI sales dashboard with:',
        'Real-time sales trends',
        'Forecasting models for future sales prediction',
        'Regional performance insights.',
        ],
        futureImprovements: [
          'Incorporate real-time data feeds for live sales monitoring.',
        'Use machine learning models for more accurate forecasting.',
        'Enhance customer segmentation to improve targeted marketing strategies.',
        ],
      },
      // Add more data analyst projects here
    ],
    dataScientist: [
      {
        id: 1,
        name: 'Customer Churn Prediction',
        image: churnImg,
        demoLink: 'https://your-demo-link.com/churn-modeling',
        githubLink: 'https://github.com/vanshp17/customers-churn-prediction',
        problemStatement: [
          'Predict whether a customer will churn from an e-commerce platform based on their behavior and transaction history. The goal is to help businesses take proactive measures to retain customers and improve satisfaction.'
        ],
        objective: [
          'Develop a machine learning model to predict customer churn.',
          'Identify key factors contributing to customer churn.',
          'Provide actionable insights to improve customer retention strategies.',
        ],
        dataCollection: [
          'Used an Excel dataset containing customer behavior and transaction data.',
          'Handled missing values using appropriate imputation techniques.',
          'Feature engineering: Created new variables such as customer tenure and interaction frequency.',
          'Outlier detection & capping: Used boxplots and statistical methods to handle extreme values.',
          'Encoding categorical variables: Applied Label Encoding for categorical features.',
        ],
        eda: [
          'Analyzed customer behavior patterns and correlations with churn.',
          'Visualized key insights such as:',
          'Impact of tenure and order history on churn.',
          'Preferred payment modes and their relation to retention.',
          'Effect of cashback and coupons on customer loyalty',
        ],
        modeling: [
          'Trained multiple classification models, including:',
          'Logistic Regression',
          'Decision Tree Classifier',
         ' Random Forest Classifier',
         ' XGBoost Classifier',
         ' Addressed class imbalance using SMOTETomek from the imbalanced-learn library.',
],
        keyFeatures: ['Tenure – Longer tenure reduces churn likelihood.',
          'OrderCount & DaySinceLastOrder – Customers with frequent transactions are more loyal.',
          'SatisfactionScore – Higher scores indicate better retention rates.',
          'CashbackAmount & CouponUsed – Incentives impact customer loyalty.',
          'Complain – Customers with unresolved complaints have a higher churn rate',
        ],
        modelEvaluation: [
          'Used Accuracy Score, ROC AUC Score, Confusion Matrix, and Classification Report for performance evaluation.',
          'Random Forest & XGBoost performed best, achieving the highest accuracy and ROC AUC scores.',
        ],
        insights: [
          'Retention Strategies: Increase engagement for customers with low order counts.',
          'Personalized Offers: Provide cashback and coupon incentives for at-risk customers.',
          'Customer Support Improvement: Address complaints quickly to improve retention.',
        ],
        challenges: [
          'Data Imbalance: Majority of customers did not churn, requiring oversampling techniques.',
          'Feature Selection: Identifying the most impactful variables for model performance.', 
          ],
        tools: ['Python (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Plotly)', 'Jupyter Notebook for model training and analysis', 'Machine Learning Models: Logistic Regression, Decision Tree, Random Forest, XGBoost','Imbalanced-learn for handling class imbalance'],
        results: [
          'Achieved high prediction accuracy, with XGBoost providing the best performance.',
          'Business can now proactively identify at-risk customers and implement targeted retention strategies.',
        ],
        futureImprovements: ['Explore deep learning models for improved accuracy.',
          'Incorporate real-time customer interaction data for better insights.',
        ],
      },
      // Add more data scientist projects here
      
          {
            id: 2,
            name: 'T-20 World Cup Prediction',
            image: t20Img, // Replace with your actual image import
            demoLink: 'https://your-demo-link.com/fraud-prediction',
            githubLink: 'https://github.com/vanshp17/t20-world-cup-analysis',
            problemStatement: [
              'Predicting the final scores of T20 World Cup matches based on real-time match conditions using machine learning techniques.'
            ],
            objective: [
              'To develop a machine learning model that accurately predicts the final score of a T20 match using factors like batting team, bowling team, current score, overs, wickets, and match location.'
            ],
            dataCollection: [
              'Collected T20 match data from Kaggle',
              'Cleaned and preprocessed the dataset by handling missing values and duplicates.',
              "Extracted relevant match statistics, such as team performance, venue influence, and recent overs' impact."
            ],
            eda: [
              'Analyzed scoring trends across different teams and venues.',
              'Explored the impact of wickets lost and runs scored in the last 5 overs.',
              'Visualized key factors influencing match outcomes.',
            ],
            modeling: [
              'Built models using Logistic Regression, Random Forest, and Gradient Boosting.',
              'Utilized techniques like cross-validation and grid search for hyperparameter tuning.',
            ],
            keyFeatures: ['Batting team','Bowling team','City (match venue)','Current score','Overs completed','Wickets lost','Runs scored in the last 5 overs'],
            modelEvaluation: [
              'valuated models using RMSE (Root Mean Square Error).',
              'Compared different regression models for accuracy.',
            ],
            insights: ['Matches played in certain venues have higher scoring patterns.',
            'Losing early wickets significantly reduces predicted scores.',
            'The last 5-over performance is a key factor in determining final scores.'],
            challenges: [
              'Handling missing data and inconsistencies in match records.',
              'Managing venue-based differences in scoring patterns.',
              'Selecting the most influential features for accurate predictions',
            ],
            tools: ['Programming Languages: Python',
              'Libraries: Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, XGBoost',
              'Development Tools: Jupyter Notebook, Streamlit',
              'Visualization: Streamlit Web App'],
            results: ['Achieved a well-optimized score prediction model.',
              'Integrated the model into a Streamlit application for user-friendly predictions.',
            ],
            futureImprovements: [
              'Incorporate live match data for real-time score predictions.',
              'Enhance model accuracy using deep learning techniques.',
              'Expand the dataset to include more historical matches for better generalization.',
            ],
          },
          {
            id: 3,
            name: 'Laptop Price Prediction',
            image: laptop2Img, // Replace with your actual image import
            demoLink: 'https://your-demo-link.com/laptop-price-prediction',
            githubLink: 'https://github.com/vanshp17/laptop-price-predictor',
            problemStatement:'Predicting laptop prices based on specifications using a machine learning model and deploying it as a Streamlit web application.',
            objective: 'To develop an interactive web application that allows users to input laptop specifications and receive an estimated price prediction using a trained machine learning model.',
            dataCollection: [
              'Loaded the dataset (laptop_data.csv) and inspected for missing values and duplicates.',
              'Cleaned the data by dropping unnecessary columns and converting data types.',
              'Engineered new features such as:',
              'Touchscreen & IPS Display (Binary feature extraction)',
              'PPI (Pixels Per Inch) (Derived from screen resolution)',
              'CPU Brand (Extracted from CPU specifications)',
              'Memory Splitting (Separated HDD and SSD capacities',
            ],
            eda: [
              'Analyzed feature distributions and their impact on price.',
              'Identified correlations between laptop specifications and price.',
              'Visualized key insights using Seaborn and Matplotlib.',
            ],
            modeling: [
              'Trained multiple regression models, including: ',
              'Linear Regression,Ridge Regression,Lasso Regression,KNN (K-Nearest Neighbors),Decision Tree,Support Vector Machine (SVM),Random Forest,Extra Trees,AdaBoost,Gradient Boosting',
              'Used cross-validation and hyperparameter tuning to optimize model performance.',
            ],
            keyFeatures: ['Brand','Type','RAM','Weight','Touchscreen & IPS Display','Screen Size & Resolution','Operating System','CPU Brand','HDD & SSD Storage','GPU'],
            modelEvaluation: [
              'Evaluated models using R² Score and Mean Absolute Error (MAE).',
              'Selected the best-performing model and saved it as pipe.pkl for deployment.',
            ],
            insights: ['High-end brands and better GPUs significantly impact price.',
              'SSD storage contributes more to price variations than HDD.',
              'Screen resolution and PPI affect pricing due to display quality.',

            ],
            challenges: [
              'Handling categorical variables effectively for model training.',
              'Dealing with missing or inconsistent data in laptop specifications.',
              'Balancing model complexity with interpretability for accurate predictions.',
            ],
            tools: ['Programming Languages: Python',
              'Libraries: Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, XGBoost',
              'Development Tools: Jupyter Notebook, Streamlit',
              'Visualization: Streamlit Web App'
             ],
            results: 'The Gradient Boosting model achieved 92% accuracy, making it the best-performing model for laptop price prediction.',
            futureImprovements: [
              'Enhance the model by incorporating additional features.',
              'Experiment with deep learning models for improved accuracy.',
              'Improve UI/UX for better user experience.',
              'Add interactive visualizations for better data insights.',
            ],
          },
          {
            id: 4,
            name: 'Car Price Prediction',
            image: carImg, // Replace with your actual image import
            demoLink: 'https://your-demo-link.com/recommendation-system',
            githubLink: 'https://github.com/vanshp17/car-price-predictor',
            problemStatement:'Predict the price of a used car based on various features such as brand, model, year of purchase, fuel type, and kilometers driven. The goal is to assist buyers and sellers in estimating fair market value.',
            objective:['Build a machine learning model to predict car prices accurately.',
              'Develop a user-friendly web interface for price estimation.',
              'Deploy the model using Flask for real-time predictions.'],
            dataCollection: [
              'Collected used car listing data from a reliable dataset.',
              'Handled missing values and converted categorical features into numerical format.',
              'Engineered features such as car age, fuel type, and brand popularity.',
            ],
            eda: [
              'Analyzed price distribution across different brands and models.',
              'Visualized the impact of features like fuel type, kilometers driven, and car age on price.',
              'Identified data patterns to improve model performance.',
            ],
            modeling: [
              'Tested multiple regression models, including Linear Regression and Random Forest.',
              'Selected Gradient Boosting as the final model due to its superior performance.',
            ],
            keyFeatures: ['Car Brand & Model – Significant impact on pricing.',
              'Year of Purchase – Older cars tend to depreciate more.',
              'Fuel Type & Transmission – Affects demand and resale value.',
              'Kilometers Driven – More usage generally reduces price.',
            ],
            modelEvaluation: [
              'Evaluated models using R² score and Mean Absolute Error (MAE).',
             ' Gradient Boosting achieved the best performance with an R² score of 0.91.',
            ],
            insights: [
              'Cars with lower mileage and recent manufacturing years have higher resale values.',
'Diesel and petrol cars have different depreciation patterns.',
'Popular brands retain their value better than lesser-known brands.',
            ],
            challenges: [
              'Handling missing and inconsistent data across different car models.',
              'Accounting for external market factors affecting car prices.',
            ],
            tools: ['Python (Surprise, Pandas, NumPy)', 'Jupyter Notebook for  model training and analysis', 'Flask for web application deployment',
'HTML, Bootstrap for front-end development'],
            results: [
              'The model provides accurate car price predictions with 91% accuracy.',
              'The web application allows users to input car details and get instant price estimates.',
            ],
            futureImprovements: [
              'Integrate more features like car condition, insurance status, and accident history.',
              'Explore deep learning techniques for price prediction.',
            ],
          }
        
    
      
    ],
  };
  
  const ProjectDetail = ({ project }) => (
  <div className="project-detail">
    <h2>{project.name}</h2>
    <img src={project.image} alt={project.name} style={{ width: '60%', height: 'auto', margin: '20px 0' }} />
    
    <div className="project-links">
      {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
      {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>}
    </div>
    
    <h4>Problem Statement:</h4>
    <p>{project.problemStatement}</p>

    <h4>Objective:</h4>
    <p>{project.objective}</p>

    <h4>Project Scope:</h4>
    <ol>
      <li><strong>Data Collection & Preparation:</strong>
        <ul>
          {project.dataCollection?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </li>

      <li><strong>Exploratory Data Analysis (EDA):</strong>
        <ul>
          {project.eda?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </li>

      {/* ✅ Conditionally render Modeling Approach only if it exists */}
      {project.modeling && project.modeling.length > 0 && (
        <li><strong>Modeling Approach:</strong>
          <ul>
            {project.modeling.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </li>
      )}

      <li><strong>Key Features Identified:</strong>
        <ul>
          {project.keyFeatures?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </li>

      {/* ✅ Conditionally render Model Evaluation only if it exists */}
      {project.modelEvaluation && project.modelEvaluation.length > 0 && (
        <li><strong>Model Evaluation:</strong>
          <ul>
            {project.modelEvaluation.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </li>
      )}
    </ol>

    <h4>Insights & Recommendations:</h4>
    {/* <p>{project.insights}</p> */}
    <ul>
      {project.insights?.map((insights, index) => (
        <li key={index}>{insights}</li>
      ))}
    </ul>
    

    <h4>Challenges Faced:</h4>
    <ul>
      {project.challenges?.map((challenge, index) => (
        <li key={index}>{challenge}</li>
      ))}
    </ul>

    <h4>Tools & Technologies Used:</h4>
    <ul>
      {project.tools?.map((tool, index) => (
        <li key={index}>{tool}</li>
      ))}
    </ul>

    <h4>Results:</h4>
    <p>{project.results}</p>

    <h4>Future Improvements:</h4>
    <ul>
      {project.futureImprovements?.map((improvement, index) => (
        <li key={index}>{improvement}</li>
      ))}
    </ul>
  </div>
);

  

  
  
  const Projects = () => {
    const [selectedRole, setSelectedRole] = useState('dataAnalyst');
    const [selectedProject, setSelectedProject] = useState(null);
  
    const handleRoleChange = (role) => {
      setSelectedRole(role);
      setSelectedProject(null); // Reset selected project when changing roles
    };
  
    const handleProjectClick = (project) => {
      setSelectedProject(project);
    };
  
    return (
      <section id="projects" className="projects">
        <h2 className="projects-title">My Projects</h2>
        <div className="role-buttons">
          <button onClick={() => handleRoleChange('dataAnalyst')}>Data Analysis</button>
          <button onClick={() => handleRoleChange('dataScientist')}>Data Science</button>
        </div>
        {selectedProject ? (
          <ProjectDetail project={selectedProject} />
        ) : (
          <div className="projects-container">
            {projectsData[selectedRole].map(project => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => handleProjectClick(project)}
              >
                <img src={project.image} alt={project.name} />
                <h3>{project.name}</h3>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  };
  
  export default Projects;
  
  
