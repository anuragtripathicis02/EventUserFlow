"use client";
import { Doughnut } from "react-chartjs-2";
import Dropdown from 'react-bootstrap/Dropdown';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalRidesChart = () => {
  const data = {
    labels: ["Cancelled Rides", "Completed Rides", "Ongoing Rides"],
    datasets: [
      {
        data: [165, 145, 100], // Values from image
        backgroundColor: ["#6A0DAD", "#00C49F", "#FF8C00"], // Custom colors
        hoverBackgroundColor: ["#5a0c90", "#009f80", "#e07b00"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%", // Creates a donut effect
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#333",
        bodyColor: "#333",
        borderColor: "#ddd",
        borderWidth: 1,
        callbacks: {
          label: (tooltipItem) =>
            ` ${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div className="custom-card">
         <div className='table-top d-flex align-items-center justify-content-between gap-3'>
            <div className='left-table  position-relative'>
                <h2>Total Rides/Jobs</h2>
            </div>
            <div className='right-box'>
                <Dropdown className="dropdown-box dot-dropdown" align={'end' } >
                    <Dropdown.Toggle id="dropdown-basic">
                        <svg width="4" height="15" viewBox="0 0 4 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.305 14.79C1.44147 14.8822 1.59482 14.9465 1.75623 14.9793C1.91765 15.0121 2.08394 15.0126 2.24557 14.9809C2.40719 14.9491 2.56094 14.8858 2.698 14.7945C2.83506 14.7031 2.95272 14.5856 3.04421 14.4487C3.13571 14.3117 3.19924 14.158 3.23114 13.9964C3.26305 13.8348 3.26271 13.6686 3.23014 13.5071C3.19758 13.3456 3.13342 13.1922 3.04137 13.0556C2.94932 12.9191 2.83118 12.802 2.69375 12.7113C2.41827 12.5419 2.08786 12.4859 1.77195 12.555C1.45604 12.6241 1.17921 12.8129 0.999603 13.0819C0.819999 13.3508 0.751603 13.6788 0.808784 13.9971C0.865966 14.3154 1.04427 14.5992 1.30625 14.7888L1.305 14.79ZM2 8.75C1.66848 8.75 1.35054 8.6183 1.11612 8.38388C0.881696 8.14946 0.75 7.83152 0.75 7.5C0.75 7.16848 0.881696 6.85054 1.11612 6.61612C1.35054 6.3817 1.66848 6.25 2 6.25C2.33152 6.25 2.64946 6.3817 2.88388 6.61612C3.1183 6.85054 3.25 7.16848 3.25 7.5C3.25 7.83152 3.1183 8.14946 2.88388 8.38388C2.64946 8.6183 2.33152 8.75 2 8.75ZM2 2.5C1.66848 2.5 1.35054 2.3683 1.11612 2.13388C0.881696 1.89946 0.75 1.58152 0.75 1.25C0.75 0.918479 0.881696 0.600537 1.11612 0.366116C1.35054 0.131696 1.66848 0 2 0C2.33152 0 2.64946 0.131696 2.88388 0.366116C3.1183 0.600537 3.25 0.918479 3.25 1.25C3.25 1.58152 3.1183 1.89946 2.88388 2.13388C2.64946 2.3683 2.33152 2.5 2 2.5Z" fill="#161925"/></svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="fixed-box ">
                        <Dropdown.Item href="#">
                        Canalled Rides
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                        Completed Rides
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                        On Going Rides
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div className="chart-box d-flex align-items-center justify-content-between">
            <div className="chart-container">
                <Doughnut data={data} options={options} />
            </div>
            <div className="chart-legend">
                <div className="legend-item d-flex gap-2">
                    <div className="legend-left">
                        <span className="legend-color" style={{ backgroundColor: "#6A0DAD" }}></span>
                        <h5>Cancelled Rides: </h5>
                        <h6>165</h6>
                    </div>
                    <Link href="" className="arrow">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 5.625C7.83428 5.625 7.6753 5.55915 7.55809 5.44194C7.44088 5.32473 7.37504 5.16576 7.37504 5C7.37504 4.83424 7.44088 4.67527 7.55809 4.55806C7.6753 4.44085 7.83428 4.375 8.00004 4.375H15.5C15.6658 4.375 15.8248 4.44085 15.942 4.55806C16.0592 4.67527 16.125 4.83424 16.125 5V12.5C16.125 12.6658 16.0592 12.8247 15.942 12.9419C15.8248 13.0592 15.6658 13.125 15.5 13.125C15.3343 13.125 15.1753 13.0592 15.0581 12.9419C14.9409 12.8247 14.875 12.6658 14.875 12.5V6.50833L5.9417 15.4417C5.82322 15.5521 5.66652 15.6122 5.5046 15.6093C5.34268 15.6065 5.18819 15.5409 5.07368 15.4264C4.95917 15.3118 4.89358 15.1574 4.89072 14.9954C4.88787 14.8335 4.94797 14.6768 5.05837 14.5583L13.9917 5.625H8.00004Z" fill="#6200EE"/></svg>
                    </Link>
                </div>
                <div className="legend-item d-flex gap-2">
                    <div className="legend-left">
                        <span className="legend-color" style={{ backgroundColor: "#00C49F" }}></span>
                        <h5>Completed Rides: </h5>
                        <h6>145</h6>
                    </div>
                    <Link href="" className="arrow">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 5.625C7.83428 5.625 7.6753 5.55915 7.55809 5.44194C7.44088 5.32473 7.37504 5.16576 7.37504 5C7.37504 4.83424 7.44088 4.67527 7.55809 4.55806C7.6753 4.44085 7.83428 4.375 8.00004 4.375H15.5C15.6658 4.375 15.8248 4.44085 15.942 4.55806C16.0592 4.67527 16.125 4.83424 16.125 5V12.5C16.125 12.6658 16.0592 12.8247 15.942 12.9419C15.8248 13.0592 15.6658 13.125 15.5 13.125C15.3343 13.125 15.1753 13.0592 15.0581 12.9419C14.9409 12.8247 14.875 12.6658 14.875 12.5V6.50833L5.9417 15.4417C5.82322 15.5521 5.66652 15.6122 5.5046 15.6093C5.34268 15.6065 5.18819 15.5409 5.07368 15.4264C4.95917 15.3118 4.89358 15.1574 4.89072 14.9954C4.88787 14.8335 4.94797 14.6768 5.05837 14.5583L13.9917 5.625H8.00004Z" fill="#6200EE"/></svg>
                    </Link>
                </div>
                <div className="legend-item d-flex gap-2">
                    <div className="legend-left">
                        <span className="legend-color" style={{ backgroundColor: "#FF8C00" }}></span>
                        <h5>Ongoing Rides:</h5>
                        <h6>100</h6>
                    </div>
                    <Link href="" className="arrow">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 5.625C7.83428 5.625 7.6753 5.55915 7.55809 5.44194C7.44088 5.32473 7.37504 5.16576 7.37504 5C7.37504 4.83424 7.44088 4.67527 7.55809 4.55806C7.6753 4.44085 7.83428 4.375 8.00004 4.375H15.5C15.6658 4.375 15.8248 4.44085 15.942 4.55806C16.0592 4.67527 16.125 4.83424 16.125 5V12.5C16.125 12.6658 16.0592 12.8247 15.942 12.9419C15.8248 13.0592 15.6658 13.125 15.5 13.125C15.3343 13.125 15.1753 13.0592 15.0581 12.9419C14.9409 12.8247 14.875 12.6658 14.875 12.5V6.50833L5.9417 15.4417C5.82322 15.5521 5.66652 15.6122 5.5046 15.6093C5.34268 15.6065 5.18819 15.5409 5.07368 15.4264C4.95917 15.3118 4.89358 15.1574 4.89072 14.9954C4.88787 14.8335 4.94797 14.6768 5.05837 14.5583L13.9917 5.625H8.00004Z" fill="#6200EE"/></svg>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TotalRidesChart;
