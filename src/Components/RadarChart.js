
import React, { Component } from "react";
import "chart.js/auto";
import { Radar } from "react-chartjs-2";

class RadarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    "Happy",
                    "Sad",
                    "Neutral",
                    "Angry",
                    "Surprised",
                    "Disgust",
                    "Fear"
                ],
                datasets: [
                    {
                        label: "Expressions",
                        data: [0.5, 2, 0.3, 9, 3, 2,0.4],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                            "rgba(255, 99, 131, 0.2)"
                        ]
                    }
                ]
            }
        };
    }

    render() {
        return (
            <div className="flex-row">
                <Radar
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false,
                    }}
                    height={500} width={500}
                />
            </div>
        );
    }
}

export default RadarChart;