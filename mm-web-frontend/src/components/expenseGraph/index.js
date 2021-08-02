
import React from "react";
import { colors } from "../../assets/css/colors";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class ExpenseGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { } = this.props;

        return (
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: '100%',
                }}
            >

                <div style={{ flex: 2, display: 'flex', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ height: 230, width: 230, backgroundColor: '#fff' }}>
                        <CircularProgressbar
                            value={50}
                            strokeWidth={5.5}
                            styles={buildStyles({
                                pathColor: '#7B2DE4',
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                            })}
                        >
                        </CircularProgressbar>
                    </div>

                    <div style={{ height: 190, width: 190, position: 'absolute' }}>
                        <CircularProgressbar
                            value={90}
                            strokeWidth={5.5}
                            styles={buildStyles({
                                pathColor: `rgba(2, 219, 155)`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                            })}
                        >
                        </CircularProgressbar>
                    </div>

                    <div style={{ position: 'absolute', fontSize: 18, textAlign: 'center' }}><span style={{ color: "#7B2DE4" }}>₹40000</span> <br />of<br /><span style={{ color: "#02DB9B" }}> ₹58000</span></div>
                </div>


                <div style={{
                    flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderLeft: "1.5px solid #eee", justifyContent: 'center', alignItems: 'center'
                }}>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ height: 26, width: 26, backgroundColor: '#7B2DE4', borderRadius: 6 }}></div>
                        <div style={{ color: "#9EA2A6", marginLeft: 12, fontSize: 18, fontWeight: 600 }}>Budget</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 26 }}>
                        <div style={{ height: 26, width: 26, backgroundColor: '#02DB9B', borderRadius: 6 }}></div>
                        <div style={{ color: "#9EA2A6", marginLeft: 12, fontSize: 18, fontWeight: 600 }}>Budget</div>
                    </div>
                </div>
            </div >
        );
    }
}

export default ExpenseGraph;
