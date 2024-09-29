import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/Home.module.css'

const HomePage = () => {
  return (
      <div className={styles.container}>
        <div className={styles.image_section}>
            <h1>AI-Powered Plagiarism Detection</h1>
        </div>
        <div className={styles.content_section}>
          <header>
            <h1>Real-time AI-powered plagiarism detection for accuracy and reliability</h1>
            <h2>What Sets Us Apart</h2>
            <section className={styles.features}>
              
              <ul>
                <li><strong>Real-time Detection</strong> <p>Instantly scan and analyze documents for potential plagiarism. Our AI-powered engine processes content in real time, providing immediate feedback without the need for long waiting periods.</p></li>
                <li><strong>High Accuracy</strong> <p>Leveraging advanced natural language processing (NLP) algorithms, our system ensures unparalleled accuracy by comparing your content against a vast database of academic papers, online resources, and other publications, delivering precise results.</p></li>
                <li><strong>Detailed Plagiarism Reports</strong> <p>Receive comprehensive reports that highlight plagiarized content, the original sources, and a similarity percentage. The report also provides suggestions for improving the content and ensuring originality.</p></li>
              </ul>
            </section>
            <Link to="/detect">
              <button>Upload Your Document</button>
            </Link>
          </header>
          
          <footer>
            <p>&copy; 2024 AI Plagiarism Detector</p>
          </footer>
        </div>
      </div>
  );
};

export default HomePage;
