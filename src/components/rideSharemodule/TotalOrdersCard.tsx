'use client';

import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useRef } from 'react';

const TotalOrdersCard = () => {
    const chartRef = useRef(null);

      useEffect(() => {
        if (chartRef.current) {
          const chart = chartRef.current;
          const ctx = chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(215, 198, 238, 1)"); // Light blue
          gradient.addColorStop(1, "rgba(247, 247, 247, 0)"); // Transparent
    
          chart.data.datasets[0].backgroundColor = gradient;
          chart.update();
        }
      }, []);
      
    const data = {
        labels: ['12-05-2024', '13-05-2024', '14-05-2024', '15-05-2024', '16-05-2024', '17-05-2024'],
        datasets: [
            {
                label: 'Orders',
                data: [1, 50, 20, 70, 48, 100],
                borderColor: '#6A0DAD',
                backgroundColor: 'rgba(106, 13, 173, 0.2)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#6A0DAD',
                pointBorderColor: '#fff',
                pointRadius: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (tooltipItem) => ` ${tooltipItem.raw}`,
                },
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
    };
    
    return (
        <div className='card-total-ride custom-card'>
            <div className='table-top d-flex justify-content-between gap-3'>
                <div className='left-table  position-relative'>
                    <h6 className="text-secondary">Total Orders</h6>
                    <h3 className="text-primary">4568</h3>
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
            <div style={{ height: '150px' }}>
                <Line ref={chartRef} data={data} options={options} />
            </div>
        </div>
    );
};

export default TotalOrdersCard;
