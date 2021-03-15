import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import buildChart from '../../utils/buildChart';
import langColors from '../../utils/langColors';
import {
    SimpleGrid
} from '@chakra-ui/react'

const Charts = ({ langData, repoData }) => {
    // Create chart with langData
    const [langChartData, setLangChartData] = useState(null);
    const initLangChart = () => {
        const ctx = document.getElementById('langChart');
        const labels = langData.map(lang => lang.label);
        const data = langData.map(lang => lang.value);

        setLangChartData(data);

        if (data.length > 0) {
            const backgroundColor = langData.map(
                ({ color }) => `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`,
            );
            const borderColor = langData.map(lang => `${lang.color}`);
            const chartType = 'pie';
            const axes = false;
            const legend = true;
            const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
            buildChart(config);
        }
    };

    // Create Most Starred chart
    const [starChartData, setStarChartData] = useState(null);
    const initStarChart = () => {
        const ctx = document.getElementById('starChart');
        const LIMIT = 5;
        const sortProperty = 'stargazers_count';
        const mostStarredRepos = repoData
            .filter(repo => !repo.fork)
            .sort((a, b) => b[sortProperty] - a[sortProperty])
            .slice(0, LIMIT);
        const labels = mostStarredRepos.map(repo => repo.name);
        const data = mostStarredRepos.map(repo => repo[sortProperty]);

        setStarChartData(data);

        if (data.length > 0) {
            const chartType = 'bar';
            const axes = true;
            const legend = false;
            const backgroundColor = [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
            ]
            const borderColor = [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ]
            const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
            buildChart(config);
        }
    };

    // Create Stars per language chart
    const [thirdChartData, setThirdChartData] = useState(null);
    const initThirdChart = () => {
        const ctx = document.getElementById('thirdChart');
        const filteredRepos = repoData.filter(repo => !repo.fork && repo.stargazers_count > 0);
        const uniqueLangs = new Set(filteredRepos.map(repo => repo.language));
        const labels = Array.from(uniqueLangs.values()).filter(l => l);
        const data = labels.map(lang => {
            const repos = filteredRepos.filter(repo => repo.language === lang);
            const starsArr = repos.map(r => r.stargazers_count);
            const starSum = starsArr.reduce((a, b) => a + b, 0);
            return starSum;
        });

        setThirdChartData(data);

        if (data.length > 0) {
            const chartType = 'doughnut';
            const axes = false;
            const legend = true;
            const borderColor = labels.map(label => langColors[label]);
            const backgroundColor = borderColor.map(color => `${color}B3`);
            const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
            buildChart(config);
        }
    };

    useEffect(() => {
        if (langData.length && repoData.length) {
            initLangChart();
            initStarChart();
            initThirdChart();
        }
    }, []);

    const chartSize = 300;
    const langChartError = !(langChartData && langChartData.length > 0);
    const starChartError = !(starChartData && starChartData.length > 0);
    const thirdChartError = !(thirdChartData && thirdChartData.length > 0);

    return (
        <SimpleGrid columns={[1, 1, 2]} w="100%">
            <div className="chart">
                <header>
                    <h2 style={{ textAlign: 'center' }}>Top Languages</h2>
                </header>

                <div className="chart-container">
                    {langChartError && <p>Nothing to see here!</p>}
                    <canvas id="langChart" width={chartSize} height={chartSize} />
                </div>
            </div>

            <div className="chart">
                <header>
                    <h2 style={{ textAlign: 'center' }}>Most Starred</h2>
                </header>
                <div className="chart-container">
                    {starChartError && <p>Nothing to see here!</p>}
                    <canvas id="starChart" width={chartSize} height={chartSize} />
                </div>
            </div>

            <div className="chart">
                <header>
                    <h2 style={{ textAlign: 'center' }}>Stars per Language</h2>
                </header>
                <div className="chart-container">
                    {thirdChartError && <p>Nothing to see here!</p>}
                    <canvas id="thirdChart" width={chartSize} height={chartSize} />
                </div>
            </div>
        </ SimpleGrid>
    );
};

Charts.propTypes = {
    langData: PropTypes.array.isRequired,
    repoData: PropTypes.array.isRequired,
};

export default Charts;