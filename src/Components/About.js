import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function About() {
  const randomSalesData = [
    { year: 2020, sales: 12000 },
    { year: 2021, sales: 15000 },
    { year: 2022, sales: 18000 },
    { year: 2023, sales: 22000 },
  ];

  const years = randomSalesData.map(data => data.year);
  const sales = randomSalesData.map(data => data.sales);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Yearly Sales',
        data: sales,
        fill: false,
        borderColor: '#4CAF50',
        tension: 0.1,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales Growth Over the Years',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw.toLocaleString()} bottles`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
          },
          callback: (value) => `${value.toLocaleString()} bottles`,
        },
      },
    },
  };

  return (
    <div className="bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-5">About Our Product</h1>
      
      <p className="text-lg text-gray-700 mb-6">
        At Botol, we believe in the power of hydration. Our innovative and premium quality bottles are designed not only to keep you hydrated but also to make a statement. With a sleek, modern design and a variety of customizable options, our bottles provide functionality and style for every occasion.
      </p>
      
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Quality That Speaks For Itself</h2>
      <p className="text-lg text-gray-700 mb-6">
        We use the highest-grade materials to craft our bottles, ensuring that every bottle is durable, long-lasting, and safe to use. Our bottles are made with BPA-free plastics and stainless steel that retain the freshness and temperature of your beverages, whether hot or cold. With superior insulation technology, we offer bottles that keep your drink at the perfect temperature for hours. We are proud to say our products are crafted with care, precision, and sustainability in mind.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Success: Yearly Sales Reports</h2>
      <p className="text-lg text-gray-700 mb-6">
        Over the years, Botol has seen incredible growth, and we owe it all to our loyal customers and their trust in our product. Here are some of our highlights over the last few years:
      </p>

      <div className="mb-10">
        <Line data={data} options={options} />
      </div>

      <ul className="list-disc pl-6 text-lg text-gray-700">
        {randomSalesData.map((data, index) => (
          <li key={index} className="mb-2">
            <strong>{data.year}:</strong> {data.sales.toLocaleString()} bottles sold.
          </li>
        ))}
      </ul>

      <p className="text-lg text-gray-700 mt-6">
        We are thrilled to continue growing and evolving with the support of our customers. Every year, we strive to provide the best products and continue to lead the market with exceptional designs and unmatched quality. Join us in this hydration revolution and experience the difference.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Global Reach</h2>
      <p className="text-lg text-gray-700 mb-6">
        Botol has become a household name worldwide. Our products have reached over 30 countries, from the United States to Japan, and are now being used by millions of satisfied customers. Whether you're an athlete, a busy professional, or someone who values staying hydrated, our bottles are designed for all. 
      </p>
      <p className="text-lg text-gray-700 mb-6">
        We are proud to be part of an emerging global movement towards sustainability. With a focus on eco-friendly materials and reusable options, our bottles help reduce single-use plastic waste and contribute to a greener, healthier planet.
      </p>
      
      <div className="mt-10 text-center text-lg text-gray-700">
        <p className="font-semibold">About Me:</p>
        <p>
          Developed by <strong>Indresh Verma</strong>, a student of Computer Science at NIT Raipur. 
          I am passionate about technology and innovation, and this project is a reflection of my dedication to creating meaningful products.
        </p>
      </div>
    </div>
  );
}

export default About;
