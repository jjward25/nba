import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Papa from 'papaparse';

const JalenWilliams: React.FC = () => {
    const [playerName, setPlayerName] = useState<string>('Jalen Williams');
    const [playerStats, setPlayerStats] = useState<{ [key: string]: number }>({});
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (!playerName) return;

        // Load data from CSV
        Papa.parse('/player_stats_full.csv', {
            download: true,
            header: true,
            complete: (results) => {
                const filteredData = results.data.find((row) => (row as any).PLAYER_NAME === playerName);

                if (!filteredData) {
                    console.error(`Player with name '${playerName}' not found in the data.`);
                    return;
                }

                // Extract stats for the player
                const stats = {
                    // @ts-ignore
                    PTS: roundToTwoDecimals(1-(Number(filteredData.PTS_RANK)/572)),
                    // @ts-ignore
                    REB: roundToTwoDecimals(1-(Number(filteredData.REB_RANK)/572)),
                    // @ts-ignore
                    AST: roundToTwoDecimals(1-(Number(filteredData.AST_RANK)/572)),
                    // @ts-ignore
                    STL: roundToTwoDecimals(1-(Number(filteredData.STL_RANK)/572)),
                    // @ts-ignore
                    BLK: roundToTwoDecimals(1-(Number(filteredData.BLK_RANK)/572)),
                    // @ts-ignore
                    FG3_PCT: roundToTwoDecimals(1-(Number(filteredData.FG3_PCT_RANK)/572)),
                    // @ts-ignore
                    PLUS_MINUS: roundToTwoDecimals(1-(Number(filteredData.PLUS_MINUS_RANK)/572)),
                };

                setPlayerStats(stats);
            }
        });
    }, [playerName]);

    useEffect(() => {
        if (!svgRef.current || !playerStats) return;
    
        // Set up dimensions and scales
        const width = 200; // Adjusted width
        const height = 200; // Adjusted height
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };
        const radius = Math.min(width, height) / 2 - margin.top;
    
        const svg = d3.select(svgRef.current)
            .attr('width', width + margin.left + margin.right) // Adjusted width
            .attr('height', height + margin.top + margin.bottom) // Adjusted height
            .append('g')
            .attr('transform', `translate(${margin.left + width / 2}, ${margin.top + height / 2})`);
    
        const categories = Object.keys(playerStats);
    
        const maxValue = Math.max(...categories.map((key) => playerStats[key]));
        const angleSlice = Math.PI * 2 / categories.length;
    
        const radarLine = d3.lineRadial<number>()
            .radius((d) => radius * (d / maxValue))
            .angle((d, i) => i * angleSlice);
    
        const axis = svg.selectAll('.axis')
            .data(categories)
            .enter()
            .append('g')
            .attr('class', 'axis');
    
        axis.append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', (d, i) => radius * Math.cos(angleSlice * i - Math.PI / 2))
            .attr('y2', (d, i) => radius * Math.sin(angleSlice * i - Math.PI / 2))
            .attr('stroke', 'white')
            .attr('stroke-width', '1px');
    
        axis.append('text')
            .attr('x', (d, i) => (radius + 10) * Math.cos(angleSlice * i - Math.PI / 2)) // Adjusted position for label
            .attr('y', (d, i) => (radius + 10) * Math.sin(angleSlice * i - Math.PI / 2)) // Adjusted position for label
            .text((d, i) => `${d}: ${playerStats[d]}`) // Add value next to label
            .style('font-size', `${24 / Math.sqrt(categories.length)}px`) // Adjust font size based on number of categories
            .attr('text-anchor', 'middle')
            .attr('dy', '0.35em')
            .style('font-weight', 'bold')
            .style('fill', 'black');
    
        const radarArea = svg.append('g')
            .attr('class', 'radarArea');
    
        radarArea.append('path')
            .attr('class', 'radarAreaPath')
            .attr('d', radarLine(categories.map((key) => playerStats[key])))
            .style('fill', 'orange')
            .style('fill-opacity', 0.5);
    
        const radarPoint = svg.append('g')
            .attr('class', 'radarPoint');
    
        radarPoint.selectAll('circle')
            .data(categories)
            .enter()
            .append('circle')
            .attr('cx', (d, i) => radius * Math.cos(angleSlice * i - Math.PI / 2) * (playerStats[d] / maxValue))
            .attr('cy', (d, i) => radius * Math.sin(angleSlice * i - Math.PI / 2) * (playerStats[d] / maxValue))
            .attr('r', 3)
            .style('fill', 'black');
    
    }, [playerStats]);    
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value);
    };

    return (
        <div className='flex flex-col md:mr-4 rounded-lg mt-2 p-2 mx-0 border-2 border-orange-800 max-w-[250px]'>
            <input
                type="text"
                placeholder="Enter player name"
                value={playerName}
                onChange={handleInputChange}
                className='mb-2 bg-transparent font-semibold'
            />
            <svg className='m-auto' ref={svgRef}></svg>
        </div>
    );
};

export default JalenWilliams;

function roundToTwoDecimals(num: number) {
    return Math.round((num + Number.EPSILON) * 100) / 100;}