import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { SearchSection } from "../Components/jobsection/SearchSection";
import { Card } from "../Components/jobsection/card/Card";
import JobList from "./JobList";
import styles from "./Jobs.module.css";
import { Sidebar } from "../sidebar/Sidebar";
import { BASE_URL } from "../services/baseUrl";
function Jobs() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/all-jobs`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setJobs(data);
        setLoading(false);
      });
  }, []);

  // console.log(jobs);

  const [query, setQuery] = useState("");
  // console.log(query);

  // category by title

  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // console.log(filteredItems);

  // radio button filter

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // button filter

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // calculate index page range

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

    return { startIndex, endIndex };
  };

  // next page  logic
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // previos page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // main function

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }

    // category filtering

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );

      console.log(filteredJobs);
    }

    // slice data based on currentpage
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, index) => <Card key={index} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <>
      <Header />
      <SearchSection query={query} setQuery={setQuery} />

      {/* main content */}
      <div className={styles.jobs}>
        <div className={styles.left}>
          {loading ? (
            <p>Loading..</p>
          ) : result.length > 0 ? (
            <JobList result={result} />
          ) : (
            <>
              <h4>{result.length} Jobs</h4>
              <p>No data found</p>
            </>
          )}
        </div>
        <div className={styles.right}>
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
      </div>

      {/* pagination */}
      {result.length > 0 ? (
        <div className={styles.pagination}>
          <button onClick={previousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of{" "}
            {Math.ceil(filteredItems.length / itemsPerPage)}
          </span>
          <button
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(filteredItems.length / itemsPerPage)
            }
          >
            Next
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Jobs;
