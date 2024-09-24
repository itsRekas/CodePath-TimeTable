import React from 'react'
import Event from './Event'

const Calendar = ()=> {
  return (
    <div className="Calender">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='time'>8am</td>
                    <Event event='Fancy Diner' color="green"/>
                    <td></td>
                    <td></td>
                    <Event event='Fancy Dinner 🎩' color="" location='Maple & Ash'/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>9 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' color ='red'/>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>10 am</td>
                    <td></td>
                    <td></td>
                    <Event event='The Bean 🫘' color ='blue'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>11 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>12 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Starbucks ☕️' color ='green'/>
                </tr>
                <tr>
                    <td className='time'>1 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>2 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>3 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>4 am</td>
                </tr>
                <tr>
                    <td className='time'>5 am</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Calendar