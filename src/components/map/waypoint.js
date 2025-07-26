import React, { useState, useEffect } from 'react';
import yellow from '../../interface/images/waypoints/yellow.png';
import purple from '../../interface/images/waypoints/purple.png';
import red from '../../interface/images/waypoints/red.png';
import green from '../../interface/images/waypoints/green.png';
import blue from '../../interface/images/waypoints/blue.png';

export default ({ waypoint, block }) => {

    // WAYPOINT MAPPING
    const mapping = {
        quest: yellow,
        travel: purple,
        objective: red,
        flightpath: green,
        hub: blue
    }

    // LOCAL STATE
    const [local, set_local] = useState({
        alignment: null,
        number: null,
        position: {},
        source: null
    })

    // GENERATE APPROPARIATE CONTENT
    useEffect(() => {

        // UPDATE LOCAL STATE
        set_local({
            alignment: (waypoint.align === undefined) ? 'left' : waypoint.align,
            number: block + 1,
            position: {
                left: waypoint.coords.x + '%',
                top: waypoint.coords.y + '%'
            },
            source: mapping[waypoint.type]
        })

    }, [waypoint, block])

    return (
        <foreignObject x={ local.position.left } y={ local.position.top } width="30" height="30">
            <div className={ 'waypoint' }>
                <img
                    src={ local.source }
                    alt={ '' }
                />
                <span className="waypoint-number">{ local.number }</span>
            </div>
        </foreignObject>
    )
}