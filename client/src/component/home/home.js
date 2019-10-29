import React from 'react'
import { Pie, Bar, Line } from 'react-chartjs-2';


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            barChartData: {
                labels: ['IT', 'Market', 'Transport', 'HR', 'Bussiness'],
                datasets: [
                    {
                        label: 'Tickets By department',
                        data: [12, 15, 8, 12, 13],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.4)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.4)',
                            'rgba(153, 102, 255, 0.3)',
                            'rgba(255, 159, 64, 0.5)'
                        ]
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Ticket Master Dashboard</h2>
                <hr />
                <div className="row">
                    <div className="col-md-6"> Bar Chart
                    <Bar
                            data={this.state.barChartData}
                            width={100}
                            height={50}
                        // options={{ maintainAspectRatio: false }}
                        />
                    </div>
                    <div className="col-md-6">Pie Chart
                    <Pie
                            data={this.state.barChartData}
                            width={100}
                            height={50}
                        // options={{ maintainAspectRatio: false }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home



// export default function Home(){
//     return(
        // <div className="container">
        //     <h1>Ticket Master Dashboard</h1>
        //     <div className="row">
        //     <div className="col-md-6"> Pie Chart</div>
        //     <div className="col-md-6">Bar Chart</div>

        //     </div>
        // </div>
//     )
// }