import React, { Component } from 'react'
import 'F:/React/ieee-pune-section-website/Front-End/src/components/About/StudentSocieties/StudentSocities.css';

export class StudentSocities extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card-holder">
                        <div className="image-holder">
                            <img src="https://specials-images.forbesimg.com/imageserve/5f302109ffad89f9130e07db/960x0.jpg?cropX1=0&cropX2=4800&cropY1=243&cropY2=2943" alt="Society Banner"></img>
                        </div>
                        <div className="text-holder">
                            <div className="m-3">
                                <h2 className="society-name">
                                    Society Name
                                </h2>
                                <div className="description">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy
                                        text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled
                                        it to make a type specimen book. It has survived
                                        not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset
                                        sheets containing Lorem Ipsum passages, and more recently with
                                        desktop publishing software like Aldus PageMaker including versions
                                        of Lorem Ipsum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentSocities
